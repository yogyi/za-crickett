"use client";

import Image from "next/image";
import Link from "next/link";
import { athletes } from "@/data/products";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

export function AthleteSpotlight() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-brand-gradient-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-subtle text-brand text-xs font-semibold uppercase tracking-wider mb-4">
              Meet the team
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              ZA Sponsored Athletes
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed max-w-md">
              Elite Singapore cricketers who trust ZA gear on the biggest
              stages. Their performance drives our product development.
            </p>
            <Link
              href="/athletes"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              Meet the team
              <ArrowRight size={16} weight="bold" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {athletes.map((athlete, i) => (
              <motion.div
                key={athlete.id}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-subtle mb-3 ring-2 ring-transparent group-hover:ring-brand/30 transition-all shadow-md">
                  <Image
                    src={athlete.image}
                    alt={athlete.name}
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>
                <h3 className="font-semibold text-sm text-zinc-900">
                  {athlete.name}
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">{athlete.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
