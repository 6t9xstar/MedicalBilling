"use client";

import { useRef, useState } from "react";
import { m, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

export const homepageFaqs = [
  {
    q: "What makes Apex Precision Billing different from other billing websites?",
    a: "Apex is being rebuilt around the actual workflow functions practices evaluate, such as medical billing, denials, AR recovery, coding coordination, enrollment, and front-end revenue cycle work. The goal is to explain support clearly instead of relying on broad marketing promises.",
  },
  {
    q: "Do you support specialty-specific billing pages?",
    a: "Yes. The current architecture includes dedicated specialty landing pages so physicians can review billing support in a more relevant context rather than being sent to one generic services page.",
  },
  {
    q: "Can I start with a conversation instead of choosing a service page first?",
    a: "Yes. The site now includes dedicated routes for a free billing audit, scheduling a consultation, requesting a quote, and contacting sales so you can start with the path that fits your current need.",
  },
  {
    q: "How is Apex handling trust and compliance messaging?",
    a: "The site is moving toward a more careful, process-based trust model. That means service pages, legal pages, and HIPAA-related content are being structured to explain workflow handling more clearly and to reduce reliance on unsupported performance claims.",
  },
  {
    q: "Are resources being added for physicians and practice teams?",
    a: "Yes. The new architecture includes a resources hub, blog, guides, case studies, coding resource routes, and a glossary so educational content can grow alongside the service pages.",
  },
  {
    q: "Where should I start if I already know something in billing is off?",
    a: "If you already know there is friction in the revenue cycle, the best starting points are usually the billing audit page, the consultation page, or the core service page closest to your issue, such as denials, AR recovery, eligibility verification, or payment posting.",
  },
];

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative py-8 md:py-12 bg-background overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-6"
        >
          <m.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-3"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </m.span>
          <SectionHeading variants={fadeInUp}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </SectionHeading>
          <m.div
            variants={fadeInUp}
            className="accent-line mx-auto mt-5 origin-center"
          />
        </m.div>

        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-3xl space-y-3"
        >
          {homepageFaqs.map((faq, i) => (
            <m.div
              key={faq.q}
              variants={fadeInUp}
              className={cn(
                "rounded-2xl border bg-white overflow-hidden transition-all duration-300",
                openIndex === i
                  ? "border-primary/30 shadow-lg shadow-primary/4"
                  : "border-border hover:shadow-md hover:border-accent/20",
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="flex w-full items-center justify-between rounded-2xl px-6 py-5 text-left transition-colors duration-200 hover:bg-muted/4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="font-heading text-sm font-semibold text-foreground pr-4">
                  {faq.q}
                </span>
                <m.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted" />
                </m.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <m.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 font-body text-sm leading-relaxed text-muted">
                      {faq.a}
                    </p>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
