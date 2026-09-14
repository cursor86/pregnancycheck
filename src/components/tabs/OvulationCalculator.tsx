"use client";

import { useMemo, useState } from "react";
import { calculateOvulationDate } from "@/lib/pregnancyMath";
import HormoneChart from "@/components/HormoneChart";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const DAY_MS = 24 * 60 * 60 * 1000;

export default function OvulationCalculator() {
  const [lmp, setLmp] = useState("");
  const [cycleLength, setCycleLength] = useState(28);

  const result = useMemo(() => {
    if (!lmp) return null;
    const lmpDate = new Date(lmp + "T00:00:00");
    if (Number.isNaN(lmpDate.getTime())) return null;
    const ovulation = calculateOvulationDate(lmpDate, cycleLength);
    const fertileStart = new Date(ovulation.getTime() - 5 * DAY_MS);
    const fertileEnd = new Date(ovulation.getTime() + 1 * DAY_MS);
    const nextPeriod = new Date(lmpDate.getTime() + cycleLength * DAY_MS);
    return { ovulation, fertileStart, fertileEnd, nextPeriod };
  }, [lmp, cycleLength]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate/70">
              First day of your last period
            </label>
            <input
              type="date"
              value={lmp}
              onChange={(e) => setLmp(e.target.value)}
              className="w-full rounded-2xl border border-panel/60 bg-panel/70 px-4 py-3 text-ink outline-none ring-accent-deep/40 transition focus:ring-2"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate/70">
              Average cycle length: <span className="font-semibold text-accent-deep">{cycleLength} days</span>
            </label>
            <input
              type="range"
              min={20}
              max={45}
              value={cycleLength}
              onChange={(e) => setCycleLength(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "var(--accent-deep)" }}
            />
          </div>
        </div>

        <div className="glass rounded-3xl p-6">
          {!result ? (
            <div className="flex h-full items-center justify-center text-center text-slate/50">
              Enter your last period date to estimate ovulation and your fertile window.
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate/60">Estimated ovulation day</p>
                <p className="font-[family-name:var(--font-heading)] text-2xl font-medium text-accent-deep">
                  {dateFmt.format(result.ovulation)}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate/60">Fertile window</p>
                <p className="text-lg font-semibold text-slate">
                  {dateFmt.format(result.fertileStart)} &ndash; {dateFmt.format(result.fertileEnd)}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate/60">Next expected period</p>
                <p className="text-lg font-semibold text-slate">{dateFmt.format(result.nextPeriod)}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="glass rounded-3xl p-6">
        <h3 className="mb-1 font-semibold text-slate">Hormone pattern across your cycle</h3>
        <p className="mb-4 text-xs text-slate/50">
          Hover the chart to see relative levels for any day of a {cycleLength}-day cycle.
        </p>
        <HormoneChart cycleLength={cycleLength} />
      </div>
    </div>
  );
}
