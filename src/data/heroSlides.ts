export interface HeroSlide {
  id: string;
  image: string;
  /** Desktop full-bleed background positioning */
  imagePosition?: string;
  /** Mobile hero panel — products sit on the right in artwork */
  imagePositionMobile?: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export const heroSlides: HeroSlide[] = [
  {
    id: "greatness",
    image: "/images/hero/hero-carousel-01-bat.png",
    imagePosition: "object-cover object-center",
    imagePositionMobile: "object-cover object-[78%_center]",
    eyebrow: "Singapore Cricket Equipment",
    title: "Achieve",
    highlight: "Greatness",
    description:
      "Premium English willow bats, pro gloves, and protection — built for Singapore players who demand more.",
    primaryCta: { label: "Shop Collection", href: "/shop" },
    secondaryCta: { label: "Customise Your Bat", href: "/product/the-signature" },
  },
  {
    id: "protection",
    image: "/images/hero/hero-carousel-02-gloves-pads.png",
    imagePosition: "object-cover object-center",
    imagePositionMobile: "object-cover object-[78%_center]",
    eyebrow: "Players Edition",
    title: "Pro",
    highlight: "Protection",
    description:
      "Players Edition gloves and pads — lightweight, breathable, athlete-tested on Singapore pitches.",
    primaryCta: { label: "Shop Gloves", href: "/shop/gloves" },
    secondaryCta: { label: "Shop Pads", href: "/shop/pads" },
  },
  {
    id: "coloured-pads",
    image: "/images/hero/hero-carousel-03-red-pads.png",
    imagePosition: "object-cover object-center",
    imagePositionMobile: "object-cover object-[78%_center]",
    eyebrow: "Stand Out",
    title: "Coloured",
    highlight: "Pads",
    description:
      "Same pro protection in bold red colourways. Stand out at the crease with ZA Cricket gear.",
    primaryCta: { label: "Shop Coloured Pads", href: "/product/players-edition-coloured-pads" },
    secondaryCta: { label: "All Pads", href: "/shop/pads" },
  },
  {
    id: "custom",
    image: "/images/hero/hero-carousel-04-signature.png",
    imagePosition: "object-cover object-center",
    imagePositionMobile: "object-cover object-[78%_center]",
    eyebrow: "Flagship",
    title: "The",
    highlight: "Signature",
    description:
      "Fully customisable top-grade English willow. Choose weight, profile, handle & engraving.",
    primaryCta: { label: "Build Your Bat", href: "/product/the-signature" },
    secondaryCta: { label: "Bat Prep Bundles", href: "/bundles" },
  },
  {
    id: "bundles",
    image: "/images/hero/hero-carousel-05-bundles.png",
    imagePosition: "object-cover object-center",
    imagePositionMobile: "object-cover object-[78%_center]",
    eyebrow: "Save More",
    title: "Bundle",
    highlight: "Deals",
    description:
      "Kit up smarter — value bundles on gloves & pads, plus professional bat prep packages.",
    primaryCta: { label: "View Bundles", href: "/bundles" },
    secondaryCta: { label: "View Value Bundle", href: "/product/value-bundle-gloves-pads" },
  },
];
