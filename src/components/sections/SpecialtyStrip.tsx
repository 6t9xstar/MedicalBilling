"use client";

import { useRef } from "react";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import { ArrowRight, Stethoscope } from "lucide-react";
import { specialtyPages } from "@/data/specialtyPages";
import {
  fadeInUpClean,
  sectionCardsContainerVariants,
  sectionCardVariants,
} from "@/lib/animations";

export default function SpecialtyStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = specialtyPages.slice(0, 8);

  return (
    <section
      ref={ref}
      className="section-generous relative overflow-hidden border-y border-border bg-background-subtle"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionCardsContainerVariants}
          className="mb-10 max-w-3xl"
        >
          <m.span
            variants={fadeInUpClean}
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            <Stethoscope className="h-3.5 w-3.5" />
            Medical Specialties
          </m.span>
          <m.h2
            variants={fadeInUpClean}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Specialty-aware billing that respects{" "}
            <span className="gradient-text">your clinical workflow</span>
          </m.h2>
          <m.p
            variants={fadeInUpClean}
            className="mt-4 font-body text-base leading-relaxed text-muted sm:text-lg"
          >
            Apex structures billing support around each specialty&apos;s
            documentation patterns, payer rules, and denial pressure points
            rather than forcing a generic service model onto complex
            practices.
          </m.p>
        </m.div>

        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionCardsContainerVariants}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {featured.map((specialty) => (
            <m.div key={specialty.slug} variants={sectionCardVariants}>
              <Link
                href={`/specialties/${specialty.slug}`}
                className="group flex h-full items-center justify-between gap-3 rounded-xl border border-border bg-white px-4 py-3.5 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <span className="font-heading text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {specialty.name}
                </span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            </m.div>
          ))}
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4"
        >
          <p className="font-body text-sm text-muted">
            52 specialty billing pages across the Apex
            library.
          </p>
          <Link
            href="/specialties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            Browse all specialties
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </m.div>
      </div>
    </section>
  );
}
