import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations & Oversight",
  description:
    "Learn how Apex Precision Billing approaches billing operations, workflow accountability, compliance-minded process, and practice communication.",
  openGraph: {
    title: "Operations & Oversight | Apex Precision Billing Inc",
    description:
      "A process-focused view of how Apex organizes billing operations and communicates with practices.",
    images: [{ url: "/og/facility.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Operations & Oversight | Apex Precision Billing Inc",
    description:
      "A process-focused view of how Apex organizes billing operations and communicates with practices.",
    images: ["/og/facility.jpg"],
  },
  alternates: {
    canonical: "https://apexprecisionbilling.com/facility",
  },
};

export default function FacilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
