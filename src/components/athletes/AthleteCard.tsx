import Image from "next/image";
import Link from "next/link";
import type { Athlete } from "@/types";

interface AthleteCardProps {
  athlete: Athlete;
  variant?: "compact" | "feature";
}

export function AthleteCard({ athlete, variant = "compact" }: AthleteCardProps) {
  const isFeature = variant === "feature";
  const isStudio = athlete.imageFocus?.includes("object-contain");
  const [firstName, ...rest] = athlete.name.split(" ");

  return (
    <Link
      href="/athletes"
      className={`group relative block overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg transition-transform active:scale-[0.99] ${
        isStudio ? "bg-zinc-100" : "bg-zinc-900"
      } ${isFeature ? "aspect-[3/4] min-h-[320px]" : "aspect-[3/4]"}`}
    >
      <Image
        src={athlete.image}
        alt={athlete.name}
        fill
        className={`transition-transform duration-700 group-hover:scale-105 ${
          athlete.imageFocus ?? "object-cover object-center"
        }`}
        sizes={
          isFeature
            ? "(max-width: 640px) 78vw, 25vw"
            : "(max-width: 640px) 70vw, 20vw"
        }
      />
      <div
        className={`absolute inset-0 ${
          isStudio
            ? "bg-gradient-to-t from-zinc-900/80 via-zinc-900/10 to-transparent"
            : "bg-gradient-to-t from-black/90 via-black/25 to-black/5"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-2">
        <span
          className={`px-2.5 py-1 rounded-full backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider border ${
            isStudio
              ? "bg-zinc-900/80 text-white border-zinc-700"
              : "bg-white/15 text-white border-white/20"
          }`}
        >
          {athlete.region}
        </span>
        {athlete.productLine && (
          <span className="px-2.5 py-1 rounded-full bg-brand text-white text-[10px] sm:text-xs font-semibold">
            {athlete.productLine}
          </span>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-1">
          ZA Athlete
        </p>
        <h3
          className={`font-bold text-white leading-[0.95] tracking-tight ${
            isFeature ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          <span className="block">{firstName}</span>
          {rest.length > 0 && (
            <span className="block text-white/90">{rest.join(" ")}</span>
          )}
        </h3>
        <p className="text-xs sm:text-sm text-white/75 mt-1.5">{athlete.role}</p>
      </div>
    </Link>
  );
}
