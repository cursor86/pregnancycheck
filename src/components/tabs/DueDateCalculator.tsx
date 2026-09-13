"use client";

import { useMemo, useState } from "react";
import { calculateProgress } from "@/lib/pregnancyMath";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function DueDateCalculator() {
  const [lmp, setLmp] = useState("");
  const [cycleLength, setCycleLength] = useState(28);

  const progress = useMemo(() => {
    if (!lmp) return null;
    const lmpDate = new Date(lmp + "T00:00:00");
    if (Number.isNaN(lmpDate.getTime())) return null;
    return calculateProgress(lmpDate, cycleLength);
  }, [lmp, cycleLength]);

  return (
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
        {!progress ? (
          <div className="flex h-full items-center justify-center text-center text-slate/50">
            Enter the first day of your last period to see your results.
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate/60">Estimated due date</p>
              <p className="font-[family-name:var(--font-heading)] text-2xl font-medium text-accent-deep">
                {dateFmt.format(progress.dueDate)}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate/60">Gestational age</p>
                <p className="text-lg font-semibold text-slate">
                  {progress.weeks}w {progress.days}d
                </p>
              </div>
              <div>
                <p className="text-sm text-slate/60">Trimester</p>
                <p className="text-lg font-semibold text-slate">{progress.trimester}</p>
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex justify-between text-xs text-slate/60">
                <span>Progress</span>
                <span>{progress.percentComplete}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-panel/70">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-deep transition-all"
                  style={{ width: `${progress.percentComplete}%` }}
                />
              </div>
            </div>

            <p className="text-sm text-slate/60">
              {progress.daysRemaining} days to go &middot; conceived around{" "}
              {dateFmt.format(progress.conceptionDate)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
