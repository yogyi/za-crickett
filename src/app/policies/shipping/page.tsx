import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";

export const metadata: Metadata = {
  title: "Shipping and Delivery Policy",
  description:
    "Worldwide shipping rates, processing times, tracking, and delivery information for ZA Cricket orders.",
};

const sections = [
  {
    title: "Worldwide Shipping",
    content:
      "We partner with trusted logistics providers to deliver ZA Cricket orders safely and efficiently worldwide. We currently serve customers across Singapore, Bahrain, Oman, and beyond. All shipments are also subject to the applicable terms of our logistics partners.",
  },
  {
    title: "Processing Time",
    content:
      "Orders are processed within 1–3 business days after payment confirmation. Custom bats require an additional 1–10 business days for drafting and preparation before dispatch because they are made to individual specifications. We will notify you if a custom item requires additional time.",
  },
  {
    title: "Delivery Times",
    content:
      "Once dispatched, standard worldwide delivery typically takes 1–14 business days depending on the destination. Delivery times are estimates and may be affected by customs clearance, courier delays, weather, public holidays, or other circumstances outside our reasonable control.",
  },
  {
    title: "Delivery Charges",
    content:
      "Orders below S$75: S$4.99\nOrders of S$75 and above: S$9.99\n\nRates for select international destinations may vary and will be calculated or confirmed at checkout.",
  },
  {
    title: "Order Tracking",
    content:
      "Once your order is dispatched, we will share the shipment and tracking details so you can monitor delivery in real time.",
  },
  {
    title: "Damaged in Transit",
    content:
      "If your order arrives damaged in transit, report it within 24 hours of receipt. Please retain the packaging and provide photographs and a clear 360-degree unboxing video. We will review the claim and work with you promptly on an appropriate resolution.",
  },
  {
    title: "International Orders",
    content:
      "Customers are responsible for checking whether products can be imported into the destination country. Customs duties, import taxes, handling charges, and similar fees may be payable by the recipient and are not controlled by ZA Cricket.",
  },
  {
    title: "Questions",
    content:
      "For questions about an order or delivery, contact zacricket26@gmail.com.",
  },
];

export default function ShippingPolicyPage() {
  return (
    <PolicyLayout
      title="Shipping and Delivery Policy"
      sections={sections}
      lastUpdated="15 July 2026"
    />
  );
}
