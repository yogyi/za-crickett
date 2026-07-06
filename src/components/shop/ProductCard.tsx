"use client";

import Link from "next/link";
import { ShoppingBag } from "@phosphor-icons/react";
import { useFormatPrice } from "@/hooks/useFormatPrice";
import type { Product } from "@/types";
import { useCart } from "@/store/cart";
import { ProductImage } from "@/components/shop/ProductImage";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((s) => s.addItem);
  const formatPrice = useFormatPrice();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.customization?.length || product.variants?.length) {
      return;
    }
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const needsOptions =
    (product.customization?.length ?? 0) > 0 ||
    (product.variants?.length ?? 0) > 0;

  return (
    <article className="group relative">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] rounded-2xl bg-surface overflow-hidden mb-4">
          <ProductImage
            src={product.image}
            alt={product.name}
            sizes="(max-width: 768px) 50vw, 25vw"
            className="transition-transform duration-500 group-hover:scale-105 object-cover"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 bg-brand text-white text-[11px] font-semibold rounded-full">
              {product.badge}
            </span>
          )}
          {!product.inStock && (
            <span className="absolute inset-0 bg-white/70 flex items-center justify-center text-sm font-semibold text-zinc-600">
              Sold Out
            </span>
          )}
          {product.inStock && (
            <button
              type="button"
              onClick={handleQuickAdd}
              className={`absolute bottom-3 right-3 h-11 w-11 flex items-center justify-center rounded-full shadow-lg transition-all active:scale-[0.98] ${
                needsOptions
                  ? "bg-white text-zinc-400 cursor-default sm:opacity-0 sm:group-hover:opacity-100"
                  : "bg-brand text-white hover:bg-brand-dark sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0"
              }`}
              aria-label={
                needsOptions ? "View options" : `Add ${product.name} to cart`
              }
              disabled={needsOptions}
            >
              <ShoppingBag size={18} weight="fill" />
            </button>
          )}
        </div>
        <div>
          {product.tagline && (
            <p className="text-xs text-brand font-medium mb-1">{product.tagline}</p>
          )}
          <h3 className="font-medium text-zinc-900 group-hover:text-brand transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="mt-1 text-base font-semibold text-zinc-900">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}
