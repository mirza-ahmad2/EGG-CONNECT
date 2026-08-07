/** Site-wide SEO and contact constants */
export const SITE_URL = "https://europeangamblinggathering.eu";
export const SITE_NAME = "European Gambling Gathering";
export const SITE_TAGLINE = "Integrity, Transparency, Cooperation";
export const SITE_DESCRIPTION =
  "A European industry cooperation platform strengthening integrity, transparency, and coordination across the regulated gambling ecosystem.";
export const SITE_KEYWORDS =
  "European Gambling Gathering, EGG, gambling integrity, regulated gambling, market intelligence, illegal gambling, compliance, European gambling platform, industry cooperation";

export const LINKEDIN_URL =
  "https://www.linkedin.com/company/european-gambling-gathering/home/";
export const CONTACT_EMAIL_DISPLAY = "Add here";
export const SOCIAL_PLACEHOLDER = "Add here";

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMeta({
  title,
  description,
  path,
  keywords = SITE_KEYWORDS,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl("/og-image.jpg");
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: SITE_NAME },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { property: "og:locale", content: "en_EU" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
