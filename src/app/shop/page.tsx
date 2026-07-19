import type { Metadata } from "next";
import { ProductCard } from "@/components/shop/ProductCard";
import { products, categoryMeta } from "@/data/products";
import { PageBanner } from "@/components/layout/PageBanner";
import {
  Package,
  Wrench,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse premium cricket bats, gloves, pads, and wicket keeping gear.",
};

const highlights = [
  {
    icon: Package,
    title: "13+ Products",
    description: "Bats, gloves, pads, keeping gear, and bundles",
  },
  {
    icon: Wrench,
    title: "Custom Bats",
    description: "Fully personalised Signature bats from S$499",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Athlete-tested, Singapore-ready equipment",
  },
];

export default function ShopPage() {
  return (
    <div>
      <PageBanner
        title="Shop All Products"
        description="Premium cricket equipment for every level of play. From custom English willow bats to pro-grade protection gear."
        image="/images/products/the-signature/signature-hero.jpg"
      />

      <div className="py-12 lg:py-16">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border"
              >
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-brand-subtle text-brand">
                  <item.icon size={22} weight="duotone" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-zinc-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-zinc-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {Object.entries(categoryMeta).map(([key, meta]) => (
              <a
                key={key}
                href={`/shop/${key}`}
                className="px-4 py-2 text-sm font-medium rounded-full border border-border text-zinc-700 hover:border-brand hover:text-brand hover:bg-brand-subtle transition-colors"
              >
                {meta.label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
