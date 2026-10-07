"use client";

import Link from "next/link";
import { media } from "@/lib/media";
import Image from "next/image";
import type { ReactNode } from "react";
import { m } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ShieldCheck,
  BookOpen,
  Stethoscope,
  ChevronRight,
} from "lucide-react";
import {
  legalLinks,
  resourceLinks,
  serviceLinks,
  specialtyLinks,
  companyLinks,
  solutionsFooterLinks,
  moreCollectionsLinks,
} from "@/data/navigation";
import { SITE } from "@/lib/constants";
import { fadeInUpClean, staggerContainer } from "@/lib/animations";

/** Build-time constant — recomputed per build, not per render. */
const CURRENT_YEAR = new Date().getFullYear();

type SocialKey = keyof typeof SITE.social;

const socials: { key: SocialKey; label: string }[] = [
  { key: "linkedin", label: "LinkedIn" },
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
  { key: "alignable", label: "Alignable" },
];

const socialIcons: Record<SocialKey, ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.62a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  alignable: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5 L3 21.5 L7.2 21.5 L8.7 18 L15.3 18 L16.8 21.5 L21 21.5 L12 2.5 Z M9.85 14.8 L12 9.7 L14.15 14.8 Z" />
    </svg>
  ),
};

const trustItems = [
  { icon: ShieldCheck, value: "HIPAA", label: "Focused workflows" },
  { icon: Stethoscope, value: "Specialty", label: "Aware support" },
  { icon: BookOpen, value: "Practical", label: "Guides & references" },
];

const gridTextureStyle: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
  backgroundSize: "44px 44px",
  maskImage: "linear-gradient(to bottom, black, transparent 88%)",
  WebkitMaskImage: "linear-gradient(to bottom, black, transparent 88%)",
};

function scrollToTop() {
  if (typeof window === "undefined") return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches;
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-5 font-heading text-xs font-bold uppercase tracking-wider text-accent-light">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1.5 rounded font-body text-sm text-white/70 transition-all duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light"
            >
              <span className="h-0.5 w-0 rounded-full bg-accent-light transition-all duration-200 group-hover:w-2" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="gradient-dark relative overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      {/* Top accent hairline */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/70 to-transparent"
        aria-hidden="true"
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-90"
        style={gridTextureStyle}
        aria-hidden="true"
      />
      {/* Glow orbs */}
      <div
        className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-primary/30 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-0 pt-12 sm:px-6 lg:px-8">
        {/* Top CTA card */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="relative mb-12 overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-8 backdrop-blur-xl sm:p-10"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-[80px]"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <m.div variants={fadeInUpClean} className="max-w-xl">
              <h3 className="mb-2 font-heading text-xl font-bold text-white">
                Start with a clearer billing conversation
              </h3>
              <p className="font-body text-sm text-white/70">
                Request an audit, schedule a consultation, or contact Apex
                directly to discuss your workflow priorities.
              </p>
            </m.div>
            <m.div
              variants={fadeInUpClean}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/free-billing-audit"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Free Billing Audit
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/schedule-consultation"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-primary-dark active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Schedule Consultation
              </Link>
            </m.div>
          </div>
        </m.div>

        {/* Main grid: brand column + 6 link groups */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[1.4fr_1fr_1fr_1fr_1fr_1fr_1fr]"
        >
          {/* Brand + contact column */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-1">
            <Link
              href="/"
              aria-label="Apex Precision Billing — Home"
              className="group mb-5 block w-fit rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light"
            >
              <Image
                src={media("/images/footer-logo.png")}
                alt="Apex Precision Billing Inc"
                width={891}
                height={349}
                sizes="(min-width: 1280px) 150px, (min-width: 640px) 140px, 130px"
                className="h-auto w-32 brightness-100 transition-all duration-300 group-hover:brightness-110 sm:w-36"
              />
            </Link>

            <p className="mb-1 font-heading text-sm font-semibold text-accent-light">
              {SITE.tagline}
            </p>

            <p className="mb-6 max-w-sm font-body text-sm leading-relaxed text-white/70">
              Specialty-aware medical billing, coding, and revenue cycle
              support that helps physician practices collect faster, reduce
              denials, and stay focused on patients.
            </p>

            <div className="mb-6 flex flex-wrap gap-3">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-3 py-2"
                >
                  <item.icon className="h-3.5 w-3.5 text-accent-light" />
                  <div>
                    <span className="font-heading text-xs font-bold text-white">
                      {item.value}
                    </span>
                    <span className="ml-1 font-body text-[10px] text-white/60">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <ul
              className="mb-6 flex items-center gap-3"
              aria-label="Apex Precision Billing on social media"
            >
              {socials.map((social) => (
                <li key={social.key}>
                  <m.a
                    href={SITE.social[social.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Apex Precision Billing on ${social.label} (opens in a new tab)`}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/8 text-white/80 transition-all duration-200 hover:bg-white hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
                  >
                    {socialIcons[social.key]}
                  </m.a>
                </li>
              ))}
            </ul>

            <address className="not-italic">
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="group flex items-center gap-3 font-body text-sm text-white/70 transition-all duration-200 hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/8 transition-colors group-hover:bg-white/15">
                      <Mail className="h-4 w-4 text-accent-light" />
                    </span>
                    <span className="break-all">{SITE.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="group flex items-center gap-3 font-body text-sm text-white/70 transition-all duration-200 hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/8 transition-colors group-hover:bg-white/15">
                      <Phone className="h-4 w-4 text-accent-light" />
                    </span>
                    <span>{SITE.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 font-body text-sm text-white/70 transition-all duration-200 hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/8 transition-colors group-hover:bg-white/15">
                      <MapPin className="h-4 w-4 text-accent-light" />
                    </span>
                    <span>{SITE.address}</span>
                  </a>
                </li>
              </ul>
            </address>
          </div>

          {/* Link groups */}
          <nav aria-label="Footer" className="contents">
            <FooterLinkGroup title="Services" links={serviceLinks} />
            <FooterLinkGroup title="Specialties" links={specialtyLinks} />
            <FooterLinkGroup title="Resources" links={resourceLinks} />
            <FooterLinkGroup
              title="Solutions"
              links={solutionsFooterLinks}
            />
            <FooterLinkGroup
              title="More Collections"
              links={moreCollectionsLinks}
            />
            <FooterLinkGroup title="Company" links={companyLinks} />
          </nav>
        </m.div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-body text-xs text-white/50">
              &copy; {CURRENT_YEAR} {SITE.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/8 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-primary-dark active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
              >
                <ArrowUp className="h-4 w-4" />
              </button>

              <span aria-hidden="true" className="text-white/20">
                |
              </span>

              <ul
                className="flex flex-wrap items-center gap-x-3 gap-y-2"
                aria-label="Legal"
              >
                {legalLinks.map((link, index) => (
                  <li
                    key={link.href}
                    className="flex items-center gap-3 whitespace-nowrap"
                  >
                    {index > 0 && (
                      <span aria-hidden="true" className="text-white/20">
                        &middot;
                      </span>
                    )}
                    <Link
                      href={link.href}
                      className="font-body text-xs text-white/50 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
