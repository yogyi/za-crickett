"use client";

import { FormEvent, useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { buildContactMailto } from "@/lib/orderMailto";

const fieldClass =
  "w-full px-4 py-3.5 rounded-xl border border-border bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand/25 focus:border-brand transition-shadow";

export function ContactForm() {
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "General Enquiry").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    setError("");
    window.location.href = buildContactMailto({ name, email, subject, message });
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-900 mb-2"
          >
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
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-900 mb-2"
          >
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
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-zinc-900 mb-2"
        >
          Subject
        </label>
        <select id="subject" name="subject" className={fieldClass}>
          <option>General Enquiry</option>
          <option>Custom Bat Order</option>
          <option>Product Question</option>
          <option>Exchange / Replacement</option>
          <option>Sponsorship</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-900 mb-2"
        >
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

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-4 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors active:scale-[0.98] shadow-lg shadow-brand/20"
      >
        <PaperPlaneTilt size={18} weight="fill" />
        Send Message
      </button>
      <p className="text-xs text-zinc-500 text-center text-pretty">
        Opens your email app addressed to zacricket26@gmail.com
      </p>
    </form>
  );
}
