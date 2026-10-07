import { SITE } from "@/lib/constants";

export interface SchemaBreadcrumbItem {
  name: string;
  path?: string;
}

export interface SchemaFaqItem {
  question: string;
  answer: string;
}

export interface SchemaListItem {
  name: string;
  path: string;
  description?: string;
}

function normalizePath(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return path.startsWith("/") ? `${SITE.url}${path}` : `${SITE.url}/${path}`;
}

export function buildBreadcrumbList(items: SchemaBreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path
        ? {
            item: normalizePath(item.path),
          }
        : {}),
    })),
  };
}

export function buildFaqPage(faqs: SchemaFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: normalizePath(path),
    serviceType,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };
}

export function buildWebPageSchema({
  name,
  description,
  path,
  about,
}: {
  name: string;
  description: string;
  path: string;
  about?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: normalizePath(path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
    ...(about && about.length > 0
      ? {
          about: about.map((item) => ({
            "@type": "Thing",
            name: item,
          })),
        }
      : {}),
  };
}

export function buildCollectionPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: normalizePath(path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    description: "Medical billing, coding support, denial management, and revenue cycle services for physician practices.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/resources/{search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneRaw,
    slogan: SITE.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressParts.street,
      addressLocality: SITE.addressParts.city,
      addressRegion: SITE.addressParts.state,
      postalCode: SITE.addressParts.zip,
      addressCountry: "US",
    },
    sameAs: [
      SITE.social.linkedin,
      SITE.social.instagram,
      SITE.social.facebook,
      SITE.social.alignable,
    ],
    areaServed: {
      "@type": "Country",
      name: SITE.areaServed,
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    areaServed: {
      "@type": "Country",
      name: SITE.areaServed,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressParts.street,
      addressLocality: SITE.addressParts.city,
      addressRegion: SITE.addressParts.state,
      postalCode: SITE.addressParts.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    hasMap: SITE.mapsUrl,
  };
}

export function buildPersonSchema({
  name,
  jobTitle,
  description,
  path,
}: {
  name: string;
  jobTitle: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    url: normalizePath(path),
    worksFor: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function buildArticleSchema({
  headline,
  description,
  path,
  articleSection,
}: {
  headline: string;
  description: string;
  path: string;
  articleSection: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: normalizePath(path),
    articleSection,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function buildItemList({
  name,
  items,
}: {
  name: string;
  items: SchemaListItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: normalizePath(item.path),
      item: {
        "@type": "WebPage",
        name: item.name,
        url: normalizePath(item.path),
        ...(item.description ? { description: item.description } : {}),
      },
    })),
  };
}
