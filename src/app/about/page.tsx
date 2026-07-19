import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cricket,
  MapPin,
  ShieldCheck,
  Sparkle,
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
    description:
      "High-quality, performance-focused equipment cricketers at every level can trust.",
  },
  {
    icon: UsersThree,
    title: "Athlete-tested",
    description:
      "Player feedback and real match experience shape our bats, gloves, and protection.",
  },
  {
    icon: ShieldCheck,
    title: "Pro-grade build",
    description:
      "Premium materials and purposeful construction for players driven to push their limits.",
  },
  {
    icon: MapPin,
    title: "Singaporean roots",
    description:
      "Established in Singapore in 2026 and built with a global ambition for the game.",
  },
];

const milestones = [
  {
    year: "2026",
    title: "ZA Cricket launches",
    detail: "Founded in Singapore with a mission to make premium gear accessible.",
  },
  {
    year: "2026",
    title: "The Signature debuts",
    detail: "Fully custom English willow — weight, grains, handle, and engraving.",
  },
  {
    year: "2026",
    title: "Team ZA grows",
    detail: "Sponsored athletes from Singapore and Hong Kong join the roster.",
  },
  {
    year: "2026",
    title: "Full kit range",
    detail: "Gloves, pads, bundles, and bat prep services complete the lineup.",
  },
];

const lineup = [
  {
    name: "The Monarch",
    tag: "Grade 2 English Willow",
    price: "S$299",
    image: "/images/products/the-monarch/monarch-hero.jpg",
    href: "/product/the-monarch",
  },
  {
    name: "The Eagle",
    tag: "Grade 1 English Willow",
    price: "S$399",
    image: "/images/products/the-eagle/eagle-front-02.jpg",
    href: "/product/the-eagle",
  },
  {
    name: "The Signature",
    tag: "Grade 1 · Fully custom",
    price: "S$499",
    image: "/images/products/the-signature/signature-hero.jpg",
    href: "/product/the-signature",
  },
];

const stats = [
  { value: "500+", label: "Players kitted" },
  { value: "5", label: "Sponsored athletes" },
  { value: "3", label: "English willow bats" },
  { value: "2026", label: "Est. Singapore" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-[#3a234d] to-zinc-950" />
        <div className="absolute inset-0 pattern-dots-light opacity-30" />
        <div className="absolute -top-24 -right-24 h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-brand-glow/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200 mb-6">
                <Sparkle size={14} weight="fill" />
                Singapore · Est. 2026
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.02]">
                Built by players.
                <span className="block mt-1 bg-gradient-to-r from-violet-200 via-fuchsia-200 to-white bg-clip-text text-transparent">
                  For greatness.
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-purple-100/85 leading-relaxed max-w-xl">
                ZA Cricket is a Singaporean brand built through ambition,
                discipline, and the confidence to perform at the highest level.
                We equip players globally to push their limits and achieve
                greatness for themselves.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-brand font-semibold rounded-xl hover:bg-violet-50 transition-colors"
                >
                  Shop the range
                  <ArrowRight size={18} weight="bold" />
                </Link>
                <Link
                  href="/athletes"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Meet Team ZA
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px]">
              <div className="absolute left-0 top-0 w-[58%] aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-black/40 bg-white/5">
                <Image
                  src="/images/athletes/suryansh-gulecha.jpg"
                  alt="Suryansh Gulecha with The Eagle bat"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 55vw, 28vw"
                  priority
                />
              </div>
              <div className="absolute right-0 bottom-0 w-[52%] aspect-[3/4] rounded-3xl overflow-hidden border border-white/25 shadow-2xl shadow-black/40 bg-white p-3">
                <div className="relative h-full w-full rounded-2xl overflow-hidden bg-brand-subtle">
                  <Image
                    src="/images/products/the-signature/signature-hero.jpg"
                    alt="The Signature custom bat"
                    fill
                    className="object-contain object-center p-6 sm:p-8"
                    sizes="(max-width: 1024px) 50vw, 26vw"
                  />
                </div>
              </div>
              <div className="absolute right-[18%] top-[8%] w-[38%] aspect-square rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl bg-white p-2 hidden sm:block">
                <Image
                  src="/images/products/gloves/players-edition.png"
                  alt="Players Edition gloves"
                  fill
                  className="object-contain p-2"
                  sizes="20vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-brand-subtle">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-brand tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] max-w-lg mx-auto lg:max-w-none w-full rounded-3xl overflow-hidden bg-zinc-100 shadow-xl">
              <Image
                src="/images/athletes/mahiyu-bhatia.jpg"
                alt="Mahiyu Bhatia with ZA Cricket bat"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-200">
                  Athlete-tested
                </p>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Real feedback from real innings
                </p>
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-subtle text-brand text-xs font-semibold uppercase tracking-wider mb-5">
                Our mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                Equipment players can trust
              </h2>
              <p className="mt-5 text-zinc-600 leading-relaxed">
                At ZA, we offer cricketers at every level high-quality,
                performance-focused equipment designed to support confident play
                from training sessions to competitive fixtures.
              </p>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Our motto, Achieve Greatness, represents our commitment to
                supporting players throughout their cricketing journey — wherever
                the game takes them.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "English willow bats from S$299 to fully custom Signature",
                  "Pro gloves, pads, and coloured protection",
                  "Bat prep bundles — knocking, oiling, and match-ready finish",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm sm:text-base text-zinc-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bat lineup */}
      <section className="py-16 sm:py-20 lg:py-28 bg-mesh-purple">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full badge-shimmer text-white text-xs font-semibold uppercase tracking-wider mb-4">
                <Cricket size={14} weight="fill" />
                English willow
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
                Three bats. Every level.
              </h2>
              <p className="mt-3 text-zinc-600 max-w-lg">
                From first season at club to fully custom league spec — the ZA
                bat range grows with your game.
              </p>
            </div>
            <Link
              href="/shop/bats"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark shrink-0"
            >
              Compare all bats
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 lg:gap-6">
            {lineup.map((bat) => (
              <Link
                key={bat.name}
                href={bat.href}
                className="group bg-white rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative aspect-[3/4] bg-surface">
                  <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                    <div className="relative h-full w-full">
                      <Image
                        src={bat.image}
                        alt={bat.name}
                        fill
                        className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 90vw, 30vw"
                      />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand text-white text-xs font-semibold">
                    {bat.tag}
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex items-baseline justify-between gap-3">
                  <h3 className="font-bold text-lg text-zinc-900 group-hover:text-brand transition-colors">
                    {bat.name}
                  </h3>
                  <span className="font-bold text-brand">{bat.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              What we stand for
            </h2>
            <p className="mt-4 text-zinc-600">
              A Singapore brand built by cricketers — not just another equipment
              reseller.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-border bg-white p-6 sm:p-7 hover:border-brand/25 hover:shadow-lg transition-all"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-subtle text-brand mb-5">
                  <value.icon size={26} weight="duotone" />
                </div>
                <h3 className="font-bold text-lg text-zinc-900">{value.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear + protection */}
      <section className="py-16 sm:py-20 lg:py-28 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-glow mb-4">
                Full kit
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                More than bats
              </h2>
              <p className="mt-5 text-zinc-400 leading-relaxed">
                Players Edition gloves and pads, coloured protection, value
                bundles, and professional bat prep — everything you need from net
                session to match day.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop/gloves"
                  className="px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm font-semibold hover:bg-white/15 transition-colors"
                >
                  Gloves
                </Link>
                <Link
                  href="/shop/pads"
                  className="px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm font-semibold hover:bg-white/15 transition-colors"
                >
                  Pads
                </Link>
                <Link
                  href="/bundles"
                  className="px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm font-semibold hover:bg-white/15 transition-colors"
                >
                  Bundles
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-white/10 shadow-xl shadow-black/30">
                <Image
                  src="/images/products/pads/coloured-red-pads.png"
                  alt="Coloured cricket pads"
                  fill
                  className="object-contain p-5"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-100 to-zinc-300 border border-white/10 shadow-xl shadow-black/30 mt-8">
                <Image
                  src="/images/products/gloves/ghost-edition.png"
                  alt="Ghost Edition gloves"
                  fill
                  className="object-contain p-5 drop-shadow-lg"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders and future stars */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <article className="relative overflow-hidden rounded-3xl bg-brand text-white p-7 sm:p-10 min-h-[360px]">
              <div className="absolute inset-0 pattern-dots-light opacity-20" />
              <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-brand-glow/25 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-200">
                  About the founders
                </p>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
                  Kabir Zandani &amp; Veer Avlani
                </h2>
                <p className="mt-5 text-white/80 leading-relaxed">
                  ZA Cricket began with their shared passion for the game and a
                  belief that ambition should never be limited by access or
                  opportunity. Having represented Singapore at age-group level,
                  they understand the dedication behind every innings, every
                  training session, and every dream.
                </p>
                <p className="mt-4 text-white/80 leading-relaxed">
                  They created ZA Cricket to inspire cricketers to aim higher,
                  play with confidence, and pursue greatness wherever the game
                  takes them.
                </p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-3xl bg-zinc-950 text-white min-h-[360px]">
              <Image
                src="/images/athletes/suryansh-gulecha.jpg"
                alt="ZA Cricket sponsored player"
                fill
                className="object-contain object-right-bottom opacity-55"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent" />
              <div className="relative max-w-md p-7 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-glow">
                  Future stars
                </p>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
                  Backing the next generation
                </h2>
                <p className="mt-5 text-zinc-300 leading-relaxed">
                  Through sponsorships, partnerships, and meaningful
                  opportunities, we aim to give aspiring cricketers the
                  equipment, exposure, and encouragement they need to develop
                  their game, build confidence, and take the next step.
                </p>
                <Link
                  href="/athletes"
                  className="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-white"
                >
                  Meet our sponsored players
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 sm:py-20 lg:py-28 bg-brand-gradient-soft">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white text-brand text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                Our journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
                From idea to island-wide kit-outs
              </h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                ZA Cricket launched in 2026 with a small range and big ambition —
                to become the go-to cricket brand for players across Singapore
                and the region.
              </p>
              <div className="mt-8 relative aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-white shadow-md">
                <Image
                  src="/images/athletes/aslan-jafri.jpg"
                  alt="Aslan Jafri in ZA Cricket kit"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-0">
                {milestones.map((item, i) => (
                  <div
                    key={item.title}
                    className="relative flex gap-6 pb-10 last:pb-0"
                  >
                    {i < milestones.length - 1 && (
                      <span className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-brand/20" />
                    )}
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white text-xs font-bold">
                      {i + 1}
                    </span>
                    <div className="pt-0.5">
                      <p className="text-sm font-bold text-brand">{item.year}</p>
                      <h3 className="font-bold text-lg text-zinc-900 mt-0.5">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-zinc-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-light to-violet-600" />
        <div className="absolute inset-0 pattern-dots-light opacity-25" />
        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/za-cricket-logo.png"
            alt="ZA Cricket"
            width={120}
            height={48}
            className="h-10 w-auto object-contain mx-auto mb-6 brightness-0 invert"
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to achieve greatness?
          </h2>
          <p className="mt-4 text-white/80 max-w-lg mx-auto">
            Explore the full range, meet our athletes, or get in touch for custom
            bat advice and sizing help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-brand font-semibold rounded-xl hover:bg-violet-50 transition-colors"
            >
              Shop collection
              <ArrowRight size={18} weight="bold" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/35 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
