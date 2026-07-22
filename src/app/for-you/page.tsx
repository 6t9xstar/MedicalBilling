import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";

const practicePaths = [
  {
    title: "Independent and physician-owned practices",
    description:
      "A good fit for groups that need steadier claim movement, cleaner communication, and help identifying where billing work is slowing down.",
    href: "/services/medical-billing",
  },
  {
    title: "Growing multi-provider groups",
    description:
      "Useful when leadership needs more structure across intake, billing follow-up, payment posting, and reporting as visit volume increases.",
    href: "/services/revenue-cycle-management",
  },
  {
    title: "Practices dealing with recurring denials",
    description:
      "Start here when the same payer issues keep resurfacing and the team needs clearer ownership and root-cause review.",
    href: "/services/denial-management",
  },
  {
    title: "Organizations with aging AR pressure",
    description:
      "Relevant for practices that need a more disciplined recovery plan for unresolved balances and stalled payer responses.",
    href: "/services/accounts-receivable-recovery",
  },
  {
    title: "Specialty groups with more billing complexity",
    description:
      "Explore specialty landing pages when your workflow depends heavily on procedure mix, documentation detail, or payer-specific rules.",
    href: "/specialties",
  },
  {
    title: "New providers or expansion initiatives",
    description:
      "Best for groups that need enrollment, readiness planning, and a clearer operational path before claims start moving.",
    href: "/services/credentialing-enrollment",
  },
];

const evaluationPoints = [
  "Whether the main problem starts at intake, coding, payer follow-up, or payment posting",
  "How much visibility leadership has into denials, aging AR, and unresolved work queues",
  "Whether your practice needs broad billing support or help with one high-friction function",
  "How specialty-specific your billing workflow is compared with a general practice model",
];

const nextSteps = [
  {
    title: "Review core services",
    description:
      "Use the service library when you already know which part of the revenue cycle needs attention.",
    href: "/services",
  },
  {
    title: "Browse specialty pages",
    description:
      "Use specialty pages when clinical workflow and payer nuance are part of the problem.",
    href: "/specialties",
  },
  {
    title: "Request a billing audit",
    description:
      "Use the audit path when you need help diagnosing the problem before choosing a service model.",
    href: "/free-billing-audit",
  },
];

export default function ForYouPage() {
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
                { label: "For Your Practice" },
              ]}
              tone="onLight"
            />
            <div className="mt-8 max-w-4xl">
              <span className="inline-flex rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                For Your Practice
              </span>
              <h1 className="mt-5 font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                Find the right billing support for the way your practice
                actually works
              </h1>
              <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-muted sm:text-lg">
                Not every physician group needs the same type of billing help.
                This page is here to help you decide whether your next step is a
                broad revenue cycle conversation, a specialty-specific review,
                or support for one persistent operational problem.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CtaLink href="/schedule-consultation">
                  Schedule a consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </CtaLink>
                <CtaLink href="/services" variant="outline">
                  Explore services
                </CtaLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section-standard bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Common ways practices use Apex
              </h2>
              <p className="mt-4 font-body text-base text-muted sm:text-lg">
                These are the most common starting points for physician groups
                evaluating outside billing support or trying to clarify what
                kind of help they need.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {practicePaths.map((path) => (
                <Link
                  key={path.title}
                  href={path.href}
                  className="group rounded-2xl border border-border bg-background p-7 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary">
                    {path.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-7 text-muted sm:text-base">
                    {path.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore next step
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-standard bg-background-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  What to review before choosing a billing path
                </h2>
                <p className="mt-4 font-body text-sm leading-7 text-muted sm:text-base">
                  The right engagement usually becomes clearer when you look at
                  where problems originate, how often they repeat, and whether
                  the issue is broad operational drift or one specific
                  breakdown.
                </p>
                <ul className="mt-6 space-y-4">
                  {evaluationPoints.map((point) => (
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
                  If you are not sure where to begin
                </h2>
                <p className="mt-4 font-body text-sm leading-7 text-muted sm:text-base">
                  Start with a billing audit or consultation instead of
                  guessing. That gives you a chance to discuss denials, payer
                  follow-up, AR, or specialty workflow issues before choosing a
                  scope of work.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <CtaLink href="/free-billing-audit">
                    Request a billing audit
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </CtaLink>
                  <CtaLink href="/request-a-quote" variant="outline">
                    Request a quote
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
                Suggested next steps
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {nextSteps.map((step) => (
                <Link
                  key={step.title}
                  href={step.href}
                  className="group rounded-2xl border border-border bg-background p-7 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-7 text-muted sm:text-base">
                    {step.description}
                  </p>
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
