"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChatCircleDots,
  CircleNotch,
  PaperPlaneTilt,
  Sparkle,
  Trash,
  X,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import type { AssistantAction, AssistantMessageInput } from "@/lib/cricketAssistant";

interface ChatMessage extends AssistantMessageInput {
  id: string;
  actions?: AssistantAction[];
  notice?: string;
}

interface AssistantApiResponse {
  answer?: string;
  actions?: AssistantAction[];
  followUp?: string;
  notice?: string;
  mode?: "ai" | "catalogue";
  error?: string;
}

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi, I’m the ZA Cricket Assistant. I can compare gear, explain delivery, or help fit your custom Signature bat.",
};

const starterPrompts = [
  "Help me choose a bat",
  "Customise my Signature",
  "Compare batting gloves",
  "Explain delivery",
];

export function CricketAssistant() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"ai" | "catalogue" | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isProductPage = pathname.startsWith("/product/");
  const positionClass = isProductPage
    ? "bottom-24 sm:bottom-6"
    : "bottom-5 sm:bottom-6";

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const clearConversation = () => {
    setMessages([welcomeMessage]);
    setMode(null);
    setInput("");
    inputRef.current?.focus();
  };

  const sendMessage = async (preset?: string) => {
    const content = (preset ?? input).trim();
    if (!content || isLoading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: content.slice(0, 1_000),
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/cricket-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((message) => message.id !== "welcome")
            .slice(-12)
            .map(({ role, content: messageContent }) => ({
              role,
              content: messageContent,
            })),
        }),
      });

      const data = (await response.json()) as AssistantApiResponse;
      if (!response.ok || !data.answer) {
        throw new Error(data.error || "The assistant could not respond.");
      }

      const reply = [data.answer, data.followUp].filter(Boolean).join("\n\n");
      setMode(data.mode ?? null);
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: reply,
          actions: data.actions,
          notice: data.notice,
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "I’m having trouble connecting. Please try again or contact ZA Cricket.",
          actions: [{ label: "Contact ZA Cricket", href: "/contact" }],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <section
          role="dialog"
          aria-label="ZA Cricket sales assistant"
          aria-modal="false"
          className={`fixed z-50 inset-x-3 sm:inset-x-auto sm:right-6 ${isProductPage ? "bottom-[9.5rem] sm:bottom-20" : "bottom-20"} flex h-[min(72dvh,650px)] sm:h-[min(76vh,650px)] sm:w-[410px] flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-white shadow-[0_28px_90px_-24px_rgba(28,12,40,0.55)]`}
        >
          <header className="relative overflow-hidden bg-brand px-5 pb-5 pt-4 text-white">
            <div className="absolute inset-0 opacity-40 pattern-dots-light" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg">
                <Image
                  src="/images/za-cricket-logo.png"
                  alt=""
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="truncate text-base font-bold">
                    ZA Cricket Assistant
                  </h2>
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_0_3px_rgba(110,231,183,0.18)]" />
                </div>
                <p className="mt-0.5 text-xs text-white/75">
                  {mode === "ai"
                    ? "Gemini-powered cricket specialist"
                    : mode === "catalogue"
                      ? "Verified catalogue guidance"
                      : "Bats, gear, fitting & support"}
                </p>
              </div>
              <button
                type="button"
                onClick={clearConversation}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Clear conversation"
              >
                <Trash size={17} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close assistant"
              >
                <X size={19} weight="bold" />
              </button>
            </div>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto bg-[#faf8fc] px-4 py-5 sm:px-5"
            aria-live="polite"
          >
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] ${
                      message.role === "user"
                        ? "rounded-2xl rounded-br-md bg-brand px-4 py-3 text-white"
                        : "rounded-2xl rounded-bl-md border border-violet-100 bg-white px-4 py-3 text-zinc-700 shadow-sm"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-brand">
                        <Sparkle size={13} weight="fill" />
                        ZA gear specialist
                      </div>
                    )}
                    <p className="whitespace-pre-line text-sm leading-relaxed">
                      {message.content}
                    </p>
                    {message.notice && (
                      <p className="mt-2 border-t border-violet-100 pt-2 text-[11px] leading-relaxed text-zinc-500">
                        {message.notice}
                      </p>
                    )}
                    {!!message.actions?.length && (
                      <div className="mt-3 flex flex-col gap-2">
                        {message.actions.map((action) => (
                          <Link
                            key={action.href}
                            href={action.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between gap-3 rounded-xl bg-brand-subtle px-3 py-2.5 text-xs font-semibold text-brand transition-colors hover:bg-violet-100"
                          >
                            {action.label}
                            <ArrowRight size={14} weight="bold" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="grid grid-cols-2 gap-2">
                  {starterPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => void sendMessage(prompt)}
                      className="min-h-12 rounded-xl border border-violet-100 bg-white px-3 py-2 text-left text-xs font-semibold leading-snug text-zinc-700 transition-colors hover:border-brand/30 hover:bg-brand-subtle hover:text-brand"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-violet-100 bg-white px-4 py-3 text-sm text-zinc-500 shadow-sm">
                    <CircleNotch
                      size={16}
                      className="animate-spin text-brand"
                    />
                    Checking the ZA catalogue…
                  </div>
                </div>
              )}
            </div>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              void sendMessage();
            }}
            className="border-t border-violet-100 bg-white p-3 sm:p-4"
          >
            <div className="flex items-end gap-2 rounded-2xl border border-zinc-200 bg-white p-2 pl-3 transition-colors focus-within:border-brand focus-within:ring-4 focus-within:ring-brand/10">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void sendMessage();
                  }
                }}
                rows={1}
                maxLength={1_000}
                placeholder="Ask about bats, fit, gloves or delivery…"
                className="max-h-24 min-h-10 flex-1 resize-none bg-transparent py-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-500"
                aria-label="Message ZA Cricket Assistant"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <PaperPlaneTilt size={18} weight="fill" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] leading-relaxed text-zinc-500">
              AI guidance may vary. Confirm final custom specifications with ZA
              Cricket.
            </p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className={`fixed right-4 z-50 sm:right-6 ${positionClass} group flex items-center gap-3 rounded-full bg-brand p-2.5 text-white shadow-[0_14px_40px_-10px_rgba(75,46,99,0.7)] transition-transform hover:-translate-y-0.5 hover:bg-brand-dark active:translate-y-0`}
        aria-label={isOpen ? "Close ZA Cricket Assistant" : "Open ZA Cricket Assistant"}
        aria-expanded={isOpen}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand">
          {isOpen ? (
            <X size={20} weight="bold" />
          ) : (
            <ChatCircleDots size={23} weight="fill" />
          )}
        </span>
        <span className="hidden pr-3 text-left sm:block">
          <span className="block text-xs font-bold">Ask ZA Cricket AI</span>
          <span className="block text-[10px] text-white/70">
            Gear advice in seconds
          </span>
        </span>
      </button>
    </>
  );
}
