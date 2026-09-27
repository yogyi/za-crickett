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

  return (
    <div className="bg-brand text-white text-sm py-2.5 overflow-hidden min-w-0 max-w-full">
      <div className="animate-marquee flex w-max">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className="flex w-screen min-w-max shrink-0 items-center justify-around"
          >
            {messages.map((msg) => (
              <span
                key={`${copy}-${msg.highlight}`}
                className="inline-flex items-center px-4 sm:px-8 whitespace-nowrap"
              >
                {msg.text}{" "}
                <span className="font-bold ml-1 text-accent-warm">
                  {msg.highlight}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="marquee-static text-xs sm:text-sm">
        {messages.map((msg) => (
          <span key={msg.highlight}>
            {msg.text}{" "}
            <strong className="text-accent-warm">{msg.highlight}</strong>
          </span>
        ))}
      </div>
    </div>
  );
}
