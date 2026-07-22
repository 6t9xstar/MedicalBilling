import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Apex Precision Billing Inc's terms of service governing the use of our medical billing, revenue cycle management, coding, and related support services.",
  openGraph: {
    title: "Terms of Service | Apex Precision Billing Inc",
    description:
      "Terms governing the use of our medical billing and revenue cycle support services.",
    images: [{ url: "/og/default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Apex Precision Billing Inc",
    description:
      "Terms governing the use of our medical billing and revenue cycle support services.",
    images: ["/og/default.jpg"],
  },
  alternates: {
    canonical: "https://apexprecisionbilling.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
