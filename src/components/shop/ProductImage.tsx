import Image from "next/image";

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
  const isPlaceholder = src === PLACEHOLDER;

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={
        isPlaceholder
          ? "object-contain p-8 opacity-40"
          : className
      }
    />
  );
}

export { PLACEHOLDER };
