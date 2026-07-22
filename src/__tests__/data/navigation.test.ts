import { describe, it, expect } from "vitest";
import {
  navLinks,
  quickLinks,
  serviceLinks,
  socialLinks,
} from "@/data/navigation";
import { services } from "@/data/services";

describe("navigation data", () => {
  it("navLinks has 8 items", () => {
    expect(navLinks).toHaveLength(8);
  });

  it("Services link has dropdown", () => {
    const servicesLink = navLinks.find((l) => l.label === "Services");
    expect(servicesLink?.hasDropdown).toBe(true);
  });

  it("Specialties link has dropdown", () => {
    const specialtiesLink = navLinks.find((l) => l.label === "Specialties");
    expect(specialtiesLink?.hasDropdown).toBe(true);
  });

  it("all navLink hrefs start with /", () => {
    for (const link of navLinks) {
      expect(link.href).toMatch(/^\//);
    }
  });

  it("quickLinks matches navLinks labels", () => {
    const navLabels = navLinks.map((l) => l.label);
    const quickLabels = quickLinks.map((l) => l.label);
    expect(quickLabels).toEqual(navLabels);
  });

  it("serviceLinks have valid slugs that match services data", () => {
    const serviceSlugs = services.map((s) => s.slug);
    for (const link of serviceLinks) {
      const slug = link.href.replace("/services/", "");
      expect(serviceSlugs).toContain(slug);
    }
  });

  it("socialLinks has 4 entries", () => {
    expect(socialLinks).toHaveLength(4);
  });
});
