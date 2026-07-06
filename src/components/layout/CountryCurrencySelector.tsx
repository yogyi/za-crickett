"use client";

import { useState, useRef, useEffect } from "react";
import { CaretDown, Globe } from "@phosphor-icons/react";
import { COUNTRY_LIST, COUNTRIES } from "@/lib/currency";
import { useCurrency } from "@/store/currency";
import type { CountryCode } from "@/lib/currency";

export function CountryCurrencySelector() {
  const { country, setCountry } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = COUNTRIES[country];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const select = (code: CountryCode) => {
    setCountry(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 h-10 px-2.5 sm:px-3 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition-colors active:scale-[0.98] border border-transparent hover:border-border"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Country and currency: ${selected.country}, ${selected.currency}`}
      >
        <Globe size={18} weight="duotone" className="text-brand shrink-0" />
        <span className="hidden sm:inline">{selected.flag}</span>
        <span className="tabular-nums">{selected.currency}</span>
        <CaretDown
          size={14}
          weight="bold"
          className={`text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select country and currency"
          className="absolute right-0 top-full mt-2 w-56 max-w-[calc(100vw-2rem)] py-1.5 bg-white rounded-xl border border-border shadow-xl shadow-zinc-200/50 z-50"
        >
          {COUNTRY_LIST.map((item) => (
            <li key={item.code} role="option" aria-selected={country === item.code}>
              <button
                type="button"
                onClick={() => select(item.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                  country === item.code
                    ? "bg-brand-subtle text-brand font-semibold"
                    : "text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                <span className="text-lg leading-none">{item.flag}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium">{item.country}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {item.currency} · {item.symbol}
                  </p>
                </div>
                {country === item.code && (
                  <span className="h-2 w-2 rounded-full bg-brand shrink-0" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
