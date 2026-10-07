/**
 * Static media served from the public GitHub repository through jsDelivr's
 * global edge network instead of the origin server.
 *
 * Requires:
 *  - the repository to be public on GitHub
 *  - files pushed to `main` (jsDelivr reads the git state and purges on push)
 *
 * To temporarily serve media from the origin again (e.g. repo made private),
 * set MEDIA_CDN to an empty string.
 */
const MEDIA_CDN = "https://cdn.jsdelivr.net/gh/6t9xstar/MedicalBilling@main";

/** Map a root-relative media path (e.g. "/images/hero.webp") to its CDN URL. */
export function media(path: string): string {
  if (!MEDIA_CDN || !path.startsWith("/")) return path;
  return `${MEDIA_CDN}/public${path}`;
}
