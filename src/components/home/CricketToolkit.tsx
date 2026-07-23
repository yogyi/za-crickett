"use client";

import Link from "next/link";
import { FormattedPrice } from "@/components/shop/FormattedPrice";
import {
  Scales,
  Drop,
  Ruler,
  Package,
  ArrowRight,
  Sun,
} from "@phosphor-icons/react";

const batGuide = [
  { weight: "2.7–2.8 lbs", player: "Junior / U15", feel: "Light pick-up" },
  { weight: "2.9–2.10 lbs", player: "Club & school", feel: "Balanced" },
  { weight: "2.11–2.12 lbs", player: "League / adult", feel: "Power focused" },
];

const careTips = [
  "Oil your bat lightly every 2–3 weeks in Singapore humidity",
  "Store in a cool, dry bag — never leave in a hot car boot",
  "Knock in new bats for 4–6 hours before match use",
  "Use a toe guard on hard synthetic pitches",
];

export function CricketToolkit() {
  return (
    <section className="py-20 lg:py-28 bg-mesh-purple relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-glow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-subtle text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            Player Toolkit
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
            Gear smarter, play better
          </h2>
          <p className="mt-3 text-zinc-600 max-w-xl mx-auto">
            Practical guides from our team — built for Singapore&apos;s heat,
            humidity, and playing surfaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Bat weight guide */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-border p-6 lg:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-2xl bg-brand-subtle flex items-center justify-center text-brand">
                <Scales size={24} weight="duotone" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900">Bat weight guide</h3>
                <p className="text-sm text-zinc-500">Find your sweet spot</p>
              </div>
            </div>
            {/* Mobile: stacked cards */}
            <div className="space-y-3 md:hidden">
              {batGuide.map((row) => (
                <div key={row.weight} className="p-4 rounded-xl bg-surface border border-border">
                  <p className="font-semibold text-brand">{row.weight}</p>
                  <p className="text-sm text-zinc-700 mt-1">{row.player}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{row.feel}</p>
                </div>
              ))}
            </div>
            {/* Tablet+ : table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 pr-4 font-semibold text-zinc-700">Weight</th>
                    <th className="pb-3 pr-4 font-semibold text-zinc-700">Best for</th>
                    <th className="pb-3 font-semibold text-zinc-700">Feel</th>
                  </tr>
                </thead>
                <tbody>
                  {batGuide.map((row) => (
                    <tr key={row.weight} className="border-b border-border/60 last:border-0">
                      <td className="py-3.5 pr-4 font-medium text-brand">{row.weight}</td>
                      <td className="py-3.5 pr-4 text-zinc-600">{row.player}</td>
                      <td className="py-3.5 text-zinc-500">{row.feel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link
              href="/product/the-signature"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              Build your custom bat
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>

          {/* Singapore care */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand via-brand-light to-violet-600 rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-2xl bg-white/15 flex items-center justify-center">
                  <Sun size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="font-bold">Singapore care tips</h3>
                  <p className="text-sm text-white/70">Tropical climate edition</p>
                </div>
              </div>
              <ul className="space-y-3">
                {careTips.map((tip) => (
                  <li key={tip} className="flex gap-3 text-sm leading-relaxed text-white/90">
                    <Drop size={16} weight="fill" className="shrink-0 mt-0.5 text-accent-warm" />
                    {tip}
                  </li>
                ))}
              </ul>
              <Link
                href="/bundles"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-white text-brand font-semibold rounded-xl text-sm hover:bg-accent-cream transition-colors active:scale-[0.98]"
              >
                <Package size={16} weight="bold" />
                View bundles
              </Link>
            </div>
          </div>

          {/* Glove & pad sizing */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-11 w-11 rounded-2xl bg-accent-cream flex items-center justify-center text-accent-warm">
                <Ruler size={24} weight="duotone" />
              </div>
              <h3 className="font-bold text-zinc-900">Glove & pad sizing</h3>
            </div>
            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-2xl bg-surface">
                <p className="font-semibold text-zinc-800">Youth (under 14)</p>
                <p className="text-zinc-500 mt-1">Small gloves · Youth pads (up to 5&apos;2&quot;)</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface">
                <p className="font-semibold text-zinc-800">Adult standard</p>
                <p className="text-zinc-500 mt-1">Medium/Large gloves · Full-size pads</p>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Unsure? Message us on WhatsApp with your height and age — we&apos;ll recommend the right fit.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              Get sizing help
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>

          {/* Compare bats */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-border p-6 lg:p-8 shadow-sm">
            <h3 className="font-bold text-zinc-900 mb-5">Which ZA bat is right for you?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "The Signature",
                  priceAmount: 499,
                  best: "Serious league players",
                  highlight: "Fully customisable English willow",
                  href: "/product/the-signature",
                  accent: "bg-brand-subtle text-brand",
                },
                {
                  name: "The Eagle",
                  priceAmount: 399,
                  best: "Competitive club cricket",
                  highlight: "Premium grade willow, ready to play",
                  href: "/product/the-eagle",
                  accent: "bg-violet-100 text-violet-700",
                },
                {
                  name: "The Monarch",
                  priceAmount: 299,
                  best: "School & club starters",
                  highlight: "Reliable everyday performance",
                  href: "/product/the-monarch",
                  accent: "bg-accent-cream text-amber-700",
                },
              ].map((bat) => (
                <Link
                  key={bat.name}
                  href={bat.href}
                  className="group p-5 rounded-2xl border border-border hover:border-brand/30 hover:shadow-md transition-all active:scale-[0.99]"
                >
                  <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold ${bat.accent}`}>
                    <FormattedPrice amount={bat.priceAmount} />
                  </span>
                  <h4 className="mt-3 font-bold text-zinc-900 group-hover:text-brand transition-colors">
                    {bat.name}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">{bat.best}</p>
                  <p className="text-sm text-zinc-600 mt-3 leading-relaxed">{bat.highlight}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
