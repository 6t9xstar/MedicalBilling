export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroIntro: string;
  overview: string[];
  features: string[];
  painPoints: string[];
  process: string[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
  icon: string;
  image?: string;
}

export const services: Service[] = [
  {
    slug: "medical-billing",
    title: "Medical Billing Services",
    shortTitle: "Medical Billing",
    description:
      "End-to-end medical billing support for practices that need cleaner claim workflows, steadier follow-up, and better visibility into day-to-day revenue cycle performance.",
    heroIntro:
      "Medical billing works best when intake, claim submission, payment posting, denial response, and patient balance workflows all move in sync. Apex is rebuilding its core services around that operational reality.",
    overview: [
      "This service page is designed for physician practices that want a more complete billing support model than a patchwork of disconnected tasks and reactive follow-up.",
      "The focus is on workflow discipline, claim movement, and communication that helps practice leaders understand where revenue is getting stuck.",
    ],
    features: [
      "Claim preparation and submission workflows",
      "Payer follow-up and status management",
      "Patient balance coordination",
      "Payment posting support",
      "Denial escalation and rework tracking",
      "Revenue cycle reporting cadence",
    ],
    painPoints: [
      "Claims sitting too long without clear ownership",
      "Back-end teams spending time fixing front-end errors",
      "Limited visibility into why payments are delayed",
      "Too much billing work happening reactively instead of through defined process",
    ],
    process: [
      "Review current billing workflow and claim touchpoints",
      "Identify where claims stall or return for rework",
      "Standardize submission, follow-up, and posting responsibilities",
      "Track operational issues and communicate next steps consistently",
    ],
    faqs: [
      {
        question: "What does Apex include in medical billing support?",
        answer:
          "The core model is built around claim handling, payer follow-up, denial response, payment posting support, and communication that helps the practice understand where workflow friction is occurring.",
      },
      {
        question: "Is this only for one specialty?",
        answer:
          "No. Apex is structuring its services so the core billing workflow can support multiple specialties while still allowing for specialty-specific detail on dedicated landing pages.",
      },
    ],
    relatedSlugs: [
      "revenue-cycle-management",
      "denial-management",
      "payment-posting",
    ],
    icon: "FileText",
    image: "/images/claim.webp",
  },
  {
    slug: "revenue-cycle-management",
    title: "Revenue Cycle Management",
    shortTitle: "Revenue Cycle Management",
    description:
      "Revenue cycle management support that connects front-end workflows, claims activity, payer follow-up, and cash posting into a more accountable operating model.",
    heroIntro:
      "RCM is not just a back-office function. It is the operating system that connects registration, billing, coding coordination, payer response, and payment visibility.",
    overview: [
      "This service is for practices that want to understand the whole revenue cycle, not just one broken step inside it.",
      "Apex uses the RCM page to frame how front-end accuracy and back-end discipline work together.",
    ],
    features: [
      "Front-end workflow review",
      "Claims throughput management",
      "Denial and rework tracking",
      "Payment posting coordination",
      "Aging AR visibility",
      "Operational reporting for leadership",
    ],
    painPoints: [
      "Registration and eligibility mistakes feeding claim delays",
      "No single view of claim status and AR pressure points",
      "Back-end teams fixing recurring issues without root-cause correction",
      "Leadership receiving incomplete or non-actionable reports",
    ],
    process: [
      "Map front-end and back-end revenue cycle handoffs",
      "Identify recurring workflow leaks",
      "Clarify ownership for denials, follow-up, and posting",
      "Report on operational patterns and next-step priorities",
    ],
    faqs: [
      {
        question: "How is RCM different from general medical billing?",
        answer:
          "Medical billing is one core part of the revenue cycle. RCM looks more broadly at how intake, coding coordination, claims, follow-up, and payment activity affect financial performance.",
      },
      {
        question: "Who should use this page?",
        answer:
          "It is most useful for practices trying to understand operational bottlenecks across multiple billing functions, not just one claim task.",
      },
    ],
    relatedSlugs: [
      "medical-billing",
      "eligibility-verification",
      "payment-posting",
    ],
    icon: "TrendingUp",
    image: "/images/rcm.jpg",
  },
  {
    slug: "medical-coding",
    title: "Medical Coding Services",
    shortTitle: "Medical Coding",
    description:
      "Coding support for practices that need stronger alignment between documentation, charge capture, and the billing workflow that follows.",
    heroIntro:
      "Coding accuracy is not only about code selection. It also affects whether claims move cleanly, how quickly rework appears, and how much avoidable delay enters the revenue cycle.",
    overview: [
      "Apex is treating coding as a workflow coordination issue, not just a compliance checkbox.",
      "The goal is to reduce billing friction caused by mismatches between documentation habits, charge entry, and payer-facing claim requirements.",
    ],
    features: [
      "Coding workflow review",
      "Documentation-to-claim alignment support",
      "Charge entry coordination",
      "Coding-related denial analysis",
      "Recurring edit pattern review",
      "Operational feedback loop for billing teams",
    ],
    painPoints: [
      "Documentation and coding not lining up consistently",
      "Recurring edits or denials tied to code selection issues",
      "Charge capture delays affecting claim submission timing",
      "Lack of communication between coding and billing activity",
    ],
    process: [
      "Review how coding decisions flow into claims",
      "Identify recurring documentation and edit issues",
      "Clarify coordination points between coding and billing teams",
      "Track patterns that create preventable rework",
    ],
    faqs: [
      {
        question: "Does this replace provider documentation responsibility?",
        answer:
          "No. The service is about supporting coding workflows and alignment, not replacing clinical documentation responsibilities.",
      },
      {
        question: "Why is coding listed as a billing service?",
        answer:
          "Because coding choices directly affect claim movement, denials, and rework. Treating coding separately from billing often creates avoidable operational gaps.",
      },
    ],
    relatedSlugs: ["charge-entry", "denial-management", "medical-billing"],
    icon: "CheckCircle",
    image: "/images/claim.webp",
  },
  {
    slug: "accounts-receivable-recovery",
    title: "Accounts Receivable Recovery",
    shortTitle: "AR Recovery",
    description:
      "AR recovery support for practices that need more disciplined follow-up on unpaid claims, delayed payer responses, and aging balances.",
    heroIntro:
      "Aging AR is often a symptom of inconsistent follow-up, unclear prioritization, or unresolved workflow gaps that keep old balances moving from queue to queue.",
    overview: [
      "This service is meant for organizations that need a more structured approach to unpaid claims and unresolved balances.",
      "Apex uses it to frame recovery work as a process discipline issue, not just a collections issue.",
    ],
    features: [
      "Aging AR review",
      "Follow-up prioritization",
      "Payer status investigation",
      "Escalation of stalled claims",
      "Recovery workflow reporting",
      "Pattern analysis for recurring AR buildup",
    ],
    painPoints: [
      "Old balances staying open without a clear follow-up path",
      "Teams spending time on low-value accounts while higher-value issues age out",
      "No visibility into why AR continues to accumulate",
      "Recovery work disconnected from broader workflow fixes",
    ],
    process: [
      "Assess AR aging patterns and queue ownership",
      "Prioritize balances that need active follow-up",
      "Escalate unresolved payer issues",
      "Feed recurring AR causes back into workflow improvement discussions",
    ],
    faqs: [
      {
        question: "Is AR recovery different from standard billing follow-up?",
        answer:
          "Yes. AR recovery is specifically focused on unresolved balances, aging claims, and prioritizing the work needed to move stuck revenue.",
      },
      {
        question: "Can AR recovery reveal bigger workflow problems?",
        answer:
          "Often yes. Aging AR frequently points back to front-end errors, denial handling gaps, or inconsistent follow-up processes.",
      },
    ],
    relatedSlugs: ["denial-management", "medical-billing", "payment-posting"],
    icon: "RefreshCw",
    image: "/images/audit.jpg",
  },
  {
    slug: "denial-management",
    title: "Denial Management",
    shortTitle: "Denial Management",
    description:
      "Denial management support built around identifying repeat patterns, assigning follow-up clearly, and reducing avoidable rework across the billing cycle.",
    heroIntro:
      "Denials are not only a reimbursement problem. They are a process signal. The right denial workflow should show what broke, who owns the response, and what needs to change upstream.",
    overview: [
      "Apex uses denial management as a core service because denial work often exposes the operational weak points practices cannot see clearly in summary reports alone.",
      "This page is intended to support conversations about both immediate recovery work and longer-term workflow prevention.",
    ],
    features: [
      "Denial queue review",
      "Repeat pattern identification",
      "Appeal and rework support",
      "Root-cause workflow analysis",
      "Payer-specific issue tracking",
      "Denial reporting for leadership",
    ],
    painPoints: [
      "The same denials recurring without process correction",
      "Teams working denials with inconsistent ownership",
      "Too much focus on rework volume instead of root cause",
      "Poor visibility into which denial trends matter most",
    ],
    process: [
      "Categorize denial patterns by operational cause",
      "Assign response and escalation paths clearly",
      "Work high-priority denials and appeals",
      "Document upstream process fixes that can reduce recurrence",
    ],
    faqs: [
      {
        question:
          "Does denial management only happen after a claim is rejected?",
        answer:
          "No. Effective denial management should include analysis that helps reduce future denials, not just respond after they appear.",
      },
      {
        question: "Why is this a standalone page?",
        answer:
          "Because denial work is important enough to deserve its own explanation. Practices often need targeted help here even when other parts of billing are functioning reasonably well.",
      },
    ],
    relatedSlugs: [
      "accounts-receivable-recovery",
      "medical-billing",
      "eligibility-verification",
    ],
    icon: "AlertTriangle",
    image: "/images/billing-hero.webp",
  },
  {
    slug: "credentialing-enrollment",
    title: "Credentialing & Enrollment",
    shortTitle: "Credentialing & Enrollment",
    description:
      "Credentialing and payer enrollment support for practices that need a clearer process for getting providers set up, tracked, and maintained across payer relationships.",
    heroIntro:
      "Credentialing and enrollment delays can slow revenue long before a claim is ever submitted. Practices need a process that is organized, trackable, and easy to communicate.",
    overview: [
      "This service combines credentialing and enrollment because practices usually experience them as one operational process with multiple dependencies.",
      "Apex is positioning this page around coordination, status visibility, and administrative follow-through.",
    ],
    features: [
      "Payer enrollment coordination",
      "Credentialing status tracking",
      "License and profile follow-up",
      "Recredentialing support",
      "Administrative workflow visibility",
      "Communication on outstanding steps",
    ],
    painPoints: [
      "Enrollment delays affecting go-live timing or provider billing readiness",
      "Too many disconnected administrative touchpoints",
      "Little visibility into status across payers",
      "Recredentialing and maintenance tasks being handled reactively",
    ],
    process: [
      "Review provider and payer enrollment needs",
      "Track submission and outstanding requirements",
      "Follow up on stalled administrative steps",
      "Maintain a clearer status view for the practice",
    ],
    faqs: [
      {
        question: "Why combine credentialing and enrollment on one page?",
        answer:
          "Because they usually function as one connected operational workflow from the practice perspective, even if the tasks have different administrative details.",
      },
      {
        question: "Is this the same as provider enrollment?",
        answer:
          "Provider enrollment is a closely related sub-function. Apex is also creating a dedicated provider enrollment page for practices that want a more specific focus on payer setup activity.",
      },
    ],
    relatedSlugs: [
      "provider-enrollment",
      "medical-billing",
      "hipaa-compliance",
    ],
    icon: "UserCheck",
    image: "/images/credentialing.png",
  },
  {
    slug: "eligibility-verification",
    title: "Eligibility Verification",
    shortTitle: "Eligibility Verification",
    description:
      "Eligibility verification support that helps practices reduce preventable claim problems created by front-end errors and incomplete payer information.",
    heroIntro:
      "Many claim issues start before the patient encounter is even billed. Eligibility work is one of the clearest ways to reduce avoidable downstream friction.",
    overview: [
      "Apex includes eligibility verification in the core service map because front-end accuracy influences the rest of the revenue cycle more than many practices realize.",
      "The goal is to connect intake discipline to billing outcomes in a way that is operationally clear.",
    ],
    features: [
      "Front-end coverage verification workflow review",
      "Eligibility-related issue tracking",
      "Coordination between intake and billing teams",
      "Recurring front-end error analysis",
      "Documentation of coverage-related claim friction",
      "Workflow recommendations for cleaner claim setup",
    ],
    painPoints: [
      "Claims failing because eligibility steps were inconsistent or incomplete",
      "Front-desk errors creating hidden rework for billing teams",
      "Coverage uncertainty surfacing too late in the process",
      "No feedback loop between front-end issues and claim performance",
    ],
    process: [
      "Review current verification steps and handoffs",
      "Identify front-end patterns linked to claim delay or denial",
      "Clarify what information billing teams need consistently",
      "Use recurring issue data to support workflow correction",
    ],
    faqs: [
      {
        question: "Why is eligibility verification listed as a service page?",
        answer:
          "Because front-end coverage checks often determine whether the rest of the billing process runs cleanly or becomes a cycle of avoidable rework.",
      },
      {
        question: "Is this only relevant for larger practices?",
        answer:
          "No. Small and midsize practices can be hit especially hard by recurring front-end errors because they often have less redundancy in the billing workflow.",
      },
    ],
    relatedSlugs: [
      "revenue-cycle-management",
      "prior-authorization",
      "denial-management",
    ],
    icon: "Search",
    image: "/images/claim.webp",
  },
  {
    slug: "prior-authorization",
    title: "Prior Authorization",
    shortTitle: "Prior Authorization",
    description:
      "Prior authorization workflow support for practices that need clearer coordination between clinical teams, administrative staff, and billing operations.",
    heroIntro:
      "Prior authorization friction can slow scheduling, documentation, and reimbursement all at once. That makes it both an operational and revenue cycle issue.",
    overview: [
      "Apex is treating prior authorization as part of the broader financial workflow rather than as an isolated administrative burden.",
      "The page is designed to speak to practices that need stronger coordination and less avoidable delay.",
    ],
    features: [
      "Authorization workflow review",
      "Status tracking support",
      "Coordination with scheduling and billing teams",
      "Escalation visibility for delayed approvals",
      "Operational reporting on authorization-related friction",
      "Communication around missing or delayed requirements",
    ],
    painPoints: [
      "Authorization delays interrupting care and billing timelines",
      "Staff uncertainty about status and follow-up ownership",
      "Claims issues caused by incomplete prior authorization handling",
      "Administrative work happening outside a defined process",
    ],
    process: [
      "Review how authorization requests move through the practice",
      "Identify communication and tracking gaps",
      "Clarify coordination between scheduling, clinical, and billing teams",
      "Document recurring friction points for process improvement",
    ],
    faqs: [
      {
        question: "Is prior authorization really part of the revenue cycle?",
        answer:
          "Yes. Even though it often begins before claim submission, it can directly affect whether services are billed smoothly or become delayed and disputed.",
      },
      {
        question:
          "What practices benefit most from stronger authorization workflows?",
        answer:
          "Any organization where delays, missing information, or unclear ownership are slowing patient scheduling or creating downstream billing complications.",
      },
    ],
    relatedSlugs: [
      "eligibility-verification",
      "revenue-cycle-management",
      "denial-management",
    ],
    icon: "Clock",
    image: "/images/billing-hero.webp",
  },
  {
    slug: "charge-entry",
    title: "Charge Entry",
    shortTitle: "Charge Entry",
    description:
      "Charge entry support for practices that need cleaner handoffs between documentation, coding, and claim submission readiness.",
    heroIntro:
      "Charge entry problems often stay hidden until claims are delayed or edited downstream. That is why this work deserves a clear place in the service architecture.",
    overview: [
      "Apex uses charge entry as a standalone service topic because it sits at an important transition point between documentation activity and billing execution.",
      "The page is intended to support conversations about accuracy, timing, and workflow control.",
    ],
    features: [
      "Charge capture workflow review",
      "Entry timing and readiness checks",
      "Coding and billing coordination support",
      "Recurring entry issue analysis",
      "Claim preparation handoff improvement",
      "Operational feedback for upstream teams",
    ],
    painPoints: [
      "Charges entering the billing flow late or inconsistently",
      "Mismatch between coding output and billing readiness",
      "Rework caused by incomplete or unclear entry processes",
      "No clear accountability for handoff quality",
    ],
    process: [
      "Review how charges move from documentation into billing workflows",
      "Identify timing and accuracy gaps",
      "Clarify handoff responsibilities",
      "Reduce recurring rework that slows claim readiness",
    ],
    faqs: [
      {
        question: "Why give charge entry its own service page?",
        answer:
          "Because it is a specific operational choke point. When charge entry is inconsistent, claims can be delayed before they even reach payer review.",
      },
      {
        question: "How is this different from medical coding?",
        answer:
          "Coding and charge entry are related, but charge entry focuses more on how coded or documented services move into the billing workflow accurately and on time.",
      },
    ],
    relatedSlugs: ["medical-coding", "medical-billing", "payment-posting"],
    icon: "BarChart3",
    image: "/images/claim.webp",
  },
  {
    slug: "payment-posting",
    title: "Payment Posting",
    shortTitle: "Payment Posting",
    description:
      "Payment posting support for practices that need more reliable reconciliation, cleaner downstream visibility, and fewer unresolved cash application issues.",
    heroIntro:
      "Payment posting is where reimbursement activity becomes operationally visible. If posting is inconsistent, reporting quality and follow-up accuracy both suffer.",
    overview: [
      "Apex is making payment posting a dedicated service topic because practices often underestimate how much it affects AR visibility and leadership reporting.",
      "This page supports clearer conversations about reconciliation discipline and claim lifecycle visibility.",
    ],
    features: [
      "Payment posting workflow review",
      "Cash application support",
      "Reconciliation visibility",
      "Issue tracking for posting-related discrepancies",
      "Coordination with AR and denial workflows",
      "Reporting that reflects actual posting discipline",
    ],
    painPoints: [
      "Posted payments not translating into clear financial visibility",
      "Discrepancies lingering without structured follow-up",
      "AR and reporting teams working from incomplete posting information",
      "Cash activity becoming harder to reconcile at scale",
    ],
    process: [
      "Review posting and reconciliation workflow",
      "Identify recurring discrepancy or visibility issues",
      "Clarify ownership for unresolved posting exceptions",
      "Support cleaner reporting and downstream follow-up",
    ],
    faqs: [
      {
        question: "Why is payment posting important for leadership reporting?",
        answer:
          "Because if posting is inconsistent or delayed, the numbers leaders see may not reflect what is actually happening in the revenue cycle.",
      },
      {
        question: "Does this connect to AR recovery work?",
        answer:
          "Yes. Payment posting quality affects how accurately teams can evaluate unresolved balances and prioritize follow-up.",
      },
    ],
    relatedSlugs: [
      "accounts-receivable-recovery",
      "medical-billing",
      "revenue-cycle-management",
    ],
    icon: "Activity",
    image: "/images/rcm.jpg",
  },
  {
    slug: "provider-enrollment",
    title: "Provider Enrollment",
    shortTitle: "Provider Enrollment",
    description:
      "Provider enrollment support focused specifically on payer setup activity, administrative follow-through, and readiness for billing operations.",
    heroIntro:
      "Enrollment work often determines how quickly a provider becomes billable. Treating it as an afterthought can create delays that echo across the practice.",
    overview: [
      "While credentialing and enrollment are closely related, this page gives Apex a more specific place to discuss payer setup and operational readiness.",
      "It is especially useful for practices onboarding providers or expanding payer participation.",
    ],
    features: [
      "Payer enrollment workflow support",
      "Submission and status tracking",
      "Readiness visibility for billing operations",
      "Administrative follow-up on missing items",
      "Coordination with credentialing activity",
      "Communication on enrollment progress",
    ],
    painPoints: [
      "Providers not becoming billable on the expected timeline",
      "Enrollment tasks falling between teams",
      "Incomplete visibility into payer setup status",
      "Practice growth slowed by administrative delays",
    ],
    process: [
      "Review payer setup requirements",
      "Track submissions and open items",
      "Follow up on unresolved enrollment steps",
      "Coordinate readiness information with billing operations",
    ],
    faqs: [
      {
        question: "How is provider enrollment different from credentialing?",
        answer:
          "Credentialing and enrollment overlap, but provider enrollment focuses more specifically on the payer setup and billing-readiness side of the workflow.",
      },
      {
        question: "When is this service most useful?",
        answer:
          "It is especially useful when a practice is onboarding new providers, expanding locations, or dealing with payer setup delays that affect revenue timing.",
      },
    ],
    relatedSlugs: [
      "credentialing-enrollment",
      "medical-billing",
      "revenue-cycle-management",
    ],
    icon: "Users",
    image: "/images/credentialing.png",
  },
  {
    slug: "hipaa-compliance",
    title: "HIPAA Compliance Support",
    shortTitle: "HIPAA Compliance",
    description:
      "HIPAA-focused operational support that helps Apex explain how billing workflows, access controls, and administrative handling should align with privacy expectations.",
    heroIntro:
      "A compliance conversation is stronger when it is tied to actual workflow behavior. HIPAA support is not only a legal topic; it also shapes how billing operations are structured and maintained.",
    overview: [
      "This page exists to support trust-building conversations about protected health information, operational safeguards, and the way Apex frames billing support within a healthcare-specific environment.",
      "It complements the dedicated HIPAA notice page while staying anchored in service delivery.",
    ],
    features: [
      "Workflow review through a privacy and access lens",
      "Administrative safeguards awareness",
      "Operational handling expectations for billing activity",
      "Support for discussing business associate responsibilities",
      "Coordination with broader process design",
      "Alignment with legal and policy documentation",
    ],
    painPoints: [
      "Compliance language not connected to actual workflow behavior",
      "Staff uncertainty about access and handling expectations",
      "Trust concerns during vendor evaluation",
      "Need to explain safeguards in practical, operational terms",
    ],
    process: [
      "Review how billing workflows handle sensitive information",
      "Clarify operational expectations and safeguards",
      "Connect service discussions to documented compliance posture",
      "Support a more transparent trust conversation with clients",
    ],
    faqs: [
      {
        question: "Is this a legal advisory service?",
        answer:
          "No. This page is intended to explain how Apex frames HIPAA-related operational handling within billing workflows, not to provide legal advice.",
      },
      {
        question: "Why include HIPAA in the services section?",
        answer:
          "Because healthcare clients evaluate billing partners partly on how clearly they explain privacy-sensitive workflow handling and operational safeguards.",
      },
    ],
    relatedSlugs: [
      "credentialing-enrollment",
      "medical-billing",
      "provider-enrollment",
    ],
    icon: "ShieldCheck",
    image: "/images/billing-hero.webp",
  },
  {
    slug: "insurance-verification-services",
    title: "Insurance Verification Services",
    shortTitle: "Insurance Verification",
    description:
      "Insurance verification support that helps practices confirm coverage details, reduce preventable front-end errors, and protect downstream claim workflows.",
    heroIntro:
      "Insurance verification is one of the first places revenue cycle problems can be prevented. Apex frames this work around cleaner intake, clearer payer information, and fewer avoidable claim delays.",
    overview: [
      "This page expands the existing eligibility conversation into a more search-focused insurance verification service page for practices evaluating front-end billing support.",
      "The goal is to connect patient access accuracy with clean claim submission, denial prevention, and a more predictable billing workflow.",
    ],
    features: [
      "Coverage and benefit verification workflows",
      "Patient insurance information review",
      "Payer portal and verification status tracking",
      "Front-end issue communication",
      "Coordination with authorization and claims teams",
      "Verification-related denial pattern review",
    ],
    painPoints: [
      "Claims delayed by inaccurate or incomplete insurance details",
      "Staff uncertainty around active coverage or benefit information",
      "Eligibility issues discovered only after claims are submitted",
      "Repeated denials tied to front-end intake gaps",
    ],
    process: [
      "Review existing intake and verification workflow",
      "Clarify verification timing, documentation, and ownership",
      "Flag missing or inconsistent payer information before billing",
      "Report recurring verification issues that affect claims",
    ],
    faqs: [
      {
        question:
          "Is insurance verification the same as eligibility verification?",
        answer:
          "They are closely related. Insurance verification usually emphasizes coverage and benefit confirmation, while eligibility verification may be discussed as the broader front-end payer readiness workflow.",
      },
      {
        question: "Can verification work reduce all denials?",
        answer:
          "No. It can help reduce preventable front-end issues, but denials can also come from documentation, coding, authorization, payer policy, and follow-up factors.",
      },
    ],
    relatedSlugs: [
      "eligibility-verification",
      "prior-authorization",
      "medical-claims-submission",
    ],
    icon: "Search",
    image: "/images/billing-hero.webp",
  },
  {
    slug: "out-of-network-billing",
    title: "Out-of-Network Billing",
    shortTitle: "Out-of-Network Billing",
    description:
      "Out-of-network billing support for practices that need careful claim handling, payer follow-up, patient communication, and documentation discipline.",
    heroIntro:
      "Out-of-network billing needs a more careful workflow than standard claim submission because payer rules, patient responsibility, documentation, and follow-up expectations can vary significantly.",
    overview: [
      "This service page gives Apex a focused destination for practices that see out-of-network patients or need help understanding how those claims move through the revenue cycle.",
      "The page avoids reimbursement guarantees and positions the work around process clarity, compliant communication, and disciplined follow-up.",
    ],
    features: [
      "Out-of-network claim workflow review",
      "Payer status and documentation follow-up",
      "Patient responsibility coordination",
      "EOB and payment visibility support",
      "Appeal and reconsideration coordination when appropriate",
      "Reporting on recurring payer friction",
    ],
    painPoints: [
      "Payer responses that are harder to interpret or resolve",
      "Patient confusion about responsibility and benefits",
      "Claims requiring additional documentation or review",
      "Limited visibility into out-of-network AR patterns",
    ],
    process: [
      "Review out-of-network claim scenarios and payer mix",
      "Clarify documentation and communication workflows",
      "Track payer responses and unresolved claim activity",
      "Escalate patterns into appeals or process improvement when appropriate",
    ],
    faqs: [
      {
        question: "Does Apex guarantee out-of-network payment?",
        answer:
          "No. Apex does not guarantee reimbursement. The support is focused on workflow quality, claim tracking, follow-up, documentation coordination, and visibility.",
      },
      {
        question: "Can this support patient communication?",
        answer:
          "Yes. Out-of-network workflows often need clearer patient balance coordination and explanation of billing status, within the practice's policies and applicable requirements.",
      },
    ],
    relatedSlugs: [
      "medical-claims-submission",
      "claims-follow-up",
      "appeals-reconsiderations",
    ],
    icon: "Globe",
    image: "/images/claim.webp",
  },
  {
    slug: "medical-claims-submission",
    title: "Medical Claims Submission",
    shortTitle: "Claims Submission",
    description:
      "Medical claims submission support focused on clean claim preparation, timely filing workflows, edit review, and claim movement visibility.",
    heroIntro:
      "Claim submission is where front-end accuracy, documentation, coding coordination, and payer requirements meet. A cleaner submission workflow can reduce avoidable rework and improve operational visibility.",
    overview: [
      "This page gives Apex a dedicated landing page for one of the most searched billing functions while keeping the message practical and workflow-centered.",
      "The focus is on preparing claims carefully, submitting them consistently, monitoring acceptance, and identifying recurring issues that prevent clean movement.",
    ],
    features: [
      "Claim preparation and edit review",
      "Timely filing workflow support",
      "Electronic claim submission coordination",
      "Rejected claim identification and rework routing",
      "Submission status tracking",
      "Recurring issue reporting",
    ],
    painPoints: [
      "Claims delayed before they ever reach payer adjudication",
      "Rejected claims worked inconsistently or too late",
      "Submission errors caused by front-end or coding handoff gaps",
      "Limited visibility into claim acceptance and rejection patterns",
    ],
    process: [
      "Review claim creation and submission readiness",
      "Identify edits, missing information, and handoff issues",
      "Submit claims through defined workflows",
      "Track rejection patterns and communicate upstream fixes",
    ],
    faqs: [
      {
        question: "What makes a clean claim submission workflow?",
        answer:
          "A clean workflow usually includes accurate patient and payer information, documentation and coding alignment, charge review, timely submission, and rejection monitoring.",
      },
      {
        question: "Does claim submission include payer follow-up?",
        answer:
          "Submission is the starting point. Payer follow-up is usually handled as a related workflow after claims are accepted or when status issues appear.",
      },
    ],
    relatedSlugs: [
      "insurance-verification-services",
      "charge-entry",
      "claims-follow-up",
    ],
    icon: "FileText",
    image: "/images/claim.webp",
  },
  {
    slug: "claims-follow-up",
    title: "Claims Follow-Up",
    shortTitle: "Claims Follow-Up",
    description:
      "Claims follow-up support for practices that need consistent payer status checks, escalation, documentation, and unresolved claim visibility.",
    heroIntro:
      "Claims rarely resolve well when follow-up is reactive. Apex frames claims follow-up around queue ownership, payer status clarity, escalation paths, and reporting that shows where revenue is stuck.",
    overview: [
      "This service page targets a high-intent search topic and gives Apex a dedicated place to explain payer follow-up discipline.",
      "The page connects follow-up work to AR recovery, denial management, and leadership reporting instead of treating it as a generic administrative task.",
    ],
    features: [
      "Payer status checks and claim tracking",
      "Follow-up queue prioritization",
      "Escalation of stalled or unresolved claims",
      "Documentation request coordination",
      "Aging claim visibility",
      "Follow-up trend reporting",
    ],
    painPoints: [
      "Claims sitting without clear next steps",
      "Follow-up work focused on volume instead of priority",
      "Payer responses not documented consistently",
      "Leadership unsure why AR continues to age",
    ],
    process: [
      "Segment claims by age, payer, balance, and status",
      "Prioritize follow-up queues and next actions",
      "Document payer responses and escalation needs",
      "Report patterns that affect AR and denial prevention",
    ],
    faqs: [
      {
        question: "How often should claims be followed up?",
        answer:
          "The cadence depends on payer rules, claim age, balance, and status. Apex focuses on a structured follow-up plan rather than a one-size-fits-all interval.",
      },
      {
        question: "Is claims follow-up the same as AR recovery?",
        answer:
          "They overlap. Claims follow-up addresses active claim status, while AR recovery usually focuses more specifically on aging or unresolved balances.",
      },
    ],
    relatedSlugs: [
      "accounts-receivable-recovery",
      "medical-claims-submission",
      "denial-management",
    ],
    icon: "RefreshCw",
    image: "/images/audit.jpg",
  },
  {
    slug: "appeals-reconsiderations",
    title: "Appeals & Reconsiderations",
    shortTitle: "Appeals & Reconsiderations",
    description:
      "Appeals and reconsideration support for denied or underpaid claims that need organized documentation, payer-specific follow-up, and escalation discipline.",
    heroIntro:
      "Appeals work should be organized, evidence-aware, and timely. Apex positions appeals and reconsiderations as part of a broader denial response and revenue cycle improvement workflow.",
    overview: [
      "This page gives Apex a focused service destination for practices searching for help with denied claims, reconsiderations, and payer escalation.",
      "The content avoids implying that every appeal will succeed and instead explains the workflow needed to evaluate and pursue appropriate cases.",
    ],
    features: [
      "Appeal eligibility and documentation review",
      "Payer-specific appeal workflow tracking",
      "Reconsideration request coordination",
      "Denial reason and root-cause review",
      "Escalation deadline awareness",
      "Reporting on appeal patterns and outcomes",
    ],
    painPoints: [
      "Appeal deadlines missed because ownership is unclear",
      "Denial reasons not reviewed before rework begins",
      "Documentation requests handled inconsistently",
      "Repeating denials that need upstream process correction",
    ],
    process: [
      "Review denial reason and appeal options",
      "Gather documentation and payer-specific requirements",
      "Track submission, follow-up, and response status",
      "Feed denial patterns into prevention workflows",
    ],
    faqs: [
      {
        question: "Does Apex guarantee appeal success?",
        answer:
          "No. Appeals depend on payer rules, documentation, deadlines, medical necessity, coding, and claim facts. Apex supports the workflow and follow-up process.",
      },
      {
        question: "How do appeals connect to denial management?",
        answer:
          "Appeals are one response path inside denial management. The broader goal is to understand why denials happen and reduce avoidable recurrence where possible.",
      },
    ],
    relatedSlugs: [
      "denial-management",
      "claims-follow-up",
      "out-of-network-billing",
    ],
    icon: "AlertTriangle",
    image: "/images/claim.webp",
  },
  {
    slug: "patient-billing-services",
    title: "Patient Billing Services",
    shortTitle: "Patient Billing",
    description:
      "Patient billing support that helps practices manage patient balances, statements, payment questions, and communication workflows with clarity and care.",
    heroIntro:
      "Patient billing affects both collections and patient experience. Apex frames patient billing around clear balance workflows, respectful communication, and visibility into unresolved patient responsibility.",
    overview: [
      "This page gives Apex a dedicated landing page for the patient-facing side of revenue cycle support.",
      "The service connects patient balances to payment posting, payer adjudication, front-end information, and practice communication standards.",
    ],
    features: [
      "Patient statement workflow support",
      "Balance review and account status visibility",
      "Payment question routing",
      "Coordination with EOB and payer posting activity",
      "Patient responsibility reporting",
      "Escalation paths for unresolved balances",
    ],
    painPoints: [
      "Patients confused by balances or payer activity",
      "Statements sent before accounts are ready for patient billing",
      "Patient AR growing without clear reporting",
      "Staff spending too much time on avoidable billing questions",
    ],
    process: [
      "Review patient balance workflow and statement timing",
      "Clarify account readiness and communication expectations",
      "Track patient balance activity and unresolved questions",
      "Report patterns that affect patient billing efficiency",
    ],
    faqs: [
      {
        question: "Does patient billing include collections agency work?",
        answer:
          "No. This page is focused on patient billing workflows, balance communication, and account visibility. Formal collections policies should be handled according to the practice's policies and applicable requirements.",
      },
      {
        question: "Why is patient billing part of RCM?",
        answer:
          "Patient responsibility is part of the full revenue cycle, especially after payer adjudication, payment posting, and balance transfer activity.",
      },
    ],
    relatedSlugs: [
      "payment-posting",
      "medical-billing",
      "revenue-cycle-management",
    ],
    icon: "Users",
    image: "/images/billing-hero.webp",
  },
  {
    slug: "revenue-analytics-reporting",
    title: "Revenue Analytics & Reporting",
    shortTitle: "Revenue Analytics",
    description:
      "Revenue analytics and reporting support that turns billing activity, AR trends, denial patterns, and payment visibility into more useful operational insight.",
    heroIntro:
      "Reporting only helps when it leads to decisions. Apex frames revenue analytics around the metrics and workflow patterns practices can actually use to prioritize billing work.",
    overview: [
      "This page supports a high-value service topic for practices that need more visibility into billing performance without getting buried in dashboards.",
      "The focus is on connecting reporting to claims, denials, AR, posting, payer behavior, and front-end workflow issues.",
    ],
    features: [
      "AR aging and trend reporting",
      "Denial and rejection pattern visibility",
      "Payment posting and cash activity review",
      "Payer follow-up performance indicators",
      "Workflow bottleneck reporting",
      "Leadership-ready summary insights",
    ],
    painPoints: [
      "Reports that show numbers without clear next steps",
      "Limited visibility into why AR is aging",
      "Denial patterns hidden inside disconnected data",
      "Practice leaders unsure which billing issue to prioritize",
    ],
    process: [
      "Review available billing and revenue cycle reports",
      "Identify the metrics tied to workflow decisions",
      "Summarize trends by payer, service, denial, or AR category",
      "Turn reporting into action items and follow-up priorities",
    ],
    faqs: [
      {
        question: "What reports are most useful for medical billing?",
        answer:
          "Useful reporting often includes AR aging, denial trends, rejection patterns, claim status, payment posting activity, collection indicators, and workflow bottlenecks.",
      },
      {
        question: "Does analytics guarantee better revenue?",
        answer:
          "No. Analytics improves visibility and decision-making. Revenue outcomes depend on workflow execution, payer behavior, documentation, staffing, and other factors.",
      },
    ],
    relatedSlugs: [
      "revenue-cycle-management",
      "accounts-receivable-recovery",
      "payment-posting",
    ],
    icon: "BarChart3",
    image: "/images/rcm.jpg",
  },
  {
    slug: "practice-management-consulting",
    title: "Practice Management Consulting",
    shortTitle: "Practice Management",
    description:
      "Practice management consulting for healthcare teams reviewing billing workflows, staffing roles, reporting habits, and revenue cycle operating structure.",
    heroIntro:
      "Practice management consulting should connect operations, staffing, patient access, billing, and reporting. Apex positions this service around practical workflow improvement rather than generic advice.",
    overview: [
      "This service page gives Apex a consultative destination for practices that need help understanding whether their billing challenges are caused by people, process, technology, or payer friction.",
      "The content supports higher-level conversations before a practice chooses a specific service scope.",
    ],
    features: [
      "Revenue cycle workflow assessment",
      "Staffing and role clarity review",
      "Billing process mapping",
      "Reporting and accountability recommendations",
      "Vendor transition planning support",
      "Operational priority setting",
    ],
    painPoints: [
      "Unclear whether billing issues are staffing or process related",
      "Reports not connected to practical decisions",
      "Front office and billing teams working in silos",
      "Practice growth creating workflow strain",
    ],
    process: [
      "Map current operational and billing workflows",
      "Identify bottlenecks, ownership gaps, and reporting needs",
      "Prioritize changes by impact and feasibility",
      "Connect recommendations to service implementation options",
    ],
    faqs: [
      {
        question: "Is this only for practices outsourcing billing?",
        answer:
          "No. Consulting can help practices evaluate in-house workflows, outsourcing options, hybrid support, or transition planning.",
      },
      {
        question: "What makes practice management consulting useful?",
        answer:
          "It is useful when it turns broad operational concerns into a practical plan for roles, handoffs, reporting, and billing workflow priorities.",
      },
    ],
    relatedSlugs: [
      "revenue-cycle-management",
      "virtual-medical-billing-team",
      "medical-billing-outsourcing",
    ],
    icon: "Target",
    image: "/images/audit.jpg",
  },
  {
    slug: "virtual-medical-billing-team",
    title: "Virtual Medical Billing Team",
    shortTitle: "Virtual Billing Team",
    description:
      "Virtual medical billing team support for practices that need flexible billing operations, defined responsibilities, and remote workflow coordination.",
    heroIntro:
      "A virtual billing team should feel structured, accountable, and easy to coordinate. Apex frames this model around role clarity, communication cadence, and workflow visibility.",
    overview: [
      "This page gives Apex a conversion-focused destination for practices comparing in-house staffing with remote billing support.",
      "The message emphasizes structured responsibilities and process transparency rather than presenting remote support as a shortcut.",
    ],
    features: [
      "Remote billing workflow support",
      "Defined role and task ownership",
      "Claims, follow-up, posting, and denial coordination",
      "Communication cadence for practice leadership",
      "Reporting and queue visibility",
      "Scalable support as volume changes",
    ],
    painPoints: [
      "In-house billing capacity stretched too thin",
      "Difficulty hiring or retaining billing staff",
      "Remote support concerns around accountability",
      "Need for coverage without building a larger internal team",
    ],
    process: [
      "Review current staffing and billing task ownership",
      "Define virtual team responsibilities and communication paths",
      "Set reporting cadence and queue visibility expectations",
      "Adjust support as workflows and volume change",
    ],
    faqs: [
      {
        question: "Is a virtual billing team the same as outsourcing?",
        answer:
          "They are related. A virtual billing team emphasizes remote operational capacity and role coverage, while outsourcing may refer to a broader service model.",
      },
      {
        question: "How does Apex keep virtual support accountable?",
        answer:
          "Accountability depends on defined workflows, clear handoffs, reporting cadence, and communication about unresolved billing issues.",
      },
    ],
    relatedSlugs: [
      "medical-billing-outsourcing",
      "claims-follow-up",
      "practice-management-consulting",
    ],
    icon: "Monitor",
    image: "/images/billing-hero.webp",
  },
  {
    slug: "medical-billing-outsourcing",
    title: "Medical Billing Outsourcing",
    shortTitle: "Billing Outsourcing",
    description:
      "Medical billing outsourcing support for practices comparing in-house billing, hybrid support, or a more complete external revenue cycle workflow.",
    heroIntro:
      "Outsourcing medical billing is not only a pricing decision. Practices need to evaluate workflow fit, communication, specialty needs, reporting, and the transition from current processes.",
    overview: [
      "This page creates a high-intent outsourcing landing page while preserving Apex's trust-first language and avoiding exaggerated revenue promises.",
      "The content helps practices compare whether outsourcing, partial support, or a virtual team model best fits their operational needs.",
    ],
    features: [
      "Outsourced billing workflow review",
      "Claims, follow-up, denial, and posting support options",
      "Transition planning from existing processes",
      "Reporting and communication cadence",
      "Specialty-aware service scoping",
      "Ongoing workflow improvement discussions",
    ],
    painPoints: [
      "Internal billing workload exceeding available staff capacity",
      "Revenue cycle visibility limited by fragmented processes",
      "Vendor comparison focused only on price instead of workflow fit",
      "Fear of disruption during transition",
    ],
    process: [
      "Assess current billing structure and pain points",
      "Clarify which functions should be outsourced or supported",
      "Plan transition, access, communication, and reporting",
      "Monitor workflow performance and refine priorities over time",
    ],
    faqs: [
      {
        question:
          "When should a practice consider medical billing outsourcing?",
        answer:
          "Common triggers include staffing constraints, growing AR, recurring denials, unclear reporting, provider growth, or leadership needing more predictable billing operations.",
      },
      {
        question: "Does outsourcing guarantee increased revenue?",
        answer:
          "No. Apex avoids guaranteed revenue claims. Outsourcing can improve workflow discipline and visibility, but outcomes depend on many practice, payer, and documentation factors.",
      },
    ],
    relatedSlugs: [
      "medical-billing",
      "virtual-medical-billing-team",
      "revenue-cycle-management",
    ],
    icon: "Building2",
    image: "/images/rcm.jpg",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getRelatedServices(service: Service, limit = 4): Service[] {
  const explicitlyRelated = service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((value): value is Service => Boolean(value));

  if (explicitlyRelated.length >= limit) {
    return explicitlyRelated.slice(0, limit);
  }

  const fallback = services.filter(
    (candidate) =>
      candidate.slug !== service.slug &&
      !service.relatedSlugs.includes(candidate.slug),
  );

  return [...explicitlyRelated, ...fallback].slice(0, limit);
}
