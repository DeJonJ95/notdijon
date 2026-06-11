import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { ARTICLES } from '@/data/writing';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function Writing() {
  return (
    <section
      id="writing"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-labelledby="writing-heading"
    >
      <SectionHeading id="writing" label="Writing" />
      <ul className="space-y-4">
        {ARTICLES.filter((a) => a.status === 'published').map((a) => (
          <li key={a.slug}>
            <Link
              href={`/writing/${a.slug}`}
              className="group block rounded-md border border-slate-800/80 bg-slate-800/20 p-5 transition-colors hover:border-slate-700 hover:bg-slate-800/40"
            >
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <time dateTime={a.date}>{formatDate(a.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{a.readingTime}</span>
              </div>
              <h3 className="mt-2 font-medium leading-snug text-slate-200 transition-colors group-hover:text-accent">
                {a.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                {a.summary}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
                {a.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
