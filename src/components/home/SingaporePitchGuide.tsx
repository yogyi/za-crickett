"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CloudRain,
  House,
  Sun,
  Tree,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const pitches = [
  {
    id: "synthetic",
    icon: House,
    title: "Synthetic & matting",
    subtitle: "Most club nets & school grounds",
    gear: [
      "Use a toe guard — surfaces are harder on bat edges",
      "Medium-weight bat (2.10–2.11 lbs) for control",
      "Players Edition pads handle repeated impact well",
    ],
    tip: "Our Performance Bundle adds epoxy toe guard + grip — ideal for matting.",
    color: "from-slate-600 to-zinc-700",
  },
  {
    id: "turf",
    icon: Tree,
    title: "Turf wickets",
    subtitle: "CCA, Padang-style grounds",
    gear: [
      "Lighter pick-up bats work — ball comes onto the bat",
      "Breathable gloves matter in humid afternoon sessions",
      "White or coloured pads — same protection, your style",
    ],
    tip: "The Eagle is our most popular pick for competitive turf cricket.",
    color: "from-emerald-600 to-green-700",
  },
  {
    id: "indoor",
    icon: CloudRain,
    title: "Indoor nets",
    subtitle: "Year-round training in SG",
    gear: [
      "Lighter bat (2.9–2.10 lbs) for quick hands",
      "Ghost Edition gloves — extra ventilation",
      "Knock in new bats before hard indoor balls",
    ],
    tip: "Pair a Basic prep bundle with any new bat before net sessions.",
    color: "from-sky-600 to-indigo-700",
  },
];

export function SingaporePitchGuide() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(pitches[0].id);
  const current = pitches.find((p) => p.id === active) ?? pitches[0];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-brand-gradient-soft border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-brand text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sun size={14} weight="fill" className="text-accent-warm" />
            Singapore playbook
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
            Gear picks for where you play
          </h2>
          <p className="mt-3 text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base">
            Humidity, matting, and turf all play differently. Use this guide to
            match your kit to your pitch — then shop with confidence.
          </p>
        </motion.div>

        {/* Mobile: pill tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 snap-scroll-x lg:hidden mb-6">
          {pitches.map((pitch) => (
            <button
              key={pitch.id}
              type="button"
              onClick={() => setActive(pitch.id)}
              className={`snap-scroll-item px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                active === pitch.id
                  ? "bg-brand text-white shadow-md"
                  : "bg-white text-zinc-600 border border-border"
              }`}
            >
              {pitch.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Desktop tabs */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-3">
            {pitches.map((pitch) => (
              <button
                key={pitch.id}
                type="button"
                onClick={() => setActive(pitch.id)}
                className={`text-left p-5 rounded-2xl border transition-all ${
                  active === pitch.id
                    ? "bg-white border-brand/30 shadow-lg shadow-brand/10"
                    : "bg-white/60 border-border hover:border-brand/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-10 w-10 rounded-xl bg-gradient-to-br ${pitch.color} flex items-center justify-center text-white`}
                  >
                    <pitch.icon size={20} weight="duotone" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">{pitch.title}</p>
                    <p className="text-xs text-zinc-500">{pitch.subtitle}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <motion.div
            key={current.id}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-8 bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center text-white shrink-0`}
              >
                <current.icon size={24} weight="duotone" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">{current.title}</h3>
                <p className="text-sm text-zinc-500 mt-0.5">{current.subtitle}</p>
              </div>
            </div>

            <h4 className="text-sm font-semibold text-zinc-800 mb-3">
              Recommended setup
            </h4>
            <ul className="space-y-3 mb-6">
              {current.gear.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-zinc-600 leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-2xl bg-brand-subtle border border-brand/10">
              <p className="text-sm text-brand font-medium leading-relaxed">
                Pro tip: {current.tip}
              </p>
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              Shop recommended gear
              <ArrowRight size={16} weight="bold" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
