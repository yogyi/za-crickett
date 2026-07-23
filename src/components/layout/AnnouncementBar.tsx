"use client";

import { formatShippingFrom } from "@/lib/shipping";
import { useCurrency } from "@/store/currency";

const staticMessages = [
  { text: "Custom bat preparation in", highlight: "1–10 business days" },
  { text: "Athlete-tested gear for", highlight: "Singapore" },
  { text: "Published retail prices", highlight: "online" },
];

export function AnnouncementBar() {
  const country = useCurrency((s) => s.country);
  const deliveryFrom = formatShippingFrom(country);

  const messages = [
    { text: "Worldwide delivery", highlight: deliveryFrom },
    ...staticMessages,
  ];

  const items = [...messages, ...messages];

  return (
    <div className="bg-brand text-white text-sm py-2.5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((msg, i) => (
          <span key={i} className="inline-flex items-center mx-4 sm:mx-8">
            {msg.text}{" "}
            <span className="font-bold ml-1 text-accent-warm">{msg.highlight}</span>
            <span className="mx-4 text-white/30 hidden sm:inline">|</span>
          </span>
        ))}
      </div>
      <div className="marquee-static text-xs sm:text-sm">
        {messages.map((msg, i) => (
          <span key={i}>
            {msg.text} <strong className="text-accent-warm">{msg.highlight}</strong>
          </span>
        ))}
      </div>
    </div>
  );
}
