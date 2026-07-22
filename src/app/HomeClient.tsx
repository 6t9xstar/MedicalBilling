"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";

// Above-the-fold: rendered eagerly so the hero paints fast.
import Services from "@/components/sections/Services";

// Below-the-fold: lazy-loaded with Intersection-style hydration. ssr: true
// keeps SEO/JSON-LD intact, ssr: false would lose content for crawlers.
const SpecialtyStrip = dynamic(
  () => import("@/components/sections/SpecialtyStrip"),
  { ssr: true },
);
const PracticeTypeStrip = dynamic(
  () => import("@/components/sections/PracticeTypeStrip"),
  { ssr: true },
);
const IndustriesStrip = dynamic(
  () => import("@/components/sections/IndustriesStrip"),
  { ssr: true },
);
const AboutPreview = dynamic(
  () => import("@/components/sections/AboutPreview"),
  { ssr: true },
);
const HowWeWork = dynamic(() => import("@/components/sections/HowWeWork"), {
  ssr: true,
});
const TechAndSecurity = dynamic(
  () => import("@/components/sections/TechAndSecurity"),
  { ssr: true },
);
const TrustProof = dynamic(() => import("@/components/sections/TrustProof"), {
  ssr: true,
});
const LatestResources = dynamic(
  () => import("@/components/sections/LatestResources"),
  { ssr: true },
);
const CoreCapabilities = dynamic(
  () => import("@/components/sections/CoreCapabilities"),
  { ssr: true },
);
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: true });

export default function HomeClient() {
  return (
    <>
      <Hero />
      <div className="border-t border-border">
        <StatsStrip />
      </div>
      <div className="border-t border-border">
        <Services />
      </div>
      <div className="border-t border-border">
        <SpecialtyStrip />
      </div>
      <div className="border-t border-border">
        <PracticeTypeStrip />
      </div>
      <div className="border-t border-border">
        <IndustriesStrip />
      </div>
      <div className="border-t border-border">
        <AboutPreview />
      </div>
      <div className="border-t border-border">
        <HowWeWork />
      </div>
      <div className="border-t border-border">
        <TechAndSecurity />
      </div>
      <div className="border-t border-border">
        <TrustProof />
      </div>
      <div className="border-t border-border">
        <LatestResources />
      </div>
      <div className="border-t border-border">
        <CoreCapabilities />
      </div>
      <div className="border-t border-border">
        <FAQ />
      </div>
      <div className="border-t border-border">
        <CTA />
      </div>
    </>
  );
}
