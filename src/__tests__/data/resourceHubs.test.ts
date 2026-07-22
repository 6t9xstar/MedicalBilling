import { describe, expect, it } from "vitest";
import {
  getAllResourceHubKeys,
  getResourceHubByKey,
  resourceHubs,
} from "@/data/resourceHubs";

describe("resourceHubs data", () => {
  it("has 8 resource hubs", () => {
    expect(resourceHubs).toHaveLength(8);
  });

  it("every hub has required sections, topics, and links", () => {
    for (const hub of resourceHubs) {
      expect(hub.key).toBeTruthy();
      expect(hub.path).toMatch(/^\//);
      expect(hub.title).toBeTruthy();
      expect(hub.pillars.length).toBeGreaterThan(0);
      expect(hub.featuredTopics.length).toBeGreaterThan(0);
      expect(hub.serviceLinks.length).toBeGreaterThan(0);
      expect(hub.specialtyLinks.length).toBeGreaterThan(0);
      expect(hub.faqs.length).toBeGreaterThan(0);
    }
  });

  it("can look up a hub by key", () => {
    expect(getResourceHubByKey("resources")?.title).toBe("Resources for Medical Practices");
    expect(getResourceHubByKey("missing")).toBeUndefined();
  });

  it("returns all resource hub keys", () => {
    expect(getAllResourceHubKeys()).toEqual([
      "resources",
      "blog",
      "guides",
      "case-studies",
      "coding-resources-cpt",
      "coding-resources-icd10",
      "glossary",
      "knowledge-center",
    ]);
  });
});
