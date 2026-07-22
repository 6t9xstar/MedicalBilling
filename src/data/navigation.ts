import { services } from "@/data/services";
import { seoCollectionGroups } from "@/data/seoPages";
import { specialtyPages } from "@/data/specialtyPages";

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
}

export interface MegaMenuColumn {
  heading: string;
  items: MegaMenuItem[];
}

export interface MegaMenuConfig {
  columns: MegaMenuColumn[];
  footer: {
    heading: string;
    description: string;
    cta: { label: string; href: string };
  };
  width?: string;
}

function chunkItems<T>(items: T[], size: number) {
  const chunks: T[][] = [];

  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }

  return chunks;
}

const serviceMenuHeadings = [
  "Core Services",
  "Revenue Workflow",
  "Front-End Support",
  "Growth & Operations",
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why Apex", href: "/why-apex" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Specialties", href: "/specialties", hasDropdown: true },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const serviceMegaMenu: MegaMenuConfig = {
  columns: [
    ...chunkItems(
      services,
      Math.ceil(services.length / serviceMenuHeadings.length),
    ).map((group, index) => ({
      heading: serviceMenuHeadings[index] ?? `Services ${index + 1}`,
      items: group.map((service) => ({
        title: service.shortTitle,
        description: service.description,
        href: `/services/${service.slug}`,
      })),
    })),
    {
      heading: "Next Steps",
      items: [
        {
          title: "All Services",
          description: "Review the full service library in one place.",
          href: "/services",
        },
        {
          title: "Insurance Payer Expertise",
          description:
            "Medicare, Medicaid, Aetna, Cigna, UHC, Anthem, Humana, BCBS.",
          href: "/insurance-payers",
        },
        {
          title: "Free Billing Audit",
          description: "Request a structured review of billing pain points.",
          href: "/free-billing-audit",
        },
        {
          title: "Schedule a Consultation",
          description: "Start with a focused workflow conversation.",
          href: "/schedule-consultation",
        },
        {
          title: "Request a Quote",
          description: "Move directly into a pricing-focused conversation.",
          href: "/request-a-quote",
        },
      ],
    },
  ],
  footer: {
    heading: "Need help deciding where to start?",
    description:
      "Talk through your billing priorities, specialty mix, and workflow concerns with the Apex team.",
    cta: { label: "SCHEDULE A CONSULTATION", href: "/schedule-consultation" },
  },
  width: "min(980px, calc(100vw - 4rem))",
};

export const specialtyMegaMenu: MegaMenuConfig = {
  columns: chunkItems(specialtyPages, 6).map((pages, index) => ({
    heading: `Specialties ${index + 1}`,
    items: pages.map((page) => ({
      title: page.name,
      description: page.relatedServiceTitles.slice(0, 2).join(" • "),
      href: `/specialties/${page.slug}`,
    })),
  })),
  footer: {
    heading: "Looking for your practice type?",
    description:
      "Browse the full specialties library or talk with Apex about the workflow issues affecting your specialty.",
    cta: { label: "VIEW ALL SPECIALTIES", href: "/specialties" },
  },
  width: "min(1080px, calc(100vw - 4rem))",
};

export const whoWeServeMegaMenu = serviceMegaMenu;

export const quickLinks = [...navLinks];

export const serviceLinks = services.map((service) => ({
  label: service.shortTitle,
  href: `/services/${service.slug}`,
}));

export const specialtyLinks = [
  ...specialtyPages.slice(0, 8).map((page) => ({
    label: page.name,
    href: `/specialties/${page.slug}`,
  })),
  { label: "All Specialties", href: "/specialties" },
];

export const resourceLinks = [
  { label: "Knowledge Center", href: "/knowledge-center" },
  { label: "Resources Hub", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Guides", href: "/guides" },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Medical Billing Checklist",
    href: "/resources/medical-billing-checklist",
  },
  { label: "Billing KPI Guide", href: "/resources/billing-kpi-guide" },
  { label: "Denial Codes Guide", href: "/resources/denial-codes-guide" },
  { label: "Medical Billing Tools", href: "/tools" },
  { label: "Insurance Payer Expertise", href: "/insurance-payers" },
  { label: "Free Resources", href: "/lead-magnets" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Medical Billing Glossary", href: "/glossary" },
];

export const websiteLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why Apex", href: "/why-apex" },
  { label: "Why Practices Choose Us", href: "/why-practices-choose-us" },
  { label: "Our Process", href: "/our-process" },
  { label: "Our Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Specialties", href: "/specialties" },
  { label: "Solutions", href: "/solutions" },
  { label: "Software", href: "/software" },
  { label: "Locations", href: "/locations" },
  { label: "Industries", href: "/industries" },
  { label: "Insurance Payer Expertise", href: "/insurance-payers" },
  { label: "Our Technology", href: "/our-technology" },
  { label: "Security", href: "/security" },
  { label: "Compliance", href: "/compliance" },
  { label: "Quality Assurance", href: "/quality-assurance" },
  { label: "Trust Center", href: "/trust" },
  { label: "Knowledge Center", href: "/knowledge-center" },
  { label: "FAQ", href: "/faq" },
  { label: "Free Billing Audit", href: "/free-billing-audit" },
  { label: "Schedule Consultation", href: "/schedule-consultation" },
  { label: "Request a Quote", href: "/request-a-quote" },
  { label: "Contact Sales", href: "/contact-sales" },
  { label: "Careers", href: "/careers" },
  { label: "HTML Sitemap", href: "/sitemap" },
];

export const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Why Apex", href: "/why-apex" },
  { label: "Why Practices Choose Us", href: "/why-practices-choose-us" },
  { label: "Our Process", href: "/our-process" },
  { label: "Our Team", href: "/team" },
  { label: "Our Technology", href: "/our-technology" },
  { label: "Security", href: "/security" },
  { label: "Compliance", href: "/compliance" },
  { label: "Quality Assurance", href: "/quality-assurance" },
  { label: "Trust Center", href: "/trust" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const strategicLinks = seoCollectionGroups.map((group) => ({
  label: group.eyebrow,
  href: group.path,
}));

export const conversionLinks = [
  { label: "Free Billing Audit", href: "/free-billing-audit" },
  { label: "Schedule a Consultation", href: "/schedule-consultation" },
  { label: "Request a Quote", href: "/request-a-quote" },
  { label: "Contact Sales", href: "/contact-sales" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "HIPAA Notice", href: "/hipaa-notice" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export const solutionsFooterLinks = [
  { label: "All Solutions", href: "/solutions" },
  { label: "New Medical Practices", href: "/solutions/new-medical-practices" },
  { label: "Small Practices", href: "/solutions/small-practices" },
  { label: "Multi-Provider Practices", href: "/solutions/multi-provider-practices" },
  { label: "Private Practices", href: "/solutions/private-practices" },
  { label: "Group Practices", href: "/solutions/group-practices" },
  { label: "Independent Physicians", href: "/solutions/independent-physicians" },
  { label: "Growing Clinics", href: "/solutions/growing-clinics" },
];

export const moreCollectionsLinks = [
  { label: "Software", href: "/software" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations" },
  { label: "Knowledge Center", href: "/knowledge-center" },
];

export const softwareFooterLinks = [
  { label: "All Software", href: "/software" },
  { label: "Kareo", href: "/software/kareo-billing" },
  { label: "AdvancedMD", href: "/software/advancedmd" },
  { label: "eClinicalWorks", href: "/software/eclinicalworks" },
  { label: "athenahealth", href: "/software/athenahealth" },
  { label: "Epic", href: "/software/epic" },
  { label: "NextGen", href: "/software/nextgen" },
  { label: "Cerner", href: "/software/cerner" },
];

export const industriesFooterLinks = [
  { label: "All Industries", href: "/industries" },
  { label: "Private Practices", href: "/industries/private-practices" },
  { label: "Medical Groups", href: "/industries/medical-groups" },
  { label: "Urgent Care", href: "/industries/urgent-care-centers" },
  { label: "Behavioral Health", href: "/industries/behavioral-health-clinics" },
  { label: "Home Health", href: "/industries/home-health-agencies" },
  { label: "Telemedicine", href: "/industries/telemedicine-providers" },
  { label: "ASCs", href: "/industries/ambulatory-surgery-centers" },
];

export const locationsFooterLinks = [
  { label: "All Locations", href: "/locations" },
  { label: "New Jersey", href: "/locations/new-jersey" },
  { label: "New York", href: "/locations/new-york" },
  { label: "Pennsylvania", href: "/locations/pennsylvania" },
  { label: "Texas", href: "/locations/texas" },
  { label: "California", href: "/locations/california" },
  { label: "Florida", href: "/locations/florida" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/apex-precision-billing/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/apexprecisionbilling",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61575040135059",
  },
  {
    label: "Alignable",
    href: "https://www.alignable.com/totowa-nj/apex-precision-billing-2?user=17274168",
  },
];
