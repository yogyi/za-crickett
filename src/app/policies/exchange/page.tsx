import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";

export const metadata: Metadata = {
  title: "Exchange Policy",
};

const sections = [
  {
    title: "Overview",
    content:
      "At ZA Cricket, we want you to be completely satisfied with your purchase. If you are not happy with your order, we offer exchanges subject to the conditions below.",
  },
  {
    title: "Eligibility",
    content:
      "Items must be returned within 14 days of delivery in their original, unused condition with all tags and packaging intact. Customised products, including engraved bats, are not eligible for exchange unless there is a manufacturing defect.",
  },
  {
    title: "Exchange Process",
    content:
      "To initiate an exchange, contact us at zacricket06@gmail.com with your order number and reason for exchange. We will provide return instructions and process your exchange once the item is received and inspected.",
  },
  {
    title: "Bat Bundles and Services",
    content:
      "Bat preparation bundles (knocking, oiling, scuff sheet, etc.) are service-based products and are non-refundable once the service has been performed.",
  },
  {
    title: "Defective Items",
    content:
      "If you receive a defective or damaged item, please contact us within 48 hours of delivery with photos. We will arrange a replacement or full refund at no additional cost.",
  },
  {
    title: "Shipping Costs",
    content:
      "Customers are responsible for return shipping costs unless the exchange is due to our error or a defective product. Exchange shipping for the replacement item is free within Singapore.",
  },
];

export default function ExchangePolicyPage() {
  return (
    <PolicyLayout title="Exchange Policy" sections={sections} />
  );
}
