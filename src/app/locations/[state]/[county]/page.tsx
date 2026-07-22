import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";
import JsonLd from "@/components/ui/JsonLd";
import {
  getStateBySlug,
  slugifyCounty,
} from "@/data/usLocations";

export async function generateStaticParams() {
  const { usStates } = await import("@/data/usLocations");
  return usStates.flatMap((state) =>
    state.counties.map((county) => ({
      state: state.slug,
      county: slugifyCounty(county.name),
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; county: string }>;
}): Promise<Metadata> {
  const { state: stateSlug, county: countySlug } = await params;
  const usState = getStateBySlug(stateSlug);
  if (!usState) return { title: "Page Not Found" };

  const county = usState.counties.find(
    (c) => slugifyCounty(c.name) === countySlug,
  );
  if (!county) return { title: "Page Not Found" };

  const title = `Medical Billing in ${county.name}, ${usState.name}`;
  const description = `${county.description.slice(0, 155)}. Apex Precision Billing supports healthcare practices in ${county.name}, ${usState.name} with revenue cycle workflows, claim management, and denial follow-up.`;

  return {
    title: { absolute: `${title} | Apex` },
    description,
    alternates: {
      canonical: `https://www.apexprecisionbilling.com/locations/${stateSlug}/${countySlug}`,
    },
    openGraph: {
      title: { absolute: `${title} | Apex` },
      description,
      images: [{ url: "/og/default.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: { absolute: `${title} | Apex` },
      description,
      images: ["/og/default.jpg"],
    },
  };
}

export default async function CountyPage({
  params,
}: {
  params: Promise<{ state: string; county: string }>;
}) {
  const { state: stateSlug, county: countySlug } = await params;
  const usState = getStateBySlug(stateSlug);
  if (!usState) notFound();

  const county = usState.counties.find(
    (c) => slugifyCounty(c.name) === countySlug,
  );
  if (!county) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.apexprecisionbilling.com/" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.apexprecisionbilling.com/locations" },
      { "@type": "ListItem", position: 3, name: usState.name, item: `https://www.apexprecisionbilling.com/locations/${stateSlug}` },
      {
        "@type": "ListItem",
        position: 4,
        name: county.name,
        item: `https://www.apexprecisionbilling.com/locations/${stateSlug}/${countySlug}`,
      },
    ],
  };

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${county.name}, ${usState.name}`,
    description: county.description,
    address: {
      "@type": "PostalAddress",
      addressRegion: usState.abbr,
      addressCountry: "US",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <JsonLd data={[breadcrumbSchema, localSchema]} />

        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-50/30 pt-20 pb-12 sm:pt-24 sm:pb-16">
          <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-primary/6 blur-[120px]" />
          <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-primary/4 blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Locations", href: "/locations" },
                { label: usState.name, href: `/locations/${stateSlug}` },
                { label: county.name },
              ]}
              tone="onLight"
            />
            <div className="mt-8 max-w-4xl">
              <span className="inline-flex rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <MapPin className="mr-1.5 h-3.5 w-3.5" />
                County Spotlight
              </span>
              <h1 className="mt-5 font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                Medical Billing in {county.name}, {usState.name}
              </h1>
              <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-muted sm:text-lg">
                {county.description}
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

        {/* County context */}
        <section className="section-standard bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                How Apex supports {county.name} practices
              </h2>
              <p className="mt-4 font-body text-base leading-7 text-muted">
                The billing landscape in {county.name} reflects {usState.name}&apos;s broader
                payer dynamics — a mix of Medicare, Medicaid managed care, and commercial plans
                that each carry their own submission expectations, denial patterns, and follow-up
                cadence.
              </p>
              <p className="mt-4 font-body text-base leading-7 text-muted">
                Apex frames billing support around three disciplines that apply regardless of
                county size: front-end data quality before submission, structured denial tracking
                back to root cause, and reporting that gives practice leaders enough visibility to
                make decisions without sorting through disconnected payer portals.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Review payer-specific submission requirements before the first claim",
                  "Track denial patterns by payer and identify recurring root causes",
                  "Coordinate follow-up on stuck claims with practice-ready status updates",
                  "Reconcile payments against contracted rates and flag discrepancies",
                  "Manage patient responsibility billing and balance communication workflows",
                  "Connect revenue cycle reporting to the practice's operational next steps",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* State context */}
        <section className="section-standard bg-background-subtle">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              More counties in {usState.name}
            </h2>
            <p className="mt-3 font-body text-base text-muted">
              Apex serves healthcare practices across {usState.name}. Browse the full list of
              counties covered in {usState.name}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {usState.counties
                .filter((c) => slugifyCounty(c.name) !== countySlug)
                .map((c) => (
                  <Link
                    key={slugifyCounty(c.name)}
                    href={`/locations/${stateSlug}/${slugifyCounty(c.name)}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:border-primary/20 hover:text-primary hover:shadow-md"
                  >
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {c.name}
                  </Link>
                ))}
            </div>
            <div className="mt-6">
              <Link
                href={`/locations/${stateSlug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
                Back to {usState.name} overview
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-standard bg-white">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Ready to review your {county.name} billing workflows?
            </h2>
            <p className="mt-4 font-body text-base text-muted sm:text-lg">
              Start with a billing audit to identify where claims are getting stuck,
              where denials are recurring, and what reporting gaps the practice is
              currently working around.
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
