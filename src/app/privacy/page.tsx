"use client";

import { m } from "framer-motion";
import { Shield } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DotPattern from "@/components/ui/DotPattern";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SITE } from "@/lib/constants";
import { fadeInUpClean, staggerContainer } from "@/lib/animations";
import { useActiveSection } from "@/hooks/useActiveSection";

const sections = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "hipaa-compliance", title: "HIPAA Compliance" },
  { id: "data-security", title: "Data Security" },
  { id: "data-sharing", title: "Data Sharing" },
  { id: "your-rights", title: "Your Rights" },
  { id: "contact-us", title: "Contact Us" },
];

const content = {
  "information-we-collect": [
    "We collect information you provide directly, including name, email address, phone number, practice details, and billing data submitted through our platform.",
    "We automatically collect certain information when you visit our website, such as IP address, browser type, operating system, and usage patterns through cookies and similar technologies.",
    "We may receive information from third parties, including healthcare providers, insurance companies, and business partners, to facilitate our billing and revenue cycle management services.",
  ],
  "how-we-use": [
    "To provide, maintain, and improve our medical billing, revenue cycle management, and related support services.",
    "To process claims, manage your account, and communicate with you about your services.",
    "To comply with HIPAA regulations and other applicable healthcare privacy laws.",
    "To detect, prevent, and address technical issues and protect against fraudulent or unauthorized activity.",
    "To send you relevant updates about our services and industry developments when appropriate.",
  ],
  "hipaa-compliance": [
    "As a business associate in the healthcare industry, we maintain strict compliance with the Health Insurance Portability and Accountability Act (HIPAA).",
    "All Protected Health Information (PHI) is handled in accordance with our Business Associate Agreements (BAA) with each client.",
    "We implement administrative, technical, and physical safeguards to protect the confidentiality, integrity, and availability of PHI.",
    "Our workforce undergoes regular HIPAA training, and we maintain documented policies and procedures for handling protected health information.",
  ],
  "data-security": [
    "We use reasonable administrative, technical, and physical safeguards designed to protect the information we handle.",
    "Access to sensitive information is limited to authorized personnel with a business need to use it.",
    "We review and update our security practices periodically to support confidentiality, integrity, and availability.",
    "No system can be guaranteed perfectly secure, but we work to reduce risk and respond appropriately to identified issues.",
  ],
  "data-sharing": [
    "We do not sell, trade, or rent your personal information to third parties for marketing purposes.",
    "We may share information with trusted service providers who assist in operating our platform, subject to strict confidentiality obligations.",
    "We may disclose information as required by law, regulation, or legal process, or to protect the rights, property, or safety of our company, clients, or others.",
    "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
  ],
  "your-rights": [
    "You have the right to access, correct, or delete your personal information at any time.",
    "You may opt out of non-essential communications by contacting us or using the unsubscribe link in our emails.",
    "You have the right to request a copy of the personal data we hold about you.",
    "For HIPAA-covered information, additional rights are available through our Business Associate Agreement.",
  ],
  "contact-us": [
    `If you have questions about this Privacy Policy, please contact us at ${SITE.email} or ${SITE.phone}.`,
    `Business mailing address: ${SITE.address}`,
  ],
};

export default function PrivacyPage() {
  const sectionIds = sections.map((s) => s.id);
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-50/30 pt-20 pb-8 sm:pt-24 sm:pb-12">
          <DotPattern />
          <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-primary/6 blur-[120px]" />
          <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-primary/4 blur-[100px]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Privacy Policy" },
                ]}
                tone="onLight"
              />
            </m.div>

            <m.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <m.div
                variants={fadeInUpClean}
                className="mb-4 flex items-center gap-2 text-primary"
              >
                <Shield className="h-5 w-5" />
                <span className="font-body text-sm font-semibold uppercase tracking-widest">
                  Legal
                </span>
              </m.div>
              <m.h1
                variants={fadeInUpClean}
                className="font-heading text-4xl font-bold text-foreground sm:text-5xl leading-[1.08]"
              >
                Privacy Policy
              </m.h1>
              <m.p
                variants={fadeInUpClean}
                className="mt-4 font-body text-base sm:text-lg text-muted"
              >
                Last updated: January 1, 2025
              </m.p>
            </m.div>
          </div>
        </section>

        {/* Content with sidebar */}
        <section className="py-8 md:py-10 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
              {/* Sidebar TOC */}
              <nav
                className="mb-10 lg:mb-0 lg:sticky lg:top-28 lg:self-start"
                aria-label="Table of contents"
              >
                <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground mb-4">
                  On this page
                </h2>
                <ul className="space-y-1.5 border-l-2 border-border">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(s.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`block pl-4 py-1.5 border-l-2 -ml-0.5 font-body text-sm transition-colors duration-200 ${
                          activeId === s.id
                            ? "border-primary text-primary font-medium"
                            : "border-transparent text-muted hover:text-foreground hover:border-muted"
                        }`}
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Main content */}
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={staggerContainer}
                className="min-w-0"
              >
                {sections.map((section) => (
                  <m.div
                    key={section.id}
                    id={section.id}
                    variants={fadeInUpClean}
                    className="scroll-mt-28 mb-6 last:mb-0"
                  >
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="space-y-3">
                      {content[section.id as keyof typeof content].map(
                        (paragraph, i) => (
                          <p
                            key={i}
                            className="font-body text-base leading-relaxed text-muted"
                          >
                            {paragraph}
                          </p>
                        ),
                      )}
                    </div>
                  </m.div>
                ))}
              </m.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
