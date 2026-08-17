import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://forcemaman.fr";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`,
  );
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(data: Record<string, unknown>[]) {
  document.head
    .querySelectorAll('script[data-seo="jsonld"]')
    .forEach((s) => s.remove());
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.seo = "jsonld";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

/**
 * Per-route SEO: document title, meta description, Open Graph, canonical URL
 * and JSON-LD structured data. The JSON-LD script is also rendered inline so
 * it is present in the DOM right after hydration for JS-rendering crawlers.
 */
export default function Seo({
  title,
  description,
  path,
  noindex = false,
  jsonLd,
}: SeoProps) {
  const url = `${SITE_URL}${path}`;

  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:site_name", "ForceMaman");
    upsertMeta("property", "og:locale", "fr_FR");
    upsertMeta("name", "twitter:card", "summary");
    upsertLink("canonical", url);
    upsertMeta(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow",
    );
    if (jsonLd) {
      upsertJsonLd(Array.isArray(jsonLd) ? jsonLd : [jsonLd]);
    }
  }, [title, description, url, noindex, jsonLd]);

  if (!jsonLd) return null;
  const data = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
