"use client";

import { useState } from "react";
import { Sliders, WhatsappLogo } from "@phosphor-icons/react";
import { useFormatPrice } from "@/hooks/useFormatPrice";
import {
  formatCustomizationDisplay,
  getDefaultCustomizationValue,
} from "@/lib/customization";
import { getShippingFeeSgd, SHIPPING_LABELS } from "@/lib/shipping";
import { openProductEnquiryWhatsApp } from "@/lib/orderMailto";
import type { CustomizationOption, Product } from "@/types";
import { useCart } from "@/store/cart";
import { useCurrency } from "@/store/currency";

interface ProductDetailClientProps {
  product: Product;
  variant?: string;
  onVariantChange?: (variant: string) => void;
  displayImage?: string;
}

function RangeField({
  opt,
  value,
  onChange,
}: {
  opt: CustomizationOption;
  value: string;
  onChange: (value: string) => void;
}) {
  const min = opt.min ?? 0;
  const max = opt.max ?? 100;
  const step = opt.step ?? 1;
  const num = Number(value) || min;
  const percent = ((num - min) / (max - min)) * 100;

  return (
    <div className="min-w-0 max-w-full space-y-3">
      <div className="flex items-center justify-between gap-4">
        <output
          htmlFor={opt.id}
          className="text-lg font-bold text-brand tabular-nums"
        >
          {num}
          {opt.unit === "g" ? "g" : opt.unit ? ` ${opt.unit}` : ""}
        </output>
        <span className="text-xs text-zinc-400 tabular-nums">
          {min}
          {opt.unit === "g" ? "g" : ""} – {max}
          {opt.unit === "g" ? "g" : opt.unit ? ` ${opt.unit}` : ""}
        </span>
      </div>
      <input
        id={opt.id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={num}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full min-w-0 max-w-full h-2 rounded-full appearance-none cursor-pointer bg-zinc-200 accent-brand"
        style={{
          background: `linear-gradient(to right, var(--brand) 0%, var(--brand) ${percent}%, #e4e4e7 ${percent}%, #e4e4e7 100%)`,
        }}
      />
      {opt.helperText && (
        <p className="text-xs text-zinc-500 leading-relaxed">{opt.helperText}</p>
      )}
    </div>
  );
}

export function ProductDetailClient({
  product,
  variant: controlledVariant,
  onVariantChange,
  displayImage,
}: ProductDetailClientProps) {
  const addItem = useCart((s) => s.addItem);
  const formatPrice = useFormatPrice();
  const country = useCurrency((s) => s.country);
  const shippingSgd = getShippingFeeSgd(country, product.price);
  const feeFormatted = formatPrice(shippingSgd);
  const label = SHIPPING_LABELS[country];
  const [internalVariant, setInternalVariant] = useState(
    product.variants?.[0]?.label ?? ""
  );
  const variant = controlledVariant ?? internalVariant;
  const setVariant = onVariantChange ?? setInternalVariant;
  const [customization, setCustomization] = useState<Record<string, string>>(
    () => {
      const initial: Record<string, string> = {};
      product.customization?.forEach((opt) => {
        initial[opt.id] = getDefaultCustomizationValue(opt);
      });
      return initial;
    }
  );

  const hasCustomization = (product.customization?.length ?? 0) > 0;

  const handleAddToCart = () => {
    const filled = Object.fromEntries(
      Object.entries(customization).filter(([, v]) => v.trim() !== "")
    );
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: displayImage ?? product.image,
      variant: variant || undefined,
      customization: Object.keys(filled).length > 0 ? filled : undefined,
    });
  };

  const handleBuyWhatsApp = () => {
    openProductEnquiryWhatsApp(product.name);
  };

  return (
    <div className="space-y-6 pb-28 lg:pb-0 min-w-0 max-w-full">
      {hasCustomization && (
        <div className="flex items-center gap-2 pb-2 border-b border-border">
          <Sliders size={20} weight="duotone" className="text-brand" />
          <div>
            <h3 className="font-bold text-zinc-900">Customize Your Bat</h3>
            <p className="text-xs text-zinc-500 mt-0.5">
              Set weight, grain count, and handle shape here. Profile, grip, and
              pick-up are confirmed on WhatsApp.
            </p>
          </div>
        </div>
      )}

      {product.variants && product.variants.length > 0 && (
        <div className="scroll-mt-28">
          <label className="block text-sm font-medium text-zinc-900 mb-2">
            Colour
          </label>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVariant(v.label)}
                className={`flex items-center gap-2 min-h-11 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors active:scale-[0.98] ${
                  variant === v.label
                    ? "border-brand bg-brand-subtle text-brand"
                    : "border-border text-zinc-700 hover:border-zinc-300"
                }`}
              >
                {v.color && (
                  <span
                    className="h-4 w-4 rounded-full border border-zinc-200"
                    style={{ backgroundColor: v.color }}
                  />
                )}
                {v.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.customization?.map((opt) => (
        <div key={opt.id}>
          <label
            htmlFor={opt.id}
            className="block text-sm font-medium text-zinc-900 mb-2"
          >
            {opt.label}
          </label>

          {opt.type === "range" ? (
            <RangeField
              opt={opt}
              value={customization[opt.id] ?? ""}
              onChange={(val) =>
                setCustomization((prev) => ({ ...prev, [opt.id]: val }))
              }
            />
          ) : opt.type === "select" ? (
            <>
              <select
                id={opt.id}
                value={customization[opt.id] ?? ""}
                onChange={(e) =>
                  setCustomization((prev) => ({
                    ...prev,
                    [opt.id]: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
              >
                {opt.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              {opt.helperText && (
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                  {opt.helperText}
                </p>
              )}
            </>
          ) : (
            <>
              <input
                id={opt.id}
                type="text"
                value={customization[opt.id] ?? ""}
                onChange={(e) =>
                  setCustomization((prev) => ({
                    ...prev,
                    [opt.id]: e.target.value,
                  }))
                }
                placeholder={opt.placeholder}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
              />
              {opt.helperText && (
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                  {opt.helperText}
                </p>
              )}
            </>
          )}
        </div>
      ))}

      {hasCustomization && (
        <div className="p-4 rounded-xl bg-surface border border-border text-sm">
          <p className="font-medium text-zinc-900 mb-2">Your configuration</p>
          <ul className="space-y-1 text-zinc-600">
            {product.customization?.map((opt) => {
              const val = customization[opt.id];
              if (!val) return null;
              return (
                <li key={opt.id}>
                  {formatCustomizationDisplay(opt.id, val, opt.unit)}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="flex items-baseline gap-3 pt-2 hidden lg:flex">
        <span className="text-3xl font-bold text-zinc-900">
          {formatPrice(product.price)}
        </span>
      </div>

      <p className="text-sm text-zinc-500 hidden lg:block">
        Standard delivery: <span className="font-medium text-zinc-700">{feeFormatted}</span>
        <span className="text-zinc-400"> · {label}</span>
      </p>

      {/* Sticky add-to-cart on mobile / tablet */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:static lg:z-auto p-4 bg-white/95 backdrop-blur-md border-t border-border lg:border-0 lg:p-0 lg:bg-transparent lg:backdrop-blur-none safe-bottom">
        <div className="flex flex-col items-stretch gap-2 max-w-[1800px] mx-auto lg:max-w-none">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-zinc-900 lg:hidden shrink-0">
              {formatPrice(product.price)}
            </span>
            <button
              type="button"
              onClick={handleBuyWhatsApp}
              disabled={!product.inStock}
              className="flex-1 lg:w-full flex items-center justify-center gap-2 py-4 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              <WhatsappLogo size={20} weight="fill" />
              {product.inStock ? "Buy on WhatsApp" : "Sold Out"}
            </button>
          </div>
          {product.inStock && (
            <button
              type="button"
              onClick={handleAddToCart}
              className="self-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
