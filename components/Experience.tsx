import SectionHeading from './SectionHeading';
import ExperienceCard from './ExperienceCard';
import { EXPERIENCE } from '@/data/experience';

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-labelledby="experience-heading"
    >
      <SectionHeading id="experience" label="Experience" />
      <ol className="group/list">
        {EXPERIENCE.map((job, i) => (
          <ExperienceCard key={`${job.company}-${i}`} job={job} />
        ))}
      </ol>
      <div className="mt-12">
        <a
          href="/DeJon-Johnson-Resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 group hover:text-accent"
        >
          <span>
            View Full{' '}
            <span className="inline-block">
              Résumé
              <span
                className="ml-1 inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
