import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FALLBACK_SEO, OG_IMAGE, SEO_BY_PATH, SITE_URL } from '@/lib/seo';

/**
 * Keeps the document title, description, canonical URL and social tags in sync
 * with the current route.
 *
 * This is a single-page app, so without it every route would inherit the
 * homepage's title from index.html and compete with it for the same search
 * terms. The canonical tag in particular has to be emitted per route - a static
 * one in index.html would point every route at the homepage, which is worse
 * than having none.
 *
 * Deliberately not using react-helmet-async: the version pinned in this repo
 * (3.0.0) renders no tags at all under React 18 - RouteSeo mounted correctly
 * but produced zero managed elements. Setting the tags directly is a few lines,
 * has no dependency risk, and behaves identically across React versions.
 */

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Normalise "/team/" and "/team" to one key; "" falls back to "/".
    const path = pathname.replace(/\/+$/, '') || '/';
    const seo = SEO_BY_PATH[path] ?? FALLBACK_SEO;
    const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;

    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertLink('canonical', canonical);

    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:image', OG_IMAGE);

    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);

    // Keep thank-you / 404 out of the index, and make sure the tag does not
    // linger on the next route.
    const robots = document.head.querySelector('meta[name="robots"]');
    if (seo.noindex) {
      upsertMeta('name', 'robots', 'noindex, follow');
    } else if (robots) {
      robots.remove();
    }
  }, [pathname]);

  return null;
}
