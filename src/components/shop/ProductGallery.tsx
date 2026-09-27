"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
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
  activeIndex,
  onActiveChange,
}: ProductGalleryProps) {
  const gallery = images?.length ? images : [image];
  const isControlled = typeof activeIndex === "number";
  const [uncontrolledIndex, setUncontrolledIndex] = useState(0);
  const active = Math.min(
    Math.max(isControlled ? activeIndex : uncontrolledIndex, 0),
    gallery.length - 1
  );
  const mainSrc = gallery[active] ?? image;
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    if (!isControlled) {
      setUncontrolledIndex((prev) => Math.min(prev, gallery.length - 1));
    }
  }, [gallery.length, isControlled]);

  const goTo = useCallback(
    (index: number) => {
      const next = Math.min(Math.max(index, 0), gallery.length - 1);
      if (!isControlled) setUncontrolledIndex(next);
      onActiveChange?.(next);
    },
    [gallery.length, isControlled, onActiveChange]
  );

  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);
  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e: TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = (e.touches[0]?.clientX ?? 0) - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (touchStartX.current == null) return;
    const delta = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    if (Math.abs(delta) < 48) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  return (
    <div className="min-w-0 max-w-full space-y-4">
      <div
        className="relative w-full max-w-full aspect-square max-h-[70vh] sm:max-h-none rounded-2xl bg-zinc-100 overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${name} image gallery`}
      >
        <ProductImage
          key={mainSrc}
          src={mainSrc}
          alt={`${name} — image ${active + 1} of ${gallery.length}`}
          priority
          className="object-contain object-center p-3 sm:p-5 select-none max-h-full max-w-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {gallery.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              disabled={active === 0}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 border border-zinc-200 shadow-md flex items-center justify-center text-zinc-800 disabled:opacity-30 disabled:pointer-events-none hover:bg-white transition-colors"
            >
              <CaretLeft size={20} weight="bold" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={active === gallery.length - 1}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 border border-zinc-200 shadow-md flex items-center justify-center text-zinc-800 disabled:opacity-30 disabled:pointer-events-none hover:bg-white transition-colors"
            >
              <CaretRight size={20} weight="bold" />
            </button>

            <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
              {gallery.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  type="button"
                  aria-label={`Go to image ${i + 1}`}
                  aria-current={active === i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    active === i ? "w-6 bg-brand" : "w-2 bg-zinc-400/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {gallery.length > 1 && (
        <div className="flex sm:grid sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible pb-1 w-full min-w-0 max-w-full snap-x snap-mandatory">
          {gallery.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`View image ${i + 1}`}
              aria-pressed={active === i}
              className={`relative shrink-0 w-16 h-16 sm:w-auto sm:h-auto sm:aspect-square rounded-xl overflow-hidden border-2 transition-colors snap-start ${
                active === i
                  ? "border-brand"
                  : "border-transparent hover:border-zinc-200"
              }`}
            >
              <ProductImage
                src={src}
                alt={`${name} thumbnail ${i + 1}`}
                className="object-contain p-0.5"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      {gallery.length > 1 && (
        <p className="text-center text-xs text-zinc-500 sm:hidden">
          Swipe or tap thumbnails · {active + 1} / {gallery.length}
        </p>
      )}
    </div>
  );
}
