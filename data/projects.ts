export interface Project {
  title: string;
  url: string;
  /** Rendered one paragraph per entry; the first is the lead line. */
  description: string[];
  tech: string[];
  /** Optional thumbnail (path under /public). */
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Shumake Studios',
    url: 'https://shumake-studios.vercel.app',
    description: [
      'A portfolio and booking site for a Detroit photographer and creative director.',
      'I built it from an approved mockup and set up Sanity so she can update the work, services, pricing, and photography herself. Changes appear on the site as soon as they’re published, and the booking form turns a few simple selections into a detailed project inquiry.',
    ],
    tech: ['Next.js', 'TypeScript', 'Sanity CMS', 'Vercel', 'Client Work'],
    image: '/projects/shumake-studios.jpg',
  },
  {
    title: 'rent free haus',
    url: 'https://rentfreehaus.com',
    description: [
      'Website for a small listening bar in Detroit.',
      'The site handles the practical side of the room—menus, events, reservations, and the membership waitlist—without losing the personality of the space. The owners manage everything through Sanity, while events are pulled in from Google Calendar and published automatically to the site and calendar feed.',
      'The visual system is simple: big type, a rigid grid, and very little getting in the way.',
    ],
    tech: ['Next.js', 'TypeScript', 'Sanity CMS', 'Vercel Cron', 'Mailchimp', 'Vitest'],
    image: '/projects/rentfreehaus.jpg',
  },
  {
    title: 'Sip + Sounds',
    url: 'https://sipsounds.com',
    description: [
      'A home for the live DJ sets recorded at rent free haus.',
      'Every session has its own page with the full video and tracklist. The tracklist follows the set as it plays, and selecting a song jumps straight to that moment in the mix.',
      'Artist pages, newsletters, share images, and the rest of the archive all start from the same session entry, which keeps publishing a new set pretty painless.',
    ],
    tech: ['Next.js', 'TypeScript', 'YouTube IFrame API', 'Klaviyo', 'Resend', 'Tailwind CSS'],
    image: '/projects/sipsounds.jpg',
  },
  {
    title: 'My Workspace',
    url: 'https://notionlikeapp.vercel.app',
    description: [
      'A personal workspace I kept adding to until it became its own app.',
      'It started with nested pages and a block editor, then grew into the place I keep budgets, recordings, journals, recurring tasks, and whatever else I don’t want scattered across five different apps.',
      'There’s also an AI layer for pulling structured information out of notes, a Chrome extension for saving images from around the web, and a PWA so the whole thing feels closer to a desktop tool than a side project.',
    ],
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Neon Postgres', 'TipTap', 'AI', 'Cloudflare R2', 'PWA'],
    image: '/projects/notion-workspace.png',
  },
  {
    title: 'Inventory Management Platform',
    url: '#',
    description: [
      'An internal system for keeping track of more than 23,000 assets spread across 20 locations.',
      'Staff can scan items in and out with QR codes, print labels, manage inventory by role, and export reports when they need them.',
      'It replaced a process that had been split across different files and manual workflows, and now gives the department one place to see what it owns and where it is.',
    ],
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
