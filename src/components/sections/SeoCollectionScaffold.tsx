import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";
import JsonLd from "@/components/ui/JsonLd";
import type { SeoPageGroup } from "@/data/seoPages";
import {
  buildBreadcrumbList,
  buildCollectionPageSchema,
  buildItemList,
} from "@/lib/schema";

export default function SeoCollectionScaffold({
  group,
}: {
  group: SeoPageGroup;
}) {
  const schema = [
    buildBreadcrumbList([{ name: "Home", path: "/" }, { name: group.title }]),
    buildCollectionPageSchema({
      name: group.title,
      description: group.metaDescription,
      path: group.path,
    }),
    buildItemList({
      name: group.collectionLabel,
      items: group.pages.map((page) => ({
        name: page.title,
        path: page.path,
        description: page.metaDescription,
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
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: group.title }]}
              tone="onLight"
            />
            <div className="mt-8 max-w-4xl">
              <span className="inline-flex rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {group.eyebrow}
              </span>
              <h1 className="mt-5 font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                {group.title}
              </h1>
              <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-muted sm:text-lg">
                {group.intro}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CtaLink href={group.primaryCta.href}>
                  {group.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </CtaLink>
                <CtaLink href={group.secondaryCta.href} variant="outline">
                  {group.secondaryCta.label}
                </CtaLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section-standard bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <CheckCircle className="h-4 w-4" />
                {group.collectionLabel}
              </div>
              <h2 className="mt-5 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Browse {group.collectionLabel.toLowerCase()}
              </h2>
              <p className="mt-3 font-body text-base text-muted sm:text-lg">
                Each page is structured with a unique H1, metadata, canonical URL,
                breadcrumbs, internal links, and schema-ready FAQ content.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {group.pages.map((page) => (
                <Link
                  key={page.path}
                  href={page.path}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                >
                  <span className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {page.eyebrow}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-foreground group-hover:text-primary">
                    {page.title}
                  </h3>
                  <p className="mt-3 flex-1 font-body text-sm leading-6 text-muted">
                    {page.metaDescription}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore page
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-standard bg-background-subtle">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Need help choosing the right next page?
            </h2>
            <p className="mt-4 font-body text-base text-muted sm:text-lg">
              Start with a billing audit or consultation if you are not sure
              whether the priority is claims, denials, AR, patient billing,
              software workflow, or specialty-specific support.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <CtaLink href="/free-billing-audit">
                Request a billing audit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </CtaLink>
              <CtaLink href="/services" variant="outline">
                Explore services
              </CtaLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
