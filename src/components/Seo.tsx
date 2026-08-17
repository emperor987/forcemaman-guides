import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://forcemaman.fr";
const DEFAULT_IMAGE = `${SITE_URL}/logo.svg`;

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
 * and JSON-LD structured data. All tags are upserted into <head> only, so a
 * page never carries duplicate meta or duplicate JSON-LD blocks.
 */
export default function Seo({
  title,
  description,
  path,
  noindex = false,
  image = DEFAULT_IMAGE,
  jsonLd,
}: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:site_name", "ForceMaman");
    upsertMeta("property", "og:locale", "fr_FR");
    upsertMeta("property", "og:image", image);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
    upsertLink("canonical", url);
    upsertMeta(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow",
    );
    if (jsonLd) {
      upsertJsonLd(Array.isArray(jsonLd) ? jsonLd : [jsonLd]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, url, noindex, image, jsonLdKey]);

  return null;
}
