import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ProductPageContent } from "@/components/shop/ProductPageContent";
import { getProductBySlug, products } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products
    .filter((p) => p.category !== "services")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  if (product.category === "services") {
    redirect("/bundles");
  }

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-zinc-500 mb-6 sm:mb-8 flex flex-wrap items-center gap-x-2 gap-y-1">
          <Link href="/shop" className="hover:text-brand">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/shop/${product.category}`}
            className="hover:text-brand capitalize"
          >
            {product.category.replace("-", " ")}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-900 truncate max-w-[200px] sm:max-w-none">{product.name}</span>
        </nav>

        <ProductPageContent product={product} />
      </div>
    </div>
  );
}
