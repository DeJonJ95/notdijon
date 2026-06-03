import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ARTICLES } from '@/data/writing';
import Article from '@/components/Article';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

function getArticle(slug: string) {
  const meta = ARTICLES.find((a) => a.slug === slug);
  if (!meta) return null;
  const file = path.join(process.cwd(), 'content', 'writing', `${slug}.md`);
  let raw: string;
  try {
    raw = fs.readFileSync(file, 'utf8');
  } catch {
    return null;
  }
  // Strip YAML frontmatter; metadata is sourced from data/writing.ts.
  const body = raw.replace(/^---[\s\S]*?\n---\n/, '').trim();
  return { meta, body };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const meta = ARTICLES.find((a) => a.slug === params.slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.summary,
    openGraph: {
      title: meta.title,
      description: meta.summary,
      images: [meta.coverImage],
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const data = getArticle(params.slug);
  if (!data) notFound();
  const { meta, body } = data;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
      <Link
        href="/#writing"
        className="text-sm text-slate-400 transition-colors hover:text-accent"
      >
        ← Back to writing
      </Link>

      <header className="mt-8">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{meta.readingTime}</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          {meta.title}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-400">
          {meta.summary}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tags">
          {meta.tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
            >
              {t}
            </li>
          ))}
        </ul>
      </header>

      <Article markdown={body} />

      <div className="mt-16 border-t border-slate-800 pt-8">
        <Link
          href="/#writing"
          className="text-sm text-slate-400 transition-colors hover:text-accent"
        >
          ← Back to writing
        </Link>
      </div>
    </main>
  );
}
