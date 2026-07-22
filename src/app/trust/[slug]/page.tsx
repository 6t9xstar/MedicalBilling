import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPageScaffold from "@/components/sections/SeoLandingPageScaffold";
import SeoRedirect from "@/components/ui/SeoRedirect";
import { getSeoPage, getSeoPageSlugs, requireSeoGroup } from "@/data/seoPages";
import { SITE } from "@/lib/constants";

const group = requireSeoGroup("trust");

export function generateStaticParams() {
  return getSeoPageSlugs("trust").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage("trust", slug);
  if (!page) return { title: "Page Not Found" };

  // For duplicates that have a canonical stand-alone page, point metadata
  // at the canonical destination instead of the legacy collection slug.
  if (page.redirectTo) {
    return {
      title: { absolute: page.metaTitle },
      description: page.metaDescription,
      alternates: { canonical: `${SITE.url}${page.redirectTo}` },
      robots: { index: false, follow: true },
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

export default async function TrustDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSeoPage("trust", slug);
  if (!page) notFound();

  // Trust entries that duplicate a stand-alone canonical page collapse into a
  // soft redirect so we preserve the historical URL while consolidating
  // content. The canonical lives on the destination page.
  if (page.redirectTo) {
    return (
      <SeoRedirect
        to={page.redirectTo}
        from={page.path}
        title={`${page.title} — moved to the canonical page`}
      />
    );
  }

  return <SeoLandingPageScaffold page={page} group={group} />;
}
