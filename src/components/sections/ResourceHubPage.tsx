import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";
import JsonLd from "@/components/ui/JsonLd";
import type { ResourceHubPage as ResourceHubPageContent } from "@/data/resourceHubs";
import {
  buildArticleSchema,
  buildBreadcrumbList,
  buildCollectionPageSchema,
  buildFaqPage,
  buildItemList,
} from "@/lib/schema";

export default function ResourceHubPage({
  page,
}: {
  page: ResourceHubPageContent;
}) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...(page.breadcrumbs ?? []),
    { label: page.title },
  ];

  const schema = [
    buildBreadcrumbList(
      breadcrumbs.map((item) =>
        "href" in item
          ? { name: item.label, path: item.href }
          : { name: item.label },
      ),
    ),
    buildCollectionPageSchema({
      name: page.title,
      description: page.metaDescription,
      path: page.path,
    }),
    buildArticleSchema({
      headline: page.title,
      description: page.metaDescription,
      path: page.path,
      articleSection: page.eyebrow,
    }),
    buildFaqPage(page.faqs),
    buildItemList({
      name: `${page.title} topics`,
      items: page.featuredTopics.map((topic) => ({
        name: topic.title,
        path: topic.href,
        description: topic.description,
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
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CtaLink href={page.primaryCta.href}>
                  {page.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </CtaLink>
                <CtaLink href={page.secondaryCta.href} variant="outline">
                  {page.secondaryCta.label}
                </CtaLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section-standard bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                What you&apos;ll find here
              </h2>
              <p className="mt-4 font-body text-base text-muted sm:text-lg">
                Each resource area is designed to be genuinely useful on its own
                while also helping you move toward the service, specialty, or
                consultation page that best matches your billing priorities.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {page.pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-border bg-background p-7 shadow-sm"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-7 text-muted sm:text-base">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-standard bg-background-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Start with these topics
              </h2>
              <p className="mt-4 font-body text-base text-muted sm:text-lg">
                These entry points connect educational content to the parts of
                the revenue cycle where practices most often need clarity.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {page.featuredTopics.map((topic) => (
                <Link
                  key={`${topic.href}-${topic.title}`}
                  href={topic.href}
                  className="group rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                >
                  <span className="inline-flex rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {topic.category}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                    {topic.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-6 text-muted">
                    {topic.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore topic
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-standard bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 md:grid-cols-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Conversion paths</p>
                <p className="mt-2 text-sm leading-6 text-muted">Every resource should help readers move naturally into a consultation, quote request, revenue assessment, or a more specific service page.</p>
              </div>
              <Link href="/free-billing-audit" className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/20 hover:text-primary">Free Revenue Assessment</Link>
              <Link href="/schedule-consultation" className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/20 hover:text-primary">Schedule Consultation</Link>
              <Link href="/request-a-quote" className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/20 hover:text-primary">Request a Quote</Link>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-7 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Related services
                </h2>
                <p className="mt-3 font-body text-sm leading-7 text-muted sm:text-base">
                  If the issue you&apos;re researching is already affecting
                  claims, denials, or cash flow, these service pages are the
                  best next stop.
                </p>
                <div className="mt-6 space-y-3">
                  {page.serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-white px-4 py-4 transition-all duration-300 hover:border-primary/20 hover:shadow-sm"
                    >
                      <span className="font-body text-sm font-medium text-foreground sm:text-base">
                        {link.label}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background p-7 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Related specialties
                </h2>
                <p className="mt-3 font-body text-sm leading-7 text-muted sm:text-base">
                  These specialty pages show how the same billing issue can look
                  different depending on visit mix, payer rules, and
                  documentation demands.
                </p>
                <div className="mt-6 space-y-3">
                  {page.specialtyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-white px-4 py-4 transition-all duration-300 hover:border-primary/20 hover:shadow-sm"
                    >
                      <span className="font-body text-sm font-medium text-foreground sm:text-base">
                        {link.label}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
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
              {page.faqs.map((faq) => (
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
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <CheckCircle className="h-4 w-4" />
              Next step
            </div>
            <h2 className="mt-5 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Want help applying this to your practice?
            </h2>
            <p className="mt-4 font-body text-base text-muted sm:text-lg">
              If your team is reading because denials, coding questions, or payer delays are already affecting operations, Apex can help you move from education into the right service, specialty, or assessment path.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <CtaLink href={page.primaryCta.href}>
                {page.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </CtaLink>
              <CtaLink href={page.secondaryCta.href} variant="outline">
                {page.secondaryCta.label}
              </CtaLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
