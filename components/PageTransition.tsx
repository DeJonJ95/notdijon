'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function PageTransition() {
  const [done, setDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
  const noiseRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const content = document.getElementById('page-content');
    if (!content) return;

    const prefersReduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) {
      content.classList.remove('opacity-0');
      setDone(true);
      return;
    }

    const flood = document.getElementById('db-flood');
    const crop = document.getElementById('db-crop');
    const morph = document.getElementById('db-morph');

    // Drives the SVG pixelate filter: large block size -> 1px (sharp).
    const state = { px: 44 };
    const apply = () => {
      const p = Math.max(1, Math.round(state.px));
      const half = String(Math.floor(p / 2));
      flood?.setAttribute('x', half);
      flood?.setAttribute('y', half);
      crop?.setAttribute('width', String(p));
      crop?.setAttribute('height', String(p));
      morph?.setAttribute('radius', String(p / 2));
    };
    apply();

    content.classList.remove('opacity-0');
    content.style.filter = 'url(#digiblur)';
    content.style.willChange = 'filter';

    const tl = gsap.timeline({
      onComplete: () => {
        content.style.filter = '';
        content.style.willChange = '';
        setDone(true);
      },
    });

    // Resolve the pixel blocks into a crisp page.
    tl.to(state, { px: 1, duration: 1.7, ease: 'power3.inOut', onUpdate: apply }, 0)
      // Two quick "signal lock" stutters partway through.
      .to(state, { px: 28, duration: 0.06, onUpdate: apply }, 0.55)
      .to(state, { px: 10, duration: 0.06, onUpdate: apply }, 0.95)
      // Scan line sweeps top -> bottom once.
      .fromTo(
        scanRef.current,
        { yPercent: -120, opacity: 0.9 },
        { yPercent: 1200, opacity: 0, duration: 1.5, ease: 'power1.in' },
        0.1,
      )
      // Static / noise flickers, then clears.
      .fromTo(
        noiseRef.current,
        { opacity: 0.35 },
        { opacity: 0, duration: 1.6, ease: 'rough({ strength: 1.4, points: 22, taper: out, randomize: true })' },
        0,
      )
      // Status label flickers in, holds, then fades as the page sharpens.
      .fromTo(
        labelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'rough({ strength: 2, points: 12, taper: none })' },
        0.1,
      )
      .to(labelRef.current, { opacity: 0, duration: 0.5, ease: 'power2.in' }, 1.35)
      // Whole overlay (scanlines + glow) fades out, revealing the crisp page.
      .to(overlayRef.current, { opacity: 0, duration: 0.9, ease: 'power2.out' }, 1.1);

    // Blinking caret.
    const blink = gsap.to(caretRef.current, {
      opacity: 0,
      duration: 0.45,
      repeat: -1,
      yoyo: true,
      ease: 'steps(1)',
    });

    return () => {
      tl.kill();
      blink.kill();
    };
  }, []);

  if (done) return null;

  return (
    <>
      {/* SVG pixelate filter applied to #page-content via inline style */}
      <svg aria-hidden="true" className="absolute h-0 w-0" focusable="false">
        <filter id="digiblur" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feFlood id="db-flood" x="0" y="0" width="1" height="1" floodColor="#000" result="dot" />
          <feComposite id="db-crop" in="dot" width="44" height="44" result="cell" />
          <feTile in="cell" result="grid" />
          <feComposite in="SourceGraphic" in2="grid" operator="in" result="samples" />
          <feMorphology id="db-morph" in="samples" operator="dilate" radius="22" />
        </filter>
      </svg>

      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
        aria-hidden="true"
      >
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.28)_0px,rgba(0,0,0,0.28)_1px,transparent_1px,transparent_3px)]" />
        {/* Signal static / noise */}
        <div
          ref={noiseRef}
          className="absolute inset-0 mix-blend-screen"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: '160px 160px',
          }}
        />
        {/* Teal signal glow */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_55%,rgba(94,234,212,0.10))]" />
        {/* Sweeping scan line */}
        <div
          ref={scanRef}
          className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-transparent via-accent/30 to-transparent shadow-[0_0_24px_4px_rgba(94,234,212,0.35)]"
        />
        {/* Status label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={labelRef}
            className="select-none font-mono text-[11px] font-semibold uppercase tracking-[0.45em] text-accent drop-shadow-[0_0_10px_rgba(94,234,212,0.5)]"
          >
            notdijon
            <span ref={caretRef} className="ml-1 inline-block h-3 w-2 translate-y-px bg-accent align-middle" />
          </div>
        </div>
      </div>
    </>
  );
}
