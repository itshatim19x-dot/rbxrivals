import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { blogPosts } from '@/lib/data';

const siteUrl = 'https://rbxrivals.com';

export const metadata: Metadata = {
  title: 'Roblox Rivals Blog Guides Codes Ranks and Weapon Tips | RbxRivals',

  description:
    'Read Roblox Rivals guides for fresh codes ranked tips weapon loadouts guns skins maps and simple strategies to help you win more matches.',

  keywords: [
    'roblox rivals blog',
    'roblox rivals guides',
    'roblox rivals codes',
    'roblox rivals code',
    'roblox rivals ranks',
    'roblox rivals guns',
    'roblox rivals weapons',
    'roblox rivals skins',
    'roblox rivals maps',
    'roblox rivals tips',
    'roblox rivals loadouts',
    'rbx rivals blog',
  ],

  alternates: {
    canonical: '/blog',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/blog`,
    siteName: 'RbxRivals',
    title: 'Roblox Rivals Blog Guides Codes Ranks and Weapon Tips | RbxRivals',
    description:
      'Explore Roblox Rivals guides for codes ranks guns skins maps loadouts and simple tips to improve faster.',
    images: [
      {
        url: '/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'RbxRivals Roblox Rivals blog guides codes ranks and weapon tips',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Roblox Rivals Blog Guides Codes Ranks and Weapon Tips | RbxRivals',
    description:
      'Read Roblox Rivals guides for codes ranks guns skins maps loadouts and winning tips.',
    images: ['/img/logo.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  const blogCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Roblox Rivals Blog',
    headline: 'Roblox Rivals Blog Guides Codes Ranks and Weapon Tips',
    description:
      'A Roblox Rivals blog with guides about codes ranks guns weapons skins maps loadouts and gameplay tips.',
    url: `${siteUrl}/blog`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'RbxRivals',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'RbxRivals',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/img/logo.png`,
      },
    },
  };

  const blogItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Roblox Rivals Blog Articles',
    description:
      'Latest Roblox Rivals articles about codes ranks guns skins maps and strategy guides.',
    itemListElement: blogPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteUrl}/blog/${post.slug}`,
      name: post.title,
    })),
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
        name: 'Blog',
        item: `${siteUrl}/blog`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogCollectionSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogItemListSchema),
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