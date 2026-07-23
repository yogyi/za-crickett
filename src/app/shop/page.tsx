import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/shop/ProductCard";
import {
  SHOP_CATEGORIES,
  categoryMeta,
  getShopProducts,
} from "@/data/products";
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
    title: "Retail gear only",
    description: "Bats, gloves, pads, keeping gear, and accessories",
  },
  {
    icon: Wrench,
    title: "Need a bundle?",
    description: "Bat care bundles are on the Bundles page — not in the shop grid",
  },
  {
    icon: ShieldCheck,
    title: "Published prices",
    description: "Retail price list — what you see is what you pay",
  },
];

export default function ShopPage() {
  const shopProducts = getShopProducts();

  return (
    <div>
      <PageBanner
        title="Shop All Products"
        description="Premium cricket equipment for every level of play. From custom English willow bats to pro-grade protection gear."
        image="/images/products/the-signature/signature-studio.jpg"
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

          <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 rounded-2xl bg-brand-subtle/80 border border-brand/10 p-4 sm:p-5">
            <div className="flex-1">
              <p className="font-semibold text-zinc-900 text-sm sm:text-base">
                Looking for knocking or restoration?
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                Choose a bat care bundle on the Bundles page.
              </p>
            </div>
            <Link
              href="/bundles"
              className="inline-flex items-center justify-center gap-2 shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
            >
              <Wrench size={16} weight="bold" />
              View bundles
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {SHOP_CATEGORIES.map((key) => (
              <a
                key={key}
                href={`/shop/${key}`}
                className="px-4 py-2 text-sm font-medium rounded-full border border-border text-zinc-700 hover:border-brand hover:text-brand hover:bg-brand-subtle transition-colors"
              >
                {categoryMeta[key].label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
            {shopProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
