import { CONTACT_INBOX } from "@/lib/contact";

export const runtime = "nodejs";

const SUBJECTS = new Set([
  "General Enquiry",
  "Custom Bat Order",
  "Product Question",
  "Exchange / Replacement",
  "Sponsorship",
]);

const MAX_NAME = 120;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 4_000;
const RATE_WINDOW_MS = 10 * 60_000;
const RATE_LIMIT = 5;

const requestLog = new Map<string, number[]>();

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || "local";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    requestLog.set(key, recent);
    return true;
  }
  recent.push(now);
  requestLog.set(key, recent);
  return false;
}

export async function POST(request: Request) {
  if (isRateLimited(clientKey(request))) {
    return Response.json(
      { error: "Too many messages. Please try again in a few minutes, or WhatsApp us." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  if (typeof data.company === "string" && data.company.trim()) {
    return Response.json({ ok: true });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const subject = typeof data.subject === "string" ? data.subject.trim() : "General Enquiry";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }

  if (
    name.length > MAX_NAME ||
    email.length > MAX_EMAIL ||
    message.length > MAX_MESSAGE ||
    !SUBJECTS.has(subject) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const origin = request.headers.get("origin") || "https://za-cricket.vercel.app";

  let response: Response;
  try {
    response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_INBOX)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: `${origin}/contact`,
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `[ZA Cricket] ${subject}`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
        }),
      }
    );
  } catch {
    return Response.json(
      { error: "We couldn't send that just now. Please try again, or WhatsApp us." },
      { status: 502 }
    );
  }

  const result = (await response.json().catch(() => null)) as { success?: string } | null;
  if (!response.ok || result?.success !== "true") {
    return Response.json(
      { error: "We couldn't send that just now. Please try again, or WhatsApp us." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
