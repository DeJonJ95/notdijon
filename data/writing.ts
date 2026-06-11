export interface Article {
  slug: string;
  title: string;
  summary: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  readingTime: string;
  tags: string[];
  coverImage: string;
  status: 'published' | 'draft';
}

export const ARTICLES: Article[] = [
  {
    slug: 'turn-notes-into-database-rows',
    title: 'Turning Messy Notes into Structured Database Rows with AI',
    summary:
      'How the "Extract from notes" feature reads your meeting notes, proposes database changes, and only writes what you approve.',
    date: '2026-06-04',
    readingTime: '11 min read',
    tags: ['AI', 'Next.js', 'Prisma', 'Product'],
    coverImage: '/writing/turn-notes-into-database-rows/00-cover.png',
    status: 'draft',
  },
];
