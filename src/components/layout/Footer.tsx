import Link from "next/link";
import Image from "next/image";
import { InstagramLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

const shopLinks = [
  { href: "/shop/bats", label: "Bats" },
  { href: "/shop/gloves", label: "Gloves" },
  { href: "/shop/pads", label: "Batting Pads" },
  { href: "/shop/wicket-keeping", label: "Wicket Keeping" },
  { href: "/shop/accessories", label: "Accessories" },
  { href: "/bundles", label: "Bundles" },
];

const policyLinks = [
  { href: "/policies/terms", label: "Terms & Conditions" },
  { href: "/policies/privacy", label: "Privacy Policy" },
  { href: "/policies/exchange", label: "Exchange & Refund Policy" },
  { href: "/policies/shipping", label: "Shipping & Delivery" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Image
                src="/images/za-cricket-logo.png"
                alt="ZA Cricket"
                width={140}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-xs">
              Singapore-based cricket equipment built to bring out the best in
              every player. Achieve Greatness.
            </p>
            <p className="mt-4 text-xs text-zinc-500">
              Trusted by club players, schools, and sponsored athletes across
              Singapore.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Shop</h3>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Policies</h3>
            <ul className="space-y-2.5">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:zacricket26@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors break-all"
                >
                  <EnvelopeSimple size={18} />
                  zacricket26@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/_zacricket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  <InstagramLogo size={18} />
                  @_zacricket
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="border-t border-zinc-800 px-2 sm:px-3 pt-8 sm:pt-10 overflow-hidden">
        <p
          className="footer-wordmark select-none text-center font-extrabold uppercase leading-none tracking-[-0.04em] whitespace-nowrap"
          aria-hidden="true"
        >
          ZA Cricket
        </p>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-zinc-500">
        <p>&copy; {new Date().getFullYear()} ZA Cricket. All rights reserved.</p>
        <p>Singapore</p>
      </div>
    </footer>
  );
}
