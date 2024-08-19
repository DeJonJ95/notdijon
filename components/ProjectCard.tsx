import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
        <div
          className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none
            lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50
            lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
            lg:group-hover:drop-shadow-lg"
        />

        <div
          className="z-10 sm:order-2 sm:col-span-6"
        >
          <h3>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-baseline font-medium leading-tight text-slate-200
                hover:text-accent focus-visible:text-accent group/link text-base"
              aria-label={project.title}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {project.title}
                <FiArrowUpRight
                  className="inline-block h-4 w-4 shrink-0 translate-y-px transition-transform
                    group-hover/link:-translate-y-1 group-hover/link:translate-x-1
                    motion-reduce:transition-none ml-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </h3>

          <p className="mt-2 text-sm leading-normal">{project.description}</p>

          {project.tech.length > 0 && (
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {project.tech.map((tag) => (
                <li key={tag} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    {tag}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              width={400}
              height={225}
              className="aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30"
            />
          ) : (
            <div className="aspect-video rounded border-2 border-slate-200/10 bg-slate-800/40 transition group-hover:border-slate-200/30" />
          )}
        </div>
      </div>
    </li>
  );
}
