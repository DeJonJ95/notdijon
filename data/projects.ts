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
    title: 'My Workspace: a Notion-style App',
    url: 'https://notionlikeapp.vercel.app',
    description:
      'A personal Notion-style workspace that goes well beyond notes. Infinitely nestable pages with a TipTap block editor and debounced auto-save, plus a built-in budget tracker, voice recording, and AI that extracts structured data from your notes into databases. Rounded out with book look-ups, an auto-generated journal that spins up recurring to-dos, image uploads to Cloudflare R2, an installable PWA, and a companion Chrome extension that clips images from any website into a chosen note for moodboards and other creative work.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Neon Postgres', 'TipTap', 'AI', 'Cloudflare R2', 'PWA'],
    image: '/projects/notion-workspace.png',
  },
  {
    title: 'Democracy in Detroit: Email Campaign',
    url: '/email-samples',
    description:
      'A 7-email voter-engagement series for the 2026 Detroit Primary. Built on a single master template with shared header, footer, button, and hero components; each numbered send is a token-driven remix. Styled with the City of Detroit brand kit (sourced from detroitmi.gov), Montserrat with Helvetica fallback, fully responsive, and drop-in ready for GovDelivery or any ESP. View the gallery to scroll through all seven sends.',
    tech: [
      'HTML Email',
      'Template System',
      'Brand Tokens',
      'GovDelivery',
      'Accessibility',
      'Responsive',
    ],
  },
];
