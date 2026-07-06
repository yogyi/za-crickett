import type { CountryCode } from "./currency";
import { formatPrice } from "./currency";

/** Flat standard delivery fee per order (SGD base, converted by country) */
export const SHIPPING_RATES_SGD: Record<CountryCode, number> = {
  SG: 12,
  HK: 48,
  IN: 55,
};

export const SHIPPING_LABELS: Record<CountryCode, string> = {
  SG: "Standard delivery (2–4 business days)",
  HK: "Standard delivery to Hong Kong",
  IN: "Standard delivery to India",
};

export function getShippingFeeSgd(country: CountryCode): number {
  return SHIPPING_RATES_SGD[country];
}

export function formatShippingFee(country: CountryCode = "SG"): string {
  return formatPrice(getShippingFeeSgd(country), country);
}

export function formatShippingFrom(country: CountryCode = "SG"): string {
  return `from ${formatShippingFee(country)}`;
}
