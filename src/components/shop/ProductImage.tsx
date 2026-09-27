"use client";

import Image from "next/image";
import { useState } from "react";

const PLACEHOLDER = "/images/za-cricket-logo.png";

interface ProductImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ProductImage({
  src,
  alt,
  fill = true,
  className = "object-cover",
  sizes,
  priority,
}: ProductImageProps) {
  const [shownSrc, setShownSrc] = useState(src);
  const [ready, setReady] = useState(false);
  const isPlaceholder = src === PLACEHOLDER;
  const isTransparentAsset = src.endsWith(".png");

  if (src !== shownSrc) {
    setShownSrc(src);
    setReady(false);
  }

  return (
    <>
      {!ready && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 animate-pulse bg-zinc-200/90"
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        ref={(img) => {
          if (img?.complete && img.naturalWidth > 0) setReady(true);
        }}
        onLoad={() => setReady(true)}
        onError={() => setReady(true)}
        style={{
          opacity: ready ? undefined : 0,
          transitionProperty: "opacity, transform",
          transitionDuration: "300ms, 500ms",
          transitionTimingFunction: "ease",
        }}
        className={
          isPlaceholder
            ? "object-contain p-8 opacity-40"
            : isTransparentAsset
              ? "max-h-full max-w-full object-contain p-4 sm:p-6"
              : `max-h-full max-w-full ${className}`
        }
      />
    </>
  );
}

export { PLACEHOLDER };
