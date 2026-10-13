/**
 * Per-page SEO copy, keyed by route.
 *
 * This is a single-page app: every route is served the same index.html, so
 * without this each page would inherit the homepage's title and compete with it
 * for the same search terms. RouteSeo reads this map and rewrites the title,
 * description and canonical URL on navigation.
 *
 * Keep titles at or under ~60 characters and descriptions at ~150 - beyond that
 * Google truncates them in the result. Counts below include the name suffix.
 */

export const SITE_URL = 'https://sujanskymd.com';
export const SITE_NAME = 'Ulrike Sujansky, M.D.';
export const OG_IMAGE = `${SITE_URL}/brand-logo.png`;

export interface PageSeo {
  title: string;
  description: string;
  /** Keep this page out of the index (thank-you, 404). */
  noindex?: boolean;
}

const suffix = ` | ${SITE_NAME}`;

export const SEO_BY_PATH: Record<string, PageSeo> = {
  '/': {
    title: `Concierge Primary Care in San Mateo${suffix}`,
    description:
      'Concierge primary care in San Mateo, CA. Dr. Ulrike Sujansky offers extended, unhurried visits and 24/7 access to your physician by phone or email.',
  },
  '/membership': {
    title: `Concierge Membership & Fees${suffix}`,
    description:
      'How membership works at Dr. Ulrike Sujansky\'s San Mateo concierge practice: what the annual fee covers, how insurance and Medicare fit in, and how to join.',
  },
  '/services': {
    title: `Concierge Primary Care Services${suffix}`,
    description:
      'Primary care, preventive medicine and wellness services at Dr. Ulrike Sujansky\'s concierge practice in San Mateo, CA, including specialist referrals.',
  },
  '/about': {
    title: `About Our San Mateo Practice${suffix}`,
    description:
      'How Dr. Ulrike Sujansky\'s concierge practice in San Mateo works, and why fewer patients per doctor means more time and attention for your care.',
  },
  '/team': {
    title: `Meet Dr. Sujansky & Our Team${suffix}`,
    description:
      'Meet Dr. Ulrike Sujansky and the team at her concierge primary care practice in San Mateo, CA, including the office staff who coordinate your care.',
  },
  '/blog': {
    title: `Health News & Disease Updates${suffix}`,
    description:
      'Dr. Ulrike Sujansky\'s regular infectious disease updates for patients in San Mateo, CA - vaccines, outbreaks and practical health news in plain language.',
  },
  '/contact': {
    title: `Contact Our San Mateo Office${suffix}`,
    description:
      'Contact Dr. Ulrike Sujansky\'s concierge practice at 34 North San Mateo Drive, San Mateo, CA. Call (650) 393-5851, Monday to Friday, 8:30am to 5pm.',
  },
  '/privacy-policy': {
    title: `Privacy Policy${suffix}`,
    description:
      'How Dr. Ulrike Sujansky\'s San Mateo concierge practice collects, uses and protects your personal and health information.',
  },
  '/terms-of-service': {
    title: `Terms of Service${suffix}`,
    description:
      'The terms governing use of the website for Dr. Ulrike Sujansky\'s concierge primary care practice in San Mateo, CA.',
  },
  '/thank-you': {
    title: `Thank You${suffix}`,
    description: 'Thank you for contacting our office. We will be in touch shortly.',
    noindex: true,
  },
};

export const FALLBACK_SEO: PageSeo = {
  title: `Page Not Found${suffix}`,
  description: 'The page you were looking for could not be found.',
  noindex: true,
};
