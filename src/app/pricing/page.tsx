import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";
import PricingSection from "@/components/sections/PricingSection";

const includedInConversation = [
  "A review of your current billing scope, specialty mix, and practice goals",
  "Discussion of claim workflow pain points such as denials, AR, posting, or enrollment delays",
  "Recommendation on whether the best fit is full-service support, targeted help, or an audit-first engagement",
  "Clear next steps for consultation, quoting, or a more detailed operational review",
];

const routeCards = [
  {
    title: "Request a quote",
    description:
      "Best when you already know the scope of support you want to discuss and need a formal pricing conversation.",
    href: "/request-a-quote",
  },
  {
    title: "Free billing audit",
    description:
      "Best when the problem is still being diagnosed and you want a more informed discussion before pricing is scoped.",
    href: "/free-billing-audit",
  },
  {
    title: "Schedule a consultation",
    description:
      "Best when you want to talk through your current workflow, specialty mix, and operational priorities live.",
    href: "/schedule-consultation",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-50/30 pt-20 pb-8 sm:pt-24 sm:pb-12">
          <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-primary/6 blur-[120px]" />
          <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-primary/4 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
              tone="onLight"
            />
            <div className="mt-8 max-w-4xl">
              <span className="inline-flex rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Pricing
              </span>
              <h1 className="mt-5 font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                Pricing built around scope, complexity, and workflow needs
              </h1>
              <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-muted sm:text-lg">
                Apex is moving away from one-size-fits-all pricing language. The
                right pricing conversation should reflect the services you need,
                the condition of your current revenue cycle, and the level of
                specialty or operational complexity involved.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CtaLink href="/request-a-quote">
                  Request a quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </CtaLink>
                <CtaLink href="/schedule-consultation" variant="outline">
                  Schedule a consultation
                </CtaLink>
              </div>
            </div>
          </div>
        </section>

        <PricingSection />

        <section className="section-standard bg-background-subtle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  What a pricing conversation should include
                </h2>
                <ul className="mt-6 space-y-4">
                  {includedInConversation.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="font-body text-sm leading-6 text-foreground sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  Choose the right route
                </h2>
                <p className="mt-4 font-body text-sm leading-7 text-muted sm:text-base">
                  If your practice already knows what it needs, a quote request
                  may be the fastest path. If the problem is still unclear, a
                  consultation or audit is usually the better place to start.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <CtaLink href="/request-a-quote">
                    Request a quote
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
                Start with the path that matches your decision stage
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {routeCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group rounded-2xl border border-border bg-background p-7 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-7 text-muted sm:text-base">
                    {card.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                    Continue
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
