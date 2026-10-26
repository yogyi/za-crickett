import type { Product, ProductCategory } from "@/types";
import type { CountryCode } from "@/lib/currency";
import { formatPrice as formatPriceForCountry } from "@/lib/currency";

const PLACEHOLDER = "/images/za-logo.png";

const monarchImages = [
  "/images/products/the-monarch/monarch-01.jpg",
  "/images/products/the-monarch/monarch-02.jpg",
  "/images/products/the-monarch/monarch-03.jpg",
];

const eagleImages = [
  "/images/products/the-eagle/eagle-01.jpg",
  "/images/products/the-eagle/eagle-02.jpg",
  "/images/products/the-eagle/eagle-03.jpg",
];

const signatureImages = [
  "/images/products/the-signature/signature-01.jpg",
  "/images/products/the-signature/signature-02.jpg",
  "/images/products/the-signature/signature-03.jpg",
];

const playersGlovesImages = [
  "/images/products/gloves/players-01.jpg",
  "/images/products/gloves/players-02.jpg",
  "/images/products/gloves/players-03.jpg",
  "/images/products/gloves/players-04.jpg",
];

const ghostGlovesImages = [
  "/images/products/gloves/ghost-01.jpg",
  "/images/products/gloves/ghost-02.jpg",
  "/images/products/gloves/ghost-03.jpg",
  "/images/products/gloves/ghost-04.jpg",
];

const as04GlovesImages = [
  "/images/products/gloves/as04-01.jpg",
  "/images/products/gloves/as04-02.jpg",
  "/images/products/gloves/as04-03.jpg",
];

const playersPadsImages = [
  "/images/products/pads/players-pads-01.jpg",
  "/images/products/pads/players-pads-02.jpg",
  "/images/products/pads/players-pads-03.jpg",
  "/images/products/pads/players-pads-04.jpg",
  "/images/products/pads/players-pads-05.jpg",
];

const keepingGlovesImages = [
  "/images/products/wicket-keeping/keeping-gloves-01.jpg",
  "/images/products/wicket-keeping/keeping-gloves-02.jpg",
  "/images/products/wicket-keeping/keeping-gloves-03.jpg",
];

const keepingPadsImages = [
  "/images/products/wicket-keeping/keeping-pads-01.jpg",
  "/images/products/wicket-keeping/keeping-pads-02.jpg",
  "/images/products/wicket-keeping/keeping-pads-03.jpg",
  "/images/products/wicket-keeping/keeping-pads-04.jpg",
];

const duffelImages = [
  "/images/products/bags/duffel-01.jpg",
  "/images/products/bags/duffel-02.jpg",
  "/images/products/bags/duffel-03.jpg",
  "/images/products/bags/duffel-04.jpg",
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
    description: "Gloves and pads for keepers.",
    image: "/images/products/wicket-keeping/keeping-gloves-01.jpg",
  },
  accessories: {
    label: "Accessories",
    description: "Custom duffel bags.",
    image: "/images/products/bags/duffel-01.jpg",
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
    price: 799,
    category: "bats",
    description:
      "Fully custom Grade 1 English willow, made to your specification on the same premium willow as the Eagle. Set weight, grain count, and handle shape on this page. Profile, grip, and pick-up are confirmed on WhatsApp.",
    tagline: "Custom Grade 1 English Willow",
    image: signatureImages[0],
    images: signatureImages,
    badge: "Flagship",
    inStock: true,
    features: [
      "Same premium Grade 1 English willow as the Eagle",
      "Set weight, grain count, and handle shape on this page",
      "Profile, grip, and pick-up confirmed on WhatsApp",
      "Made to your specification",
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
    price: 599,
    category: "bats",
    description:
      "Grade 1 English willow for competitive cricket. Cleaner grains and a lighter, more responsive profile for players stepping up.",
    tagline: "Grade 1 English Willow · Competitive",
    image: eagleImages[0],
    images: eagleImages,
    badge: "Athlete Edition",
    inStock: true,
    features: [
      "Grade 1 English willow",
      "Cleaner grains than the club bat",
      "Lighter, more responsive profile",
      "Built for competitive cricket",
    ],
  },
  {
    id: "bat-monarch",
    slug: "the-monarch",
    name: "Monarch Edition",
    price: 399,
    category: "bats",
    description:
      "A dependable Grade 2 English willow bat for club and school cricket, with a solid pick-up and consistent performance.",
    tagline: "Grade 2 English Willow · Club and school",
    image: monarchImages[0],
    images: monarchImages,
    inStock: true,
    features: [
      "Grade 2 English willow",
      "Solid pick-up for club and school cricket",
      "Consistent performance",
      "The entry bat in the ZA range",
    ],
  },
  {
    id: "pads-players",
    slug: "players-edition-pads",
    name: "Players Edition Pads",
    price: 90,
    category: "pads",
    description:
      "Reliable standard protection for training and match play. Available in all colours — the photos show the white set. Confirm your colour on WhatsApp.",
    image: playersPadsImages[0],
    images: playersPadsImages,
    inStock: true,
    features: [
      "Players batting pads",
      "Available in all colours",
      "Reliable protection for training and match play",
      "Confirm the colour on WhatsApp",
    ],
  },
  {
    id: "wk-pads",
    slug: "wicket-keeping-pads",
    name: "Wicket-keeping Pads",
    price: 65,
    category: "wicket-keeping",
    description:
      "Streamlined wicketkeeping pads designed for comfort and mobility. Available in all colours.",
    image: keepingPadsImages[0],
    images: keepingPadsImages,
    inStock: true,
    features: [
      "Keeping pads",
      "Designed for comfort and mobility behind the stumps",
      "Available in all colours",
    ],
  },
  {
    id: "gloves-ghost",
    slug: "ghost-edition-gloves",
    name: "Ghost Edition Gloves",
    price: 65,
    category: "gloves",
    description:
      "A more refined feel than the Players glove, with improved cushioning and confident protection. Cut-finger construction, available in all colours.",
    tagline: "Cut type · All colours",
    image: ghostGlovesImages[0],
    images: ghostGlovesImages,
    inStock: true,
    features: [
      "Upgraded fit and cushioning",
      "Cut-finger construction",
      "Available in all colours",
      "A step up from the Players glove",
    ],
  },
  {
    id: "gloves-players",
    slug: "players-edition-gloves",
    name: "Players Edition Gloves",
    price: 50,
    category: "gloves",
    description:
      "Comfortable, durable protection for regular training and match use. A sausage-finger glove for everyday cricket.",
    tagline: "Sausage type",
    image: playersGlovesImages[0],
    images: playersGlovesImages,
    inStock: true,
    features: [
      "Everyday training and match glove",
      "Sausage-finger construction",
      "Comfortable, durable protection",
    ],
  },
  {
    id: "gloves-as04",
    slug: "as04-batting-gloves",
    name: "AS04 Batting Gloves",
    price: 95,
    category: "gloves",
    description:
      "The premium ZA × Hound collaboration, the Abhishek Sharma 04 Edition. Top-tier materials and construction for protection, comfort, and feel.",
    tagline: "ZA × Hound · Abhishek Sharma 04",
    image: as04GlovesImages[0],
    images: as04GlovesImages,
    badge: "Collaboration",
    inStock: true,
    features: [
      "ZA × Hound collaboration",
      "Abhishek Sharma 04 Edition",
      "Premium materials and construction",
      "Built for protection, comfort, and feel",
    ],
  },
  {
    id: "wk-gloves",
    slug: "wicket-keeping-gloves",
    name: "Wicket-keeping Gloves",
    price: 75,
    category: "wicket-keeping",
    description:
      "Reinforced palm and finger protection for confident work behind the stumps. Available in all colours.",
    image: keepingGlovesImages[0],
    images: keepingGlovesImages,
    inStock: true,
    features: [
      "Keeping gloves",
      "Reinforced palm and finger protection",
      "Available in all colours",
    ],
  },
  {
    id: "duffel-bag",
    slug: "custom-duffel-bag",
    name: "Custom Duffel Bag",
    price: 199,
    category: "accessories",
    description:
      "A spacious, durable kit bag finished with personalised detailing. Custom finish.",
    image: duffelImages[0],
    images: duffelImages,
    inStock: true,
    features: [
      "Spacious kit bag for bats, pads, and match-day gear",
      "Durable build",
      "Personalised custom finish",
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

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
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
