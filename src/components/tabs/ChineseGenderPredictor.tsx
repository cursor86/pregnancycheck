"use client";

import { useMemo, useState } from "react";
import { predictGender } from "@/lib/chineseGenderChart";

export default function ChineseGenderPredictor() {
  const [birthDate, setBirthDate] = useState("");
  const [conceptionDate, setConceptionDate] = useState("");

  const result = useMemo(() => {
    if (!birthDate || !conceptionDate) return null;
    const b = new Date(birthDate + "T00:00:00");
    const c = new Date(conceptionDate + "T00:00:00");
    if (Number.isNaN(b.getTime()) || Number.isNaN(c.getTime())) return null;
    return predictGender(b, c);
  }, [birthDate, conceptionDate]);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate/70">
            Mother&apos;s date of birth
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full rounded-2xl border border-panel/60 bg-panel/70 px-4 py-3 text-ink outline-none ring-accent-deep/40 transition focus:ring-2"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate/70">
            Estimated conception date
          </label>
          <input
            type="date"
            value={conceptionDate}
            onChange={(e) => setConceptionDate(e.target.value)}
            className="w-full rounded-2xl border border-panel/60 bg-panel/70 px-4 py-3 text-ink outline-none ring-accent-deep/40 transition focus:ring-2"
          />
        </div>
        <p className="text-xs text-slate/50">
          Based on the traditional Chinese Gender Chart folklore method — for entertainment
          only, not scientifically validated. Use an ultrasound for an accurate answer.
        </p>
      </div>

      <div className="glass rounded-3xl p-6">
        {!result ? (
          <div className="flex h-full items-center justify-center text-center text-slate/50">
            Enter both dates to see the traditional prediction.
          </div>
        ) : (
          <div className="space-y-4 text-center">
            <p className="text-sm text-slate/60">The chart predicts</p>
            <p className="font-[family-name:var(--font-heading)] text-4xl font-medium text-accent-deep">
              {result.prediction}
            </p>
            <p className="text-sm text-slate/60">
              Lunar age {result.lunarAge}, lunar month {result.lunarMonth}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
