export const SITE = {
  name: "Apex Precision Billing Inc",
  shortName: "Apex Precision Billing",
  tagline: "Precision in Every Claim.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://apexprecisionbilling.com",
  email: "info@apexprecisionbilling.com",
  phone: "+1 (908) 488-9245",
  phoneDisplay: "(908) 488-9245",
  phoneRaw: "+19084889245",
  areaServed: "United States",
  address: "1276 Lincoln Hwy, Colonia, NJ 07067",
  addressParts: {
    street: "1276 Lincoln Hwy",
    city: "Colonia",
    state: "NJ",
    stateName: "New Jersey",
    zip: "07067",
  },
  mapsUrl: "https://maps.app.goo.gl/rBTH5RHeeKgzh7Yz8",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sApex+Precision+Billing+Inc,+1276+Lincoln+Hwy,+Colonia,+NJ+07067",
  geo: { lat: 40.5925926, lng: -74.2937012 },
  social: {
    linkedin: "https://www.linkedin.com/company/apex-precision-billing/",
    instagram: "https://www.instagram.com/apexprecisionbilling",
    facebook: "https://www.facebook.com/profile.php?id=61575040135059",
    alignable:
      "https://www.alignable.com/totowa-nj/apex-precision-billing-2?user=17274168",
  },
  ogImageDefault: "/og/default.jpg",
} as const;

/**
 * Public-facing department email directory.
 * Each entry maps a department/profession to a dedicated inbox so
 * inquiries land with the right team without manual triage.
 *
 * `icon` is a Lucide icon name (resolved at render time so this module
 * stays free of React/lucide imports).
 */
export type DepartmentEmail = {
  key: string;
  label: string;
  email: string;
  description: string;
  icon:
    | "info"
    | "receipt"
    | "megaphone"
    | "settings"
    | "users"
    | "cog"
    | "trending-up"
    | "mail";
  highlight?: boolean;
};

export const departmentEmails: readonly DepartmentEmail[] = [
  {
    key: "info",
    label: "General Inquiries",
    email: "info@apexprecisionbilling.com",
    description:
      "General questions, account help, or unsure where to start — we route from here.",
    icon: "info",
    highlight: true,
  },
  {
    key: "billing",
    label: "Billing & RCM",
    email: "billing@apexprecisionbilling.com",
    description:
      "Active claims, billing workflow questions, and RCM service support.",
    icon: "receipt",
  },
  {
    key: "sales",
    label: "Sales & New Business",
    email: "sales@apexprecisionbilling.com",
    description:
      "Quotes, demos, and new business conversations for your practice.",
    icon: "trending-up",
  },
  {
    key: "marketing",
    label: "Marketing & Partnerships",
    email: "marketing@apexprecisionbilling.com",
    description:
      "Brand, content, and partnership conversations.",
    icon: "megaphone",
  },
  {
    key: "operations",
    label: "Operations",
    email: "operations@apexprecisionbilling.com",
    description:
      "Day-to-day service delivery, workflow status, and operational follow-up.",
    icon: "cog",
  },
  {
    key: "admin",
    label: "Administration",
    email: "admin@apexprecisionbilling.com",
    description:
      "Administrative questions, contracts, and account paperwork.",
    icon: "settings",
  },
  {
    key: "hr",
    label: "Careers & HR",
    email: "hr@apexprecisionbilling.com",
    description:
      "Careers, recruiting, and people operations inquiries.",
    icon: "users",
  },
  {
    key: "gmail",
    label: "Google Account",
    email: "apexprecisionbilling@gmail.com",
    description:
      "Backup inbox via Google — use when other channels are unreachable.",
    icon: "mail",
  },
] as const;
