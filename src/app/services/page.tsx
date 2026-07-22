"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaLink from "@/components/ui/CtaLink";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";
import CSRServices from "@/components/sections/CSRServices";
import { services } from "@/data/services";
import { getIcon } from "@/lib/icons";
import {
  buildBreadcrumbList,
  buildCollectionPageSchema,
  buildItemList,
} from "@/lib/schema";
import {
  fadeInUpClean,
  staggerContainer,
  staggerContainerFast,
  scaleInLight,
} from "@/lib/animations";

export default function ServicesPage() {
  const gridRef = useRef<HTMLElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const schema = [
    buildBreadcrumbList([{ name: "Home", path: "/" }, { name: "Services" }]),
    buildCollectionPageSchema({
      name: "Medical Billing Services",
      description:
        "Core medical billing and revenue cycle services for practices that need clearer workflows and more accountable operational support.",
      path: "/services",
    }),
    buildItemList({
      name: "Apex core services",
      items: services.map((service) => ({
        name: service.title,
        path: `/services/${service.slug}`,
        description: service.description,
      })),
    }),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <JsonLd data={schema} />
        <section className="relative flex min-h-[55dvh] items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/billing-hero.webp"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary-dark/95 via-primary/85 to-primary/70" />
          </div>
          <div className="absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-white/4 blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Breadcrumbs
                items={[{ label: "Home", href: "/" }, { label: "Services" }]}
              />
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
                Core billing and revenue cycle services for practices that need{" "}
                <span className="text-accent">clearer workflows</span>
              </h1>
              <p className="font-body text-lg text-white/85 max-w-3xl mt-4 leading-relaxed">
                We&apos;re restructuring Apex around the core service functions
                physician groups actually evaluate: billing, coding
                coordination, AR recovery, denials, enrollment, posting, and
                front-end revenue cycle operations.
              </p>
            </m.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
        </section>

        <CSRServices />

        <section
          ref={gridRef}
          className="section-generous bg-background overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              variants={staggerContainerFast}
              className="text-center mb-6"
            >
              <m.span
                variants={fadeInUpClean}
                className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3"
              >
                Core Service Architecture
              </m.span>
              <m.h2
                variants={fadeInUpClean}
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
              >
                Explore the new{" "}
                <span className="gradient-text">Phase 1 service pages</span>
              </m.h2>
              <m.div
                variants={fadeInUpClean}
                className="accent-line mx-auto mt-5 origin-center"
              />
            </m.div>

            <m.div
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4"
            >
              {services.map((service, idx) => {
                const Icon = getIcon(service.icon);
                const isFeatured = idx === 0;
                return (
                  <m.div
                    key={service.slug}
                    variants={scaleInLight}
                    className={`break-inside-avoid mb-6 ${isFeatured ? "xl:col-span-2" : ""}`}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className={`group block rounded-2xl border transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary overflow-hidden ${
                        isFeatured
                          ? "border-primary/20 bg-linear-to-br from-primary/5 to-primary/10 p-7 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/40"
                          : "border-border bg-white p-6 hover:shadow-md hover:border-accent/20"
                      }`}
                    >
                      <div
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                          isFeatured
                            ? "bg-primary/15 group-hover:bg-primary/25"
                            : "bg-primary/5 group-hover:bg-primary/10"
                        }`}
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3
                        className={`font-heading font-semibold mb-2 group-hover:text-primary transition-colors duration-200 ${
                          isFeatured
                            ? "text-lg text-primary"
                            : "text-base text-foreground"
                        }`}
                      >
                        {service.shortTitle}
                      </h3>
                      <p className="font-body text-sm leading-relaxed text-muted line-clamp-3">
                        {service.description}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-1.5">
                        Learn More
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </m.div>
                );
              })}
            </m.div>
          </div>
        </section>

        <section className="section-standard bg-background-subtle overflow-hidden">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainerFast}
            >
              <m.span
                variants={fadeInUpClean}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-3"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Need help prioritizing?
              </m.span>
              <m.h2
                variants={fadeInUpClean}
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Not sure which service should come first?
              </m.h2>
              <m.p
                variants={fadeInUpClean}
                className="mt-4 font-body text-base text-muted sm:text-lg max-w-2xl mx-auto"
              >
                Start with a consultation or billing audit. We&apos;ll help you
                determine whether your biggest issue is front-end intake, coding
                coordination, denials, AR follow-up, posting, or payer
                enrollment.
              </m.p>
              <m.div
                variants={fadeInUpClean}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <CtaLink href="/schedule-consultation">
                  Schedule a consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </CtaLink>
                <CtaLink href="/free-billing-audit" variant="outline">
                  Request a billing audit
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
