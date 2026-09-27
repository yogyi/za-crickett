import type { CartItem } from "@/types";
import { CONTACT_EMAIL, buildWhatsAppUrl } from "@/lib/contact";

export const ORDER_EMAIL = CONTACT_EMAIL;

export type OrderSummary = {
  items: CartItem[];
  subtotalFormatted: string;
  shippingFormatted: string;
  shippingLabel: string;
  totalFormatted: string;
  countryLabel: string;
};

export function buildProductEnquiryMessage(productName: string): string {
  return [
    "Hi ZA Cricket,",
    "",
    `I'm looking at ${productName}.`,
    "",
    "Before we get into price or specs, a bit about my game:",
    "Game: ",
    "Grip: ",
    "Level: ",
    "Bat I use now: ",
    "",
    "Thanks,",
  ].join("\n");
}

export function openProductEnquiryWhatsApp(productName: string) {
  window.open(
    buildWhatsAppUrl(buildProductEnquiryMessage(productName)),
    "_blank",
    "noopener,noreferrer"
  );
}

export function buildOrderMessage({
  items,
  subtotalFormatted,
  shippingFormatted,
  shippingLabel,
  totalFormatted,
  countryLabel,
}: OrderSummary): string {
  return [
    "Hi ZA Cricket team,",
    "",
    "I would like to place the following order:",
    "",
    ...items.map((item) => {
      const details = [
        `${item.name} x${item.quantity}`,
        item.variant ? `Variant: ${item.variant}` : null,
        item.customization
          ? Object.entries(item.customization)
              .filter(([, v]) => v)
              .map(([k, v]) => `${k}: ${v}`)
              .join(", ")
          : null,
      ]
        .filter(Boolean)
        .join(" | ");
      return `- ${details}`;
    }),
    "",
    `Subtotal: ${subtotalFormatted}`,
    `Delivery: ${shippingFormatted} (${shippingLabel})`,
    `Total: ${totalFormatted}`,
    `Ship to: ${countryLabel}`,
    "",
    "Please confirm payment details and delivery timeline.",
    "",
    "Thanks,",
  ].join("\n");
}

export function buildOrderWhatsApp(summary: OrderSummary): string {
  return buildWhatsAppUrl(buildOrderMessage(summary));
}

export function openOrderWhatsApp(summary: OrderSummary) {
  window.open(buildOrderWhatsApp(summary), "_blank", "noopener,noreferrer");
}

export function buildOrderMailto(summary: OrderSummary): string {
  const subject = encodeURIComponent("ZA Cricket Order Enquiry");
  const body = encodeURIComponent(buildOrderMessage(summary));
  return `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
}

export function buildContactMailto({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  const mailSubject = encodeURIComponent(`[ZA Cricket] ${subject}`);
  const body = encodeURIComponent(
    [
      message.trim(),
      "",
      "---",
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Subject: ${subject}`,
    ].join("\n")
  );
  return `mailto:${ORDER_EMAIL}?subject=${mailSubject}&body=${body}`;
}
