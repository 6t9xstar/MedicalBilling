"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

type CalculatorInput = {
  key: string;
  label: string;
  suffix?: string;
  defaultValue: number;
};

type CalculatorConfig = {
  title: string;
  description: string;
  inputs: CalculatorInput[];
  resultLabel: string;
  resultSuffix?: string;
  format?: "currency" | "percent" | "number";
  calculate: (values: Record<string, number>) => number;
};

const calculatorConfigs: Record<string, CalculatorConfig> = {
  "medical-billing-cost-calculator": {
    title: "Estimate monthly billing service cost",
    description:
      "Enter monthly collections and an estimated billing percentage to frame outsourcing cost conversations.",
    inputs: [
      { key: "collections", label: "Monthly collections", defaultValue: 85000 },
      { key: "rate", label: "Estimated billing rate", suffix: "%", defaultValue: 6 },
    ],
    resultLabel: "Estimated monthly billing cost",
    format: "currency",
    calculate: ({ collections, rate }) => collections * (rate / 100),
  },
  "medical-coding-calculator": {
    title: "Estimate coding workload hours",
    description:
      "Use encounter volume and average coding review time to estimate monthly coding workload.",
    inputs: [
      { key: "encounters", label: "Monthly encounters", defaultValue: 900 },
      { key: "minutes", label: "Average minutes per encounter", defaultValue: 4 },
    ],
    resultLabel: "Estimated monthly coding hours",
    resultSuffix: "hours",
    format: "number",
    calculate: ({ encounters, minutes }) => (encounters * minutes) / 60,
  },
  "ar-days-calculator": {
    title: "Estimate AR days",
    description:
      "AR days gives a directional view of how long charges remain outstanding based on current AR and average charges.",
    inputs: [
      { key: "ar", label: "Total accounts receivable", defaultValue: 220000 },
      { key: "charges", label: "Average monthly charges", defaultValue: 320000 },
    ],
    resultLabel: "Estimated AR days",
    resultSuffix: "days",
    format: "number",
    calculate: ({ ar, charges }) => (charges > 0 ? (ar / charges) * 30 : 0),
  },
  "collection-rate-calculator": {
    title: "Estimate collection rate",
    description:
      "Compare payments received against expected collectible charges for a directional collection-rate view.",
    inputs: [
      { key: "payments", label: "Payments received", defaultValue: 78000 },
      { key: "allowed", label: "Allowed or collectible amount", defaultValue: 90000 },
    ],
    resultLabel: "Estimated collection rate",
    format: "percent",
    calculate: ({ payments, allowed }) => (allowed > 0 ? (payments / allowed) * 100 : 0),
  },
  "roi-calculator": {
    title: "Estimate billing support ROI",
    description:
      "Use collections, expected improvement, and service cost assumptions to estimate directional ROI.",
    inputs: [
      { key: "collections", label: "Monthly collections", defaultValue: 85000 },
      { key: "improvement", label: "Estimated improvement", suffix: "%", defaultValue: 5 },
      { key: "cost", label: "Estimated monthly service cost", defaultValue: 5100 },
    ],
    resultLabel: "Estimated monthly net impact",
    format: "currency",
    calculate: ({ collections, improvement, cost }) => collections * (improvement / 100) - cost,
  },
  "practice-revenue-calculator": {
    title: "Estimate monthly practice revenue",
    description:
      "Use visit volume and average reimbursement assumptions to estimate directional monthly revenue.",
    inputs: [
      { key: "visits", label: "Monthly visits", defaultValue: 700 },
      { key: "reimbursement", label: "Average reimbursement per visit", defaultValue: 125 },
      { key: "collectionRate", label: "Estimated collection rate", suffix: "%", defaultValue: 92 },
    ],
    resultLabel: "Estimated monthly collected revenue",
    format: "currency",
    calculate: ({ visits, reimbursement, collectionRate }) =>
      visits * reimbursement * (collectionRate / 100),
  },
};

function formatResult(value: number, format: CalculatorConfig["format"]) {
  if (!Number.isFinite(value)) return "—";

  if (format === "currency") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  }

  if (format === "percent") {
    return `${value.toFixed(1)}%`;
  }

  return value.toFixed(1);
}

function getInitialValues(config?: CalculatorConfig) {
  return Object.fromEntries(
    (config?.inputs ?? []).map((input) => [input.key, String(input.defaultValue)]),
  );
}

export default function ToolCalculator({ slug }: { slug: string }) {
  const config = calculatorConfigs[slug];
  const [values, setValues] = useState<Record<string, string>>(() =>
    getInitialValues(config),
  );

  const numericValues = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(values).map(([key, value]) => [
          key,
          Number.parseFloat(value) || 0,
        ]),
      ) as Record<string, number>,
    [values],
  );

  if (!config) return null;

  const result = config.calculate(numericValues);

  return (
    <section className="section-standard bg-background-subtle">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary/15 bg-white p-6 shadow-[0_20px_60px_rgba(8,48,111,0.08)] sm:p-8">
          <div className="mb-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
              <Calculator className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                {config.title}
              </h2>
              <p className="mt-2 max-w-3xl font-body text-sm leading-7 text-muted sm:text-base">
                {config.description}
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {config.inputs.map((input) => (
                <label key={input.key} className="block">
                  <span className="font-body text-sm font-semibold text-foreground">
                    {input.label}
                  </span>
                  <div className="mt-2 flex overflow-hidden rounded-xl border border-border bg-background focus-within:border-primary/30 focus-within:ring-2 focus-within:ring-primary/10">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={values[input.key] ?? ""}
                      onChange={(event) =>
                        setValues((current) => ({
                          ...current,
                          [input.key]: event.target.value,
                        }))
                      }
                      className="min-w-0 flex-1 bg-transparent px-4 py-3 font-body text-base text-foreground outline-none"
                    />
                    {input.suffix && (
                      <span className="flex items-center border-l border-border px-3 font-body text-sm text-muted">
                        {input.suffix}
                      </span>
                    )}
                  </div>
                </label>
              ))}
            </div>

            <div className="rounded-2xl border border-primary/10 bg-primary/5 p-6">
              <span className="font-body text-sm font-semibold uppercase tracking-wide text-primary">
                {config.resultLabel}
              </span>
              <div className="mt-3 font-heading text-4xl font-bold text-foreground">
                {formatResult(result, config.format)}
              </div>
              {config.resultSuffix && (
                <p className="mt-1 font-body text-sm text-muted">
                  {config.resultSuffix}
                </p>
              )}
              <p className="mt-5 font-body text-xs leading-6 text-muted">
                This calculator is for directional planning only and does not
                guarantee reimbursement, collections, coding output, or revenue
                improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
