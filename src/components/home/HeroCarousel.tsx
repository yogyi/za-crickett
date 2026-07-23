"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  CaretLeft,
  CaretRight,
  Lightning,
  Medal,
  Package,
  ShieldCheck,
  Sparkle,
  Truck,
} from "@phosphor-icons/react";
import { heroSlides, type HeroSlide } from "@/data/heroSlides";

const INTERVAL_MS = 5500;

const slideChips: Record<string, { icon: typeof Medal; label: string }[]> = {
  greatness: [
    { icon: Medal, label: "Grade 1 English Willow" },
    { icon: ShieldCheck, label: "Athlete Tested" },
    { icon: Truck, label: "Fast SG Delivery" },
  ],
  protection: [
    { icon: ShieldCheck, label: "Pro-Level Protection" },
    { icon: Lightning, label: "Lightweight & Breathable" },
    { icon: Medal, label: "Match Ready" },
  ],
  "coloured-pads": [
    { icon: Sparkle, label: "Bold Colourways" },
    { icon: ShieldCheck, label: "Same Pro Protection" },
    { icon: Medal, label: "Stand Out At The Crease" },
  ],
  custom: [
    { icon: Sparkle, label: "Fully Customisable" },
    { icon: Medal, label: "Grade 1 English Willow" },
    { icon: Lightning, label: "Built To Your Spec" },
  ],
  accessories: [
    { icon: Package, label: "Thigh Pads & Bags" },
    { icon: Sparkle, label: "Complete Your Kit" },
    { icon: Truck, label: "Match-Day Ready" },
  ],
};

const slideDecorIcon: Partial<Record<string, typeof ShieldCheck>> = {
  protection: ShieldCheck,
  accessories: Package,
};

function SlideVisual({
  slide,
  variant,
}: {
  slide: HeroSlide;
  variant: "mobile" | "desktop";
}) {
  const isDesktop = variant === "desktop";
  const DecorIcon = slideDecorIcon[slide.id];

  return (
    <div
      className={`relative pointer-events-none ${
        isDesktop ? "h-[min(72vh,680px)] w-full" : "h-[300px] w-full"
      }`}
      aria-hidden="true"
    >
      {/* Boundary ring + glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[78%] max-w-[520px]">
        <div className="hero-boundary-ring absolute inset-0" />
        <div className="hero-boundary-ring absolute inset-[9%] opacity-60" />
        <div className="hero-product-glow absolute inset-[12%] rounded-full" />
      </div>

      {slide.accentImage ? (
        // Pre-compressed WebP cutouts — skip the optimizer so the full-res
        // original is served instead of a re-encoded upscale
        <Image
          src={slide.accentImage}
          alt=""
          fill
          unoptimized
          className="object-contain object-center drop-shadow-[0_36px_60px_rgba(0,0,0,0.55)]"
          sizes={isDesktop ? "1000px" : "700px"}
          priority={slide.id === "greatness"}
        />
      ) : (
        DecorIcon && (
          <div className="absolute inset-0 flex items-center justify-center text-white/20">
            <DecorIcon size={isDesktop ? 300 : 190} weight="duotone" />
          </div>
        )
      )}
    </div>
  );
}

function SlideContent({ slide }: { slide: HeroSlide }) {
  const chips = slideChips[slide.id] ?? [];

  return (
    <>
      <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-violet-200 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
        {slide.eyebrow}
      </span>

      <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-[4.75rem] font-extrabold uppercase tracking-tight leading-[0.95] text-white">
        {slide.title}
        {slide.highlight && (
          <>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-300 via-violet-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(217,70,239,0.35)]">
              {slide.highlight}
            </span>
          </>
        )}
      </h1>

      <p className="mt-4 sm:mt-5 max-w-md text-[0.9375rem] sm:text-lg leading-relaxed text-purple-100/85">
        {slide.description}
      </p>

      {chips.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/12 bg-white/[0.07] px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-purple-100/90 backdrop-blur-sm"
            >
              <Icon size={14} weight="fill" className="text-fuchsia-300" />
              {label}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
        <Link
          href={slide.primaryCta.href}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-7 py-3.5 font-bold text-white shadow-[0_16px_40px_-8px_rgba(192,38,211,0.55)] transition-all hover:shadow-[0_20px_48px_-8px_rgba(192,38,211,0.7)] hover:brightness-110 active:scale-[0.98] sm:w-auto"
        >
          {slide.primaryCta.label}
          <ArrowRight
            size={18}
            weight="bold"
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
        {slide.secondaryCta && (
          <Link
            href={slide.secondaryCta.href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.06] px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-white/[0.12] active:scale-[0.98] sm:w-auto"
          >
            {slide.secondaryCta.label}
          </Link>
        )}
      </div>
    </>
  );
}

function StageBackdrop({ watermark }: { watermark: string }) {
  return (
    <div className="absolute inset-0 hero-stage-base" aria-hidden="true">
      <div className="absolute inset-0 pattern-dots-light opacity-25" />
      <div className="hero-floodlight hero-floodlight--left" />
      <div className="hero-floodlight hero-floodlight--right" />

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center overflow-hidden">
        <span className="hero-watermark text-[24vw] lg:text-[19vw]">
          {watermark}
        </span>
      </div>

      <div className="hero-pitch absolute inset-x-0 bottom-0 h-40 sm:h-52" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#150c24] to-transparent" />
    </div>
  );
}

export function HeroCarousel() {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + heroSlides.length) % heroSlides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (reduce || paused) return;
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next, paused, reduce]);

  const slide = heroSlides[current];
  const watermark = (slide.highlight ?? slide.title).toUpperCase();

  return (
    <section
      className="relative overflow-hidden bg-[#170e29] lg:min-h-[100dvh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart === null) return;
        const diff = touchStart - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) next();
          else prev();
        }
        setTouchStart(null);
      }}
      aria-roledescription="carousel"
      aria-label="Featured promotions"
    >
      <div key={`stage-${slide.id}`} className="absolute inset-0">
        <StageBackdrop watermark={watermark} />
      </div>

      {/* Mobile / tablet */}
      <div className="lg:hidden relative min-h-[min(92dvh,820px)] flex flex-col justify-end overflow-hidden">
        <div key={`${slide.id}-visual-m`} className="relative z-10 mt-20 px-6">
          <SlideVisual slide={slide} variant="mobile" />
        </div>
        <div
          key={`${slide.id}-mobile`}
          className="relative z-10 w-full px-4 sm:px-6 pb-28 pt-6"
        >
          <SlideContent slide={slide} />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block relative min-h-[100dvh]">
        <div className="relative z-10 max-w-[1800px] mx-auto px-8 w-full min-h-[100dvh] grid grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] items-center gap-8">
          <div key={`${slide.id}-desktop`} className="max-w-xl pt-10">
            <SlideContent slide={slide} />
          </div>
          <div key={`${slide.id}-visual-d`} className="pt-10">
            <SlideVisual slide={slide} variant="desktop" />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-3 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 transition-colors active:scale-95"
        aria-label="Previous slide"
      >
        <CaretLeft size={22} weight="bold" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 transition-colors active:scale-95"
        aria-label="Next slide"
      >
        <CaretRight size={22} weight="bold" />
      </button>

      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(i)}
              className="group relative flex items-center justify-center min-h-11 min-w-11 p-2"
              aria-label={`Go to slide ${i + 1}: ${s.highlight ?? s.title}`}
              aria-current={i === current ? "true" : undefined}
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-gradient-to-r from-fuchsia-400 to-violet-300"
                    : "w-2 bg-white/35 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
        <p className="text-xs text-white/60 font-medium tabular-nums">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(heroSlides.length).padStart(2, "0")}
        </p>
      </div>

      {!reduce && !paused && (
        <motion.div
          key={`progress-${current}`}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-fuchsia-500 via-violet-400 to-purple-300 z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
        />
      )}
    </section>
  );
}
