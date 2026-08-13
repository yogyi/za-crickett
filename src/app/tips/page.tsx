import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { CricketToolkit } from "@/components/home/CricketToolkit";
import { SingaporePitchGuide } from "@/components/home/SingaporePitchGuide";

export const metadata: Metadata = {
  title: "Tips & Toolkit",
  description:
    "ZA Cricket player toolkit — bat weight guide, care tips, and Singapore pitch gear picks.",
};

export default function TipsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-[#3a234d] to-zinc-950" />
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-200 mb-4">
            Player guides
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
            Tips & Toolkit
          </h1>
          <p className="mt-5 text-base sm:text-lg text-purple-100/85 leading-relaxed max-w-2xl">
            Practical bat-weight advice, care tips, and Singapore pitch gear
            picks — built for local heat, humidity, and playing surfaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop/bats"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand hover:bg-violet-50 transition-colors"
            >
              Shop bats
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Ask for sizing help
            </Link>
          </div>
        </div>
      </section>

      <CricketToolkit />
      <SingaporePitchGuide />
    </div>
  );
}
