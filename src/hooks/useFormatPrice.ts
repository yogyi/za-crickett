"use client";

import { useCallback } from "react";
import { formatPrice } from "@/lib/currency";
import { useCurrency } from "@/store/currency";

export function useFormatPrice() {
  const country = useCurrency((s) => s.country);
  return useCallback(
    (amountSgd: number) => formatPrice(amountSgd, country),
    [country]
  );
}
