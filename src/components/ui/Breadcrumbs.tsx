import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/lib/constants";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({
  items,
  tone = "onDark",
}: {
  items: Crumb[];
  tone?: "onDark" | "onLight";
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE.url}${item.href}` } : {}),
    })),
  };

  const linkCls =
    tone === "onDark"
      ? "font-body text-sm text-white/80 hover:text-white transition-colors"
      : "font-body text-sm text-muted hover:text-primary transition-colors";
  const currentCls =
    tone === "onDark"
      ? "font-body text-sm text-white"
      : "font-body text-sm text-foreground font-medium";
  const chevCls =
    tone === "onDark" ? "h-4 w-4 text-white/40" : "h-4 w-4 text-muted/50";

  return (
    <>
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 mb-6">
        {items.map((item, i) => (
          <span key={`${item.label}-${i}`} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className={linkCls}>
                {item.label}
              </Link>
            ) : (
              <span className={currentCls} aria-current="page">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && (
              <ChevronRight className={chevCls} aria-hidden="true" />
            )}
          </span>
        ))}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
