"use client";

import { useRef } from "react";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import {
  ArrowRight,
  LockKeyhole,
  ShieldCheck,
  Cpu,
  FileLock,
} from "lucide-react";
import {
  fadeInUpClean,
  sectionCardsContainerVariants,
  sectionCardVariants,
} from "@/lib/animations";

const capabilities = [
  {
    icon: LockKeyhole,
    title: "Encryption + secure infrastructure",
    description:
      "AES-256 for data at rest, TLS 1.3 in transit, and access restricted to authorized team members.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-aware workflows",
    description:
      "Staff training, role-based access, BAAs, and audit-ready documentation across every engagement.",
  },
  {
    icon: Cpu,
    title: "Cloud billing platforms",
    description:
      "Modern, multi-payer infrastructure with reporting aligned to actionable metrics rather than vanity dashboards.",
  },
  {
    icon: FileLock,
    title: "Secure data exchange",
    description:
      "Encrypted portals and APIs for practice data, claim files, and reporting — never raw email attachments.",
  },
];

export default function TechAndSecurity() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        >
          <div>
            <m.span
              variants={fadeInUpClean}
              className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              Technology &amp; Security
            </m.span>
            <m.h2
              variants={fadeInUpClean}
              className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Infrastructure built for{" "}
              <span className="gradient-text">healthcare-grade operations</span>
            </m.h2>
            <m.p
              variants={fadeInUpClean}
              className="mt-4 font-body text-base leading-relaxed text-muted sm:text-lg"
            >
              Apex pairs disciplined revenue cycle workflows with the technical
              foundations healthcare billing demands — encrypted data, role
              based access, redundant infrastructure, and integration care with
              the EHR systems you already run.
            </m.p>
            <m.div
              variants={fadeInUpClean}
              className="mt-6 flex flex-wrap gap-3"
            >
              <Link
                href="/our-technology"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                Explore our technology
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/security"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                Security and compliance
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </m.div>
          </div>

          <m.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={sectionCardsContainerVariants}
            className="grid gap-4 sm:grid-cols-2"
          >
            {capabilities.map((cap) => (
              <m.article
                key={cap.title}
                variants={sectionCardVariants}
                className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <cap.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-6 text-muted">
                  {cap.description}
                </p>
              </m.article>
            ))}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
