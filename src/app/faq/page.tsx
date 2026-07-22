"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HelpCircle, MessageCircle, BookOpen, Stethoscope, FileText } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";
import FAQ, { homepageFaqs } from "@/components/sections/FAQ";
import { fadeInUpClean, staggerContainer } from "@/lib/animations";

const faqRelatedLinks = [
  {
    icon: BookOpen,
    label: "Medical Billing Services",
    href: "/services/medical-billing",
    desc: "Explore our core billing service page.",
  },
  {
    icon: Stethoscope,
    label: "Browse Specialties",
    href: "/specialties",
    desc: "Review billing support by practice type.",
  },
  {
    icon: FileText,
    label: "Knowledge Center",
    href: "/knowledge-center",
    desc: "Access guides, glossaries, and resources.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="section-compact bg-white border-b border-border overflow-hidden">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-8 md:py-10">
            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="flex justify-center">
                <Breadcrumbs
                  items={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
                  tone="onLight"
                />
              </div>
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5">
                <HelpCircle className="h-7 w-7 text-primary" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Frequently Asked{" "}
                <span className="gradient-text">Questions</span>
              </h1>
              <p className="font-body text-lg text-muted max-w-2xl mx-auto mt-4">
                Answers about the new Apex service structure, specialty pages,
                resources, and conversion paths.
              </p>
            </m.div>
          </div>
        </section>

        <FAQ />

        <section className="section-standard bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Explore related pages
              </h2>
              <p className="mt-3 font-body text-base text-muted">
                These pages can help you find more specific answers about billing workflows and support options.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {faqRelatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                    {link.label}
                  </h3>
                  <p className="mt-2 font-body text-sm text-muted">{link.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-standard bg-background-subtle overflow-hidden">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <m.span
                variants={fadeInUpClean}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-3"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Still have questions?
              </m.span>
              <m.h2
                variants={fadeInUpClean}
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Let&apos;s talk through what your practice needs
              </m.h2>
              <m.p
                variants={fadeInUpClean}
                className="mt-4 font-body text-base text-muted sm:text-lg"
              >
                If you already know where billing is slowing down, we can help
                you decide whether to start with an audit, a consultation, or a
                more specific service conversation.
              </m.p>
              <m.div variants={fadeInUpClean} className="mt-8">
                <CtaLink href="/schedule-consultation">
                  Schedule a consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
