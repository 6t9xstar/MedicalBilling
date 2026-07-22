"use client";

import Link from "next/link";
import { Phone, CalendarDays, ClipboardCheck, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TopBarProps {
  scrolled: boolean;
  className?: string;
}

export default function TopBar({ scrolled, className }: TopBarProps) {
  return (
    <div
      className={cn(
        "relative z-60 transition-all duration-300",
        scrolled
          ? "bg-white/95 border-b border-border shadow-sm backdrop-blur-xl"
          : "gradient-bg border-b border-white/10",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-9 items-center justify-between gap-4">
          <div
            className={cn(
              "hidden min-w-0 items-center gap-2 text-xs font-medium lg:flex",
              scrolled ? "text-muted" : "text-white/80",
            )}
          >
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">
              Specialty-aware billing support with consultation, audit, and
              resource paths for physician practices
            </span>
          </div>

          <div className="flex min-w-0 items-center gap-2 ml-auto">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all duration-200",
                scrolled
                  ? "text-primary hover:bg-primary/5"
                  : "text-white hover:bg-white/10",
              )}
            >
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">{SITE.phoneDisplay}</span>
              <span className="sm:hidden">Call</span>
            </a>

            <Link
              href="/free-billing-audit"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all duration-200",
                scrolled
                  ? "text-muted hover:text-primary hover:bg-primary/5"
                  : "text-white/85 hover:text-white hover:bg-white/15",
              )}
            >
              <ClipboardCheck className="h-3 w-3" />
              <span className="hidden sm:inline">Billing Audit</span>
              <span className="sm:hidden">Audit</span>
            </Link>

            <Link
              href="/schedule-consultation"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold transition-all duration-200",
                scrolled
                  ? "border-primary/20 bg-primary text-white hover:bg-primary-dark"
                  : "border-white/20 bg-white/10 text-white hover:bg-white/20",
              )}
            >
              <CalendarDays className="h-3 w-3" />
              <span className="hidden sm:inline">Consultation</span>
              <span className="sm:hidden">Book</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
