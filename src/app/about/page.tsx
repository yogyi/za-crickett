import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Target,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ZA Cricket is a Singapore-based cricket brand on a mission to bring out the best in every player.",
};

const values = [
  {
    icon: Target,
    title: "Player-first",
    description: "Performance gear cricketers at every level can trust.",
  },
  {
    icon: UsersThree,
    title: "Athlete-tested",
    description: "Real match feedback shapes bats, gloves, and protection.",
  },
  {
    icon: ShieldCheck,
    title: "Pro-grade build",
    description:
      "Built for players who push limits — Grade 1 English willow with tight, straight grains.",
  },
  {
    icon: MapPin,
    title: "Singapore roots",
    description:
      "A global ambition for the game — established in Singapore in 2026, with athletes in Hong Kong too.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Founders + Future stars */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            <article className="relative overflow-hidden rounded-3xl bg-brand text-white p-6 sm:p-8">
              <div className="absolute inset-0 pattern-dots-light opacity-20" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-200">
                  About the founders
                </p>
                <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  Kabir Zandani &amp; Veer Avlani
                </h1>
                <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
                  ZA Cricket began with their shared passion for the game and a
                  belief that ambition should never be limited by access. Having
                  represented Singapore at age-group level, they created ZA to
                  help players aim higher and pursue greatness — Grade 1 English
                  willow, tested by five sponsored athletes in Singapore and
                  Hong Kong.
                </p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-3xl bg-zinc-950 text-white min-h-[260px] sm:min-h-[300px]">
              <Image
                src="/images/athletes/suryansh-gulecha.jpg"
                alt="ZA Cricket sponsored player"
                fill
                className="object-contain object-right-bottom opacity-50"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent" />
              <div className="relative max-w-md p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-glow">
                  Future stars
                </p>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  Backing the next generation
                </h2>
                <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Through sponsorships and partnerships, we give aspiring
                  cricketers the equipment, exposure, and encouragement to take
                  the next step.
                </p>
                <Link
                  href="/athletes"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-white"
                >
                  Meet our sponsored players
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Mission + values */}
      <section className="pb-10 sm:pb-14">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-2">
              Our mission
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              Singapore-built gear for players who want more
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Built to help you achieve greatness — Grade 1 English willow
              bats, gloves, and pads, tested on pitch by five sponsored
              athletes.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-surface/60 p-3.5 sm:p-5"
              >
                <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-brand-subtle text-brand mb-2.5">
                  <value.icon size={20} weight="duotone" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-zinc-900">
                  {value.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-light to-violet-600" />
        <div className="absolute inset-0 pattern-dots-light opacity-25" />
        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Ready to achieve greatness?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/80 max-w-md mx-auto">
            A Signature bat in Grade 1 English willow, with weight, grain
            count, and handle shape set on the page.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-brand font-semibold rounded-xl hover:bg-violet-50 transition-colors"
            >
              Shop collection
              <ArrowRight size={18} weight="bold" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/35 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
