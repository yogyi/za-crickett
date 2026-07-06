"use client";

import { useCurrency } from "@/store/currency";
import { formatPrice } from "@/lib/currency";

interface FormattedPriceProps {
  amount: number;
  className?: string;
}

export function FormattedPrice({ amount, className }: FormattedPriceProps) {
  const country = useCurrency((s) => s.country);
  return <span className={className}>{formatPrice(amount, country)}</span>;
}
