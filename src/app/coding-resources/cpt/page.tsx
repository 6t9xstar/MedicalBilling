import type { Metadata } from "next";
import ResourceHubPage from "@/components/sections/ResourceHubPage";
import { requireResourceHub } from "@/data/resourceHubs";

const page = requireResourceHub("coding-resources-cpt");

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  alternates: { canonical: `https://apexprecisionbilling.com${page.path}` },
};

export default function CptResourcesPage() {
  return <ResourceHubPage page={page} />;
}
