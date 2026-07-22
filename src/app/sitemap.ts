import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/data/services";
import { getAllSpecialtyPageSlugs } from "@/data/specialtyPages";
import { getAllSeoPages, seoCollectionGroups } from "@/data/seoPages";
import { usStates, slugifyCounty } from "@/data/usLocations";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

const baseUrl = SITE.url.replace(/\/+$/, "");
const lastModified = new Date();

type StaticRouteConfig = {
  path: string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  priority: number;
};

const staticRoutes: StaticRouteConfig[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/why-apex", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/specialties", changeFrequency: "weekly", priority: 0.8 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.7 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.7 },
  { path: "/coding-resources/cpt", changeFrequency: "monthly", priority: 0.6 },
  {
    path: "/coding-resources/icd-10",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  { path: "/glossary", changeFrequency: "weekly", priority: 0.6 },
  { path: "/for-you", changeFrequency: "monthly", priority: 0.6 },
  { path: "/facility", changeFrequency: "monthly", priority: 0.5 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.5 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/free-billing-audit", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/schedule-consultation",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/request-a-quote", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact-sales", changeFrequency: "monthly", priority: 0.7 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.4 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sitemap", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/hipaa-notice", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/why-practices-choose-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/our-process", changeFrequency: "monthly", priority: 0.7 },
  { path: "/security", changeFrequency: "monthly", priority: 0.6 },
  { path: "/compliance", changeFrequency: "monthly", priority: 0.6 },
  { path: "/quality-assurance", changeFrequency: "monthly", priority: 0.6 },
  { path: "/our-technology", changeFrequency: "monthly", priority: 0.6 },
  { path: "/team", changeFrequency: "monthly", priority: 0.5 },
  { path: "/knowledge-center", changeFrequency: "weekly", priority: 0.7 },
];

function createSitemapEntry(
  path: string,
  changeFrequency: StaticRouteConfig["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: path ? `${baseUrl}${path}` : baseUrl,
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticRoutes.map((route) =>
    createSitemapEntry(route.path, route.changeFrequency, route.priority),
  );

  const servicePages = getAllServiceSlugs()
    .sort((a, b) => a.localeCompare(b))
    .map((slug) => createSitemapEntry(`/services/${slug}`, "monthly", 0.7));

  const specialtyPages = getAllSpecialtyPageSlugs()
    .sort((a, b) => a.localeCompare(b))
    .map((slug) => createSitemapEntry(`/specialties/${slug}`, "monthly", 0.7));

  const seoCollectionPages = seoCollectionGroups
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((group) => createSitemapEntry(group.path, "monthly", 0.7));

  const seoDetailPages = getAllSeoPages()
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((page) =>
      createSitemapEntry(
        page.path,
        page.groupKey === "tools" ? "weekly" : "monthly",
        page.groupKey === "solutions" || page.groupKey === "software"
          ? 0.7
          : 0.6,
      ),
    );

  const statePages = usStates.map((state) =>
    createSitemapEntry(`/locations/${state.slug}`, "monthly", 0.6),
  );

  const countyPages = usStates.flatMap((state) =>
    state.counties.map((county) =>
      createSitemapEntry(
        `/locations/${state.slug}/${slugifyCounty(county.name)}`,
        "monthly",
        0.5,
      ),
    ),
  );

  return [
    ...staticPages,
    ...servicePages,
    ...specialtyPages,
    ...seoCollectionPages,
    ...seoDetailPages,
    ...statePages,
    ...countyPages,
  ];
}
