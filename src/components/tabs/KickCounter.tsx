"use client";

import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw, Square } from "lucide-react";

interface KickSession {
  id: number;
  count: number;
  durationSec: number;
  endedAt: Date;
}

function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function KickCounter() {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [history, setHistory] = useState<KickSession[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive]);

  function logKick() {
    if (!isActive) setIsActive(true);
    setCount((c) => c + 1);
  }

  function stopSession() {
    if (count > 0) {
      setHistory((prev) => [
        { id: Date.now(), count, durationSec: elapsed, endedAt: new Date() },
        ...prev,
      ]);
    }
    setIsActive(false);
    setCount(0);
    setElapsed(0);
  }

  function resetSession() {
    setIsActive(false);
    setCount(0);
    setElapsed(0);
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="glass flex flex-col items-center justify-center gap-6 rounded-3xl p-8 text-center">
        <div>
          <p className="text-sm text-slate/60">Session timer</p>
          <p className="font-[family-name:var(--font-heading)] text-4xl font-medium text-slate">
            {formatDuration(elapsed)}
          </p>
        </div>

        <button
          type="button"
          onClick={logKick}
          className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-deep text-white shadow-xl shadow-accent-deep/30 transition hover:scale-105 active:scale-95"
        >
          <span className="text-3xl font-bold">{count}</span>
          <span className="text-xs">+ Log Kick</span>
        </button>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={stopSession}
            disabled={!isActive && count === 0}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-slate transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Square size={14} /> Stop &amp; save
          </button>
          <button
            type="button"
            onClick={resetSession}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-slate transition hover:bg-white"
          >
            <RotateCcw size={14} /> Reset
          </button>
        </div>
      </div>

      <div className="glass rounded-3xl p-6">
        <p className="mb-3 text-sm font-medium text-slate/70">Session history</p>
        {history.length === 0 ? (
          <div className="flex h-40 items-center justify-center text-center text-sm text-slate/50">
            <Play size={16} className="mr-2" /> Tap &ldquo;Log Kick&rdquo; to start your first session.
          </div>
        ) : (
          <div className="scrollbar-thin max-h-64 space-y-2 overflow-y-auto pr-1">
            {history.map((h) => (
              <div
                key={h.id}
                className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-2.5 text-sm"
              >
                <span className="font-semibold text-slate">{h.count} kicks</span>
                <span className="text-slate/60">{formatDuration(h.durationSec)}</span>
                <span className="text-slate/40">
                  {h.endedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
