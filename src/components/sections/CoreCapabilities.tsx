"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import {
  FileText,
  Settings,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {
  sectionHeaderVariants,
  sectionItemVariants,
  sectionHeadingVariants,
  sectionLineVariants,
  sectionCardVariants,
  sectionCardsContainerVariants,
  usePrefersReducedMotion,
} from "@/lib/animations";

const capabilities = [
  {
    icon: FileText,
    title: "Core billing functions",
    description:
      "Explore service pages built around the operational tasks that keep claims moving.",
    color: "from-blue-500 to-blue-600",
    href: "/services",
    features: [
      "Medical billing",
      "Medical coding",
      "Charge entry",
      "Payment posting",
      "Denial management",
      "AR recovery",
    ],
  },
  {
    icon: Settings,
    title: "Front-end and administrative workflow",
    description:
      "Understand the operational work that affects claim quality before billing teams even touch the account.",
    color: "from-violet-500 to-violet-600",
    href: "/services/eligibility-verification",
    features: [
      "Eligibility verification",
      "Prior authorization",
      "Credentialing & enrollment",
      "Provider enrollment",
      "HIPAA-related workflow awareness",
      "Clearer process ownership",
    ],
  },
  {
    icon: TrendingUp,
    title: "Specialty and resource expansion",
    description:
      "Connect core services to specialty pages and educational content that support trust over time.",
    color: "from-emerald-500 to-emerald-600",
    href: "/resources",
    features: [
      "Specialty landing pages",
      "Resource hubs",
      "Case studies and guides scaffolding",
      "Glossary and coding reference routes",
      "Conversion-focused next steps",
      "Stronger internal linking structure",
    ],
  },
];

export default function CoreCapabilities() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <section
        ref={ref}
        className="relative py-8 md:py-12 bg-background overflow-hidden"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Homepage Focus
            </span>
            <SectionHeading>
              What the new{" "}
              <span className="gradient-text">homepage is organizing</span>
            </SectionHeading>
            <div className="accent-line mx-auto mt-5 origin-center" />
            <p className="mt-5 font-body text-base text-muted max-w-3xl mx-auto leading-7">
              The homepage now introduces Apex through service structure,
              specialty coverage, and next-step clarity instead of relying on
              unsupported superlatives.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-accent/20 hover:shadow-lg"
              >
                <div
                  className={`absolute left-0 right-0 top-0 h-1 bg-linear-to-r ${cap.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${cap.color} text-white shadow-lg`}
                >
                  <cap.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {cap.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-6">
                  {cap.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {cap.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle
                        className="h-4 w-4 mt-0.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="font-body text-sm text-muted leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={cap.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors duration-300"
                >
                  Explore this area
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative py-8 md:py-12 bg-background overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionHeaderVariants}
          className="text-center mb-6"
        >
          <m.span
            variants={sectionItemVariants}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3"
          >
            Homepage Focus
          </m.span>
          <SectionHeading variants={sectionHeadingVariants}>
            What the new{" "}
            <span className="gradient-text">homepage is organizing</span>
          </SectionHeading>
          <m.div
            variants={sectionLineVariants}
            className="accent-line mx-auto mt-5 origin-center"
          />
          <m.p
            variants={sectionItemVariants}
            className="mt-5 font-body text-base text-muted max-w-3xl mx-auto leading-7"
          >
            The homepage now introduces Apex through service structure,
            specialty coverage, and next-step clarity instead of relying on
            unsupported superlatives.
          </m.p>
        </m.div>

        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionCardsContainerVariants}
          className="grid gap-6 lg:grid-cols-3"
        >
          {capabilities.map((cap) => (
            <m.div
              key={cap.title}
              variants={sectionCardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-500 hover:border-accent/20 hover:shadow-xl hover:shadow-primary/6"
            >
              <div
                className={`absolute left-0 right-0 top-0 h-1 bg-linear-to-r ${cap.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${cap.color} text-white shadow-lg`}
              >
                <cap.icon className="h-7 w-7" aria-hidden="true" />
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {cap.title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed mb-6">
                {cap.description}
              </p>

              <ul className="space-y-3 mb-6">
                {cap.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle
                      className="h-4 w-4 mt-0.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm text-muted leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={cap.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors duration-300"
              >
                Explore this area
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
