'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function PageTransition() {
  const [done, setDone] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Respect reduced-motion preference: skip the animation entirely.
    const prefersReduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduce) {
      setDone(true);
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
      onComplete: () => setDone(true),
    });

    tl.set([topRef.current, bottomRef.current], { yPercent: 0 })
      .set([logoRef.current, labelRef.current], { opacity: 0, y: 8 })
      .set(lineRef.current, { scaleX: 0, transformOrigin: 'left center' })
      // logo flash in
      .to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      })
      // accent line draws in
      .to(
        lineRef.current,
        { scaleX: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.25'
      )
      // label fades in
      .to(
        labelRef.current,
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
        '-=0.4'
      )
      // hold a beat
      .to({}, { duration: 0.35 })
      // fade the inner mark before curtains split
      .to([logoRef.current, lineRef.current, labelRef.current], {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      })
      // curtains split
      .to(topRef.current, { yPercent: -101, duration: 1.0 }, '-=0.1')
      .to(bottomRef.current, { yPercent: 101, duration: 1.0 }, '<');

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100]"
      aria-hidden="true"
    >
      <div
        ref={topRef}
        className="absolute inset-x-0 top-0 h-1/2 bg-slate-950"
      />
      <div
        ref={bottomRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-slate-950"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <span
            ref={logoRef}
            className="text-5xl leading-none text-accent"
            style={{ willChange: 'transform, opacity' }}
          >
            ◆
          </span>
          <div
            ref={lineRef}
            className="h-px w-24 bg-accent/60"
            style={{ willChange: 'transform' }}
          />
          <span
            ref={labelRef}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400"
            style={{ willChange: 'transform, opacity' }}
          >
            notdijon
          </span>
        </div>
      </div>
    </div>
  );
}
