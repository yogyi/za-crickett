"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "cartId" | "quantity">) => void;
  removeItem: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
}

function makeCartId(
  productId: string,
  variant?: string,
  customization?: Record<string, string>
): string {
  const customKey = customization
    ? Object.entries(customization)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => `${k}:${v}`)
        .join("|")
    : "";
  return `${productId}::${variant ?? ""}::${customKey}`;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) => {
        const cartId = makeCartId(
          item.productId,
          item.variant,
          item.customization
        );
        const existing = get().items.find((i) => i.cartId === cartId);

        if (existing) {
          set({
            items: get().items.map((i) =>
              i.cartId === cartId
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
            isOpen: true,
          });
        } else {
          set({
            items: [
              ...get().items,
              { ...item, cartId, quantity: 1 },
            ],
            isOpen: true,
          });
        }
      },

      removeItem: (cartId) =>
        set({ items: get().items.filter((i) => i.cartId !== cartId) }),

      updateQuantity: (cartId, quantity) => {
        if (quantity < 1) {
          get().removeItem(cartId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.cartId === cartId ? { ...i, quantity } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),
      toggleCart: () => set({ isOpen: !get().isOpen }),
      setCartOpen: (open) => set({ isOpen: open }),
    }),
    { name: "za-cricket-cart" }
  )
);

export function useCartTotal() {
  const items = useCart((s) => s.items);
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function useCartCount() {
  const items = useCart((s) => s.items);
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
