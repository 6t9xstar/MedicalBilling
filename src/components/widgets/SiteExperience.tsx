"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail, Phone, ShieldCheck } from "lucide-react";

export default function SiteExperience() {
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowActions(window.scrollY > 460);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <AnimatePresence>
        {showActions && (
          <m.div
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-4 z-[65] flex flex-col gap-3 sm:bottom-6 sm:right-6"
          >
            <a
              href="tel:+19084889245"
              className="group flex h-12 w-12 items-center justify-center rounded-xl border border-primary/10 bg-white/95 text-primary shadow-xl shadow-primary/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-primary/20"
              aria-label="Call Apex Precision Billing"
            >
              <Phone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
            </a>
            <a
              href="mailto:info@apexprecisionbilling.com"
              className="group flex h-12 w-12 items-center justify-center rounded-xl border border-primary/10 bg-white/95 text-primary shadow-xl shadow-primary/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-primary/20"
              aria-label="Email Apex Precision Billing"
            >
              <Mail className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6" />
            </a>
            <button
              type="button"
              onClick={scrollTop}
              className="group flex h-12 w-12 items-center justify-center rounded-xl border border-primary bg-primary text-white shadow-xl shadow-primary/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-accent/20"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </m.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 left-4 z-[64] hidden rounded-xl border border-primary/10 bg-white/90 px-3 py-2 text-xs font-semibold text-primary shadow-lg shadow-primary/10 backdrop-blur-xl lg:flex items-center gap-2">
        <ShieldCheck className="h-3.5 w-3.5" />
        HIPAA-secure consultation
      </div>
    </>
  );
}
