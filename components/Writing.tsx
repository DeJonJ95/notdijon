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
          I&apos;m putting together a few pieces on building email programs in
          the public sector, accessibility-first vendor reviews, and the
          unglamorous parts of digital strategy. Check back shortly.
        </p>
      </div>
    </section>
  );
}
