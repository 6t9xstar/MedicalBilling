"use client";

import { useRef } from "react";
import { media } from "@/lib/media";
import Link from "next/link";
import Image from "next/image";
import { m, useInView } from "framer-motion";
import {
  ArrowRight,
  Star,
  ClipboardList,
  Search,
  ShieldCheck,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const serviceCards = [
  {
    icon: Search,
    title: "Denial Management",
    slug: "/services/denial-management",
  },
  {
    icon: ShieldCheck,
    title: "Credentialing & Enrollment",
    slug: "/services/credentialing-enrollment",
  },
  {
    icon: ClipboardList,
    title: "Eligibility Verification",
    slug: "/services/eligibility-verification",
  },
];

export default function CSRServices() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-8 md:py-12 bg-white overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-6"
        >
          <m.span
            variants={fadeInUp}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3"
          >
            Service focus
          </m.span>
          <m.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            Apex is organizing its site around{" "}
            <span className="gradient-text">core billing functions</span>
          </m.h2>
          <m.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-3xl text-base text-muted sm:text-lg"
          >
            Instead of bundling everything into generic marketing copy, these
            pages explain the individual revenue cycle functions practices
            actually need help with.
          </m.p>
          <m.div variants={fadeInUp} className="accent-line mx-auto mt-4" />
        </m.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <m.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="relative col-span-1 overflow-hidden rounded-2xl lg:col-span-2"
          >
            <Link
              href="/services/medical-billing"
              className="group block h-full"
            >
              <div className="relative flex h-full min-h-80 flex-col bg-linear-to-br from-secondary to-primary p-8 md:p-10">
                <Image
                  src={media("/images/aprecisionbillinginc.webp")}
                  alt="Apex Precision Billing team providing medical billing services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-br from-secondary/96 via-primary/84 to-primary-dark/76" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_42%)]" />

                <svg
                  className="pointer-events-none absolute bottom-0 left-0 z-0 h-36 w-full opacity-15"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,100 C150,200 350,0 500,100 L500,150 L0,150 Z"
                    fill="white"
                  />
                  <path
                    d="M0,120 C150,220 350,20 500,120 L500,150 L0,150 Z"
                    fill="white"
                    opacity="0.5"
                  />
                </svg>

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                    <ClipboardList className="h-6 w-6 text-white" />
                  </div>
                  <div className="max-w-lg rounded-2xl border border-white/14 bg-slate-950/16 p-5 backdrop-blur-[2px] sm:max-w-[60%]">
                    <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                      Medical Billing Services
                    </h3>
                    <p className="mt-2 font-body text-sm text-blue-50/88">
                      Start with the core billing page to understand how Apex is
                      framing claims, follow-up, posting, and operational
                      visibility.
                    </p>
                  </div>
                  <div className="mt-auto pt-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-dark transition-all duration-300 group-hover:bg-gray-100 group-hover:scale-110">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </m.div>

          {serviceCards.map((service, i) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="col-span-1"
            >
              <Link href={service.slug} className="group block h-full">
                <div className="relative flex h-full min-h-50 flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-accent/20 group-hover:-translate-y-1">
                  <div className="mb-auto">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-all duration-300 group-hover:bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-muted transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="mt-10 text-center"
        >
          <p className="font-body text-base text-muted mb-4">
            A clearer website starts by naming the actual billing functions
            physicians and practice leaders evaluate.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700">
            <Star className="h-4 w-4 fill-emerald-600 text-emerald-600" />
            Phase 1 services now scaffolded
          </span>
        </m.div>
      </div>
    </section>
  );
}
