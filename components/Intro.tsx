'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { FiArrowDown, FiVolume2, FiVolumeX } from 'react-icons/fi';
import type Lenis from 'lenis';

// Session flag so the intro plays once per browser session, on the home page only.
const SESSION_KEY = 'notdijon:introSeen';

export default function Intro() {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const beganRef = useRef(false);
  const [soundOn, setSoundOn] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);
  const [gone, setGone] = useState(false);

  // Decide whether to render at all. Runs once on client mount.
  useEffect(() => {
    if (pathname !== '/') return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // sessionStorage blocked (private mode, etc.) — still show intro.
    }
    setShouldRender(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Animation effect — only wires up listeners and locks scroll if the intro will render.
  useEffect(() => {
    if (!shouldRender) return;
    const overlay = overlayRef.current;
    if (!overlay) return;

    const prefersReduce =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const getLenis = () => (window as unknown as { __lenis?: Lenis }).__lenis;

    // Lock scrolling while the intro is up.
    getLenis()?.stop();
    document.body.style.overflow = 'hidden';

    // Animate the intro content in.
    if (!prefersReduce && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          delay: 0.15,
        },
      );
    }

    const begin = () => {
      if (beganRef.current) return;
      beganRef.current = true;

      window.dispatchEvent(
        new CustomEvent('ambient:set', { detail: { on: soundOn } }),
      );

      const finish = () => {
        try {
          sessionStorage.setItem(SESSION_KEY, '1');
        } catch {
          // ignore
        }
        document.body.style.overflow = '';
        getLenis()?.start();
        setGone(true);
      };

      if (prefersReduce) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: finish,
        });
      } else {
        gsap
          .timeline({ onComplete: finish })
          .to(contentRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: 'power2.in',
          })
          .to(
            overlay,
            { yPercent: -100, duration: 1.0, ease: 'expo.inOut' },
            '-=0.1',
          );
      }

      cleanup();
    };

    const onWheel = () => begin();
    const onTouch = () => begin();
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) begin();
    };

    const cleanup = () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('keydown', onKey);
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('keydown', onKey);

    return () => {
      cleanup();
      document.body.style.overflow = '';
    };
    // soundOn intentionally read at begin-time via closure recreation below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundOn, shouldRender]);

  if (!shouldRender || gone) return null;

  return (
    <div
      ref={overlayRef}
      className="intro-overlay fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0f172a] px-6 text-center"
    >
      {/* No-JS escape hatch: never trap the page behind the overlay. */}
      <noscript>
        <style>{`.intro-overlay{display:none!important}`}</style>
      </noscript>

      {/* Sound preference toggle (doesn't trigger begin) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setSoundOn((v) => !v);
        }}
        aria-label={soundOn ? 'Start with sound on' : 'Start muted'}
        className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-300 transition-colors hover:border-accent/60 hover:text-accent"
      >
        {soundOn ? <FiVolume2 className="h-4 w-4" /> : <FiVolumeX className="h-4 w-4" />}
        {soundOn ? 'Sound on' : 'Muted'}
      </button>

      <div ref={contentRef} className="flex flex-col items-center">
        <span className="font-mono text-xs uppercase tracking-[0.5em] text-accent">Portfolio</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
          DeJon Johnson
        </h1>
        <p className="mt-4 max-w-sm text-sm text-slate-400 sm:text-base">
          Web developer and technical strategist, out of Detroit.
        </p>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new WheelEvent('wheel'))}
          className="mt-12 flex flex-col items-center gap-3 text-slate-400 transition-colors hover:text-accent"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em]">Scroll to begin</span>
          <span className="flex h-10 w-6 items-start justify-center rounded-full border border-slate-600 p-1">
            <FiArrowDown className="h-4 w-4 animate-bounce" />
          </span>
        </button>
      </div>
    </div>
  );
}
