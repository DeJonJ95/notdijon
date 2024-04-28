import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SpotlightCursor from '@/components/SpotlightCursor';
import CommandPalette from '@/components/CommandPalette';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://notdijon.com'),
  title: {
    default: 'DeJon Johnson — Principal Digital Strategist',
    template: '%s · DeJon Johnson',
  },
  description:
    'DeJon Johnson is the Principal Digital Strategist for the City of Detroit, building accessible, data-driven web and email systems for the public sector.',
  keywords: [
    'DeJon Johnson',
    'Digital Strategy',
    'CRM',
    'Email Development',
    'GovDelivery',
    'Next.js',
    'Detroit',
    'Accessibility',
  ],
  authors: [{ name: 'DeJon Johnson' }],
  creator: 'DeJon Johnson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://notdijon.com',
    siteName: 'notdijon — DeJon Johnson',
    title: 'DeJon Johnson — Principal Digital Strategist',
    description:
      'Accessible, data-driven web and email systems for the public sector. Built in Detroit.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'DeJon Johnson — notdijon.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeJon Johnson — Principal Digital Strategist',
    description:
      'Accessible, data-driven web and email systems. Built in Detroit.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans leading-relaxed antialiased selection:bg-accent/25 selection:text-slate-200">
        <a
          href="#content"
          className="absolute left-0 top-0 -translate-y-full rounded bg-accent px-4 py-2 text-sm font-semibold text-slate-900 focus:translate-y-0"
        >
          Skip to content
        </a>
        <SpotlightCursor />
        <CommandPalette />
        {children}
      </body>
    </html>
  );
}
