"use client";

import { useState } from "react";
import { MapPin, ExternalLink, Loader2, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

type GoogleMapProps = {
  className?: string;
  title?: string;
};

export default function GoogleMap({
  className = "",
  title = "Apex Precision Billing Inc office location on Google Maps",
}: GoogleMapProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-3xl border border-border bg-card shadow-sm ${className}`}
    >
      <div className="relative h-[380px] sm:h-[440px] lg:h-[480px] bg-background-subtle">
        {loaded ? (
          <iframe
            src={SITE.mapsEmbedUrl}
            title={title}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <div className="blueprint-grid absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div
              aria-hidden="true"
              className="absolute rounded-full bg-primary/8 blur-3xl h-56 w-56 -top-16 -right-10"
            />
            <div
              aria-hidden="true"
              className="absolute rounded-full bg-accent/8 blur-3xl h-44 w-44 -bottom-10 -left-10"
            />

            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-accent shadow-lg">
              <MapPin className="h-7 w-7 text-white" aria-hidden="true" />
            </div>

            <p className="relative mt-5 font-heading text-lg font-bold text-foreground">
              {SITE.name}
            </p>
            <p className="relative mt-1 font-body text-sm text-muted">
              {SITE.address}
            </p>

            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="group relative mt-6 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Load the interactive Google Map"
            >
              <Loader2
                className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90"
                aria-hidden="true"
              />
              Load Interactive Map
            </button>

            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-3 inline-flex items-center gap-1.5 font-body text-xs font-medium text-muted transition-colors hover:text-primary"
            >
              Open in Google Maps
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-white px-5 py-4">
        <div className="flex min-w-0 items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/5">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-body text-sm font-medium text-foreground">
              {SITE.address}
            </p>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="mt-0.5 inline-flex items-center gap-1.5 font-body text-xs text-muted transition-colors hover:text-primary"
            >
              <Phone className="h-3 w-3" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </div>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-2.5 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Get Directions
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
