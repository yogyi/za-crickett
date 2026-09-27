import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/contact";

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
      "Orders are processed within 1–3 business days after we confirm payment in the WhatsApp chat. Custom bats need a further 1–10 business days for preparation before they are sent. We will tell you in that chat if a custom bat needs longer.",
  },
  {
    title: "Delivery Times",
    content:
      "Once dispatched, standard worldwide delivery typically takes 1–14 business days depending on the destination. Delivery times are estimates and may be affected by customs clearance, courier delays, weather, public holidays, or other circumstances outside our reasonable control.",
  },
  {
    title: "Delivery Charges",
    content:
      "These are the fees shown on the product page. There is no extra fee added at a card checkout, because this site does not take payment.\n\nOrders below S$75: S$4.99\nOrders of S$75 and above: S$9.99\n\nSome deliveries outside Singapore cost more. If yours does, we state that fee on WhatsApp before you pay.",
  },
  {
    title: "Order Tracking",
    content:
      "When an order is sent, we message you the courier and tracking number on WhatsApp.",
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
      `For a question about an order or a delivery, email ${CONTACT_EMAIL} or WhatsApp ${CONTACT_PHONE_DISPLAY}.`,
  },
];

export default function ShippingPolicyPage() {
  return (
    <PolicyLayout
      title="Shipping and Delivery Policy"
      sections={sections}
      lastUpdated="28 September 2026"
    />
  );
}
