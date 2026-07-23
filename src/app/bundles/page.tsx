import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { BatPrepMenu } from "@/components/services/BatPrepMenu";

export const metadata: Metadata = {
  title: "Bundles",
  description:
    "ZA Cricket bat care bundles — Basic, Performance, and Restore packages.",
};

export default function BundlesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-[#3a234d] to-zinc-950" />
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-200 mb-4">
            ZA Cricket
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
            Bundles
          </h1>
          <p className="mt-5 text-base sm:text-lg text-purple-100/85 leading-relaxed max-w-2xl">
            Bat care packages for knocking, oiling, and restoration — choose a
            bundle and add it to your order.
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
              Ask us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 bg-[#f7f5fb]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <BatPrepMenu />
        </div>
      </section>

      <section className="border-t border-border bg-white py-12">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-6 text-sm text-zinc-600">
          <div>
            <p className="font-semibold text-zinc-900">How it works</p>
            <p className="mt-2 leading-relaxed">
              Add a bundle to your cart with your bat order, or book a bundle
              alone and tell us which bat you are sending in.
            </p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900">Turnaround</p>
            <p className="mt-2 leading-relaxed">
              Custom bats already include preparation time. Standalone bundles
              are confirmed after we see the bat’s condition.
            </p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900">Not sure?</p>
            <p className="mt-2 leading-relaxed">
              Most club players choose the Performance Bundle. New bats usually
              start with the Basic Bundle.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
