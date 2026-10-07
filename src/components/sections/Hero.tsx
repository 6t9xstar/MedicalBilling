"use client";

import { useRef } from "react";
import { media } from "@/lib/media";
import Link from "next/link";
import Image from "next/image";
import { m, useInView } from "framer-motion";
import { ArrowRight, CirclePlay, ShieldCheck } from "lucide-react";
import { fadeInUpClean, staggerContainer } from "@/lib/animations";
import CtaLink from "@/components/ui/CtaLink";
import { services } from "@/data/services";
import { specialtyPages } from "@/data/specialtyPages";

const proofPoints = [
  { value: String(services.length), label: "core service pages" },
  { value: String(specialtyPages.length), label: "specialty landing pages" },
  { value: "8", label: "resource sections" },
  { value: "4", label: "conversion paths" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden bg-white pt-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_64%,#f3f9ff_100%)]" />
      <div
        className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,rgba(239,247,255,0)_0%,rgba(216,236,255,0.78)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 hidden h-full w-[45%] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(231,243,255,0.78)_100%)] lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100dvh-116px)] w-full max-w-7xl grid-cols-1 items-center gap-6 px-4 pb-0 pt-8 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pt-0">
        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-20 max-w-2xl pb-8 lg:pb-12"
        >
          <m.p
            variants={fadeInUpClean}
            className="mb-4 text-sm font-extrabold uppercase text-primary sm:text-base"
          >
            Medical Billing & Revenue Cycle Support
          </m.p>

          <m.h1
            variants={fadeInUpClean}
            className="font-heading text-[3.15rem] font-extrabold leading-[0.97] text-muted sm:text-6xl lg:text-[5.2rem]"
          >
            Bring more clarity
            <span className="block text-primary-dark">
            </span>
          </m.h1>

          <m.p
            variants={fadeInUpClean}
            className="mt-8 max-w-[39rem] text-base leading-8 text-slate-600 sm:text-lg"
          >
            Apex Precision Billing is rebuilding around the service functions
            physician groups actually evaluate: medical billing, revenue cycle
            management, coding coordination, denials, AR recovery, enrollment,
            and front-end revenue cycle workflows.
          </m.p>

          <m.div
            variants={fadeInUpClean}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <CtaLink
              href="/schedule-consultation"
              className="rounded-md font-extrabold shadow-xl shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-primary/30 active:translate-y-0"
            >
              Schedule a consultation
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </CtaLink>
            <Link
              href="/free-billing-audit"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-white px-7 py-3.5 text-sm font-extrabold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-lg hover:shadow-primary/10 active:translate-y-0"
            >
              <CirclePlay className="h-4 w-4" aria-hidden="true" />
              Request a billing audit
            </Link>
          </m.div>

          <m.div variants={fadeInUpClean} className="mt-6">
            <Link
              href="/why-apex"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-accent"
            >
              See how Apex is structuring its new service model.
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </m.div>

          <m.div
            variants={fadeInUpClean}
            className="mt-9 grid max-w-[39rem] grid-cols-4 border-y border-border/80"
          >
            {proofPoints.map((point) => (
              <div
                key={point.label}
                className="border-r border-border/80 py-4 pr-4 last:border-r-0 sm:pr-6"
              >
                <p className="font-heading text-2xl font-extrabold text-primary-dark sm:text-3xl">
                  {point.value}
                </p>
                <p className="mt-1 text-xs font-semibold leading-snug text-muted">
                  {point.label}
                </p>
              </div>
            ))}
          </m.div>
        </m.div>

        <m.div
          initial={{ opacity: 0, x: 42 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 42 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 min-h-[360px] self-end sm:min-h-[520px] lg:min-h-[calc(100dvh-116px)]"
        >
          <div
            className="absolute bottom-0 left-1/2 h-[72%] w-[86%] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(11,99,206,0)_0%,rgba(11,99,206,0.09)_100%)]"
            aria-hidden="true"
          />
          <Image
            src={media("/images/doctoriPadGuy.webp")}
            alt="Healthcare professional reviewing billing or practice workflow information"
            width={800}
            height={1089}
            priority
            sizes="(min-width: 1024px) 48vw, 92vw"
            className="absolute bottom-0 left-1/2 h-[390px] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_34px_42px_rgba(8,48,111,0.16)] sm:h-[560px] lg:left-[53%] lg:h-[min(82vh,760px)]"
          />

          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{
              delay: 0.45,
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute bottom-8 left-2 hidden max-w-[15rem] rounded-md border border-primary/10 bg-white/92 p-4 shadow-2xl shadow-primary/15 backdrop-blur-xl sm:block lg:bottom-20 lg:left-0"
          >
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-primary">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Workflow-first structure
            </div>
            <p className="mt-2 text-sm font-semibold leading-5 text-slate-700">
              Clear service pages, specialty routes, and conversion paths for
              practices evaluating billing support.
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
