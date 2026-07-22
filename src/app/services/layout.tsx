import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Core medical billing, revenue cycle management, coding, denial, AR, enrollment, and workflow support pages for healthcare practices.",
  openGraph: {
    title: "Medical Billing Services | Apex Precision Billing Inc",
    description:
      "Core medical billing and revenue cycle services for practices that need clearer workflows.",
    images: [{ url: "/og/services.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Billing Services | Apex Precision Billing Inc",
    description:
      "Core medical billing and revenue cycle services for practices that need clearer workflows.",
    images: ["/og/services.jpg"],
  },
  alternates: {
    canonical: "https://apexprecisionbilling.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
