import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
const siteUrl = 'https://rbxrivals.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'RbxRivals - Fresh Roblox Rivals Codes Ranked Tips and Weapon Guides',
    template: '%s | RbxRivals',
  },

  description:
    'Need a Roblox Rivals code that works today? Find active Roblox Rivals codes free rewards ranks guns skins maps loadouts and simple guides to improve faster.',

  keywords: [
    'roblox rivals',
    'roblox rivals code',
    'roblox rivals codes',
    'roblox rivals ranks',
    'roblox rivals guns',
    'roblox rivals skins',
    'roblox rivals maps',
    'roblox rivals loadouts',
    'rbx rivals',
  ],

  authors: [{ name: 'RbxRivals' }],
  creator: 'RbxRivals',
  publisher: 'RbxRivals',

  alternates: {
    canonical: '/',
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
    url: siteUrl,
    siteName: 'RbxRivals',
    title: 'RbxRivals - Fresh Roblox Rivals Codes Ranked Tips and Weapon Guides',
    description:
      'Find active Roblox Rivals codes free rewards ranked tips weapon guides skins maps loadouts and simple strategies to improve faster.',
    images: [
      {
        url: '/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'RbxRivals Roblox Rivals codes ranked tips and weapon guides',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'RbxRivals - Fresh Roblox Rivals Codes Ranked Tips and Weapon Guides',
    description:
      'Find active Roblox Rivals codes free rewards ranked tips weapon guides skins maps loadouts and simple strategies to improve faster.',
    images: ['/img/logo.png'],
  },

icons: {
  icon: [
    { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/img/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    { url: '/img/favicons/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
    { url: '/img/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    { url: '/img/favicons/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
    { url: '/img/favicons/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
    { url: '/img/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    { url: '/img/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
  ],
  shortcut: '/img/favicons/favicon.ico',
  apple: [
    { url: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
    { url: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
    { url: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
    { url: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
    { url: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
    { url: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
    { url: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
  ],
  other: [
    {
      rel: 'mask-icon',
      url: '/img/favicons/safari-pinned-tab.svg',
      color: '#00F0FF',
    },
  ],
},

manifest: '/img/favicons/site.webmanifest',

appleWebApp: {
  capable: true,
  title: 'RbxRivals',
  statusBarStyle: 'black-translucent',
},

other: {
  'msapplication-TileColor': '#050505',
  'msapplication-TileImage': '/img/favicons/mstile-144x144.png',
  'msapplication-config': '/img/favicons/browserconfig.xml',
},

  verification: {
    google: 'PASTE_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050505',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RbxRivals',
    url: siteUrl,
    description:
      'RbxRivals is a fan-made Roblox Rivals guide website with codes ranks guns skins maps loadouts and tips.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RbxRivals',
    url: siteUrl,
    logo: `${siteUrl}/img/logo.png`,
    sameAs: [],
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Header />

        <main className="relative">
          {children}
        </main>

        <Footer />
      </body>
     <GoogleAnalytics gaId="G-24XM6DQBPS" />
    </html>
  );
}