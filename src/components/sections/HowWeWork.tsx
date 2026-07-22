"use client";

import { useRef } from "react";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import { ArrowRight, ClipboardList, GitBranch, Workflow } from "lucide-react";
import CtaLink from "@/components/ui/CtaLink";
import {
  fadeInUpClean,
  sectionCardsContainerVariants,
  sectionCardVariants,
} from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Practice assessment",
    description:
      "We start with claim, denial, AR, and reporting baselines so we know where the revenue cycle needs the most attention.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Structured onboarding",
    description:
      "Data migration, payer enrollment, EHR coordination, and workflow setup happen against a documented timeline so there are no surprise handoffs.",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Steady-state operations",
    description:
      "Daily claim handling, denial review, payment posting, and reporting continue against defined ownership so practice leaders always know what is moving and what is queued.",
    icon: Workflow,
  },
];

export default function HowWeWork() {
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
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <m.span
            variants={fadeInUpClean}
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            How We Work
          </m.span>
          <m.h2
            variants={fadeInUpClean}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            A defined process{" "}
            <span className="gradient-text">practices can audit</span>
          </m.h2>
          <m.p
            variants={fadeInUpClean}
            className="mt-4 font-body text-base leading-relaxed text-muted sm:text-lg"
          >
            Apex runs onboarding and steady-state billing against a documented
            process so you always know where work lives, who owns it, and what
            the next step looks like.
          </m.p>
        </m.div>

        <m.ol
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionCardsContainerVariants}
          className="grid gap-6 lg:grid-cols-3"
        >
          {steps.map((step) => (
            <m.li
              key={step.number}
              variants={sectionCardVariants}
              className="relative flex flex-col rounded-2xl border border-border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <span className="absolute -top-3 left-7 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
                {step.number}
              </span>
              <step.icon className="mt-3 h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-6 text-muted">
                {step.description}
              </p>
            </m.li>
          ))}
        </m.ol>

        <m.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <CtaLink href="/our-process">
            Read the full process
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </CtaLink>
          <Link
            href="/schedule-consultation"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            Schedule a consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </m.div>
      </div>
    </section>
  );
}
