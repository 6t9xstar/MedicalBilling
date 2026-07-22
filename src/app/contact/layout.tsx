import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Apex Precision Billing to discuss medical billing, revenue cycle management, specialty support, a free billing audit, a consultation, or a quote request.",
  openGraph: {
    title: "Contact Apex Precision Billing Inc",
    description:
      "Start the right conversation with Apex—service support, billing audit, consultation, quote request, or sales discussion.",
    images: [{ url: "/og/contact.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Apex Precision Billing Inc",
    description:
      "Start the right conversation with Apex—service support, billing audit, consultation, quote request, or sales discussion.",
    images: ["/og/contact.jpg"],
  },
  alternates: {
    canonical: "https://apexprecisionbilling.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
