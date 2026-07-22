import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Globe, Scale, Stethoscope } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { legalLinks, resourceLinks, websiteLinks } from "@/data/navigation";
import { getSeoPagesByGroup, seoCollectionGroups } from "@/data/seoPages";
import { services } from "@/data/services";
import { specialtyPages } from "@/data/specialtyPages";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HTML Sitemap | Apex Precision Billing Inc",
  description:
    "Browse the Apex Precision Billing website by section, including services, specialties, resources, company pages, and legal information.",
  alternates: { canonical: `${SITE.url}/sitemap` },
};

type LinkItem = {
  label: string;
  href: string;
  description?: string;
};

const serviceItems: LinkItem[] = [
  {
    label: "All Services",
    href: "/services",
    description: "Browse the complete service overview.",
  },
  ...services.map((service) => ({
    label: service.title,
    href: `/services/${service.slug}`,
    description: service.description,
  })),
];

const specialtyItems: LinkItem[] = [
  {
    label: "All Specialties",
    href: "/specialties",
    description: "Review the specialty coverage library.",
  },
  ...specialtyPages.map((page) => ({
    label: page.title,
    href: `/specialties/${page.slug}`,
    description: page.intro,
  })),
];

const strategicItems: LinkItem[] = seoCollectionGroups.flatMap((group) => [
  {
    label: group.title,
    href: group.path,
    description: group.intro,
  },
  ...group.pages.map((page) => ({
    label: page.title,
    href: page.path,
    description: page.metaDescription,
  })),
]);

const resourceItems: LinkItem[] = [
  ...resourceLinks,
  ...getSeoPagesByGroup("resources").map((page) => ({
    label: page.title,
    href: page.path,
    description: page.metaDescription,
  })),
];
const websiteItems: LinkItem[] = websiteLinks;
const legalItems: LinkItem[] = legalLinks;

function chunk<T>(items: T[], size: number) {
  const chunks: T[][] = [];

  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }

  return chunks;
}

function SitemapSection({
  icon: Icon,
  title,
  description,
  links,
  columns = 2,
}: {
  icon: typeof Globe;
  title: string;
  description: string;
  links: LinkItem[];
  columns?: 1 | 2 | 3;
}) {
  const columnSize = Math.ceil(links.length / columns);
  const groupedLinks = chunk(links, columnSize);

  return (
    <section className="rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_rgba(8,48,111,0.06)] sm:p-8">
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/5 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-3xl font-body text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        </div>
      </div>

      <div
        className={`grid gap-6 ${
          columns === 1
            ? "grid-cols-1"
            : columns === 2
              ? "grid-cols-1 lg:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        }`}
      >
        {groupedLinks.map((group, index) => (
          <ul key={`${title}-${index}`} className="space-y-3">
            {group.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group block rounded-2xl border border-border bg-background-subtle px-4 py-3 transition-colors duration-200 hover:border-primary/20 hover:bg-primary/5"
                >
                  <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-base">
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  {link.description && (
                    <span className="mt-1 block font-body text-xs leading-relaxed text-muted sm:text-sm">
                      {link.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="section-compact overflow-hidden border-b border-border bg-white">
          <div className="mx-auto max-w-5xl px-4 py-8 text-center sm:px-6 md:py-10 lg:px-8">
            <div className="flex justify-center">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "HTML Sitemap" },
                ]}
                tone="onLight"
              />
            </div>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary">
              <FileText className="h-7 w-7" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Website <span className="gradient-text">Sitemap</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-muted">
              Browse every major section of the Apex Precision Billing website,
              including service pages, specialty pages, educational resources,
              company information, and legal policies.
            </p>
          </div>
        </section>

        <section className="section-standard bg-background-subtle">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
            <SitemapSection
              icon={Globe}
              title="Website and Conversion Pages"
              description="Core pages for learning about Apex, requesting an audit, scheduling a consultation, or reaching the team."
              links={websiteItems}
              columns={2}
            />

            <SitemapSection
              icon={Stethoscope}
              title="Core Services"
              description="Every service page currently available on the website, from medical billing and revenue cycle support to workflow-specific operational services."
              links={serviceItems}
              columns={3}
            />

            <SitemapSection
              icon={Stethoscope}
              title="Specialties"
              description="Specialty-aware billing pages organized around common physician practice types and workflow pressures."
              links={specialtyItems}
              columns={3}
            />

            <SitemapSection
              icon={Globe}
              title="Strategic SEO Pages"
              description="Solutions, software, location, industry, trust, tool, lead magnet, and testimonial pages added to strengthen search visibility and conversion paths."
              links={strategicItems}
              columns={3}
            />

            <SitemapSection
              icon={FileText}
              title="Resources"
              description="Educational content hubs, coding resources, frequently asked questions, and supporting materials for healthcare practices."
              links={resourceItems}
              columns={2}
            />

            <SitemapSection
              icon={Scale}
              title="Legal"
              description="Privacy, HIPAA notice, terms, and other legal policy pages published on the site."
              links={legalItems}
              columns={1}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
