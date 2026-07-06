import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";
import { SHIPPING_RATES_SGD } from "@/lib/shipping";
import { formatPrice } from "@/lib/currency";

export const metadata: Metadata = {
  title: "Shipping Policy",
};

const sections = [
  {
    title: "Shipping Areas",
    content:
      "ZA Cricket delivers across Singapore, Hong Kong, and India. For other destinations, contact us at zacricket06@gmail.com and we will quote international shipping.",
  },
  {
    title: "Processing Time",
    content:
      "Orders are typically processed within 1–2 business days. Custom bat orders (The Signature) may require 7–14 business days for crafting and preparation.",
  },
  {
    title: "Delivery Times",
    content:
      "Standard delivery within Singapore takes 2–4 business days after processing. Hong Kong and India delivery times vary by courier — typically 5–10 business days after dispatch. Express delivery may be available on request for an additional fee.",
  },
  {
    title: "Delivery Charges",
    content: `Standard delivery fees apply to all orders (no free-shipping threshold):

• Singapore: ${formatPrice(SHIPPING_RATES_SGD.SG, "SG")} per order
• Hong Kong: ${formatPrice(SHIPPING_RATES_SGD.HK, "HK")} per order
• India: ${formatPrice(SHIPPING_RATES_SGD.IN, "IN")} per order

Delivery charges are added at checkout and shown in your cart before you pay. Bulky items such as bats may incur higher courier rates — if this applies to your order, we will confirm the final amount by email before dispatch.`,
  },
  {
    title: "Order Tracking",
    content:
      "Once your order ships, you will receive a confirmation email with tracking information. You can also contact us for order status updates.",
  },
  {
    title: "Damaged in Transit",
    content:
      "If your package arrives damaged, please document the damage with photos and contact us within 48 hours. We will work with you to resolve the issue promptly.",
  },
];

export default function ShippingPolicyPage() {
  return <PolicyLayout title="Shipping Policy" sections={sections} />;
}
