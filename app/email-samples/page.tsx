import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Democracy in Detroit: Email Campaign',
  description:
    'A 7-email voter-engagement campaign for the 2026 Detroit Primary. Built with the City of Detroit brand kit, send-ready in any ESP.',
};

interface Email {
  file: string;
  number: number | 'M';
  label: string;
  subject: string;
  goal: string;
}

const EMAILS: Email[] = [
  {
    file: '00_MASTER_TEMPLATE.html',
    number: 'M',
    label: 'Master Template',
    subject: 'Shared shell: header, footer, button, hero block',
    goal: 'Canonical reference. Every numbered email is a thin remix of this.',
  },
  {
    file: 'email_1_your_voice.html',
    number: 1,
    label: 'Your Voice',
    subject: 'A new conversation about Detroit',
    goal: 'Open the door. Collect a short audience survey to inform later sends.',
  },
  {
    file: 'email_2_issues.html',
    number: 2,
    label: 'Issues',
    subject: 'The issues that matter, straight from neighbors',
    goal: 'Surface resident-voiced priorities. CTA: confirm voter registration.',
  },
  {
    file: 'email_3_preparing_polls.html',
    number: 3,
    label: 'Preparing for the Polls',
    subject: '3 ways to get ready to vote',
    goal: 'Walk through sample ballot, polling location lookup, and ID needs.',
  },
  {
    file: 'email_4_early_voting_launch.html',
    number: 4,
    label: 'Early Voting Launch',
    subject: 'Early voting is open',
    goal: 'Announce the early voting window with a 4-item checklist + locator.',
  },
  {
    file: 'email_5_final_call.html',
    number: 5,
    label: 'Final Call',
    subject: 'Final countdown, and a fact-check',
    goal: 'Drive last-mile turnout. Fact-check callout addresses misinformation.',
  },
  {
    file: 'email_6_election_day.html',
    number: 6,
    label: 'Election Day',
    subject: 'Today is the day',
    goal: 'Day-of logistics: hours, what to bring, polling location.',
  },
  {
    file: 'email_7_thank_you.html',
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
          A 7-email voter-engagement series for the 2026 Detroit Primary
          Election. Each template is a single self-contained HTML file, styled
          with the City of Detroit brand kit, drop-in ready for GovDelivery or
          any ESP. Token-driven so non-engineers can edit copy without touching
          markup.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs">
          {[
            'HTML Email',
            'Brand System',
            'Template Tokens',
            'GovDelivery',
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

      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EMAILS.map((email) => (
          <article
            key={email.file}
            className="group flex flex-col overflow-hidden rounded-lg border border-slate-800/80 bg-slate-900/40 transition-colors hover:border-accent/40"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
              <iframe
                src={`/email-samples/${email.file}`}
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
              <a
                href={`/email-samples/${email.file}`}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300 transition-colors hover:text-accent"
              >
                Open full preview
                <FiExternalLink className="h-3 w-3" />
              </a>
            </div>
          </article>
        ))}
      </section>

      <footer className="mt-16 max-w-2xl text-xs leading-relaxed text-slate-500">
        <p className="font-semibold uppercase tracking-widest text-slate-400">
          Notes
        </p>
        <p className="mt-2">
          Brand tokens are sourced from{' '}
          <span className="text-slate-300">detroitmi.gov</span>. Detroit
          primary teal <code className="text-accent">#004445</code>, gold accent{' '}
          <code className="text-accent">#feb70d</code>, Montserrat as the
          citywide typeface with Helvetica/Arial fallback. Hero images, UTM
          parameters, and unsubscribe blocks are wired through standard ESP
          merge tags.
        </p>
        <p className="mt-3">
          Previews are scaled iframes; click any card to see the email at full
          fidelity in a new tab.
        </p>
      </footer>
    </div>
  );
}
