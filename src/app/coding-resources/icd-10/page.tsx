import type { Metadata } from "next";
import ResourceHubPage from "@/components/sections/ResourceHubPage";
import { requireResourceHub } from "@/data/resourceHubs";

const page = requireResourceHub("coding-resources-icd10");

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  alternates: { canonical: `https://apexprecisionbilling.com${page.path}` },
};

export default function Icd10ResourcesPage() {
  return <ResourceHubPage page={page} />;
}
