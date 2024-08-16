'use client';

import { useEffect, useRef, useState } from 'react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

/**
 * Persistent ambient-audio player. Lives in the layout so it survives the
 * intro overlay unmounting. The intro dispatches `ambient:set` (with
 * { on: boolean }) on the begin gesture; a floating button lets the visitor
 * toggle sound at any time. If no audio file is present, it silently no-ops.
 *
 * Drop a loopable track at /public/audio/ambient.mp3 to enable sound.
 */
export default function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [mounted, setMounted] = useState(false);
  const [on, setOn] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ on: boolean }>).detail;
      setOn(Boolean(detail?.on));
    };
    window.addEventListener('ambient:set', handler);
    return () => window.removeEventListener('ambient:set', handler);
  }, []);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    if (on) {
      el.volume = 0;
      el.play()
        .then(() => {
          // gentle fade-in
          const target = 0.35;
          const step = () => {
            if (!audioRef.current) return;
            audioRef.current.volume = Math.min(target, audioRef.current.volume + 0.02);
            if (audioRef.current.volume < target) requestAnimationFrame(step);
          };
          step();
        })
        .catch(() => {
          setAvailable(false);
          setOn(false);
        });
    } else {
      el.pause();
    }
  }, [on]);

  if (!mounted || !available) return <audio ref={audioRef} src="/audio/ambient.mp3" loop preload="none" />;

  return (
    <>
      <audio ref={audioRef} src="/audio/ambient.mp3" loop preload="auto" />
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        aria-label={on ? 'Mute ambient sound' : 'Play ambient sound'}
        className="group fixed bottom-6 right-6 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/70 text-slate-300 backdrop-blur transition-colors hover:border-accent/60 hover:text-accent"
      >
        {on ? (
          <span className="flex items-end gap-[2px]" aria-hidden>
            <span className="h-2 w-[2px] animate-[eq_0.9s_ease-in-out_infinite] bg-current" />
            <span className="h-3 w-[2px] animate-[eq_0.9s_ease-in-out_infinite_0.15s] bg-current" />
            <span className="h-1.5 w-[2px] animate-[eq_0.9s_ease-in-out_infinite_0.3s] bg-current" />
            <span className="h-2.5 w-[2px] animate-[eq_0.9s_ease-in-out_infinite_0.45s] bg-current" />
          </span>
        ) : available ? (
          <FiVolume2 className="h-5 w-5" />
        ) : (
          <FiVolumeX className="h-5 w-5" />
        )}
      </button>
    </>
  );
}
