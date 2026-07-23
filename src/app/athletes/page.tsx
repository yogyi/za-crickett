import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import {
  athletes,
  hongKongAthletes,
  singaporeAthletes,
} from "@/data/athletes";
import { AthleteCard } from "@/components/athletes/AthleteCard";

export const metadata: Metadata = {
  title: "ZA Stars Select",
  description:
    "Meet ZA STARS SELECT — sponsored athletes from Singapore and Hong Kong driving ZA Cricket product innovation.",
};

function AthleteProfile({
  athlete,
  reverse = false,
}: {
  athlete: (typeof athletes)[number];
  reverse?: boolean;
}) {
  const isStudio = athlete.imageFocus?.includes("object-contain");
  const [firstName, ...rest] = athlete.name.split(" ");

  return (
    <article
      id={athlete.id}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center scroll-mt-28 ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div
        className={`relative aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full rounded-3xl overflow-hidden shadow-2xl ${
          isStudio ? "bg-zinc-100" : "bg-zinc-900"
        } ${reverse ? "lg:[direction:ltr]" : ""}`}
      >
        <Image
          src={athlete.image}
          alt={athlete.name}
          fill
          className={athlete.imageFocus ?? "object-cover object-center"}
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority={athlete.id === "suryansh"}
        />
        <div
          className={`absolute inset-0 ${
            isStudio
              ? "bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent"
              : "bg-gradient-to-t from-black/50 via-transparent to-transparent"
          } lg:hidden`}
        />
        <div className="absolute bottom-4 left-4 right-4 lg:hidden">
          <h2 className="text-3xl font-bold text-white tracking-tight leading-none">
            {firstName}
          </h2>
          {rest.length > 0 && (
            <p className="text-xl font-bold text-white/90 mt-0.5">
              {rest.join(" ")}
            </p>
          )}
        </div>
      </div>

      <div className={reverse ? "lg:[direction:ltr]" : ""}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-brand-subtle text-brand text-xs font-semibold uppercase tracking-wider">
            {athlete.region}
          </span>
          <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold">
            ZA Stars Select
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight leading-[0.95]">
          <span className="block">{firstName}</span>
          {rest.length > 0 && (
            <span className="block text-zinc-700">{rest.join(" ")}</span>
          )}
        </h2>
        <p className="text-brand font-semibold mt-1">{athlete.role}</p>
        {athlete.bio && (
          <p className="mt-5 text-zinc-600 leading-relaxed text-sm sm:text-base">
            {athlete.bio}
          </p>
        )}

        {athlete.records && athlete.records.length > 0 && (
          <div className="mt-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-3">
              Records
            </h3>
            <ul className="space-y-2.5">
              {athlete.records.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-zinc-700"
                >
                  <CheckCircle
                    size={18}
                    weight="fill"
                    className="text-brand shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {athlete.experience && athlete.experience.length > 0 && (
          <div className="mt-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-3">
              Experience
            </h3>
            <ul className="space-y-2.5">
              {athlete.experience.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-zinc-700"
                >
                  <CheckCircle
                    size={18}
                    weight="fill"
                    className="text-brand shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {athlete.productLine && athlete.productHref && (
          <Link
            href={athlete.productHref}
            className="inline-flex mt-7 px-6 py-3.5 bg-brand text-white text-sm font-semibold rounded-xl hover:bg-brand-dark transition-colors active:scale-[0.98]"
          >
            Shop {athlete.productLine}
          </Link>
        )}
      </div>
    </article>
  );
}

function AthleteRegionSection({
  title,
  subtitle,
  regionAthletes,
}: {
  title: string;
  subtitle: string;
  regionAthletes: typeof athletes;
}) {
  return (
    <section className="py-14 sm:py-20 border-t border-border first:border-t-0">
      <div className="mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
          {title}
        </h2>
        <p className="mt-2 text-zinc-600 text-sm sm:text-base max-w-2xl">
          {subtitle}
        </p>
      </div>

      <div className="flex sm:hidden snap-scroll-x gap-3 pb-4 -mx-4 px-4 mb-10">
        {regionAthletes.map((athlete) => (
          <div key={athlete.id} className="snap-scroll-item w-[min(70vw,240px)]">
            <AthleteCard athlete={athlete} />
          </div>
        ))}
      </div>

      <div className="space-y-16 sm:space-y-24">
        {regionAthletes.map((athlete, i) => (
          <AthleteProfile
            key={athlete.id}
            athlete={athlete}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

export default function AthletesPage() {
  return (
    <div>
      <section className="relative bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/40 via-zinc-950 to-zinc-950" />
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-glow mb-4">
            ZA Cricket
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.02] max-w-3xl">
            ZA Stars Select
          </h1>
          <p className="mt-5 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Five sponsored athletes. Real international experience. Every product
            is tested on pitch by our Singapore and Hong Kong stars before it
            reaches you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium">
              {singaporeAthletes.length} Singapore athletes
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium">
              {hongKongAthletes.length} Hong Kong athletes
            </span>
          </div>
        </div>
      </section>

      {/* ZA STARS SELECT roster strip */}
      <section className="border-b border-border bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-2">
                Roster
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                Meet the five
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {athletes.map((athlete) => (
              <div key={athlete.id} className="space-y-3">
                <AthleteCard athlete={athlete} />
                <Link
                  href={`#${athlete.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
                >
                  Learn more
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <AthleteRegionSection
          title="Singapore squad"
          subtitle="National and pathway players shaping ZA bats, gloves, and protection for local conditions."
          regionAthletes={singaporeAthletes}
        />
        <AthleteRegionSection
          title="Hong Kong squad"
          subtitle="Representative players testing ZA gear across regional and international fixtures."
          regionAthletes={hongKongAthletes}
        />
      </div>
    </div>
  );
}
