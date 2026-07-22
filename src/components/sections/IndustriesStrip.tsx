"use client";

import { useRef } from "react";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import { ArrowRight, Hospital } from "lucide-react";
import {
  fadeInUpClean,
  sectionCardsContainerVariants,
  sectionCardVariants,
} from "@/lib/animations";
import { getSeoPagesByGroup } from "@/data/seoPages";

export default function IndustriesStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const industries = getSeoPagesByGroup("industries").slice(0, 8);

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
            <Hospital className="h-3.5 w-3.5" />
            Healthcare Industries
          </m.span>
          <m.h2
            variants={fadeInUpClean}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Built for the{" "}
            <span className="gradient-text">operating realities</span> of every
            healthcare setting
          </m.h2>
          <m.p
            variants={fadeInUpClean}
            className="mt-4 font-body text-base leading-relaxed text-muted sm:text-lg"
          >
            From FQHCs and ambulatory surgery centers to telemedicine providers
            and home health agencies, Apex organizes billing support around how
            each industry actually gets paid.
          </m.p>
        </m.div>

        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionCardsContainerVariants}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {industries.map((industry) => (
            <m.div key={industry.slug} variants={sectionCardVariants}>
              <Link
                href={industry.path}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md"
              >
                <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary">
                  {industry.title}
                </h3>
                <p className="mt-2 line-clamp-3 font-body text-sm leading-6 text-muted">
                  {industry.intro}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
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
            See how Apex supports your specific operating model.
          </p>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            Browse all industries
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </m.div>
      </div>
    </section>
  );
}
