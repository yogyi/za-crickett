"use client";

import { ProductCard } from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const featured = products.filter((p) =>
  ["bat-monarch", "bat-eagle", "bat-signature", "gloves-players"].includes(p.id)
);

export function FeaturedProducts() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-brand-gradient-soft relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-brand-glow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-brand text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
              Fan favourites
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              Bestsellers
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-lg">
              Real gear, real photos — trusted by club players and sponsored
              athletes across Singapore.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors shrink-0"
          >
            View all products
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>

        {/* Mobile: swipeable bestsellers */}
        <div className="flex sm:hidden snap-scroll-x gap-4 pb-3 -mx-4 px-4">
          {featured.map((product) => (
            <div
              key={product.id}
              className="snap-scroll-item w-[min(78vw,300px)] bg-white rounded-3xl p-3 shadow-md border border-white"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-sm border border-white hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
