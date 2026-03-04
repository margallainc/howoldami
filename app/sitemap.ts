import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://howoldami.com';

  const pages = [
    '',
    '/days-old-calculator',
    '/hours-old-calculator',
    '/seconds-old-calculator',
    '/weeks-old-calculator',
    '/heartbeats-since-birth',
    '/what-day-was-i-born',
    '/next-birthday-countdown',
    '/age-in-days',
    '/life-expectancy-calculator',
    '/about',
    '/privacy-policy',
    '/terms-of-service',
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));
}
