"use client";

import { useRef } from "react";
import { media } from "@/lib/media";
import { m, useInView } from "framer-motion";
import Image from "next/image";
import CtaLink from "@/components/ui/CtaLink";
import { ArrowRight, FileText, Route, Shield, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  fadeInUpClean,
  staggerContainer,
  scaleInLight,
} from "@/lib/animations";

const principles = [
  {
    title: "Operational clarity",
    description:
      "Apex is being positioned around the workflow functions practices actually evaluate, not around generic promises that could describe any billing vendor.",
    icon: Route,
  },
  {
    title: "Trust-first communication",
    description:
      "The site is moving toward process-based credibility, more careful compliance language, and clearer explanations of what each service page is meant to cover.",
    icon: Shield,
  },
  {
    title: "Educational depth",
    description:
      "Specialty pages, resource hubs, glossary routes, and coding-reference sections are being built so physicians can learn from the site before they ever reach out.",
    icon: BookOpen,
  },
  {
    title: "Service architecture that scales",
    description:
      "Billing, coding, denials, AR recovery, enrollment, posting, and front-end workflows now have a stronger structure that can support future content growth.",
    icon: FileText,
  },
];

const sections = [
  {
    title: "What Apex is building",
    body: [
      "Apex Precision Billing is rebuilding its web presence around a clearer healthcare billing story: one that explains the operational work behind medical billing instead of relying on generic marketing language.",
      "That means organizing services around real revenue cycle functions, giving specialties their own landing pages, and creating conversion paths that match where a practice is in its buying process.",
    ],
  },
  {
    title: "Why the positioning matters",
    body: [
      "Physicians and practice leaders do not all arrive with the same question. Some know they have denial issues. Others are dealing with aging AR, enrollment delays, coding friction, or front-end intake problems that keep creating claim rework.",
      "A stronger website should help them identify that problem clearly and move into the right next conversation.",
    ],
  },
  {
    title: "How Apex wants to earn trust",
    body: [
      "The new direction emphasizes workflow clarity, specialty relevance, and more careful messaging around compliance and operational support.",
      "Where facts need verification, the site should be conservative. Where process can be explained clearly, the site should be specific.",
    ],
  },
  {
    title: "What comes next",
    body: [
      "The current implementation work establishes the foundation for richer specialty pages, resource content, legal structure, and stronger conversion experiences across the rest of the site.",
      "Over time, the goal is for the site to feel less like a generic vendor brochure and more like a serious healthcare billing brand.",
    ],
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section
          ref={heroRef}
          className="relative min-h-[60dvh] flex items-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src={media("/images/hero-bg.webp")}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary-dark/45 via-primary/40 to-accent/35" />
          </div>
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/8 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Breadcrumbs
                items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
              />
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl [text-shadow:0_2px_14px_rgba(8,48,111,0.5)]">
                About{" "}
                <span className="text-accent">Apex Precision Billing</span>
              </h1>
              <p className="font-body text-lg text-white/85 max-w-3xl mt-4 leading-relaxed">
                Apex is being rebuilt as a clearer, more disciplined healthcare
                billing brand—one that explains services, specialties,
                resources, and conversion paths in a way physicians and practice
                leaders can actually use.
              </p>
            </m.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
        </section>

        <section className="section-standard bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <m.span
                  variants={fadeInUpClean}
                  className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3"
                >
                  The direction
                </m.span>
                <m.h2
                  variants={fadeInUpClean}
                  className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                >
                  Building a better foundation for{" "}
                  <span className="gradient-text">billing conversations</span>
                </m.h2>
                <m.div
                  variants={fadeInUpClean}
                  className="accent-line mt-5 mb-6 origin-left"
                />
                <div className="space-y-5">
                  {sections.slice(0, 2).map((section) => (
                    <m.div key={section.title} variants={fadeInUpClean}>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {section.title}
                      </h3>
                      {section.body.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="mt-2 text-base leading-relaxed text-muted sm:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </m.div>
                  ))}
                </div>
              </m.div>

              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-black/5">
                  <Image
                    src={media("/images/who-we-are.webp")}
                    alt="Apex Precision Billing website and operations direction"
                    width={720}
                    height={480}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {principles.map((principle) => (
                    <m.div
                      key={principle.title}
                      variants={scaleInLight}
                      className="rounded-2xl border border-border bg-background p-5 shadow-sm"
                    >
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5">
                        <principle.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-foreground">
                        {principle.title}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-6 text-muted">
                        {principle.description}
                      </p>
                    </m.div>
                  ))}
                </div>
              </m.div>
            </div>
          </div>
        </section>

        <section className="section-standard bg-background-subtle overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="grid gap-6 lg:grid-cols-2"
            >
              {sections.slice(2).map((section) => (
                <m.article
                  key={section.title}
                  variants={fadeInUpClean}
                  className="rounded-2xl border border-border bg-white p-8 shadow-sm"
                >
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="font-body text-base leading-7 text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </m.article>
              ))}
            </m.div>
          </div>
        </section>

        <section className="section-standard bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="mx-auto max-w-2xl text-center"
            >
              <m.h2
                variants={fadeInUpClean}
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Ready to see how the new Apex structure fits your practice?
              </m.h2>
              <m.p
                variants={fadeInUpClean}
                className="mt-4 font-body text-base text-muted sm:text-lg"
              >
                Start with a consultation, review the service architecture, or
                explore the specialty pages that are now part of the site
                foundation.
              </m.p>
              <m.div
                variants={fadeInUpClean}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <CtaLink href="/schedule-consultation">
                  Schedule a consultation
                  <ArrowRight className="h-4 w-4" />
                </CtaLink>
                <CtaLink href="/services" variant="outline">
                  View services
                </CtaLink>
              </m.div>
            </m.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
