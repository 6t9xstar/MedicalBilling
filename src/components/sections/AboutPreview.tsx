"use client";

import { useRef } from "react";
import Image from "next/image";
import CtaLink from "@/components/ui/CtaLink";
import { m, useInView } from "framer-motion";
import { Check, ArrowRight, Search, Route, MessageSquare } from "lucide-react";
import { fadeInUpClean, fadeInLeft } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Start with the real bottleneck",
    description:
      "Apex is building every service page around an operational function so practices can start with the workflow issue that is actually slowing revenue.",
    icon: Search,
  },
  {
    number: "02",
    title: "Map the workflow clearly",
    description:
      "Instead of generic claims, the site is being structured to explain where ownership lives, what work is included, and how one part of the revenue cycle affects another.",
    icon: Route,
  },
  {
    number: "03",
    title: "Move into the right conversation",
    description:
      "Dedicated audit, consultation, quote, and sales pages give physicians and administrators cleaner next steps than a single generic contact form.",
    icon: MessageSquare,
  },
];

const serviceBadges: Array<{ label: string; className: string }> = [
  {
    label: "Medical Billing",
    className: "left-0 top-[56%] -translate-y-1/2 sm:left-3",
  },
  {
    label: "Medical RCM",
    className: "right-0 top-[22%] sm:right-3",
  },
  {
    label: "Medical Coding",
    className: "right-2 bottom-[10%] sm:right-6",
  },
];

export default function AboutPreview() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-standard bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
          <m.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
          >
            <m.span
              variants={fadeInUpClean}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3"
            >
              About Apex
            </m.span>
            <m.h2
              variants={fadeInUpClean}
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              A stronger website starts with{" "}
              <span className="gradient-text">clearer service language</span>
            </m.h2>
            <m.div
              variants={fadeInUpClean}
              className="accent-line mt-5 mb-6 origin-left"
            />
            <m.p
              variants={fadeInUpClean}
              className="text-base leading-relaxed text-muted sm:text-lg"
            >
              Apex Precision Billing is moving away from broad promises and
              toward a more practical service architecture that helps physician
              groups evaluate billing support by workflow need, specialty
              context, and next-step fit.
            </m.p>
            <m.ul
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.2 },
                },
              }}
              className="mt-8 space-y-3"
            >
              {[
                "Core service pages organized around real revenue cycle functions",
                "Specialty landing pages for physicians who want relevant workflow context",
                "Resource hubs designed to support educational content over time",
                "Dedicated conversion pages that reduce friction for serious prospects",
              ].map((item) => (
                <m.li
                  key={item}
                  variants={fadeInUpClean}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <Check
                      className="h-3 w-3 text-emerald-600"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="font-body text-sm leading-relaxed text-muted sm:text-base">
                    {item}
                  </span>
                </m.li>
              ))}
            </m.ul>
            <m.div variants={fadeInUpClean} className="mt-8">
              <CtaLink href="/why-apex">
                See Why Apex
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </CtaLink>
            </m.div>
          </m.div>

          <m.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.15 },
              },
            }}
          >
            <m.div variants={fadeInLeft} className="relative mb-6">
              <div className="relative mx-auto aspect-6/5 w-full max-w-2xl overflow-visible">
                <div
                  className="absolute inset-x-[16%] bottom-[4%] top-[20%] rounded-full bg-primary"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-[10%] bottom-0 top-[4%]">
                  <Image
                    src="/images/doctoranalysis.png"
                    alt="Smiling healthcare professional representing Apex Precision Billing services"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain drop-shadow-[0_24px_50px_rgba(15,23,42,0.16)]"
                    loading="lazy"
                  />
                </div>

                {serviceBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className={`absolute z-10 flex min-w-42.5 items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.18)] ring-1 ring-black/5 ${badge.className}`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-heading text-sm font-semibold text-foreground sm:text-base">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </m.div>

            <div className="relative">
              <div
                className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-accent/20 to-transparent"
                aria-hidden="true"
              />
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <m.div
                    key={step.number}
                    variants={fadeInUpClean}
                    className="relative flex gap-5 pl-14"
                  >
                    <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 z-10">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1 font-body text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
