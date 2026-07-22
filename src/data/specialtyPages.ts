import type { MarketingFaq } from "@/components/sections/MarketingScaffold";
import { getServiceBySlug } from "@/data/services";

export interface SpecialtyPage {
  name: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  challenges: string[];
  supportAreas: string[];
  triggerPoints: string[];
  relatedServiceSlugs: string[];
  relatedServiceTitles: string[];
  aliases?: string[];
  faqs: MarketingFaq[];
}

type SpecialtyConfig = {
  name: string;
  slug: string;
  intro: string;
  challenges: string[];
  supportAreas: string[];
  triggerPoints: string[];
  relatedServiceSlugs: string[];
  aliases?: string[];
};

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatList(items: string[]): string {
  if (items.length === 0) return "billing support";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function createSpecialtyPage(config: SpecialtyConfig): SpecialtyPage {
  const relatedServiceTitles = config.relatedServiceSlugs.map(
    (slug) => getServiceBySlug(slug)?.shortTitle ?? slugToTitle(slug),
  );

  return {
    ...config,
    relatedServiceTitles,
    title: `${config.name} Billing Services`,
    metaTitle: `${config.name} Billing Services | Apex Precision Billing Inc`,
    metaDescription: `Learn how Apex Precision Billing supports ${config.name.toLowerCase()} practices with specialty-aware billing workflows, denial follow-up, and revenue cycle support.`,
    faqs: [
      {
        question: `Does Apex support ${config.name.toLowerCase()} billing workflows?`,
        answer: `Yes. Apex is building specialty landing pages so ${config.name.toLowerCase()} practices can review billing support in the context of their own workflow pressures instead of a generic service summary.`,
      },
      {
        question: `Which Apex services are most relevant for ${config.name.toLowerCase()} practices?`,
        answer: `For ${config.name.toLowerCase()} groups, the most relevant pages usually include ${formatList(relatedServiceTitles)} depending on where the workflow is breaking down.`,
      },
      {
        question: `When should a ${config.name.toLowerCase()} practice ask for billing help?`,
        answer: `Apex is structuring these pages for practices dealing with issues such as ${formatList(config.triggerPoints.slice(0, 3))}.`,
      },
    ],
  };
}

export const specialtyPages: SpecialtyPage[] = [
  createSpecialtyPage({
    name: "Family Medicine",
    slug: "family-medicine-billing",
    intro:
      "Family medicine groups often balance preventive care, chronic condition management, routine visits, and broad payer variation. Billing support needs to be steady, flexible, and disciplined across a high volume of encounter types.",
    challenges: [
      "Broad mix of E/M visits and preventive services",
      "High front-end dependency on eligibility and demographics accuracy",
      "Documentation variation across providers and visit types",
    ],
    supportAreas: [
      "Claim submission workflows",
      "Denial follow-up",
      "Patient balance coordination",
      "Operational visibility for everyday billing volume",
    ],
    triggerPoints: [
      "Preventive and chronic-care claims creating inconsistent payer outcomes",
      "Front-end intake gaps feeding recurring billing rework",
      "Leadership needing clearer visibility into everyday billing volume",
    ],
    relatedServiceSlugs: [
      "medical-billing",
      "revenue-cycle-management",
      "eligibility-verification",
    ],
  }),
  createSpecialtyPage({
    name: "Internal Medicine",
    slug: "internal-medicine-billing",
    intro:
      "Internal medicine billing can become difficult when chronic disease management, follow-up visits, and medical complexity create a wider range of claim outcomes than the practice expects.",
    challenges: [
      "Complex established-patient billing mix",
      "Recurring payer edits tied to documentation detail",
      "High rework risk when charge and coding coordination slips",
    ],
    supportAreas: [
      "Workflow review for recurring denials",
      "Claim status follow-up",
      "Documentation-to-billing alignment",
      "Aging AR visibility",
    ],
    triggerPoints: [
      "Chronic-care billing patterns creating inconsistent reimbursement",
      "Coding and documentation alignment issues across providers",
      "Aging balances growing without a clear recovery plan",
    ],
    relatedServiceSlugs: [
      "medical-billing",
      "medical-coding",
      "accounts-receivable-recovery",
    ],
  }),
  createSpecialtyPage({
    name: "Psychiatry",
    slug: "psychiatry-billing",
    intro:
      "Psychiatry practices need billing support that accounts for therapy-related workflows, recurring visit cadence, and payer rules that can quickly create delays if documentation and claims handling drift apart.",
    challenges: [
      "Payer friction around behavioral health claims",
      "Visit-type complexity across recurring patient schedules",
      "Need for consistent follow-up on delayed adjudication",
    ],
    supportAreas: [
      "Behavioral health claim workflows",
      "Payment posting and follow-up",
      "Recurring denial pattern review",
      "Patient responsibility communication",
    ],
    triggerPoints: [
      "Behavioral health claims being held or delayed repeatedly",
      "Recurring visit cadence making claim follow-up harder to track",
      "Teams needing a clearer process for therapy-related reimbursement issues",
    ],
    relatedServiceSlugs: [
      "medical-billing",
      "payment-posting",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Mental Health",
    slug: "mental-health-billing",
    intro:
      "Mental health billing demands close attention to payer rules, service mix, and the relationship between clinical documentation and claim acceptance.",
    challenges: [
      "Authorization and payer policy friction",
      "Higher sensitivity to scheduling and attendance variation",
      "Frequent need for detailed follow-up on held claims",
    ],
    supportAreas: [
      "Claims workflow consistency",
      "Authorization-related billing coordination",
      "Denial review",
      "Revenue cycle reporting",
    ],
    triggerPoints: [
      "Authorization-related delays slowing reimbursement",
      "Held claims requiring persistent follow-up",
      "Leadership needing more reliable visibility into behavioral-health revenue cycle performance",
    ],
    relatedServiceSlugs: [
      "prior-authorization",
      "denial-management",
      "revenue-cycle-management",
    ],
    aliases: ["Behavioral Health"],
  }),
  createSpecialtyPage({
    name: "Home Health",
    slug: "home-health-billing",
    intro:
      "Home health billing requires process discipline because documentation, episode timing, and payer requirements can create costly delays when teams are not coordinated.",
    challenges: [
      "Documentation timing issues",
      "Complex payer requirements",
      "High administrative dependency across the care cycle",
    ],
    supportAreas: [
      "Claims and follow-up workflow",
      "Revenue cycle coordination",
      "Payer communication support",
      "Operational bottleneck review",
    ],
    triggerPoints: [
      "Documentation timing creating delays before claims can move",
      "Administrative dependency across episodes of care",
      "Payer complexity making follow-up more manual than it should be",
    ],
    relatedServiceSlugs: [
      "medical-billing",
      "revenue-cycle-management",
      "accounts-receivable-recovery",
    ],
  }),
  createSpecialtyPage({
    name: "Urgent Care",
    slug: "urgent-care-billing",
    intro:
      "Urgent care organizations move quickly, which means even small front-end process gaps can scale into claim volume problems fast.",
    challenges: [
      "High daily encounter volume",
      "Front-desk errors that cascade into back-end rework",
      "Need for efficient claim throughput and rapid follow-up",
    ],
    supportAreas: [
      "Eligibility and intake workflow review",
      "High-volume claims handling",
      "Denial trend analysis",
      "Cash-flow visibility",
    ],
    triggerPoints: [
      "High-volume visit flow magnifying small intake mistakes",
      "Claim throughput slowing because front-end information is inconsistent",
      "Denials becoming harder to work as volume increases",
    ],
    relatedServiceSlugs: [
      "eligibility-verification",
      "medical-billing",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Cardiology",
    slug: "cardiology-billing",
    intro:
      "Cardiology billing often combines office visits, diagnostic services, and procedure-related claims that require stronger workflow control than generic billing models provide.",
    challenges: [
      "Higher procedural complexity",
      "Payer scrutiny on claim detail",
      "Need to coordinate office and testing-related workflows",
    ],
    supportAreas: [
      "Specialty-aware claim handling",
      "Denial management",
      "Charge entry coordination",
      "AR follow-up",
    ],
    triggerPoints: [
      "Procedural claims needing tighter charge and claim coordination",
      "Diagnostic workflows creating multiple billing touchpoints",
      "Denied or delayed claims tied to payer scrutiny on clinical detail",
    ],
    relatedServiceSlugs: [
      "medical-coding",
      "charge-entry",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Orthopedic",
    slug: "orthopedic-billing",
    intro:
      "Orthopedic billing can be affected by surgery scheduling, imaging, follow-up care, and high documentation dependence, making process control essential.",
    challenges: [
      "Multi-step patient care episodes",
      "Procedure-related billing variation",
      "Documentation and modifier complexity",
    ],
    supportAreas: [
      "Claims workflow support",
      "Denial resolution",
      "Payment posting accuracy",
      "Surgical billing coordination",
    ],
    triggerPoints: [
      "Surgical episodes spanning multiple operational handoffs",
      "Modifier and documentation issues creating rework",
      "Teams needing cleaner payment visibility after procedures are billed",
    ],
    relatedServiceSlugs: [
      "charge-entry",
      "payment-posting",
      "denial-management",
    ],
    aliases: ["Orthopedic Surgery"],
  }),
  createSpecialtyPage({
    name: "Dermatology",
    slug: "dermatology-billing",
    intro:
      "Dermatology groups often manage a mix of office visits and procedures that can create fast-moving claim volume with frequent payer-specific nuance.",
    challenges: [
      "Procedure-heavy billing mix",
      "Coding and documentation coordination",
      "Need for careful payer rule handling",
    ],
    supportAreas: [
      "Claim submission discipline",
      "Denial review",
      "Charge capture support",
      "Specialty reporting",
    ],
    triggerPoints: [
      "Procedure-heavy days creating coding or charge-capture inconsistency",
      "Payer-specific rules changing claim outcomes quickly",
      "Practices needing clearer visibility into which services cause rework",
    ],
    relatedServiceSlugs: ["medical-coding", "charge-entry", "medical-billing"],
  }),
  createSpecialtyPage({
    name: "Gastroenterology",
    slug: "gastroenterology-billing",
    intro:
      "Gastroenterology billing often spans office care, procedural scheduling, and payer interactions that need tighter operational follow-through.",
    challenges: [
      "Procedure scheduling and claim timing issues",
      "Higher coordination needs across care settings",
      "Payer edits that require active follow-up",
    ],
    supportAreas: [
      "Procedure-related billing workflows",
      "AR recovery support",
      "Denial management",
      "Revenue cycle communication",
    ],
    triggerPoints: [
      "Procedure scheduling affecting claim timing and readiness",
      "Payer edits requiring more active back-end follow-up",
      "Care-setting complexity creating unclear ownership across billing steps",
    ],
    relatedServiceSlugs: [
      "accounts-receivable-recovery",
      "denial-management",
      "revenue-cycle-management",
    ],
  }),
  createSpecialtyPage({
    name: "Pain Management",
    slug: "pain-management-billing",
    intro:
      "Pain management practices usually need billing support that can handle recurring visits, interventional services, and close payer scrutiny without losing operational consistency.",
    challenges: [
      "Recurring treatment patterns with payer variability",
      "Need for detailed documentation alignment",
      "Delayed payment when follow-up is inconsistent",
    ],
    supportAreas: [
      "Claims workflow consistency",
      "Denial prevention and response",
      "Payment follow-up",
      "Practice-specific reporting",
    ],
    triggerPoints: [
      "Recurring treatment patterns generating payer variation",
      "Documentation detail affecting reimbursement outcomes",
      "Delayed payment because follow-up on interventional claims is inconsistent",
    ],
    relatedServiceSlugs: [
      "medical-coding",
      "denial-management",
      "payment-posting",
    ],
  }),
  createSpecialtyPage({
    name: "Physical Therapy",
    slug: "physical-therapy-billing",
    aliases: ["Physical Medicine & Rehab"],
    intro:
      "Physical therapy billing depends on scheduling discipline, recurring patient volume, and consistent claims handling over repeated episodes of care.",
    challenges: [
      "Recurring appointment-based billing",
      "Documentation coordination across repeated visits",
      "Need for strong operational follow-up",
    ],
    supportAreas: [
      "Claims handling",
      "Authorization and workflow coordination",
      "Aging AR review",
      "Patient balance visibility",
    ],
    triggerPoints: [
      "Repeated visits making workflow drift hard to spot until AR grows",
      "Authorization work interfering with billing cadence",
      "Patient-balance visibility becoming harder over longer care episodes",
    ],
    relatedServiceSlugs: [
      "prior-authorization",
      "accounts-receivable-recovery",
      "medical-billing",
    ],
  }),
  createSpecialtyPage({
    name: "Chiropractic",
    slug: "chiropractic-billing",
    intro:
      "Chiropractic billing can become difficult when high visit frequency, payer-specific requirements, and documentation habits do not stay aligned.",
    challenges: [
      "High recurring encounter volume",
      "Payer-specific claim rules",
      "Documentation-dependent reimbursement risk",
    ],
    supportAreas: [
      "Claim submission support",
      "Denial follow-up",
      "Recurring workflow review",
      "Revenue cycle visibility",
    ],
    triggerPoints: [
      "High recurring encounter volume hiding small but costly workflow errors",
      "Payer-specific rules creating repeat denials",
      "Documentation habits leading to preventable reimbursement risk",
    ],
    relatedServiceSlugs: [
      "medical-billing",
      "denial-management",
      "revenue-cycle-management",
    ],
  }),
  createSpecialtyPage({
    name: "Behavioral Health",
    slug: "behavioral-health-billing",
    intro:
      "Behavioral health organizations often need a billing model that can support recurring care, payer complexity, and a more communication-heavy revenue cycle.",
    challenges: [
      "Frequent payer friction",
      "Need for careful coordination between clinical and administrative workflows",
      "Held claims that require persistent follow-up",
    ],
    supportAreas: [
      "Claims workflow support",
      "Denial management",
      "Authorization coordination",
      "Operational reporting",
    ],
    triggerPoints: [
      "Payer friction making recurring care harder to reimburse cleanly",
      "Held claims requiring persistent communication and follow-up",
      "Clinical and administrative teams needing clearer coordination points",
    ],
    relatedServiceSlugs: [
      "prior-authorization",
      "denial-management",
      "revenue-cycle-management",
    ],
  }),
  createSpecialtyPage({
    name: "Pediatrics",
    slug: "pediatrics-billing",
    intro:
      "Pediatric practices often manage a broad mix of preventive visits, acute care, and recurring family communication, which makes billing workflow consistency especially important.",
    challenges: [
      "Broad service mix",
      "High scheduling and demographic dependency",
      "Need to reduce rework at scale",
    ],
    supportAreas: [
      "Front-end billing workflow review",
      "Claim submission support",
      "Denial tracking",
      "Patient balance communication",
    ],
    triggerPoints: [
      "Preventive and acute-care mix producing inconsistent billing patterns",
      "Demographic or scheduling issues flowing into claims",
      "Practices wanting less rework across a high-volume visit mix",
    ],
    relatedServiceSlugs: [
      "eligibility-verification",
      "medical-billing",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Radiology",
    slug: "radiology-billing",
    intro:
      "Radiology billing often depends on throughput, documentation coordination, and efficient claims handling across higher-volume diagnostic services.",
    challenges: [
      "High-volume diagnostic claim flow",
      "Need for fast and accurate processing",
      "Recurring payer edits that can slow cash flow",
    ],
    supportAreas: [
      "Claim throughput workflows",
      "Payment posting support",
      "Denial response",
      "AR visibility",
    ],
    triggerPoints: [
      "High diagnostic volume magnifying small throughput issues",
      "Payer edits slowing cash flow across many similar claims",
      "Teams needing cleaner payment and AR visibility at scale",
    ],
    relatedServiceSlugs: [
      "medical-billing",
      "payment-posting",
      "accounts-receivable-recovery",
    ],
  }),
  createSpecialtyPage({
    name: "Neurology",
    slug: "neurology-billing",
    intro:
      "Neurology groups often face a billing environment with both complex visit profiles and procedure-related variation, making disciplined revenue cycle support important.",
    challenges: [
      "Mixed complexity across service types",
      "Documentation-driven payer scrutiny",
      "Need for steady claim follow-up",
    ],
    supportAreas: [
      "Claim handling",
      "Denial management",
      "Revenue cycle reporting",
      "Workflow coordination",
    ],
    triggerPoints: [
      "Variation across service types creating inconsistent billing outcomes",
      "Payer scrutiny increasing documentation pressure",
      "Claim follow-up needing more discipline across a mixed service mix",
    ],
    relatedServiceSlugs: [
      "medical-coding",
      "denial-management",
      "revenue-cycle-management",
    ],
  }),
  createSpecialtyPage({
    name: "OB/GYN",
    slug: "ob-gyn-billing",
    aliases: ["Obstetrics & Gynecology"],
    intro:
      "OB/GYN billing can span routine visits, procedural work, and longer care episodes, which means teams need stronger coordination between scheduling, documentation, and claims handling.",
    challenges: [
      "Care episodes with multiple billing touchpoints",
      "Need for coordination across visit types",
      "High risk of process gaps creating payment delays",
    ],
    supportAreas: [
      "Claims workflow review",
      "Payer follow-up",
      "Charge entry coordination",
      "Practice-level visibility",
    ],
    triggerPoints: [
      "Longer care episodes creating multiple billing handoffs",
      "Visit-type variation making process ownership harder to track",
      "Scheduling and documentation gaps delaying payment",
    ],
    relatedServiceSlugs: [
      "charge-entry",
      "medical-billing",
      "revenue-cycle-management",
    ],
  }),
  createSpecialtyPage({
    name: "Oncology",
    slug: "oncology-billing",
    intro:
      "Oncology billing requires a revenue cycle approach that can handle complex treatment workflows, tighter documentation needs, and persistent follow-up on delayed or contested claims.",
    challenges: [
      "Operational complexity across treatment cycles",
      "High sensitivity to payer delays",
      "Need for disciplined follow-up and communication",
    ],
    supportAreas: [
      "Claims coordination",
      "AR recovery support",
      "Denial management",
      "Revenue cycle reporting",
    ],
    triggerPoints: [
      "Treatment-cycle complexity creating more claim handoffs",
      "Payer delays affecting financial visibility quickly",
      "Teams needing disciplined communication around unresolved balances",
    ],
    relatedServiceSlugs: [
      "accounts-receivable-recovery",
      "denial-management",
      "revenue-cycle-management",
    ],
  }),
  createSpecialtyPage({
    name: "Ophthalmology",
    slug: "ophthalmology-billing",
    intro:
      "Ophthalmology practices often need billing support that can handle a blend of office-based care and procedural services without losing efficiency.",
    challenges: [
      "Mixed visit and procedure workflows",
      "Payer-specific claim handling requirements",
      "Need for accurate follow-through across multiple service types",
    ],
    supportAreas: [
      "Claims handling",
      "Charge capture review",
      "Denial tracking",
      "Workflow visibility",
    ],
    triggerPoints: [
      "Procedure and office-visit workflows needing tighter coordination",
      "Payer-specific handling creating inconsistent outcomes",
      "Teams needing better visibility across multiple service types",
    ],
    relatedServiceSlugs: [
      "charge-entry",
      "medical-billing",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Urology",
    slug: "urology-billing",
    intro:
      "Urology billing can involve recurring patient care, procedure-related claims, and workflow coordination challenges that generic billing support may not address well.",
    challenges: [
      "Procedure-related claim variation",
      "Need for consistent payer follow-up",
      "Operational complexity across encounter types",
    ],
    supportAreas: [
      "Claim management",
      "Denial response",
      "Payment posting",
      "AR follow-up",
    ],
    triggerPoints: [
      "Procedure-related claims creating variable follow-up needs",
      "Payer response lag affecting multiple encounter types",
      "Teams wanting more reliable payment and AR visibility",
    ],
    relatedServiceSlugs: [
      "payment-posting",
      "accounts-receivable-recovery",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Podiatry",
    slug: "podiatry-billing",
    intro:
      "Podiatry practices often benefit from billing support that keeps visit workflows, procedure handling, and payer follow-up tightly organized.",
    challenges: [
      "Recurring service variation",
      "Documentation and coding coordination",
      "Claim edits that can accumulate over time",
    ],
    supportAreas: [
      "Claims workflow consistency",
      "Denial management",
      "Payment follow-up",
      "Reporting support",
    ],
    triggerPoints: [
      "Recurring services generating small but repeated claim issues",
      "Documentation and coding alignment needing closer attention",
      "Payer edits accumulating until cash flow is affected",
    ],
    relatedServiceSlugs: [
      "medical-coding",
      "denial-management",
      "payment-posting",
    ],
  }),
  createSpecialtyPage({
    name: "General Surgery",
    slug: "general-surgery-billing",
    intro:
      "General surgery billing requires tight control over scheduling, documentation, procedural claims, and follow-up, especially when care spans multiple operational touchpoints.",
    challenges: [
      "Higher procedural billing complexity",
      "Need for accurate coordination across scheduling and claims",
      "Payment delays when follow-up ownership is unclear",
    ],
    supportAreas: [
      "Surgery-related billing workflows",
      "AR recovery",
      "Denial management",
      "Charge entry coordination",
    ],
    triggerPoints: [
      "Surgical scheduling and billing steps becoming disconnected",
      "Claims needing tighter procedural coordination",
      "Payment delays caused by unclear follow-up ownership",
    ],
    relatedServiceSlugs: [
      "charge-entry",
      "accounts-receivable-recovery",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Telehealth",
    slug: "telehealth-billing",
    intro:
      "Telehealth billing creates its own operational questions around workflow consistency, payer expectations, and claim handling that need a dedicated support model.",
    challenges: [
      "Payer variation by service type",
      "Operational inconsistency across workflows",
      "Need for clear claim handling and follow-up processes",
    ],
    supportAreas: [
      "Telehealth claim workflow support",
      "Denial review",
      "Eligibility and front-end coordination",
      "Operational reporting",
    ],
    triggerPoints: [
      "Service-type variation creating payer confusion",
      "Teams needing more consistent telehealth workflow rules",
      "Front-end and denial issues slowing claims that should move quickly",
    ],
    relatedServiceSlugs: [
      "eligibility-verification",
      "denial-management",
      "medical-billing",
    ],
  }),
  createSpecialtyPage({
    name: "Acupuncture",
    slug: "acupuncture-billing",
    intro:
      "Acupuncture practices often manage recurring treatment schedules and payer-specific rules that require consistent documentation and claim handling to maintain steady reimbursement.",
    challenges: [
      "Recurring treatment-based billing patterns",
      "Payer variation in coverage and documentation requirements",
      "Need for consistent follow-up across recurring visits",
    ],
    supportAreas: [
      "Claim submission workflows",
      "Denial follow-up",
      "Eligibility verification",
      "Patient balance communication",
    ],
    triggerPoints: [
      "Recurring treatment cycles creating documentation drift",
      "Payer coverage rules changing claim outcomes",
      "Practices wanting clearer revenue visibility across recurring care",
    ],
    relatedServiceSlugs: [
      "medical-billing",
      "eligibility-verification",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Allergy Immunology",
    slug: "allergy-immunology-billing",
    intro:
      "Allergy and immunology practices often balance office visits, testing services, and treatment procedures that require coordinated billing workflows and careful payer rule awareness.",
    challenges: [
      "Mixed service mix across testing and treatment",
      "Payer-specific rules for allergy-related claims",
      "Documentation coordination across visit types",
    ],
    supportAreas: [
      "Claims handling",
      "Denial management",
      "Charge entry coordination",
      "Revenue cycle reporting",
    ],
    triggerPoints: [
      "Testing and treatment workflows creating inconsistent claim patterns",
      "Payer rules requiring closer documentation alignment",
      "Teams wanting better visibility across mixed service billing",
    ],
    relatedServiceSlugs: [
      "medical-coding",
      "charge-entry",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Anesthesia",
    slug: "anesthesia-billing",
    intro:
      "Anesthesia billing requires precise documentation, modifier accuracy, and close coordination with surgical scheduling to ensure claims are submitted correctly and follow-up is consistent.",
    challenges: [
      "Modifier and documentation complexity",
      "Coordination with surgical scheduling and facility billing",
      "Payer scrutiny on anesthesia time and service detail",
    ],
    supportAreas: [
      "Charge entry coordination",
      "Medical coding support",
      "Claims follow-up",
      "Denial resolution",
    ],
    triggerPoints: [
      "Surgical scheduling and anesthesia documentation needing tighter alignment",
      "Payer edits tied to modifier or time-based detail",
      "Claims requiring persistent follow-up when documentation gaps arise",
    ],
    relatedServiceSlugs: [
      "charge-entry",
      "medical-coding",
      "claims-follow-up",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Audiology",
    slug: "audiology-billing",
    intro:
      "Audiology practices often need billing support that accounts for diagnostic testing, device-related services, and recurring patient visits within a structured revenue cycle framework.",
    challenges: [
      "Mixed diagnostic and device-related billing",
      "Payer variation in coverage for testing and hearing services",
      "Need for consistent eligibility and claims follow-up",
    ],
    supportAreas: [
      "Eligibility verification",
      "Claims handling",
      "Payment posting",
      "Denial review",
    ],
    triggerPoints: [
      "Testing and device service variation creating billing inconsistency",
      "Eligibility gaps leading to avoidable claim issues",
      "Practices needing clearer payment visibility across service types",
    ],
    relatedServiceSlugs: [
      "eligibility-verification",
      "medical-billing",
      "payment-posting",
    ],
  }),
  createSpecialtyPage({
    name: "Cosmetic Surgery",
    slug: "cosmetic-surgery-billing",
    intro:
      "Cosmetic surgery practices manage a mix of elective and medically necessary procedures that require careful front-end coordination, payment collection, and denial awareness.",
    challenges: [
      "Elective versus medically necessary billing complexity",
      "Patient payment collection and balance communication",
      "Payer rules for covered cosmetic-related services",
    ],
    supportAreas: [
      "Charge entry and claims handling",
      "Patient balance coordination",
      "Denial management",
      "Payment posting",
    ],
    triggerPoints: [
      "Elective and covered procedure mix creating billing confusion",
      "Patient balance collection needing clearer processes",
      "Denied cosmetic-related claims requiring appeal follow-through",
    ],
    relatedServiceSlugs: [
      "charge-entry",
      "patient-billing-services",
      "denial-management",
      "payment-posting",
    ],
  }),
  createSpecialtyPage({
    name: "Dentistry",
    slug: "dentistry-billing",
    intro:
      "Dental practices often need billing workflows that can handle procedure variation, insurance coordination, and patient payment follow-up across a high volume of recurring visits.",
    challenges: [
      "Procedure variation across general and specialty dental services",
      "Insurance coordination and benefit verification complexity",
      "Patient responsibility management and follow-up",
    ],
    supportAreas: [
      "Claims submission workflows",
      "Denial follow-up",
      "Patient balance communication",
      "Revenue cycle reporting",
    ],
    triggerPoints: [
      "Procedure variation creating inconsistent claim outcomes",
      "Insurance verification gaps leading to avoidable denials",
      "Patient balances accumulating without clear follow-up processes",
    ],
    relatedServiceSlugs: [
      "medical-billing",
      "eligibility-verification",
      "claims-follow-up",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Diagnostic Imaging",
    slug: "diagnostic-imaging-billing",
    intro:
      "Diagnostic imaging billing depends on volume efficiency, accurate coding, and consistent follow-up to prevent payer edits and documentation gaps from slowing cash flow.",
    challenges: [
      "High-volume diagnostic claim throughput",
      "Coding and modifier accuracy requirements",
      "Payer edits that can accumulate at scale",
    ],
    supportAreas: [
      "Medical coding support",
      "Claims workflow management",
      "Payment posting",
      "AR recovery",
    ],
    triggerPoints: [
      "High imaging volume amplifying small coding or documentation issues",
      "Payer edits creating recurring claim rework",
      "Teams needing clearer AR visibility across diagnostic service lines",
    ],
    relatedServiceSlugs: [
      "medical-coding",
      "payment-posting",
      "accounts-receivable-recovery",
    ],
  }),
  createSpecialtyPage({
    name: "Emergency Medicine",
    slug: "emergency-medicine-billing",
    intro:
      "Emergency medicine billing operates under high volume, time-sensitive conditions where front-end accuracy, coding precision, and rapid claim follow-up are essential.",
    challenges: [
      "High-volume, time-sensitive claim environment",
      "E/M coding and documentation scrutiny",
      "Need for fast claim throughput and denial response",
    ],
    supportAreas: [
      "Charge entry and claims submission",
      "Medical coding support",
      "Denial management",
      "Revenue cycle reporting",
    ],
    triggerPoints: [
      "High patient volume creating front-end data accuracy challenges",
      "E/M coding variation leading to payer edits",
      "Claims needing faster turnaround to maintain cash flow",
    ],
    relatedServiceSlugs: [
      "charge-entry",
      "medical-coding",
      "medical-claims-submission",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Endocrinology",
    slug: "endocrinology-billing",
    intro:
      "Endocrinology practices often manage chronic condition follow-up, testing-related services, and complex medication management that require steady billing workflow support.",
    challenges: [
      "Chronic care management billing complexity",
      "Testing and procedure coordination",
      "Documentation dependency across recurring visits",
    ],
    supportAreas: [
      "Medical coding support",
      "Claims handling",
      "Denial management",
      "Revenue cycle coordination",
    ],
    triggerPoints: [
      "Chronic care follow-up creating recurring documentation demands",
      "Testing services adding billing complexity",
      "Practices wanting stronger denial follow-up across recurring claim types",
    ],
    relatedServiceSlugs: [
      "medical-coding",
      "medical-billing",
      "denial-management",
      "revenue-cycle-management",
    ],
  }),
  createSpecialtyPage({
    name: "Nephrology",
    slug: "nephrology-billing",
    intro:
      "Nephrology practices manage complex chronic care, dialysis coordination, and procedure-related billing that require careful documentation alignment and persistent payer follow-up.",
    challenges: [
      "Chronic and dialysis-related billing complexity",
      "Documentation requirements across care settings",
      "Payer follow-up for recurring treatment claims",
    ],
    supportAreas: [
      "Medical coding support",
      "Claims management",
      "AR recovery",
      "Denial resolution",
    ],
    triggerPoints: [
      "Chronic care documentation creating recurring billing friction",
      "Dialysis-related claims needing consistent payer follow-up",
      "AR aging without a clear recovery process",
    ],
    relatedServiceSlugs: [
      "medical-coding",
      "medical-billing",
      "accounts-receivable-recovery",
    ],
  }),
  createSpecialtyPage({
    name: "Nuclear Medicine",
    slug: "nuclear-medicine-billing",
    intro:
      "Nuclear medicine billing involves specialized diagnostic and therapeutic procedures that require precise coding, documentation discipline, and close payer coordination.",
    challenges: [
      "Specialized procedure coding complexity",
      "Documentation requirements for nuclear medicine services",
      "Payer scrutiny on medical necessity and service detail",
    ],
    supportAreas: [
      "Charge entry coordination",
      "Medical coding support",
      "Denial management",
      "Claims follow-up",
    ],
    triggerPoints: [
      "Procedure coding complexity creating claim submission delays",
      "Payer medical necessity reviews requiring tighter documentation",
      "Denied claims needing specialized follow-through",
    ],
    relatedServiceSlugs: [
      "charge-entry",
      "medical-coding",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Otolaryngology",
    slug: "otolaryngology-billing",
    intro:
      "Otolaryngology practices often balance office visits, diagnostic testing, and surgical procedures that need coordinated billing workflows across multiple service types.",
    challenges: [
      "Mixed office, testing, and surgical billing mix",
      "Coding and modifier complexity across procedure types",
      "Need for coordinated claims handling across care settings",
    ],
    supportAreas: [
      "Charge entry and claims support",
      "Medical coding coordination",
      "Denial management",
      "Payment posting",
    ],
    triggerPoints: [
      "Office and surgical service mix creating billing handoff challenges",
      "Modifier and coding issues leading to claim rework",
      "Teams needing clearer visibility across multi-service billing",
    ],
    relatedServiceSlugs: [
      "charge-entry",
      "medical-coding",
      "denial-management",
      "medical-billing",
    ],
  }),
  createSpecialtyPage({
    name: "Pathology",
    slug: "pathology-billing",
    intro:
      "Pathology billing depends on accurate coding, documentation detail, and efficient claims handling across high-volume laboratory and diagnostic service workflows.",
    challenges: [
      "High-volume lab and diagnostic claim throughput",
      "Coding accuracy and documentation requirements",
      "Payer edits requiring consistent follow-up",
    ],
    supportAreas: [
      "Medical coding support",
      "Claims workflow management",
      "Payment posting",
      "AR visibility",
    ],
    triggerPoints: [
      "High lab volume amplifying small coding or documentation issues",
      "Payer edits delaying claim resolution",
      "Practices needing stronger AR visibility across diagnostic services",
    ],
    relatedServiceSlugs: [
      "medical-coding",
      "payment-posting",
      "accounts-receivable-recovery",
    ],
  }),
  createSpecialtyPage({
    name: "Plastic Surgery",
    slug: "plastic-surgery-billing",
    intro:
      "Plastic surgery practices navigate both elective and reconstructive procedures, requiring clear billing workflows that differentiate payer-covered services from patient-pay arrangements.",
    challenges: [
      "Elective versus reconstructive procedure classification",
      "Patient payment coordination and balance communication",
      "Payer rules for covered reconstructive services",
    ],
    supportAreas: [
      "Charge entry and claims handling",
      "Patient balance management",
      "Denial follow-up",
      "Payment posting",
    ],
    triggerPoints: [
      "Elective and reconstructive service mix creating billing uncertainty",
      "Patient payment collection processes needing improvement",
      "Denied reconstructive claims requiring documentation and appeal support",
    ],
    relatedServiceSlugs: [
      "charge-entry",
      "patient-billing-services",
      "denial-management",
      "payment-posting",
    ],
  }),
  createSpecialtyPage({
    name: "Pulmonology",
    slug: "pulmonology-billing",
    intro:
      "Pulmonology billing involves chronic care management, diagnostic testing, and procedure-related claims that need coordinated billing processes and consistent payer follow-up.",
    challenges: [
      "Chronic care and diagnostic service billing mix",
      "Procedure-related coding and documentation requirements",
      "Payer follow-up across recurring care episodes",
    ],
    supportAreas: [
      "Medical coding support",
      "Claims handling",
      "Denial management",
      "Revenue cycle reporting",
    ],
    triggerPoints: [
      "Chronic and diagnostic service mix creating billing complexity",
      "Procedure documentation issues leading to claim delays",
      "Teams needing stronger denial follow-up across recurring service types",
    ],
    relatedServiceSlugs: [
      "medical-coding",
      "medical-billing",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Rheumatology",
    slug: "rheumatology-billing",
    intro:
      "Rheumatology practices often manage chronic conditions, infusion services, and recurring patient visits that require careful documentation and persistent claim follow-up.",
    challenges: [
      "Chronic condition management billing demands",
      "Infusion and injection service coordination",
      "Documentation dependency across recurring treatment cycles",
    ],
    supportAreas: [
      "Medical coding support",
      "Claims handling",
      "Denial management",
      "Revenue cycle coordination",
    ],
    triggerPoints: [
      "Chronic care documentation creating recurring billing pressure",
      "Infusion services adding coordination complexity",
      "Claims needing consistent follow-up across treatment cycles",
    ],
    relatedServiceSlugs: [
      "medical-coding",
      "medical-billing",
      "denial-management",
      "revenue-cycle-management",
    ],
  }),
  createSpecialtyPage({
    name: "Sleep Medicine",
    slug: "sleep-medicine-billing",
    intro:
      "Sleep medicine billing involves diagnostic testing, device management, and recurring care coordination that require accurate coding and steady payer follow-up.",
    challenges: [
      "Diagnostic testing and device-related billing complexity",
      "Payer-specific coverage rules for sleep studies",
      "Documentation requirements across testing and follow-up care",
    ],
    supportAreas: [
      "Medical coding support",
      "Eligibility verification",
      "Claims handling",
      "Denial management",
    ],
    triggerPoints: [
      "Sleep study coding and documentation creating claim friction",
      "Payer coverage variation requiring careful eligibility review",
      "Device-related claims needing consistent follow-up",
    ],
    relatedServiceSlugs: [
      "medical-coding",
      "eligibility-verification",
      "medical-billing",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Speech Therapy",
    slug: "speech-therapy-billing",
    intro:
      "Speech therapy practices depend on recurring visit workflows, authorization coordination, and consistent claims handling across episodes of care.",
    challenges: [
      "Recurring visit-based billing patterns",
      "Authorization and coverage verification demands",
      "Documentation coordination across therapy sessions",
    ],
    supportAreas: [
      "Authorization and eligibility support",
      "Claims submission workflows",
      "Denial follow-up",
      "Patient balance communication",
    ],
    triggerPoints: [
      "Recurring therapy sessions creating documentation drift",
      "Authorization gaps leading to claim denials",
      "Practices needing clearer visibility across therapy billing cycles",
    ],
    relatedServiceSlugs: [
      "prior-authorization",
      "eligibility-verification",
      "medical-billing",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Sports Medicine",
    slug: "sports-medicine-billing",
    intro:
      "Sports medicine practices manage a mix of injury care, procedure-related services, and follow-up rehabilitation that require coordinated billing across multiple care phases.",
    challenges: [
      "Mixed injury care and procedure billing mix",
      "Coding and modifier requirements across service types",
      "Need for coordinated claims handling across treatment phases",
    ],
    supportAreas: [
      "Charge entry and claims handling",
      "Medical coding support",
      "Denial management",
      "Payment posting",
    ],
    triggerPoints: [
      "Injury care and procedure claims creating billing handoff challenges",
      "Modifier and coding issues leading to claim rework",
      "Teams needing clearer visibility across multi-phase treatment billing",
    ],
    relatedServiceSlugs: [
      "charge-entry",
      "medical-coding",
      "medical-billing",
      "denial-management",
    ],
  }),
  createSpecialtyPage({
    name: "Vascular Surgery",
    slug: "vascular-surgery-billing",
    intro:
      "Vascular surgery practices require billing support that can handle complex procedural claims, documentation-intensive payer requirements, and persistent follow-up across surgical episodes.",
    challenges: [
      "Complex procedural and surgical billing demands",
      "Documentation detail and payer scrutiny requirements",
      "Need for coordinated follow-up across surgical care cycles",
    ],
    supportAreas: [
      "Charge entry coordination",
      "Medical coding support",
      "Denial management",
      "AR recovery",
    ],
    triggerPoints: [
      "Complex surgical claims needing tighter charge and coding coordination",
      "Payer documentation reviews creating claim delays",
      "Surgical AR aging without a clear recovery process",
    ],
    relatedServiceSlugs: [
      "charge-entry",
      "medical-coding",
      "denial-management",
      "accounts-receivable-recovery",
    ],
  }),
];

export function getAllSpecialtyPageSlugs(): string[] {
  return specialtyPages.map((page) => page.slug);
}

export function getSpecialtyPageBySlug(
  slug: string,
): SpecialtyPage | undefined {
  return specialtyPages.find((page) => page.slug === slug);
}

export function getSpecialtyPageByName(
  name: string,
): SpecialtyPage | undefined {
  const loweredName = name.toLowerCase();
  return specialtyPages.find(
    (page) =>
      page.name.toLowerCase() === loweredName ||
      page.aliases?.some((alias) => alias.toLowerCase() === loweredName),
  );
}

export function getRelatedSpecialties(
  serviceSlug: string,
  count = 4,
): SpecialtyPage[] {
  return specialtyPages
    .filter((page) => page.relatedServiceSlugs.includes(serviceSlug))
    .slice(0, count);
}
