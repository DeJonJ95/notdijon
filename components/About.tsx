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
          I build digital systems that connect complex code with the people who
          rely on it. Over the past nine years, I&apos;ve shipped full-stack web
          apps, architected email and CRM programs, and run the analytics,
          growth, and automation that turn them into results.
        </p>
        <p>
          As the{' '}
          <span className="font-medium text-slate-200">
            Web Developer &amp; Technical Strategist
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
          , I set the technical direction for our digital presence: standards for
          accessibility, security, and performance, plus the cross-departmental
          initiatives that put them into practice. I select and onboard technical
          vendors and make sure staff have the tools they need. One milestone was
          designing an in-house inventory application that manages 23,000+ items
          across 20 distinct locations.
        </p>
        <p>
          I also architected the department&apos;s first GovDelivery email
          program: responsive HTML templates, systematic A/B testing, automated
          communications, and the SOPs that keep it running. On the growth side, I
          run paid ads across Meta and Google, conversion optimization, and
          technical SEO, all measured through GA4 and Google Tag Manager.
        </p>
        <p>
          Through{' '}
          <span className="font-medium text-slate-200">Webdroid</span>
          {' '}and{' '}
          <span className="font-medium text-slate-200">First Hill Marketing</span>,
          I take freelance work end to end: winning B2B clients, then shipping
          modern React/Next.js apps and custom ecommerce, and leaning on AI tools
          like Claude, ChatGPT, and Zapier to move faster. When I step away from
          the editor, my focus shifts to education, designing curriculum and
          leading workshops that give students their first real experience
          building for the web.
        </p>
      </div>
      <Stats />
    </section>
  );
}
