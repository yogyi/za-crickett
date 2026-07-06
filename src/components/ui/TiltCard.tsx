"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  intensity?: number;
}

export function TiltCard({
  children,
  className = "",
  innerClassName = "",
  intensity = 10,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [intensity, -intensity]),
    { stiffness: 260, damping: 28 }
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-intensity, intensity]),
    { stiffness: 260, damping: 28 }
  );
  const shineOpacity = useTransform(
    pointerX,
    [-0.5, 0, 0.5],
    [0.15, 0.35, 0.15]
  );

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`tilt-scene ${className}`}>
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`tilt-card relative ${innerClassName}`}
      >
        {children}
        <motion.div
          aria-hidden
          style={{ opacity: shineOpacity }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/40 via-transparent to-brand/10"
        />
      </motion.div>
    </div>
  );
}
