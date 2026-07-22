import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";
import JsonLd from "@/components/ui/JsonLd";
import type { Service } from "@/data/services";
import type { SpecialtyPage } from "@/data/specialtyPages";
import { getIcon } from "@/lib/icons";
import {
  buildArticleSchema,
  buildBreadcrumbList,
  buildFaqPage,
  buildItemList,
  buildWebPageSchema,
} from "@/lib/schema";

export default function SpecialtyDetailScaffold({
  specialty,
  relatedServices,
}: {
  specialty: SpecialtyPage;
  relatedServices: Service[];
}) {
  const schema = [
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Specialties", path: "/specialties" },
      { name: specialty.name },
    ]),
    buildWebPageSchema({
      name: specialty.title,
      description: specialty.metaDescription,
      path: `/specialties/${specialty.slug}`,
      about: [specialty.name, ...specialty.relatedServiceTitles],
    }),
    buildArticleSchema({
      headline: specialty.title,
      description: specialty.metaDescription,
      path: `/specialties/${specialty.slug}`,
      articleSection: "Specialty Billing",
    }),
    buildFaqPage(specialty.faqs),
    buildItemList({
      name: `Related services for ${specialty.name}`,
      items: relatedServices.map((service) => ({
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
        <section className="relative overflow-hidden bg-linear-to-r from-primary-dark/95 via-primary/85 to-primary/70 pt-20 pb-10 sm:pt-24 sm:pb-12">
          <div className="absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-white/5 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Specialties", href: "/specialties" },
                { label: specialty.name },
              ]}
            />
            <div className="mt-8 max-w-4xl">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Specialty Billing
              </span>
              <h1 className="mt-5 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                {specialty.title}
              </h1>
              <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-white/85 sm:text-lg">
                {specialty.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  <CheckCircle className="h-4 w-4" />
                  {specialty.name}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  <CheckCircle className="h-4 w-4" />
                  Specialty-aware workflows
                </span>
                {specialty.relatedServiceTitles.slice(0, 1).map((title) => (
                  <span
                    key={title}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Related to {title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-standard bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-2xl border border-border bg-background p-8 shadow-sm">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Why {specialty.name.toLowerCase()} billing needs a more
                  specific workflow
                </h2>
                <p className="mt-5 font-body text-base leading-7 text-muted">
                  Apex is building specialty pages because practices do not all
                  experience billing friction the same way. {specialty.name}{" "}
                  groups often need a different conversation than a generic
                  services page can provide.
                </p>
                <p className="mt-4 font-body text-base leading-7 text-muted">
                  This page is designed to connect your specialty&apos;s billing
                  realities to the core service pages that support intake,
                  claims, denials, coding coordination, AR recovery, enrollment,
                  and payment visibility.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  When support usually matters most
                </h2>
                <ul className="mt-6 space-y-3">
                  {specialty.triggerPoints.map((trigger) => (
                    <li
                      key={trigger}
                      className="flex items-start gap-3 font-body text-sm leading-6 text-foreground sm:text-base"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{trigger}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section-standard bg-background-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Common {specialty.name.toLowerCase()} billing pressure points
                </h2>
                <ul className="mt-6 space-y-3">
                  {specialty.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex items-start gap-3 font-body text-sm leading-6 text-foreground sm:text-base"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Where Apex can support the workflow
                </h2>
                <ul className="mt-6 space-y-3">
                  {specialty.supportAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-3 font-body text-sm leading-6 text-foreground sm:text-base"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section-standard bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 md:grid-cols-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Next steps for {specialty.name.toLowerCase()} groups</p>
                <p className="mt-2 text-sm leading-6 text-muted">Move from specialty education into a service review, FAQ, case-study path, or consultation request based on where your workflow is under pressure.</p>
              </div>
              <Link href="/faq" className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/20 hover:text-primary">Browse FAQs</Link>
              <Link href="/case-studies" className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/20 hover:text-primary">Review Case Studies</Link>
              <Link href="/contact" className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/20 hover:text-primary">Contact Apex</Link>
            </div>
            <div className="mb-6 max-w-3xl">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Related Apex services for {specialty.name.toLowerCase()}{" "}
                practices
              </h2>
              <p className="mt-3 font-body text-base text-muted">
                These service pages are often the best next click for practices
                in this specialty because they map more directly to the workflow
                pressure points described above.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedServices.map((service) => {
                const Icon = getIcon(service.icon);
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 transition-all duration-300 group-hover:bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                      {service.shortTitle}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-6 text-muted">
                      {service.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Review service page
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-standard bg-background-subtle">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              {specialty.faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm"
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

        <section className="section-standard bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to discuss {specialty.name.toLowerCase()} billing support?
            </h2>
            <p className="mt-4 font-body text-base text-muted sm:text-lg">
              Use this specialty page as a starting point, then choose the next step that fits your organization: a free revenue assessment, a consultation, a quote request, or a deeper review of the related services above.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-muted">
              <span className="rounded-full border border-border bg-background px-4 py-2">Free Revenue Assessment</span>
              <span className="rounded-full border border-border bg-background px-4 py-2">Schedule Consultation</span>
              <span className="rounded-full border border-border bg-background px-4 py-2">Request a Quote</span>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <CtaLink href="/schedule-consultation">
                Schedule a consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </CtaLink>
              <CtaLink href="/free-billing-audit" variant="outline">
                Free revenue assessment
              </CtaLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
