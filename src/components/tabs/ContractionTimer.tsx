"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Square } from "lucide-react";

interface Contraction {
  id: number;
  start: Date;
  end: Date;
  durationSec: number;
  intervalSinceLastSec: number | null;
}

function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function ContractionTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [contractions, setContractions] = useState<Contraction[]>([]);
  const startRef = useRef<Date | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  function start() {
    startRef.current = new Date();
    setElapsed(0);
    setIsRunning(true);
  }

  function stop() {
    if (!startRef.current) return;
    const end = new Date();
    const durationSec = Math.round((end.getTime() - startRef.current.getTime()) / 1000);
    const last = contractions[0];
    const intervalSinceLastSec = last
      ? Math.round((startRef.current.getTime() - last.end.getTime()) / 1000)
      : null;

    setContractions((prev) => [
      { id: Date.now(), start: startRef.current as Date, end, durationSec, intervalSinceLastSec },
      ...prev,
    ]);
    setIsRunning(false);
    setElapsed(0);
    startRef.current = null;
  }

  const avgDuration = contractions.length
    ? Math.round(contractions.reduce((sum, c) => sum + c.durationSec, 0) / contractions.length)
    : null;
  const intervalsOnly = contractions
    .map((c) => c.intervalSinceLastSec)
    .filter((v): v is number => v !== null);
  const avgInterval = intervalsOnly.length
    ? Math.round(intervalsOnly.reduce((s, v) => s + v, 0) / intervalsOnly.length)
    : null;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="glass flex flex-col items-center justify-center gap-6 rounded-3xl p-8 text-center">
        <div>
          <p className="text-sm text-slate/60">{isRunning ? "Contraction running" : "Ready"}</p>
          <p className="font-[family-name:var(--font-heading)] text-4xl font-medium text-slate">
            {formatDuration(elapsed)}
          </p>
        </div>

        {!isRunning ? (
          <button
            type="button"
            onClick={start}
            className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-sage-deep to-sage text-white shadow-xl transition hover:scale-105 active:scale-95"
          >
            <Play size={36} />
          </button>
        ) : (
          <button
            type="button"
            onClick={stop}
            className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-deep text-white shadow-xl transition hover:scale-105 active:scale-95"
          >
            <Square size={32} />
          </button>
        )}

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-slate/60">Avg. duration</p>
            <p className="font-semibold text-slate">
              {avgDuration !== null ? formatDuration(avgDuration) : "—"}
            </p>
          </div>
          <div>
            <p className="text-slate/60">Avg. interval</p>
            <p className="font-semibold text-slate">
              {avgInterval !== null ? formatDuration(avgInterval) : "—"}
            </p>
          </div>
        </div>
      </div>

      <div className="glass rounded-3xl p-6">
        <p className="mb-3 text-sm font-medium text-slate/70">Contraction log</p>
        {contractions.length === 0 ? (
          <div className="flex h-40 items-center justify-center text-center text-sm text-slate/50">
            Press start when a contraction begins, stop when it ends.
          </div>
        ) : (
          <div className="scrollbar-thin max-h-64 space-y-2 overflow-y-auto pr-1">
            {contractions.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-2.5 text-sm"
              >
                <span className="text-slate/60">
                  {c.start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
                <span className="font-semibold text-slate">{formatDuration(c.durationSec)}</span>
                <span className="text-slate/40">
                  {c.intervalSinceLastSec !== null
                    ? `+${formatDuration(c.intervalSinceLastSec)} since last`
                    : "first logged"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
