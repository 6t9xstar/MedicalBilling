import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Your Practice",
  description:
    "Find the right Apex billing path for your practice, whether you need full-service billing, specialty support, denial help, or a billing audit.",
  openGraph: {
    title: "For Your Practice | Apex Precision Billing Inc",
    description:
      "A decision-support page for practices evaluating services, specialties, and next-step billing conversations.",
    images: [{ url: "/og/for-you.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Your Practice | Apex Precision Billing Inc",
    description:
      "A decision-support page for practices evaluating services, specialties, and next-step billing conversations.",
    images: ["/og/for-you.jpg"],
  },
  alternates: {
    canonical: "https://apexprecisionbilling.com/for-you",
  },
};

export default function ForYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
