import { describe, expect, it } from "vitest";
import { getAllServiceSlugs } from "@/data/services";
import {
  getAllSpecialtyPageSlugs,
  getSpecialtyPageByName,
  getSpecialtyPageBySlug,
  specialtyPages,
} from "@/data/specialtyPages";

describe("specialtyPages data", () => {
  it("has 24 featured specialty pages", () => {
    expect(specialtyPages).toHaveLength(44);
  });

  it("all specialty page slugs are valid route fragments", () => {
    for (const page of specialtyPages) {
      expect(page.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("every specialty page maps to valid service slugs", () => {
    const serviceSlugs = getAllServiceSlugs();
    for (const page of specialtyPages) {
      expect(page.relatedServiceSlugs.length).toBeGreaterThan(0);
      for (const slug of page.relatedServiceSlugs) {
        expect(serviceSlugs).toContain(slug);
      }
    }
  });

  it("can resolve specialties by slug and by alias/name", () => {
    expect(getSpecialtyPageBySlug("family-medicine-billing")?.name).toBe("Family Medicine");
    expect(getSpecialtyPageByName("Behavioral Health")?.slug).toBe("behavioral-health-billing");
    expect(getSpecialtyPageByName("Orthopedic Surgery")?.slug).toBe("orthopedic-billing");
  });

  it("returns all specialty page slugs", () => {
    const slugs = getAllSpecialtyPageSlugs();
    expect(slugs).toHaveLength(44);
    expect(slugs).toContain("telehealth-billing");
  });
});
