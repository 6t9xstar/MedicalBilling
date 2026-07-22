import type { Metadata } from "next";
import MarketingScaffold from "@/components/sections/MarketingScaffold";
import { requireContentPage } from "@/data/contentPages";
import { SITE } from "@/lib/constants";

const page = requireContentPage("our-process");

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

export default function OurProcessPage() {
  return <MarketingScaffold page={page} />;
}
