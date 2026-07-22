"use client";

import { useRef } from "react";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Compass,
  FileText,
  ListChecks,
  Newspaper,
  PenTool,
} from "lucide-react";
import {
  fadeInUpClean,
  sectionCardsContainerVariants,
  sectionCardVariants,
} from "@/lib/animations";

const resources = [
  {
    title: "Medical Billing Blog",
    description:
      "Short-form articles on denial trends, payer friction, intake mistakes, and operational reporting.",
    href: "/blog",
    icon: PenTool,
    tag: "Editorial",
  },
  {
    title: "Medical Billing Guides",
    description:
      "Longer decision-support content for practices comparing workflows and outsourcing options.",
    href: "/guides",
    icon: BookOpen,
    tag: "Guides",
  },
  {
    title: "Case Studies",
    description:
      "Evidence pages that show what changed operationally and why it matters before claiming outcomes.",
    href: "/case-studies",
    icon: FileText,
    tag: "Proof",
  },
  {
    title: "CPT Coding Resources",
    description:
      "Charge capture, documentation alignment, and CPT-related claim friction.",
    href: "/coding-resources/cpt",
    icon: ListChecks,
    tag: "Coding",
  },
  {
    title: "ICD-10 Resources",
    description:
      "Diagnosis-coding context and documentation issues that become claim friction.",
    href: "/coding-resources/icd-10",
    icon: Compass,
    tag: "Coding",
  },
  {
    title: "CMS &amp; Industry News",
    description:
      "Medicare, Medicaid, and industry updates that affect billing operations.",
    href: "/resources/cms-updates",
    icon: Newspaper,
    tag: "Regulatory",
  },
];

export default function LatestResources() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-generous relative overflow-hidden border-t border-border bg-background-subtle"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionCardsContainerVariants}
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <m.span
              variants={fadeInUpClean}
              className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              Latest Resources
            </m.span>
            <m.h2
              variants={fadeInUpClean}
              className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Education that helps your team{" "}
              <span className="gradient-text">decide the next step</span>
            </m.h2>
            <m.p
              variants={fadeInUpClean}
              className="mt-4 font-body text-base leading-relaxed text-muted sm:text-lg"
            >
              Browse the latest articles, guides, and reference material from
              the Apex Knowledge Center. Use these pages to evaluate revenue
              cycle issues before requesting a conversation.
            </m.p>
          </div>
          <m.div variants={fadeInUpClean}>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-white px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              Visit the resources hub
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </m.div>
        </m.div>

        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionCardsContainerVariants}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {resources.map((resource) => (
            <m.div key={resource.title} variants={sectionCardVariants}>
              <Link
                href={resource.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <resource.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {resource.tag}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                  {resource.title.replace("&amp;", "&")}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm leading-6 text-muted">
                  {resource.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
