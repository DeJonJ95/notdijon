export default function Currently() {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="uppercase tracking-widest">Currently</span>
      <span className="text-slate-300 normal-case tracking-normal">
        leading digital strategy for the City of Detroit
      </span>
    </div>
  );
}
