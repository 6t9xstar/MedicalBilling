"use client";

import { m } from "framer-motion";
import { FileText } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DotPattern from "@/components/ui/DotPattern";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SITE } from "@/lib/constants";
import { fadeInUpClean, staggerContainer } from "@/lib/animations";
import { useActiveSection } from "@/hooks/useActiveSection";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "services", title: "Description of Services" },
  { id: "client-responsibilities", title: "Client Responsibilities" },
  { id: "fees", title: "Fees and Payment" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact", title: "Contact Us" },
];

const content: Record<string, string[]> = {
  acceptance: [
    `By accessing or using the services provided by ${SITE.name} ("Company," "we," "us," or "our"), including our website, platform, and related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms").`,
    "If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and your continued use of the Services constitutes acceptance of any changes.",
  ],
  services: [
    "We provide medical billing, revenue cycle management, coding coordination, and related support services to healthcare providers across the United States.",
    "Our Services may include claims submission and tracking, denial management, payment posting, patient billing support, and related operational assistance.",
    "The specific scope of services is defined in individual Service Agreements or Statements of Work executed between the Company and each client.",
  ],
  "client-responsibilities": [
    "Clients are responsible for providing accurate and complete information necessary for the performance of our Services, including patient records, insurance details, and billing documentation.",
    "Clients must maintain current and valid licenses, certifications, and insurance required for their healthcare practice.",
    "Clients are responsible for reviewing claims, reports, and financial summaries provided by the Company and promptly notifying us of any discrepancies.",
    "Clients must comply with all applicable healthcare laws, regulations, and payer requirements.",
  ],
  fees: [
    "Service fees are outlined in individual Service Agreements and are typically based on a percentage of collections or a flat monthly fee.",
    "Invoices are issued monthly and are due within thirty (30) days of the invoice date unless otherwise specified in the Service Agreement.",
    "Late payments may incur a finance charge of 1.5% per month on the outstanding balance.",
    "The Company reserves the right to suspend Services if payments are more than sixty (60) days overdue.",
  ],
  "intellectual-property": [
    "All content, software, methodologies, and proprietary tools used in our Services remain the exclusive property of the Company.",
    "Clients retain ownership of their practice data and patient records. The Company is granted a limited license to use such data solely for the purpose of performing our Services.",
    "Any custom reports, analytics, or dashboards created for a client are licensed to the client for their internal use only.",
  ],
  confidentiality: [
    "Both parties agree to maintain the confidentiality of all non-public information shared during the course of the business relationship.",
    "This includes, but is not limited to, patient health information, financial data, business strategies, and proprietary processes.",
    "Confidentiality obligations survive the termination of the Service Agreement for a period of five (5) years.",
    "These obligations are in addition to, and do not replace, any separate Business Associate Agreement (BAA) executed between the parties.",
  ],
  liability: [
    "The Company's total liability under any Service Agreement shall not exceed the total fees paid by the client during the twelve (12) months preceding the claim.",
    "The Company shall not be liable for indirect, incidental, consequential, special, or punitive damages, including lost profits or revenue.",
    "The Company is not responsible for denials or delays caused by insurance payers, regulatory changes, or inaccuracies in information provided by the client.",
  ],
  termination: [
    "Either party may terminate a Service Agreement with thirty (30) days written notice.",
    "The Company may terminate immediately if the client materially breaches any obligation under these Terms or the Service Agreement and fails to cure within fifteen (15) days of written notice.",
    "Upon termination, the Company will provide a final reconciliation of all outstanding fees and return client data in a mutually agreed-upon format within thirty (30) days.",
  ],
  "governing-law": [
    "These Terms are governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law principles.",
    "Any disputes arising from these Terms shall be resolved through binding arbitration administered by the American Arbitration Association (AAA) in New Jersey.",
  ],
  contact: [
    `If you have questions about these Terms of Service, please contact us at ${SITE.email} or ${SITE.phone}.`,
    `Business mailing address: ${SITE.address}`,
  ],
};

export default function TermsPage() {
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
                  { label: "Terms of Service" },
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
                <FileText className="h-5 w-5" />
                <span className="font-body text-sm font-semibold uppercase tracking-widest">
                  Legal
                </span>
              </m.div>
              <m.h1
                variants={fadeInUpClean}
                className="font-heading text-4xl font-bold text-foreground sm:text-5xl leading-[1.08]"
              >
                Terms of Service
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
            <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-8">
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
                      {content[section.id].map((paragraph, i) => (
                        <p
                          key={i}
                          className="font-body text-base leading-relaxed text-muted"
                        >
                          {paragraph}
                        </p>
                      ))}
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
