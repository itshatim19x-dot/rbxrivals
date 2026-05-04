// app/robots.ts
import type { MetadataRoute } from 'next';

const siteUrl = 'https://rbxrivals.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}