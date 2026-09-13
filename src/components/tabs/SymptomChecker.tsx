"use client";

import { useMemo, useState } from "react";
import { SYMPTOMS, scoreSymptoms } from "@/lib/symptomScoring";

export default function SymptomChecker() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const result = useMemo(
    () => (selected.size > 0 ? scoreSymptoms(Array.from(selected)) : null),
    [selected]
  );

  function toggle(key: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const likelihoodColor =
    result?.likelihood === "High"
      ? "bg-accent-deep"
      : result?.likelihood === "Moderate"
      ? "bg-blush-deep"
      : "bg-sage-deep";

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <p className="mb-3 text-sm font-medium text-slate/70">Select what you&apos;re experiencing</p>
        <div className="flex flex-wrap gap-2">
          {SYMPTOMS.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => toggle(s.key)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selected.has(s.key)
                  ? "border-accent-deep bg-accent-deep text-white shadow-md"
                  : "border-white/70 bg-white/60 text-slate/70 hover:border-accent-deep/50"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="glass rounded-3xl p-6">
        {!result ? (
          <div className="flex h-full items-center justify-center text-center text-slate/50">
            Select one or more symptoms to see an informational likelihood estimate.
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate/60">Estimated likelihood</p>
              <p className="font-[family-name:var(--font-heading)] text-3xl font-medium text-accent-deep">
                {result.likelihood}
              </p>
            </div>
            <div>
              <div className="mb-1.5 flex justify-between text-xs text-slate/60">
                <span>Confidence score</span>
                <span>{result.probability}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/70">
                <div
                  className={`h-full rounded-full ${likelihoodColor} transition-all`}
                  style={{ width: `${result.probability}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-slate/60">
              This is not a medical diagnosis. A home pregnancy test or a visit to your
              healthcare provider is the only reliable way to confirm pregnancy.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
