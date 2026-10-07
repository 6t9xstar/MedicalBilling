import { describe, it, expect } from "vitest";
import { specialties, getAllSpecialties, getAllSpecialtyLetters } from "@/data/specialties";
import { getSpecialtyPageByName } from "@/data/specialtyPages";
import { iconRegistry } from "@/lib/icons";

describe("specialties data", () => {
  it("has 18 letter groups", () => {
    expect(specialties).toHaveLength(18);
  });

  it("has 44 total specialties", () => {
    const all = getAllSpecialties();
    expect(all).toHaveLength(44);
  });

  it("all specialties have slugified slugs", () => {
    const all = getAllSpecialties();
    for (const s of all) {
      expect(s.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("every specialty has a dedicated billing page", () => {
    const all = getAllSpecialties();
    for (const s of all) {
      expect(getSpecialtyPageByName(s.name), `missing page for ${s.name}`).toBeTruthy();
    }
  });

  it("every specialty has a registered icon", () => {
    const all = getAllSpecialties();
    for (const s of all) {
      expect(s.icon, `missing icon for ${s.name}`).toBeTruthy();
      expect(iconRegistry[s.icon], `unregistered icon "${s.icon}" for ${s.name}`).toBeTruthy();
    }
  });

  it("getAllSpecialtyLetters returns all 18 letters", () => {
    const letters = getAllSpecialtyLetters();
    expect(letters).toHaveLength(18);
    expect(letters).toContain("A");
    expect(letters).toContain("V");
  });
});
