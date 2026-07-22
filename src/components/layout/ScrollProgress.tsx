"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const { progress } = useScrollProgress();

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-80 h-[3px] bg-transparent">
      <div
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
        className="h-full bg-linear-to-r from-primary via-accent to-primary shadow-[0_0_8px_rgba(25,136,255,0.35)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
