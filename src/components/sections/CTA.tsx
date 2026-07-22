"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { fadeInUpClean, fadeInLeft } from "@/lib/animations";

const benefits = [
  "Start with a billing audit, consultation, quote request, or sales conversation",
  "Use service pages to identify the workflow issue you want to discuss first",
  "Use specialty pages and resources to review fit before you reach out",
];

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-generous overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          className="relative pt-10 sm:pt-12"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-36 w-36 -translate-x-1/2 sm:h-44 sm:w-44">
            <div className="absolute inset-0 rounded-full bg-[#1593d8]" />
            <div
              className="absolute inset-[10%] rounded-full opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.85) 0 2px, transparent 2px 12px)",
              }}
            />
            <div className="absolute inset-[8%] overflow-hidden rounded-full border-4 border-white/25 shadow-2xl shadow-black/20">
              <Image
                src="/images/doctor-circle.jpg"
                alt="Healthcare professional portrait for Apex Precision Billing"
                fill
                sizes="176px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid items-center gap-6 rounded-3xl bg-linear-to-r from-primary-dark via-primary to-accent p-8 pt-18 sm:p-10 sm:pt-20 md:p-12 md:pt-20 lg:grid-cols-2 lg:gap-8">
            <m.div variants={fadeInLeft}>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to start the right conversation?
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-white/80 sm:text-lg">
                Apex now has clearer next steps for practices that want to
                evaluate billing support without jumping straight into a generic
                contact path.
              </p>
              <ul className="mt-6 space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-white/75"
                  >
                    <CheckCircle
                      className="h-4 w-4 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-white/70">
                  Follow Apex:
                </span>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/16"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.62a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
                  </svg>
                  Instagram
                </a>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/16"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </m.div>

            <m.div
              variants={fadeInUpClean}
              className="flex flex-col gap-4 lg:items-end"
            >
              <Link
                href="/schedule-consultation"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl shadow-black/10 transition-all duration-300 hover:bg-gray-50 hover:shadow-2xl active:scale-[0.97] sm:w-auto"
              >
                Schedule a consultation
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/free-billing-audit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/25 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:bg-white/8 active:scale-[0.97] sm:w-auto"
              >
                Request a billing audit
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-8 py-4 text-base font-semibold text-white/90 transition-all duration-300 hover:bg-white/8 active:scale-[0.97] sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </a>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
