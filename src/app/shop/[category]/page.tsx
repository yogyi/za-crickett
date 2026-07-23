import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ProductCard } from "@/components/shop/ProductCard";
import {
  SHOP_CATEGORIES,
  categoryMeta,
  getProductsByCategory,
} from "@/data/products";
import type { ProductCategory } from "@/types";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return SHOP_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (category === "services" || category === "bat-bundles") {
    return { title: "Bundles" };
  }
  const meta = categoryMeta[category as ProductCategory];
  if (!meta) return { title: "Shop" };
  return {
    title: meta.label,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (category === "services" || category === "bat-bundles") {
    redirect("/bundles");
  }

  if (!SHOP_CATEGORIES.includes(category as ProductCategory)) {
    notFound();
  }

  const cat = category as ProductCategory;
  const meta = categoryMeta[cat];
  const categoryProducts = getProductsByCategory(cat);

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
            {meta.label}
          </h1>
          <p className="mt-3 text-zinc-600">{meta.description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
