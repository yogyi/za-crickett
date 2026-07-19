import { products } from "@/data/products";

export interface AssistantAction {
  label: string;
  href: string;
}

export interface AssistantReply {
  answer: string;
  actions: AssistantAction[];
  followUp?: string;
}

export interface AssistantMessageInput {
  role: "user" | "assistant";
  content: string;
}

const SITE_LINKS = [
  { label: "Shop all products", href: "/shop" },
  { label: "Compare cricket bats", href: "/shop/bats" },
  { label: "Shop gloves", href: "/shop/gloves" },
  { label: "Shop batting pads", href: "/shop/pads" },
  { label: "Shop wicket-keeping gear", href: "/shop/wicket-keeping" },
  { label: "View bundles", href: "/bundles" },
  { label: "Contact ZA Cricket", href: "/contact" },
  { label: "Shipping and delivery", href: "/policies/shipping" },
  { label: "Exchange and refund policy", href: "/policies/exchange" },
  { label: "Terms and conditions", href: "/policies/terms" },
] as const;

const PRODUCT_LINKS = products.map((product) => ({
  label: `View ${product.name}`,
  href: `/product/${product.slug}`,
}));

const ALLOWED_ACTIONS = [...SITE_LINKS, ...PRODUCT_LINKS];
const actionByHref = new Map(ALLOWED_ACTIONS.map((action) => [action.href, action]));

export function sanitizeAssistantActions(
  actions: unknown
): AssistantAction[] {
  if (!Array.isArray(actions)) return [];

  const seen = new Set<string>();
  return actions
    .flatMap((action) => {
      if (!action || typeof action !== "object") return [];
      const href = "href" in action && typeof action.href === "string"
        ? action.href
        : "";
      const approved = actionByHref.get(href);
      if (!approved || seen.has(href)) return [];
      seen.add(href);
      return [approved];
    })
    .slice(0, 3);
}

function productCatalogue() {
  return products
    .map((product) => {
      const details = [
        `Name: ${product.name}`,
        `Price: S$${product.price}`,
        `Category: ${product.category}`,
        `Stock: ${product.inStock ? "in stock" : "out of stock"}`,
        `URL: /product/${product.slug}`,
        product.tagline ? `Tagline: ${product.tagline}` : "",
        `Description: ${product.description}`,
        product.features?.length
          ? `Features: ${product.features.join("; ")}`
          : "",
        product.variants?.length
          ? `Variants: ${product.variants.map((variant) => variant.label).join(", ")}`
          : "",
        product.customization?.length
          ? `Customisation: ${product.customization
              .map((option) => {
                const range =
                  option.min !== undefined && option.max !== undefined
                    ? ` (${option.min}-${option.max}${option.unit ?? ""})`
                    : "";
                const choices = option.options?.length
                  ? ` [${option.options.join(", ")}]`
                  : "";
                return `${option.label}${range}${choices}`;
              })
              .join("; ")}`
          : "",
      ].filter(Boolean);
      return details.join("\n");
    })
    .join("\n\n");
}

export function buildCricketAssistantSystemPrompt() {
  return `You are ZA Cricket's professional online cricket equipment specialist and sales assistant.

VOICE
- Be warm, expert, concise, practical, and never pushy.
- Use Singapore English and prices in Singapore dollars (S$).
- Keep most answers between 60 and 150 words. Ask one useful question at a time.
- Do not use markdown links. Links are supplied separately through actions.

YOUR JOB
- Help shoppers choose bats, batting gloves, pads, wicket-keeping gear, bundles, and bat preparation services.
- Guide a conversational bat fitting. Ask about age group, height, playing level, batting role/style, format, current bat weight, strength/comfort, and budget when relevant.
- For The Signature custom bat, help users select weight, grain count, handle shape, and optional engraving using only the available options below.
- Explain trade-offs honestly. Recommend no more than three products and say why each fits.
- When enough information is available, provide a short "My recommendation" summary and link to the best product.

STRICT ACCURACY RULES
- The catalogue and policy facts below are the only source of truth.
- Never invent products, prices, discounts, stock, colours, specifications, delivery guarantees, policy exceptions, reviews, WhatsApp numbers, or athlete claims.
- If the information is not below, say you cannot confirm it and offer /contact.
- Do not claim a specific bat weight guarantees performance. Treat fit guidance as a starting point and recommend confirming final custom specifications with ZA Cricket.
- Do not take payment, collect sensitive personal data, or claim an order has been placed.
- Use only the approved internal URLs listed below in the actions array.

BAT-FITTING GUIDANCE
- The Monarch (S$299) is the value-focused Grade 2 English Willow option with balanced pick-up and a generous sweet spot.
- The Eagle (S$399) is the Grade 1 option for serious competitors wanting tighter grains, enhanced edges, and a deeper sweet spot.
- The Signature (from S$499) is the Grade 1 bespoke option when the player wants control over specifications.
- The Signature supports 1080-1300g in 10g steps, 6-12 grains, Round/Oval/Semi-Oval handles, and optional engraving.
- Never imply that more grains automatically means better performance.
- Round handles suit wrist-led players; oval and semi-oval handles offer a firmer top-hand feel.

POLICIES AND CONTACT
- Orders process in 1-3 business days after payment confirmation.
- Custom bats need an additional 1-10 business days for drafting and preparation before dispatch.
- Worldwide delivery typically takes 1-14 business days after dispatch, depending on destination.
- Delivery charges shown by the site: below S$75 is S$4.99; S$75 and above is S$9.99. Select international rates may vary.
- ZA Cricket does not accept returns. Eligible exchange/replacement requests must be raised within 5 calendar days and are limited to an incorrect item, transit damage, defect, or verified manufacturing defect, subject to the full policy.
- Damage claims require a continuous 360-degree unboxing video submitted within 24 hours.
- Contact: zacricket26@gmail.com or Instagram @_zacricket.

APPROVED URLS
${ALLOWED_ACTIONS.map((action) => `${action.href} — ${action.label}`).join("\n")}

CURRENT CATALOGUE
${productCatalogue()}

OUTPUT
Return valid JSON matching the requested schema. "answer" contains the customer-facing reply. "actions" contains 0-3 approved links. "followUp" is one short optional question that moves the conversation forward.`;
}

export function getFallbackAssistantReply(message: string): AssistantReply {
  const query = message.toLowerCase();

  if (query.includes("custom") || query.includes("signature")) {
    return {
      answer:
        "The Signature is ZA Cricket’s fully custom Grade 1 English Willow bat, starting at S$499. I can help narrow down its 1080–1300g weight, 6–12 grain appearance, Round/Oval/Semi-Oval handle, and optional engraving. Final specifications should be confirmed with the ZA Cricket team.",
      actions: [
        { label: "Customise The Signature", href: "/product/the-signature" },
        { label: "Contact ZA Cricket", href: "/contact" },
      ],
      followUp:
        "What is your current bat weight and do you prefer a light, balanced, or power-focused pick-up?",
    };
  }

  if (query.includes("bat")) {
    return {
      answer:
        "ZA Cricket has three English Willow bats: The Monarch at S$299 for balanced Grade 2 value, The Eagle at S$399 for Grade 1 competition performance, and The Signature from S$499 for a fully custom Grade 1 build. Your playing level, current bat weight, style, and budget will help identify the best fit.",
      actions: [
        { label: "Compare cricket bats", href: "/shop/bats" },
        { label: "Customise The Signature", href: "/product/the-signature" },
      ],
      followUp: "What level do you play at, and what bat are you using now?",
    };
  }

  if (query.includes("glove")) {
    return {
      answer:
        "For batting gloves, the Players Edition at S$40 uses classic sausage-finger protection for dependable training and match use. The limited Ghost Edition at S$50 is the all-white ZA option with segmented padding, a soft grip palm, and a secure wrist strap.",
      actions: [
        { label: "Shop gloves", href: "/shop/gloves" },
        { label: "View Players Edition", href: "/product/players-edition-gloves" },
        { label: "View Ghost Edition", href: "/product/ghost-edition-gloves" },
      ],
      followUp: "Do you prioritise maximum protection or a lighter, more flexible feel?",
    };
  }

  if (query.includes("pad") || query.includes("protect")) {
    return {
      answer:
        "Players Edition batting pads are S$80 and use lightweight high-density foam, reinforced knee rolls, and a secure three-strap fit. White, red, and green options are listed. ZA also offers low-profile wicket-keeping pads at S$60 for mobility behind the stumps.",
      actions: [
        { label: "Shop batting pads", href: "/shop/pads" },
        { label: "Shop wicket-keeping gear", href: "/shop/wicket-keeping" },
      ],
      followUp: "Are these for batting or wicket keeping, and which colour do you need?",
    };
  }

  if (
    query.includes("deliver") ||
    query.includes("ship") ||
    query.includes("exchange") ||
    query.includes("return")
  ) {
    return {
      answer:
        "Orders process in 1–3 business days. Custom bats need another 1–10 business days before dispatch, and worldwide delivery typically takes 1–14 business days after dispatch. ZA Cricket does not accept returns; eligible exchange or replacement requests must meet the full policy conditions.",
      actions: [
        { label: "Shipping and delivery", href: "/policies/shipping" },
        { label: "Exchange and refund policy", href: "/policies/exchange" },
      ],
      followUp: "Are you asking about a new order or an item already delivered?",
    };
  }

  return {
    answer:
      "I can help compare ZA Cricket bats, recommend gloves or pads, explain bundles and delivery, or guide your Signature bat customisation. Advanced personalised AI guidance will activate once the Gemini key is connected, but the full catalogue is available now.",
    actions: [
      { label: "Shop all products", href: "/shop" },
      { label: "Compare cricket bats", href: "/shop/bats" },
      { label: "Contact ZA Cricket", href: "/contact" },
    ],
    followUp: "What are you shopping for today?",
  };
}
