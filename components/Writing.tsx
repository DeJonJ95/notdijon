import SectionHeading from './SectionHeading';

export default function Writing() {
  return (
    <section
      id="writing"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-labelledby="writing-heading"
    >
      <SectionHeading id="writing" label="Writing" />
      <div className="rounded-md border border-slate-800/80 bg-slate-800/20 p-8 text-sm leading-relaxed text-slate-400">
        <p className="text-slate-300 font-medium mb-2">Coming soon.</p>
        <p>
          I&apos;m putting together a few pieces on technical strategy in the
          public sector, building accessible web and email systems, and the
          unglamorous parts of shipping software for government. Check back shortly.
        </p>
      </div>
    </section>
  );
}
