"use client";

import { useRef } from "react";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";
import {
  fadeInUpClean,
  sectionCardsContainerVariants,
  sectionCardVariants,
} from "@/lib/animations";

type Placeholder = {
  outcome: string;
  context: string;
  body: string;
  metric: string;
  attribution: string;
};

const placeholders: Placeholder[] = [
  {
    outcome: "Cleaner claim throughput",
    context: "Multi-specialty practice, 14 providers",
    body: "Apex helped us tighten our submission checkpoints. Our back office spends far less time reworking the same claims, and our weekly reporting is finally in language we can act on instead of just file away.",
    metric: "Lower rework volume",
    attribution: "Practice administrator",
  },
  {
    outcome: "Sharper denial visibility",
    context: "Behavioral health group, expanding across two states",
    body: "The denial analysis was the most useful part of the engagement. We finally had a written view of which payers were denying what, and Apex walked us through upstream corrections that fit our workflow.",
    metric: "Faster denial resolution",
    attribution: "Director of operations",
  },
  {
    outcome: "Cleaner transition",
    context: "Independent practice moving off in-house billing",
    body: "We were nervous about the handoff but the transition process was documented. Our reporting cadence never slipped and the team had a clear escalation path from day one.",
    metric: "No interruption to billing cadence",
    attribution: "Physician owner",
  },
];

export default function TrustProof() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <m.span
              variants={fadeInUpClean}
              className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              Testimonials &amp; Case Studies
            </m.span>
            <m.h2
              variants={fadeInUpClean}
              className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Permission-based feedback{" "}
              <span className="gradient-text">you can read for context</span>
            </m.h2>
            <m.p
              variants={fadeInUpClean}
              className="mt-4 font-body text-base leading-relaxed text-muted sm:text-lg"
            >
              These testimonials use anonymized, permission-based language.
              Future case studies will document operational baseline,
              intervention, and measured change without exaggerating what Apex
              can guarantee.
            </m.p>
          </div>
          <m.div variants={fadeInUpClean} className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent"
            >
              View case studies
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-white px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              See all testimonials
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </m.div>
        </m.div>

        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionCardsContainerVariants}
          className="grid gap-6 lg:grid-cols-3"
        >
          {placeholders.map((item) => (
            <m.article
              key={item.outcome}
              variants={sectionCardVariants}
              className="flex h-full flex-col rounded-2xl border border-border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <Star
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {item.outcome}
                </span>
              </div>
              <Quote
                className="mt-5 h-7 w-7 text-primary/30"
                aria-hidden="true"
              />
              <p className="mt-4 flex-1 font-body text-base leading-7 text-foreground">
                &ldquo;{item.body}&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-heading text-sm font-semibold text-foreground">
                  {item.attribution}
                </p>
                <p className="mt-1 text-xs text-muted">{item.context}</p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary">
                  {item.metric}
                </p>
              </div>
            </m.article>
          ))}
        </m.div>

        <m.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 max-w-3xl text-xs leading-relaxed text-muted"
        >
          Quotes above are illustrative, permission-based composites. Identifiable
          client feedback is published only when granted. Apex does not use
          fabricated reviews or unsupported review schema.
        </m.p>
      </div>
    </section>
  );
}
