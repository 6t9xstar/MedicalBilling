import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { LazyMotion, domMax } from "framer-motion";
import SiteExperience from "@/components/widgets/SiteExperience";
import { SITE } from "@/lib/constants";
import { buildLocalBusinessSchema, buildOrganizationSchema, buildWebsiteSchema } from "@/lib/schema";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
  },
  title: {
    default: "Apex Precision Billing Inc | Medical Billing and RCM Support",
    template: "%s | Apex Precision Billing Inc",
  },
  description:
    "Apex Precision Billing Inc provides medical billing, revenue cycle management, coding support, denial follow-up, and specialty-aware billing resources for physician practices.",
  keywords: [
    "medical billing services",
    "revenue cycle management",
    "medical coding services",
    "denial management",
    "accounts receivable recovery",
    "eligibility verification",
    "provider enrollment",
    "specialty medical billing",
    "physician billing company",
    "HIPAA aware billing support",
  ],
  authors: [{ name: SITE.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  other: {},
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    title: "Apex Precision Billing Inc | Medical Billing and RCM Support",
    description:
      "Medical billing, revenue cycle management, coding support, denial follow-up, and specialty-aware resources for physician practices.",
    url: SITE.url,
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Precision Billing Inc | Medical Billing and RCM Support",
    description:
      "Medical billing, revenue cycle management, coding support, denial follow-up, and specialty-aware resources for physician practices.",
    images: ["/og/home.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1b4a",
};

const jsonLd = [
  buildOrganizationSchema(),
  buildWebsiteSchema(),
  buildLocalBusinessSchema(),
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    description:
      "Medical billing and revenue cycle support for physician practices, including coding coordination, denial follow-up, and specialty-aware workflow resources.",
    url: SITE.url,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    areaServed: {
      "@type": "Country",
      name: SITE.areaServed,
    },
    sameAs: [
      SITE.social.linkedin,
      SITE.social.instagram,
      SITE.social.facebook,
      SITE.social.alignable,
    ],
    knowsAbout: [
      "Medical Billing",
      "Revenue Cycle Management",
      "Medical Coding",
      "Denial Management",
      "Accounts Receivable Recovery",
      "Eligibility Verification",
      "Provider Enrollment",
      "Credentialing and Enrollment",
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head></head>
      <body className="min-h-screen bg-background text-foreground font-body antialiased selection:bg-primary selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-xl focus:bg-white focus:px-5 focus:py-2.5 focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:font-medium"
        >
          Skip to main content
        </a>
        <LazyMotion features={domMax}>
          {children}
          <SiteExperience />
        </LazyMotion>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
