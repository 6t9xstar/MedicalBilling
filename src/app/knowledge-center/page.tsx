import type { Metadata } from "next";
import ResourceHubPage from "@/components/sections/ResourceHubPage";
import { requireResourceHub } from "@/data/resourceHubs";
import { SITE } from "@/lib/constants";

const page = requireResourceHub("knowledge-center");

export const metadata: Metadata = {
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

export default function KnowledgeCenterPage() {
  return <ResourceHubPage page={page} />;
}
