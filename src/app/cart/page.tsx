"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useFormatPrice } from "@/hooks/useFormatPrice";
import { useOrderTotals } from "@/hooks/useShipping";
import { formatCustomizationDisplay } from "@/lib/customization";
import { useCart } from "@/store/cart";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const formatPrice = useFormatPrice();
  const {
    subtotalFormatted,
    shippingFormatted,
    shippingLabel,
    totalFormatted,
  } = useOrderTotals();

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-zinc-900">Your Cart</h1>
          <p className="mt-3 text-zinc-600">Your cart is currently empty.</p>
          <Link
            href="/shop"
            className="inline-flex mt-8 px-7 py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-10">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.cartId}
                className="flex gap-4 p-4 rounded-2xl border border-border"
              >
                <div className="relative h-24 w-24 shrink-0 rounded-xl overflow-hidden bg-surface">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/product/${item.slug}`}
                    className="font-medium text-zinc-900 hover:text-brand"
                  >
                    {item.name}
                  </Link>
                  {item.variant && (
                    <p className="text-sm text-zinc-500">{item.variant}</p>
                  )}
                  {item.customization &&
                    Object.entries(item.customization).map(([k, v]) =>
                      v ? (
                        <p key={k} className="text-xs text-zinc-500">
                          {formatCustomizationDisplay(
                            k,
                            v,
                            k === "weight" ? "g" : k === "grains" ? "grains" : undefined
                          )}
                        </p>
                      ) : null
                    )}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.cartId, item.quantity - 1)
                      }
                      className="h-10 w-10 flex items-center justify-center rounded-lg border border-border hover:bg-zinc-50"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.cartId, item.quantity + 1)
                      }
                      className="h-10 w-10 flex items-center justify-center rounded-lg border border-border hover:bg-zinc-50"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeItem(item.cartId)}
                    className="mt-2 text-zinc-400 hover:text-red-500"
                    aria-label="Remove"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface rounded-2xl p-6 h-fit">
            <h2 className="font-bold text-lg text-zinc-900 mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-zinc-600">Subtotal</span>
              <span className="font-medium">{subtotalFormatted}</span>
            </div>
            <div className="flex justify-between text-sm mb-1 gap-4">
              <span className="text-zinc-600 shrink-0">Delivery</span>
              <span className="font-medium text-right">{shippingFormatted}</span>
            </div>
            <p className="text-xs text-zinc-500 mb-4">{shippingLabel}</p>
            <div className="border-t border-border pt-4 flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-brand text-lg">
                {totalFormatted}
              </span>
            </div>
            <button
              type="button"
              className="w-full mt-6 py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors active:scale-[0.98]"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={clearCart}
              className="w-full mt-3 py-2 text-sm text-zinc-500 hover:text-zinc-700"
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
