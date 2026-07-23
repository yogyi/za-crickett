"use client";

import { useEffect, useMemo, useState } from "react";
import { Check } from "@phosphor-icons/react";
import { ProductDetailClient } from "@/components/shop/ProductDetailClient";
import { ProductGallery } from "@/components/shop/ProductGallery";
import type { Product } from "@/types";

interface ProductPageContentProps {
  product: Product;
}

export function ProductPageContent({ product }: ProductPageContentProps) {
  const [variant, setVariant] = useState(product.variants?.[0]?.label ?? "");
  const [imageIndex, setImageIndex] = useState(0);

  const hasVariantImages = Boolean(product.variants?.some((v) => v.image));

  const variantIndex = Math.max(
    0,
    product.variants?.findIndex((v) => v.label === variant) ?? 0
  );

  const galleryImages = useMemo(() => {
    if (hasVariantImages && product.variants) {
      return product.variants.map((v) => v.image ?? product.image);
    }
    return product.images?.length ? product.images : [product.image];
  }, [product, hasVariantImages]);

  const activeIndex = hasVariantImages ? variantIndex : imageIndex;

  // Keep image index in range when switching products / gallery sizes
  useEffect(() => {
    setImageIndex(0);
    setVariant(product.variants?.[0]?.label ?? "");
  }, [product.id, product.variants]);

  useEffect(() => {
    setImageIndex((prev) =>
      Math.min(prev, Math.max(galleryImages.length - 1, 0))
    );
  }, [galleryImages.length]);

  const displayImage = galleryImages[activeIndex] ?? product.image;

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
      <div>
        <ProductGallery
          name={product.name}
          image={displayImage}
          images={galleryImages}
          activeIndex={activeIndex}
          onActiveChange={(index) => {
            if (hasVariantImages) {
              const next = product.variants?.[index];
              if (next) setVariant(next.label);
              return;
            }
            setImageIndex(index);
          }}
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
          <ProductDetailClient
            product={product}
            variant={variant}
            onVariantChange={setVariant}
            displayImage={displayImage}
          />
        </div>
      </div>
    </div>
  );
}
