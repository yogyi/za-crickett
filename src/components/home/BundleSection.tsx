"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { BatPrepMenu } from "@/components/services/BatPrepMenu";

export function BundleSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7f5fb]">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-3">
              Bundle offers
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              Bat care bundles
            </h2>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              Knocking, oiling, and restoration packages — clear tiers and
              clear prices.
            </p>
          </div>
          <Link
            href="/bundles"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors active:scale-[0.98] w-full sm:w-auto"
          >
            View all bundles
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>

        <BatPrepMenu compact />
      </div>
    </section>
  );
}
