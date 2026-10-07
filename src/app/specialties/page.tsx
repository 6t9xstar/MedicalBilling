"use client";

import { useState, useMemo } from "react";
import { media } from "@/lib/media";
import Link from "next/link";
import { m } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Search, Sparkles, Stethoscope, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";
import JsonLd from "@/components/ui/JsonLd";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { specialties } from "@/data/specialties";
import { specialtyPages, getSpecialtyPageByName } from "@/data/specialtyPages";
import { services } from "@/data/services";
import { getIcon } from "@/lib/icons";
import {
  buildBreadcrumbList,
  buildCollectionPageSchema,
  buildItemList,
} from "@/lib/schema";
import {
  fadeInUpClean,
  staggerContainer,
  staggerContainerFast,
  scaleInLight,
  usePrefersReducedMotion,
} from "@/lib/animations";

export default function SpecialtiesPage() {
  const [query, setQuery] = useState("");
  const reducedMotion = usePrefersReducedMotion();

  const totalSpecialties = useMemo(
    () => specialties.reduce((acc, g) => acc + g.specialties.length, 0),
    [],
  );

  const filteredSpecialties = useMemo(() => {
    const all = specialties.flatMap((g) => g.specialties);
    if (!query.trim()) return all;
    const q = query.toLowerCase();
    return all.filter((s) => s.name.toLowerCase().includes(q));
  }, [query]);

  const schema = [
    buildBreadcrumbList([{ name: "Home", path: "/" }, { name: "Specialties" }]),
    buildCollectionPageSchema({
      name: "Medical Billing Specialties",
      description:
        "Specialty billing pages for physician groups that want a more relevant clinical and operational billing context.",
      path: "/specialties",
    }),
    buildItemList({
      name: "Specialty billing pages",
      items: specialtyPages.map((page) => ({
        name: page.title,
        path: `/specialties/${page.slug}`,
        description: page.metaDescription,
      })),
    }),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <JsonLd data={schema} />
        {/* Hero */}
        <section className="relative flex min-h-[56dvh] items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={media("/images/claim.webp")}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary-dark/45 via-primary/40 to-primary/35" />
            <div
              aria-hidden="true"
              className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/6 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-32 left-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <m.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <m.div variants={fadeInUpClean}>
                <Breadcrumbs
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Specialties" },
                  ]}
                />
              </m.div>

              <m.span
                variants={fadeInUpClean}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm"
              >
                <Stethoscope className="h-3.5 w-3.5" aria-hidden="true" />
                Medical Billing by Specialty
              </m.span>

              <m.h1
                variants={fadeInUpClean}
                className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-[1.06] tracking-tight text-white [text-shadow:0_2px_14px_rgba(8,48,111,0.5)] sm:text-5xl lg:text-6xl"
              >
                Specialty billing pages for{" "}
                <span className="text-accent">
                  {totalSpecialties} practice types
                </span>
              </m.h1>

              <m.div
                variants={fadeInUpClean}
                className="mt-5 h-1 w-20 rounded-full bg-linear-to-r from-accent to-accent-light/50"
                aria-hidden="true"
              />

              <m.p
                variants={fadeInUpClean}
                className="mt-5 max-w-2xl font-body text-base leading-relaxed text-white/80 sm:text-lg"
              >
                Browse {totalSpecialties} dedicated specialty billing pages —
                each built so physicians and practice leaders can review
                billing support in a more relevant clinical and operational
                context.
              </m.p>

              <m.div
                variants={fadeInUpClean}
                className="mt-7 flex flex-wrap gap-4"
              >
                <a
                  href="#directory"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary-dark shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Browse specialties
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/70 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Talk to an expert
                </Link>
              </m.div>

              <m.div
                variants={fadeInUpClean}
                className="mt-8 grid max-w-lg grid-cols-2 gap-4"
              >
                <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-center backdrop-blur-sm">
                  <p className="font-heading text-3xl font-extrabold text-white">
                    <AnimatedCounter target={totalSpecialties} />
                  </p>
                  <p className="mt-1 font-body text-[11px] font-semibold uppercase tracking-wider text-white/70">
                    Specialties
                  </p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-center backdrop-blur-sm">
                  <p className="font-heading text-3xl font-extrabold text-white">
                    <AnimatedCounter target={services.length} />
                  </p>
                  <p className="mt-1 font-body text-[11px] font-semibold uppercase tracking-wider text-white/70">
                    Services
                  </p>
                </div>
              </m.div>
            </m.div>
          </div>

          {/* Scroll cue */}
          <m.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            href="#directory"
            aria-label="Browse the specialty directory"
            className="absolute bottom-5 right-8 z-10 hidden flex-col items-center gap-1.5 text-white/60 transition-colors hover:text-white lg:flex"
          >
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.22em]">
              Browse directory
            </span>
            <m.span
              animate={reducedMotion ? { y: 0 } : { y: [0, 6, 0] }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </m.span>
          </m.a>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
        </section>

        {/* Specialty-Focused Billing Services */}
        <section
          id="directory"
          className="section-generous overflow-hidden bg-background"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainerFast}
              className="mx-auto max-w-3xl text-center"
            >
              <m.h2
                variants={fadeInUpClean}
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
              >
                <span className="gradient-text">Specialty-Focused</span>{" "}
                Billing Services
              </m.h2>
              <m.div
                variants={fadeInUpClean}
                className="accent-line mx-auto mt-5"
              />
              <m.p
                variants={fadeInUpClean}
                className="mt-5 font-body text-base text-muted sm:text-lg"
              >
                We offer billing services across {totalSpecialties} specialties
                to maximize practice revenues.
              </m.p>
            </m.div>

            {/* Search */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainerFast}
              className="mx-auto mt-9 max-w-xl"
            >
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search ${totalSpecialties} specialties...`}
                  className="w-full rounded-2xl border border-border bg-white py-4 pl-12 pr-16 font-body text-base text-foreground shadow-sm transition-all duration-300 placeholder:text-muted/60 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  aria-label="Search medical specialties"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-primary transition-colors hover:text-accent"
                    aria-label="Clear search"
                  >
                    Clear
                  </button>
                )}
              </div>
              <m.p
                variants={fadeInUpClean}
                className="mt-3 text-center font-body text-sm text-muted"
                aria-live="polite"
              >
                {query
                  ? `${filteredSpecialties.length} ${filteredSpecialties.length === 1 ? "specialty" : "specialties"} found`
                  : `${totalSpecialties} specialties · ${specialtyPages.length} billing pages`}
              </m.p>
            </m.div>

            {/* Flat icon grid */}
            {filteredSpecialties.length > 0 ? (
              <m.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={staggerContainerFast}
                className="mt-10 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {filteredSpecialties.map((spec) => {
                  const Icon = getIcon(spec.icon);
                  const specialtyPage = getSpecialtyPageByName(spec.name);
                  const content = (
                    <>
                      <Icon
                        className="h-8 w-8 shrink-0 text-muted/70 transition-colors duration-200 group-hover:text-primary"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 flex-1 font-body text-sm font-medium leading-snug text-foreground transition-colors duration-200 group-hover:text-primary sm:text-base">
                        {spec.name}
                      </span>
                    </>
                  );

                  if (specialtyPage) {
                    return (
                      <m.li key={spec.name} variants={scaleInLight}>
                        <Link
                          href={`/specialties/${specialtyPage.slug}`}
                          className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                          {content}
                        </Link>
                      </m.li>
                    );
                  }

                  return (
                    <m.li key={spec.name} variants={scaleInLight}>
                      <div className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-primary/5">
                        {content}
                      </div>
                    </m.li>
                  );
                })}
              </m.ul>
            ) : (
              <m.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                className="mx-auto mt-10 max-w-xl rounded-3xl border border-border bg-white px-6 py-12 text-center"
              >
                <Search
                  className="mx-auto h-8 w-8 text-muted/60"
                  aria-hidden="true"
                />
                <p className="mt-4 font-body text-lg text-muted">
                  No specialties found for &ldquo;{query}&rdquo;
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-4 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Clear search
                </button>
              </m.div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="section-standard overflow-hidden bg-background-subtle">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainerFast}
            >
              <m.span
                variants={fadeInUpClean}
                className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Not Listed?
              </m.span>
              <m.h2
                variants={fadeInUpClean}
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Don&apos;t See Your Specialty?
              </m.h2>
              <m.p
                variants={fadeInUpClean}
                className="mx-auto mt-4 max-w-xl font-body text-base text-muted sm:text-lg"
              >
                We may still support your practice type even if it is not yet a
                featured landing page. Contact us to talk through your specialty
                and billing workflow.
              </m.p>
              <m.div
                variants={scaleInLight}
                className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <CtaLink href="/contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </CtaLink>
                <CtaLink href="/services" variant="outline">
                  View all services
                </CtaLink>
              </m.div>
            </m.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
