import type { Metadata } from "next";
import MarketingScaffold from "@/components/sections/MarketingScaffold";
import { requireContentPage } from "@/data/contentPages";

const page = requireContentPage("schedule-consultation");

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  alternates: { canonical: `https://apexprecisionbilling.com${page.path}` },
};

export default function ScheduleConsultationPage() {
  return <MarketingScaffold page={page} />;
}
