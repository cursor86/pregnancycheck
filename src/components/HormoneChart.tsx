"use client";

import { useMemo, useRef, useState } from "react";
import { buildHormoneCurve, ovulationDayIndex } from "@/lib/hormoneCurve";

// Categorical palette validated for our dark surface via the dataviz skill's
// validator (all-pairs pass on a #0a0c07 dark surface): blue / orange / aqua.
const SERIES = [
  { key: "estrogen" as const, label: "Estrogen", color: "#d95926" },
  { key: "lh" as const, label: "LH", color: "#3987e5" },
  { key: "progesterone" as const, label: "Progesterone", color: "#199e70" },
];

const WIDTH = 600;
const HEIGHT = 220;
const PAD_X = 12;
const PAD_TOP = 16;
const PAD_BOTTOM = 28;

export default function HormoneChart({ cycleLength }: { cycleLength: number }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoverDay, setHoverDay] = useState<number | null>(null);

  const samples = useMemo(() => buildHormoneCurve(cycleLength), [cycleLength]);
  const ov = ovulationDayIndex(cycleLength);

  const plotWidth = WIDTH - PAD_X * 2;
  const plotHeight = HEIGHT - PAD_TOP - PAD_BOTTOM;

  const xForDay = (day: number) => PAD_X + ((day - 1) / (cycleLength - 1)) * plotWidth;
  const yForValue = (v: number) => PAD_TOP + (1 - v) * plotHeight;

  const paths = SERIES.map((s) => ({
    ...s,
    d: samples
      .map((sample, i) => `${i === 0 ? "M" : "L"} ${xForDay(sample.day)} ${yForValue(sample[s.key])}`)
      .join(" "),
  }));

  const hoverSample = hoverDay ? samples[Math.min(hoverDay, samples.length) - 1] : null;

  function handleMove(e: React.MouseEvent<SVGSVGElement>) {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = ((e.clientX - rect.left) / rect.width) * WIDTH;
    const frac = Math.min(Math.max((relX - PAD_X) / plotWidth, 0), 1);
    const day = Math.round(frac * (cycleLength - 1)) + 1;
    setHoverDay(day);
  }

  return (
    <div className="relative">
      <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
        {SERIES.map((s) => (
          <div key={s.key} className="flex items-center gap-1.5 text-xs text-slate/70">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
            {s.label}
          </div>
        ))}
      </div>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full touch-none"
        onMouseMove={handleMove}
        onMouseLeave={() => setHoverDay(null)}
        role="img"
        aria-label="Illustrative estrogen, LH, and progesterone levels across the cycle"
      >
        {[0.25, 0.5, 0.75].map((frac) => (
          <line
            key={frac}
            x1={PAD_X}
            x2={WIDTH - PAD_X}
            y1={PAD_TOP + frac * plotHeight}
            y2={PAD_TOP + frac * plotHeight}
            stroke="currentColor"
            strokeOpacity={0.12}
            strokeWidth={1}
            className="text-slate"
          />
        ))}

        <line
          x1={xForDay(ov)}
          x2={xForDay(ov)}
          y1={PAD_TOP}
          y2={PAD_TOP + plotHeight}
          stroke="currentColor"
          strokeOpacity={0.35}
          strokeDasharray="3 3"
          strokeWidth={1}
          className="text-slate"
        />
        <text
          x={xForDay(ov)}
          y={PAD_TOP - 4}
          textAnchor="middle"
          fontSize={9}
          className="fill-slate/60"
        >
          Ovulation
        </text>

        {paths.map((p) => (
          <path key={p.key} d={p.d} fill="none" stroke={p.color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        ))}

        {hoverSample && (
          <>
            <line
              x1={xForDay(hoverSample.day)}
              x2={xForDay(hoverSample.day)}
              y1={PAD_TOP}
              y2={PAD_TOP + plotHeight}
              stroke="currentColor"
              strokeOpacity={0.25}
              strokeWidth={1}
              className="text-slate"
            />
            {SERIES.map((s) => (
              <circle
                key={s.key}
                cx={xForDay(hoverSample.day)}
                cy={yForValue(hoverSample[s.key])}
                r={4}
                fill={s.color}
                stroke="var(--background)"
                strokeWidth={2}
              />
            ))}
          </>
        )}

        <text x={PAD_X} y={HEIGHT - 8} fontSize={9} className="fill-slate/50">
          Day 1
        </text>
        <text x={WIDTH - PAD_X} y={HEIGHT - 8} textAnchor="end" fontSize={9} className="fill-slate/50">
          Day {cycleLength}
        </text>
      </svg>

      {hoverSample && (
        <div
          className="pointer-events-none absolute top-0 -translate-x-1/2 rounded-xl bg-panel/90 px-3 py-2 text-xs text-ink shadow-lg"
          style={{
            left: `${Math.min(Math.max(((hoverSample.day - 1) / (cycleLength - 1)) * 100, 12), 88)}%`,
          }}
        >
          <p className="mb-1 font-semibold">Day {hoverSample.day}</p>
          {SERIES.map((s) => (
            <p key={s.key} className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.color }} />
              {s.label}: {Math.round(hoverSample[s.key] * 100)}%
            </p>
          ))}
        </div>
      )}

      <p className="mt-3 text-xs text-slate/50">
        Illustrative pattern based on a typical cycle — not measured from your data. Actual
        hormone timing varies by person.
      </p>
    </div>
  );
}
