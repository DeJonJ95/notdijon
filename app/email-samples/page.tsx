import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FiArrowLeft,
  FiCode,
  FiExternalLink,
  FiFileText,
  FiLayers,
} from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Democracy in Detroit: Email Campaign',
  description:
    'A 7-email voter-engagement campaign for the 2026 Detroit Primary, built natively for GovDelivery (Advanced Bulletin). Modular Layout plus 7 Custom Templates, styled with the City of Detroit brand kit.',
};

interface BodyEmail {
  number: number;
  label: string;
  subject: string;
  goal: string;
}

interface LayoutPiece {
  file: string;
  label: string;
  field: string;
  description: string;
}

const LAYOUTS: LayoutPiece[] = [
  {
    file: 'LAYOUT_1_header_style_and_tags.html',
    label: 'Header Style and Tags',
    field: 'Layout · "Header Style and Tags"',
    description:
      'Mobile rules, dark-mode tuning, and the Montserrat font load. The only place GovDelivery preserves a `<style>` block, so all CSS lives here. Inline styles on every element carry the core look if any of this gets stripped.',
  },
  {
    file: 'LAYOUT_2_container_setup.html',
    label: 'Container Setup',
    field: 'Layout · "Container Setup"',
    description:
      'The shared shell: canvas, gold accent rule, teal header bar, nonpartisan disclaimer strip, and the slim footer. Marks the slot where each Template body renders. Deliberately omits unsubscribe / mailing address (GovDelivery appends those automatically).',
  },
];

const BODIES: BodyEmail[] = [
  {
    number: 1,
    label: 'Your Voice',
    subject: 'A new conversation about Detroit',
    goal: 'Open the door. Collect a short audience survey to inform later sends.',
  },
  {
    number: 2,
    label: 'Issues',
    subject: 'The issues that matter, straight from neighbors',
    goal: 'Surface resident-voiced priorities. CTA: confirm voter registration.',
  },
  {
    number: 3,
    label: 'Preparing for the Polls',
    subject: '3 ways to get ready to vote',
    goal: 'Walk through sample ballot, polling location lookup, and ID needs.',
  },
  {
    number: 4,
    label: 'Early Voting Launch',
    subject: 'Early voting is open',
    goal: 'Announce the early voting window with a 4-item checklist and locator.',
  },
  {
    number: 5,
    label: 'Final Call',
    subject: 'Final countdown, and a fact-check',
    goal: 'Drive last-mile turnout. Fact-check callout addresses misinformation.',
  },
  {
    number: 6,
    label: 'Election Day',
    subject: 'Today is the day',
    goal: 'Day-of logistics: hours, what to bring, polling location.',
  },
  {
    number: 7,
    label: 'Thank You',
    subject: 'Thank you, Detroit',
    goal: 'Close the loop. Results timeline, next steps, gratitude.',
  },
];

export default function EmailSamplesPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-accent"
      >
        <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to portfolio
      </Link>

      <header className="mt-10 max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
          <span className="text-[10px]">◆</span>
          <span className="uppercase tracking-widest">Email Campaign</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          Democracy in Detroit
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          A 7-email voter-engagement series for the 2026 Detroit Primary,
          built natively for GovDelivery (Advanced Bulletin) on the{' '}
          <span className="text-slate-300">MIDETROIT</span> account. Two layout
          pieces hold the shared shell and CSS; seven Custom Template bodies
          render inside it. Styled with the City of Detroit brand kit and
          token-driven so non-engineers can edit copy without touching markup.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs">
          {[
            'GovDelivery',
            'HTML Email',
            'Brand System',
            'Template Tokens',
            'Dark Mode',
            'Accessibility',
            'Responsive',
          ].map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-accent/10 px-3 py-1 font-medium text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      {/* Shared layout pieces */}
      <section className="mt-14">
        <div className="mb-5 flex items-center gap-3">
          <FiLayers className="h-4 w-4 text-accent" />
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-300">
            Shared Layout
          </h2>
          <span className="text-xs text-slate-500">Built once, reused 7×</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {LAYOUTS.map((piece) => (
            <article
              key={piece.file}
              className="group flex flex-col rounded-lg border border-slate-800/80 bg-slate-900/40 p-5 transition-colors hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    {piece.field}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-200">
                    {piece.label}
                  </h3>
                </div>
                <FiCode className="h-4 w-4 shrink-0 text-slate-500" />
              </div>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-400">
                {piece.description}
              </p>
              <a
                href={`/email-samples/${piece.file}`}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300 transition-colors hover:text-accent"
              >
                View source
                <FiExternalLink className="h-3 w-3" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* 7 email bodies */}
      <section className="mt-14">
        <div className="mb-5 flex items-center gap-3">
          <FiFileText className="h-4 w-4 text-accent" />
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-300">
            Seven Sends
          </h2>
          <span className="text-xs text-slate-500">
            Phase 1 audience priming → Phase 4 thank-you
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BODIES.map((email) => (
            <article
              key={email.number}
              className="group flex flex-col overflow-hidden rounded-lg border border-slate-800/80 bg-slate-900/40 transition-colors hover:border-accent/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f2f2f2]">
                <iframe
                  src={`/email-samples/preview_email_${email.number}.html`}
                  title={`Preview: ${email.label}`}
                  className="pointer-events-none absolute left-0 top-0 origin-top-left"
                  style={{
                    width: '250%',
                    height: '250%',
                    transform: 'scale(0.4)',
                    border: 0,
                  }}
                  loading="lazy"
                />
                <div className="absolute left-3 top-3 flex h-7 min-w-[28px] items-center justify-center rounded-full bg-slate-950/80 px-2 text-xs font-bold text-accent backdrop-blur">
                  {email.number}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Subject
                </div>
                <h3 className="mt-1 text-sm font-semibold text-slate-200">
                  {email.subject}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-400">
                  {email.goal}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-widest">
                  <a
                    href={`/email-samples/preview_email_${email.number}.html`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-accent"
                  >
                    Preview
                    <FiExternalLink className="h-3 w-3" />
                  </a>
                  <span className="text-slate-700">·</span>
                  <a
                    href={`/email-samples/body_email_${email.number}.html`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-accent"
                  >
                    Body source
                    <FiCode className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-16 max-w-2xl text-xs leading-relaxed text-slate-500">
        <p className="font-semibold uppercase tracking-widest text-slate-400">
          Notes
        </p>
        <p className="mt-2">
          Brand tokens come from{' '}
          <span className="text-slate-300">detroitmi.gov</span>. Detroit
          primary teal <code className="text-accent">#004445</code>, gold
          accent <code className="text-accent">#feb70d</code>, mint{' '}
          <code className="text-accent">#9fd5b3</code>, and Montserrat as the
          citywide typeface with Helvetica / Arial fallback. Dark-mode rules
          live in the Header Style block; inline styles on every element
          carry the core look if CSS gets stripped.
        </p>
        <p className="mt-3">
          GovDelivery&apos;s account footer (unsubscribe link, mailing
          address, view-in-browser) is appended automatically per send, so
          the layout intentionally omits those to avoid duplicates.
        </p>
        <p className="mt-3">
          Previews here merge Layout 1 + Layout 2 + each body so visitors see
          the email at full fidelity. The body-source links show the raw
          fragment exactly as it gets pasted into each Custom Template.
        </p>
      </footer>
    </div>
  );
}
