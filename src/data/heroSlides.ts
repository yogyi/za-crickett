export type HeroBackground =
  | "mesh"
  | "glow"
  | "deep"
  | "warm"
  | "signature";

export interface HeroSlide {
  id: string;
  background: HeroBackground;
  /** Optional real product photo — never AI composites */
  accentImage?: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const heroBackgroundClass: Record<HeroBackground, string> = {
  mesh: "hero-bg-mesh",
  glow: "hero-bg-glow",
  deep: "hero-bg-deep",
  warm: "hero-bg-warm",
  signature: "hero-bg-signature",
};

export function getHeroBackgroundClass(background: HeroBackground): string {
  return heroBackgroundClass[background];
}

export const heroSlides: HeroSlide[] = [
  {
    id: "greatness",
    background: "glow",
    accentImage: "/images/hero/monarch-hero-cut.webp",
    eyebrow: "Singapore Cricket Equipment",
    title: "Achieve",
    highlight: "Greatness",
    description:
      "Premium English willow bats, pro gloves, and protection — built for cricketers who demand more.",
    primaryCta: { label: "Shop Collection", href: "/shop" },
    secondaryCta: { label: "Customise Your Bat", href: "/product/the-signature" },
  },
  {
    id: "protection",
    background: "deep",
    eyebrow: "Players Edition",
    title: "Pro",
    highlight: "Protection",
    description:
      "Players Edition gloves and pads — lightweight, breathable, and athlete-tested for long innings.",
    primaryCta: { label: "Shop Gloves", href: "/shop/gloves" },
    secondaryCta: { label: "Shop Pads", href: "/shop/pads" },
  },
  {
    id: "coloured-pads",
    background: "warm",
    accentImage: "/images/hero/coloured-red-pads-cut.webp",
    eyebrow: "Stand Out",
    title: "Coloured",
    highlight: "Pads",
    description:
      "Same pro protection in bold colourways. Stand out at the crease with ZA Cricket gear.",
    primaryCta: { label: "Shop Coloured Pads", href: "/product/players-edition-coloured-pads" },
    secondaryCta: { label: "All Pads", href: "/shop/pads" },
  },
  {
    id: "custom",
    background: "signature",
    accentImage: "/images/hero/signature-hero-cut.webp",
    eyebrow: "Flagship",
    title: "The",
    highlight: "Signature",
    description:
      "Fully customisable Grade 1 English Willow. Choose weight, pick-up, profile, handle, grip & engraving.",
    primaryCta: { label: "Build Your Bat", href: "/product/the-signature" },
    secondaryCta: { label: "Bat Prep Bundles", href: "/bundles" },
  },
  {
    id: "bundles",
    background: "mesh",
    eyebrow: "Save More",
    title: "Bundle",
    highlight: "Deals",
    description:
      "Kit up smarter — value bundles on gloves & pads, plus professional bat prep packages.",
    primaryCta: { label: "View Bundles", href: "/bundles" },
    secondaryCta: { label: "View Value Bundle", href: "/product/value-bundle-gloves-pads" },
  },
];
