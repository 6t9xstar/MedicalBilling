"use client";

import { useState, useRef } from "react";
import { media } from "@/lib/media";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  Headphones,
  ArrowRight,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Compass,
  FileText,
  Info,
  Receipt,
  Megaphone,
  Settings,
  Users,
  Cog,
  TrendingUp,
  ArrowUpRight,
  Inbox,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaLink from "@/components/ui/CtaLink";
import DotPattern from "@/components/ui/DotPattern";
import GoogleMap from "@/components/ui/GoogleMap";
import { SITE, departmentEmails, type DepartmentEmail } from "@/lib/constants";
import { fadeInUpClean, staggerContainer, sectionCardVariants, sectionCardsContainerVariants } from "@/lib/animations";

const departmentIconMap: Record<
  DepartmentEmail["icon"],
  React.ComponentType<{ className?: string }>
> = {
  info: Info,
  receipt: Receipt,
  megaphone: Megaphone,
  settings: Settings,
  users: Users,
  cog: Cog,
  "trending-up": TrendingUp,
  mail: Mail,
};

type FormStatus = "idle" | "loading" | "success" | "error";

const contactOptions = [
  "Medical Billing",
  "Revenue Cycle Management",
  "Medical Coding",
  "Accounts Receivable Recovery",
  "Denial Management",
  "Credentialing & Enrollment",
  "Eligibility Verification",
  "Prior Authorization",
  "Charge Entry",
  "Payment Posting",
  "Provider Enrollment",
  "HIPAA Compliance",
  "Free Billing Audit",
  "Schedule a Consultation",
  "Request a Quote",
  "Contact Sales",
  "Other",
];

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
      company: formData.get("company") as string,
      website: formData.get("website") as string,
    };

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const contentType = res.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await res.json()
        : { message: "Unexpected response from contact endpoint" };

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Network error. Please check your connection and try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-50/30 pt-20 pb-8 sm:pt-24 sm:pb-12">
          <DotPattern />
          <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-primary/6 blur-[120px]" />
          <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-primary/4 blur-[100px]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Breadcrumbs
                items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
                tone="onLight"
              />
            </m.div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              <m.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-6">
                  Tell us where{" "}
                  <span className="text-primary">billing is slowing down</span>
                </h1>
                <p className="font-body text-base md:text-lg text-muted leading-relaxed max-w-xl mb-8">
                  Use this page to start the conversation that fits best: a core
                  service discussion, a billing audit, a consultation, a quote
                  request, or a sales conversation about your current workflow
                  and goals.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <CtaLink
                    href="#contact-form"
                    className="font-bold hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Start the conversation
                    <ArrowRight className="h-4 w-4" />
                  </CtaLink>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-border px-7 py-3.5 text-sm font-bold text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-[0.98]"
                  >
                    <FileText className="h-4 w-4" />
                    Review services
                  </Link>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-full max-w-xl overflow-hidden rounded-4xl border border-white/70 bg-white/80 shadow-2xl shadow-primary/10 backdrop-blur-sm">
                  <div className="relative aspect-square sm:aspect-[1.08/1]">
                    <Image
                      src={media("/images/contact-office.jpeg")}
                      alt="Apex Precision Billing team member welcoming a client in the office"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/72 via-slate-900/12 to-white/5" />
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-5 sm:p-6">
                    <div className="rounded-full border border-white/20 bg-slate-950/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
                      Consultative support
                    </div>
                    <div className="hidden rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-md sm:flex sm:items-center sm:gap-2">
                      <Shield className="h-3.5 w-3.5" />
                      HIPAA aware
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="rounded-3xl border border-white/60 bg-white/92 p-5 shadow-lg shadow-black/10 backdrop-blur-md sm:p-6">

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {[
                          {
                            icon: Compass,
                            title: "Right-fit guidance",
                            body: "Tell us where claims, follow-up, or visibility are getting stuck.",
                          },
                          {
                            icon: Headphones,
                            title: "Responsive follow-up",
                            body: "Reach out by form, phone, or email based on how your team prefers to connect.",
                          },
                        ].map((item) => (
                          <div
                            key={item.title}
                            className="rounded-2xl border border-border bg-background/80 p-4"
                          >
                            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/7">
                              <item.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-heading text-sm font-bold text-foreground">
                              {item.title}
                            </h3>
                            <p className="mt-1 font-body text-xs leading-5 text-muted sm:text-sm">
                              {item.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        <section
          className="section-standard bg-white overflow-hidden"
          id="contact-form"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="lg:col-span-2 space-y-6"
              >
                <m.div variants={fadeInUpClean}>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                    <Send className="h-3.5 w-3.5" />
                    Contact Information
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Choose the right starting point
                  </h2>
                  <div className="accent-line mt-4 origin-left" />
                </m.div>

                <m.div variants={fadeInUpClean} className="space-y-5">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: SITE.email,
                      href: `mailto:${SITE.email}`,
                      external: false,
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: SITE.phone,
                      href: `tel:${SITE.phoneRaw}`,
                      external: false,
                    },
                    {
                      icon: MapPin,
                      label: "Office Address",
                      value: SITE.address,
                      href: SITE.mapsUrl,
                      external: true,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            {...(item.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="font-body text-sm text-muted hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-body text-sm text-muted">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </m.div>

                <m.div
                  variants={fadeInUpClean}
                  className="grid grid-cols-3 gap-4"
                >
                  {[
                    { icon: FileText, label: "Service-first" },
                    { icon: Shield, label: "HIPAA aware" },
                    { icon: Headphones, label: "Consultative" },
                  ].map((badge) => (
                    <div
                      key={badge.label}
                      className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10 transition-shadow duration-300 hover:shadow-md cursor-default"
                    >
                      <badge.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                      <p className="font-body text-xs font-medium text-foreground">
                        {badge.label}
                      </p>
                    </div>
                  ))}
                </m.div>
              </m.div>

              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeInUpClean}
                className="lg:col-span-3"
              >
                <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                  {status === "success" && (
                    <m.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 mb-5">
                        <CheckCircle className="h-8 w-8 text-emerald-500" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                        Message sent
                      </h3>
                      <p className="font-body text-sm text-muted max-w-sm">
                        Thank you for reaching out. Apex will review your
                        inquiry and respond using the contact details you
                        provided.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-6 text-sm font-semibold text-primary hover:text-accent transition-colors"
                      >
                        Send another message
                      </button>
                    </m.div>
                  )}

                  {status !== "success" && (
                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      noValidate
                    >
                      {status === "error" && errorMessage && (
                        <m.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4"
                          role="alert"
                        >
                          <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                          <p className="font-body text-sm text-red-700">
                            {errorMessage}
                          </p>
                        </m.div>
                      )}

                      <div
                        className="absolute left-[-9999px]"
                        aria-hidden="true"
                      >
                        <label htmlFor="website">Website</label>
                        <input
                          id="website"
                          name="website"
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block font-body text-sm font-medium text-foreground mb-1.5"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Dr. John Smith"
                            maxLength={100}
                            disabled={status === "loading"}
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block font-body text-sm font-medium text-foreground mb-1.5"
                          >
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="john@practice.com"
                            disabled={status === "loading"}
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block font-body text-sm font-medium text-foreground mb-1.5"
                          >
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            disabled={status === "loading"}
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block font-body text-sm font-medium text-foreground mb-1.5"
                          >
                            Company / Practice
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Your practice name"
                            maxLength={255}
                            disabled={status === "loading"}
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block font-body text-sm font-medium text-foreground mb-1.5"
                        >
                          What would you like to discuss?
                        </label>
                        <select
                          id="service"
                          name="service"
                          disabled={status === "loading"}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50"
                        >
                          <option value="">Select an option...</option>
                          {contactOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block font-body text-sm font-medium text-foreground mb-1.5"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell Apex what part of billing is slowing down, what kind of practice you run, or which next step you want to take."
                          maxLength={5000}
                          disabled={status === "loading"}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none disabled:opacity-50"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-accent hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      <p className="text-center font-body text-xs text-muted">
                        Your information is secure and will only be used to
                        respond to your inquiry.
                      </p>
                    </form>
                  )}
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Office location + Google Map */}
        <section
          className="section-generous bg-background overflow-hidden"
          aria-labelledby="office-location-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <m.span
                variants={fadeInUpClean}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-3"
              >
                <MapPin className="h-3.5 w-3.5" />
                Visit our office
              </m.span>
              <m.h2
                id="office-location-heading"
                variants={fadeInUpClean}
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Located in{" "}
                <span className="gradient-text">
                  {SITE.addressParts.city}, {SITE.addressParts.stateName}
                </span>
              </m.h2>
              <m.div
                variants={fadeInUpClean}
                className="accent-line mt-4 origin-left"
              />
              <m.p
                variants={fadeInUpClean}
                className="mt-4 font-body text-base text-muted sm:text-lg"
              >
                Meet the team behind your claims. Our office supports physician
                practices across the United States from Colonia, NJ.
              </m.p>
            </m.div>

            <div className="mt-10 grid gap-6 lg:grid-cols-5">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="lg:col-span-2"
              >
                <m.div
                  variants={fadeInUpClean}
                  className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                    {SITE.name}
                  </h3>
                  <address className="mt-3 space-y-1 font-body text-sm not-italic text-muted">
                    <p className="font-medium text-foreground">
                      {SITE.addressParts.street}
                    </p>
                    <p>
                      {SITE.addressParts.city}, {SITE.addressParts.state}{" "}
                      {SITE.addressParts.zip}
                    </p>
                  </address>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="mt-4 inline-flex items-center gap-2 font-body text-sm text-muted transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    {SITE.phone}
                  </a>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Get Directions
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <CtaLink href="/schedule-consultation" variant="outline">
                      Schedule a visit
                    </CtaLink>
                  </div>
                  <div className="mt-auto border-t border-border pt-6">
                    <p className="font-body text-xs text-muted">
                      Serving physician practices across the United States.
                    </p>
                  </div>
                </m.div>
              </m.div>

              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeInUpClean}
                className="lg:col-span-3"
              >
                <GoogleMap />
              </m.div>
            </div>
          </div>
        </section>

        <section className="section-standard bg-background-subtle overflow-hidden">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <m.h2
                variants={fadeInUpClean}
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Prefer a dedicated route?
              </m.h2>
              <m.p
                variants={fadeInUpClean}
                className="mt-4 font-body text-base text-muted sm:text-lg max-w-2xl mx-auto"
              >
                If you already know the type of conversation you want, you can
                also go directly to one of the dedicated conversion pages below.
              </m.p>
              <m.div
                variants={fadeInUpClean}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <CtaLink href="/schedule-consultation">
                  Schedule a consultation
                </CtaLink>
                <CtaLink href="/free-billing-audit" variant="outline">
                  Free billing audit
                </CtaLink>
              </m.div>
            </m.div>
          </div>
        </section>

        <section
          className="section-standard bg-white overflow-hidden"
          aria-labelledby="department-emails-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="mx-auto max-w-3xl text-center"
            >
              <m.span
                variants={fadeInUpClean}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-3"
              >
                <Inbox className="h-3.5 w-3.5" />
                Email by department
              </m.span>
              <m.h2
                id="department-emails-heading"
                variants={fadeInUpClean}
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Pick the right inbox for your question
              </m.h2>
              <m.p
                variants={fadeInUpClean}
                className="mt-4 font-body text-base text-muted sm:text-lg max-w-2xl mx-auto"
              >
                Each address goes straight to the team that handles that kind
                of work — no manual triage, faster answers.
              </m.p>
            </m.div>

            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={sectionCardsContainerVariants}
              className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {departmentEmails.map((dept) => {
                const Icon = departmentIconMap[dept.icon];
                return (
                  <m.a
                    key={dept.key}
                    href={`mailto:${dept.email}`}
                    variants={sectionCardVariants}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`group relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                      dept.highlight
                        ? "border-primary/30 ring-1 ring-primary/15"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    {dept.highlight && (
                      <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                        Default
                      </span>
                    )}

                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <h3 className="font-heading text-base font-bold text-foreground">
                      {dept.label}
                    </h3>

                    <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                      {dept.description}
                    </p>

                    <div className="mt-5 flex items-center gap-1.5 border-t border-border pt-4">
                      <Mail className="h-3.5 w-3.5 shrink-0 text-muted" />
                      <span className="truncate font-body text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                        {dept.email}
                      </span>
                      <ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </div>
                  </m.a>
                );
              })}
            </m.div>

            <p className="mx-auto mt-10 max-w-2xl text-center font-body text-xs text-muted">
              Prefer a quick form instead?{" "}
              <a
                href="#contact-form"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Use the contact form above
              </a>{" "}
              and we&apos;ll route your message to the right team.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
