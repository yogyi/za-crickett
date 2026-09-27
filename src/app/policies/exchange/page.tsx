import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Exchange, Refund and Cancellation Policy",
  description:
    "Exchange, replacement, refund, and cancellation conditions for ZA Cricket orders.",
};

const sections = [
  {
    title: "Overview",
    content:
      "ZA Cricket does not accept returns. Exchanges or replacements are available only for an incorrect item, transit damage, a defective product, or a verified manufacturing defect, subject to the conditions below.",
  },
  {
    title: "Exchange Eligibility",
    content:
      "An exchange request must be raised within 5 calendar days of delivery. The product must be unused, unaltered, in its original packaging, and include all tags and the invoice.\n\nAn exchange is permitted only for the same item or a higher-value item, subject to availability. The customer must pay any price difference. Every request is subject to ZA Cricket's quality assessment, and only one exchange is permitted per order.",
  },
  {
    title: "Exchange Process",
    content:
      `1. Email ${CONTACT_EMAIL} or WhatsApp ${CONTACT_PHONE_DISPLAY} with your order details and the reason.\n2. Include clear product photos, the invoice, and the 360-degree unboxing video where the section below requires it.\n3. We reply within 24–48 working hours.\n4. If we approve the exchange, we tell you whether to hand the product to a pickup partner or to courier it.\n5. We complete the exchange after the product passes inspection.\n\nDo not post a product back before we agree. We will not accept it.`,
  },
  {
    title: "Unboxing Video Requirement",
    content:
      "Record a continuous 360-degree video showing the sealed package and the product's condition as you open it. Submit the video within 24 hours of delivery. Claims for damage, defects, or an incorrect item will only be considered when supported by this video.",
  },
  {
    title: "Premium and Custom Products",
    content:
      "Premium English willow bats and customised products are eligible for exchange only for a verified manufacturing defect, major transit damage supported by the required unboxing video, or delivery of the wrong item. Natural willow variations in grain, shade, weight distribution, and minor blemishes do not automatically constitute a defect.",
  },
  {
    title: "Non-Exchangeable Products",
    content:
      "Used, damaged, altered, or improperly stored products cannot be exchanged. Products without original packaging, tags, or an invoice are also ineligible. Bat preparation services are non-refundable once work has begun. A request declined because required information is missing or incorrect cannot be resubmitted.",
  },
  {
    title: "Refunds",
    content:
      "When a refund is due — an order cancelled before it is sent, or an exchange we approved but cannot complete — we arrange it in the same WhatsApp chat where you paid. This website cannot refund a card, because it never takes one.",
  },
  {
    title: "Cancellations",
    content:
      "Orders may be cancelled only before dispatch. If an order is cancelled after shipping, a one-way courier fee will be deducted from the refund. Cancellations are not processed on Sundays or public holidays.",
  },
  {
    title: "Consumer Rights",
    content:
      "Nothing in this policy removes or restricts any consumer right or remedy that cannot lawfully be excluded under Singapore law.",
  },
];

export default function ExchangePolicyPage() {
  return (
    <PolicyLayout
      title="Exchange, Refund and Cancellation Policy"
      sections={sections}
      lastUpdated="28 September 2026"
    />
  );
}
