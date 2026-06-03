import Nav from './Nav';
import SocialLinks from './SocialLinks';

interface Props {
  activeSection: string;
}

export default function Header({ activeSection }: Props) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">DeJon Johnson</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full-Stack Developer &amp; Digital Strategist
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build web apps and email systems, and drive the growth, analytics,
          and strategy that make them perform.
        </p>
        <Nav activeSection={activeSection} />
      </div>
      <SocialLinks />
    </header>
  );
}
