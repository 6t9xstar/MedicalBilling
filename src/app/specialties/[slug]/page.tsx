import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SpecialtyDetailScaffold from "@/components/sections/SpecialtyDetailScaffold";
import { getServiceBySlug } from "@/data/services";
import {
  getAllSpecialtyPageSlugs,
  getSpecialtyPageBySlug,
} from "@/data/specialtyPages";

export function generateStaticParams() {
  return getAllSpecialtyPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialtyPageBySlug(slug);

  if (!specialty) {
    return { title: "Specialty Not Found" };
  }

  return {
    title: specialty.metaTitle,
    description: specialty.metaDescription,
    alternates: {
      canonical: `https://apexprecisionbilling.com/specialties/${specialty.slug}`,
    },
    openGraph: {
      title: specialty.metaTitle,
      description: specialty.metaDescription,
      images: [{ url: "/og/specialties.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: specialty.metaTitle,
      description: specialty.metaDescription,
      images: ["/og/specialties.jpg"],
    },
  };
}

export default async function SpecialtyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialty = getSpecialtyPageBySlug(slug);

  if (!specialty) {
    notFound();
  }

  const relatedServices = specialty.relatedServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is NonNullable<typeof service> =>
      Boolean(service),
    );

  return (
    <SpecialtyDetailScaffold
      specialty={specialty}
      relatedServices={relatedServices}
    />
  );
}
