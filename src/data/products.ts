import type { Product, ProductCategory } from "@/types";
import type { CountryCode } from "@/lib/currency";
import { formatPrice as formatPriceForCountry } from "@/lib/currency";

const PLACEHOLDER = "/images/za-cricket-logo.png";

const monarchImages = [
  "/images/products/the-monarch/monarch-hero.jpg",
  "/images/products/the-monarch/monarch-front-02.jpg",
  "/images/products/the-monarch/monarch-front-03.jpg",
  "/images/products/the-monarch/monarch-angle.jpg",
  "/images/products/the-monarch/monarch-detail-01.jpg",
  "/images/products/the-monarch/monarch-detail-02.jpg",
  "/images/products/the-monarch/monarch-lifestyle-01.jpg",
  "/images/products/the-monarch/monarch-lifestyle-02.jpg",
];

const eagleImages = [
  "/images/products/the-eagle/eagle-hero.jpg",
  "/images/products/the-eagle/eagle-front-02.jpg",
  "/images/products/the-eagle/eagle-front-03.jpg",
  "/images/products/the-eagle/eagle-detail-01.jpg",
  "/images/products/the-eagle/eagle-detail-02.jpg",
  "/images/products/the-eagle/eagle-lifestyle-01.jpg",
  "/images/products/the-eagle/eagle-lifestyle-02.jpg",
];

const signatureImages = [
  "/images/products/the-signature/signature-hero.jpg",
  "/images/products/the-signature/signature-front-02.jpg",
  "/images/products/the-signature/signature-front-03.jpg",
  "/images/products/the-signature/signature-side.jpg",
  "/images/products/the-signature/signature-angle.jpg",
  "/images/products/the-signature/signature-detail.jpg",
];

const playersGlovesImages = [
  "/images/products/gloves/players-edition.png",
  "/images/products/gloves/img_8684.jpg",
  "/images/products/gloves/img_8685.jpg",
  "/images/products/gloves/img_8686.jpg",
  "/images/products/gloves/img_8687.jpg",
];

const ghostGlovesImages = [
  "/images/products/gloves/ghost-gloves.jpg",
  "/images/products/gloves/img_8684.jpg",
  "/images/products/gloves/img_8685.jpg",
];

const whitePadsImages = ["/images/products/pads/white-pads.png"];

const colouredPadsImages = ["/images/products/pads/coloured-red-pads.png"];

export const categoryMeta: Record<
  ProductCategory,
  { label: string; description: string; image: string }
> = {
  bats: {
    label: "Bats",
    description: "English willow crafted for Singapore conditions.",
    image: monarchImages[0],
  },
  gloves: {
    label: "Gloves",
    description: "Lightweight protection with pro-level feel.",
    image: playersGlovesImages[0],
  },
  pads: {
    label: "Batting Pads",
    description: "Comfort and coverage for long innings.",
    image: whitePadsImages[0],
  },
  "wicket-keeping": {
    label: "Wicket Keeping",
    description: "Gear built for keepers who command the game.",
    image: PLACEHOLDER,
  },
  "value-bundles": {
    label: "Value Bundles",
    description: "Save more when you kit up together.",
    image: playersGlovesImages[0],
  },
  "bat-bundles": {
    label: "Bat Bundles",
    description: "Professional prep and care for your blade.",
    image: monarchImages[1],
  },
};

export const products: Product[] = [
  {
    id: "bat-signature",
    slug: "the-signature",
    name: "The Signature",
    price: 499,
    category: "bats",
    description:
      "Fully customisable top-grade English willow bat. Built to your exact preferences for weight, profile, and handle shape.",
    tagline: "Top Grade · Fully Customisable",
    image: signatureImages[0],
    images: signatureImages,
    badge: "Flagship",
    inStock: true,
    features: [
      "Top-grade English willow",
      "Hand-selected clefts",
      "Personal engraving available",
      "Singapore-tuned balance",
    ],
    customization: [
      {
        id: "weight",
        label: "Bat Weight",
        type: "range",
        min: 1080,
        max: 1300,
        step: 10,
        unit: "g",
        helperText:
          "Slide to set your preferred pick-up weight. Club players often choose 1160g–1240g.",
      },
      {
        id: "grains",
        label: "Number of Grains",
        type: "range",
        min: 6,
        max: 12,
        step: 1,
        unit: "grains",
        helperText:
          "English willow grain count affects look and performance. 8–10 grains is a popular balance.",
      },
      {
        id: "handle",
        label: "Handle Shape",
        type: "select",
        options: ["Round", "Oval", "Semi-Oval"],
        helperText: "Round suits wristy players; oval and semi-oval offer a firmer top-hand feel.",
      },
      {
        id: "engraving",
        label: "Personal Engraving",
        type: "text",
        placeholder: "Your name or initials (optional)",
      },
    ],
  },
  {
    id: "bat-eagle",
    slug: "the-eagle",
    name: "The Eagle",
    price: 399,
    category: "bats",
    description:
      "Suryansh Gulecha's signature line. Aggressive profile with a sweet spot tuned for power hitting.",
    tagline: "Suryansh Gulecha Line",
    image: eagleImages[0],
    images: eagleImages,
    badge: "Athlete Edition",
    inStock: true,
    features: [
      "Premium Kashmir willow",
      "Athlete-tested profile",
      "Extended sweet spot",
      "Light pick-up",
    ],
  },
  {
    id: "bat-monarch",
    slug: "the-monarch",
    name: "The Monarch",
    price: 299,
    category: "bats",
    description:
      "Reliable performance for club and school cricket. Balanced pick-up with a classic profile. Official ZA Cricket product photography.",
    tagline: "Everyday Performance",
    image: monarchImages[0],
    images: monarchImages,
    inStock: true,
    features: [
      "Grade A Kashmir willow",
      "Balanced mid-profile",
      "ZA Cricket branded sticker",
      "Ready to play",
    ],
  },
  {
    id: "gloves-players",
    slug: "players-edition-gloves",
    name: "Players Edition Gloves",
    price: 40,
    category: "gloves",
    description:
      "Lightweight batting gloves with reinforced finger protection and breathable palm mesh.",
    image: playersGlovesImages[0],
    images: playersGlovesImages,
    inStock: true,
    features: ["Ventilated palm", "Reinforced fingers", "Secure wrist strap"],
  },
  {
    id: "gloves-ghost",
    slug: "ghost-edition-gloves",
    name: "Ghost Edition Gloves",
    price: 50,
    category: "gloves",
    description:
      "Stealth black design with premium padding. Built for players who want edge and comfort.",
    image: ghostGlovesImages[0],
    images: ghostGlovesImages,
    badge: "Limited",
    inStock: true,
    features: ["Premium padding", "Sleek black finish", "Pro-grade grip"],
  },
  {
    id: "pads-white",
    slug: "players-edition-white-pads",
    name: "Players Edition White Pads",
    price: 80,
    category: "pads",
    description:
      "Classic white batting pads with triple-layer protection and ergonomic knee roll.",
    image: whitePadsImages[0],
    images: whitePadsImages,
    inStock: true,
    features: ["Triple-layer protection", "Lightweight shell", "Adjustable straps"],
  },
  {
    id: "pads-coloured",
    slug: "players-edition-coloured-pads",
    name: "Players Edition Coloured Pads",
    price: 80,
    category: "pads",
    description:
      "Same pro protection in bold colourways. Stand out at the crease.",
    image: colouredPadsImages[0],
    images: colouredPadsImages,
    variants: [
      { id: "red", label: "Red", color: "#DC2626" },
      { id: "black", label: "Black", color: "#171717" },
    ],
    inStock: true,
    features: ["Red & Black available", "Pro-grade padding", "Ergonomic fit"],
  },
  {
    id: "wk-gloves",
    slug: "za-wk-players-edition-gloves",
    name: "ZA WK Players Edition Gloves",
    price: 75,
    category: "wicket-keeping",
    description:
      "Wicket keeping gloves with enhanced webbing and shock absorption for all-day comfort.",
    image: PLACEHOLDER,
    inStock: true,
    features: ["Enhanced webbing", "Shock absorption", "Secure wrist closure"],
  },
  {
    id: "wk-pads",
    slug: "za-wk-players-edition-pads",
    name: "ZA WK Players Edition Pads",
    price: 60,
    category: "wicket-keeping",
    description:
      "Low-profile keeping pads designed for agility behind the stumps.",
    image: PLACEHOLDER,
    inStock: true,
    features: ["Low-profile design", "Quick lateral movement", "Durable outer"],
  },
  {
    id: "bundle-value",
    slug: "value-bundle-gloves-pads",
    name: "2x Players Edition Gloves + 1x Players Edition Pads",
    price: 145,
    category: "value-bundles",
    description:
      "Complete protection bundle. Two pairs of Players Edition Gloves plus one pair of Players Edition Pads.",
    image: playersGlovesImages[0],
    badge: "Save $15",
    inStock: true,
    features: [
      "2x Players Edition Gloves",
      "1x Players Edition Pads (White)",
      "Bundle savings included",
    ],
  },
  {
    id: "bundle-basic",
    slug: "basic-bat-bundle",
    name: "Basic Bundle",
    price: 35,
    category: "bat-bundles",
    description: "Essential bat preparation for match-ready performance.",
    image: monarchImages[2],
    inStock: true,
    features: ["Hand knocking", "Oiling", "Scuff sheet"],
  },
  {
    id: "bundle-performance",
    slug: "performance-bat-bundle",
    name: "Performance Bundle",
    price: 50,
    category: "bat-bundles",
    description: "Full prep package to maximise your bat's potential.",
    image: monarchImages[3],
    badge: "Popular",
    inStock: true,
    features: [
      "Hand knocking",
      "Oiling",
      "Scuff sheet",
      "Epoxy toe guard",
      "Bat grip",
    ],
  },
  {
    id: "bundle-restore",
    slug: "restore-bat-bundle",
    name: "Restore Bundle",
    price: 100,
    category: "bat-bundles",
    description:
      "Complete restoration service to bring your bat back to peak condition.",
    image: monarchImages[4],
    inStock: true,
    features: [
      "Repair",
      "Cleaning",
      "Oiling",
      "Scuff sheet",
      "Epoxy toe guard",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(amount: number, country: CountryCode = "SG"): string {
  return formatPriceForCountry(amount, country);
}
