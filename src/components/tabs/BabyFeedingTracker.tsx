"use client";

import { useEffect, useRef, useState } from "react";
import { Milk, Play, Square } from "lucide-react";

type Side = "left" | "right" | "bottle";

interface FeedingSession {
  id: number;
  side: Side;
  durationSec: number;
  endedAt: Date;
}

function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const SIDES: { key: Side; label: string }[] = [
  { key: "left", label: "Left" },
  { key: "right", label: "Right" },
  { key: "bottle", label: "Bottle" },
];

export default function BabyFeedingTracker() {
  const [side, setSide] = useState<Side>("left");
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [history, setHistory] = useState<FeedingSession[]>([]);
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
    setElapsed(0);
    setIsRunning(true);
  }

  function stop() {
    if (elapsed > 0) {
      setHistory((prev) => [
        { id: Date.now(), side, durationSec: elapsed, endedAt: new Date() },
        ...prev,
      ]);
    }
    setIsRunning(false);
    setElapsed(0);
  }

  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);

  const lastFeedAgo = history[0]
    ? Math.round((now - history[0].endedAt.getTime()) / 60000)
    : null;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="glass flex flex-col items-center justify-center gap-6 rounded-3xl p-8 text-center">
        <div className="flex gap-2">
          {SIDES.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setSide(s.key)}
              disabled={isRunning}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${
                side === s.key
                  ? "bg-accent-deep text-white shadow-md"
                  : "bg-panel/70 text-ink/70"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div>
          <p className="text-sm text-slate/60">{isRunning ? "Feeding in progress" : "Timer"}</p>
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

        {lastFeedAgo !== null && (
          <p className="text-sm text-slate/60">Last feed ended {lastFeedAgo} min ago</p>
        )}
      </div>

      <div className="glass rounded-3xl p-6">
        <p className="mb-3 text-sm font-medium text-slate/70">Feeding log</p>
        {history.length === 0 ? (
          <div className="flex h-40 items-center justify-center text-center text-sm text-slate/50">
            <Milk size={16} className="mr-2" /> Start the timer when a feed begins.
          </div>
        ) : (
          <div className="scrollbar-thin max-h-64 space-y-2 overflow-y-auto pr-1">
            {history.map((h) => (
              <div
                key={h.id}
                className="flex items-center justify-between rounded-xl bg-panel/60 px-4 py-2.5 text-sm"
              >
                <span className="font-semibold capitalize text-slate">{h.side}</span>
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
