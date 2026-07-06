"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash, X } from "@phosphor-icons/react";
import { formatCustomizationDisplay } from "@/lib/customization";
import { useFormatPrice } from "@/hooks/useFormatPrice";
import { useOrderTotals } from "@/hooks/useShipping";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useCart } from "@/store/cart";

export function CartDrawer() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity } = useCart();
  const formatPrice = useFormatPrice();
  const {
    subtotalFormatted,
    shippingFormatted,
    shippingLabel,
    totalFormatted,
  } = useOrderTotals();
  useBodyScrollLock(isOpen);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setCartOpen(false)}
        aria-hidden
      />
      <aside
        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-zinc-100 active:scale-[0.98]"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <Image
              src="/images/za-cricket-logo.png"
              alt="ZA Cricket"
              width={100}
              height={40}
              className="h-10 w-auto object-contain mb-6 opacity-60"
            />
            <div className="h-16 w-16 rounded-full bg-brand-subtle flex items-center justify-center mb-4">
              <ShoppingBag size={28} className="text-brand" />
            </div>
            <p className="font-medium text-zinc-900 mb-1">Your cart is empty</p>
            <p className="text-sm text-zinc-500 mb-6">
              Browse our collection and find your perfect gear.
            </p>
            <Link
              href="/shop"
              onClick={() => setCartOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white text-sm font-semibold rounded-xl hover:bg-brand-dark transition-colors active:scale-[0.98]"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <li
                  key={item.cartId}
                  className="flex gap-4 pb-4 border-b border-border last:border-0"
                >
                  <div className="relative h-20 w-20 shrink-0 rounded-xl bg-surface overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${item.slug}`}
                      onClick={() => setCartOpen(false)}
                      className="font-medium text-sm text-zinc-900 hover:text-brand line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    {item.variant && (
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {item.variant}
                      </p>
                    )}
                    {item.customization &&
                      Object.entries(item.customization).map(([key, val]) =>
                        val ? (
                          <p key={key} className="text-xs text-zinc-500">
                            {formatCustomizationDisplay(
                              key,
                              val,
                              key === "weight" ? "g" : key === "grains" ? "grains" : undefined
                            )}
                          </p>
                        ) : null
                      )}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.cartId, item.quantity - 1)
                          }
                          className="h-10 w-10 flex items-center justify-center rounded-md border border-border hover:bg-zinc-50 active:scale-[0.98]"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.cartId, item.quantity + 1)
                          }
                          className="h-10 w-10 flex items-center justify-center rounded-md border border-border hover:bg-zinc-50 active:scale-[0.98]"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-brand">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.cartId)}
                          className="h-10 w-10 flex items-center justify-center rounded-md text-zinc-400 hover:text-red-500 hover:bg-red-50"
                          aria-label="Remove item"
                        >
                          <Trash size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-border px-6 py-5 space-y-3 safe-bottom">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600">Subtotal</span>
                <span className="font-medium">{subtotalFormatted}</span>
              </div>
              <div className="flex justify-between text-sm gap-4">
                <span className="text-zinc-600 shrink-0">Delivery</span>
                <span className="font-medium">{shippingFormatted}</span>
              </div>
              <p className="text-xs text-zinc-500">{shippingLabel}</p>
              <div className="flex justify-between text-base border-t border-border pt-3">
                <span className="font-semibold text-zinc-900">Total</span>
                <span className="font-bold text-brand">{totalFormatted}</span>
              </div>
              <p className="text-xs text-zinc-500">
                Taxes, if applicable, are calculated at checkout.
              </p>
              <Link
                href="/cart"
                onClick={() => setCartOpen(false)}
                className="block w-full text-center py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors active:scale-[0.98]"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
