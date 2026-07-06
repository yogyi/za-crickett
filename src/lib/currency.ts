export type CountryCode = "SG" | "HK" | "IN";

export interface CountryCurrency {
  country: string;
  code: CountryCode;
  currency: "SGD" | "HKD" | "INR";
  symbol: string;
  flag: string;
  /** Multiply SGD base price to get local amount */
  rateFromSgd: number;
  locale: string;
}

export const COUNTRIES: Record<CountryCode, CountryCurrency> = {
  SG: {
    country: "Singapore",
    code: "SG",
    currency: "SGD",
    symbol: "S$",
    flag: "🇸🇬",
    rateFromSgd: 1,
    locale: "en-SG",
  },
  HK: {
    country: "Hong Kong",
    code: "HK",
    currency: "HKD",
    symbol: "HK$",
    flag: "🇭🇰",
    rateFromSgd: 5.85,
    locale: "en-HK",
  },
  IN: {
    country: "India",
    code: "IN",
    currency: "INR",
    symbol: "₹",
    flag: "🇮🇳",
    rateFromSgd: 63,
    locale: "en-IN",
  },
};

export const COUNTRY_LIST = Object.values(COUNTRIES);

/** All product prices in the store are stored in SGD */
export function convertFromSgd(amountSgd: number, country: CountryCode): number {
  return amountSgd * COUNTRIES[country].rateFromSgd;
}

export function formatPrice(amountSgd: number, country: CountryCode = "SG"): string {
  const config = COUNTRIES[country];
  const amount = convertFromSgd(amountSgd, country);

  if (config.currency === "SGD") {
    const decimals = amount % 1 === 0 ? 0 : 2;
    return `S$${amount.toFixed(decimals)}`;
  }

  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount);
}
