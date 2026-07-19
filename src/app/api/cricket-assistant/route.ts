import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import {
  buildCricketAssistantSystemPrompt,
  getFallbackAssistantReply,
  sanitizeAssistantActions,
  type AssistantMessageInput,
  type AssistantReply,
} from "@/lib/cricketAssistant";

export const runtime = "nodejs";

const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1_000;
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 12;

const requestLog = new Map<string, number[]>();

const responseSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    answer: {
      type: "string",
      description: "A concise, customer-facing answer grounded in the catalogue.",
    },
    actions: {
      type: "array",
      maxItems: 3,
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          label: { type: "string" },
          href: { type: "string" },
        },
        required: ["label", "href"],
      },
    },
    followUp: {
      type: "string",
      description: "One short optional question that advances the sale or fitting.",
    },
  },
  required: ["answer", "actions"],
};

function getClientId(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local"
  );
}

function isRateLimited(clientId: string) {
  const now = Date.now();
  if (requestLog.size > 5_000) requestLog.clear();

  const recent = (requestLog.get(clientId) ?? []).filter(
    (timestamp) => now - timestamp < RATE_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT) {
    requestLog.set(clientId, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(clientId, recent);
  return false;
}

function parseMessages(value: unknown): AssistantMessageInput[] | null {
  if (!Array.isArray(value) || value.length === 0) return null;

  const parsed = value.slice(-MAX_MESSAGES).flatMap((message) => {
    if (!message || typeof message !== "object") return [];
    if (
      !("role" in message) ||
      (message.role !== "user" && message.role !== "assistant") ||
      !("content" in message) ||
      typeof message.content !== "string"
    ) {
      return [];
    }

    const content = message.content.trim().slice(0, MAX_MESSAGE_LENGTH);
    return content ? [{ role: message.role, content }] : [];
  });

  if (!parsed.length || parsed[parsed.length - 1]?.role !== "user") {
    return null;
  }

  return parsed;
}

function normalizeReply(value: unknown): AssistantReply | null {
  if (!value || typeof value !== "object" || !("answer" in value)) return null;
  if (typeof value.answer !== "string" || !value.answer.trim()) return null;

  const followUp =
    "followUp" in value && typeof value.followUp === "string"
      ? value.followUp.trim().slice(0, 240)
      : undefined;

  return {
    answer: value.answer.trim().slice(0, 1_800),
    actions: sanitizeAssistantActions(
      "actions" in value ? value.actions : undefined
    ),
    ...(followUp ? { followUp } : {}),
  };
}

function catalogueResponse(question: string, notice?: string) {
  return Response.json({
    ...getFallbackAssistantReply(question),
    mode: "catalogue",
    ...(notice ? { notice } : {}),
  });
}

export async function POST(request: Request) {
  const clientId = getClientId(request);
  if (isRateLimited(clientId)) {
    return Response.json(
      { error: "Please wait a moment before sending another message." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages =
    body && typeof body === "object" && "messages" in body
      ? parseMessages(body.messages)
      : null;

  if (!messages) {
    return Response.json(
      { error: "Please send a valid message." },
      { status: 400 }
    );
  }

  const latestQuestion = messages[messages.length - 1].content;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return catalogueResponse(latestQuestion);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || "gemini-3.5-flash",
      contents: messages.map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [{ text: message.content }],
      })),
      config: {
        systemInstruction: buildCricketAssistantSystemPrompt(),
        maxOutputTokens: 2_048,
        responseMimeType: "application/json",
        responseJsonSchema: responseSchema,
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.MINIMAL,
        },
      },
    });

    const rawText = response.text?.trim();
    if (!rawText) {
      throw new Error("Gemini returned an empty response.");
    }

    const reply = normalizeReply(JSON.parse(rawText));
    if (!reply) {
      throw new Error("Gemini returned an invalid response.");
    }

    return Response.json({ ...reply, mode: "ai" });
  } catch (error) {
    console.error("Cricket assistant request failed:", error);
    return catalogueResponse(
      latestQuestion,
      "Personalised AI guidance is temporarily unavailable, so this answer uses the verified ZA Cricket catalogue."
    );
  }
}
