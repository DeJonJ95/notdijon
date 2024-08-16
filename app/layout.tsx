import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SpotlightCursor from '@/components/SpotlightCursor';
import CommandPalette from '@/components/CommandPalette';
import SmoothScroll from '@/components/SmoothScroll';
import Intro from '@/components/Intro';
import AmbientAudio from '@/components/AmbientAudio';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://notdijon.com'),
  title: {
    default: 'DeJon Johnson — Web Developer & Technical Strategist',
    template: '%s · DeJon Johnson',
  },
  description:
    'DeJon Johnson is a web developer, email architect, and technical strategist for the City of Detroit, building accessible, data-driven systems for the public sector.',
  keywords: [
    'DeJon Johnson',
    'Web Development',
    'Technical Strategy',
    'Email Development',
    'React',
    'Next.js',
    'GovDelivery',
    'Detroit',
    'Accessibility',
    'CRM',
  ],
  authors: [{ name: 'DeJon Johnson' }],
  creator: 'DeJon Johnson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://notdijon.com',
    siteName: 'notdijon — DeJon Johnson',
    title: 'DeJon Johnson — Web Developer & Technical Strategist',
    description:
      'Web development, email systems, and technical strategy for the public sector. Built in Detroit.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeJon Johnson — Web Developer & Technical Strategist',
    description:
      'Web development, email systems, and technical strategy. Built in Detroit.',
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
        <SmoothScroll />
        <Intro />
        <AmbientAudio />
        <SpotlightCursor />
        <CommandPalette />
        <div id="page-content">{children}</div>
      </body>
    </html>
  );
}
