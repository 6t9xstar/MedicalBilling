export interface ResourceHubLink {
  label: string;
  href: string;
}

export interface ResourceHubSection {
  title: string;
  description: string;
}

export interface ResourceHubTopic {
  title: string;
  description: string;
  href: string;
  category: string;
}

export interface ResourceHubPage {
  key: string;
  path: string;
  title: string;
  eyebrow: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbs?: ResourceHubLink[];
  pillars: ResourceHubSection[];
  featuredTopics: ResourceHubTopic[];
  serviceLinks: ResourceHubLink[];
  specialtyLinks: ResourceHubLink[];
  faqs: { question: string; answer: string }[];
  primaryCta: ResourceHubLink;
  secondaryCta: ResourceHubLink;
}

export const resourceHubs: ResourceHubPage[] = [
  {
    key: "resources",
    path: "/resources",
    title: "Resources for Medical Practices",
    eyebrow: "Resource Hub",
    intro:
      "Apex is rebuilding its resource center for physicians, practice leaders, and office teams who want practical guidance on claim workflows, coding coordination, denials, and revenue cycle operations before they commit to a vendor conversation.",
    metaTitle: "Medical Billing Resources | Apex Precision Billing Inc",
    metaDescription:
      "Browse Apex Precision Billing resources including blog insights, billing guides, case-study frameworks, coding references, and a medical billing glossary.",
    pillars: [
      {
        title: "Use the hub by decision stage",
        description:
          "Start with the blog when you need context, move to guides when you need a process explanation, and use the coding and glossary sections when your team needs a quick reference during day-to-day work.",
      },
      {
        title: "Built for trust, not filler content",
        description:
          "These pages are structured to sound like operational guidance for real practices rather than recycled marketing copy. The goal is to make Apex more useful before the first call happens.",
      },
      {
        title: "Connected to service and specialty pages",
        description:
          "Every resource area is linked back to the revenue cycle services and specialty pages where a physician group can go deeper if a specific billing problem keeps recurring.",
      },
    ],
    featuredTopics: [
      {
        title: "Medical billing blog",
        description:
          "Short-form insight on denial trends, intake mistakes, payer friction, and operational reporting.",
        href: "/blog",
        category: "Editorial",
      },
      {
        title: "Medical billing guides",
        description:
          "Longer decision-support content for practices comparing workflows, staffing models, and outsourcing options.",
        href: "/guides",
        category: "Guides",
      },
      {
        title: "Case studies and proof points",
        description:
          "A framework for showing what changed operationally, not just claiming that outcomes improved.",
        href: "/case-studies",
        category: "Evidence",
      },
      {
        title: "CPT coding resources",
        description:
          "Reference material for charge capture, documentation alignment, and coding-related claim friction.",
        href: "/coding-resources/cpt",
        category: "Coding",
      },
      {
        title: "ICD-10 resources",
        description:
          "Diagnosis coding context and documentation issues that commonly affect claim movement.",
        href: "/coding-resources/icd-10",
        category: "Coding",
      },
      {
        title: "Medical billing glossary",
        description:
          "Plain-language definitions for billing, coding, payer, and revenue cycle terminology.",
        href: "/glossary",
        category: "Reference",
      },
    ],
    serviceLinks: [
      { label: "Medical Billing Services", href: "/services/medical-billing" },
      { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
      { label: "Denial Management", href: "/services/denial-management" },
    ],
    specialtyLinks: [
      { label: "Family Medicine Billing", href: "/specialties/family-medicine-billing" },
      { label: "Urgent Care Billing", href: "/specialties/urgent-care-billing" },
      { label: "Mental Health Billing", href: "/specialties/mental-health-billing" },
    ],
    faqs: [
      {
        question: "Who should use the Apex resource hub?",
        answer:
          "It is built for physicians, practice administrators, operations managers, and front-office staff who want clearer language around medical billing and revenue cycle workflow decisions.",
      },
      {
        question: "Is this content only for practices ready to outsource billing?",
        answer:
          "No. The resource center is also meant for teams evaluating internal workflow issues, coding coordination gaps, and payer-related claim friction before they decide on next steps.",
      },
      {
        question: "How do these resource pages connect to Apex services?",
        answer:
          "Each hub points back to service and specialty pages so readers can move from education to a more specific discussion about the billing functions that apply to their practice.",
      },
    ],
    primaryCta: { label: "Schedule a consultation", href: "/schedule-consultation" },
    secondaryCta: { label: "Request a billing audit", href: "/free-billing-audit" },
  },
  {
    key: "blog",
    path: "/blog",
    title: "Medical Billing Blog",
    eyebrow: "Editorial Insights",
    intro:
      "The Apex blog is positioned as a physician-friendly place to explain why claims slow down, where denials often begin, and what practice leaders should review when billing performance becomes harder to predict.",
    metaTitle: "Medical Billing Blog | Apex Precision Billing Inc",
    metaDescription:
      "Read Apex Precision Billing blog insights on denials, billing workflows, payer friction, coding coordination, and healthcare revenue cycle operations.",
    breadcrumbs: [{ label: "Resources", href: "/resources" }],
    pillars: [
      {
        title: "Operational topics over generic thought leadership",
        description:
          "The editorial focus is on practical topics such as registration errors, payer edits, claim follow-up discipline, and reporting blind spots that shape collections and staff workload.",
      },
      {
        title: "Written for busy physician groups",
        description:
          "Articles should help a reader diagnose a workflow problem quickly, understand why it matters, and identify which part of the revenue cycle deserves attention first.",
      },
      {
        title: "Supports long-term topical authority",
        description:
          "A focused stream of useful billing and coding commentary gives Apex a stronger search footprint than a website made only of service pages and contact forms.",
      },
    ],
    featuredTopics: [
      {
        title: "Why denial patterns often start at registration",
        description:
          "Explore the front-end habits that create avoidable back-end rework and delayed payments.",
        href: "/services/eligibility-verification",
        category: "Front-End Workflow",
      },
      {
        title: "What a revenue cycle review should actually uncover",
        description:
          "Use the RCM page as a framework for identifying broken handoffs, unclear ownership, and aging AR pressure.",
        href: "/services/revenue-cycle-management",
        category: "RCM",
      },
      {
        title: "When a practice should request a billing audit",
        description:
          "Compare common warning signs before they become a larger collections problem.",
        href: "/free-billing-audit",
        category: "Assessment",
      },
      {
        title: "Behavioral health reimbursement questions practices ask most",
        description:
          "A specialty landing page that shows how editorial content can connect back to specific practice types.",
        href: "/specialties/mental-health-billing",
        category: "Specialty",
      },
    ],
    serviceLinks: [
      { label: "Eligibility Verification", href: "/services/eligibility-verification" },
      { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
      { label: "Denial Management", href: "/services/denial-management" },
    ],
    specialtyLinks: [
      { label: "Family Medicine Billing", href: "/specialties/family-medicine-billing" },
      { label: "Mental Health Billing", href: "/specialties/mental-health-billing" },
      { label: "Urgent Care Billing", href: "/specialties/urgent-care-billing" },
    ],
    faqs: [
      {
        question: "What kinds of topics belong in the Apex blog?",
        answer:
          "The best fit is content that explains billing operations clearly, including denials, payer behavior, front-end workflow mistakes, coding coordination, and reporting decisions.",
      },
      {
        question: "How is the blog different from the guides section?",
        answer:
          "The blog is for shorter, issue-driven insight. Guides are better for step-by-step education, comparisons, and longer decision-support content.",
      },
      {
        question: "Can blog content help with SEO without sounding generic?",
        answer:
          "Yes, if the writing stays specific to actual workflow problems and avoids vague claims that every billing company repeats.",
      },
    ],
    primaryCta: { label: "Review resource hubs", href: "/resources" },
    secondaryCta: { label: "Request a quote", href: "/request-a-quote" },
  },
  {
    key: "guides",
    path: "/guides",
    title: "Medical Billing Guides",
    eyebrow: "Decision Support",
    intro:
      "The guides library is designed for deeper educational content that helps practices understand billing systems, evaluate workflow options, and prepare better questions before they change vendors or redesign internal processes.",
    metaTitle: "Medical Billing Guides | Apex Precision Billing Inc",
    metaDescription:
      "Review Apex Precision Billing guides on claim workflows, outsourcing decisions, coding coordination, and revenue cycle process improvement.",
    breadcrumbs: [{ label: "Resources", href: "/resources" }],
    pillars: [
      {
        title: "Useful before and during vendor evaluation",
        description:
          "A strong guide can help a practice assess whether its problem is staffing, process design, front-end intake, coding alignment, or payer follow-up discipline.",
      },
      {
        title: "Long-form formats with clear structure",
        description:
          "This section is intended for step-by-step explanations, checklists, comparisons, and implementation-minded content that is too detailed for a standard blog article.",
      },
      {
        title: "Supports higher-intent search traffic",
        description:
          "Guide content can answer the exact questions physician groups search when they are actively comparing in-house billing, outsourced support, or a partial workflow redesign.",
      },
    ],
    featuredTopics: [
      {
        title: "How to evaluate an outsourced billing partner",
        description:
          "A framework for comparing communication, specialty support, workflow visibility, and follow-up discipline.",
        href: "/why-apex",
        category: "Vendor Evaluation",
      },
      {
        title: "What a medical billing audit should include",
        description:
          "Use the audit page as the next step when a practice needs a practical workflow review.",
        href: "/free-billing-audit",
        category: "Assessment",
      },
      {
        title: "How AR recovery fits into overall billing operations",
        description:
          "A guide topic tied directly to the service page for unresolved balances and stuck revenue.",
        href: "/services/accounts-receivable-recovery",
        category: "AR",
      },
      {
        title: "Telehealth billing questions practices should resolve early",
        description:
          "Specialty-aware educational content that pairs well with a dedicated landing page.",
        href: "/specialties/telehealth-billing",
        category: "Specialty",
      },
    ],
    serviceLinks: [
      { label: "Medical Billing Services", href: "/services/medical-billing" },
      { label: "AR Recovery", href: "/services/accounts-receivable-recovery" },
      { label: "Credentialing & Enrollment", href: "/services/credentialing-enrollment" },
    ],
    specialtyLinks: [
      { label: "Internal Medicine Billing", href: "/specialties/internal-medicine-billing" },
      { label: "Home Health Billing", href: "/specialties/home-health-billing" },
      { label: "Telehealth Billing", href: "/specialties/telehealth-billing" },
    ],
    faqs: [
      {
        question: "When should a topic become a guide instead of a blog post?",
        answer:
          "If the subject needs a process walkthrough, a checklist, a comparison, or a multi-step explanation, it is usually a better fit for the guides section.",
      },
      {
        question: "Who are these guides meant for?",
        answer:
          "They are especially helpful for practice owners, office managers, revenue cycle leads, and administrators comparing options for improving billing performance.",
      },
      {
        question: "How do guides support conversions without being overly salesy?",
        answer:
          "A useful guide helps a reader understand the problem first, then points to the most relevant service or consultation page only when the next step is logical.",
      },
    ],
    primaryCta: { label: "Schedule a consultation", href: "/schedule-consultation" },
    secondaryCta: { label: "Explore the blog", href: "/blog" },
  },
  {
    key: "case-studies",
    path: "/case-studies",
    title: "Medical Billing Case Studies",
    eyebrow: "Proof and Process",
    intro:
      "Apex is treating case studies as evidence pages that explain what changed operationally, which billing issues were addressed first, and how a practice should interpret results in context rather than as inflated promises.",
    metaTitle: "Medical Billing Case Studies | Apex Precision Billing Inc",
    metaDescription:
      "Explore Apex Precision Billing case-study structure focused on denial reduction, workflow cleanup, AR recovery, and revenue cycle visibility.",
    breadcrumbs: [{ label: "Resources", href: "/resources" }],
    pillars: [
      {
        title: "Credibility starts with the baseline",
        description:
          "Strong case studies explain the practice type, payer environment, staffing constraints, and existing workflow issues before talking about any results.",
      },
      {
        title: "Show the intervention, not just the outcome",
        description:
          "A reader should understand which handoffs were fixed, how follow-up changed, and what reporting or oversight was added so the improvement feels credible.",
      },
      {
        title: "Useful for sales and for EEAT",
        description:
          "Documented examples help future clients understand how Apex thinks about billing problems while also strengthening the site’s authority and trust signals.",
      },
    ],
    featuredTopics: [
      {
        title: "Reducing recurring denials in a high-volume practice",
        description:
          "A case-study format closely connected to the denial management service page.",
        href: "/services/denial-management",
        category: "Denials",
      },
      {
        title: "Recovering visibility into aging AR",
        description:
          "An example framework for organizations that need a clearer plan for old balances and payer follow-up.",
        href: "/services/accounts-receivable-recovery",
        category: "AR",
      },
      {
        title: "Improving payment posting and cash application discipline",
        description:
          "A proof-point angle that emphasizes workflow improvement rather than exaggerated claims.",
        href: "/services/payment-posting",
        category: "Cash Posting",
      },
      {
        title: "Specialty example: cardiology billing workflow cleanup",
        description:
          "A specialty landing page that could support future case-study storytelling for more complex procedural billing.",
        href: "/specialties/cardiology-billing",
        category: "Specialty",
      },
    ],
    serviceLinks: [
      { label: "Denial Management", href: "/services/denial-management" },
      { label: "AR Recovery", href: "/services/accounts-receivable-recovery" },
      { label: "Payment Posting", href: "/services/payment-posting" },
    ],
    specialtyLinks: [
      { label: "Cardiology Billing", href: "/specialties/cardiology-billing" },
      { label: "Orthopedic Billing", href: "/specialties/orthopedic-billing" },
      { label: "Family Medicine Billing", href: "/specialties/family-medicine-billing" },
    ],
    faqs: [
      {
        question: "What makes a billing case study credible?",
        answer:
          "It should explain the starting conditions, the workflow changes made, the time frame involved, and the business result without pretending that every practice will see the same outcome.",
      },
      {
        question: "Should case studies focus only on revenue growth?",
        answer:
          "No. They can also show better denial visibility, faster follow-up discipline, cleaner handoffs, and improved operational reporting.",
      },
      {
        question: "Why publish case studies before many are available?",
        answer:
          "Creating the section now gives Apex a proper home for future evidence pages and improves internal linking across the rest of the site architecture.",
      },
    ],
    primaryCta: { label: "Contact sales", href: "/contact-sales" },
    secondaryCta: { label: "Request a quote", href: "/request-a-quote" },
  },
  {
    key: "coding-resources-cpt",
    path: "/coding-resources/cpt",
    title: "CPT Coding Resources",
    eyebrow: "Coding Resources",
    intro:
      "This CPT hub is meant to help practices think more clearly about charge capture, procedure coding workflow, documentation alignment, and the billing consequences that follow when coding decisions are not translated cleanly into claims.",
    metaTitle: "CPT Coding Resources | Apex Precision Billing Inc",
    metaDescription:
      "Browse CPT coding resources from Apex Precision Billing covering charge capture, coding coordination, and claim issues tied to procedure billing.",
    breadcrumbs: [{ label: "Resources", href: "/resources" }],
    pillars: [
      {
        title: "Connect coding to claim movement",
        description:
          "CPT content should explain not only code selection but also how coding affects edits, denials, charge entry timing, and downstream payer conversations.",
      },
      {
        title: "Useful for physicians and billing teams",
        description:
          "The best references here help both clinical and administrative audiences understand where documentation and operational workflow need to stay aligned.",
      },
      {
        title: "A natural bridge to coding services",
        description:
          "This hub supports internal linking back to medical coding, charge entry, and denial management when a practice needs more than education.",
      },
    ],
    featuredTopics: [
      {
        title: "How charge entry accuracy affects clean claim performance",
        description:
          "A direct bridge from CPT education to the operational work of getting claims out correctly.",
        href: "/services/charge-entry",
        category: "Charge Capture",
      },
      {
        title: "When coding issues show up as denials instead of edits",
        description:
          "A useful topic for understanding why back-end rework often points to upstream coding decisions.",
        href: "/services/denial-management",
        category: "Denials",
      },
      {
        title: "Specialty example: dermatology procedure mix",
        description:
          "A specialty page that shows where procedure-heavy practices need tighter coding and billing coordination.",
        href: "/specialties/dermatology-billing",
        category: "Specialty",
      },
      {
        title: "Specialty example: pain management reimbursement complexity",
        description:
          "An example of how coding references can connect to a clinical service line with recurring payer scrutiny.",
        href: "/specialties/pain-management-billing",
        category: "Specialty",
      },
    ],
    serviceLinks: [
      { label: "Medical Coding Services", href: "/services/medical-coding" },
      { label: "Charge Entry", href: "/services/charge-entry" },
      { label: "Denial Management", href: "/services/denial-management" },
    ],
    specialtyLinks: [
      { label: "Cardiology Billing", href: "/specialties/cardiology-billing" },
      { label: "Dermatology Billing", href: "/specialties/dermatology-billing" },
      { label: "Pain Management Billing", href: "/specialties/pain-management-billing" },
    ],
    faqs: [
      {
        question: "What should CPT resource content help a practice understand?",
        answer:
          "It should clarify how procedure coding, charge capture, documentation detail, and claim handling affect whether reimbursement moves cleanly.",
      },
      {
        question: "Is this section only for coders?",
        answer:
          "No. It is also useful for physicians, revenue cycle leaders, and billing teams who need a clearer view of how CPT-related workflow decisions affect claims.",
      },
      {
        question: "How does CPT content connect to Apex services?",
        answer:
          "It naturally links to medical coding, charge entry, denial management, and specialty pages where procedural billing complexity is more visible.",
      },
    ],
    primaryCta: { label: "Talk to Apex", href: "/contact" },
    secondaryCta: { label: "Browse ICD-10 resources", href: "/coding-resources/icd-10" },
  },
  {
    key: "coding-resources-icd10",
    path: "/coding-resources/icd-10",
    title: "ICD-10 Resources",
    eyebrow: "Coding Resources",
    intro:
      "The ICD-10 resource hub is meant for educational content that links diagnosis documentation, coding specificity, and claim outcomes so practices can understand why incomplete clinical detail often shows up later as billing friction.",
    metaTitle: "ICD-10 Resources | Apex Precision Billing Inc",
    metaDescription:
      "Explore ICD-10 resources from Apex Precision Billing covering diagnosis coding context, documentation alignment, and downstream claim impact.",
    breadcrumbs: [{ label: "Resources", href: "/resources" }],
    pillars: [
      {
        title: "Diagnosis detail affects reimbursement",
        description:
          "ICD-10 content should help teams connect documentation habits to payer edits, claim acceptance, and the time spent correcting problems after submission.",
      },
      {
        title: "Good for education across the practice",
        description:
          "This section works best when it makes complex coding language easier for both clinical and administrative stakeholders to understand.",
      },
      {
        title: "Supports better specialty education",
        description:
          "Diagnosis-coding topics often become more useful when they are paired with specialty pages for internal medicine, neurology, pediatrics, and similar practice types.",
      },
    ],
    featuredTopics: [
      {
        title: "How documentation gaps become coding-related denials",
        description:
          "Use the denial management page as a reference point for the downstream effect of diagnosis detail problems.",
        href: "/services/denial-management",
        category: "Denials",
      },
      {
        title: "Why coding and billing teams need a tighter feedback loop",
        description:
          "A direct connection to medical coding support for practices dealing with recurring rework.",
        href: "/services/medical-coding",
        category: "Coding Workflow",
      },
      {
        title: "Internal medicine billing and diagnosis complexity",
        description:
          "A specialty example where documentation specificity often matters across chronic-condition billing patterns.",
        href: "/specialties/internal-medicine-billing",
        category: "Specialty",
      },
      {
        title: "Neurology billing and high-detail claim review",
        description:
          "A specialty page that aligns with education around diagnosis specificity and payer scrutiny.",
        href: "/specialties/neurology-billing",
        category: "Specialty",
      },
    ],
    serviceLinks: [
      { label: "Medical Coding Services", href: "/services/medical-coding" },
      { label: "Denial Management", href: "/services/denial-management" },
      { label: "Eligibility Verification", href: "/services/eligibility-verification" },
    ],
    specialtyLinks: [
      { label: "Internal Medicine Billing", href: "/specialties/internal-medicine-billing" },
      { label: "Family Medicine Billing", href: "/specialties/family-medicine-billing" },
      { label: "Neurology Billing", href: "/specialties/neurology-billing" },
    ],
    faqs: [
      {
        question: "What kinds of ICD-10 topics belong in this hub?",
        answer:
          "Topics should focus on documentation specificity, diagnosis-code context, claim edits, denial patterns, and the operational consequences of incomplete clinical detail.",
      },
      {
        question: "Why include ICD-10 resources on a billing website?",
        answer:
          "Because diagnosis coding issues directly affect clean claims, rework volume, denial rates, and the amount of communication required between providers and billing teams.",
      },
      {
        question: "Can ICD-10 education support SEO and trust at the same time?",
        answer:
          "Yes. When the content is specific, practical, and clearly connected to actual billing workflow, it strengthens both topical coverage and user confidence.",
      },
    ],
    primaryCta: { label: "Request a quote", href: "/request-a-quote" },
    secondaryCta: { label: "Browse CPT resources", href: "/coding-resources/cpt" },
  },
  {
    key: "glossary",
    path: "/glossary",
    title: "Medical Billing Glossary",
    eyebrow: "Plain-Language Definitions",
    intro:
      "The Apex glossary is intended to make medical billing terminology easier to understand for physicians, managers, and staff who need quick explanations without being sent to a jargon-heavy page or a sales pitch disguised as a definition.",
    metaTitle: "Medical Billing Glossary | Apex Precision Billing Inc",
    metaDescription:
      "Review plain-language medical billing glossary content from Apex Precision Billing covering claims, coding, payer, and revenue cycle terminology.",
    breadcrumbs: [{ label: "Resources", href: "/resources" }],
    pillars: [
      {
        title: "Short definitions that lead somewhere useful",
        description:
          "Glossary entries should explain terms clearly, then point readers to a guide, service page, or specialty page when they need more operational context.",
      },
      {
        title: "Good for mixed audiences",
        description:
          "The language should work for physicians, office staff, administrators, and practice owners who may not all use the same billing vocabulary every day.",
      },
      {
        title: "Helpful for internal linking",
        description:
          "Glossary content becomes more valuable when terms like denial management, AR, credentialing, or RCM connect to deeper pages elsewhere on the site.",
      },
    ],
    featuredTopics: [
      {
        title: "Revenue cycle management in plain language",
        description:
          "A natural definition path that should link into the core RCM service page.",
        href: "/services/revenue-cycle-management",
        category: "RCM",
      },
      {
        title: "What denial management actually means",
        description:
          "A strong glossary term because it often gets used loosely despite involving a specific operational workflow.",
        href: "/services/denial-management",
        category: "Denials",
      },
      {
        title: "Credentialing vs. provider enrollment",
        description:
          "A helpful contrast term that points to administrative setup and payer readiness work.",
        href: "/services/provider-enrollment",
        category: "Enrollment",
      },
      {
        title: "Specialty example: psychiatry billing terms",
        description:
          "A specialty path that can help readers connect definitions to a real clinical workflow.",
        href: "/specialties/psychiatry-billing",
        category: "Specialty",
      },
    ],
    serviceLinks: [
      { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
      { label: "Medical Coding Services", href: "/services/medical-coding" },
      { label: "Provider Enrollment", href: "/services/provider-enrollment" },
    ],
    specialtyLinks: [
      { label: "Psychiatry Billing", href: "/specialties/psychiatry-billing" },
      { label: "Pediatrics Billing", href: "/specialties/pediatrics-billing" },
      { label: "Urgent Care Billing", href: "/specialties/urgent-care-billing" },
    ],
    faqs: [
      {
        question: "Why publish a medical billing glossary?",
        answer:
          "Because many readers need a quick, reliable definition before they can understand a guide, service page, or specialty resource in context.",
      },
      {
        question: "Should glossary entries be technical or simple?",
        answer:
          "They should be simple first, with enough precision to be useful and enough internal linking to help the reader go deeper when needed.",
      },
      {
        question: "How does the glossary help the rest of the site?",
        answer:
          "It strengthens internal linking, supports search visibility for term-based queries, and makes the broader website easier to navigate for non-specialist readers.",
      },
    ],
    primaryCta: { label: "Explore guides", href: "/guides" },
    secondaryCta: { label: "Back to resources", href: "/resources" },
  },
  {
    key: "knowledge-center",
    path: "/knowledge-center",
    title: "Knowledge Center",
    eyebrow: "Educational Hub",
    intro:
      "The Apex Knowledge Center brings together all of our educational content in one place. Whether you need billing guides, coding updates, CMS changes, industry news, or plain-language definitions, this hub helps you find the right resource quickly.",
    metaTitle: "Medical Billing Knowledge Center | Apex Precision Billing Inc",
    metaDescription:
      "Explore the Apex Precision Billing Knowledge Center including billing guides, coding resources, CMS updates, industry news, FAQs, case studies, and a medical billing glossary.",
    breadcrumbs: [],
    pillars: [
      {
        title: "Learn at your own pace",
        description:
          "The Knowledge Center organizes content by format and topic so you can move between blog articles, in-depth guides, reference glossaries, and quick answers depending on what your practice needs right now.",
      },
      {
        title: "Content you can use before a sales conversation",
        description:
          "Every resource is designed to be genuinely useful on its own. Use these pages to understand billing operations, evaluate workflow changes, or prepare better questions for any vendor conversation.",
      },
      {
        title: "Always connected to practical next steps",
        description:
          "Resource pages throughout the Knowledge Center link back to service pages, specialty pages, and consultation paths so you can move from education to action when you are ready.",
      },
    ],
    featuredTopics: [
      {
        title: "Medical Billing Blog",
        description: "Short-form articles on denial trends, payer friction, intake mistakes, and operational reporting.",
        href: "/blog",
        category: "Editorial",
      },
      {
        title: "Medical Billing Guides",
        description: "In-depth decision-support content for practices comparing workflows and outsourcing options.",
        href: "/guides",
        category: "Guides",
      },
      {
        title: "Case Studies",
        description: "Evidence pages that explain what changed operationally and what results followed.",
        href: "/case-studies",
        category: "Evidence",
      },
      {
        title: "Frequently Asked Questions",
        description: "Quick answers to common questions about billing, coding, compliance, and working with Apex.",
        href: "/faq",
        category: "Reference",
      },
      {
        title: "Industry News",
        description: "Healthcare billing news that helps practices interpret operational impact.",
        href: "/resources/industry-news",
        category: "News",
      },
      {
        title: "Coding Updates",
        description: "CPT, ICD-10, and HCPCS coding changes that affect claim preparation and documentation.",
        href: "/coding-resources/cpt",
        category: "Coding",
      },
      {
        title: "CMS Updates",
        description: "Medicare and Medicaid policy changes, fee schedule updates, and regulatory guidance.",
        href: "/resources/cms-updates",
        category: "Regulatory",
      },
      {
        title: "Medical Billing Glossary",
        description: "Plain-language definitions for billing, coding, payer, and revenue cycle terminology.",
        href: "/glossary",
        category: "Reference",
      },
    ],
    serviceLinks: [
      { label: "Medical Billing Services", href: "/services/medical-billing" },
      { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
      { label: "Denial Management", href: "/services/denial-management" },
      { label: "Medical Coding Services", href: "/services/medical-coding" },
    ],
    specialtyLinks: [
      { label: "Family Medicine Billing", href: "/specialties/family-medicine-billing" },
      { label: "Urgent Care Billing", href: "/specialties/urgent-care-billing" },
      { label: "Mental Health Billing", href: "/specialties/mental-health-billing" },
      { label: "Cardiology Billing", href: "/specialties/cardiology-billing" },
    ],
    faqs: [
      {
        question: "What will I find in the Knowledge Center?",
        answer:
          "The Knowledge Center organizes billing guides, blog articles, case studies, FAQs, coding updates, CMS guidance, industry news, and a glossary into one accessible hub.",
      },
      {
        question: "Is Knowledge Center content only for Apex clients?",
        answer:
          "No. All content is publicly available and designed to help any practice better understand billing operations, regardless of whether they are evaluating vendors.",
      },
      {
        question: "How does the Knowledge Center differ from the Resources page?",
        answer:
          "The Knowledge Center is a broader entry point that also includes FAQs, industry news, coding updates, and CMS guidance alongside the content traditionally found in the resources section.",
      },
    ],
    primaryCta: { label: "Explore guides", href: "/guides" },
    secondaryCta: { label: "Visit the blog", href: "/blog" },
  },
];

export function getResourceHubByKey(key: string) {
  return resourceHubs.find((hub) => hub.key === key);
}

export function requireResourceHub(key: string) {
  const hub = getResourceHubByKey(key);

  if (!hub) {
    throw new Error(`Unknown resource hub: ${key}`);
  }

  return hub;
}

export function getAllResourceHubKeys() {
  return resourceHubs.map((hub) => hub.key);
}
