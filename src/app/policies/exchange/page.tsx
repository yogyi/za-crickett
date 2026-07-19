import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";

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
      "1. Email zacricket26@gmail.com with your order number and reason for the request.\n2. Include clear product images, the invoice, and the required 360-degree unboxing video.\n3. Our team will respond within 24–48 working hours.\n4. If approved, hand the product to our pickup partner or self-courier it as instructed.\n5. The exchange will be processed after the product passes inspection.\n\nUnauthorised returns or shipments sent without prior approval will not be accepted.",
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
      lastUpdated="15 July 2026"
    />
  );
}
