import type { Metadata } from "next";
import { ProductCard } from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Bundles",
  description:
    "Value bundles and bat care packages to save on premium cricket gear.",
};

const bundleProducts = products.filter(
  (p) => p.category === "value-bundles" || p.category === "bat-bundles"
);

export default function BundlesPage() {
  const valueBundles = bundleProducts.filter(
    (p) => p.category === "value-bundles"
  );
  const batBundles = bundleProducts.filter((p) => p.category === "bat-bundles");

  return (
    <div>
      <PageBanner
        title="Bundle Offers"
        description="Kit up smarter with curated bundles designed to save you money and get you match-ready faster."
        image="/images/products/gloves/players-edition.png"
      />

      <div className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="p-6 rounded-2xl bg-brand-subtle border border-brand/10">
              <h3 className="font-bold text-zinc-900">Value Bundles</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Combine gloves and pads at a discounted price. Perfect for players
                building their kit or parents equipping young cricketers.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="font-bold text-zinc-900">Bat Bundles</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Professional bat preparation services. From basic knocking to
                full restoration, our team handles every detail so your bat is
                ready to perform.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-zinc-900 mb-6">
              Value Bundles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueBundles.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-6">Bat Bundles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {batBundles.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
