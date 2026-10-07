"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { BookOpen, Compass, FileStack, Stethoscope } from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  usePrefersReducedMotion,
} from "@/lib/animations";
import { services } from "@/data/services";
import { specialtyPages } from "@/data/specialtyPages";

const items = [
  {
    icon: FileStack,
    value: String(services.length),
    label: "Core services",
    description:
      "Billing, denials, AR, coding, enrollment, and front-end workflow support.",
  },
  {
    icon: Stethoscope,
    value: String(specialtyPages.length),
    label: "Specialty pages",
    description:
      "Specialty landing pages aligned with real practice workflows.",
  },
  {
    icon: BookOpen,
    value: "8",
    label: "Resource sections",
    description:
      "Resource hubs and reference pages to support educational growth.",
  },
  {
    icon: Compass,
    value: "4",
    label: "Conversion paths",
    description:
      "Audit, consultation, quote, and sales routes for clearer next steps.",
  },
];

export default function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = usePrefersReducedMotion();

  const grid = (
    <div
      className="grid grid-cols-1 gap-px rounded-2xl border border-border bg-border overflow-hidden md:grid-cols-2 xl:grid-cols-4"
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col bg-white px-6 py-8"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 mb-4">
            <item.icon className="h-5 w-5 text-primary" />
          </div>
          <span className="font-heading text-3xl font-bold text-foreground">
            {item.value}
          </span>
          <span className="mt-1 font-heading text-base font-semibold text-foreground">
            {item.label}
          </span>
          <p className="mt-3 font-body text-sm leading-6 text-muted">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );

  if (reduced) {
    return (
      <section
        ref={ref}
        className="section-compact bg-background-subtle overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {grid}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="section-compact bg-background-subtle overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <m.div
            variants={staggerContainer}
            className="grid grid-cols-1 gap-px rounded-2xl border border-border bg-border overflow-hidden md:grid-cols-2 xl:grid-cols-4"
          >
            {items.map((item) => (
              <m.div
                key={item.label}
                variants={staggerItem}
                className="flex flex-col bg-white px-6 py-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 mb-4">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-heading text-3xl font-bold text-foreground">
                  {item.value}
                </span>
                <span className="mt-1 font-heading text-base font-semibold text-foreground">
                  {item.label}
                </span>
                <p className="mt-3 font-body text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </m.div>
            ))}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
