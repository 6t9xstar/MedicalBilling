import type { Metadata } from "next";
import ResourceHubPage from "@/components/sections/ResourceHubPage";
import { requireResourceHub } from "@/data/resourceHubs";

const page = requireResourceHub("glossary");

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  alternates: { canonical: `https://apexprecisionbilling.com${page.path}` },
};

export default function GlossaryPage() {
  return <ResourceHubPage page={page} />;
}
