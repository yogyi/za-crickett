"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, ShoppingBag, X } from "@phosphor-icons/react";
import { CountryCurrencySelector } from "@/components/layout/CountryCurrencySelector";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { Logo } from "@/components/layout/Logo";
import { useCart, useCartCount } from "@/store/cart";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/shop/bats", label: "Bats" },
  { href: "/bundles", label: "Bundles" },
  { href: "/tips", label: "Tips" },
  { href: "/athletes", label: "Athletes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartCount = useCartCount();
  const setCartOpen = useCart((s) => s.setCartOpen);
  useBodyScrollLock(mobileOpen);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 min-w-0 max-w-full bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? "text-brand bg-brand-subtle"
                      : "text-zinc-600 hover:text-brand hover:bg-zinc-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <CountryCurrencySelector />
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative flex items-center justify-center h-10 w-10 rounded-lg text-zinc-700 hover:bg-zinc-100 transition-colors active:scale-[0.98]"
              aria-label={`Cart, ${cartCount} items`}
            >
              <ShoppingBag size={22} weight="regular" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white text-[11px] font-semibold">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-zinc-700 hover:bg-zinc-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={22} weight="bold" />
              ) : (
                <List size={22} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center min-h-11 px-3 py-3 text-base font-medium text-zinc-700 hover:text-brand hover:bg-brand-subtle rounded-lg"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 mt-3 border-t border-border px-1 [&_button]:w-full [&_ul]:left-0 [&_ul]:right-0 [&_ul]:w-full">
            <p className="px-3 pb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Country & currency
            </p>
            <CountryCurrencySelector />
          </div>
        </nav>
      )}
    </header>
  );
}
