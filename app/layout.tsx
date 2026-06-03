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
    default: 'DeJon Johnson · Full-Stack Developer & Digital Strategist',
    template: '%s · DeJon Johnson',
  },
  description:
    'DeJon Johnson is a full-stack developer and digital strategist. He builds web apps, email and CRM systems, and runs the analytics, growth, and automation that make them perform.',
  keywords: [
    'DeJon Johnson',
    'Full-Stack Developer',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'Digital Strategy',
    'Email Marketing',
    'CRM',
    'Paid Media',
    'SEO',
    'Conversion Optimization',
    'Analytics',
    'Program Management',
    'Detroit',
  ],
  authors: [{ name: 'DeJon Johnson' }],
  creator: 'DeJon Johnson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://notdijon.com',
    siteName: 'notdijon · DeJon Johnson',
    title: 'DeJon Johnson · Full-Stack Developer & Digital Strategist',
    description:
      'Full-stack development, email and CRM systems, growth, and digital strategy. Built in Detroit.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeJon Johnson · Full-Stack Developer & Digital Strategist',
    description:
      'Full-stack development, email and CRM, growth, and digital strategy. Built in Detroit.',
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
