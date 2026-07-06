"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CountryCode } from "@/lib/currency";

interface CurrencyState {
  country: CountryCode;
  setCountry: (country: CountryCode) => void;
}

export const useCurrency = create<CurrencyState>()(
  persist(
    (set) => ({
      country: "SG",
      setCountry: (country) => set({ country }),
    }),
    { name: "za-cricket-currency" }
  )
);
