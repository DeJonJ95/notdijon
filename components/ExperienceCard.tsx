import { FiArrowUpRight } from 'react-icons/fi';
import type { Job } from '@/data/experience';

export default function ExperienceCard({ job }: { job: Job }) {
  return (
    <li className="mb-12">
      <div
        className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4
          lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
      >
        <div
          className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none
            lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50
            lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
            lg:group-hover:drop-shadow-lg"
        />

        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label={job.dates}
        >
          {job.dates}
        </header>

        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <a
              href={job.companyUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-baseline font-medium leading-tight text-slate-200
                hover:text-accent focus-visible:text-accent group/link text-base"
              aria-label={`${job.role} at ${job.company}`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {job.role} ·{' '}
                <span className="inline-block">
                  {job.company}
                  <FiArrowUpRight
                    className="inline-block h-4 w-4 shrink-0 translate-y-px transition-transform
                      group-hover/link:-translate-y-1 group-hover/link:translate-x-1
                      group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1
                      motion-reduce:transition-none ml-0.5"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </a>
          </h3>

          <p className="mt-2 text-sm leading-normal">{job.description}</p>

          {job.tech.length > 0 && (
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {job.tech.map((tag) => (
                <li key={tag} className="mr-1.5 mt-2">
                  <div
                    className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent"
                  >
                    {tag}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}
