import type { MarketingPageContent } from "@/components/sections/MarketingScaffold";

export const contentPages: Record<string, MarketingPageContent> = {
  "why-apex": {
    path: "/why-apex",
    title: "Why Choose Apex Precision Billing",
    eyebrow: "Why Apex",
    intro:
      "Apex is positioning itself as a more disciplined billing partner for physician practices that want clearer workflows, stronger follow-up, and communication they can actually use to make decisions.",
    metaTitle: "Why Choose Apex Precision Billing | Apex Precision Billing Inc",
    metaDescription:
      "Learn what makes Apex Precision Billing different: transparent workflows, specialty-aware billing support, disciplined denial follow-up, and practical physician communication.",
    highlights: [
      "Transparent workflows",
      "Specialty-aware support",
      "Compliance-minded process",
      "Consultative communication",
    ],
    sections: [
      {
        title: "Operational clarity over generic promises",
        body: [
          "We are rebuilding the Apex website around practical revenue cycle concerns instead of broad claims. The goal is to explain how work gets done, where accountability lives, and how physicians stay informed.",
          "That creates a stronger foundation for trust than saying the same thing every other billing company says.",
        ],
        bullets: [
          "Defined handoffs from front-end intake through payer follow-up",
          "Reporting centered on action items, not vanity dashboards",
          "Communication that helps providers understand next steps",
        ],
      },
      {
        title: "Built for healthcare-specific complexity",
        body: [
          "Medical billing varies by specialty, payer mix, documentation quality, and staffing model. Apex is leaning into specialty-specific service pages and resources so the site reflects that complexity instead of flattening it.",
          "This approach supports both better sales conversations and a stronger SEO footprint.",
        ],
        bullets: [
          "Specialty pages tied to real workflow differences",
          "Service pages organized around revenue cycle functions",
          "Resource hubs designed to answer physician questions",
        ],
      },
      {
        title: "Trust signals that can be defended",
        body: [
          "As part of implementation, we are moving toward process-based credibility and away from unsupported superlatives. When Apex makes claims, they should be evidence-based, specific, and easy to stand behind.",
          "That is better for EEAT, user confidence, and long-term brand durability.",
        ],
      },
      {
        title: "A scalable website foundation",
        body: [
          "The new information architecture is designed to scale into specialty pages, resource hubs, conversion pages, and legal content without turning the site into a collection of disconnected pages.",
          "This first implementation milestone establishes the route structure we can build on next.",
        ],
        bullets: [
          "Dedicated conversion pages",
          "Dedicated resource hubs",
          "Dynamic specialty detail pages",
          "Expanded sitemap coverage",
        ],
      },
    ],
    relatedLinks: [
      { label: "Medical Billing Services", href: "/services" },
      { label: "Specialty Billing Pages", href: "/specialties" },
      { label: "Free Billing Audit", href: "/free-billing-audit" },
    ],
    primaryCta: {
      label: "Schedule a consultation",
      href: "/schedule-consultation",
    },
    secondaryCta: { label: "Explore services", href: "/services" },
  },
  resources: {
    path: "/resources",
    title: "Resources for Medical Practices",
    eyebrow: "Resources",
    intro:
      "Apex is building a resource section that helps physicians and practice leaders understand billing operations, coding changes, claim friction, and revenue cycle workflow decisions before they ever start a sales conversation.",
    metaTitle: "Medical Billing Resources | Apex Precision Billing Inc",
    metaDescription:
      "Browse Apex Precision Billing resources including blog content, guides, case studies, coding references, and a medical billing glossary.",
    sections: [
      {
        title: "Educational content for busy practices",
        body: [
          "The resource hub is intended to support physicians, practice administrators, and operations leaders who need practical guidance on the revenue cycle.",
          "Each section is being structured so it can support both search visibility and real decision-making.",
        ],
        bullets: [
          "Blog articles on billing operations and payer pressure points",
          "Guides that explain workflows step by step",
          "Reference pages for coding terminology and claim basics",
        ],
      },
      {
        title: "Built to support topical authority",
        body: [
          "Publishing a set of connected resource hubs gives Apex a clearer topical footprint around medical billing, coding, compliance, and specialty workflows.",
          "This matters for both search engines and prospective clients trying to evaluate expertise.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "CPT Coding Resources", href: "/coding-resources/cpt" },
      { label: "ICD-10 Resources", href: "/coding-resources/icd-10" },
      { label: "Medical Billing Glossary", href: "/glossary" },
    ],
    primaryCta: { label: "Talk to Apex", href: "/contact" },
    secondaryCta: { label: "Review specialties", href: "/specialties" },
  },
  blog: {
    path: "/blog",
    title: "Medical Billing Blog",
    eyebrow: "Blog",
    intro:
      "This section will house educational articles on billing operations, denials, coding updates, payer behavior, and workflow decisions that affect physician revenue and staff efficiency.",
    metaTitle: "Medical Billing Blog | Apex Precision Billing Inc",
    metaDescription:
      "Read Apex Precision Billing blog content on billing operations, denials, coding workflows, payer trends, and healthcare revenue cycle management.",
    breadcrumbs: [{ label: "Resources", href: "/resources" }],
    sections: [
      {
        title: "Planned article themes",
        body: [
          "The blog is being set up as an educational channel, not a thin keyword archive.",
        ],
        bullets: [
          "Denial patterns and payer-specific friction",
          "Front-end workflow issues that create downstream rework",
          "Documentation and coding coordination",
          "Practice growth considerations tied to billing infrastructure",
        ],
      },
      {
        title: "Why this matters",
        body: [
          "For Apex, blog content supports EEAT only if it sounds informed, practical, and specific. The implementation work here creates the route and metadata foundation so that content can be added in a structured way next.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Guides", href: "/guides" },
      { label: "Glossary", href: "/glossary" },
      { label: "Resources hub", href: "/resources" },
    ],
    primaryCta: { label: "Request a quote", href: "/request-a-quote" },
    secondaryCta: { label: "Back to resources", href: "/resources" },
  },
  "case-studies": {
    path: "/case-studies",
    title: "Case Studies",
    eyebrow: "Proof Points",
    intro:
      "Case studies should explain the starting problem, the operational intervention, and the measurable business effect. This route gives Apex a place to publish that material in a cleaner, more credible format.",
    metaTitle: "Medical Billing Case Studies | Apex Precision Billing Inc",
    metaDescription:
      "Explore medical billing case studies from Apex Precision Billing focused on workflow improvement, denial reduction, and revenue cycle performance.",
    breadcrumbs: [{ label: "Resources", href: "/resources" }],
    sections: [
      {
        title: "What strong case studies should show",
        body: [
          "A credible case study is not just a testimonial. It should demonstrate process, constraints, and measurable outcomes in context.",
        ],
        bullets: [
          "Practice profile and billing environment",
          "Initial operational challenge",
          "Work performed by Apex",
          "Results and lessons learned",
        ],
      },
      {
        title: "Why the route exists now",
        body: [
          "Even before full case studies are written, the route, metadata, and internal linking structure should exist so future content has a natural home in the site architecture.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Free Billing Audit", href: "/free-billing-audit" },
      { label: "Contact Sales", href: "/contact-sales" },
      { label: "Resources hub", href: "/resources" },
    ],
    primaryCta: { label: "Contact sales", href: "/contact-sales" },
    secondaryCta: { label: "Back to resources", href: "/resources" },
  },
  guides: {
    path: "/guides",
    title: "Medical Billing Guides",
    eyebrow: "Guides",
    intro:
      "Guides give Apex a place to publish longer, more useful educational content for physicians and practice managers who need help understanding a process before they evaluate vendors.",
    metaTitle: "Medical Billing Guides | Apex Precision Billing Inc",
    metaDescription:
      "Review Apex Precision Billing guides on medical billing workflows, claim management, coding coordination, and revenue cycle improvement.",
    breadcrumbs: [{ label: "Resources", href: "/resources" }],
    sections: [
      {
        title: "Guide formats we can support",
        body: [
          "These pages are designed to support longer-form educational content without needing a blog post layout.",
        ],
        bullets: [
          "Step-by-step workflow guides",
          "Practice checklists",
          "Comparisons of in-house versus outsourced processes",
          "Specialty-specific billing primers",
        ],
      },
      {
        title: "Designed for search and usability",
        body: [
          "Guides are particularly valuable because they can rank for high-intent informational searches while also helping qualified visitors decide whether they need outside support.",
        ],
      },
    ],
    relatedLinks: [
      { label: "CPT Coding Resources", href: "/coding-resources/cpt" },
      { label: "ICD-10 Resources", href: "/coding-resources/icd-10" },
      { label: "Glossary", href: "/glossary" },
    ],
    primaryCta: {
      label: "Schedule a consultation",
      href: "/schedule-consultation",
    },
    secondaryCta: { label: "Back to resources", href: "/resources" },
  },
  "coding-resources-cpt": {
    path: "/coding-resources/cpt",
    title: "CPT Coding Resources",
    eyebrow: "Coding Resources",
    intro:
      "This hub is meant to support educational content around CPT-related workflow questions, coding coordination, and billing issues that affect clean claim performance.",
    metaTitle: "CPT Coding Resources | Apex Precision Billing Inc",
    metaDescription:
      "Browse Apex Precision Billing CPT coding resources focused on documentation alignment, workflow accuracy, and revenue cycle efficiency.",
    breadcrumbs: [{ label: "Resources", href: "/resources" }],
    sections: [
      {
        title: "Planned resource types",
        body: [
          "CPT content should help practices understand how code selection, documentation, and claim handling connect.",
        ],
        bullets: [
          "Workflow education for charge capture",
          "Coding-adjacent billing questions",
          "Service-line specific reference content",
          "Physician and staff education topics",
        ],
      },
      {
        title: "Role in the new site architecture",
        body: [
          "A dedicated CPT hub makes it easier to organize future articles and link them back to relevant services like medical coding, denial management, and charge entry.",
        ],
      },
    ],
    relatedLinks: [
      { label: "ICD-10 Resources", href: "/coding-resources/icd-10" },
      { label: "Medical Coding Services", href: "/services" },
      { label: "Resources hub", href: "/resources" },
    ],
    primaryCta: { label: "Talk to Apex", href: "/contact" },
    secondaryCta: { label: "Back to resources", href: "/resources" },
  },
  "coding-resources-icd10": {
    path: "/coding-resources/icd-10",
    title: "ICD-10 Resources",
    eyebrow: "Coding Resources",
    intro:
      "The ICD-10 hub is intended for educational pages that help practices understand diagnosis coding context, documentation alignment, and downstream claim impact.",
    metaTitle: "ICD-10 Resources | Apex Precision Billing Inc",
    metaDescription:
      "Explore ICD-10 resources from Apex Precision Billing covering diagnosis coding workflow, documentation support, and clean claim performance.",
    breadcrumbs: [{ label: "Resources", href: "/resources" }],
    sections: [
      {
        title: "What this hub will support",
        body: [
          "ICD-10 content works best when it connects clinical documentation habits to billing outcomes.",
        ],
        bullets: [
          "Diagnosis documentation education",
          "Claim edit and denial context",
          "Specialty-specific examples",
          "Operational guidance for staff and providers",
        ],
      },
      {
        title: "Why it belongs in the build",
        body: [
          "Apex wants to compete as a premium healthcare billing brand. That means publishing helpful content around the topics physicians and staff already struggle with, not just sales copy.",
        ],
      },
    ],
    relatedLinks: [
      { label: "CPT Coding Resources", href: "/coding-resources/cpt" },
      { label: "Glossary", href: "/glossary" },
      { label: "Resources hub", href: "/resources" },
    ],
    primaryCta: { label: "Request a quote", href: "/request-a-quote" },
    secondaryCta: { label: "Back to resources", href: "/resources" },
  },
  glossary: {
    path: "/glossary",
    title: "Medical Billing Glossary",
    eyebrow: "Glossary",
    intro:
      "A glossary gives Apex a scalable place to define billing and revenue cycle terminology in plain language for physicians, administrators, and practice staff.",
    metaTitle: "Medical Billing Glossary | Apex Precision Billing Inc",
    metaDescription:
      "Review medical billing glossary content from Apex Precision Billing covering revenue cycle terminology, claim language, and coding-related definitions.",
    breadcrumbs: [{ label: "Resources", href: "/resources" }],
    sections: [
      {
        title: "What glossary content should do",
        body: [
          "The best glossary entries are short, useful, and linked to more detailed service or guide pages. They help users understand terms quickly without forcing them into jargon-heavy pages.",
        ],
        bullets: [
          "Clear definitions for RCM and claim terminology",
          "Internal links to related services and guides",
          "Simple explanations suitable for clinical and administrative audiences",
        ],
      },
      {
        title: "Why this route matters now",
        body: [
          "Even before entries are published, the glossary route helps establish the site map Apex needs to support a more serious content strategy.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Guides", href: "/guides" },
      { label: "Blog", href: "/blog" },
      { label: "Resources hub", href: "/resources" },
    ],
    primaryCta: { label: "Contact Apex", href: "/contact" },
    secondaryCta: { label: "Back to resources", href: "/resources" },
  },
  "free-billing-audit": {
    path: "/free-billing-audit",
    title: "Free Billing Audit",
    eyebrow: "Conversion",
    intro:
      "Apex is adding a dedicated audit page so visitors have a clear next step when they want help reviewing denials, aging AR, workflow gaps, or front-end billing friction without navigating a general contact page first.",
    metaTitle: "Free Billing Audit | Apex Precision Billing Inc",
    metaDescription:
      "Request a free billing audit from Apex Precision Billing to identify revenue cycle gaps, denial trends, and workflow issues affecting your practice.",
    highlights: [
      "Workflow review",
      "Denial trend review",
      "AR visibility",
      "Practice-specific conversation",
    ],
    sections: [
      {
        title: "Who this page is for",
        body: [
          "This route is designed for physician groups and healthcare organizations that know something in the revenue cycle is not working but need a structured conversation to identify where the biggest gaps are.",
        ],
      },
      {
        title: "What the conversation should uncover",
        body: [
          "A useful billing audit conversation should move quickly toward operational priorities.",
        ],
        bullets: [
          "Where claims are stalling",
          "Which denials deserve immediate attention",
          "Whether front-end errors are feeding back-end rework",
          "What reporting and accountability are currently missing",
        ],
      },
    ],
    relatedLinks: [
      { label: "Medical Billing Services", href: "/services" },
      { label: "Schedule a Consultation", href: "/schedule-consultation" },
      { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
    ],
    primaryCta: { label: "Contact Apex", href: "/contact" },
    secondaryCta: {
      label: "Schedule a consultation",
      href: "/schedule-consultation",
    },
  },
  "schedule-consultation": {
    path: "/schedule-consultation",
    title: "Schedule a Consultation",
    eyebrow: "Conversion",
    intro:
      "This page is meant to give serious prospects a direct path to a sales conversation without making them search through general marketing pages first.",
    metaTitle: "Schedule a Consultation | Apex Precision Billing Inc",
    metaDescription:
      "Schedule a consultation with Apex Precision Billing to discuss medical billing, RCM workflow, specialty support, and revenue cycle priorities.",
    sections: [
      {
        title: "Use consultation pages to reduce friction",
        body: [
          "When a visitor is ready to talk, the site should make that step obvious. A dedicated consultation route improves conversion clarity and supports cleaner CTA paths across the rest of the site.",
        ],
      },
      {
        title: "Typical consultation topics",
        body: [
          "This route can support conversations around both immediate problems and longer-term operational planning.",
        ],
        bullets: [
          "Current billing pain points",
          "Specialty-specific workflow concerns",
          "Staffing and outsourcing questions",
          "Reporting, denial management, and payer follow-up",
        ],
      },
    ],
    relatedLinks: [
      { label: "Free Billing Audit", href: "/free-billing-audit" },
      { label: "Medical Billing Services", href: "/services" },
      { label: "Contact Sales", href: "/contact-sales" },
    ],
    primaryCta: { label: "Contact sales", href: "/contact-sales" },
    secondaryCta: { label: "Request a quote", href: "/request-a-quote" },
  },
  "request-a-quote": {
    path: "/request-a-quote",
    title: "Request a Quote",
    eyebrow: "Conversion",
    intro:
      "A quote request page helps Apex separate pricing-oriented conversations from general inquiries, making it easier to route prospects toward the right next step.",
    metaTitle: "Request a Quote | Apex Precision Billing Inc",
    metaDescription:
      "Request a quote from Apex Precision Billing for medical billing, revenue cycle support, specialty billing, and healthcare back-office services.",
    sections: [
      {
        title: "Why a dedicated quote route matters",
        body: [
          "Prospects asking for pricing usually have a different intent than visitors browsing resources. A dedicated page allows Apex to present the quote request as a structured business conversation rather than a generic lead form.",
        ],
      },
      {
        title: "What influences scope",
        body: [
          "Medical billing pricing should be discussed in the context of workflow and operating model, not just a headline percentage.",
        ],
        bullets: [
          "Practice size and specialty mix",
          "Existing billing process maturity",
          "Systems and staffing model",
          "Need for related services like coding, AR recovery, or credentialing",
        ],
      },
    ],
    relatedLinks: [
      { label: "Schedule a Consultation", href: "/schedule-consultation" },
      { label: "Free Billing Audit", href: "/free-billing-audit" },
      { label: "Medical Billing Services", href: "/services" },
    ],
    primaryCta: { label: "Contact Apex", href: "/contact" },
    secondaryCta: { label: "Contact sales", href: "/contact-sales" },
  },
  "contact-sales": {
    path: "/contact-sales",
    title: "Contact Sales",
    eyebrow: "Conversion",
    intro:
      "This route gives Apex a cleaner destination for commercial conversations, especially for larger practices or organizations comparing vendors and service models.",
    metaTitle: "Contact Sales | Apex Precision Billing Inc",
    metaDescription:
      "Contact the Apex Precision Billing sales team to discuss medical billing services, specialty support, workflow needs, and next-step planning.",
    sections: [
      {
        title: "A clearer path for qualified leads",
        body: [
          "Not every inquiry is the same. Contact Sales is designed for teams who want to discuss services, scope, timelines, and fit in a more focused way.",
        ],
      },
      {
        title: "Conversations this page should support",
        body: [
          "Sales conversations usually become easier when the page itself explains what Apex can help evaluate.",
        ],
        bullets: [
          "Service fit across billing and RCM functions",
          "Specialty support questions",
          "Transition planning from an existing vendor or internal team",
          "Multi-location or higher-volume operational needs",
        ],
      },
    ],
    relatedLinks: [
      { label: "Schedule a Consultation", href: "/schedule-consultation" },
      { label: "Request a Quote", href: "/request-a-quote" },
      { label: "Medical Billing Services", href: "/services" },
    ],
    primaryCta: { label: "Contact Apex", href: "/contact" },
    secondaryCta: {
      label: "Schedule a consultation",
      href: "/schedule-consultation",
    },
  },
  careers: {
    path: "/careers",
    title: "Careers",
    eyebrow: "Company",
    intro:
      "A careers page helps Apex present itself as an operating company with standards, process discipline, and room for growth, not just a lead-generation website.",
    metaTitle: "Careers | Apex Precision Billing Inc",
    metaDescription:
      "Learn about career opportunities at Apex Precision Billing across billing operations, coding support, compliance, and client service.",
    sections: [
      {
        title: "Why this page belongs in the build",
        body: [
          "Careers pages can support recruiting, but they also contribute to credibility. They show that the company is building teams, defining roles, and investing in operations.",
        ],
      },
      {
        title: "Role categories we can support later",
        body: [
          "The route is now in place for future recruiting content and job listings.",
        ],
        bullets: [
          "Medical billing operations",
          "Coding and compliance support",
          "Account management and client success",
          "Administrative and sales support",
        ],
      },
    ],
    primaryCta: { label: "Contact Apex", href: "/contact" },
    secondaryCta: { label: "About Apex", href: "/about" },
  },
  "hipaa-notice": {
    path: "/hipaa-notice",
    title: "HIPAA Notice",
    eyebrow: "Legal",
    intro:
      "This page gives Apex a dedicated location for explaining its privacy and protected health information posture at a higher level than the general privacy policy.",
    metaTitle: "HIPAA Notice | Apex Precision Billing Inc",
    metaDescription:
      "Review Apex Precision Billing's HIPAA notice and overview of how protected health information is handled within billing and revenue cycle workflows.",
    sections: [
      {
        title: "Purpose of the notice",
        body: [
          "A HIPAA-focused page helps visitors understand how Apex thinks about protected health information, business associate responsibilities, and operational safeguards in billing workflows.",
        ],
      },
      {
        title: "Topics this page should cover",
        body: [
          "As the legal section expands, this route can support more detailed compliance language and supporting documentation.",
        ],
        bullets: [
          "Handling of protected health information",
          "Role of business associate agreements",
          "Administrative and technical safeguards",
          "Questions clients can raise during onboarding",
        ],
      },
    ],
    primaryCta: { label: "Contact Apex", href: "/contact" },
    secondaryCta: { label: "Privacy Policy", href: "/privacy" },
  },
  "cookie-policy": {
    path: "/cookie-policy",
    title: "Cookie Policy",
    eyebrow: "Legal",
    intro:
      "A dedicated cookie policy page completes the legal foundation for the site and gives Apex a clearer place to explain analytics, preference, and site functionality cookies.",
    metaTitle: "Cookie Policy | Apex Precision Billing Inc",
    metaDescription:
      "Review the Apex Precision Billing cookie policy for information about analytics, site preferences, and how cookie-related data is used on the website.",
    sections: [
      {
        title: "Why this route is needed",
        body: [
          "Cookie disclosures are often bundled awkwardly into a privacy policy. A standalone route makes the legal structure cleaner and easier to update if tooling or consent practices change later.",
        ],
      },
      {
        title: "What users should be able to learn here",
        body: [
          "The page provides a dedicated destination for future policy detail.",
        ],
        bullets: [
          "Which categories of cookies may be used",
          "How cookies support analytics and site performance",
          "How users can manage preferences",
          "Where related privacy information is documented",
        ],
      },
    ],
    primaryCta: { label: "Privacy Policy", href: "/privacy" },
    secondaryCta: { label: "Contact Apex", href: "/contact" },
  },
  "why-practices-choose-us": {
    path: "/why-practices-choose-us",
    title: "Why Practices Choose Apex Precision Billing",
    eyebrow: "Why Choose Us",
    intro:
      "Apex builds trust by delivering reliable medical billing workflows, disciplined follow-up, and transparent communication. Practices choose Apex for the clarity we bring to the revenue cycle, not for inflated promises or generic service claims.",
    metaTitle: "Why Practices Choose Apex Precision Billing | Apex Precision Billing Inc",
    metaDescription:
      "Discover why healthcare practices choose Apex Precision Billing for reliable, compliant, and transparent medical billing support across specialties and practice sizes.",
    highlights: [
      "Specialty-aware billing support",
      "Transparent reporting and communication",
      "Dedicated account management",
      "Compliance-minded workflows",
    ],
    sections: [
      {
        title: "Specialty-aware billing expertise",
        body: [
          "Billing workflows vary significantly by specialty. Apex tailors its approach to match the documentation patterns, payer rules, and claim complexity of each practice type rather than applying a one-size-fits-all process.",
          "This means fewer rejected claims, faster follow-up, and a billing partner who understands the clinical and operational context of each claim before it is submitted.",
        ],
        bullets: [
          "Claims managed with attention to specialty-specific code sets and modifiers",
          "Payer follow-up organized around the denial patterns most common in your field",
          "Documentation feedback loops that help clinical and billing teams stay aligned",
        ],
      },
      {
        title: "Transparent reporting and communication",
        body: [
          "Apex believes reporting should help practices make decisions. Our dashboards and summaries focus on actionable metrics such as denial trends, aging AR, claim acceptance rates, and follow-up status rather than vanity numbers.",
          "Weekly and monthly reporting cadences ensure practice leaders always know where the revenue cycle stands and which issues need attention.",
        ],
        bullets: [
          "Clear, jargon-free reporting tailored to practice decision-making",
          "Defined escalation paths for aging claims and denial patterns",
          "Regular check-ins that focus on next steps, not just past results",
        ],
      },
      {
        title: "Dedicated support and account management",
        body: [
          "Every Apex client is assigned a dedicated account manager who understands their practice's workflow, payer mix, and operational priorities. This continuity reduces friction and ensures questions are answered without repeating context.",
          "A responsive support structure means practices can reach their billing team when issues arise, not just during scheduled reviews.",
        ],
      },
      {
        title: "Compliance-first operational culture",
        body: [
          "Apex integrates compliance awareness into every stage of the billing workflow. From front-end data handling to payer follow-up and reporting, our processes are designed to protect patient information and maintain audit-ready documentation.",
          "We maintain HIPAA-aware practices, secure data handling procedures, and business associate agreements that set clear expectations around privacy and security.",
        ],
      },
    ],
    relatedLinks: [
      { label: "About Apex", href: "/about" },
      { label: "Medical Billing Services", href: "/services" },
      { label: "Trust Center", href: "/trust" },
    ],
    primaryCta: { label: "Schedule a consultation", href: "/schedule-consultation" },
    secondaryCta: { label: "Request a billing audit", href: "/free-billing-audit" },
  },
  "our-process": {
    path: "/our-process",
    title: "Our Process: From Consultation to Ongoing Revenue Cycle Support",
    eyebrow: "How We Work",
    intro:
      "Apex follows a structured onboarding and service process designed to reduce transition risk, establish clear workflows, and set expectations for communication and reporting from day one.",
    metaTitle: "Our Billing Process | Apex Precision Billing Inc",
    metaDescription:
      "Explore the Apex Precision Billing process from initial consultation through practice assessment, data migration, billing setup, go-live, and monthly reporting.",
    highlights: [
      "Consultation-first approach",
      "Structured onboarding",
      "Defined handoffs and milestones",
      "Continuous reporting and improvement",
    ],
    sections: [
      {
        title: "Step 1: Free Consultation",
        body: [
          "Every engagement starts with a no-obligation consultation to understand the practice's billing environment, pain points, and expectations. This conversation establishes whether Apex is the right fit and identifies the most pressing revenue cycle priorities.",
        ],
        bullets: [
          "Discuss current billing workflow and pain points",
          "Review practice size, specialty mix, and payer distribution",
          "Identify immediate priorities and long-term goals",
        ],
      },
      {
        title: "Step 2: Practice Assessment",
        body: [
          "Apex conducts a structured assessment of your existing billing operations, including claim submission patterns, denial rates, AR aging, coding coordination, and reporting visibility. This assessment produces a clear baseline and identifies the highest-impact improvement areas.",
        ],
        bullets: [
          "Review current claim-to-payment cycle metrics",
          "Identify denial trends and recurring root causes",
          "Assess front-end intake, coding, and follow-up workflows",
        ],
      },
      {
        title: "Step 3: Data Migration",
        body: [
          "When a practice moves to Apex, patient data, payer information, claim histories, and reporting templates are transferred securely and methodically. Apex coordinates with your existing EHR or practice management system to ensure continuity during the transition.",
        ],
        bullets: [
          "Secure transfer of practice and patient data",
          "EHR and PM system coordination",
          "Verification of data completeness before go-live",
        ],
      },
      {
        title: "Step 4: Billing Setup",
        body: [
          "Apex configures billing workflows, payer connections, claim submission protocols, denial management templates, and reporting dashboards tailored to the practice's specialty, payer mix, and operational preferences.",
        ],
        bullets: [
          "Payer enrollment and credentialing verification",
          "Claim format and submission protocol configuration",
          "Reporting dashboard setup aligned to practice KPIs",
        ],
      },
      {
        title: "Step 5: Go Live",
        body: [
          "With workflows configured and data in place, Apex activates billing operations. The go-live phase includes close monitoring of claim submission, payer responses, and early denial patterns to resolve issues before they compound.",
        ],
        bullets: [
          "Supervised claim submission and tracking",
          "Early denial monitoring and rapid intervention",
          "Daily check-ins during the first two weeks",
        ],
      },
      {
        title: "Step 6: Monthly Reporting",
        body: [
          "Once billing operations are stable, Apex transitions to a steady-state cadence of monthly reporting, regular client check-ins, and continuous workflow optimization. Reports focus on actionable trends rather than vanity metrics.",
        ],
        bullets: [
          "Monthly performance reports with trend analysis",
          "Regular account management check-ins",
          "Ongoing denial prevention and AR optimization",
        ],
      },
    ],
    relatedLinks: [
      { label: "Free Billing Audit", href: "/free-billing-audit" },
      { label: "Medical Billing Services", href: "/services" },
      { label: "Why Choose Apex", href: "/why-practices-choose-us" },
    ],
    primaryCta: { label: "Schedule a consultation", href: "/schedule-consultation" },
    secondaryCta: { label: "Request a billing audit", href: "/free-billing-audit" },
  },
  security: {
    path: "/security",
    title: "Security and Data Protection",
    eyebrow: "Security",
    intro:
      "Apex takes data security and privacy seriously. This page outlines the technical, administrative, and physical safeguards we maintain to protect practice and patient information across every stage of the billing workflow.",
    metaTitle: "Data Security and Privacy | Apex Precision Billing Inc",
    metaDescription:
      "Learn about Apex Precision Billing's security measures including data encryption, secure servers, access controls, HIPAA practices, and secure file transfer protocols.",
    highlights: [
      "Data encryption standards",
      "Secure server infrastructure",
      "Access control protocols",
      "HIPAA-aligned practices",
    ],
    sections: [
      {
        title: "Data Encryption",
        body: [
          "Apex uses industry-standard encryption protocols for data at rest and in transit. Patient health information, practice financial data, and payer communications are protected using AES-256 encryption for stored data and TLS 1.3 for data transmitted over networks.",
          "Encryption keys are managed through secure, role-restricted infrastructure to prevent unauthorized access.",
        ],
      },
      {
        title: "Secure Server Infrastructure",
        body: [
          "Apex hosting environments are maintained in SOC 2-compliant data centers with physical security controls, redundant power, network monitoring, and 24/7 surveillance. Server access is restricted to authorized personnel and logged for audit purposes.",
        ],
        bullets: [
          "SOC 2-compliant data centers",
          "Redundant infrastructure with disaster recovery planning",
          "Continuous network monitoring and intrusion detection",
        ],
      },
      {
        title: "Access Control",
        body: [
          "Access to practice data is restricted on a need-to-know basis. Apex enforces role-based access controls, multi-factor authentication, and regular access reviews to ensure only authorized team members can view or modify billing information.",
        ],
        bullets: [
          "Role-based access controls for all systems",
          "Multi-factor authentication requirement",
          "Quarterly access audits and revocation protocols",
        ],
      },
      {
        title: "HIPAA Practices",
        body: [
          "Apex maintains administrative, technical, and physical safeguards aligned with HIPAA Security and Privacy Rules. All team members complete HIPAA training, and our policies are reviewed and updated regularly to reflect regulatory changes.",
        ],
        bullets: [
          "Annual HIPAA training for all staff",
          "Policies reviewed and updated quarterly",
          "Breach notification procedures in place",
        ],
      },
      {
        title: "Secure File Transfer",
        body: [
          "Apex uses secure, encrypted file transfer protocols for exchanging practice data, reports, and documentation. Standard email attachments are not used for protected health information.",
        ],
        bullets: [
          "Encrypted portals for document exchange",
          "Secure FTP and API-based data transfer options",
          "Audit logs for all data transfers",
        ],
      },
      {
        title: "Business Associate Agreements",
        body: [
          "Apex executes Business Associate Agreements with all clients to establish clear terms around the use, storage, and protection of protected health information. BAAs define each party's responsibilities and are maintained for the duration of the engagement.",
        ],
      },
    ],
    relatedLinks: [
      { label: "HIPAA Notice", href: "/hipaa-notice" },
      { label: "Compliance", href: "/compliance" },
      { label: "Quality Assurance", href: "/quality-assurance" },
    ],
    primaryCta: { label: "Contact Apex", href: "/contact" },
    secondaryCta: { label: "Review HIPAA Notice", href: "/hipaa-notice" },
  },
  compliance: {
    path: "/compliance",
    title: "Compliance in Medical Billing Operations",
    eyebrow: "Compliance",
    intro:
      "Compliance is embedded in how Apex handles claims, data, payer communications, and client reporting. This page explains the regulatory principles, training standards, and operational safeguards that guide our daily work.",
    metaTitle: "Medical Billing Compliance | Apex Precision Billing Inc",
    metaDescription:
      "Learn how Apex Precision Billing maintains compliance in medical billing operations through HIPAA training, audit-ready documentation, payer rule adherence, and regulatory awareness.",
    highlights: [
      "HIPAA-trained billing teams",
      "Audit-ready documentation practices",
      "Payer rule adherence",
      "Ongoing compliance education",
    ],
    sections: [
      {
        title: "Regulatory framework and standards",
        body: [
          "Apex billing operations are guided by HIPAA Privacy and Security Rules, Medicare and Medicaid program requirements, state-specific billing regulations, and payer-specific compliance guidelines. Our team stays current on regulatory changes that affect claim submission, documentation, and reimbursement.",
          "Compliance is not treated as a checklist. It is integrated into workflow design, training programs, and quality review processes so that every claim reflects current standards.",
        ],
        bullets: [
          "HIPAA Privacy and Security Rule adherence across all workflows",
          "Medicare, Medicaid, and commercial payer compliance awareness",
          "State-specific billing regulation monitoring",
        ],
      },
      {
        title: "Training and education",
        body: [
          "All Apex team members complete annual compliance training that covers HIPAA requirements, fraud and abuse prevention, documentation integrity, and payer communication standards. Role-specific training is provided for coding, claims, AR, and client-facing teams.",
          "Training records are maintained and available for client review as part of our commitment to transparency.",
        ],
        bullets: [
          "Annual company-wide compliance training",
          "Role-specific workflow and coding compliance education",
          "Ongoing updates when regulations or payer policies change",
        ],
      },
      {
        title: "Audit-ready documentation",
        body: [
          "Apex maintains documentation standards that support internal quality reviews, client inquiries, and external audit requests. Claim records, communication logs, denial tracking, and reporting data are organized and retained according to regulatory and contractual requirements.",
        ],
        bullets: [
          "Structured documentation for claims, denials, and follow-up actions",
          "Retention schedules aligned with regulatory and payer requirements",
          "Documentation accessible for client and audit review",
        ],
      },
      {
        title: "Payer rule adherence",
        body: [
          "Apex monitors payer policy updates, coding guideline changes, and claim submission requirements across the commercial, government, and managed care payers relevant to each client's practice. Changes that affect billing workflows are communicated to clients and incorporated into operational procedures.",
        ],
        bullets: [
          "Payer policy change monitoring and impact analysis",
          "Coding guideline updates integrated into claim preparation",
          "Client notification when payer changes affect practice workflows",
        ],
      },
    ],
    relatedLinks: [
      { label: "HIPAA Notice", href: "/hipaa-notice" },
      { label: "Security", href: "/security" },
      { label: "Quality Assurance", href: "/quality-assurance" },
    ],
    primaryCta: { label: "Contact Apex", href: "/contact" },
    secondaryCta: { label: "Review HIPAA Notice", href: "/hipaa-notice" },
  },
  "quality-assurance": {
    path: "/quality-assurance",
    title: "Quality Assurance in Billing Operations",
    eyebrow: "Quality",
    intro:
      "Quality assurance at Apex is a continuous process of reviewing claim accuracy, coding alignment, denial patterns, and reporting integrity. We build quality checks into every stage of the revenue cycle rather than treating QA as a final review step.",
    metaTitle: "Billing Quality Assurance | Apex Precision Billing Inc",
    metaDescription:
      "Learn how Apex Precision Billing maintains quality assurance through multi-level claim review, performance metrics, denial analysis, and continuous process improvement.",
    highlights: [
      "Multi-level claim review process",
      "Performance metric tracking",
      "Denial pattern analysis",
      "Continuous improvement culture",
    ],
    sections: [
      {
        title: "Multi-level claim review",
        body: [
          "Claims pass through multiple quality checkpoints before submission. Front-end data validation, coding accuracy review, payer rule verification, and claim completeness checks are performed to reduce the risk of rejections and denials before claims reach the payer.",
          "Post-submission review tracks acceptance rates, denial reasons, and payer response patterns so that recurring issues are identified and addressed at the root cause.",
        ],
        bullets: [
          "Pre-submission validation of patient data, codes, and modifiers",
          "Payer-specific rule verification before claim transmission",
          "Post-submission denial reason tracking and root cause analysis",
        ],
      },
      {
        title: "Performance metrics and monitoring",
        body: [
          "Apex tracks key performance indicators across the billing workflow including claim acceptance rates, denial percentages, days in AR, payment posting timeliness, and clean claim ratios. These metrics are reviewed regularly and reported to clients in a format designed for decision-making.",
        ],
        bullets: [
          "Clean claim rate tracking and trend analysis",
          "Denial rate monitoring by payer and reason code",
          "AR aging reports with actionable follow-up priorities",
        ],
      },
      {
        title: "Denial pattern analysis",
        body: [
          "Denials are analyzed for recurring causes rather than resolved individually. Apex categorizes denials by reason code, payer, service type, and documentation context to identify systemic issues that can be corrected upstream, reducing denial volume over time.",
        ],
        bullets: [
          "Denial categorization by root cause, not just reason code",
          "Upstream workflow corrections to prevent recurring denials",
          "Client reporting focused on denial trends and preventive actions",
        ],
      },
      {
        title: "Continuous improvement process",
        body: [
          "QA at Apex is not static. Workflow procedures, training materials, and quality checkpoints are reviewed and updated based on audit findings, client feedback, payer policy changes, and industry best practices. Improvement cycles are documented and shared with clients as part of our operational transparency.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Our Technology", href: "/our-technology" },
      { label: "Compliance", href: "/compliance" },
      { label: "Security", href: "/security" },
    ],
    primaryCta: { label: "Schedule a consultation", href: "/schedule-consultation" },
    secondaryCta: { label: "Free Billing Audit", href: "/free-billing-audit" },
  },
  "our-technology": {
    path: "/our-technology",
    title: "Technology and Infrastructure",
    eyebrow: "Technology",
    intro:
      "Apex uses technology to support billing accuracy, workflow transparency, and secure data handling. This page explains our infrastructure approach, platform capabilities, and how technology enables better revenue cycle outcomes for our clients.",
    metaTitle: "Billing Technology and Infrastructure | Apex Precision Billing Inc",
    metaDescription:
      "Learn about Apex Precision Billing's technology infrastructure including billing platforms, reporting tools, secure data handling, and EHR integration capabilities.",
    highlights: [
      "Modern billing platform infrastructure",
      "Comprehensive reporting and analytics",
      "EHR and practice management integration",
      "Secure, reliable technology environment",
    ],
    sections: [
      {
        title: "Billing platform infrastructure",
        body: [
          "Apex operates on modern, cloud-based billing platforms designed for claim accuracy, payer connectivity, denial tracking, and payment posting. Our technology stack prioritizes reliability, compliance, and the ability to adapt to payer requirement changes.",
          "Platforms are selected for their ability to support multi-specialty billing, scalable workflows, and detailed reporting rather than generic one-size-fits-all functionality.",
        ],
        bullets: [
          "Cloud-based infrastructure with enterprise-grade reliability",
          "Multi-payer connectivity with automated claim submission",
          "Platform flexibility to support specialty-specific workflows",
        ],
      },
      {
        title: "Reporting and analytics capabilities",
        body: [
          "Apex reporting tools are designed to deliver actionable insight, not vanity metrics. Dashboards track claim status, denial trends, AR aging, payment posting, and revenue cycle performance in formats that support practice decision-making.",
          "Reports can be customized to match each practice's operational priorities and delivered on a schedule that aligns with client review cadences.",
        ],
        bullets: [
          "Customizable dashboards focused on actionable metrics",
          "Trend analysis for denials, AR, and claim acceptance",
          "Scheduled and on-demand reporting options",
        ],
      },
      {
        title: "EHR and practice management integration",
        body: [
          "Apex coordinates billing workflows with the EHR and practice management systems already in use by each client. Integration priorities include charge capture data flow, patient demographic verification, claim file generation, and payment posting synchronization.",
          "We approach integrations with care, focusing on workflow compatibility and data integrity rather than claiming unsupported technical partnerships.",
        ],
        bullets: [
          "EHR integration for charge capture and claim data flow",
          "Patient demographic and eligibility data synchronization",
          "Payment posting coordination with practice management systems",
        ],
      },
      {
        title: "Security and reliability",
        body: [
          "Apex technology infrastructure is built on secure, monitored, and redundant systems. Data backup, disaster recovery, uptime monitoring, and security patching are managed proactively. Our approach to technology is grounded in the same compliance and security standards we apply to every other part of the billing workflow.",
        ],
        bullets: [
          "Automated backup and disaster recovery procedures",
          "Proactive system monitoring and security patching",
          "Redundant infrastructure for critical billing operations",
        ],
      },
    ],
    relatedLinks: [
      { label: "Security", href: "/security" },
      { label: "Quality Assurance", href: "/quality-assurance" },
      { label: "Medical Billing Services", href: "/services" },
    ],
    primaryCta: { label: "Schedule a consultation", href: "/schedule-consultation" },
    secondaryCta: { label: "Contact Apex", href: "/contact" },
  },
  team: {
    path: "/team",
    title: "Meet the Apex Team",
    eyebrow: "Company",
    intro:
      "Apex is built around experienced billing professionals who understand the revenue cycle from front-end intake through final payment. Our team structure is designed for accountability, specialty awareness, and responsive client communication.",
    metaTitle: "Our Team | Apex Precision Billing Inc",
    metaDescription:
      "Meet the Apex Precision Billing team including leadership, billing specialists, certified coders, AR specialists, and client success professionals.",
    highlights: [
      "Experienced billing leadership",
      "Certified coding professionals",
      "Dedicated AR recovery teams",
      "Client-focused account management",
    ],
    sections: [
      {
        title: "Leadership",
        body: [
          "Apex leadership brings decades of combined experience in medical billing, revenue cycle management, healthcare operations, and practice management. The leadership team sets operational standards, oversees compliance, and ensures that every client engagement reflects Apex discipline and accountability.",
        ],
      },
      {
        title: "Billing Specialists",
        body: [
          "Our billing team manages claim submission, payer follow-up, payment posting, and patient balance resolution. Each specialist is trained in multi-specialty billing workflows and assigned to client accounts based on relevant experience and practice type alignment.",
        ],
        bullets: [
          "Multi-specialty claim submission expertise",
          "Payer-specific follow-up and escalation procedures",
          "Payment posting accuracy and reconciliation",
        ],
      },
      {
        title: "Certified Coders",
        body: [
          "Apex coding professionals hold relevant certifications and maintain current knowledge of CPT, ICD-10, and HCPCS coding guidelines. Coding support is integrated into the billing workflow to ensure documentation alignment and clean claim preparation.",
        ],
        bullets: [
          "Certified coders with multi-specialty experience",
          "Coding audit and documentation feedback services",
          "Ongoing education to maintain certification and regulatory awareness",
        ],
      },
      {
        title: "AR Specialists",
        body: [
          "Accounts receivable recovery requires persistence, organization, and attention to detail. Apex AR specialists focus on aging balances, payer follow-up, denial rework, and patient balance resolution using a structured prioritization framework.",
        ],
        bullets: [
          "Structured aging balance review and prioritization",
          "Payer follow-up with documented escalation paths",
          "Patient balance communication and resolution support",
        ],
      },
      {
        title: "Client Success",
        body: [
          "Client success managers serve as the primary point of contact for each practice, ensuring communication is consistent, reporting is clear, and operational issues are addressed promptly. They coordinate internally across billing, coding, and AR teams to maintain service quality.",
        ],
        bullets: [
          "Dedicated point of contact for each client account",
          "Regular operational reviews and performance discussions",
          "Internal coordination across billing, coding, and AR teams",
        ],
      },
      {
        title: "Operations",
        body: [
          "The operations team manages the infrastructure, compliance programs, and workflow standards that enable billing teams to perform consistently. Operations is responsible for technology, training, quality assurance, and regulatory monitoring.",
        ],
      },
    ],
    relatedLinks: [
      { label: "About Apex", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Why Choose Apex", href: "/why-practices-choose-us" },
    ],
    primaryCta: { label: "Contact Apex", href: "/contact" },
    secondaryCta: { label: "Explore Careers", href: "/careers" },
  },
};

export function requireContentPage(key: string): MarketingPageContent {
  const page = contentPages[key];
  if (!page) {
    throw new Error(`Unknown content page: ${key}`);
  }
  return page;
}
