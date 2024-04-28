export interface Project {
  title: string;
  url: string;
  description: string;
  tech: string[];
}

export const PROJECTS: Project[] = [
  {
    title: 'Notion-like App',
    url: 'https://notionlikeapp.vercel.app',
    description:
      'A block-based document editor inspired by Notion. Supports rich text, drag-and-drop blocks, image uploads with WeakMap-backed storage, multi-image batching, and a shared editor surface that keeps DOM-measured block heights honest during inserts.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
];
