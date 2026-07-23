"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Package,
  Sliders,
  Storefront,
  Truck,
} from "@phosphor-icons/react";
import { TiltCard } from "@/components/ui/TiltCard";

const steps = [
  {
    icon: Storefront,
    title: "Pick your gear",
    description:
      "Browse bats, gloves, pads, keeping gear, and accessories from our published retail list.",
    href: "/shop",
    cta: "Shop now",
  },
  {
    icon: Sliders,
    title: "Customise (optional)",
    description:
      "Build the Signature Edition with your weight in grams, grain count, handle shape, and engraving.",
    href: "/product/the-signature",
    cta: "Custom bat builder",
  },
  {
    icon: Package,
    title: "Complete your kit",
    description:
      "Add a bat care bundle — knocking, oiling, and protection — so your willow is match-ready.",
    href: "/bundles",
    cta: "View bundles",
  },
  {
    icon: Truck,
    title: "Delivered to you",
    description:
      "Worldwide delivery typically takes 1–14 business days after dispatch. Custom bats need an additional 1–10 business days for preparation.",
    href: "/policies/shipping",
    cta: "Delivery info",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-subtle text-brand text-xs font-semibold uppercase tracking-wider mb-4">
              How it works
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              From click to crease in four simple steps
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Whether you need a full custom bat or a quick glove upgrade, we
              guide you through sizing, prep, and delivery — no guesswork.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="group flex gap-4 p-4 rounded-2xl border border-border hover:border-brand/25 hover:bg-brand-subtle/40 transition-colors"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <step.icon size={18} weight="duotone" className="text-brand" />
                      <h3 className="font-semibold text-zinc-900">{step.title}</h3>
                    </div>
                    <p className="mt-1.5 text-sm text-zinc-600 leading-relaxed">
                      {step.description}
                    </p>
                    <Link
                      href={step.href}
                      className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-brand hover:text-brand-dark"
                    >
                      {step.cta}
                      <ArrowRight size={12} weight="bold" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <TiltCard className="w-full" intensity={14}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-brand/25 border border-white/50 bg-brand-subtle">
                <Image
                  src="/images/products/the-signature/signature-studio.jpg"
                  alt="ZA Cricket The Signature custom bat"
                  fill
                  className="object-contain object-center p-6 pb-28"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    Flagship custom bat
                  </p>
                  <p className="text-2xl font-bold mt-1">The Signature</p>
                  <p className="text-sm text-white/80 mt-2 leading-relaxed">
                    English willow · weight in grams · grain count · handle shape · engraving
                  </p>
                  <Link
                    href="/product/the-signature"
                    className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-white text-brand font-semibold rounded-xl text-sm hover:bg-accent-cream transition-colors active:scale-[0.98]"
                  >
                    Build yours
                    <ArrowRight size={16} weight="bold" />
                  </Link>
                </div>
              </div>
            </TiltCard>
            <p className="text-center text-xs text-zinc-400 mt-4 lg:hidden">
              Tilt your phone or drag to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
