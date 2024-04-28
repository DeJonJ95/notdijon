'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import {
  FiArrowRight,
  FiCopy,
  FiExternalLink,
  FiFileText,
  FiMail,
  FiUser,
  FiBriefcase,
  FiFolder,
  FiEdit3,
} from 'react-icons/fi';

interface Cmd {
  id: string;
  label: string;
  group: 'Jump to' | 'Actions' | 'External';
  Icon: React.ComponentType<{ className?: string }>;
  hint?: string;
  run: () => void | Promise<void>;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Cmd[] = useMemo(
    () => [
      {
        id: 'about',
        label: 'About',
        group: 'Jump to',
        Icon: FiUser,
        run: () => jumpTo('about'),
      },
      {
        id: 'experience',
        label: 'Experience',
        group: 'Jump to',
        Icon: FiBriefcase,
        run: () => jumpTo('experience'),
      },
      {
        id: 'projects',
        label: 'Projects',
        group: 'Jump to',
        Icon: FiFolder,
        run: () => jumpTo('projects'),
      },
      {
        id: 'writing',
        label: 'Writing',
        group: 'Jump to',
        Icon: FiEdit3,
        run: () => jumpTo('writing'),
      },
      {
        id: 'copy-email',
        label: 'Copy email address',
        hint: 'dejonj95@gmail.com',
        group: 'Actions',
        Icon: FiCopy,
        run: async () => {
          await navigator.clipboard.writeText('dejonj95@gmail.com');
          setToast('Email copied');
          setTimeout(() => setToast(null), 1600);
        },
      },
      {
        id: 'send-email',
        label: 'Send email',
        group: 'Actions',
        Icon: FiMail,
        run: () => {
          window.location.href = 'mailto:dejonj95@gmail.com';
        },
      },
      {
        id: 'resume',
        label: 'Open résumé (PDF)',
        group: 'Actions',
        Icon: FiFileText,
        run: () => {
          window.open('/DeJon-Johnson-Resume.pdf', '_blank', 'noopener');
        },
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        group: 'External',
        Icon: FiExternalLink,
        run: () => {
          window.open(
            'https://linkedin.com/in/dejon-johnson',
            '_blank',
            'noopener'
          );
        },
      },
      {
        id: 'notion',
        label: 'Notion-like App',
        hint: 'notionlikeapp.vercel.app',
        group: 'External',
        Icon: FiExternalLink,
        run: () => {
          window.open(
            'https://notionlikeapp.vercel.app',
            '_blank',
            'noopener'
          );
        },
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.hint?.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q)
    );
  }, [query, commands]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setIndex(0);
  }, [query]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = filtered[index];
      if (cmd) {
        cmd.run();
        setOpen(false);
      }
    }
  };

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Group filtered commands
  const grouped = useMemo(() => {
    const order: Cmd['group'][] = ['Jump to', 'Actions', 'External'];
    const map = new Map<Cmd['group'], Cmd[]>();
    order.forEach((g) => map.set(g, []));
    filtered.forEach((c) => map.get(c.group)?.push(c));
    return order
      .map((g) => ({ group: g, items: map.get(g) ?? [] }))
      .filter((s) => s.items.length > 0);
  }, [filtered]);

  return (
    <>
      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-accent/30 bg-slate-900/90 px-4 py-2 text-xs font-medium text-accent backdrop-blur"
        >
          {toast}
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[55] flex items-start justify-center p-4 pt-[15vh]"
          onClick={() => setOpen(false)}
          aria-modal="true"
          role="dialog"
          aria-label="Command palette"
        >
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/95 shadow-2xl shadow-black/40 ring-1 ring-slate-100/5"
          >
            <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                ⌘K
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Jump to a section or run an action..."
                className="flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
              />
              <kbd className="hidden rounded border border-slate-700 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 sm:inline-block">
                Esc
              </kbd>
            </div>

            <div className="max-h-[50vh] overflow-y-auto py-2">
              {grouped.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-slate-500">
                  No matches.
                </p>
              )}
              {grouped.map((section) => (
                <div key={section.group} className="py-1">
                  <div className="px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    {section.group}
                  </div>
                  {section.items.map((cmd) => {
                    const overallIndex = filtered.indexOf(cmd);
                    const isActive = overallIndex === index;
                    return (
                      <button
                        key={cmd.id}
                        type="button"
                        onMouseEnter={() => setIndex(overallIndex)}
                        onClick={() => {
                          cmd.run();
                          setOpen(false);
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors
                          ${isActive ? 'bg-accent/10 text-slate-100' : 'text-slate-300'}`}
                      >
                        <cmd.Icon
                          className={`h-4 w-4 shrink-0 ${isActive ? 'text-accent' : 'text-slate-500'}`}
                        />
                        <span className="flex-1 truncate">{cmd.label}</span>
                        {cmd.hint && (
                          <span className="truncate text-xs text-slate-500">
                            {cmd.hint}
                          </span>
                        )}
                        {isActive && (
                          <FiArrowRight className="h-3.5 w-3.5 text-accent" />
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-slate-800 bg-slate-950/40 px-4 py-2 text-[10px] uppercase tracking-widest text-slate-500">
              <span>
                <kbd className="rounded border border-slate-700 px-1">↑↓</kbd>{' '}
                navigate
              </span>
              <span>
                <kbd className="rounded border border-slate-700 px-1">↵</kbd>{' '}
                select
              </span>
              <span>
                <kbd className="rounded border border-slate-700 px-1">esc</kbd>{' '}
                close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
