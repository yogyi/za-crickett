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
      "Built for cricketers who demand more — Grade 1 English willow bats, tested on pitch by five sponsored athletes.",
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
    accentImage: "/images/hero/coloured-red-pads-cut.webp?v=7",
    eyebrow: "Stand Out",
    title: "Coloured",
    highlight: "Pads",
    description:
      "Stand out at the crease — Players Edition pads in white, red, green, or black, with the same pro foam.",
    primaryCta: { label: "Shop Pads", href: "/product/players-edition-pads" },
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
      "Fully customisable Grade 1 English Willow. Set weight, grain count, and handle shape on the page. Profile, grip, and pick-up are confirmed on WhatsApp.",
    primaryCta: { label: "Build Your Bat", href: "/product/the-signature" },
    secondaryCta: { label: "Shop All Bats", href: "/shop/bats" },
  },
  {
    id: "accessories",
    background: "mesh",
    eyebrow: "Complete Your Kit",
    title: "Match",
    highlight: "Accessories",
    description:
      "Thigh pads and custom duffel bags — finish your kit with ZA Cricket essentials.",
    primaryCta: { label: "Shop Accessories", href: "/shop/accessories" },
    secondaryCta: { label: "Wicket Keeping", href: "/shop/wicket-keeping" },
  },
];
