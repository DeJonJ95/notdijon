import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      <SectionHeading id="projects" label="Projects" />
      <ul className="group/list">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
}
