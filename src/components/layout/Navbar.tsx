"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import {
  navLinks,
  serviceMegaMenu,
  specialtyMegaMenu,
  type MegaMenuConfig,
} from "@/data/navigation";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useLockedBody } from "@/hooks/useLockedBody";
import TopBar from "./TopBar";

type DropdownLabel = "Services" | "Specialties";

const megaMenus: Record<DropdownLabel, MegaMenuConfig> = {
  Services: serviceMegaMenu,
  Specialties: specialtyMegaMenu,
};

function getDropdownId(label: string) {
  return `${label.toLowerCase().replace(/\s+/g, "-")}-mega-menu`;
}

export default function Navbar() {
  const pathname = usePathname();
  const { scrolled } = useScrollProgress();
  const visualScrolled = scrolled || pathname === "/contact";
  const positionScrolled = scrolled;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownLabel | null>(
    null,
  );
  const [mobileDropdowns, setMobileDropdowns] = useState<
    Partial<Record<DropdownLabel, boolean>>
  >({});
  const megaRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useLockedBody(mobileOpen);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileDropdowns({});
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && mobileOpen && mobileMenuRef.current) {
        const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleMobileDropdown = (label: DropdownLabel) => {
    setMobileDropdowns((prev) => ({
      Services: false,
      Specialties: false,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      <TopBar scrolled={visualScrolled} />

      <header
        className={cn(
          "fixed left-0 right-0 z-50 border-b border-border bg-white transition-all duration-500",
          visualScrolled && "shadow-[0_18px_60px_rgba(8,48,111,0.08)]",
        )}
        style={{ top: positionScrolled ? "0" : "36px" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[74px] items-center justify-between">
            <Link
              href="/"
              className="relative shrink-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <Image
                src="/images/navbar-logo.png"
                alt="Apex Precision Billing Inc"
                width={260}
                height={44}
                sizes="260px"
                className={cn(
                  "w-auto object-contain transition-all duration-300",
                  visualScrolled ? "h-[54px]" : "h-[58px]",
                )}
                priority
              />
            </Link>

            <nav
              aria-label="Main navigation"
              className="relative hidden items-center gap-1 lg:flex"
            >
              {navLinks.map((link) => {
                const label = link.label as DropdownLabel;
                const menu = link.hasDropdown ? megaMenus[label] : undefined;
                const isDropdownActive = activeDropdown === label;

                if (link.hasDropdown && menu) {
                  return (
                    <div
                      key={link.label}
                      className="static"
                      onMouseEnter={() => setActiveDropdown(label)}
                      onMouseLeave={() =>
                        setActiveDropdown((current) =>
                          current === label ? null : current,
                        )
                      }
                    >
                      <button
                        aria-haspopup="true"
                        aria-expanded={isDropdownActive}
                        aria-controls={getDropdownId(link.label)}
                        onClick={() =>
                          setActiveDropdown((current) =>
                            current === label ? null : label,
                          )
                        }
                        className={cn(
                          "flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                          isActive(link.href)
                            ? "bg-primary text-white shadow-md shadow-primary/20"
                            : "text-primary hover:bg-primary/5 hover:text-primary-dark",
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 transition-transform duration-200",
                            isDropdownActive && "rotate-180",
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {isDropdownActive && (
                          <m.div
                            ref={megaRef}
                            id={getDropdownId(link.label)}
                            role="menu"
                            initial={{ opacity: 0, y: 12, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute right-0 top-full z-50 pt-4"
                            style={{
                              width:
                                menu.width ?? "min(900px, calc(100vw - 2rem))",
                              maxWidth: "calc(100vw - 2rem)",
                            }}
                          >
                            <div className="premium-panel max-h-[min(72vh,760px)] overflow-y-auto rounded-2xl p-5 xl:p-7">
                              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-6">
                                {menu.columns.map((col) => (
                                  <div key={col.heading}>
                                    <h4 className="mb-5 whitespace-normal break-words font-heading text-[11px] font-bold uppercase text-primary-dark">
                                      {col.heading}
                                    </h4>
                                    <ul className="space-y-4">
                                      {col.items.map((item) => (
                                        <li key={item.title}>
                                          <Link
                                            href={item.href}
                                            role="menuitem"
                                            className="group/item block transition-colors duration-200"
                                            onClick={() =>
                                              setActiveDropdown(null)
                                            }
                                          >
                                            <span className="whitespace-normal break-words font-body text-sm font-semibold text-foreground transition-colors duration-200 group-hover/item:text-primary">
                                              {item.title}
                                            </span>
                                            {item.description && (
                                              <span className="mt-0.5 block whitespace-normal break-words font-body text-xs leading-snug text-muted group-hover/item:text-muted/80">
                                                {item.description}
                                              </span>
                                            )}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                                <div>
                                  <h5 className="font-heading text-sm font-bold text-foreground">
                                    {menu.footer.heading}
                                  </h5>
                                  <p className="mt-1 max-w-md font-body text-xs text-muted">
                                    {menu.footer.description}
                                  </p>
                                </div>
                                <Link
                                  href={menu.footer.cta.href}
                                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-accent hover:shadow-xl hover:shadow-primary/25"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {menu.footer.cta.label}
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              </div>
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                      isActive(link.href)
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "text-primary hover:bg-primary/5 hover:text-primary-dark",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <button
              ref={toggleRef}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-foreground transition-all duration-300 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <m.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </m.div>
                ) : (
                  <m.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </m.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-primary-dark/35 backdrop-blur-md lg:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />
            <m.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-60 w-full max-w-sm overflow-y-auto bg-white shadow-2xl shadow-primary-dark/20 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col px-6 pb-10 pt-20">
                <nav
                  id="mobile-menu"
                  aria-label="Mobile navigation"
                  className="flex flex-col gap-1"
                >
                  {navLinks.map((link, i) => {
                    const label = link.label as DropdownLabel;
                    const menu = link.hasDropdown
                      ? megaMenus[label]
                      : undefined;
                    const isOpen = !!mobileDropdowns[label];

                    if (link.hasDropdown && menu) {
                      return (
                        <div key={link.label}>
                          <button
                            onClick={() => toggleMobileDropdown(label)}
                            aria-haspopup="true"
                            aria-expanded={isOpen}
                            aria-controls={getDropdownId(link.label)}
                            className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 font-body text-base font-medium text-foreground transition-colors duration-200 hover:bg-muted/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                          >
                            {link.label}
                            <m.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="h-5 w-5 text-muted" />
                            </m.div>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <m.div
                                id={getDropdownId(link.label)}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-1 pb-2 pl-4 pr-2">
                                  {menu.columns.map((col) => (
                                    <div key={col.heading} className="py-2">
                                      <h4 className="mb-2 px-3 font-heading text-[11px] font-bold uppercase text-primary-dark">
                                        {col.heading}
                                      </h4>
                                      {col.items.map((item) => (
                                        <Link
                                          key={item.title}
                                          href={item.href}
                                          className="block rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-muted/10 hover:text-foreground"
                                          onClick={closeMobile}
                                        >
                                          {item.title}
                                        </Link>
                                      ))}
                                    </div>
                                  ))}
                                  <div className="mt-2 border-t border-border px-3 pt-3">
                                    <Link
                                      href={menu.footer.cta.href}
                                      className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent"
                                      onClick={closeMobile}
                                    >
                                      {menu.footer.cta.label}
                                      <ArrowRight className="h-3.5 w-3.5" />
                                    </Link>
                                  </div>
                                </div>
                              </m.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <m.div
                        key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          aria-current={
                            isActive(link.href) ? "page" : undefined
                          }
                          className={cn(
                            "block rounded-xl px-4 py-3.5 font-body text-base font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                            isActive(link.href)
                              ? "bg-primary/5 text-primary"
                              : "text-foreground hover:bg-muted/10",
                          )}
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </m.div>
                    );
                  })}
                </nav>

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/schedule-consultation"
                    className="flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-body text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-accent hover:shadow-xl hover:shadow-primary/25"
                    onClick={() => setMobileOpen(false)}
                  >
                    Schedule Consultation
                  </Link>
                  <Link
                    href="/contact-sales"
                    className="flex items-center justify-center rounded-xl border-2 border-border px-6 py-3.5 font-body text-base font-semibold text-foreground transition-all duration-300 hover:bg-muted/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
