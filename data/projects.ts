export interface Project {
  title: string;
  url: string;
  description: string;
  tech: string[];
  /** Optional thumbnail (path under /public). */
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Shumake Studios',
    url: 'https://shumake-studios.vercel.app',
    description:
      'Client site for a Detroit creative direction, photography, and brand studio, built from a mockup she signed off on into a site she runs herself. Every word, price, and photograph is editable in Sanity, with click-to-edit straight from the page and published changes streaming in without a rebuild. Work, services, and booking are driven by the same content, and the booking flow composes a detailed brief for her inbox without a backend.',
    tech: ['Next.js', 'TypeScript', 'Sanity CMS', 'Vercel', 'Client Work'],
  },
  {
    title: 'rent free haus',
    url: 'https://rentfreehaus.com',
    description:
      'The website for a listening bar in Detroit, built to turn a first visit into a reservation, a night out, or a membership waitlist signup. The owners edit every page, menu, and event themselves in a standalone Sanity Studio with live draft previews. A scheduled job pulls bookings from Google Calendar into the events list and publishes a subscribable calendar feed, all set in oversized type on a hard grid.',
    tech: ['Next.js', 'TypeScript', 'Sanity CMS', 'Vercel Cron', 'Mailchimp', 'Vitest'],
    image: '/projects/rentfreehaus.jpg',
  },
  {
    title: 'Sip + Sounds',
    url: 'https://sipsounds.com',
    description:
      'Home for a DJ series filmed at rent free haus in Detroit. Each session gets its own page with the full set on YouTube and a tracklist stored as structured data, synced to the player so tapping a track jumps to that moment. Artist pages, an RSS feed, generated share cards, a newsletter signup, and a one-switch holding mode for launch are all driven from a single entry per session.',
    tech: ['Next.js', 'TypeScript', 'YouTube IFrame API', 'Klaviyo', 'Resend', 'Tailwind CSS'],
    image: '/projects/sipsounds.jpg',
  },
  {
    title: 'My Workspace: a Notion-style App',
    url: 'https://notionlikeapp.vercel.app',
    description:
      'A personal Notion-style workspace that goes well beyond notes. Infinitely nestable pages with a TipTap block editor and debounced auto-save, plus a built-in budget tracker, voice recording, and AI that extracts structured data from your notes into databases. Rounded out with book look-ups, an auto-generated journal that spins up recurring to-dos, image uploads to Cloudflare R2, an installable PWA, and a companion Chrome extension that clips images from any website into a chosen note for moodboards and other creative work.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Neon Postgres', 'TipTap', 'AI', 'Cloudflare R2', 'PWA'],
    image: '/projects/notion-workspace.png',
  },
  {
    title: 'Inventory Management Platform',
    url: '#',
    description:
      'An internal asset platform that tracks 23,000+ items across 20 locations. QR-coded check-in and check-out, role-based access for staff and admins, label and tag printing, and on-demand PDF and CSV reporting, backed by Firebase Cloud Functions. Replaced a fragmented manual process and now serves as the system of record for departmental assets.',
    tech: [
      'Next.js',
      'Firebase',
      'Cloud Functions',
      'QR Scanning',
      'jsPDF',
      'Tailwind CSS',
    ],
  },
];
