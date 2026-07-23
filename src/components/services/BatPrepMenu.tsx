"use client";

import Link from "next/link";
import {
  CheckCircle,
  Drop,
  Hammer,
  ShieldCheck,
  Sparkle,
  Wrench,
} from "@phosphor-icons/react";
import { useFormatPrice } from "@/hooks/useFormatPrice";
import { useCart } from "@/store/cart";
import { getProductsByCategory } from "@/data/products";

const tierMeta: Record<
  string,
  {
    eyebrow: string;
    headline: string;
    summary: string;
    highlighted?: boolean;
    icons: { icon: typeof Hammer; label: string }[];
  }
> = {
  "bundle-basic": {
    eyebrow: "Starter bundle",
    headline: "Basic Bundle",
    summary: "Get a new bat ready for nets and early match play.",
    icons: [
      { icon: Hammer, label: "Knocking" },
      { icon: Drop, label: "Oiling" },
      { icon: ShieldCheck, label: "Scuff sheet" },
    ],
  },
  "bundle-performance": {
    eyebrow: "Most booked",
    headline: "Performance Bundle",
    summary: "Full match-ready finish for Singapore matting and hard surfaces.",
    highlighted: true,
    icons: [
      { icon: Hammer, label: "Knock + oil" },
      { icon: ShieldCheck, label: "Toe guard" },
      { icon: Sparkle, label: "New grip" },
    ],
  },
  "bundle-restore": {
    eyebrow: "Full care",
    headline: "Restore Bundle",
    summary: "Bring a tired bat back with repair, clean, and finish work.",
    icons: [
      { icon: Wrench, label: "Repair" },
      { icon: Drop, label: "Clean + oil" },
      { icon: ShieldCheck, label: "Protect" },
    ],
  },
};

export function BatPrepMenu({ compact = false }: { compact?: boolean }) {
  const services = getProductsByCategory("services");
  const formatPrice = useFormatPrice();
  const addItem = useCart((s) => s.addItem);
  const setCartOpen = useCart((s) => s.setCartOpen);

  const addService = (id: string) => {
    const product = services.find((p) => p.id === id);
    if (!product) return;
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setCartOpen(true);
  };

  return (
    <div className={compact ? "space-y-6" : "space-y-10"}>
      {!compact && (
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-subtle px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Bundle offers
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Choose your bundle
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Clear tiers and clear prices. Pick a bat care bundle and add it to
            your order.
          </p>
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
        {services.map((service) => {
          const meta = tierMeta[service.id];
          if (!meta) return null;
          const highlighted = Boolean(meta.highlighted);

          return (
            <article
              key={service.id}
              className={`relative flex flex-col rounded-[1.75rem] p-1.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 ${
                highlighted
                  ? "bg-brand shadow-[0_24px_60px_-28px_rgba(91,33,182,0.55)]"
                  : "bg-zinc-200/70"
              }`}
            >
              <div
                className={`flex flex-1 flex-col rounded-[calc(1.75rem-0.375rem)] p-6 sm:p-7 ${
                  highlighted ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                      highlighted ? "text-violet-300" : "text-brand"
                    }`}
                  >
                    {meta.eyebrow}
                  </p>
                  {highlighted && (
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Recommended
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {meta.headline}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    highlighted ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {meta.summary}
                </p>

                <p className="mt-6 text-3xl font-bold tracking-tight tabular-nums">
                  {formatPrice(service.price)}
                </p>
                <p className="mt-1 text-xs text-zinc-500">Per bat · bundle</p>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {meta.icons.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className={`rounded-2xl px-2 py-3 text-center ${
                        highlighted ? "bg-white/5" : "bg-brand-subtle/70"
                      }`}
                    >
                      <Icon
                        size={22}
                        weight="duotone"
                        className={`mx-auto ${
                          highlighted ? "text-violet-300" : "text-brand"
                        }`}
                      />
                      <p
                        className={`mt-2 text-[10px] font-medium leading-tight ${
                          highlighted ? "text-zinc-400" : "text-zinc-600"
                        }`}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {service.features?.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${
                        highlighted ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      <CheckCircle
                        size={18}
                        weight="fill"
                        className={`mt-0.5 shrink-0 ${
                          highlighted ? "text-violet-300" : "text-brand"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => addService(service.id)}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${
                    highlighted
                      ? "bg-white text-zinc-950 hover:bg-violet-100"
                      : "bg-brand text-white hover:bg-brand-dark"
                  }`}
                >
                  Add bundle
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {!compact && (
        <p className="text-sm text-zinc-500">
          Need help choosing?{" "}
          <Link href="/contact" className="font-semibold text-brand hover:text-brand-dark">
            Contact us
          </Link>{" "}
          with your bat condition and how soon you need it match-ready.
        </p>
      )}
    </div>
  );
}
