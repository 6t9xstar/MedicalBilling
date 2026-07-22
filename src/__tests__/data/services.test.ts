import { describe, it, expect } from "vitest";
import {
  services,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/services";

describe("services data", () => {
  it("has 22 core services", () => {
    expect(services).toHaveLength(22);
  });

  it("every service has required fields", () => {
    for (const s of services) {
      expect(s.slug).toBeTruthy();
      expect(s.title).toBeTruthy();
      expect(s.shortTitle).toBeTruthy();
      expect(s.description).toBeTruthy();
      expect(s.features.length).toBeGreaterThan(0);
      expect(s.painPoints.length).toBeGreaterThan(0);
      expect(s.process.length).toBeGreaterThan(0);
      expect(s.faqs.length).toBeGreaterThan(0);
      expect(s.icon).toBeTruthy();
    }
  });

  it("getServiceBySlug returns correct service", () => {
    const s = getServiceBySlug("medical-billing");
    expect(s?.title).toBe("Medical Billing Services");
  });

  it("getServiceBySlug returns undefined for unknown slug", () => {
    expect(getServiceBySlug("unknown")).toBeUndefined();
  });

  it("getAllServiceSlugs returns all slugs", () => {
    const slugs = getAllServiceSlugs();
    expect(slugs).toHaveLength(22);
    expect(slugs).toContain("revenue-cycle-management");
  });
});
