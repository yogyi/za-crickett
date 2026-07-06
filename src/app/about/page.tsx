import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/layout/PageBanner";
import {
  Target,
  Heart,
  Handshake,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ZA Cricket is a Singapore-based cricket brand on a mission to bring out the best in every player.",
};

const values = [
  {
    icon: Target,
    title: "Player-First Design",
    description:
      "Every product decision starts with one question: will this help a player perform better?",
  },
  {
    icon: Heart,
    title: "Passion for the Game",
    description:
      "We are cricketers ourselves. We understand the grind, the joy, and the pursuit of greatness.",
  },
  {
    icon: Handshake,
    title: "Accessible Premium",
    description:
      "Pro-grade quality without the pro-grade price tag. Great gear should not be out of reach.",
  },
  {
    icon: Trophy,
    title: "Achieve Greatness",
    description:
      "Our motto is not just words. It is the standard we hold ourselves and our products to.",
  },
];

const milestones = [
  { year: "2024", event: "ZA Cricket founded in Singapore" },
  { year: "2024", event: "Launched The Signature custom bat line" },
  { year: "2024", event: "Signed first sponsored athletes" },
  { year: "2025", event: "Expanded full protective gear range" },
];

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        title="Achieve Greatness"
        description="ZA Cricket was founded in Singapore with one belief: every player deserves access to premium cricket equipment that helps them reach their full potential."
        image="/images/products/the-monarch/monarch-lifestyle-01.jpg"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900">
                Our Mission
              </h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                We are committed to bringing out the best in every player. From
                grassroots club cricket to competitive league play, ZA Cricket
                designs and delivers gear that performs when it matters most.
              </p>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Our products are developed in close collaboration with sponsored
                athletes and tested in Singapore conditions. We believe great
                equipment should be accessible, customisable, and built to last.
              </p>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Whether you are picking up a bat for the first time or preparing
                for your next league final, ZA Cricket is here to support your
                journey.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface">
              <Image
                src="/images/products/the-monarch/monarch-lifestyle-02.jpg"
                alt="ZA Cricket The Monarch bat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-10 text-center">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 border border-border text-center"
              >
                <div className="h-12 w-12 mx-auto flex items-center justify-center rounded-xl bg-brand-subtle text-brand mb-4">
                  <value.icon size={26} weight="duotone" />
                </div>
                <h3 className="font-semibold text-zinc-900">{value.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-8">
                The Founders
              </h2>
              <div className="bg-surface rounded-2xl p-8 border border-border">
                <h3 className="font-bold text-lg text-zinc-900">
                  ZA Cricket Team
                </h3>
                <p className="text-sm text-brand font-medium mt-1">
                  Co-Founders
                </p>
                <p className="mt-4 text-zinc-600 text-sm leading-relaxed">
                  Passionate cricketers and entrepreneurs who saw a gap in the
                  Singapore market for locally-focused, premium cricket
                  equipment. ZA Cricket was born from a love of the game and a
                  drive to support the next generation of players.
                </p>
                <p className="mt-4 text-zinc-600 text-sm leading-relaxed">
                  Based in Singapore, we serve players across the island and
                  beyond. Whether you need a fully custom bat or a complete
                  protection bundle, we are here to help you achieve greatness.
                </p>
                <p className="mt-4 text-sm font-semibold text-brand">
                  Singapore · Est. 2024
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-8">
                Our Journey
              </h2>
              <div className="space-y-4">
                {milestones.map((item) => (
                  <div
                    key={item.event}
                    className="flex gap-4 items-start p-4 rounded-xl bg-surface"
                  >
                    <span className="shrink-0 text-sm font-bold text-brand w-12">
                      {item.year}
                    </span>
                    <p className="text-sm text-zinc-700">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/za-cricket-logo.png"
            alt="ZA Cricket"
            width={120}
            height={48}
            className="h-10 w-auto object-contain mx-auto mb-6 brightness-0 invert"
          />
          <h2 className="text-2xl font-bold">Join the ZA Family</h2>
          <p className="mt-3 text-white/80 max-w-md mx-auto text-sm">
            Follow us on social media for product drops, athlete updates, and
            exclusive bundle offers.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-6 px-6 py-3 bg-white text-brand font-semibold rounded-xl hover:bg-brand-subtle transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
