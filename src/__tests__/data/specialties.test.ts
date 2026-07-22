import { describe, it, expect } from "vitest";
import { specialties, getAllSpecialties, getAllSpecialtyLetters } from "@/data/specialties";

describe("specialties data", () => {
  it("has 14 letter groups", () => {
    expect(specialties).toHaveLength(14);
  });

  it("has 40 total specialties", () => {
    const all = getAllSpecialties();
    expect(all).toHaveLength(40);
  });

  it("all specialties have slugified slugs", () => {
    const all = getAllSpecialties();
    for (const s of all) {
      expect(s.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("getAllSpecialtyLetters returns all 14 letters", () => {
    const letters = getAllSpecialtyLetters();
    expect(letters).toHaveLength(14);
    expect(letters).toContain("A");
    expect(letters).toContain("V");
  });
});
