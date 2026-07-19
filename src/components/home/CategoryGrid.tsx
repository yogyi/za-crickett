"use client";

import Link from "next/link";
import { ProductImage } from "@/components/shop/ProductImage";
import { categoryMeta } from "@/data/products";
import type { ProductCategory } from "@/types";
const featuredCategories: ProductCategory[] = [
  "bats",
  "gloves",
  "pads",
  "wicket-keeping",
];

function CategoryCard({ cat }: { cat: ProductCategory }) {
  const meta = categoryMeta[cat];

  return (
    <div className="snap-scroll-item w-[min(78vw,280px)] sm:w-auto">
      <Link
        href={`/shop/${cat}`}
        className="group block relative overflow-hidden rounded-2xl active:scale-[0.99] transition-transform"
      >
        <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-square bg-surface overflow-hidden">
          <ProductImage
            src={meta.image}
            alt={meta.label}
            sizes="(max-width: 640px) 80vw, 25vw"
            className={`transition-transform duration-500 group-hover:scale-105 ${
              meta.image.includes("za-cricket-logo")
                ? "object-contain p-8 opacity-40"
                : "object-contain object-center p-4 pb-16"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-brand/40 to-transparent" />
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
            Shop →
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
            <h3 className="text-white font-bold text-base sm:text-lg">
              {meta.label}
            </h3>
            <p className="text-white/85 text-xs sm:text-sm mt-1 line-clamp-2">
              {meta.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function CategoryGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-mesh-purple">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              Shop by Category
            </h2>
            <p className="mt-2 sm:mt-3 text-zinc-600 max-w-lg text-sm sm:text-base">
              Everything you need at the crease — bats, gloves, pads, and wicket
              keeping gear.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors shrink-0"
          >
            View all products →
          </Link>
        </div>

        <div className="flex sm:hidden snap-scroll-x gap-3 pb-1 -mx-4 px-4">
          {featuredCategories.map((cat) => (
            <CategoryCard key={cat} cat={cat} />
          ))}
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {featuredCategories.map((cat) => (
            <CategoryCard key={cat} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
