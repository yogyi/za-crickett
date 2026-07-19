import type { Athlete } from "@/types";

export const athletes: Athlete[] = [
  {
    id: "suryansh",
    name: "Suryansh Gulecha",
    role: "Opening Batter",
    region: "Singapore",
    image: "/images/athletes/suryansh-gulecha.jpg",
    imageFocus: "object-contain object-bottom",
    productLine: "The Eagle",
    productHref: "/product/the-eagle",
    featured: true,
    bio: "An aggressive opening batter known for powerful stroke play. Suryansh worked closely with ZA to develop The Eagle bat line, tuned for players who like to dominate from ball one.",
    achievements: [
      "Singapore domestic league top scorer",
      "ZA Cricket sponsored player since 2026",
      "The Eagle signature line",
    ],
  },
  {
    id: "aslan",
    name: "Aslan Jafri",
    role: "All-Rounder",
    region: "Singapore",
    image: "/images/athletes/aslan-jafri.jpg",
    imageFocus: "object-contain object-bottom",
    featured: true,
    bio: "A versatile all-rounder who contributes with both bat and ball. Aslan tests ZA protective gear and provides feedback on comfort and durability during long match days.",
    achievements: [
      "Represented Singapore at youth level",
      "Club cricket all-rounder of the year",
      "ZA sponsored athlete",
    ],
  },
  {
    id: "mahiyu",
    name: "Mahiyu Bhatia",
    role: "Middle Order",
    region: "Singapore",
    image: "/images/athletes/mahiyu-bhatia.jpg",
    imageFocus: "object-cover object-top",
    featured: true,
    bio: "A composed middle-order batter with a reputation for building innings under pressure. Mahiyu helps refine ZA batting gloves and pads for fit and flexibility.",
    achievements: [
      "Consistent performer in local leagues",
      "Youth development advocate",
      "ZA sponsored athlete",
    ],
  },
  {
    id: "hafeez",
    name: "Hafeez Khan",
    role: "Hong Kong International",
    region: "Hong Kong",
    image: "/images/athletes/hafeez-khan.jpg",
    imageFocus: "object-cover object-[center_20%]",
    featured: true,
    bio: "Representing Cricket Hong Kong, China on the international stage. Hafeez trusts ZA bats and gloves for training and competition across the region.",
    achievements: [
      "Cricket Hong Kong, China squad",
      "ZA Cricket sponsored player",
      "International tournament experience",
    ],
  },
  {
    id: "shahid",
    name: "Shahid Wasif",
    role: "Hong Kong International",
    region: "Hong Kong",
    image: "/images/athletes/shahid-wasif.jpg",
    imageFocus: "object-cover object-[center_15%]",
    featured: true,
    bio: "A seasoned Hong Kong cricketer who brings elite-level experience to the ZA roster. Shahid competes with ZA gear in high-pressure international fixtures.",
    achievements: [
      "Cricket Hong Kong, China representative",
      "Experienced international campaigner",
      "ZA sponsored athlete",
    ],
  },
];

export const singaporeAthletes = athletes.filter((a) => a.region === "Singapore");
export const hongKongAthletes = athletes.filter((a) => a.region === "Hong Kong");
