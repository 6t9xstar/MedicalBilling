import { getAllServiceSlugs, getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [{ url: "/og/default.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: ["/og/default.jpg"],
    },
    alternates: {
      canonical: `https://apexprecisionbilling.com/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceDetailClient service={service} />;
}
