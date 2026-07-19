"use client";

import { formatPrice } from "@/lib/currency";
import { formatShippingFrom } from "@/lib/shipping";
import { useCurrency } from "@/store/currency";

export function StatsMarquee() {
  const country = useCurrency((s) => s.country);
  const items = [
    "500+ Singapore players kitted",
    "Athlete-tested gear",
    `Delivery ${formatShippingFrom(country)}`,
    "Custom bat prep in 1–10 business days",
    "English willow & pro protection",
    `Bundle & save up to ${formatPrice(15, country)}`,
  ];
  const doubled = [...items, ...items];

  return (
    <section className="bg-gradient-to-r from-brand via-brand-light to-violet-600 text-white py-3.5 overflow-hidden border-y border-white/10">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center mx-4 sm:mx-6 text-sm font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-warm mr-3 shrink-0" />
            {item}
          </span>
        ))}
      </div>
      <div className="marquee-static text-white text-sm">
        {items.map((item) => (
          <span key={item} className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-warm shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
