import SectionHeading from './SectionHeading';
import Currently from './Currently';
import Stats from './Stats';

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
          I&apos;m a CRM and email marketing professional turned digital
          strategist with 4+ years executing campaigns, managing platforms, and
          turning messy operational data into outcomes people actually care
          about.
        </p>
        <p>
          Today, I&apos;m the{' '}
          <span className="font-medium text-slate-200">
            Principal Digital Strategist
          </span>{' '}
          for the{' '}
          <a
            href="https://detroitmi.gov"
            className="font-medium text-slate-200 hover:text-accent transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            City of Detroit
          </a>
          , where I set technical standards for web development, accessibility,
          security, and performance — and run cross-departmental projects from
          vendor selection through staff enablement.
        </p>
        <p>
          Before that I built the city&apos;s first dedicated email marketing
          program from scratch in GovDelivery: responsive HTML templates, A/B
          testing protocols, automated comms for seasonal staff, and the SOPs
          the team still runs on. On the side I ship React/Next.js apps and
          ecommerce builds through{' '}
          <span className="font-medium text-slate-200">Webdroid</span>.
        </p>
        <p>
          When I&apos;m not in a code editor, I&apos;m teaching it — designing
          curriculum and running workshops that get people their first real
          taste of building for the web.
        </p>
      </div>
      <Stats />
    </section>
  );
}
