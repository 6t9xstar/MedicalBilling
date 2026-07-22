"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Stethoscope,
  Search,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";
import JsonLd from "@/components/ui/JsonLd";
import { specialties } from "@/data/specialties";
import { getSpecialtyPageByName, specialtyPages } from "@/data/specialtyPages";
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
} from "@/lib/animations";

export default function SpecialtiesPage() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleGroup = (letter: string) => {
    setExpanded((prev) =>
      prev.includes(letter)
        ? prev.filter((l) => l !== letter)
        : [...prev, letter],
    );
  };

  const filtered = useMemo(() => {
    if (!query.trim()) return specialties;
    const q = query.toLowerCase();
    return specialties
      .map((group) => ({
        ...group,
        specialties: group.specialties.filter((s) =>
          s.name.toLowerCase().includes(q),
        ),
      }))
      .filter((g) => g.specialties.length > 0);
  }, [query]);

  const totalSpecialties = useMemo(
    () => specialties.reduce((acc, g) => acc + g.specialties.length, 0),
    [],
  );

  const schema = [
    buildBreadcrumbList([{ name: "Home", path: "/" }, { name: "Specialties" }]),
    buildCollectionPageSchema({
      name: "Medical Billing Specialties",
      description:
        "Specialty billing pages for physician groups that want a more relevant clinical and operational billing context.",
      path: "/specialties",
    }),
    buildItemList({
      name: "Featured specialty billing pages",
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
        <section className="relative flex min-h-[50dvh] items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/claim.webp"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary-dark/95 via-primary/85 to-primary/70" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Breadcrumbs
                items={[{ label: "Home", href: "/" }, { label: "Specialties" }]}
              />
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
                Specialty billing pages for{" "}
                <span className="text-accent">{totalSpecialties}+ practice types</span>
              </h1>
              <p className="font-body text-lg text-white/80 max-w-2xl mt-4">
                Apex now includes featured specialty landing pages so physicians
                and practice leaders can review billing support in a more
                relevant clinical and operational context.
              </p>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="mt-8 grid grid-cols-3 gap-4 max-w-2xl"
            >
              <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-center">
                <p className="font-heading text-2xl font-bold text-white">{totalSpecialties}</p>
                <p className="font-body text-xs text-white/70">Specialties</p>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-center">
                <p className="font-heading text-2xl font-bold text-white">22</p>
                <p className="font-body text-xs text-white/70">Services</p>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-center">
                <p className="font-heading text-2xl font-bold text-white">52</p>
                <p className="font-body text-xs text-white/70">Billing Pages</p>
              </div>
            </m.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
        </section>

        {/* Search + Specialties */}
        <section className="section-standard bg-background overflow-hidden">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial="hidden"
              animate="visible"
              variants={staggerContainerFast}
              className="mb-6"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted pointer-events-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search ${totalSpecialties} specialties...`}
                  className="w-full rounded-2xl border border-border bg-white py-4 pl-12 pr-4 font-body text-base text-foreground placeholder:text-muted/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 shadow-sm"
                  aria-label="Search medical specialties"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-primary hover:text-accent transition-colors"
                    aria-label="Clear search"
                  >
                    Clear
                  </button>
                )}
              </div>
              {query && (
                <m.p
                  variants={fadeInUpClean}
                  className="mt-3 font-body text-sm text-muted"
                >
                  {filtered.reduce((acc, g) => acc + g.specialties.length, 0)}{" "}
                  specialty
                  {filtered.reduce(
                    (acc, g) => acc + g.specialties.length,
                    0,
                  ) !== 1
                    ? "ies"
                    : "y"}{" "}
                  found
                </m.p>
              )}
            </m.div>

            <m.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-3"
            >
              {(query ? filtered : specialties).map((group) => (
                <m.div
                  key={group.letter}
                  variants={fadeInUpClean}
                  className="rounded-2xl border border-border bg-white overflow-hidden transition-all duration-300 hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleGroup(group.letter)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-muted/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-expanded={expanded.includes(group.letter)}
                    aria-controls={`group-${group.letter}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-sm">
                        <span className="font-heading text-base font-bold text-white">
                          {group.letter}
                        </span>
                      </div>
                      <div>
                        <span className="font-heading text-sm font-semibold text-foreground">
                          {group.specialties.length} Specialty
                          {group.specialties.length !== 1 ? "ies" : "y"}
                        </span>
                        <div className="flex gap-1 mt-1">
                          {Array.from({
                            length: Math.min(group.specialties.length, 5),
                          }).map((_, j) => (
                            <div
                              key={j}
                              className="h-1.5 w-1.5 rounded-full bg-primary/30"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <m.div
                      animate={{
                        rotate: expanded.includes(group.letter) ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-5 w-5 text-muted" />
                    </m.div>
                  </button>

                  {expanded.includes(group.letter) && (
                    <m.div
                      id={`group-${group.letter}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1] as const,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 px-6 pb-5 pt-2 border-t border-border">
                        {group.specialties.map((spec) => {
                          const specialtyPage = getSpecialtyPageByName(
                            spec.name,
                          );

                          if (specialtyPage) {
                            return (
                              <Link
                                key={spec.name}
                                href={`/specialties/${specialtyPage.slug}`}
                                className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                              >
                                <Stethoscope className="h-3.5 w-3.5 text-primary/50 shrink-0" />
                                <span className="font-body text-sm text-muted">
                                  {spec.name}
                                </span>
                              </Link>
                            );
                          }

                          return (
                            <div
                              key={spec.name}
                              className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-primary/5"
                            >
                              <Stethoscope className="h-3.5 w-3.5 text-primary/50 shrink-0" />
                              <span className="font-body text-sm text-muted">
                                {spec.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </m.div>
                  )}
                </m.div>
              ))}

              {filtered.length === 0 && (
                <m.div variants={fadeInUpClean} className="text-center py-8">
                  <p className="font-body text-lg text-muted">
                    No specialties found for &ldquo;{query}&rdquo;
                  </p>
                  <button
                    onClick={() => setQuery("")}
                    className="mt-4 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Clear search
                  </button>
                </m.div>
              )}
            </m.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-standard bg-background-subtle overflow-hidden">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainerFast}
            >
              <m.span
                variants={fadeInUpClean}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-3"
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
                className="mt-4 font-body text-base text-muted sm:text-lg max-w-xl mx-auto"
              >
                We may still support your practice type even if it is not yet a
                featured landing page. Contact us to talk through your specialty
                and billing workflow.
              </m.p>
              <m.div
                variants={fadeInUpClean}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <CtaLink href="/contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
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
