import type { Metadata } from "next";
import SeoCollectionScaffold from "@/components/sections/SeoCollectionScaffold";
import { requireSeoGroup } from "@/data/seoPages";
import { SITE } from "@/lib/constants";

const group = requireSeoGroup("tools");

export const metadata: Metadata = {
  title: { absolute: group.metaTitle },
  description: group.metaDescription,
  alternates: { canonical: `${SITE.url}${group.path}` },
  openGraph: {
    title: { absolute: group.metaTitle },
    description: group.metaDescription,
    images: [{ url: "/og/default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: group.metaTitle },
    description: group.metaDescription,
    images: ["/og/default.jpg"],
  },
};

export default function ToolsPage() {
  return <SeoCollectionScaffold group={group} />;
}
