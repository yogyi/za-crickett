"use client";

import Link from "next/link";
import { athletes } from "@/data/athletes";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { AthleteCard } from "@/components/athletes/AthleteCard";

const featured = athletes.filter((a) => a.featured);

export function AthleteSpotlight() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
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
          </motion.div>
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
          {featured.map((athlete, i) => (
            <motion.div
              key={athlete.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="snap-scroll-item w-[min(78vw,280px)]"
            >
              <AthleteCard athlete={athlete} variant="feature" />
            </motion.div>
          ))}
        </div>

        {/* Desktop: editorial grid */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-4 lg:gap-5">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <AthleteCard athlete={featured[0]} variant="feature" />
          </motion.div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-5">
            {featured.slice(1).map((athlete, i) => (
              <motion.div
                key={athlete.id}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.08 }}
              >
                <AthleteCard athlete={athlete} variant="feature" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
