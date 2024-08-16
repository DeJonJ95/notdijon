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

    const reveal = () => {
      content.style.filter = '';
      content.style.willChange = '';
      content.style.opacity = '';
      content.classList.remove('opacity-0');
      setDone(true);
    };

    const prefersReduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    // Reduced motion: skip the glitch, but still do a calm crossfade
    // (an opacity fade has no motion/parallax, so it's vestibular-safe) —
    // never an abrupt pop.
    if (prefersReduce) {
      content.classList.remove('opacity-0');
      gsap.fromTo(
        content,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out', onComplete: () => setDone(true) },
      );
      return;
    }

    let blink: gsap.core.Tween | null = null;
    let tl: gsap.core.Timeline | null = null;

    try {
      const flood = document.getElementById('db-flood');
      const crop = document.getElementById('db-crop');
      const morph = document.getElementById('db-morph');

      // Drives the SVG pixelate filter: large block size -> 1px (sharp).
      const state = { px: 64 };
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

      // Apply the filter BEFORE revealing content, so there's no flash of
      // sharp content for a frame.
      content.style.filter = 'url(#digiblur)';
      content.style.willChange = 'filter';
      content.classList.remove('opacity-0');

      tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        onComplete: reveal,
      });

      // Core "digiblur": chunky blocks resolve to a crisp page (slow + dominant).
      tl.to(state, { px: 1, duration: 2.2, ease: 'power3.inOut', onUpdate: apply }, 0)
        // A few "signal lock" stutters so it reads as digital, not a smooth blur.
        .to(state, { px: 44, duration: 0.05, onUpdate: apply }, 0.6)
        .to(state, { px: 20, duration: 0.05, onUpdate: apply }, 1.1)
        .to(state, { px: 30, duration: 0.05, onUpdate: apply }, 1.45)
        // Scan line sweeps top -> bottom.
        .fromTo(
          scanRef.current,
          { yPercent: -120, opacity: 0.9 },
          { yPercent: 1200, opacity: 0, duration: 1.9, ease: 'power1.in' },
          0.1,
        )
        // Static / noise clears with a stuttery, digital fade.
        .fromTo(
          noiseRef.current,
          { opacity: 0.4 },
          { opacity: 0, duration: 2.0, ease: 'steps(16)' },
          0,
        )
        // Status label snaps in (stepped = digital), holds, then fades.
        .fromTo(
          labelRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'steps(4)' },
          0.15,
        )
        .to(labelRef.current, { opacity: 0, duration: 0.5, ease: 'power2.in' }, 1.9)
        // Overlay (scanlines + glow) fades out, revealing the crisp page.
        .to(overlayRef.current, { opacity: 0, duration: 0.9, ease: 'power2.out' }, 1.8);

      // Blinking caret.
      blink = gsap.to(caretRef.current, {
        opacity: 0,
        duration: 0.45,
        repeat: -1,
        yoyo: true,
        ease: 'steps(1)',
      });
    } catch {
      // If anything in the animation setup fails, never leave the page hidden.
      reveal();
    }

    return () => {
      tl?.kill();
      blink?.kill();
    };
  }, []);

  if (done) return null;

  return (
    <>
      {/* SVG pixelate filter applied to #page-content via inline style */}
      <svg aria-hidden="true" className="absolute h-0 w-0" focusable="false">
        <filter id="digiblur" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feFlood id="db-flood" x="0" y="0" width="1" height="1" floodColor="#000" result="dot" />
          <feComposite id="db-crop" in="dot" width="64" height="64" result="cell" />
          <feTile in="cell" result="grid" />
          <feComposite in="SourceGraphic" in2="grid" operator="in" result="samples" />
          <feMorphology id="db-morph" in="samples" operator="dilate" radius="32" />
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
