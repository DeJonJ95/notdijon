'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Props {
  children: React.ReactNode;
  /** Stagger children that have the `data-reveal-item` attribute instead of the whole block. */
  stagger?: boolean;
  /** Subtle parallax drift (px) applied across the scroll of the element. 0 = off. */
  parallax?: number;
  /** Delay before the reveal (seconds). */
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  stagger = false,
  parallax = 0,
  delay = 0,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) return; // leave content in its natural, visible state

    const ctx = gsap.context(() => {
      const targets = stagger
        ? (gsap.utils.toArray('[data-reveal-item]', el) as HTMLElement[])
        : [el];

      gsap.set(targets, { opacity: 0, y: 28 });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: 'power3.out',
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      if (parallax) {
        gsap.to(el, {
          y: parallax,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [stagger, parallax, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
