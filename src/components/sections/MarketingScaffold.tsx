import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";
import JsonLd from "@/components/ui/JsonLd";
import {
  buildArticleSchema,
  buildBreadcrumbList,
  buildFaqPage,
  buildPersonSchema,
  buildWebPageSchema,
} from "@/lib/schema";

export interface MarketingLink {
  label: string;
  href: string;
}

export interface MarketingSection {
  title: string;
  body: string[];
  bullets?: string[];
}

export interface MarketingFaq {
  question: string;
  answer: string;
}

export interface MarketingPageContent {
  path: string;
  title: string;
  eyebrow: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbs?: MarketingLink[];
  highlights?: string[];
  sections: MarketingSection[];
  relatedLinks?: MarketingLink[];
  faqs?: MarketingFaq[];
  primaryCta?: MarketingLink;
  secondaryCta?: MarketingLink;
}

export default function MarketingScaffold({
  page,
}: {
  page: MarketingPageContent;
}) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...(page.breadcrumbs ?? []),
    { label: page.title },
  ];
  const schema = [
    buildBreadcrumbList(
      breadcrumbItems.map((item) =>
        "href" in item
          ? { name: item.label, path: item.href }
          : { name: item.label },
      ),
    ),
    buildWebPageSchema({
      name: page.title,
      description: page.metaDescription,
      path: page.path,
      about: page.highlights,
    }),
    buildArticleSchema({
      headline: page.title,
      description: page.metaDescription,
      path: page.path,
      articleSection: page.eyebrow,
    }),
    ...(page.path === "/about"
      ? [
          buildPersonSchema({
            name: "Apex Precision Billing Leadership",
            jobTitle: "Medical Billing Operations Team",
            description: "Operational leadership for medical billing, coding, denial management, and revenue cycle support.",
            path: page.path,
          }),
        ]
      : []),
    ...(page.faqs ? [buildFaqPage(page.faqs)] : []),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <JsonLd data={schema} />
        <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-50/30 pt-20 pb-8 sm:pt-24 sm:pb-12">
          <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-primary/6 blur-[120px]" />
          <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-primary/4 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} tone="onLight" />
            <div className="mt-8 max-w-4xl">
              <span className="inline-flex rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {page.eyebrow}
              </span>
              <h1 className="mt-5 font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-muted sm:text-lg">
                {page.intro}
              </p>

              {page.highlights && page.highlights.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {page.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {highlight}
                    </span>
                  ))}
                </div>
              )}

              {(page.primaryCta || page.secondaryCta) && (
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  {page.primaryCta && (
                    <CtaLink href={page.primaryCta.href}>
                      {page.primaryCta.label}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </CtaLink>
                  )}
                  {page.secondaryCta && (
                    <CtaLink href={page.secondaryCta.href} variant="outline">
                      {page.secondaryCta.label}
                    </CtaLink>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-standard bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {page.sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-2xl border border-border bg-background p-7 shadow-sm"
                >
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-3">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="font-body text-sm leading-7 text-muted sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 font-body text-sm leading-6 text-foreground sm:text-base"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {page.relatedLinks && page.relatedLinks.length > 0 && (
          <section className="section-compact bg-background-subtle">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-6 max-w-2xl">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Explore related pages
                </h2>
                <p className="mt-3 font-body text-base text-muted">
                  Use these related pages to move from general education into
                  the specific service, specialty, or conversion path that
                  best matches your practice.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {page.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                        {link.label}
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {page.faqs && page.faqs.length > 0 && (
          <section className="section-standard bg-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  Frequently asked questions
                </h2>
              </div>
              <div className="mt-10 space-y-4">
                {page.faqs.map((faq) => (
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
        )}

        <section className="section-standard bg-background-subtle">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Ready to discuss your revenue cycle priorities?
            </h2>
            <p className="mt-4 font-body text-base text-muted sm:text-lg">
              Speak with Apex about denial patterns, staffing pressure, payer friction, or reporting gaps. We&apos;ll recommend the most practical next step without making unrealistic promises.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-muted">
              <span className="rounded-full border border-border bg-white px-4 py-2">Free Revenue Assessment</span>
              <span className="rounded-full border border-border bg-white px-4 py-2">Schedule Consultation</span>
              <span className="rounded-full border border-border bg-white px-4 py-2">Request a Quote</span>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <CtaLink href={page.primaryCta?.href ?? "/contact"}>
                {page.primaryCta?.label ?? "Contact Apex"}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </CtaLink>
              <CtaLink
                href={page.secondaryCta?.href ?? "/services"}
                variant="outline"
              >
                {page.secondaryCta?.label ?? "Review services"}
              </CtaLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
