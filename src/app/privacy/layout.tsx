import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Apex Precision Billing Inc's privacy policy. Learn how we collect, use, and protect your personal and healthcare information in compliance with HIPAA.",
  openGraph: {
    title: "Privacy Policy | Apex Precision Billing Inc",
    description:
      "Our commitment to protecting your privacy and healthcare data.",
    images: [{ url: "/og/default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Apex Precision Billing Inc",
    description:
      "Our commitment to protecting your privacy and healthcare data.",
    images: ["/og/default.jpg"],
  },
  alternates: {
    canonical: "https://apexprecisionbilling.com/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
