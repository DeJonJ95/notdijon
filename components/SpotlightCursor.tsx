'use client';

import { useEffect, useRef } from 'react';

export default function SpotlightCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.background = `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, rgba(94, 234, 212, 0.08), transparent 70%)`;
    };

    const handleMouseLeave = () => {
      if (ref.current) ref.current.style.background = '';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
    />
  );
}
