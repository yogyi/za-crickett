export interface Review {
  id: string;
  quote: string;
  name: string;
  initial: string;
  avatarColor: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    quote:
      "The Signature bat felt like it was made for my game from the first ball. The custom weight and profile made a real difference at the crease.",
    name: "Rahul Mehta",
    initial: "R",
    avatarColor: "#4b2e63",
  },
  {
    id: "2",
    quote:
      "ZA gloves are the best value I have found in Singapore. Lightweight, durable, and they look great too. Highly recommend to any club player.",
    name: "Priya Sharma",
    initial: "P",
    avatarColor: "#0d9488",
  },
  {
    id: "3",
    quote:
      "Ordered the Performance Bundle for my son's new bat. Came match-ready and the quality of preparation was outstanding. Will order again.",
    name: "David Tan",
    initial: "D",
    avatarColor: "#2563eb",
  },
  {
    id: "4",
    quote:
      "I highly recommend ZA Cricket. I purchased The Eagle bat and their support was exceptional throughout. You can trust them for quality gear.",
    name: "Arjun Singh",
    initial: "A",
    avatarColor: "#dc2626",
  },
  {
    id: "5",
    quote:
      "The best cricket equipment shop in Singapore. They explain every product in detail and help you pick what suits your game.",
    name: "Marcus Lee",
    initial: "M",
    avatarColor: "#ca8a04",
  },
  {
    id: "6",
    quote:
      "ZA is a very good cricket gear company. Great bats from trusted developers and excellent customer service before and after purchase.",
    name: "Khush Anand",
    initial: "K",
    avatarColor: "#7c3aed",
  },
  {
    id: "7",
    quote:
      "I had an excellent experience with ZA Cricket. Their team is professional, transparent, and knowledgeable about bats and protective gear.",
    name: "Priyanshu Kumar",
    initial: "P",
    avatarColor: "#0891b2",
  },
  {
    id: "8",
    quote:
      "Players Edition pads are comfortable for long innings. The coloured options look sharp and the protection is solid. Great purchase.",
    name: "Vansh Tandon",
    initial: "V",
    avatarColor: "#0d9488",
  },
  {
    id: "9",
    quote:
      "Custom engraving on my Signature bat was done perfectly. Delivery was on time and the bat plays beautifully. Achieve Greatness indeed.",
    name: "Anshuman Saini",
    initial: "A",
    avatarColor: "#4b2e63",
  },
  {
    id: "10",
    quote:
      "Ghost Edition gloves have premium padding without feeling bulky. My go-to pair for weekend league matches in Singapore.",
    name: "Paritosh Varakya",
    initial: "P",
    avatarColor: "#be185d",
  },
  {
    id: "11",
    quote:
      "The value bundle saved me money on gloves and pads. Everything arrived well packed and exactly as described on the website.",
    name: "Aakash Chaudhary",
    initial: "A",
    avatarColor: "#059669",
  },
  {
    id: "12",
    quote:
      "Restore Bundle brought my old bat back to life. Knocking, oiling, and toe guard work was top class. Very happy with the service.",
    name: "Nitin Kapoor",
    initial: "N",
    avatarColor: "#6366f1",
  },
];

export function splitReviewsIntoColumns(
  items: Review[],
  columnCount: number
): Review[][] {
  const columns: Review[][] = Array.from({ length: columnCount }, () => []);
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });
  return columns;
}
