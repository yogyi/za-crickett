"use client";

import { useMemo } from "react";
import {
  getShippingFeeSgd,
  SHIPPING_LABELS,
} from "@/lib/shipping";
import { useFormatPrice } from "@/hooks/useFormatPrice";
import { useCurrency } from "@/store/currency";
import { useCartTotal } from "@/store/cart";

export function useShipping() {
  const country = useCurrency((s) => s.country);
  const formatPrice = useFormatPrice();
  const feeSgd = getShippingFeeSgd(country);

  return useMemo(
    () => ({
      feeSgd,
      feeFormatted: formatPrice(feeSgd),
      label: SHIPPING_LABELS[country],
    }),
    [country, feeSgd, formatPrice]
  );
}

export function useOrderTotals() {
  const subtotal = useCartTotal();
  const { feeSgd, feeFormatted, label } = useShipping();
  const formatPrice = useFormatPrice();

  return {
    subtotal,
    subtotalFormatted: formatPrice(subtotal),
    shippingSgd: feeSgd,
    shippingFormatted: feeFormatted,
    shippingLabel: label,
    total: subtotal + feeSgd,
    totalFormatted: formatPrice(subtotal + feeSgd),
  };
}
