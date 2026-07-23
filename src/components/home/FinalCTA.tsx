"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { TiltCard } from "@/components/ui/TiltCard";

const stackImages = [
  {
    src: "/images/products/the-monarch/monarch-studio.jpg",
    alt: "The Monarch bat",
    label: "The Monarch",
  },
  {
    src: "/images/products/gloves/players-edition.png",
    alt: "Players Edition gloves",
    label: "Pro gloves",
  },
];

export function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-light to-violet-600" />
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-glow/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white/90 text-sm font-medium mb-6">
              <Sparkle size={16} weight="fill" className="text-accent-warm" />
              Your next innings starts here
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Step up to the crease with confidence
            </h2>
            <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              From custom English willow to complete protection — gear
              tested on Singapore pitches by players like you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand font-semibold rounded-xl hover:bg-accent-cream transition-colors active:scale-[0.98] shadow-lg shadow-black/10 w-full sm:w-auto"
              >
                Shop the collection
                <ArrowRight size={18} weight="bold" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors active:scale-[0.98] w-full sm:w-auto"
              >
                Get sizing help
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 mx-auto w-full max-w-sm lg:max-w-none">
            <TiltCard intensity={12}>
              <div className="relative pb-8 pr-8">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/25 bg-white z-10">
                  <Image
                    src={stackImages[0].src}
                    alt={stackImages[0].alt}
                    fill
                    className="object-contain object-center p-4"
                    sizes="(max-width: 1024px) 80vw, 40vw"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-sm font-semibold">
                      {stackImages[0].label}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-[52%] aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white/30 bg-white z-20 rotate-6">
                  <Image
                    src={stackImages[1].src}
                    alt={stackImages[1].alt}
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
              </div>
            </TiltCard>
            <div className="absolute -bottom-2 left-0 lg:-bottom-4 lg:-left-4 bg-white rounded-2xl px-5 py-3 shadow-xl z-30">
              <p className="text-xs text-zinc-500 font-medium">Team ZA</p>
              <p className="text-lg font-bold text-brand">Athlete-tested</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
