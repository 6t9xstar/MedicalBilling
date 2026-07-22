import { CheckCircle } from "lucide-react";

const pricingFactors = [
  {
    title: "Workflow scope",
    description:
      "Pricing depends on whether Apex is supporting full-service medical billing, one revenue cycle function, or a more limited cleanup engagement.",
  },
  {
    title: "Specialty and claim complexity",
    description:
      "Procedure mix, payer behavior, documentation needs, and specialty-specific workflows all influence the level of billing effort required.",
  },
  {
    title: "Current operational condition",
    description:
      "A practice with stable claims and clear processes usually needs a different level of support than a group dealing with recurring denials, backlog, or aging AR.",
  },
  {
    title: "Systems and handoffs",
    description:
      "Existing software, reporting expectations, and the number of teams involved in intake, coding, and payment workflows can affect implementation effort.",
  },
];

const engagementModels = [
  "Full-service billing support for practices that want broader operational coverage",
  "Targeted help for denials, AR recovery, coding coordination, or payer enrollment",
  "Consultative review when leadership needs clarity before choosing a larger engagement",
];

export default function PricingSection() {
  return (
    <section className="section-standard bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            How Apex approaches pricing conversations
          </h2>
          <p className="mt-4 font-body text-base text-muted sm:text-lg">
            Apex is positioning pricing around scope and workflow reality rather
            than one flat percentage claim. That makes it easier to discuss the
            work honestly and recommend the right engagement for each practice.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingFactors.map((factor) => (
            <article
              key={factor.title}
              className="rounded-2xl border border-border bg-background p-7 shadow-sm"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {factor.title}
              </h3>
              <p className="mt-4 font-body text-sm leading-7 text-muted sm:text-base">
                {factor.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-background-subtle p-8 shadow-sm">
          <h3 className="font-heading text-2xl font-bold text-foreground">
            Common engagement models
          </h3>
          <p className="mt-4 font-body text-sm leading-7 text-muted sm:text-base">
            Not every practice needs the same structure. Apex can frame the
            conversation around the type of support you actually need rather
            than forcing every organization into one pricing pattern.
          </p>
          <ul className="mt-6 space-y-4">
            {engagementModels.map((model) => (
              <li key={model} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-body text-sm leading-6 text-foreground sm:text-base">
                  {model}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
