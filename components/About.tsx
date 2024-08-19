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
          rely on it. Over the past nine years, I&apos;ve shaped technical
          strategy, shipped web apps, and architected email campaigns that
          translate institutional policy into user-friendly technology.
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
          , I define the technical vision for our digital presence. I set strict
          standards for accessibility, security, and performance while managing
          large-scale cross-departmental initiatives. This includes selecting and
          onboarding technical vendors and ensuring our staff has the tools they
          need to succeed. A major milestone in this role was designing an
          in-house inventory application capable of managing 23,000+ items across
          20 distinct locations.
        </p>
        <p>
          Recognizing a gap in our digital outreach, I architected the
          department&apos;s first GovDelivery email marketing program. I
          introduced responsive HTML templates, systematic A/B testing, and
          automated communications for seasonal staff, alongside comprehensive
          SOPs that keep operations running smoothly.
        </p>
        <p>
          Outside of civic tech, I drive freelance projects through{' '}
          <span className="font-medium text-slate-200">Webdroid</span>
          {' '}and{' '}
          <span className="font-medium text-slate-200">First Hill Marketing</span>,
          shipping modern React/Next.js apps and custom ecommerce solutions. When
          I step away from the code editor, my focus shifts to education,
          designing curriculum and leading workshops that give students their
          first real experience building for the web.
        </p>
      </div>
      <Stats />
    </section>
  );
}
