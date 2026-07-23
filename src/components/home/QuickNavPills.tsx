"use client";

import Link from "next/link";
import {
  Cricket,
  Package,
  Ruler,
  Sliders,
  Storefront,
  Wrench,
} from "@phosphor-icons/react";

const pills = [
  { href: "/shop/bats", label: "Bats", icon: Cricket, accent: "from-brand to-violet-600" },
  { href: "/product/the-signature", label: "Custom Bat", icon: Sliders, accent: "from-violet-600 to-fuchsia-600" },
  { href: "/shop/gloves", label: "Gloves", icon: Storefront, accent: "from-emerald-600 to-teal-600" },
  { href: "/shop/pads", label: "Pads", icon: Package, accent: "from-amber-500 to-orange-600" },
  { href: "/contact", label: "Sizing Help", icon: Ruler, accent: "from-sky-600 to-blue-600" },
  { href: "/bundles", label: "Bundles", icon: Wrench, accent: "from-zinc-600 to-zinc-800" },
];

export function QuickNavPills() {
  return (
    <section className="py-4 sm:py-6 bg-white border-b border-border/60 lg:hidden">
      <div className="max-w-[1800px] mx-auto px-4">
        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 px-1">
          Jump to
        </p>
        <div className="flex snap-scroll-x gap-3 pb-1 -mx-1 px-1">
          {pills.map((pill) => (
            <div key={pill.href + pill.label} className="snap-scroll-item">
              <Link
                href={pill.href}
                className="flex flex-col items-center gap-2 min-w-[5.5rem] active:scale-95 transition-transform"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${pill.accent} text-white shadow-lg shadow-brand/15`}
                >
                  <pill.icon size={26} weight="duotone" />
                </span>
                <span className="text-[11px] font-semibold text-zinc-700 text-center leading-tight">
                  {pill.label}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
