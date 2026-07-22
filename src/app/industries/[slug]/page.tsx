import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPageScaffold from "@/components/sections/SeoLandingPageScaffold";
import { getSeoPage, getSeoPageSlugs, requireSeoGroup } from "@/data/seoPages";
import { SITE } from "@/lib/constants";

const group = requireSeoGroup("industries");

export function generateStaticParams() {
  return getSeoPageSlugs("industries").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage("industries", slug);
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

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSeoPage("industries", slug);
  if (!page) notFound();

  return <SeoLandingPageScaffold page={page} group={group} />;
}
