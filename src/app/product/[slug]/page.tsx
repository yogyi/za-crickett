import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { ProductDetailClient } from "@/components/shop/ProductDetailClient";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { getProductBySlug, products } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
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

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <ProductGallery
              name={product.name}
              image={product.image}
              images={product.images}
            />
            {product.badge && (
              <span className="inline-block mt-4 px-3 py-1.5 bg-brand text-white text-xs font-semibold rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          <div>
            {product.tagline && (
              <p className="text-brand font-semibold text-sm mb-2">
                {product.tagline}
              </p>
            )}
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              {product.name}
            </h1>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              {product.description}
            </p>

            {product.features && product.features.length > 0 && (
              <ul className="mt-6 space-y-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-zinc-700"
                  >
                    <Check size={16} weight="bold" className="text-brand shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 pt-8 border-t border-border">
              <ProductDetailClient product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
