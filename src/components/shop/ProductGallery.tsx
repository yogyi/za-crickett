"use client";

import { useState } from "react";
import { ProductImage } from "@/components/shop/ProductImage";

interface ProductGalleryProps {
  name: string;
  image: string;
  images?: string[];
}

export function ProductGallery({ name, image, images }: ProductGalleryProps) {
  const gallery = images?.length ? images : [image];
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square max-h-[70vh] sm:max-h-none rounded-2xl bg-surface overflow-hidden">
        <ProductImage
          src={gallery[active]}
          alt={name}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {gallery.length > 1 && (
        <div className="flex sm:grid sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible pb-1 -mx-1 px-1 snap-x snap-mandatory">
          {gallery.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              className={`relative shrink-0 w-16 h-16 sm:w-auto sm:h-auto sm:aspect-square rounded-xl overflow-hidden border-2 transition-colors snap-start ${
                active === i
                  ? "border-brand"
                  : "border-transparent hover:border-zinc-200"
              }`}
            >
              <ProductImage
                src={src}
                alt={`${name} view ${i + 1}`}
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
