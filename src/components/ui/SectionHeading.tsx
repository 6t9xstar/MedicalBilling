"use client";

import { m, type Variants } from "framer-motion";
import { type ReactNode } from "react";

export default function SectionHeading({
  children,
  variants,
  className = "",
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}) {
  return (
    <m.h2
      variants={variants}
      className={`font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem] ${className}`}
    >
      {children}
    </m.h2>
  );
}
