"use client";

import { ProductImage } from "@/components/shop/ProductImage";

interface ProductGalleryProps {
  name: string;
  image: string;
  images?: string[];
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
}

export function ProductGallery({
  name,
  image,
  images,
  activeIndex = 0,
  onActiveChange,
}: ProductGalleryProps) {
  const gallery = images?.length ? images : [image];
  const active = Math.min(activeIndex, gallery.length - 1);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square max-h-[70vh] sm:max-h-none rounded-2xl bg-surface overflow-hidden">
        <ProductImage
          src={gallery[active]}
          alt={name}
          priority
          className="object-contain object-center p-4 sm:p-6"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {gallery.length > 1 && (
        <div className="flex sm:grid sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible pb-1 -mx-1 px-1 snap-x snap-mandatory">
          {gallery.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => {
                onActiveChange?.(i);
              }}
              className={`relative shrink-0 w-16 h-16 sm:w-auto sm:h-auto sm:aspect-square rounded-xl overflow-hidden border-2 transition-colors snap-start ${
                active === i
                  ? "border-brand"
                  : "border-transparent hover:border-zinc-200"
              }`}
            >
              <ProductImage
                src={src}
                alt={`${name} view ${i + 1}`}
                className="object-contain p-0.5"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
