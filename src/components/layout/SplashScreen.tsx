"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MIN_DISPLAY_MS = 350;
const FADE_MS = 200;

export function SplashScreen() {
  const [phase, setPhase] = useState<"visible" | "exiting" | "done">("visible");

  useEffect(() => {
    let exitTimer: ReturnType<typeof setTimeout>;
    const doneTimer = setTimeout(() => {
      setPhase("exiting");
      exitTimer = setTimeout(() => setPhase("done"), FADE_MS);
    }, MIN_DISPLAY_MS);

    return () => {
      clearTimeout(doneTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  useEffect(() => {
    if (phase === "done") return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white transition-opacity ease-out ${
        phase === "exiting" ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="splash-logo relative w-36 h-36 sm:w-44 sm:h-44">
        <Image
          src="/images/za-cricket-logo.png"
          alt="ZA Cricket"
          fill
          priority
          sizes="176px"
          className="object-contain"
        />
      </div>

      <p className="splash-tagline mt-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.35em] text-purple-900/70">
        Achieve Greatness
      </p>

      <div className="mt-7 h-[3px] w-40 sm:w-48 overflow-hidden rounded-full bg-purple-100">
        <div className="splash-bar h-full w-full rounded-full bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700" />
      </div>
    </div>
  );
}
