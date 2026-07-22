import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";

const operatingModel = [
  {
    title: "Front-end readiness",
    description:
      "Eligibility, demographics, authorization, and enrollment readiness are treated as part of the billing system rather than as isolated administrative tasks.",
  },
  {
    title: "Claim movement and follow-up",
    description:
      "Claim submission, denial handling, AR follow-up, and payment posting work best when ownership is clear and recurring issues are tracked across the entire workflow.",
  },
  {
    title: "Reporting and oversight",
    description:
      "Practice leaders need visibility into what is stuck, what is improving, and what requires a process change instead of more rework.",
  },
];

const oversightPoints = [
  "Clear handoffs between front-end tasks and back-end billing work",
  "Workflow visibility instead of vague status updates or vanity dashboards",
  "Compliance-minded handling of billing operations and patient data",
  "A consultative communication style that helps practices understand next steps",
];

const relatedRoutes = [
  {
    title: "Why Apex",
    description:
      "Review the broader positioning and operating philosophy behind the new site structure.",
    href: "/why-apex",
  },
  {
    title: "Revenue Cycle Management",
    description:
      "See how Apex frames front-end intake, claim movement, and payment visibility as one connected system.",
    href: "/services/revenue-cycle-management",
  },
  {
    title: "HIPAA Compliance",
    description:
      "Review the compliance-focused service page that supports trust-building around process and data handling.",
    href: "/services/hipaa-compliance",
  },
];

export default function FacilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-50/30 pt-20 pb-8 sm:pt-24 sm:pb-12">
          <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-primary/6 blur-[120px]" />
          <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-primary/4 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Operations & Oversight" },
              ]}
              tone="onLight"
            />
            <div className="mt-8 max-w-4xl">
              <span className="inline-flex rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Operations & Oversight
              </span>
              <h1 className="mt-5 font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                How Apex approaches billing operations
              </h1>
              <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-muted sm:text-lg">
                This page explains the operating model behind Apex Precision
                Billing. Instead of promoting a vague back-office facility, the
                focus is on how work is organized, how accountability is
                maintained, and how practices stay informed as claims move
                through the revenue cycle.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CtaLink href="/schedule-consultation">
                  Schedule a consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </CtaLink>
                <CtaLink href="/why-apex" variant="outline">
                  Why Apex
                </CtaLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section-standard bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                The operating model behind the work
              </h2>
              <p className="mt-4 font-body text-base text-muted sm:text-lg">
                Apex is positioning its operations around the billing handoffs
                that most often create delays: intake readiness, coding
                alignment, claim submission, denial response, AR follow-up, and
                payment visibility.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {operatingModel.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-background p-7 shadow-sm"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-7 text-muted sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-standard bg-background-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  What practices should expect
                </div>
                <ul className="mt-6 space-y-4">
                  {oversightPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="font-body text-sm leading-6 text-foreground sm:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  Why this page changed
                </h2>
                <p className="mt-4 font-body text-sm leading-7 text-muted sm:text-base">
                  The older version leaned too heavily on scale claims and
                  facility language that were not necessary to explain value.
                  This updated version focuses on operational discipline,
                  compliance-minded process, and how Apex communicates with
                  physician groups.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <CtaLink href="/contact-sales">
                    Talk to sales
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </CtaLink>
                  <CtaLink href="/free-billing-audit" variant="outline">
                    Request a billing audit
                  </CtaLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-standard bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Related pages to review next
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedRoutes.map((route) => (
                <Link
                  key={route.title}
                  href={route.href}
                  className="group rounded-2xl border border-border bg-background p-7 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary">
                    {route.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-7 text-muted sm:text-base">
                    {route.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                    Review page
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
