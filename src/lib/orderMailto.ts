import type { CartItem } from "@/types";

export const ORDER_EMAIL = "zacricket26@gmail.com";

export function buildOrderMailto({
  items,
  subtotalFormatted,
  shippingFormatted,
  shippingLabel,
  totalFormatted,
  countryLabel,
}: {
  items: CartItem[];
  subtotalFormatted: string;
  shippingFormatted: string;
  shippingLabel: string;
  totalFormatted: string;
  countryLabel: string;
}): string {
  const lines = [
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
  ];

  const subject = encodeURIComponent("ZA Cricket Order Enquiry");
  const body = encodeURIComponent(lines.join("\n"));
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
