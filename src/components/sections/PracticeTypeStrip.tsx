"use client";

import { useRef } from "react";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import {
  fadeInUpClean,
  sectionCardsContainerVariants,
  sectionCardVariants,
} from "@/lib/animations";
import { getSeoPagesByGroup } from "@/data/seoPages";

const headline = "Practice types we serve";
const sub =
  "Every practice stage and structure needs a slightly different billing approach. Apex aligns its support model to where your group is today.";

export default function PracticeTypeStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const practiceTypes = getSeoPagesByGroup("solutions").slice(0, 6);

  return (
    <section
      ref={ref}
      className="section-generous relative overflow-hidden bg-white"
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
            <Building2 className="h-3.5 w-3.5" />
            Practice Types
          </m.span>
          <m.h2
            variants={fadeInUpClean}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            {headline.split(" ")[0]}{" "}
            <span className="gradient-text">
              {headline.split(" ").slice(1).join(" ")}
            </span>
          </m.h2>
          <m.p
            variants={fadeInUpClean}
            className="mt-4 font-body text-base leading-relaxed text-muted sm:text-lg"
          >
            {sub}
          </m.p>
        </m.div>

        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionCardsContainerVariants}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {practiceTypes.map((page) => (
            <m.div key={page.slug} variants={sectionCardVariants}>
              <Link
                href={page.path}
                className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                  {page.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm leading-6 text-muted">
                  {page.intro}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore this practice type
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </m.div>
          ))}
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            See all practice types we support
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </m.div>
      </div>
    </section>
  );
}
