import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Specialties",
  description:
    "Specialty billing pages across 40+ medical practice types, including cardiology, psychiatry, dermatology, urgent care, family medicine, and more.",
  openGraph: {
    title: "Medical Specialties We Cover | Apex Precision Billing Inc",
    description: "Specialty billing pages across 40+ medical practice types.",
    images: [{ url: "/og/specialties.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Specialties We Cover | Apex Precision Billing Inc",
    description: "Specialty billing pages across 40+ medical practice types.",
    images: ["/og/specialties.jpg"],
  },
  alternates: {
    canonical: "https://apexprecisionbilling.com/specialties",
  },
};

export default function SpecialtiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
