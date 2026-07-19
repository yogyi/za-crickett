"use client";

import Link from "next/link";
import Image from "next/image";
import { getProductsByCategory } from "@/data/products";
import { FormattedPrice } from "@/components/shop/FormattedPrice";

export function BundleSection() {
  const valueBundles = getProductsByCategory("value-bundles");
  const batBundles = getProductsByCategory("bat-bundles");

  return (
    <section className="py-20 lg:py-28 bg-brand-subtle">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
            Bundle Offers
          </h2>
          <p className="mt-3 text-zinc-600">
            Save when you kit up together or prep your bat like a pro.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-violet-100">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">
              Value Bundles
            </h3>
            <div className="space-y-4">
              {valueBundles.map((bundle) => (
                <Link
                  key={bundle.id}
                  href={`/product/${bundle.slug}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                >
                  <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden bg-surface">
                    <Image
                      src={bundle.image}
                      alt={bundle.name}
                      fill
                      className="object-contain p-1"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-zinc-900 group-hover:text-brand transition-colors line-clamp-2">
                      {bundle.name}
                    </p>
                    {bundle.badge && (
                      <span className="text-xs text-brand font-medium">
                        {bundle.badge}
                      </span>
                    )}
                  </div>
                  <span className="font-bold text-brand shrink-0">
                    <FormattedPrice amount={bundle.price} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-violet-100">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Bat Bundles</h3>
            <div className="space-y-4">
              {batBundles.map((bundle) => (
                <Link
                  key={bundle.id}
                  href={`/product/${bundle.slug}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                >
                  <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden bg-surface">
                    <Image
                      src={bundle.image}
                      alt={bundle.name}
                      fill
                      className="object-contain p-1"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-zinc-900 group-hover:text-brand transition-colors">
                      {bundle.name}
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1">
                      {bundle.features?.slice(0, 3).join(" · ")}
                    </p>
                  </div>
                  <span className="font-bold text-brand shrink-0">
                    <FormattedPrice amount={bundle.price} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/bundles"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors active:scale-[0.98]"
          >
            View All Bundles
          </Link>
        </div>
      </div>
    </section>
  );
}
