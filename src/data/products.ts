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
  "/images/products/the-eagle/eagle-front-02.jpg",
  "/images/products/the-eagle/eagle-hero.jpg",
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
  "/images/products/gloves/ghost-edition.png",
];

const whitePadsImages = ["/images/products/pads/white-pads.png"];

const colouredPadsImages = [
  "/images/products/pads/coloured-red-pads.png",
  "/images/products/pads/black-pads.jpg",
];

const valueBundleImages = [
  "/images/products/value-bundle-gloves-pads.png",
  "/images/products/gloves/players-edition.png",
  "/images/products/pads/white-pads.png",
];

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
    image: valueBundleImages[0],
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
      "The pinnacle of the ZA Cricket range. A fully bespoke Grade 1 English Willow bat built to your exact specifications — from willow selection and weight to handle type, grip, and profile.",
    tagline: "Grade 1 · Fully Customisable",
    image: signatureImages[0],
    images: signatureImages,
    badge: "Flagship",
    inStock: true,
    features: [
      "Premium-selection Grade 1 English Willow",
      "Fully customisable weight, pick-up, profile, handle, and grip",
      "Built to individual player specifications",
      "Personal engraving available",
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
      "Where craftsmanship meets performance. The Eagle is made from premium Grade 1 English Willow with minimal blemishes and tight, straight grains for the serious competitor.",
    tagline: "Grade 1 English Willow",
    image: eagleImages[0],
    images: eagleImages,
    badge: "Athlete Edition",
    inStock: true,
    features: [
      "Premium Grade 1 English Willow",
      "Minimal blemishes with tight, straight grains",
      "Enhanced edge thickness",
      "Deep, powerful sweet spot",
    ],
  },
  {
    id: "bat-monarch",
    slug: "the-monarch",
    name: "The Monarch",
    price: 299,
    category: "bats",
    description:
      "Built for the player who demands performance without compromise. The Monarch is crafted from hand-selected Grade 2 English Willow with a generous sweet spot, balanced pick-up, and a clean, responsive sound.",
    tagline: "Grade 2 English Willow",
    image: monarchImages[0],
    images: monarchImages,
    inStock: true,
    features: [
      "Hand-selected Grade 2 English Willow",
      "Balanced weight distribution for enhanced control",
      "Traditional profile",
      "Generous, powerful sweet spot",
    ],
  },
  {
    id: "gloves-players",
    slug: "players-edition-gloves",
    name: "Players Edition Gloves",
    price: 40,
    category: "gloves",
    description:
      "Everyday reliability engineered for performance. The Players Edition uses a classic sausage-finger design with high-density foam and a durable, breathable palm for players who train and compete week after week.",
    image: playersGlovesImages[0],
    images: playersGlovesImages,
    inStock: true,
    features: [
      "Sausage-finger segmented protection",
      "High-density shock-absorbing foam",
      "Breathable, durable palm construction",
    ],
  },
  {
    id: "gloves-ghost",
    slug: "ghost-edition-gloves",
    name: "Ghost Edition Gloves",
    price: 50,
    category: "gloves",
    description:
      "Precision, silence, power. The all-white Ghost Edition pairs a clean ZA silhouette with segmented protective padding, a soft grip palm, and a secure wrist strap for confident training and match play.",
    image: ghostGlovesImages[0],
    images: ghostGlovesImages,
    badge: "Limited",
    inStock: true,
    features: [
      "All-white ZA profile with bold branding",
      "Segmented protective padding for flexibility",
      "Soft grip palm with secure wrist strap",
    ],
  },
  {
    id: "pads-white",
    slug: "players-edition-white-pads",
    name: "Players Edition White Pads",
    price: 80,
    category: "pads",
    description:
      "Protection built to move with you. Players Edition Pads combine lightweight, high-density foam with a traditional three-strap design for a secure, comfortable fit through long innings.",
    image: whitePadsImages[0],
    images: whitePadsImages,
    inStock: true,
    features: [
      "Lightweight, high-density protective foam",
      "Traditional three-strap secure fit",
      "Reinforced knee rolls and shin protection",
      "Available in white, red, and green",
    ],
  },
  {
    id: "pads-coloured",
    slug: "players-edition-coloured-pads",
    name: "Players Edition Coloured Pads",
    price: 80,
    category: "pads",
    description:
      "Players Edition protection in bold red and green colourways, with lightweight high-density foam, reinforced knee rolls, and a secure traditional three-strap fit.",
    image: colouredPadsImages[0],
    images: colouredPadsImages,
    variants: [
      {
        id: "red",
        label: "Red",
        color: "#DC2626",
        image: "/images/products/pads/coloured-red-pads.png",
      },
      {
        id: "green",
        label: "Green",
        color: "#15803D",
      },
    ],
    inStock: true,
    features: [
      "Available in red and green",
      "Lightweight, high-density protective foam",
      "Traditional three-strap secure fit",
      "Reinforced knee rolls and shin protection",
    ],
  },
  {
    id: "wk-gloves",
    slug: "za-wk-players-edition-gloves",
    name: "ZA WK Players Edition Gloves",
    price: 75,
    category: "wicket-keeping",
    description:
      "Safe hands, every time. ZA Wicket Keeping Gloves combine an internal support cage, high-density padding, and a soft sure-grip palm to help keepers take the toughest chances cleanly.",
    image: PLACEHOLDER,
    inStock: true,
    features: [
      "Internal support cage for finger protection",
      "High-density palm and back-of-hand padding",
      "Sure-grip palm surface for clean takes",
      "Available in white, red, and black",
    ],
  },
  {
    id: "wk-pads",
    slug: "za-wk-players-edition-pads",
    name: "ZA WK Players Edition Pads",
    price: 60,
    category: "wicket-keeping",
    description:
      "Built for the player behind the stumps who never switches off. ZA Wicket Keeping Pads provide low-profile, lightweight protection designed for speed, mobility, and extended wear.",
    image: PLACEHOLDER,
    inStock: true,
    features: [
      "Low-profile design for speed behind the stumps",
      "Lightweight construction for extended wear",
      "Available in white, red, and black",
    ],
  },
  {
    id: "bundle-value",
    slug: "value-bundle-gloves-pads",
    name: "2x Players Edition Gloves + 1x Players Edition Pads",
    price: 145,
    category: "value-bundles",
    description:
      "Complete protection bundle. Two pairs of Players Edition Gloves plus one pair of Players Edition Pads.",
    image: valueBundleImages[0],
    images: valueBundleImages,
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
    image: monarchImages[1],
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
    image: monarchImages[0],
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
  const filtered = products.filter((p) => p.category === category);

  if (category === "bats") {
    const batOrder = ["bat-monarch", "bat-eagle", "bat-signature"];
    return [...filtered].sort(
      (a, b) => batOrder.indexOf(a.id) - batOrder.indexOf(b.id)
    );
  }

  return filtered;
}

export function formatPrice(amount: number, country: CountryCode = "SG"): string {
  return formatPriceForCountry(amount, country);
}
