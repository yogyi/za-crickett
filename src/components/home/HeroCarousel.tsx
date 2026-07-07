"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  CaretLeft,
  CaretRight,
  Trophy,
} from "@phosphor-icons/react";
import { heroSlides, type HeroSlide } from "@/data/heroSlides";

const INTERVAL_MS = 5500;

function SlideImage({
  slide,
  priority,
  variant,
}: {
  slide: HeroSlide;
  priority?: boolean;
  variant: "mobile" | "desktop";
}) {
  const position =
    variant === "mobile"
      ? slide.imagePositionMobile ?? "object-cover object-[78%_center]"
      : slide.imagePosition ?? "object-cover object-center";

  return (
    <Image
      src={slide.image}
      alt=""
      fill
      priority={priority}
      className={position}
      sizes="100vw"
    />
  );
}

function SlideContent({ slide }: { slide: HeroSlide }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-5">
        <Image
          src="/images/za-cricket-logo.png"
          alt="ZA Cricket"
          width={120}
          height={48}
          className="h-9 sm:h-10 lg:h-11 w-auto object-contain"
          priority
        />
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-subtle lg:bg-white/80 backdrop-blur-sm border border-brand/10 text-brand text-xs font-semibold shadow-sm">
          <Trophy size={14} weight="fill" />
          {slide.eyebrow}
        </span>
      </div>

      <h1 className="text-[1.75rem] leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-900">
        {slide.title}
        {slide.highlight && (
          <>
            <br />
            <span className="text-gradient-brand">{slide.highlight}</span>
          </>
        )}
      </h1>

      <p className="mt-4 sm:mt-5 text-[0.9375rem] sm:text-lg text-zinc-600 leading-relaxed max-w-md">
        {slide.description}
      </p>

      <div className="mt-5 sm:mt-6 lg:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
        <Link
          href={slide.primaryCta.href}
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors active:scale-[0.98] shadow-lg shadow-brand/25 w-full sm:w-auto"
        >
          {slide.primaryCta.label}
          <ArrowRight size={18} weight="bold" />
        </Link>
        {slide.secondaryCta && (
          <Link
            href={slide.secondaryCta.href}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-white border-2 border-brand/15 text-brand font-semibold rounded-xl hover:border-brand hover:bg-brand-subtle transition-colors active:scale-[0.98] w-full sm:w-auto"
          >
            {slide.secondaryCta.label}
          </Link>
        )}
      </div>
    </>
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

  return (
    <section
      className="relative overflow-hidden bg-white lg:min-h-[100dvh] lg:bg-brand-subtle"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart === null) return;
        const diff = touchStart - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
        setTouchStart(null);
      }}
      aria-roledescription="carousel"
      aria-label="Featured promotions"
    >
      {/* Mobile / tablet: product image panel above copy */}
      <div className="lg:hidden">
        <div className="relative w-full aspect-[5/4] sm:aspect-[3/2] max-h-[min(52vh,420px)] sm:max-h-[min(56vh,480px)] overflow-hidden bg-brand-subtle">
          <motion.div
            key={slide.id}
            initial={false}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <SlideImage slide={slide} priority={current === 0} variant="mobile" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent" />
          </motion.div>
        </div>

        <div className="relative px-4 sm:px-6 pb-28 pt-6 sm:pt-8">
          <motion.div
            key={`${slide.id}-mobile`}
            initial={false}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <SlideContent slide={slide} />
          </motion.div>
        </div>
      </div>

      {/* Desktop: full-bleed background */}
      <div className="hidden lg:block relative min-h-[100dvh]">
        <motion.div
          key={slide.id}
          initial={false}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0">
            <SlideImage slide={slide} priority={current === 0} variant="desktop" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/15" />
        </motion.div>

        <div className="absolute top-20 right-[8%] w-80 h-80 bg-brand-glow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full min-h-[100dvh] flex items-center">
          <motion.div
            key={`${slide.id}-desktop`}
            initial={false}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-xl"
          >
            <SlideContent slide={slide} />
          </motion.div>
        </div>
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 sm:left-4 lg:left-8 top-[min(26vh,210px)] sm:top-[min(28vh,240px)] lg:top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm border border-border text-zinc-700 shadow-lg hover:bg-white hover:text-brand transition-colors active:scale-95"
        aria-label="Previous slide"
      >
        <CaretLeft size={22} weight="bold" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 sm:right-4 lg:right-8 top-[min(26vh,210px)] sm:top-[min(28vh,240px)] lg:top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm border border-border text-zinc-700 shadow-lg hover:bg-white hover:text-brand transition-colors active:scale-95"
        aria-label="Next slide"
      >
        <CaretRight size={22} weight="bold" />
      </button>

      {/* Dots + progress */}
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
                    ? "w-8 bg-brand"
                    : "w-2 bg-zinc-300 group-hover:bg-brand/50"
                }`}
              />
            </button>
          ))}
        </div>
        <p className="text-xs text-zinc-500 font-medium tabular-nums">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(heroSlides.length).padStart(2, "0")}
        </p>
      </div>

      {/* Auto-play progress bar */}
      {!reduce && !paused && (
        <motion.div
          key={`progress-${current}`}
          className="absolute bottom-0 left-0 h-1 bg-brand z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
        />
      )}
    </section>
  );
}
