export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Loosely designed in{' '}
        <a
          href="https://www.figma.com"
          className="font-medium text-slate-400 hover:text-accent transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          Figma
        </a>{' '}
        and coded in{' '}
        <a
          href="https://code.visualstudio.com"
          className="font-medium text-slate-400 hover:text-accent transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          Visual Studio Code
        </a>{' '}
        by yours truly. Built with{' '}
        <a
          href="https://nextjs.org"
          className="font-medium text-slate-400 hover:text-accent transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com"
          className="font-medium text-slate-400 hover:text-accent transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
        , deployed with{' '}
        <a
          href="https://vercel.com"
          className="font-medium text-slate-400 hover:text-accent transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
        . All text is set in the Inter typeface.
      </p>
      <p className="mt-4 flex items-center gap-1.5 text-xs text-slate-600">
        <span aria-hidden="true" className="text-accent">◆</span>
        <span>Built in Detroit.</span>
      </p>
    </footer>
  );
}
