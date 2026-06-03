'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 9, label: 'Years building for the web' },
  { value: 4, label: 'Years in email & growth marketing' },
];

function useCountUp(target: number, run: boolean, duration = 1100) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function StatCell({ stat, run }: { stat: Stat; run: boolean }) {
  const v = useCountUp(stat.value, run);
  return (
    <div className="rounded-md border border-slate-800/80 bg-slate-900/40 p-4 transition-colors hover:border-accent/40">
      <div className="font-serif text-4xl font-semibold text-slate-100 tabular-nums leading-none">
        {v}
        {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
      </div>
      <div className="mt-2 font-serif text-sm italic leading-snug text-slate-400">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-8 grid grid-cols-2 gap-3"
      aria-label="Career stats"
    >
      {STATS.map((stat) => (
        <StatCell key={stat.label} stat={stat} run={run} />
      ))}
    </div>
  );
}
