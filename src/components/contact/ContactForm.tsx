"use client";

import { FormEvent, useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";

const fieldClass =
  "w-full px-4 py-3.5 rounded-xl border border-border bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand/25 focus:border-brand transition-shadow";

export function ContactForm() {
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "General Enquiry").trim();
    const message = String(data.get("message") ?? "").trim();
    const company = String(data.get("company") ?? "");

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, company }),
      });
      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setStatus("idle");
        setError(result?.error || "We couldn't send that just now. Please try again, or WhatsApp us.");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("idle");
      setError("We couldn't send that just now. Please try again, or WhatsApp us.");
    }
  }

  return (
    <form className="relative space-y-5" onSubmit={handleSubmit}>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-900 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-900 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-zinc-900 mb-2">
          Subject
        </label>
        <select id="subject" name="subject" className={fieldClass} defaultValue="General Enquiry">
          <option>General Enquiry</option>
          <option>Custom Bat Order</option>
          <option>Product Question</option>
          <option>Exchange / Replacement</option>
          <option>Sponsorship</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-900 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your order, sizing, or custom bat needs…"
          className={`${fieldClass} resize-none min-h-[140px]`}
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      {status === "sent" ? (
        <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
          Message sent. The ZA Cricket team will reply by email.
        </p>
      ) : (
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full flex items-center justify-center gap-2 py-4 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors active:scale-[0.98] shadow-lg shadow-brand/20 disabled:opacity-60"
        >
          <PaperPlaneTilt size={18} weight="fill" />
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      )}
      <p className="text-xs text-zinc-500 text-center text-pretty">
        Sends straight to the ZA Cricket team. No email app needed.
      </p>
    </form>
  );
}
