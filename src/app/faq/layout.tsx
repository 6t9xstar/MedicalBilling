import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Apex Precision Billing's medical billing services, pricing, HIPAA compliance, specialties, and onboarding process.",
  openGraph: {
    title: "FAQ | Apex Precision Billing Inc",
    description:
      "Everything you need to know about our medical billing services.",
    images: [{ url: "/og/faq.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Apex Precision Billing Inc",
    description:
      "Everything you need to know about our medical billing services.",
    images: ["/og/faq.jpg"],
  },
  alternates: {
    canonical: "https://apexprecisionbilling.com/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
