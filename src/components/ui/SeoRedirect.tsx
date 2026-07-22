import { SITE } from "@/lib/constants";

/**
 * Server-rendered soft redirect for static-export hosting.
 * Static export cannot use the Next.js redirect() runtime, so we emit a
 * meta-refresh, a canonical link pointing to the destination, JSON-LD that
 * flags the destination URL, and a client-side router fallback that fires
 * as soon as the page hydrates. Useful for collapsing collection slugs that
 * duplicate a stand-alone canonical page (for example /trust/our-process →
 * /our-process) while preserving the historical URL for inbound links.
 */
export default function SeoRedirect({
  to,
  from,
  title,
}: {
  to: string;
  from?: string;
  title?: string;
}) {
  const destination = to.startsWith("http")
    ? to
    : `${SITE.url}${to.startsWith("/") ? to : `/${to}`}`;
  const displayTitle = title ?? `Redirecting to ${to}`;
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="max-w-md rounded-2xl border border-border bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Redirecting
        </p>
        <h1 className="mt-3 font-heading text-2xl font-bold text-foreground">
          {displayTitle}
        </h1>
        <p className="mt-3 font-body text-sm leading-relaxed text-muted">
          This page has moved. If you are not redirected automatically, please
          use the link below.
        </p>
        <a
          href={to}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-colors duration-200 hover:bg-accent"
        >
          Continue to {to}
        </a>
      </div>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={destination} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: displayTitle,
            url: from ? `${SITE.url}${from}` : destination,
            isPartOf: {
              "@type": "WebSite",
              name: SITE.name,
              url: SITE.url,
            },
            mainEntity: {
              "@type": "WebPage",
              name: displayTitle,
              url: destination,
            },
            redirect: destination,
          }),
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.addEventListener('load', function() { setTimeout(function() { window.location.replace(${JSON.stringify(to)}); }, 60); });`,
        }}
      />
    </div>
  );
}
