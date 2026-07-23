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
              ZA Stars Select
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
              Athletes who wear the purple
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              Five sponsored athletes from Singapore and Hong Kong — record
              holders and international campaigners testing ZA gear in real
              competition.
            </p>
          </div>
          <Link
            href="/athletes"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-100 transition-colors active:scale-[0.98] w-full sm:w-auto shrink-0"
          >
            Learn more
            <ArrowRight size={18} weight="bold" />
          </Link>
        </div>

        <div className="flex lg:hidden snap-scroll-x gap-4 pb-2 -mx-4 px-4">
          {featured.map((athlete) => (
            <div key={athlete.id} className="snap-scroll-item w-[min(78vw,280px)]">
              <AthleteCard athlete={athlete} variant="feature" />
            </div>
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-5 gap-4 lg:gap-5">
          {featured.map((athlete) => (
            <AthleteCard key={athlete.id} athlete={athlete} variant="feature" />
          ))}
        </div>
      </div>
    </section>
  );
}
