import type { Metadata } from "next";
import MarketingScaffold from "@/components/sections/MarketingScaffold";
import { requireContentPage } from "@/data/contentPages";

const page = requireContentPage("cookie-policy");

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  alternates: { canonical: `https://apexprecisionbilling.com${page.path}` },
};

export default function CookiePolicyPage() {
  return <MarketingScaffold page={page} />;
}
