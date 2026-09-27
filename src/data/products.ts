import type { Product, ProductCategory } from "@/types";
import type { CountryCode } from "@/lib/currency";
import { formatPrice as formatPriceForCountry } from "@/lib/currency";

const PLACEHOLDER = "/images/za-cricket-logo.png";

const monarchImages = [
  "/images/products/the-monarch/monarch-studio.jpg",
  "/images/products/the-monarch/monarch-front-02.jpg",
  "/images/products/the-monarch/monarch-front-03.jpg",
  "/images/products/the-monarch/monarch-angle.jpg",
  "/images/products/the-monarch/monarch-detail-01.jpg",
  "/images/products/the-monarch/monarch-detail-02.jpg",
  "/images/products/the-monarch/monarch-lifestyle-01.jpg",
  "/images/products/the-monarch/monarch-lifestyle-02.jpg",
];

const eagleImages = [
  "/images/products/the-eagle/eagle-studio.jpg",
  "/images/products/the-eagle/eagle-hero.jpg",
  "/images/products/the-eagle/eagle-front-03.jpg",
  "/images/products/the-eagle/eagle-detail-01.jpg",
  "/images/products/the-eagle/eagle-detail-02.jpg",
  "/images/products/the-eagle/eagle-lifestyle-01.jpg",
  "/images/products/the-eagle/eagle-lifestyle-02.jpg",
];

const signatureImages = [
  "/images/products/the-signature/signature-studio.jpg",
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

const ghostGlovesImages = ["/images/products/gloves/ghost-edition.png"];

const playersPadsImages = [
  "/images/products/pads/white-pads.png",
  "/images/products/pads/coloured-red-pads.png",
  "/images/products/pads/green-pads-studio.jpg",
  "/images/products/pads/black-pads-studio.jpg",
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
    image: playersPadsImages[0],
  },
  "wicket-keeping": {
    label: "Wicket Keeping",
    description: "Gloves, pads, and inners for keepers.",
    image: PLACEHOLDER,
  },
  accessories: {
    label: "Accessories",
    description: "Thigh pads and custom duffel bags.",
    image: PLACEHOLDER,
  },
  services: {
    label: "Bundles",
    description: "Bat care bundles for knocking, oiling, and restoration.",
    image: PLACEHOLDER,
  },
};

export const SHOP_CATEGORIES: ProductCategory[] = [
  "bats",
  "gloves",
  "pads",
  "wicket-keeping",
  "accessories",
];

/** Published retail catalogue plus bat care bundles. */
export const products: Product[] = [
  {
    id: "bat-signature",
    slug: "the-signature",
    name: "Signature Edition",
    price: 499,
    category: "bats",
    description:
      "The pinnacle of the ZA Cricket range. A bespoke Grade 1 English Willow bat. Set weight, grain count, and handle shape on this page. Profile, grip, and the finer pick-up details are confirmed with us on WhatsApp.",
    tagline: "Custom · Grade 1 English Willow",
    image: signatureImages[0],
    images: signatureImages,
    badge: "Flagship",
    inStock: true,
    features: [
      "Premium-selection Grade 1 English Willow",
      "Set weight, grain count, and handle shape on this page",
      "Profile, grip, and pick-up details confirmed on WhatsApp",
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
        helperText:
          "Round suits wristy players; oval and semi-oval offer a firmer top-hand feel.",
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
    name: "Eagle Edition",
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
    name: "Monarch Edition",
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
    id: "pads-players",
    slug: "players-edition-pads",
    name: "Players Edition Pads",
    price: 80,
    category: "pads",
    description:
      "Protection built to move with you. Players Edition Pads combine lightweight, high-density foam with a traditional three-strap design for a secure, comfortable fit through long innings.",
    image: playersPadsImages[0],
    images: playersPadsImages,
    variants: [
      {
        id: "white",
        label: "White",
        color: "#F4F4F5",
        image: "/images/products/pads/white-pads.png",
      },
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
        image: "/images/products/pads/green-pads-studio.jpg",
      },
      {
        id: "black",
        label: "Black",
        color: "#18181B",
        image: "/images/products/pads/black-pads-studio.jpg",
      },
    ],
    inStock: true,
    features: [
      "Available in white, red, green, and black",
      "Lightweight, high-density protective foam",
      "Traditional three-strap secure fit",
      "Reinforced knee rolls and shin protection",
    ],
  },
  {
    id: "wk-pads",
    slug: "wicket-keeping-pads",
    name: "Wicket-keeping Pads",
    price: 55,
    category: "wicket-keeping",
    description:
      "Built for the player behind the stumps who never switches off. Low-profile, lightweight protection designed for speed, mobility, and extended wear.",
    image: PLACEHOLDER,
    inStock: true,
    features: [
      "Low-profile design for speed behind the stumps",
      "Lightweight construction for extended wear",
      "Secure strap fit for long sessions",
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
    id: "wk-gloves",
    slug: "wicket-keeping-gloves",
    name: "Wicket-keeping Gloves",
    price: 70,
    category: "wicket-keeping",
    description:
      "Safe hands, every time. ZA Wicket-keeping Gloves combine an internal support cage, high-density padding, and a soft sure-grip palm to help keepers take the toughest chances cleanly.",
    image: PLACEHOLDER,
    inStock: true,
    features: [
      "Internal support cage for finger protection",
      "High-density palm and back-of-hand padding",
      "Sure-grip palm surface for clean takes",
    ],
  },
  {
    id: "wk-inners",
    slug: "wicket-keeping-inners",
    name: "Wicket-keeping Inners",
    price: 15,
    category: "wicket-keeping",
    description:
      "Lightweight cotton inners for comfort and moisture control under your keeping gloves.",
    image: PLACEHOLDER,
    inStock: true,
    features: [
      "Soft cotton feel for all-day comfort",
      "Helps manage moisture behind the gloves",
      "Standard fit for most keepers",
    ],
  },
  {
    id: "thigh-pad",
    slug: "thigh-pad",
    name: "Thigh Pad",
    price: 70,
    category: "accessories",
    description:
      "Targeted thigh protection for batting — designed for mobility without sacrificing coverage.",
    image: PLACEHOLDER,
    inStock: true,
    features: [
      "Focused impact protection",
      "Secure, comfortable fit under whites",
      "Built for club and representative cricket",
    ],
  },
  {
    id: "duffel-bag",
    slug: "custom-duffel-bag",
    name: "Custom Duffel Bag",
    price: 99,
    category: "accessories",
    description:
      "A durable custom ZA duffel bag sized for bats, pads, and match-day kit.",
    image: PLACEHOLDER,
    inStock: true,
    features: [
      "Spacious main compartment for full kit",
      "Custom ZA branding",
      "Built for training and travel",
    ],
  },
  {
    id: "bundle-basic",
    slug: "basic-bat-bundle",
    name: "Basic Bundle",
    price: 35,
    category: "services",
    description:
      "Essential bat care bundle — professional knocking, oiling, and scuff sheet so your willow is ready for nets and match play.",
    tagline: "Bundle",
    image: PLACEHOLDER,
    badge: "Bundle",
    inStock: true,
    features: ["Hand knocking", "Oiling", "Scuff sheet"],
  },
  {
    id: "bundle-performance",
    slug: "performance-bat-bundle",
    name: "Performance Bundle",
    price: 50,
    category: "services",
    description:
      "Full match-ready bat care bundle — knocking and oiling plus epoxy toe guard and a fresh grip for Singapore matting and hard surfaces.",
    tagline: "Bundle",
    image: PLACEHOLDER,
    badge: "Recommended",
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
    category: "services",
    description:
      "Complete restoration bundle — repair, clean, oil, protect, and finish a tired bat.",
    tagline: "Bundle",
    image: PLACEHOLDER,
    badge: "Bundle",
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

/** Products shown in the main shop grid (excludes workshop services). */
export function getShopProducts(): Product[] {
  return products.filter((p) => SHOP_CATEGORIES.includes(p.category));
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
