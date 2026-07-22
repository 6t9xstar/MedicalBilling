"use client";

import { useRef, useEffect } from "react";
import { m, useInView, useMotionValue, animate } from "framer-motion";

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      const node = ref.current;
      if (!node) return;
      node.textContent = `${prefix}0${suffix}`;
      const controls = animate(count, target, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1] as const,
        onUpdate: (v) => {
          const formatted = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString();
          node.textContent = `${prefix}${formatted}${suffix}`;
        },
      });
      return controls.stop;
    }
  }, [inView, count, target, decimals, prefix, suffix]);

  return (
    <m.span
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="tabular-nums"
    >
      {prefix}0{suffix}
    </m.span>
  );
}
