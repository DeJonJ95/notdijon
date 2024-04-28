interface Props {
  activeSection: string;
}

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

export default function Nav({ activeSection }: Props) {
  return (
    <nav
      className="nav hidden lg:block lg:mt-16"
      aria-label="In-page jump links"
    >
      <ul className="w-max">
        {LINKS.map(({ id, label }) => {
          const active = activeSection === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-center py-3"
              >
                <span
                  className={`nav-indicator mr-4 h-px transition-all
                    ${active
                      ? 'w-16 bg-slate-200'
                      : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                    }`}
                />
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors
                    ${active
                      ? 'text-slate-200'
                      : 'text-slate-500 group-hover:text-slate-200'
                    }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="mt-10 flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-600">
        <kbd className="rounded border border-slate-700 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
          ⌘
        </kbd>
        <kbd className="rounded border border-slate-700 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
          K
        </kbd>
        <span>Command palette</span>
      </p>
    </nav>
  );
}
