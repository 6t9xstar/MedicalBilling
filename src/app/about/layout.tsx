import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Apex Precision Billing is structuring its services, specialties, resources, and conversion paths around clearer healthcare billing workflows.",
  openGraph: {
    title: "About Apex Precision Billing Inc",
    description:
      "See how Apex is positioning itself as a clearer, more disciplined healthcare billing brand.",
    images: [{ url: "/og/about.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Apex Precision Billing Inc",
    description:
      "See how Apex is positioning itself as a clearer, more disciplined healthcare billing brand.",
    images: ["/og/about.jpg"],
  },
  alternates: {
    canonical: "https://apexprecisionbilling.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
