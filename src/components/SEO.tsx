interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
  jsonLd?: object;
}

const SITE_NAME = "RESTRICTED OUTREACH";
const DEFAULT_TITLE = "RESTRICTED OUTREACH | Spain's First Certified Plane Partner";
const DEFAULT_DESCRIPTION =
  "RESTRICTED OUTREACH is Spain's first certified Plane partner. Expert implementation, migration, and custom solutions for Plane's unified workspace.";
const DEFAULT_IMAGE = "https://www.restrictedoutreach.com/og-image.png";
const SITE_URL = "https://www.restrictedoutreach.com";

/**
 * React 19 hoists <title>, <meta> and <link> rendered anywhere in the tree
 * into <head> — including during server rendering — so these tags are present
 * in the HTML crawlers receive.
 */
const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
  noindex = false,
  jsonLd,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const cleanCanonical = canonical?.split("#")[0];
  const canonicalUrl = cleanCanonical ? `${SITE_URL}${cleanCanonical}` : undefined;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      {canonicalUrl && <meta name="twitter:url" content={canonicalUrl} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
};

export default SEO;
