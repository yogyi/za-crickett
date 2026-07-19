"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { FormattedPrice } from "@/components/shop/FormattedPrice";
import { TiltCard } from "@/components/ui/TiltCard";

const showcaseBats = [
  {
    name: "The Monarch",
    price: 299,
    tag: "Grade 2",
    specs: ["Grade 2 English Willow", "Balanced pick-up", "Powerful sweet spot"],
    image: "/images/products/the-monarch/monarch-hero.jpg",
    href: "/product/the-monarch",
  },
  {
    name: "The Eagle",
    price: 399,
    tag: "Grade 1",
    specs: ["Grade 1 English Willow", "Enhanced edges", "Deep sweet spot"],
    image: "/images/products/the-eagle/eagle-front-02.jpg",
    href: "/product/the-eagle",
  },
  {
    name: "The Signature",
    price: 499,
    tag: "Grade 1 custom",
    specs: ["Premium Grade 1 willow", "Custom profile & handle", "Built to your specifications"],
    image: "/images/products/the-signature/signature-hero.jpg",
    href: "/product/the-signature",
  },
];

export function BatShowcase3D() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-mesh-purple overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full badge-shimmer text-white text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkle size={14} weight="fill" />
            Interactive lineup
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
            Explore our bat range in 3D
          </h2>
          <p className="mt-3 text-zinc-600 max-w-xl mx-auto text-sm sm:text-base">
            Three English willow bats for every level — swipe on mobile, hover to
            tilt on desktop.
          </p>
        </div>

        <div className="flex lg:hidden snap-scroll-x gap-4 pb-2 -mx-4 px-4">
          {showcaseBats.map((bat) => (
            <div key={bat.name} className="snap-scroll-item w-[min(82vw,300px)]">
              <BatCard bat={bat} tilt={false} />
            </div>
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {showcaseBats.map((bat) => (
            <div key={bat.name}>
              <BatCard bat={bat} tilt />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/shop/bats"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Compare all bats
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BatCard({
  bat,
  tilt,
}: {
  bat: (typeof showcaseBats)[number];
  tilt?: boolean;
}) {
  const card = (
    <Link
      href={bat.href}
      className="flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-border shadow-md hover:shadow-lg transition-shadow active:scale-[0.99]"
    >
      <div className="relative aspect-[3/4] bg-surface shrink-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-5">
          <div className="relative h-full w-full">
            <Image
              src={bat.image}
              alt={bat.name}
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 85vw, 33vw"
            />
          </div>
        </div>
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand text-xs font-bold">
          {bat.tag}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-bold text-base sm:text-lg text-zinc-900">{bat.name}</h3>
          <span className="font-bold text-brand text-sm sm:text-base shrink-0">
            <FormattedPrice amount={bat.price} />
          </span>
        </div>
        <ul className="mt-3 space-y-1.5">
          {bat.specs.map((spec) => (
            <li key={spec} className="text-xs text-zinc-500 flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-brand shrink-0" />
              {spec}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );

  if (tilt) {
    return <TiltCard intensity={10}>{card}</TiltCard>;
  }

  return card;
}
