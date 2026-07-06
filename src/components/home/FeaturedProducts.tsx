"use client";

import { ProductCard } from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

const featured = products.filter((p) =>
  ["bat-monarch", "bat-signature", "bat-eagle", "gloves-players"].includes(p.id)
);

export function FeaturedProducts() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-brand-gradient-soft relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-brand-glow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-brand text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              Fan favourites
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              Bestsellers
            </h2>
            <p className="mt-3 text-zinc-600 max-w-lg">
              Real gear, real photos — trusted by club players and sponsored
              athletes across Singapore.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors shrink-0"
          >
            View all products
            <ArrowRight size={16} weight="bold" />
          </Link>
        </motion.div>

        {/* Mobile: swipeable bestsellers */}
        <div className="flex sm:hidden snap-scroll-x gap-4 pb-3 -mx-4 px-4">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="snap-scroll-item w-[min(78vw,300px)] bg-white rounded-3xl p-3 shadow-md border border-white"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-sm border border-white hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
