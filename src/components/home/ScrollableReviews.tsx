"use client";

import { reviews, splitReviewsIntoColumns, type Review } from "@/data/reviews";
import { Star } from "@phosphor-icons/react";

function GoogleBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      aria-label="Google review"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-2xl border border-zinc-100 bg-white p-5 sm:p-6 shadow-lg shadow-brand/5 transition-shadow hover:shadow-xl">
      <div
        className="mb-3 flex gap-0.5"
        role="img"
        aria-label="5 out of 5 stars"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} weight="fill" className="text-amber-400" />
        ))}
      </div>
      <p className="text-sm text-zinc-700 leading-relaxed">
        &ldquo;{review.quote}&rdquo;
      </p>
      <footer className="mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="h-10 w-10 shrink-0 rounded-full flex items-center justify-center text-white font-semibold text-sm"
            style={{ backgroundColor: review.avatarColor }}
          >
            {review.initial}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-sm text-zinc-900 truncate">
              {review.name}
            </p>
            <p className="text-xs text-zinc-500">Verified Buyer</p>
          </div>
        </div>
        <GoogleBadge />
      </footer>
    </article>
  );
}

function ScrollColumn({
  items,
  direction,
  duration,
  className = "",
}: {
  items: Review[];
  direction: "up" | "down";
  duration: number;
  className?: string;
}) {
  const looped = [...items, ...items];

  return (
    <div
      className={`review-col-scroll flex-1 max-w-xs ${className}`}
      data-direction={direction}
    >
      <div
        className={`flex flex-col gap-6 pb-6 ${
          direction === "up" ? "review-col-up" : "review-col-down"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {looped.map((review, index) => (
          <ReviewCard key={`${review.id}-${index}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export function ScrollableReviews() {
  const columns = splitReviewsIntoColumns(reviews, 3);

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-zinc-100 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
            Real Stories from{" "}
            <span className="text-brand">Happy Players</span>
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            <span className="font-semibold text-zinc-800">
              Trusted by players across Singapore
            </span>{" "}
            - from custom bats to complete protection bundles.{" "}
            <span className="text-brand font-medium">
              100% verified customer reviews.
            </span>
          </p>
        </div>

        <div
          className="review-columns-mask flex justify-center gap-4 sm:gap-6 max-h-[520px] sm:max-h-[600px] lg:max-h-[700px] overflow-hidden"
          role="list"
          aria-label="Customer reviews"
        >
          <ScrollColumn
            items={columns[0]}
            direction="up"
            duration={25}
            className="w-full max-w-[min(100%,20rem)]"
          />
          <ScrollColumn
            items={columns[1]}
            direction="down"
            duration={30}
            className="hidden sm:block w-full max-w-[min(100%,20rem)]"
          />
          <ScrollColumn
            items={columns[2]}
            direction="up"
            duration={28}
            className="hidden lg:block"
          />
        </div>

        <p className="text-center mt-10 text-sm text-zinc-500">
          Reviews from verified ZA Cricket customers across Singapore
        </p>
      </div>
    </section>
  );
}
