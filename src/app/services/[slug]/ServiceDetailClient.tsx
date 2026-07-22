"use client";

import { createElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaLink from "@/components/ui/CtaLink";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";
import type { Service } from "@/data/services";
import { getRelatedServices } from "@/data/services";
import { getRelatedSpecialties } from "@/data/specialtyPages";
import { fadeInUpClean, staggerContainer } from "@/lib/animations";
import { getIcon } from "@/lib/icons";
import {
  buildArticleSchema,
  buildBreadcrumbList,
  buildFaqPage,
  buildServiceSchema,
  buildItemList,
} from "@/lib/schema";

export default function ServiceDetailClient({ service }: { service: Service }) {
  const relatedServices = getRelatedServices(service, 4);
  const relatedSpecialties = getRelatedSpecialties(service.slug, 6);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.shortTitle },
  ];
  const schema = [
    buildBreadcrumbList(breadcrumbs),
    buildServiceSchema({
      name: service.title,
      description: service.description,
      path: `/services/${service.slug}`,
      serviceType: service.shortTitle,
    }),
    buildArticleSchema({
      headline: service.title,
      description: service.description,
      path: `/services/${service.slug}`,
      articleSection: "Service",
    }),
    buildFaqPage(service.faqs),
    buildItemList({
      name: `Related services for ${service.shortTitle}`,
      items: relatedServices.map((relatedService) => ({
        name: relatedService.title,
        path: `/services/${relatedService.slug}`,
        description: relatedService.description,
      })),
    }),
  ];

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <JsonLd data={schema} />

        <section className="relative flex min-h-[55dvh] items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={service.image || "/images/billing-hero.webp"}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary-dark/95 via-primary/85 to-primary/70" />
          </div>
          <div className="absolute -bottom-20 right-1/3 h-64 w-64 rounded-full bg-white/4 blur-[80px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: service.shortTitle },
                ]}
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  {createElement(getIcon(service.icon), {
                    className: "h-6 w-6 text-white",
                  })}
                </div>
                <span className="font-body text-sm font-medium text-white/70 uppercase tracking-wider">
                  Core Service
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
                {service.title}
              </h1>
              <p className="mt-4 font-body text-lg text-white/85 max-w-3xl leading-relaxed">
                {service.heroIntro}
              </p>
            </m.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
        </section>

        <section className="section-standard bg-background overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                  <m.h2
                    variants={fadeInUpClean}
                    className="font-heading text-3xl font-bold text-foreground"
                  >
                    Overview
                  </m.h2>
                  <div className="mt-5 space-y-4">
                    {service.overview.map((paragraph) => (
                      <m.p
                        key={paragraph}
                        variants={fadeInUpClean}
                        className="font-body text-base leading-7 text-muted"
                      >
                        {paragraph}
                      </m.p>
                    ))}
                  </div>
                </article>

                <div className="mt-6 grid gap-6 xl:grid-cols-2">
                  <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                    <m.h2
                      variants={fadeInUpClean}
                      className="font-heading text-2xl font-bold text-foreground"
                    >
                      What&apos;s included
                    </m.h2>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <m.li
                          key={feature}
                          variants={fadeInUpClean}
                          className="flex items-start gap-3 font-body text-sm leading-6 text-foreground sm:text-base"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </m.li>
                      ))}
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                    <m.h2
                      variants={fadeInUpClean}
                      className="font-heading text-2xl font-bold text-foreground"
                    >
                      Common workflow pressure points
                    </m.h2>
                    <ul className="mt-6 space-y-3">
                      {service.painPoints.map((point) => (
                        <m.li
                          key={point}
                          variants={fadeInUpClean}
                          className="flex items-start gap-3 font-body text-sm leading-6 text-foreground sm:text-base"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{point}</span>
                        </m.li>
                      ))}
                    </ul>
                  </article>
                </div>

                <article className="mt-8 rounded-2xl border border-border bg-white p-8 shadow-sm">
                  <m.h2
                    variants={fadeInUpClean}
                    className="font-heading text-2xl font-bold text-foreground"
                  >
                    How Apex frames the work
                  </m.h2>
                  <ol className="mt-6 space-y-4">
                    {service.process.map((step, index) => (
                      <m.li
                        key={step}
                        variants={fadeInUpClean}
                        className="flex gap-4 rounded-xl bg-background p-4"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                          {index + 1}
                        </div>
                        <p className="font-body text-sm leading-6 text-foreground sm:text-base">
                          {step}
                        </p>
                      </m.li>
                    ))}
                  </ol>
                </article>
              </m.div>

              <m.aside
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="space-y-6 lg:sticky lg:top-32 lg:self-start"
              >
                <article className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                  <div className="relative overflow-hidden rounded-2xl mb-5">
                    <Image
                      src={service.image || "/images/claim.webp"}
                      alt={service.title}
                      width={420}
                      height={280}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-7 text-muted">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href="/schedule-consultation"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-accent hover:shadow-xl active:scale-[0.97]"
                    >
                      <Phone className="h-4 w-4" />
                      Schedule a consultation
                    </Link>
                    <Link
                      href="/request-a-quote"
                      className="inline-flex w-full items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/20 hover:text-primary"
                    >
                      Request a quote
                    </Link>
                  </div>
                </article>

                <article className="rounded-2xl border border-primary/10 bg-primary/5 p-7">
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Why this page matters
                  </h3>
                  <p className="mt-3 font-body text-sm leading-7 text-muted">
                    This page is designed to help physicians, office managers, and administrators evaluate this service in practical terms: where it affects claim flow, how it supports staff efficiency, and when it is the right next step.
                  </p>
                </article>
              </m.aside>
            </div>
          </div>
        </section>

        <section className="section-standard bg-white overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              {service.faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-border bg-background p-6 shadow-sm"
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-7 text-muted sm:text-base">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-standard bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 md:grid-cols-5">
              <div className="md:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Topic cluster</p>
                <p className="mt-2 text-sm leading-6 text-muted">Each service page should connect readers to related specialties, solutions, industries, resources, case studies, and high-intent conversion pages.</p>
              </div>
              <Link href="/resources" className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/20 hover:text-primary">Resources</Link>
              <Link href="/case-studies" className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/20 hover:text-primary">Case Studies</Link>
              <Link href="/contact" className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/20 hover:text-primary">Contact</Link>
            </div>
            <div className="mb-6">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Related services
              </h2>
              <div className="accent-line mt-3" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="group block h-full"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:shadow-lg hover:border-accent/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 transition-all duration-300 group-hover:bg-primary/10 mb-3">
                      {createElement(getIcon(relatedService.icon), {
                        className:
                          "h-4 w-4 text-primary transition-colors duration-300 group-hover:text-accent",
                      })}
                    </div>
                    <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {relatedService.shortTitle}
                    </h3>
                    <p className="font-body text-sm text-muted mt-2 leading-6 flex-1">
                      {relatedService.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Learn More{" "}
                      <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {relatedSpecialties.length > 0 && (
          <section className="section-standard bg-background-subtle overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-6">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Related specialties
                </h2>
                <p className="mt-2 font-body text-sm text-muted">
                  These specialty pages show how {service.shortTitle.toLowerCase()} applies to specific practice types.
                </p>
                <div className="accent-line mt-3" />
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {relatedSpecialties.map((specialty) => (
                  <Link
                    key={specialty.slug}
                    href={`/specialties/${specialty.slug}`}
                    className="group rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:shadow-lg hover:border-accent/20"
                  >
                    <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {specialty.name} Billing
                    </h3>
                    <p className="mt-2 font-body text-sm text-muted leading-6 line-clamp-2">
                      {specialty.intro}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      View specialty page
                      <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-standard bg-white overflow-hidden">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <m.h2
                variants={fadeInUpClean}
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Ready to talk through your workflow priorities?
              </m.h2>
              <m.p
                variants={fadeInUpClean}
                className="mt-4 font-body text-base text-muted sm:text-lg max-w-2xl mx-auto"
              >
                Use this service page as a starting point, then schedule a
                conversation about your specialty mix, billing friction, and
                revenue cycle goals.
              </m.p>
              <m.div
                variants={fadeInUpClean}
                className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted"
              >
                <span className="rounded-full border border-border bg-background px-4 py-2">Free Revenue Assessment</span>
                <span className="rounded-full border border-border bg-background px-4 py-2">Schedule Consultation</span>
                <span className="rounded-full border border-border bg-background px-4 py-2">Request a Quote</span>
              </m.div>
              <m.div
                variants={fadeInUpClean}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <CtaLink href="/schedule-consultation">
                  <Phone className="h-4 w-4" />
                  Schedule a consultation
                </CtaLink>
                <CtaLink href="/free-billing-audit" variant="outline">
                  Free revenue assessment
                </CtaLink>
              </m.div>
            </m.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
