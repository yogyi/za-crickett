import type { CountryCode } from "./currency";
import { formatPrice } from "./currency";

export const SHIPPING_THRESHOLD_SGD = 75;
export const SHIPPING_BELOW_THRESHOLD_SGD = 4.99;
export const SHIPPING_ABOVE_THRESHOLD_SGD = 9.99;

export const SHIPPING_LABELS: Record<CountryCode, string> = {
  SG: "Worldwide delivery typically takes 1–14 business days after dispatch",
  HK: "Worldwide delivery typically takes 1–14 business days after dispatch",
  IN: "Worldwide delivery typically takes 1–14 business days after dispatch",
};

export function getShippingFeeSgd(
  _country: CountryCode,
  subtotalSgd = 0
): number {
  return subtotalSgd < SHIPPING_THRESHOLD_SGD
    ? SHIPPING_BELOW_THRESHOLD_SGD
    : SHIPPING_ABOVE_THRESHOLD_SGD;
}

export function formatShippingFee(
  country: CountryCode = "SG",
  subtotalSgd = 0
): string {
  return formatPrice(getShippingFeeSgd(country, subtotalSgd), country);
}

export function formatShippingFrom(country: CountryCode = "SG"): string {
  return `from ${formatPrice(SHIPPING_BELOW_THRESHOLD_SGD, country)}`;
}
