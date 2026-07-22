export interface SeoLink {
  label: string;
  href: string;
}

export interface SeoSection {
  title: string;
  body: string[];
  bullets?: string[];
}

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface SeoPage {
  groupKey: SeoGroupKey;
  slug: string;
  path: string;
  title: string;
  eyebrow: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  highlights: string[];
  sections: SeoSection[];
  relatedLinks: SeoLink[];
  faqs: SeoFaq[];
  schemaType: "Service" | "WebPage";
  serviceType?: string;
  about?: string[];
  /**
   * If set, this page should render a soft redirect (meta-refresh + canonical)
   * pointing to the canonical destination instead of full content. Used when
   * a collection slug duplicates a stand-alone canonical page so we keep the
   * historical URL alive for inbound links while consolidating content.
   */
  redirectTo?: string;
}

export interface SeoPageGroup {
  key: SeoGroupKey;
  path: string;
  title: string;
  eyebrow: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  collectionLabel: string;
  pages: SeoPage[];
  primaryCta: SeoLink;
  secondaryCta: SeoLink;
}

export type SeoGroupKey =
  | "solutions"
  | "software"
  | "locations"
  | "industries"
  | "trust"
  | "resources"
  | "tools"
  | "lead-magnets"
  | "testimonials"
  | "insurance-payers";

type BaseEntry = {
  slug: string;
  name: string;
  qualifier?: string;
  pain: string;
  focus: string;
  highlight?: string;
  /**
   * Soft redirect target (meta-refresh + canonical). When present, the page
   * renders a soft redirect to this destination instead of full content.
   */
  redirectTo?: string;
};

const serviceRelatedLinks: SeoLink[] = [
  { label: "Medical Billing Services", href: "/services/medical-billing" },
  { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
  { label: "Denial Management", href: "/services/denial-management" },
  { label: "Free Billing Audit", href: "/free-billing-audit" },
];

const trustRelatedLinks: SeoLink[] = [
  { label: "Why Apex", href: "/why-apex" },
  { label: "HIPAA Notice", href: "/hipaa-notice" },
  { label: "Schedule a Consultation", href: "/schedule-consultation" },
];

function sentence(value: string) {
  return value.endsWith(".") ? value : `${value}.`;
}

function pagePath(groupKey: SeoGroupKey, slug: string) {
  return `/${groupKey}/${slug}`;
}

function makeMetaTitle(name: string, suffix: string) {
  return `${name} ${suffix}`.slice(0, 60);
}

function makeMetaDescription(prefix: string, detail: string) {
  return `${prefix} ${detail}`.slice(0, 158);
}

function buildAudiencePage(groupKey: SeoGroupKey, entry: BaseEntry): SeoPage {
  const path = pagePath(groupKey, entry.slug);
  const label = entry.qualifier ?? entry.name;
  const isLocation = groupKey === "locations";
  const isSoftware = groupKey === "software";
  const isIndustry = groupKey === "industries";
  const isSolution = groupKey === "solutions";
  const eyebrow = isLocation
    ? "Location Billing Support"
    : isSoftware
      ? "Software Workflow Support"
      : isIndustry
        ? "Industry Billing Support"
        : "Practice Solution";
  const title = isLocation
    ? `Medical Billing Services in ${entry.name}`
    : isSoftware
      ? `${entry.name} Medical Billing Support`
      : isIndustry
        ? `Medical Billing for ${entry.name}`
        : `${entry.name} Billing Solutions`;
  const intro = isSoftware
    ? `Practices using ${entry.name} often need billing support that respects the way scheduling, charge capture, claims, payment posting, and reporting already move through the system. Apex frames ${entry.name} support around workflow coordination, not unsupported partnership claims.`
    : isLocation
      ? `Apex supports healthcare practices in ${entry.name} with medical billing and revenue cycle workflows focused on cleaner claims, disciplined follow-up, denial visibility, and practical communication.`
      : `Apex helps ${label.toLowerCase()} evaluate medical billing support around real operating needs: ${entry.pain}, cleaner handoffs, and better revenue cycle visibility.`;

  return {
    groupKey,
    slug: entry.slug,
    path,
    title,
    eyebrow,
    intro,
    metaTitle: makeMetaTitle(title, "| Apex"),
    metaDescription: makeMetaDescription(
      isSoftware
        ? `${entry.name} billing workflow support from Apex.`
        : `${title} from Apex Precision Billing.`,
      `Explore ${entry.focus.toLowerCase()} without inflated claims.`,
    ),
    highlights: [
      entry.highlight ?? entry.focus,
      "Clean claim workflows",
      "Denial follow-up visibility",
      "Compliance-minded support",
    ],
    sections: [
      {
        title: isSoftware
          ? `How billing support fits ${entry.name} workflows`
          : isLocation
            ? `Billing support for ${entry.name} practices`
            : `Why ${label.toLowerCase()} need specific billing support`,
        body: [
          isSoftware
            ? `Apex describes ${entry.name} pages carefully around workflow familiarity and process coordination. The goal is to help practices understand how billing tasks can be organized around their existing EHR or practice management environment without implying an official partnership.`
            : `A generic billing page rarely answers the operational questions that matter to ${label.toLowerCase()}. This page gives Apex a more specific entry point for discussing ${entry.focus.toLowerCase()} and the billing pressure points that usually drive vendor evaluation.`,
          sentence(entry.pain),
        ],
        bullets: [
          "Claim submission and payer follow-up coordination",
          "Denial and rejection trend visibility",
          "Payment posting and AR reporting touchpoints",
          "Practical communication for practice leaders",
        ],
      },
      {
        title: "Where Apex can help",
        body: [
          `Apex focuses on workflow discipline: verifying front-end information, keeping claims moving, tracking payer responses, and reporting issues in language practice teams can act on.`,
          `The support model should be evaluated against specialty mix, payer environment, staffing capacity, and the systems already used by the practice.`,
        ],
        bullets: [
          "Review current billing handoffs and bottlenecks",
          "Prioritize stuck claims, denials, and aging AR",
          "Create clearer escalation paths for unresolved issues",
          "Connect reporting to operational next steps",
        ],
      },
      {
        title: "A careful, trust-first positioning",
        body: [
          `This page avoids guarantees and exaggerated claims. Apex positions the work around clean claim discipline, compliant handling, follow-up consistency, and better visibility into the revenue cycle.`,
        ],
      },
    ],
    relatedLinks: isSolution
      ? [
          { label: "Medical Billing by Industry", href: "/industries" },
          { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
          { label: "Explore Specialties", href: "/specialties" },
          { label: "Free Billing Audit", href: "/free-billing-audit" },
        ]
      : isIndustry
        ? [
            { label: "Solutions by Practice Type", href: "/solutions" },
            { label: "Medical Billing Services", href: "/services/medical-billing" },
            { label: "Explore Specialties", href: "/specialties" },
            { label: "Free Billing Audit", href: "/free-billing-audit" },
          ]
        : isSoftware
          ? [
              { label: "Medical Billing Services", href: "/services/medical-billing" },
              { label: "Denial Management", href: "/services/denial-management" },
              { label: "EHR Workflow Support", href: "/our-technology" },
              { label: "Free Billing Audit", href: "/free-billing-audit" },
            ]
          : serviceRelatedLinks,
    faqs: [
      {
        question: isSoftware
          ? `Does Apex claim to be an official ${entry.name} partner?`
          : `Is this page only for ${label.toLowerCase()}?`,
        answer: isSoftware
          ? `No. This page is written around ${entry.name} workflow support and EHR/PM familiarity. It should not be read as a claim of official certification, partnership, or endorsement unless Apex documents that separately.`
          : `No. It is a focused landing page for ${label.toLowerCase()}, but many of the same billing workflows also apply to other healthcare organizations with similar payer, staffing, or claim-volume challenges.`,
      },
      {
        question: "What should a practice prepare before contacting Apex?",
        answer:
          "Useful starting points include payer mix, claim volume, denial examples, AR aging reports, current software, staffing model, and the billing tasks that are creating the most rework.",
      },
    ],
    schemaType: isSoftware ? "WebPage" : "Service",
    serviceType: title,
    about: [entry.name, entry.focus, "Medical billing", "Revenue cycle management"],
  };
}

function buildTrustPage(
  entry: BaseEntry & { redirectTo?: string },
): SeoPage {
  const path = pagePath("trust", entry.slug);
  return {
    groupKey: "trust",
    slug: entry.slug,
    path,
    title: entry.name,
    eyebrow: "Trust & Operations",
    intro: `Apex uses this page to explain ${entry.focus.toLowerCase()} in practical terms so healthcare practices can evaluate the company by process, safeguards, and communication instead of unsupported marketing claims.`,
    metaTitle: makeMetaTitle(entry.name, "| Apex Trust"),
    metaDescription: makeMetaDescription(
      `${entry.name} at Apex Precision Billing.`,
      `Learn how ${entry.focus.toLowerCase()} supports medical billing trust and workflow clarity.`,
    ),
    highlights: [entry.focus, "Transparent process", "Healthcare-aware workflows", "Practical documentation"],
    sections: [
      {
        title: `What ${entry.name.toLowerCase()} means at Apex`,
        body: [
          sentence(entry.pain),
          "Trust pages should make the company easier to evaluate by explaining how work is organized, how expectations are set, and where sensitive billing operations require extra discipline.",
        ],
        bullets: [
          "Clear expectations before work begins",
          "Defined handoffs and escalation points",
          "Communication focused on operational decisions",
          "Compliance-aware handling of billing information",
        ],
      },
      {
        title: "How this supports client confidence",
        body: [
          "Healthcare practices need to understand more than pricing. They need to know how a billing partner approaches onboarding, data handling, quality review, denial prevention, and workflow transitions.",
          "Apex can use this page as a durable trust signal during sales conversations and internal linking from service pages.",
        ],
      },
    ],
    relatedLinks: trustRelatedLinks,
    faqs: [
      {
        question: `Why does Apex publish a page about ${entry.name.toLowerCase()}?`,
        answer:
          "It gives prospective clients a more concrete way to evaluate process, safeguards, and communication before they schedule a consultation.",
      },
      {
        question: "Does this replace legal or compliance documentation?",
        answer:
          "No. These pages are educational and operational. Formal legal, privacy, or compliance requirements should be addressed in appropriate agreements and policies.",
      },
    ],
    schemaType: "WebPage",
    about: [entry.name, entry.focus, "Healthcare operations", "Medical billing"],
    ...(entry.redirectTo ? { redirectTo: entry.redirectTo } : {}),
  };
}

function buildResourcePage(entry: BaseEntry): SeoPage {
  const path = `/resources/${entry.slug}`;
  return {
    groupKey: "resources",
    slug: entry.slug,
    path,
    title: entry.name,
    eyebrow: "Medical Billing Resource",
    intro: `This resource helps physicians, practice managers, and billing teams understand ${entry.focus.toLowerCase()} with practical context that can be used before a vendor conversation or workflow review.`,
    metaTitle: makeMetaTitle(entry.name, "| Apex Resource"),
    metaDescription: makeMetaDescription(
      `${entry.name} from Apex Precision Billing.`,
      `Learn practical medical billing and RCM workflow guidance for healthcare practices.`,
    ),
    highlights: [entry.focus, "Practice education", "Workflow clarity", "Internal links"],
    sections: [
      {
        title: `How to use this ${entry.name.toLowerCase()}`,
        body: [
          sentence(entry.pain),
          "The best resource content gives teams a shared language for identifying where billing friction starts, which metrics deserve attention, and what questions to ask during a process review.",
        ],
        bullets: [
          "Use it during internal billing workflow reviews",
          "Share it with front-office and billing staff",
          "Connect the topic to related service pages",
          "Bring open questions to a consultation with Apex",
        ],
      },
      {
        title: "Why this matters for revenue cycle performance",
        body: [
          "Educational resources support better decisions when they explain the relationship between front-end accuracy, coding coordination, payer response, AR movement, and patient balance workflows.",
          "This page is designed as a useful content foundation that can be expanded with examples, downloads, and specialty-specific guidance over time.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Resources Hub", href: "/resources" },
      { label: "Medical Billing Guides", href: "/guides" },
      { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
      { label: "Free Billing Audit", href: "/free-billing-audit" },
    ],
    faqs: [
      {
        question: `Who should use ${entry.name.toLowerCase()}?`,
        answer:
          "It is intended for physicians, administrators, office managers, and billing teams that want a clearer way to review revenue cycle questions before choosing a next step.",
      },
      {
        question: "Can Apex customize this topic for a specific practice?",
        answer:
          "Yes. The public resource is general education; a consultation or audit can apply the same topic to a practice's specialty, payer mix, software, and staffing model.",
      },
    ],
    schemaType: "WebPage",
    about: [entry.name, entry.focus, "Medical billing education"],
  };
}

function buildToolPage(entry: BaseEntry): SeoPage {
  const path = pagePath("tools", entry.slug);
  return {
    groupKey: "tools",
    slug: entry.slug,
    path,
    title: entry.name,
    eyebrow: "Interactive Tool",
    intro: `Use this calculator as a planning tool for ${entry.focus.toLowerCase()}. It is designed for directional estimates, not financial, legal, coding, or reimbursement advice.`,
    metaTitle: makeMetaTitle(entry.name, "| Apex Tool"),
    metaDescription: makeMetaDescription(
      `${entry.name} from Apex Precision Billing.`,
      `Estimate ${entry.focus.toLowerCase()} and identify medical billing questions to review with Apex.`,
    ),
    highlights: [entry.focus, "Directional estimate", "No guarantee claims", "Consultation-ready"],
    sections: [
      {
        title: "How to interpret the estimate",
        body: [
          "Interactive tools can help practices frame questions before a billing review, but they should not replace a detailed assessment of payer mix, staffing, specialty, contract terms, and current reporting quality.",
          sentence(entry.pain),
        ],
        bullets: [
          "Use realistic recent-month inputs",
          "Compare the result with existing reports",
          "Flag assumptions that need validation",
          "Bring the estimate to a billing consultation",
        ],
      },
      {
        title: "What Apex can review next",
        body: [
          "Apex can help connect calculator results to workflow questions: claim submission timing, denial trends, AR follow-up, payment posting, patient balances, and reporting cadence.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Free Billing Audit", href: "/free-billing-audit" },
      { label: "Revenue Analytics & Reporting", href: "/services/revenue-analytics-reporting" },
      { label: "Accounts Receivable Recovery", href: "/services/accounts-receivable-recovery" },
    ],
    faqs: [
      {
        question: "Are calculator results guaranteed?",
        answer:
          "No. These tools produce directional estimates based on the inputs provided. They do not guarantee reimbursement, collections, denial outcomes, or revenue improvement.",
      },
      {
        question: "What should I do after using the calculator?",
        answer:
          "Save the assumptions you used and compare them with current practice reports. Apex can review the numbers during a consultation or billing audit.",
      },
    ],
    schemaType: "WebPage",
    about: [entry.name, entry.focus, "Medical billing calculator"],
  };
}

function buildLeadMagnetPage(entry: BaseEntry): SeoPage {
  const path = pagePath("lead-magnets", entry.slug);
  return {
    groupKey: "lead-magnets",
    slug: entry.slug,
    path,
    title: entry.name,
    eyebrow: "Free Resource",
    intro: `Use this free Apex resource to start a clearer conversation about ${entry.focus.toLowerCase()} before a formal billing audit, consultation, or quote request.`,
    metaTitle: makeMetaTitle(entry.name, "| Apex"),
    metaDescription: makeMetaDescription(
      `${entry.name} from Apex Precision Billing.`,
      `Request a practical medical billing resource for practices reviewing revenue cycle workflows.`,
    ),
    highlights: [entry.focus, "Practice-friendly", "Follow-up ready", "No exaggerated claims"],
    sections: [
      {
        title: "What this resource helps uncover",
        body: [
          sentence(entry.pain),
          "Lead magnets should earn trust by helping practices organize real information, not by making aggressive promises about outcomes.",
        ],
        bullets: [
          "Current workflow gaps and recurring delays",
          "Reports or examples to gather before a consultation",
          "Questions to ask when comparing billing support options",
          "Next steps for a more detailed Apex review",
        ],
      },
      {
        title: "How Apex uses the conversation",
        body: [
          "Apex can use the resource as a starting point to discuss payer mix, specialty needs, software environment, staffing constraints, denial pressure, and revenue cycle visibility.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Free Billing Audit", href: "/free-billing-audit" },
      { label: "Schedule a Consultation", href: "/schedule-consultation" },
      { label: "Resources Hub", href: "/resources" },
    ],
    faqs: [
      {
        question: "Is this resource a substitute for a billing audit?",
        answer:
          "No. It is a practical starting point. A billing audit or consultation is better for reviewing practice-specific reports, claim examples, and operational constraints.",
      },
      {
        question: "Will Apex use exaggerated revenue guarantees?",
        answer:
          "No. The site avoids guarantees such as 100% approval or zero denials and focuses instead on workflow improvement, visibility, and disciplined follow-up.",
      },
    ],
    schemaType: "WebPage",
    about: [entry.name, entry.focus, "Medical billing resource"],
  };
}

function buildTestimonialPage(entry: BaseEntry): SeoPage {
  const path = pagePath("testimonials", entry.slug);
  return {
    groupKey: "testimonials",
    slug: entry.slug,
    path,
    title: entry.name,
    eyebrow: "Client Proof",
    intro: `This page gives Apex a dedicated place for ${entry.focus.toLowerCase()} while keeping testimonial content credible, permission-based, and free of unsupported review schema or fabricated claims.`,
    metaTitle: makeMetaTitle(entry.name, "| Apex Testimonials"),
    metaDescription: makeMetaDescription(
      `${entry.name} from Apex Precision Billing.`,
      `A credibility-focused home for genuine client feedback, reviews, and success stories.`,
    ),
    highlights: [entry.focus, "Genuine feedback only", "Permission-based", "No fabricated reviews"],
    sections: [
      {
        title: "How Apex should publish proof",
        body: [
          sentence(entry.pain),
          "Healthcare marketing trust depends on showing only genuine feedback, avoiding inflated claims, and documenting context when results are discussed.",
        ],
        bullets: [
          "Use client permission before publishing identifying details",
          "Avoid review schema unless reviews are legitimate and visible",
          "Explain the workflow context behind success stories",
          "Keep testimonials specific and verifiable",
        ],
      },
      {
        title: "What belongs on this page over time",
        body: [
          "As Apex collects approved feedback, this page can include client quotes, anonymized stories, video embeds, or case-study summaries that point readers to deeper proof pages.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Why Apex", href: "/why-apex" },
      { label: "Schedule a Consultation", href: "/schedule-consultation" },
    ],
    faqs: [
      {
        question: "Will Apex publish only real testimonials?",
        answer:
          "Yes. Testimonial and review pages should contain only genuine client feedback with appropriate permission and context.",
      },
      {
        question: "Should Apex add review schema to this page?",
        answer:
          "Only when legitimate reviews are published visibly on the page and the markup accurately reflects the content shown to users.",
      },
    ],
    schemaType: "WebPage",
    about: [entry.name, entry.focus, "Client testimonials"],
  };
}

type PayerEntry = BaseEntry & {
  payerType: "Government" | "Commercial";
  priorityConcerns: string[];
  eligibilityNotes: string[];
  denialPatterns: string[];
  reimbursementNotes: string[];
  complianceCaveat: string;
};

const payerRelatedLinks: SeoLink[] = [
  { label: "Medical Billing Services", href: "/services/medical-billing" },
  { label: "Denial Management", href: "/services/denial-management" },
  { label: "Credentialing", href: "/credentialing" },
  { label: "Free Billing Audit", href: "/free-billing-audit" },
];

function buildPayerPage(entry: PayerEntry): SeoPage {
  const path = pagePath("insurance-payers", entry.slug);
  const title = `${entry.name} Medical Billing Support`;
  return {
    groupKey: "insurance-payers",
    slug: entry.slug,
    path,
    title,
    eyebrow: `${entry.payerType} Payer Expertise`,
    intro: `Apex supports healthcare practices billing ${entry.name} with workflows tuned to this payer's claim submission expectations, eligibility verification habits, denial patterns, and reimbursement cadence. This page describes working familiarity only — not any official partnership, certification, or endorsement.`,
    metaTitle: makeMetaTitle(title, "| Apex"),
    metaDescription: makeMetaDescription(
      `${title} from Apex Precision Billing.`,
      `${entry.focus} explained with practical workflow context, no partnership claims.`,
    ),
    highlights: [
      entry.focus,
      "Eligibility-first verification",
      "Documentation-aware claim prep",
      "Disciplined denial follow-up",
    ],
    sections: [
      {
        title: `How Apex approaches ${entry.name} claims`,
        body: [
          `${entry.name} claims succeed when front-end data quality, documentation habits, and payer-specific edits are all coordinated before submission. Apex structures billing support around those upstream disciplines so denials can be prevented rather than reworked after the fact.`,
          `Apex does not represent or imply any official relationship with ${entry.name}. Our role is to help practices submit cleaner claims, follow up faster, and report operational issues in language practice leaders can act on.`,
        ],
        bullets: [
          "Verify eligibility, benefits, and authorization status before the visit",
          "Match documentation, codes, and modifiers to claim before submission",
          "Track payer response patterns and surface denial trends promptly",
          "Coordinate secondary billing and patient balance communication",
        ],
      },
      {
        title: `${entry.name} eligibility and verification focus`,
        body: [
          `Eligibility errors are one of the most common sources of front-end rework for ${entry.name} claims. Apex emphasizes pre-visit verification so downstream issues can be reduced instead of reworked.`,
        ],
        bullets: entry.eligibilityNotes.slice(0, 5),
      },
      {
        title: `Denial patterns Apex monitors for ${entry.name}`,
        body: [
          `Denials should be categorized by root cause rather than closed individually. For ${entry.name} claims, Apex watches for recurring patterns so upstream corrections can replace rework.`,
        ],
        bullets: entry.denialPatterns.slice(0, 5),
      },
      {
        title: `Reimbursement cadence and reconciliation`,
        body: [
          `Reconciliation is where revenue actually clears. Apex ties ${entry.name} reimbursement expectations to posting accuracy, secondary payer handling, and patient balance communication.`,
          sentence(entry.complianceCaveat),
        ],
        bullets: entry.reimbursementNotes.slice(0, 5),
      },
      {
        title: "Where Apex is most useful alongside your existing team",
        body: [
          entry.priorityConcerns.map((concern) => `- ${concern}`).join("\n"),
        ],
      },
    ],
    relatedLinks: payerRelatedLinks,
    faqs: [
      {
        question: `Does Apex claim to be an official ${entry.name} partner or in-network representative?`,
        answer: `No. This page describes workflow familiarity with ${entry.name} claims and the operational habits Apex uses when supporting practices that bill this payer. It is not a representation of partnership, certification, or endorsement.`,
      },
      {
        question: `What is the most common source of ${entry.name} denials?`,
        answer: `Eligibility, authorization, and documentation gaps are usually the most common upstream causes. Apex's value is in catching these issues before submission and tracking recurring denials back to root cause.`,
      },
      {
        question: `Can Apex help with ${entry.name} credentialing and provider enrollment?`,
        answer: `Yes. Apex coordinates credentialing and provider enrollment work alongside ongoing billing support so revenue cycle readiness lines up with the date a provider becomes active in-network.`,
      },
      {
        question: `What information should a practice share before asking for ${entry.name} support?`,
        answer: `Payer mix, claim volume, top denial examples, current AR aging, software environment, and the operational tasks that are creating the most rework.`,
      },
    ],
    schemaType: "WebPage",
    about: [
      entry.name,
      entry.focus,
      "Insurance payer workflows",
      "Medical billing",
      "Revenue cycle management",
    ],
  };
}

const solutionEntries: BaseEntry[] = [
  { slug: "new-medical-practices", name: "New Medical Practices", pain: "New practices often need billing workflows, payer setup, eligibility habits, and reporting expectations defined before volume grows", focus: "launch-stage billing infrastructure" },
  { slug: "small-practices", name: "Small Practices", pain: "Small practices usually need dependable billing support without adding unnecessary administrative complexity", focus: "lean practice billing support" },
  { slug: "multi-provider-practices", name: "Multi-Provider Practices", pain: "Multi-provider practices need consistent handoffs across providers, locations, schedules, and payer rules", focus: "multi-provider workflow coordination" },
  { slug: "private-practices", name: "Private Practices", pain: "Private practices need billing visibility that helps owners make decisions without sorting through disconnected reports", focus: "owner-friendly revenue cycle visibility" },
  { slug: "group-practices", name: "Group Practices", pain: "Group practices often need stronger role clarity between front office, clinical documentation, coding, billing, and follow-up teams", focus: "group practice workflow alignment" },
  { slug: "independent-physicians", name: "Independent Physicians", pain: "Independent physicians need billing support that protects time while keeping revenue cycle decisions understandable", focus: "physician-centered billing support" },
  { slug: "growing-clinics", name: "Growing Clinics", pain: "Growing clinics can outpace manual billing processes and need better visibility before revenue leakage becomes harder to control", focus: "scalable clinic billing operations" },
];

const softwareEntries: BaseEntry[] = [
  { slug: "kareo-billing", name: "Kareo", pain: "Kareo users may need help keeping claim, denial, posting, and reporting workflows aligned as volume grows", focus: "Kareo billing workflow support" },
  { slug: "advancedmd", name: "AdvancedMD", pain: "AdvancedMD workflows work best when billing tasks are organized around reliable queue ownership and follow-up cadence", focus: "AdvancedMD billing workflow support" },
  { slug: "eclinicalworks", name: "eClinicalWorks", pain: "eClinicalWorks practices often need careful coordination between documentation, charges, claims, and payer responses", focus: "eClinicalWorks revenue cycle workflows" },
  { slug: "athenahealth", name: "athenahealth", pain: "athenahealth billing support should account for claim activity, payer follow-up, posting visibility, and reporting interpretation", focus: "athenahealth billing workflow support" },
  { slug: "drchrono", name: "DrChrono", pain: "DrChrono users may need billing support that connects scheduling, documentation, claim submission, and payment visibility", focus: "DrChrono billing workflow support" },
  { slug: "nextgen", name: "NextGen", pain: "NextGen environments can involve multiple workflow queues that need clear billing ownership and escalation", focus: "NextGen revenue cycle support" },
  { slug: "practice-fusion", name: "Practice Fusion", pain: "Practice Fusion practices often benefit from defined claim follow-up, denial tracking, and AR review processes", focus: "Practice Fusion billing workflow support" },
  { slug: "epic", name: "Epic", pain: "Epic organizations need billing conversations that respect complex workflows, access rules, and reporting structures", focus: "Epic billing workflow coordination" },
  { slug: "cerner", name: "Cerner", pain: "Cerner environments require careful coordination between operational teams, claim workflows, and reporting expectations", focus: "Cerner billing workflow coordination" },
  { slug: "greenway-health", name: "Greenway Health", pain: "Greenway Health practices may need workflow support across charge capture, claims, payment posting, and AR follow-up", focus: "Greenway Health billing support" },
];

const locationEntries: BaseEntry[] = [
  { slug: "alabama", name: "Alabama", pain: "Alabama practices need billing support shaped by the state's rural healthcare landscape, competitive payer markets, and specialty-specific workflow demands", focus: "Alabama medical billing support" },
  { slug: "alaska", name: "Alaska", pain: "Alaska practices need billing workflows that account for remote geography, limited specialist access, and the state's unique payer mix across urban and frontier communities", focus: "Alaska revenue cycle support" },
  { slug: "arizona", name: "Arizona", pain: "Arizona practices face high patient volume growth, diverse payer environments, and significant Medicare Advantage penetration across urban and rural settings", focus: "Arizona medical billing support" },
  { slug: "arkansas", name: "Arkansas", pain: "Arkansas practices need practical claim follow-up, denial visibility, and revenue cycle workflows across urban and rural care settings", focus: "Arkansas billing workflows" },
  { slug: "california", name: "California", pain: "California practices need billing workflows shaped by high operating costs, complex specialty mix, managed care dominance, and diverse payer requirements", focus: "California revenue cycle support" },
  { slug: "colorado", name: "Colorado", pain: "Colorado practices benefit from growing suburban markets but need billing support that accounts for managed care penetration and rural specialty access challenges", focus: "Colorado medical billing support" },
  { slug: "connecticut", name: "Connecticut", pain: "Connecticut practices navigate competitive markets, high managed care penetration, and complex specialty billing across affluent suburban and urban communities", focus: "Connecticut revenue cycle support" },
  { slug: "delaware", name: "Delaware", pain: "Delaware practices need billing support shaped by the state's small-market dynamics, concentrated payer environment, and growing retiree Medicare population", focus: "Delaware medical billing support" },
  { slug: "florida", name: "Florida", pain: "Florida practices face exceptional patient volume growth, the nation's highest Medicare Advantage penetration, and payer complexity across urban and coastal retirement markets", focus: "Florida billing support" },
  { slug: "georgia", name: "Georgia", pain: "Georgia clinics and physician groups need billing workflows that scale with patient demand, staffing constraints, and a diverse urban-rural payer mix", focus: "Georgia medical billing support" },
  { slug: "hawaii", name: "Hawaii", pain: "Hawaii practices need billing workflows shaped by island geography, HMO dominance, military-affiliated populations, and Pacific Islander healthcare diversity", focus: "Hawaii revenue cycle support" },
  { slug: "idaho", name: "Idaho", pain: "Idaho practices benefit from rapid population growth but need billing support that accounts for rural access challenges and a growing suburban commercial payer mix", focus: "Idaho medical billing workflows" },
  { slug: "illinois", name: "Illinois", pain: "Illinois practices need revenue cycle support that improves claim movement and reporting clarity across Chicago's competitive market and downstate rural communities", focus: "Illinois medical billing workflows" },
  { slug: "indiana", name: "Indiana", pain: "Indiana practices need practical claim follow-up, denial visibility, and billing workflows across urban and rural care settings with significant Medicaid managed care enrollment", focus: "Indiana revenue cycle support" },
  { slug: "iowa", name: "Iowa", pain: "Iowa practices need billing support shaped by the state's agricultural economy, significant rural healthcare needs, and growing managed care enrollment", focus: "Iowa medical billing workflows" },
  { slug: "kansas", name: "Kansas", pain: "Kansas practices need billing workflows that account for the state's agricultural economy, growing suburban Wichita and Kansas City markets, and rural access challenges", focus: "Kansas medical billing support" },
  { slug: "kentucky", name: "Kentucky", pain: "Kentucky practices face complex behavioral health billing needs, Medicaid expansion enrollment, and growing suburban Louisville and Lexington markets", focus: "Kentucky billing support" },
  { slug: "louisiana", name: "Louisiana", pain: "Louisiana practices need billing workflows shaped by the state's unique Medicaid managed care structure, chronic disease burden, and post-disaster recovery healthcare demands", focus: "Louisiana revenue cycle support" },
  { slug: "maine", name: "Maine", pain: "Maine practices need billing support shaped by the state's rural geography, aging population, and growing Medicare Advantage penetration", focus: "Maine medical billing workflows" },
  { slug: "maryland", name: "Maryland", pain: "Maryland practices navigate the state's all-payer rate setting system, competitive suburban markets, and a large Medicaid managed care enrollment", focus: "Maryland revenue cycle support" },
  { slug: "massachusetts", name: "Massachusetts", pain: "Massachusetts practices need billing workflows shaped by the state's pioneering managed care environment, academic medical centers, and complex commercial payer dynamics", focus: "Massachusetts medical billing support" },
  { slug: "michigan", name: "Michigan", pain: "Michigan practices need billing support across the state's urban Detroit market, growing suburban communities, and rural Upper Peninsula access challenges", focus: "Michigan revenue cycle support" },
  { slug: "minnesota", name: "Minnesota", pain: "Minnesota practices benefit from robust managed care penetration but need billing workflows that handle complex care coordination and the state's high-tech healthcare environment", focus: "Minnesota medical billing workflows" },
  { slug: "mississippi", name: "Mississippi", pain: "Mississippi practices face the nation's highest Medicaid enrollment, significant rural healthcare challenges, and chronic disease management billing demands", focus: "Mississippi billing support" },
  { slug: "missouri", name: "Missouri", pain: "Missouri practices need billing workflows shaped by the state's urban-rural divide, significant Medicaid enrollment, and competitive St. Louis and Kansas City markets", focus: "Missouri revenue cycle support" },
  { slug: "montana", name: "Montana", pain: "Montana practices need billing support shaped by the state's vast rural geography, frontier communities, and growing retiree Medicare population", focus: "Montana medical billing workflows" },
  { slug: "nebraska", name: "Nebraska", pain: "Nebraska practices need billing workflows that account for the state's agricultural economy, concentrated Omaha market, and significant rural healthcare access challenges", focus: "Nebraska revenue cycle support" },
  { slug: "nevada", name: "Nevada", pain: "Nevada practices face high patient volume growth, Medicare Advantage penetration, and a unique tourist-industry workforce healthcare demand", focus: "Nevada medical billing support" },
  { slug: "new-hampshire", name: "New Hampshire", pain: "New Hampshire practices need billing workflows shaped by the state's high managed care penetration, rural geography, and growing suburban Boston commuter communities", focus: "New Hampshire revenue cycle support" },
  { slug: "new-jersey", name: "New Jersey", pain: "New Jersey practices need billing support that accounts for competitive markets, payer complexity, and specialty-specific workflow demands", focus: "New Jersey medical billing support" },
  { slug: "new-mexico", name: "New Mexico", pain: "New Mexico practices need billing workflows shaped by the state's large Native American population, Medicaid managed care expansion, and rural healthcare access challenges", focus: "New Mexico revenue cycle support" },
  { slug: "new-york", name: "New York", pain: "New York practices manage high patient volume, complex payer mixes, New York's sophisticated managed care regulations, and tight administrative capacity", focus: "New York revenue cycle support" },
  { slug: "north-carolina", name: "North Carolina", pain: "North Carolina practices benefit from Medicaid expansion but need billing workflows that account for the state's large rural population and competitive urban markets", focus: "North Carolina medical billing support" },
  { slug: "north-dakota", name: "North Dakota", pain: "North Dakota practices need billing support shaped by the state's energy-boom economy, rural geography, and growing Medicare enrollment", focus: "North Dakota revenue cycle workflows" },
  { slug: "ohio", name: "Ohio", pain: "Ohio practices benefit from structured payer follow-up, denial response, payment posting, and workflow reporting across the state's urban-rural spectrum", focus: "Ohio revenue cycle support" },
  { slug: "oklahoma", name: "Oklahoma", pain: "Oklahoma practices face significant Medicaid enrollment, unique tribal healthcare agreements, and growing suburban Oklahoma City and Tulsa markets", focus: "Oklahoma medical billing support" },
  { slug: "oregon", name: "Oregon", pain: "Oregon practices need billing workflows shaped by the state's pioneering coordinated care model, growing Medicare Advantage penetration, and rural access challenges", focus: "Oregon revenue cycle support" },
  { slug: "pennsylvania", name: "Pennsylvania", pain: "Pennsylvania practices need practical claim follow-up, denial visibility, and support across the competitive Philadelphia and Pittsburgh markets and rural care settings", focus: "Pennsylvania billing workflows" },
  { slug: "rhode-island", name: "Rhode Island", pain: "Rhode Island practices navigate the nation's smallest state's concentrated payer environment, significant managed care penetration, and growing Medicare populations", focus: "Rhode Island medical billing support" },
  { slug: "south-carolina", name: "South Carolina", pain: "South Carolina practices need billing workflows shaped by Medicaid expansion, growing suburban markets, and the state's significant rural healthcare access challenges", focus: "South Carolina revenue cycle support" },
  { slug: "south-dakota", name: "South Dakota", pain: "South Dakota practices need billing support shaped by the state's large Native American population, agricultural economy, and growing rural healthcare demands", focus: "South Dakota medical billing workflows" },
  { slug: "tennessee", name: "Tennessee", pain: "Tennessee practices face significant Medicaid managed care enrollment, growing suburban Nashville markets, and complex hospital system consolidation billing environments", focus: "Tennessee billing support" },
  { slug: "texas", name: "Texas", pain: "Texas clinics and physician groups need scalable billing support across the state's massive geographic scope, diverse payer environments, and high uninsured population", focus: "Texas medical billing support" },
  { slug: "utah", name: "Utah", pain: "Utah practices benefit from a young, commercially insured population but need billing workflows that account for the state's large Medicaid enrollment and growing Medicare needs", focus: "Utah revenue cycle support" },
  { slug: "vermont", name: "Vermont", pain: "Vermont practices need billing workflows shaped by the state's single-payer exploration history, rural geography, and high managed care penetration", focus: "Vermont medical billing support" },
  { slug: "virginia", name: "Virginia", pain: "Virginia practices need billing support that connects front-end accuracy with claim follow-up, denial response, and AR visibility across Northern Virginia and rural markets", focus: "Virginia billing workflows" },
  { slug: "washington", name: "Washington", pain: "Washington practices need billing workflows shaped by the state's pioneering value-based care models, large Medicaid managed care enrollment, and growing Medicare Advantage penetration", focus: "Washington revenue cycle support" },
  { slug: "west-virginia", name: "West Virginia", pain: "West Virginia practices face significant Medicare enrollment, complex chronic disease management needs, and behavioral health billing demands across rural Appalachian communities", focus: "West Virginia billing support" },
  { slug: "wisconsin", name: "Wisconsin", pain: "Wisconsin practices need billing workflows shaped by the state's robust managed care penetration, growing Medicare Advantage markets, and significant rural healthcare needs", focus: "Wisconsin revenue cycle support" },
  { slug: "wyoming", name: "Wyoming", pain: "Wyoming practices need billing support shaped by the state's frontier geography, energy-industry payer mix, and growing rural Medicare enrollment", focus: "Wyoming medical billing workflows" },
];

const industryEntries: BaseEntry[] = [
  { slug: "private-practices", name: "Private Practices", pain: "Private practices need owner-friendly reporting and reliable support for claims, denials, and patient balances", focus: "private practice billing support" },
  { slug: "medical-groups", name: "Medical Groups", pain: "Medical groups need consistency across providers, locations, specialties, and payer follow-up workflows", focus: "medical group billing operations" },
  { slug: "urgent-care-centers", name: "Urgent Care Centers", pain: "Urgent care centers often need fast claim throughput, accurate front-end capture, and denial monitoring across high visit volume", focus: "urgent care revenue cycle workflows" },
  { slug: "behavioral-health-clinics", name: "Behavioral Health Clinics", pain: "Behavioral health clinics may face authorization, documentation, session detail, and payer rule complexity", focus: "behavioral health billing workflows" },
  { slug: "home-health-agencies", name: "Home Health Agencies", pain: "Home health billing requires careful documentation alignment, payer follow-up, and AR visibility across recurring care episodes", focus: "home health billing support" },
  { slug: "telemedicine-providers", name: "Telemedicine Providers", pain: "Telemedicine providers need billing workflows that account for visit modality, payer policies, and documentation consistency", focus: "telemedicine billing support" },
  { slug: "independent-physicians", name: "Independent Physicians", pain: "Independent physicians need support that protects clinical time and makes billing performance easier to understand", focus: "independent physician billing support" },
  { slug: "specialty-clinics", name: "Specialty Clinics", pain: "Specialty clinics need billing workflows aligned to procedure mix, authorizations, documentation habits, and payer rules", focus: "specialty clinic revenue cycle support" },
  { slug: "solo-physician-practices", name: "Solo Physician Practices", pain: "Solo physician practices need efficient billing support without a large internal administrative team", focus: "solo physician billing workflows" },
  { slug: "multi-specialty-clinics", name: "Multi-Specialty Clinics", pain: "Multi-specialty clinics need billing coordination across different documentation patterns, code sets, and payer expectations", focus: "multi-specialty clinic billing support" },
  { slug: "rural-clinics", name: "Rural Clinics", pain: "Rural clinics often need practical billing support that works within limited staffing, payer access, and reporting resources", focus: "rural clinic billing workflows" },
  { slug: "federally-qualified-health-centers", name: "Federally Qualified Health Centers", pain: "FQHC billing conversations require careful attention to payer rules, encounter workflows, and compliance-sensitive reporting", focus: "FQHC billing workflow support" },
  { slug: "ambulatory-surgery-centers", name: "Ambulatory Surgery Centers", pain: "Ambulatory surgery centers need precise charge capture, authorization coordination, claim follow-up, and payer-specific workflow visibility", focus: "ASC billing support" },
];

const trustEntries: BaseEntry[] = [
  { slug: "our-process", name: "Our Process", pain: "A defined process helps practices understand how Apex moves from discovery to workflow review, service setup, reporting, and ongoing communication", focus: "billing process clarity", redirectTo: "/our-process" },
  { slug: "meet-the-team", name: "Meet the Team", pain: "Prospective clients should be able to understand the people, roles, and operating standards behind billing support", focus: "team credibility", redirectTo: "/team" },
  { slug: "technology-stack", name: "Technology Stack", pain: "Technology should be explained around workflow, access, reporting, and data handling rather than vague software claims", focus: "technology-enabled billing workflows", redirectTo: "/our-technology" },
  { slug: "security-compliance", name: "Security & Compliance", pain: "Healthcare billing requires privacy-aware handling, access discipline, and clear documentation of operational safeguards", focus: "security and compliance posture", redirectTo: "/security" },
  { slug: "quality-assurance", name: "Quality Assurance", pain: "Quality review helps practices understand how errors, trends, and rework are identified before they become larger billing problems", focus: "billing quality controls", redirectTo: "/quality-assurance" },
  { slug: "faq-by-specialty", name: "Frequently Asked Questions by Specialty", pain: "Specialty-specific questions deserve clearer answers than a single general FAQ can provide", focus: "specialty-aware billing education" },
  { slug: "client-onboarding", name: "Client Onboarding", pain: "Onboarding determines whether access, reporting, workflows, payer information, and expectations are clear before work begins", focus: "client onboarding workflow" },
  { slug: "transition-process", name: "Transition Process", pain: "Practices changing vendors or moving from in-house billing need careful transition planning to avoid operational disruption", focus: "billing transition planning" },
  { slug: "how-we-reduce-denials", name: "How We Reduce Denials", pain: "Denial reduction should be framed around root-cause review, front-end accuracy, coding coordination, and follow-up discipline rather than guarantees", focus: "denial prevention workflow" },
  { slug: "hipaa-security", name: "HIPAA Security", pain: "HIPAA security topics need practical explanation around protected health information, access expectations, and billing workflow safeguards", focus: "HIPAA-aware billing operations" },
];

const resourceEntries: BaseEntry[] = [
  { slug: "medical-billing-checklist", name: "Medical Billing Checklist", pain: "A checklist helps practices review front-end intake, claim submission, denial follow-up, payment posting, and AR reporting in one place", focus: "billing workflow review" },
  { slug: "revenue-calculator", name: "Revenue Calculator", pain: "A revenue calculator can help practices frame assumptions before reviewing performance reports or outsourcing options", focus: "revenue planning" },
  { slug: "billing-kpi-guide", name: "Billing KPI Guide", pain: "Billing KPIs are useful only when the practice understands what each metric says about workflow performance", focus: "billing metrics and KPIs" },
  { slug: "medical-billing-workflow", name: "Medical Billing Workflow", pain: "A workflow guide helps teams see how intake, coding, claims, follow-up, posting, and patient balances connect", focus: "end-to-end billing workflow" },
  { slug: "denial-codes-guide", name: "Denial Codes Guide", pain: "Denial codes should lead to root-cause review instead of isolated rework", focus: "denial code education" },
  { slug: "rcm-guide", name: "RCM Guide", pain: "An RCM guide helps practices understand how front-end and back-end revenue cycle functions work together", focus: "revenue cycle management education" },
  { slug: "credentialing-guide", name: "Credentialing Guide", pain: "Credentialing and enrollment delays can affect billing readiness long before claims are submitted", focus: "credentialing workflow education" },
  { slug: "ar-recovery-guide", name: "AR Recovery Guide", pain: "AR recovery works best when old balances are prioritized, owned, and reviewed for recurring causes", focus: "accounts receivable recovery" },
  { slug: "cms-updates", name: "CMS Updates", pain: "CMS updates can affect billing workflows, documentation habits, and practice operations when teams do not review them consistently", focus: "CMS billing updates" },
  { slug: "industry-news", name: "Industry News", pain: "Industry news is most valuable when it helps practices interpret operational impact instead of simply repeating headlines", focus: "healthcare billing news" },
];

const toolEntries: BaseEntry[] = [
  { slug: "medical-billing-cost-calculator", name: "Medical Billing Cost Calculator", pain: "Billing cost estimates should be compared against collections, staffing burden, follow-up quality, and reporting needs", focus: "medical billing cost" },
  { slug: "medical-coding-calculator", name: "Medical Coding Calculator", pain: "Coding workload estimates should account for encounter volume, average review time, and documentation complexity", focus: "medical coding workload" },
  { slug: "ar-days-calculator", name: "AR Days Calculator", pain: "AR days can reveal whether unpaid balances are building faster than the practice can resolve them", focus: "accounts receivable days" },
  { slug: "collection-rate-calculator", name: "Collection Rate Calculator", pain: "Collection rate estimates help practices compare expected reimbursement against actual payments received", focus: "collection rate" },
  { slug: "roi-calculator", name: "ROI Calculator", pain: "ROI estimates should be treated as planning assumptions that require validation with actual practice reports", focus: "billing service ROI" },
  { slug: "practice-revenue-calculator", name: "Practice Revenue Calculator", pain: "Practice revenue estimates are only useful when visit volume, reimbursement assumptions, and payer mix are realistic", focus: "practice revenue" },
];

const leadMagnetEntries: BaseEntry[] = [
  { slug: "free-revenue-assessment", name: "Free Revenue Assessment", pain: "A revenue assessment helps identify where claim movement, denials, AR, or reporting may be limiting visibility", focus: "revenue cycle assessment" },
  { slug: "free-ar-analysis", name: "Free AR Analysis", pain: "An AR analysis helps practices understand where balances are aging and which follow-up paths need attention", focus: "accounts receivable analysis" },
  { slug: "download-billing-checklist", name: "Download Billing Checklist", pain: "A downloadable checklist helps teams review billing tasks consistently before a deeper consultation", focus: "billing checklist download" },
  { slug: "download-rcm-guide", name: "Download RCM Guide", pain: "A downloadable RCM guide helps decision-makers compare workflow options and identify revenue cycle gaps", focus: "RCM guide download" },
  { slug: "download-coding-cheat-sheet", name: "Download Coding Cheat Sheet", pain: "A coding cheat sheet should help teams organize documentation and coding-adjacent questions without replacing certified coding guidance", focus: "coding education download" },
];

const testimonialEntries: BaseEntry[] = [
  { slug: "reviews", name: "Reviews", pain: "Reviews should be genuine, visible to users, and presented without exaggerating what Apex can guarantee", focus: "verified client reviews" },
  { slug: "video-testimonials", name: "Video Testimonials", pain: "Video testimonials should be permission-based and should let clients describe their operational experience in their own words", focus: "client video feedback" },
  { slug: "success-stories", name: "Success Stories", pain: "Success stories should explain starting context, workflow changes, and results carefully instead of relying on vague claims", focus: "billing success stories" },
];

const payerEntries: PayerEntry[] = [
  {
    slug: "medicare",
    name: "Medicare",
    payerType: "Government",
    focus: "Medicare billing workflow familiarity",
    pain: "Medicare billing requires careful coordination between coverage rules, medical necessity documentation, and timely filing requirements",
    priorityConcerns: [
      "Annual Medicare policy and code update changes",
      "Medical necessity and documentation expectations",
      "Coordination between primary Medicare and secondary payer claims",
    ],
    eligibilityNotes: [
      "Verify Medicare Part A vs Part B coverage for the visit type",
      "Confirm supplement or Medicare Advantage payer order when applicable",
      "Track benefit periods for recurring services and home health episodes",
    ],
    denialPatterns: [
      "Medical necessity denials tied to documentation gaps",
      "Timely filing denials on late primary submissions",
      "Duplicate-service denials when lines bundle incorrectly",
    ],
    reimbursementNotes: [
      "Monitor remittance timing per claim volume and clearinghouse",
      "Reconcile ERA/EFT postings against expected reimbursement",
      "Manage secondary billing when Medicare is primary",
    ],
    complianceCaveat: "Coverage decisions are governed by CMS and individual Medicare Administrative Contractor (MAC) guidance, which can change.",
  },
  {
    slug: "medicaid",
    name: "Medicaid",
    payerType: "Government",
    focus: "State Medicaid program billing support",
    pain: "State Medicaid programs vary widely in eligibility, authorization, and reimbursement rules",
    priorityConcerns: [
      "State-by-state eligibility verification requirements",
      "Authorization and medical necessity thresholds",
      "Re-enrollment timelines that interrupt billing continuity",
    ],
    eligibilityNotes: [
      "Verify state-specific Medicaid eligibility on every visit",
      "Confirm managed Medicaid plan details where applicable",
      "Track re-enrollment dates to avoid coverage lapses",
    ],
    denialPatterns: [
      "Eligibility denials after coverage lapse or switch",
      "Authorization denials for services that require prior approval",
      "Coding denials tied to program-specific procedure rules",
    ],
    reimbursementNotes: [
      "Reconcile state Medicaid fee schedules against expected payment",
      "Coordinate crossover claims when Medicaid is secondary",
      "Watch retroactive coverage adjustments and recoupment notices",
    ],
    complianceCaveat: "Medicaid rules, fee schedules, and authorization requirements are set at the state level and can change without industry-wide notice.",
  },
  {
    slug: "aetna",
    name: "Aetna",
    payerType: "Commercial",
    focus: "Aetna commercial billing workflows",
    pain: "Aetna claim workflows vary across commercial and Medicare Advantage plans with distinct authorization rules",
    priorityConcerns: [
      "Authorization requirements across plan types",
      "Network status verification for treating providers",
      "Coordination of benefits when Aetna is not primary",
    ],
    eligibilityNotes: [
      "Confirm active Aetna plan and member ID at every visit",
      "Check if the Aetna plan is a Medicare Advantage or commercial product",
      "Verify referring provider and PCP requirements for HMO plans",
    ],
    denialPatterns: [
      "Authorization denials for services that required precertification",
      "Out-of-network denials when providers fall outside network",
      "Timely filing denials on delayed submissions",
    ],
    reimbursementNotes: [
      "Track Aetna-specific remittance clearinghouse patterns",
      "Reconcile payments against contracted fee schedules",
      "Manage secondary coverage when commercial Aetna is not primary",
    ],
    complianceCaveat: "Aetna policies vary across commercial, Medicare Advantage, and other plan types operated under the CVS Health umbrella.",
  },
  {
    slug: "cigna",
    name: "Cigna",
    payerType: "Commercial",
    focus: "Cigna commercial billing workflows",
    pain: "Cigna claims require disciplined coordination between eligibility, authorization, and multi-line claim accuracy",
    priorityConcerns: [
      "Eligibility and plan type verification across Evernorth-affiliated lines",
      "Prior authorization coordination for advanced imaging and procedures",
      "Multi-state provider enrollment alignment",
    ],
    eligibilityNotes: [
      "Confirm active Cigna coverage and member ID at the time of service",
      "Verify benefit tier (EHB, supplemental, or employer-specific)",
      "Confirm referring or PCP requirements for HMO products",
    ],
    denialPatterns: [
      "Authorization-related denials for advanced imaging or surgical procedures",
      "Coordination of benefits denials when another payer is primary",
      "Bundling denials tied to modifier or place-of-service mismatches",
    ],
    reimbursementNotes: [
      "Reconcile ERA postings against contracted rates",
      "Track Cigna remittance timing for forecasting",
      "Coordinate refunds and recoupment notices when appropriate",
    ],
    complianceCaveat: "Cigna policies vary by plan, line of business, and employer group; payer-side rules can change mid-cycle.",
  },
  {
    slug: "unitedhealthcare",
    name: "UnitedHealthcare",
    payerType: "Commercial",
    focus: "UnitedHealthcare billing workflows",
    pain: "UnitedHealthcare includes a wide mix of commercial, Medicare Advantage, and community plan products with different rules",
    priorityConcerns: [
      "Plan identification across UnitedHealthcare commercial and MA products",
      "Authorization rules for procedures, advanced imaging, and behavioral health",
      "Network and tier status verification per visit",
    ],
    eligibilityNotes: [
      "Verify the exact UnitedHealthcare product and member ID each visit",
      "Confirm if the plan is commercial or Medicare Advantage",
      "Confirm in-network status for the rendering provider and facility",
    ],
    denialPatterns: [
      "Authorization denials on procedures that required precertification",
      "Out-of-network denials when providers fall outside plan tiers",
      "Documentation denials tied to medical necessity expectations",
    ],
    reimbursementNotes: [
      "Track UnitedHealthcare remittance patterns for forecasting",
      "Reconcile payments against contracted fee schedules",
      "Manage secondary billing when UnitedHealthcare is not primary",
    ],
    complianceCaveat: "UnitedHealthcare operates commercial, Medicare Advantage, and Community plans with distinct coverage and authorization rules.",
  },
  {
    slug: "anthem",
    name: "Anthem",
    payerType: "Commercial",
    focus: "Anthem Blue Cross Blue Shield billing workflows",
    pain: "Anthem operates across multiple states with state-specific plan variations and authorization expectations",
    priorityConcerns: [
      "State-specific Anthem plan identification",
      "Authorization requirements for advanced imaging and procedures",
      "Coordination of benefits across Anthem and other Blue plans",
    ],
    eligibilityNotes: [
      "Verify the exact Anthem state plan and prefix",
      "Confirm in-network status for the rendering provider",
      "Check for BlueCard implications when a patient is out of state",
    ],
    denialPatterns: [
      "Authorization denials on services that required precertification",
      "Coordination of benefits denials across Anthem and BCBS",
      "Bundling denials on multi-line claims",
    ],
    reimbursementNotes: [
      "Reconcile Anthem-specific ERA postings against contracts",
      "Track remittance timing across the state's clearinghouse flow",
      "Coordinate secondary billing where Anthem is not primary",
    ],
    complianceCaveat: "Anthem Blue Cross Blue Shield plans are state-licensed; rules and authorization expectations can vary by state.",
  },
  {
    slug: "humana",
    name: "Humana",
    payerType: "Commercial",
    focus: "Humana commercial and Medicare Advantage billing",
    pain: "Humana combines commercial group, individual, and Medicare Advantage plans with distinct authorization and documentation expectations",
    priorityConcerns: [
      "Distinguishing between commercial, Medicare Advantage, and Part D coverage",
      "Authorization requirements for procedures and durable medical equipment",
      "Coordination of benefits with primary Medicare when applicable",
    ],
    eligibilityNotes: [
      "Verify the exact Humana plan and member ID on every visit",
      "Confirm Medicare Advantage product vs commercial group plan",
      "Check PCP and referral rules for HMO-style plans",
    ],
    denialPatterns: [
      "Authorization denials on Medicare Advantage services",
      "Documentation denials tied to medical necessity expectations",
      "Coordination of benefits denials when another payer is primary",
    ],
    reimbursementNotes: [
      "Reconcile Humana ERA payments against expected rates",
      "Track remittance timing across clearinghouse patterns",
      "Coordinate secondary billing when Humana is not primary",
    ],
    complianceCaveat: "Humana operates commercial and Medicare Advantage plans governed by distinct payer-side rules that change over time.",
  },
  {
    slug: "blue-cross-blue-shield",
    name: "Blue Cross Blue Shield",
    payerType: "Commercial",
    focus: "Blue Cross Blue Shield billing workflows across state plans",
    pain: "Blue Cross Blue Shield operates as a federation of state plans with shared branding but distinct operating rules",
    priorityConcerns: [
      "Correct state-plan identification for each member",
      "BlueCard coordination when patients travel across state lines",
      "Authorization and documentation requirements that vary by state plan",
    ],
    eligibilityNotes: [
      "Verify the exact state plan and three-letter prefix on the member ID",
      "Confirm in-network status for the rendering provider and facility",
      "Check whether BlueCard routing applies for out-of-state members",
    ],
    denialPatterns: [
      "BlueCard routing denials when an out-of-state plan is filed incorrectly",
      "Authorization denials on services that required precertification",
      "Documentation denials tied to plan-specific medical necessity rules",
    ],
    reimbursementNotes: [
      "Reconcile ERA postings against each state's contracted rates",
      "Track remittance timing by state plan",
      "Coordinate secondary billing across BCBS and non-BCBS payers",
    ],
    complianceCaveat: "Blue Cross Blue Shield operates as a federation of independent state plans, each governed by its own contracts and rules.",
  },
];

const solutionPages = solutionEntries.map((entry) => buildAudiencePage("solutions", entry));
const softwarePages = softwareEntries.map((entry) => buildAudiencePage("software", entry));
const locationPages = locationEntries.map((entry) => buildAudiencePage("locations", entry));
const industryPages = industryEntries.map((entry) => buildAudiencePage("industries", entry));
const trustPages = trustEntries.map(buildTrustPage);
const resourcePages = resourceEntries.map(buildResourcePage);
const toolPages = toolEntries.map(buildToolPage);
const leadMagnetPages = leadMagnetEntries.map(buildLeadMagnetPage);
const testimonialPages = testimonialEntries.map(buildTestimonialPage);
const payerPages = payerEntries.map(buildPayerPage);

export const seoPageGroups: SeoPageGroup[] = [
  {
    key: "solutions",
    path: "/solutions",
    title: "Medical Billing Solutions by Practice Type",
    eyebrow: "Solutions",
    intro:
      "Explore conversion-focused billing solution pages for practices at different stages, from new medical practices to growing clinics and multi-provider groups.",
    metaTitle: "Medical Billing Solutions by Practice Type | Apex",
    metaDescription:
      "Browse Apex medical billing solution pages for new practices, small practices, group practices, independent physicians, and growing clinics.",
    collectionLabel: "Solution pages",
    pages: solutionPages,
    primaryCta: { label: "Schedule a consultation", href: "/schedule-consultation" },
    secondaryCta: { label: "Request a billing audit", href: "/free-billing-audit" },
  },
  {
    key: "software",
    path: "/software",
    title: "Medical Billing Software Workflow Support",
    eyebrow: "Software",
    intro:
      "Review billing workflow pages for common EHR and practice management systems. These pages discuss workflow familiarity and integration planning without implying partnerships.",
    metaTitle: "Medical Billing Software Workflow Support | Apex",
    metaDescription:
      "Explore Apex billing workflow support pages for Kareo, AdvancedMD, eClinicalWorks, athenahealth, DrChrono, NextGen, Epic, Cerner, and more.",
    collectionLabel: "Software pages",
    pages: softwarePages,
    primaryCta: { label: "Discuss your software workflow", href: "/schedule-consultation" },
    secondaryCta: { label: "Explore services", href: "/services" },
  },
  {
    key: "locations",
    path: "/locations",
    title: "Medical Billing Services by State",
    eyebrow: "Locations",
    intro:
      "Apex serves healthcare practices across the United States. Start with these state pages for local search visibility and practice-specific billing conversations.",
    metaTitle: "Medical Billing Services by State | Apex",
    metaDescription:
      "Browse Apex medical billing location pages for all 50 U.S. states — from Alabama to Wyoming. Each page covers county-level payer insights, billing workflows, and revenue cycle support for healthcare practices.",
    collectionLabel: "Location pages",
    pages: locationPages,
    primaryCta: { label: "Contact Apex", href: "/contact" },
    secondaryCta: { label: "Request a quote", href: "/request-a-quote" },
  },
  {
    key: "industries",
    path: "/industries",
    title: "Medical Billing by Healthcare Industry",
    eyebrow: "Industries",
    intro:
      "Explore healthcare industry pages for practices, clinics, medical groups, telemedicine providers, home health agencies, ASCs, FQHCs, and specialty care organizations.",
    metaTitle: "Medical Billing by Healthcare Industry | Apex",
    metaDescription:
      "Browse Apex medical billing pages for private practices, medical groups, urgent care, behavioral health, home health, telemedicine, ASCs, and more.",
    collectionLabel: "Industry pages",
    pages: industryPages,
    primaryCta: { label: "Schedule a consultation", href: "/schedule-consultation" },
    secondaryCta: { label: "Explore specialties", href: "/specialties" },
  },
  {
    key: "trust",
    path: "/trust",
    title: "Trust Center for Healthcare Billing Partnerships",
    eyebrow: "Trust",
    intro:
      "Apex consolidates trust-building content here so practices can evaluate the company by process, safeguards, communication, and accountability rather than by generic service claims.",
    metaTitle: "Trust Center | Apex Precision Billing",
    metaDescription:
      "Apex Trust Center: processes, team, technology, security, compliance, quality assurance, and transition planning for medical billing partnerships.",
    collectionLabel: "Trust pages",
    pages: trustPages,
    primaryCta: { label: "Why Apex", href: "/why-apex" },
    secondaryCta: { label: "Contact Apex", href: "/contact" },
  },
  {
    key: "resources",
    path: "/resources",
    title: "Medical Billing Resources",
    eyebrow: "Resources",
    intro:
      "Use these resource pages to build topical authority around billing checklists, workflow education, denial codes, RCM, credentialing, AR recovery, CMS updates, and industry news.",
    metaTitle: "Medical Billing Resources | Apex Precision Billing",
    metaDescription:
      "Explore Apex resource pages for billing checklists, KPI guides, denial codes, RCM, credentialing, AR recovery, CMS updates, and industry news.",
    collectionLabel: "Resource pages",
    pages: resourcePages,
    primaryCta: { label: "Resources hub", href: "/resources" },
    secondaryCta: { label: "Medical billing guides", href: "/guides" },
  },
  {
    key: "tools",
    path: "/tools",
    title: "Medical Billing Calculators and Tools",
    eyebrow: "Tools",
    intro:
      "Use practical medical billing calculators to estimate cost, AR days, collection rate, ROI, coding workload, and practice revenue before a deeper billing review.",
    metaTitle: "Medical Billing Calculators and Tools | Apex",
    metaDescription:
      "Use Apex calculators for medical billing cost, coding workload, AR days, collection rate, ROI, and practice revenue planning.",
    collectionLabel: "Interactive tools",
    pages: toolPages,
    primaryCta: { label: "Request a billing audit", href: "/free-billing-audit" },
    secondaryCta: { label: "Schedule consultation", href: "/schedule-consultation" },
  },
  {
    key: "lead-magnets",
    path: "/lead-magnets",
    title: "Free Medical Billing Resources",
    eyebrow: "Lead Magnets",
    intro:
      "Start with free Apex resources for revenue assessment, AR analysis, billing checklists, RCM education, and coding-adjacent workflow questions.",
    metaTitle: "Free Medical Billing Resources | Apex",
    metaDescription:
      "Request free Apex resources including a revenue assessment, AR analysis, billing checklist, RCM guide, and coding cheat sheet.",
    collectionLabel: "Free resources",
    pages: leadMagnetPages,
    primaryCta: { label: "Free billing audit", href: "/free-billing-audit" },
    secondaryCta: { label: "Resources hub", href: "/resources" },
  },
  {
    key: "testimonials",
    path: "/testimonials",
    title: "Testimonials, Reviews, and Success Stories",
    eyebrow: "Testimonials",
    intro:
      "Use this section as the home for genuine client feedback, reviews, video testimonials, and success stories as Apex earns permission to publish them.",
    metaTitle: "Testimonials and Success Stories | Apex",
    metaDescription:
      "Explore Apex testimonial pages for reviews, video testimonials, and success stories using genuine client feedback only.",
    collectionLabel: "Proof pages",
    pages: testimonialPages,
    primaryCta: { label: "View case studies", href: "/case-studies" },
    secondaryCta: { label: "Schedule consultation", href: "/schedule-consultation" },
  },
  {
    key: "insurance-payers",
    path: "/insurance-payers",
    title: "Insurance Payer Expertise",
    eyebrow: "Payers",
    intro:
      "Apex supports medical billing workflows for major government and commercial payers. These pages describe working familiarity — eligibility verification, denial patterns, reimbursement cadence — without implying any official partnership or in-network relationship.",
    metaTitle: "Insurance Payer Expertise | Apex Precision Billing",
    metaDescription:
      "Explore Apex payer expertise pages for Medicare, Medicaid, Aetna, Cigna, UnitedHealthcare, Anthem, Humana, and Blue Cross Blue Shield.",
    collectionLabel: "Payer pages",
    pages: payerPages,
    primaryCta: { label: "Schedule a consultation", href: "/schedule-consultation" },
    secondaryCta: { label: "Free billing audit", href: "/free-billing-audit" },
  },
];

export const seoCollectionGroups = seoPageGroups.filter(
  (group) => group.key !== "resources",
);

export function getSeoGroup(key: SeoGroupKey): SeoPageGroup | undefined {
  return seoPageGroups.find((group) => group.key === key);
}

export function requireSeoGroup(key: SeoGroupKey): SeoPageGroup {
  const group = getSeoGroup(key);
  if (!group) {
    throw new Error(`Unknown SEO page group: ${key}`);
  }
  return group;
}

export function getSeoPagesByGroup(key: SeoGroupKey): SeoPage[] {
  return getSeoGroup(key)?.pages ?? [];
}

export function getSeoPageSlugs(key: SeoGroupKey): string[] {
  return getSeoPagesByGroup(key).map((page) => page.slug);
}

export function getSeoPage(key: SeoGroupKey, slug: string): SeoPage | undefined {
  return getSeoPagesByGroup(key).find((page) => page.slug === slug);
}

export function getAllSeoPages(): SeoPage[] {
  return seoPageGroups.flatMap((group) => group.pages);
}
