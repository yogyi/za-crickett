"use client";

import Link from "next/link";
import { athletes } from "@/data/athletes";
import { ArrowRight } from "@phosphor-icons/react";
import { AthleteCard } from "@/components/athletes/AthleteCard";

const featured = athletes.filter((a) => a.featured);

export function AthleteSpotlight() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-glow mb-3">
              Team ZA
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
              Athletes who wear the purple
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              Singapore and Hong Kong internationals testing ZA bats, gloves,
              and pads in real competition — so your gear is match-proven.
            </p>
          </div>
          <Link
            href="/athletes"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-100 transition-colors active:scale-[0.98] w-full sm:w-auto shrink-0"
          >
            Meet the full roster
            <ArrowRight size={18} weight="bold" />
          </Link>
        </div>

        {/* Mobile: swipeable athlete cards */}
        <div className="flex lg:hidden snap-scroll-x gap-4 pb-2 -mx-4 px-4">
          {featured.map((athlete) => (
            <div key={athlete.id} className="snap-scroll-item w-[min(78vw,280px)]">
              <AthleteCard athlete={athlete} variant="feature" />
            </div>
          ))}
        </div>

        {/* Desktop: editorial grid */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-4 lg:gap-5">
          <div className="lg:col-span-5">
            <AthleteCard athlete={featured[0]} variant="feature" />
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-5">
            {featured.slice(1).map((athlete) => (
              <div key={athlete.id}>
                <AthleteCard athlete={athlete} variant="feature" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
