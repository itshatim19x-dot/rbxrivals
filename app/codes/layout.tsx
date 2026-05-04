import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const siteUrl = 'https://rbxrivals.com';

export const metadata: Metadata = {
  title: 'Roblox Rivals Codes Today for Free Keys & Skins | RbxRivals',

  description:
    'Find fresh Roblox Rivals codes for free keys wraps and rewards. Copy working codes, see expired codes, and learn how to redeem every code fast.',

  keywords: [
    'roblox rivals codes',
    'roblox rivals code',
    'roblox rivals codes today',
    'roblox rivals active codes',
    'roblox rivals working codes',
    'roblox rivals free keys',
    'roblox rivals redeem codes',
    'roblox rivals promo codes',
    'roblox rivals gift codes',
    'roblox rivals expired codes',
    'rbx rivals codes',
  ],

  alternates: {
    canonical: '/codes',
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
    url: `${siteUrl}/codes`,
    siteName: 'RbxRivals',
    title: 'Roblox Rivals Codes Today for Free Keys & Skins | RbxRivals',
    description:
      'Get fresh Roblox Rivals codes for free keys wraps rewards and promo items. Check active codes expired codes and redeem steps.',
    images: [
      {
        url: '/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'Roblox Rivals codes today for free keys and rewards',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Roblox Rivals Codes Today for Free Keys | RbxRivals',
    description:
      'Find fresh Roblox Rivals codes for free keys wraps rewards and learn how to redeem every code fast.',
    images: ['/img/logo.png'],
  },
};

export default function CodesLayout({
  children,
}: {
  children: ReactNode;
}) {
  const codesPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Roblox Rivals Codes Today',
    headline: 'Roblox Rivals Codes Today for Free Keys',
    description:
      'Fresh Roblox Rivals codes page with active codes, expired codes, rewards, and redeem instructions for players.',
    url: `${siteUrl}/codes`,
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
    mainEntity: {
      '@type': 'ItemList',
      name: 'Roblox Rivals Codes',
      description:
        'A list of Roblox Rivals codes for free keys, wraps, rewards, and promo items.',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
    },
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Redeem Roblox Rivals Codes',
    description:
      'Step by step guide to redeem Roblox Rivals codes and claim free keys, wraps, and rewards.',
    totalTime: 'PT2M',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Copy the code',
        text: 'Choose a working Roblox Rivals code from the active codes list and copy it exactly.',
      },
      {
        '@type': 'HowToStep',
        name: 'Open Roblox Rivals',
        text: 'Launch Roblox Rivals on Roblox and wait for the game menu to load.',
      },
      {
        '@type': 'HowToStep',
        name: 'Open the redeem area',
        text: 'Find the code redemption area inside the shop, rewards, or settings menu.',
      },
      {
        '@type': 'HowToStep',
        name: 'Paste and claim',
        text: 'Paste the Roblox Rivals code, press redeem, and claim the free reward if the code is active.',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are Roblox Rivals codes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Roblox Rivals codes are promo codes that can give players free keys, wraps, rewards, and other bonus items when they are active.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is my Roblox Rivals code not working?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Roblox Rivals code may not work if it is expired, already redeemed, typed incorrectly, or not available for your account yet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do Roblox Rivals codes expire?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Roblox Rivals codes can expire, so players should redeem working codes as soon as possible.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where can I find new Roblox Rivals codes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can check the RbxRivals codes page for fresh Roblox Rivals codes, expired codes, and redeem instructions.',
        },
      },
    ],
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
        name: 'Codes',
        item: `${siteUrl}/codes`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(codesPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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