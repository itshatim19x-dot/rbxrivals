import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const siteUrl = 'https://rbxrivals.com';

export const metadata: Metadata = {
  title: 'Roblox Rivals Guide 2026 | RbxRivals',
  description:
    'Master Roblox Rivals with a complete guide for weapons ranked tips movement strategies free skins active codes and pro gameplay tips.',

  alternates: {
    canonical: '/guide',
  },

  openGraph: {
    title: 'Roblox Rivals Guide 2026 | RbxRivals',
    description:
      'Learn Roblox Rivals weapons ranked tips movement strategies free skins active codes and pro gameplay tips in one complete guide.',
    url: `${siteUrl}/guide`,
    siteName: 'RbxRivals',
    type: 'article',
    images: [
      {
        url: '/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'Roblox Rivals Guide 2026 by RbxRivals',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Roblox Rivals Guide 2026 | RbxRivals',
    description:
      'Complete Roblox Rivals guide for weapons ranked tips movement free skins codes and pro strategies.',
    images: ['/img/logo.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function GuideLayout({
  children,
}: {
  children: ReactNode;
}) {
  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'Guide',
    name: 'Roblox Rivals Guide 2026',
    headline: 'Roblox Rivals Guide 2026',
    description:
      'Complete Roblox Rivals guide covering weapons ranked tips movement strategies free skins active codes and pro gameplay tips.',
    url: `${siteUrl}/guide`,
    publisher: {
      '@type': 'Organization',
      name: 'RbxRivals',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/img/logo.png`,
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guide',
        item: `${siteUrl}/guide`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(guideSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {children}
    </>
  );
}