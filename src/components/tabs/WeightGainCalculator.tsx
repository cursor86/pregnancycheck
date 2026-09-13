"use client";

import { useMemo, useState } from "react";
import { calculateWeightGain } from "@/lib/pregnancyMath";

export default function WeightGainCalculator() {
  const [height, setHeight] = useState("165");
  const [preWeight, setPreWeight] = useState("60");
  const [currentWeight, setCurrentWeight] = useState("65");
  const [isTwins, setIsTwins] = useState(false);

  const result = useMemo(() => {
    const h = parseFloat(height);
    const pw = parseFloat(preWeight);
    const cw = parseFloat(currentWeight);
    if (!h || !pw || !cw) return null;
    return calculateWeightGain(h, pw, cw, isTwins);
  }, [height, preWeight, currentWeight, isTwins]);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate/70">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-slate outline-none ring-accent-deep/40 transition focus:ring-2"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate/70">
            Pre-pregnancy weight (kg)
          </label>
          <input
            type="number"
            value={preWeight}
            onChange={(e) => setPreWeight(e.target.value)}
            className="w-full rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-slate outline-none ring-accent-deep/40 transition focus:ring-2"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate/70">
            Current weight (kg)
          </label>
          <input
            type="number"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
            className="w-full rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-slate outline-none ring-accent-deep/40 transition focus:ring-2"
          />
        </div>
        <label className="flex items-center gap-2 text-sm font-medium text-slate/70">
          <input
            type="checkbox"
            checked={isTwins}
            onChange={(e) => setIsTwins(e.target.checked)}
            className="h-4 w-4"
            style={{ accentColor: "var(--accent-deep)" }}
          />
          Expecting twins
        </label>
      </div>

      <div className="glass rounded-3xl p-6">
        {!result ? (
          <div className="flex h-full items-center justify-center text-center text-slate/50">
            Enter your height and weights to see your recommended gain range.
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate/60">Pre-pregnancy BMI</p>
              <p className="font-[family-name:var(--font-heading)] text-2xl font-medium text-accent-deep capitalize">
                {result.bmi} &middot; {result.category}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate/60">Recommended total gain</p>
              <p className="text-lg font-semibold text-slate">
                {result.recommendedRangeKg[0]}&ndash;{result.recommendedRangeKg[1]} kg
              </p>
            </div>
            <div>
              <p className="text-sm text-slate/60">Your current gain</p>
              <p className="text-lg font-semibold text-slate">{result.currentGainKg} kg</p>
            </div>
            <div
              className={`rounded-xl px-4 py-2.5 text-sm font-medium ${
                result.status === "within recommended range"
                  ? "bg-sage/60 text-slate"
                  : "bg-blush/70 text-slate"
              }`}
            >
              {result.status === "within recommended range"
                ? "You're within the recommended range."
                : `You're currently ${result.status}.`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
