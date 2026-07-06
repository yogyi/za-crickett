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
import { motion, useReducedMotion } from "motion/react";

const reasons = [
  {
    icon: UsersThree,
    title: "Athlete-Developed",
    description:
      "Tested by sponsored Singapore cricketers including Suryansh Gulecha, Aslan Jafri, and Mahiyu Bhatia.",
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
      "The Signature bat lets you choose weight, profile, handle shape, and personal engraving.",
  },
];

export function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-subtle rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-subtle text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            The ZA difference
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
            Why players choose ZA
          </h2>
          <p className="mt-3 text-zinc-600 max-w-xl mx-auto">
            A Singapore brand built by players, for players — not just another
            equipment seller.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-light to-violet-600 text-white shadow-xl shadow-brand/25 lg:row-span-2 min-h-[320px]"
          >
            <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
            <div className="relative p-6 lg:p-8 flex flex-col h-full">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/15 mb-5">
                <Wrench size={26} weight="duotone" />
              </div>
              <h3 className="font-bold text-2xl text-white">Hand-Crafted Quality</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85 max-w-sm">
                Every bat is hand-selected and prepared. Our bat bundles include
                professional knocking, oiling, and finishing — match-ready from
                day one.
              </p>
              <Link
                href="/bundles"
                className="inline-flex items-center gap-2 mt-auto pt-6 text-sm font-semibold text-white hover:text-white/90 transition-colors"
              >
                Explore bat prep bundles
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 lg:w-56 lg:h-56 translate-x-4 translate-y-4 opacity-90 pointer-events-none">
              <Image
                src="/images/products/the-monarch/monarch-lifestyle-01.jpg"
                alt="ZA Cricket bat"
                fill
                className="object-cover rounded-2xl rotate-6 shadow-2xl"
                sizes="224px"
              />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {reasons.slice(0, 2).map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
                className="p-6 rounded-3xl bg-surface border border-border hover:border-brand/20 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-subtle text-brand mb-5">
                  <reason.icon size={26} weight="duotone" />
                </div>
                <h3 className="font-bold text-lg text-zinc-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.slice(2).map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.08 }}
              className="p-6 rounded-3xl bg-surface border border-border hover:border-brand/20 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-subtle text-brand mb-5">
                <reason.icon size={26} weight="duotone" />
              </div>
              <h3 className="font-bold text-lg text-zinc-900">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
