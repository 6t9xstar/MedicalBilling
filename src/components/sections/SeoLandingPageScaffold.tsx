import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";
import JsonLd from "@/components/ui/JsonLd";
import ToolCalculator from "@/components/ui/ToolCalculator";
import type { SeoPage, SeoPageGroup } from "@/data/seoPages";
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildItemList,
  buildServiceSchema,
  buildWebPageSchema,
} from "@/lib/schema";

export default function SeoLandingPageScaffold({
  page,
  group,
}: {
  page: SeoPage;
  group: SeoPageGroup;
}) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: group.title, href: group.path },
    { label: page.title },
  ];

  const schema = [
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: group.title, path: group.path },
      { name: page.title },
    ]),
    page.schemaType === "Service"
      ? buildServiceSchema({
          name: page.title,
          description: page.metaDescription,
          path: page.path,
          serviceType: page.serviceType ?? page.title,
        })
      : buildWebPageSchema({
          name: page.title,
          description: page.metaDescription,
          path: page.path,
          about: page.about,
        }),
    buildFaqPage(page.faqs),
    buildItemList({
      name: `Related pages for ${page.title}`,
      items: page.relatedLinks.map((link) => ({
        name: link.label,
        path: link.href,
      })),
    }),
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
            <Breadcrumbs items={breadcrumbs} tone="onLight" />
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

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CtaLink href="/schedule-consultation">
                  Schedule a consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </CtaLink>
                <CtaLink href="/free-billing-audit" variant="outline">
                  Request a billing audit
                </CtaLink>
              </div>
            </div>
          </div>
        </section>

        {page.groupKey === "tools" && <ToolCalculator slug={page.slug} />}

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

        <section className="section-compact bg-background-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 max-w-2xl">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Related Apex pages
              </h2>
              <p className="mt-3 font-body text-base text-muted">
                Continue into the service, resource, or conversion page that best
                matches what you are evaluating.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-heading text-base font-semibold text-foreground group-hover:text-primary">
                      {link.label}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

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

        <section className="section-standard bg-background-subtle">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Ready to apply this to your practice?
            </h2>
            <p className="mt-4 font-body text-base text-muted sm:text-lg">
              Tell Apex where your billing workflow is slowing down, and we will
              help you identify the most practical next step.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <CtaLink href="/schedule-consultation">
                Schedule a consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </CtaLink>
              <CtaLink href={group.path} variant="outline">
                Back to {group.collectionLabel.toLowerCase()}
              </CtaLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
