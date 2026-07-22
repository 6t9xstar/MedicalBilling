"use client";

import { useRef, createElement } from "react";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { getIcon } from "@/lib/icons";
import CtaLink from "@/components/ui/CtaLink";
import {
  fadeInUpClean,
  staggerContainerFast,
  scaleInLight,
} from "@/lib/animations";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = services[0];
  const regular = services.slice(1, 5);
  const highlights = [
    { value: `${services.length}`, label: "Core services" },
    { value: "Workflow-first", label: "Operational focus" },
    { value: "Audit to action", label: "Next-step paths" },
  ];

  return (
    <section
      ref={ref}
      className="section-generous relative overflow-hidden bg-background"
    >
      <div
        className="absolute inset-0 bg-linear-to-b from-background-subtle via-transparent to-background"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/6 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainerFast}
          className="mx-auto mb-6 max-w-3xl text-center"
        >
          <m.span
            variants={fadeInUpClean}
            className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
          >
            What We Offer
          </m.span>
          <m.h2
            variants={fadeInUpClean}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Core services for a{" "}
            <span className="gradient-text">stronger revenue cycle</span>
          </m.h2>
          <m.p
            variants={fadeInUpClean}
            className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
          >
            Explore the core billing, coding, RCM, and operational support
            services Apex is building to help practices improve visibility,
            reduce rework, and move claims more confidently.
          </m.p>
          <m.div
            variants={fadeInUpClean}
            className="accent-line mx-auto mt-5 origin-center"
          />
          <m.div
            variants={fadeInUpClean}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-white/85 px-4 py-3 text-left shadow-sm shadow-black/5 backdrop-blur"
              >
                <div className="font-heading text-base font-bold text-foreground">
                  {item.value}
                </div>
                <div className="text-xs font-medium uppercase tracking-wide text-muted">
                  {item.label}
                </div>
              </div>
            ))}
          </m.div>
        </m.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <m.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={scaleInLight}
            className="lg:col-span-2"
          >
            <Link
              href={`/services/${featured.slug}`}
              className="group block h-full"
            >
              <div className="relative grid h-full min-h-90 overflow-hidden rounded-[28px] bg-linear-to-br from-primary-dark via-primary to-accent p-8 shadow-xl shadow-primary/10 md:grid-cols-[1.15fr_0.85fr] md:p-10">
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-white/8 blur-[60px]" />
                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-accent/10 blur-[50px]" />
                <div className="absolute inset-y-0 right-0 hidden w-px bg-white/10 md:block" />

                <div className="relative z-10 flex flex-col justify-between">
                  <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                      Featured service
                    </div>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                      {createElement(getIcon(featured.icon), {
                        className: "h-7 w-7 text-white",
                      })}
                    </div>
                    <h3 className="max-w-lg font-heading text-2xl font-bold text-white md:text-3xl">
                      {featured.title}
                    </h3>
                    <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-white/80 sm:text-base">
                      {featured.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {featured.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 mt-8">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary-dark transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                <div className="relative mt-8 md:mt-0 md:pl-8">
                  <div className="relative flex h-full min-h-55 flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />

                    <div className="relative z-10 flex items-center justify-between rounded-2xl border border-white/12 bg-white/8 px-4 py-3">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                          Revenue visibility
                        </div>
                        <div className="mt-1 text-lg font-bold text-white">
                          Workflow-first support
                        </div>
                      </div>
                      <div className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white/85">
                        Core service
                      </div>
                    </div>

                    <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
                      {[
                        "Claims submitted with cleaner handoffs",
                        "Payer follow-up aligned to process",
                        "Patient balance coordination",
                        "Reporting built for next actions",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/12 bg-white/8 p-4 text-sm leading-relaxed text-white/88"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="relative z-10 mt-5 rounded-2xl border border-white/12 bg-white/12 p-4 text-white backdrop-blur-md">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                        Built for clarity
                      </div>
                      <div className="mt-2 grid grid-cols-3 gap-3">
                        <div>
                          <div className="text-lg font-bold text-white">3</div>
                          <div className="text-xs text-white/70">
                            Key workflow priorities
                          </div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">1</div>
                          <div className="text-xs text-white/70">
                            Clear billing path
                          </div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">
                            24/7
                          </div>
                          <div className="text-xs text-white/70">
                            Operational focus
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </m.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {regular.map((service) => (
              <m.div
                key={service.slug}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={scaleInLight}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-xl hover:shadow-primary/8">
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/6 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10 mb-4 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 transition-all duration-300 group-hover:bg-accent/10">
                        {createElement(getIcon(service.icon), {
                          className:
                            "h-5 w-5 text-primary transition-colors duration-300 group-hover:text-accent",
                        })}
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background-subtle text-primary transition-all duration-300 group-hover:border-accent/20 group-hover:bg-accent/10 group-hover:text-accent">
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                      {service.shortTitle}
                    </h3>
                    <p className="flex-1 font-body text-sm leading-relaxed text-muted line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.features.slice(0, 1).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors duration-200 group-hover:text-accent">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </m.div>
            ))}
          </div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="mt-10 text-center"
        >
          <CtaLink
            href="/services"
            variant="outline"
            className="hover:shadow-lg"
          >
            <Sparkles className="h-4 w-4" />
            Explore all core services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </CtaLink>
        </m.div>
      </div>
    </section>
  );
}
