import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";
import CtaLink from "@/components/ui/CtaLink";
import { getSeoPage, getSeoPageSlugs, requireSeoGroup } from "@/data/seoPages";
import { getStateBySlug, slugifyCounty } from "@/data/usLocations";
import { SITE } from "@/lib/constants";
import { buildBreadcrumbList, buildItemList } from "@/lib/schema";

const group = requireSeoGroup("locations");

export function generateStaticParams() {
  return getSeoPageSlugs("locations").map((slug) => ({ state: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: slug } = await params;
  const page = getSeoPage("locations", slug);
  if (!page) return { title: "Page Not Found" };

  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `${SITE.url}${page.path}` },
    openGraph: {
      title: { absolute: page.metaTitle },
      description: page.metaDescription,
      images: [{ url: "/og/default.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: { absolute: page.metaTitle },
      description: page.metaDescription,
      images: ["/og/default.jpg"],
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: slug } = await params;
  const page = getSeoPage("locations", slug);
  const usState = getStateBySlug(slug);

  if (!page || !usState) notFound();

  const schema = [
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/locations" },
      { name: usState.name },
    ]),
    buildItemList({
      name: `Counties in ${usState.name}`,
      items: usState.counties.map((county) => ({
        name: `${county.name}, ${usState.abbr}`,
        path: `/locations/${slug}/${slugifyCounty(county.name)}`,
        description: county.description.slice(0, 160),
      })),
    }),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <JsonLd data={schema} />

        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-50/30 pt-20 pb-12 sm:pt-24 sm:pb-16">
          <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-primary/6 blur-[120px]" />
          <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-primary/4 blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Locations", href: "/locations" },
                { label: usState.name },
              ]}
              tone="onLight"
            />
            <div className="mt-8 max-w-4xl">
              <span className="inline-flex rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {page.eyebrow}
              </span>
              <h1 className="mt-5 font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                Medical Billing in {usState.name}
              </h1>
              <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-muted sm:text-lg">
                {page.intro}
              </p>
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

        {/* Counties grid */}
        <section className="section-standard bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <MapPin className="h-4 w-4" />
                Counties in {usState.name}
              </div>
              <h2 className="mt-5 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Explore billing support by county
              </h2>
              <p className="mt-3 font-body text-base text-muted sm:text-lg">
                Each county page covers the local payer landscape, patient demographics,
                and revenue cycle considerations specific to {usState.name} healthcare
                practices.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {usState.counties.map((county) => {
                const countySlug = slugifyCounty(county.name);
                return (
                  <Link
                    key={countySlug}
                    href={`/locations/${slug}/${countySlug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                  >
                    <span className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      County
                    </span>
                    <h3 className="mt-4 font-heading text-xl font-semibold text-foreground group-hover:text-primary">
                      {county.name}
                    </h3>
                    <p className="mt-3 flex-1 font-body text-sm leading-6 text-muted">
                      {county.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Explore county
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* State-level content */}
        {page.sections.length > 0 && (
          <section className="section-standard bg-background-subtle">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 max-w-3xl">
                <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  Billing support for {usState.name} practices
                </h2>
              </div>
              <div className="space-y-8">
                {page.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {section.title}
                    </h3>
                    <div className="mt-4 space-y-4">
                      {section.body.map((para) => (
                        <p key={para} className="font-body text-base leading-7 text-muted">
                          {para}
                        </p>
                      ))}
                    </div>
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 font-body text-sm text-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section-standard bg-white">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Need billing support in {usState.name}?
            </h2>
            <p className="mt-4 font-body text-base text-muted sm:text-lg">
              Start with a billing audit or consultation to review your payer mix,
              denial trends, and revenue cycle workflows specific to your{' '}
              {usState.name} practice.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <CtaLink href="/free-billing-audit">
                Request a billing audit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </CtaLink>
              <CtaLink href="/schedule-consultation" variant="outline">
                Schedule a consultation
              </CtaLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
