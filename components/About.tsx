import SectionHeading from './SectionHeading';
import Currently from './Currently';

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <SectionHeading id="about" label="About" />
      <Currently />
      <div className="space-y-4">
        <p>
          I build websites, internal tools, and digital systems for teams that
          need them to work well in the real world.
        </p>
        <p>
          Over the past nine years, my work has moved between development, email,
          analytics, automation, and digital strategy. I like being close to the
          code, but I also care about what happens after something ships: who has
          to use it, who has to maintain it, and whether it actually makes the
          work easier.
        </p>
        <p>
          At the{' '}
          <a
            href="https://detroitmi.gov"
            className="font-medium text-slate-200 hover:text-accent transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            City of Detroit
          </a>
          , I work across web development and technical strategy. I help shape how
          our digital tools are built and maintained, from accessibility and
          performance standards to vendor selection and internal systems. One of
          those projects is an inventory application that now tracks more than
          23,000 items across 20 locations.
        </p>
        <p>
          I also built the department&apos;s GovDelivery email program, including
          responsive templates, testing, automated communications, and the
          documentation staff use to keep it running. My work also covers paid
          campaigns, technical SEO, GA4, Google Tag Manager, and conversion
          tracking.
        </p>
        <p>
          Outside of the city, I build for clients through{' '}
          <span className="font-medium text-slate-200">Webdroid</span> and{' '}
          <span className="font-medium text-slate-200">First Hill Marketing</span>
          . That work usually means taking a project from an early conversation
          through design, development, launch, and whatever comes next. Most of it
          lives in React, Next.js, ecommerce, and the growing set of AI and
          automation tools that make repetitive work easier.
        </p>
        <p>
          I also teach web development. I&apos;ve designed curriculum, led
          workshops, and helped students get comfortable building something real
          for the first time.
        </p>
      </div>
    </section>
  );
}
