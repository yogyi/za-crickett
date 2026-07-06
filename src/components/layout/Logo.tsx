import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "footer";
  className?: string;
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const height = variant === "footer" ? 48 : 44;

  return (
    <Link href="/" className={`inline-flex items-center shrink-0 ${className}`}>
      <Image
        src="/images/za-cricket-logo.png"
        alt="ZA Cricket"
        width={height * 2.2}
        height={height}
        className="h-9 sm:h-11 w-auto object-contain"
        priority={variant === "default"}
      />
    </Link>
  );
}
