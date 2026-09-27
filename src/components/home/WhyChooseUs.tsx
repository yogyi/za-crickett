"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  UsersThree,
  MapPin,
  Certificate,
  ArrowRight,
} from "@phosphor-icons/react";

const reasons = [
  {
    icon: UsersThree,
    title: "Athlete-Developed",
    description:
      "Tested by sponsored athletes across Singapore and Hong Kong — including Suryansh Gulecha, Aslan Jafri, Mahiyu Bhatia, Hafeez Khan, and Shahid Wasif.",
  },
  {
    icon: MapPin,
    title: "Built for Singapore",
    description:
      "Gear tuned for local conditions, humidity, and playing surfaces.",
  },
  {
    icon: Certificate,
    title: "Full Customisation",
    description:
      "The Signature bat lets you set weight, grain count, and handle shape on the page. Profile, grip, and pick-up are confirmed on WhatsApp.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-subtle rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-subtle text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            The ZA difference
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
            Why players choose ZA
          </h2>
          <p className="mt-3 text-zinc-600 max-w-xl mx-auto">
            Built by players, for players — five sponsored athletes test the
            bats, gloves, and pads in Singapore and Hong Kong.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-light to-violet-600 text-white shadow-xl shadow-brand/25 lg:row-span-2 min-h-[320px]">
            <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
            <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/15 mb-5">
                <Wrench size={26} weight="duotone" />
              </div>
              <h3 className="font-bold text-2xl text-white">Hand-Crafted Quality</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85 max-w-sm">
                Every bat is hand-selected and prepared for performance —
                athlete-tested English willow ready for Singapore conditions.
              </p>
              <div className="mt-auto pt-6 flex items-end justify-between gap-4">
                <Link
                  href="/shop/bats"
                  className="inline-flex items-center gap-2 pb-2 text-sm font-semibold text-white hover:text-white/90 transition-colors"
                >
                  Shop bats
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 shrink-0 -mb-1 -mr-1 sm:-mb-2 sm:-mr-2 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl rotate-6 bg-white shadow-2xl overflow-hidden flex items-center justify-center p-4">
                    <Image
                      src="/images/za-cricket-logo.png"
                      alt="ZA Cricket"
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {reasons.slice(0, 2).map((reason) => (
              <div
                key={reason.title}
                className="p-6 rounded-3xl bg-surface border border-border hover:border-brand/20 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-subtle text-brand mb-5">
                  <reason.icon size={26} weight="duotone" />
                </div>
                <h3 className="font-bold text-lg text-zinc-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.slice(2).map((reason) => (
            <div
              key={reason.title}
              className="p-6 rounded-3xl bg-surface border border-border hover:border-brand/20 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-subtle text-brand mb-5">
                <reason.icon size={26} weight="duotone" />
              </div>
              <h3 className="font-bold text-lg text-zinc-900">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
