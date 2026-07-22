import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Review how Apex Precision Billing approaches pricing based on service scope, specialty complexity, and revenue cycle workflow needs.",
  openGraph: {
    title: "Pricing | Apex Precision Billing Inc",
    description:
      "A pricing page focused on billing scope, workflow complexity, and the right consultation path for each practice.",
    images: [{ url: "/og/pricing.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Apex Precision Billing Inc",
    description:
      "A pricing page focused on billing scope, workflow complexity, and the right consultation path for each practice.",
    images: ["/og/pricing.jpg"],
  },
  alternates: {
    canonical: "https://apexprecisionbilling.com/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
