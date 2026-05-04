import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exclusive Code Generator',
  description: 'Generate unused promo codes for Roblox Rivals.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
