"use client";

import { useMemo, useState } from "react";
import { Shuffle } from "lucide-react";
import { BabyName, NameGender, filterNames, randomName } from "@/lib/babyNames";

const GENDER_OPTIONS: { key: NameGender | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "girl", label: "Girl" },
  { key: "boy", label: "Boy" },
  { key: "unisex", label: "Unisex" },
];

export default function BabyNameGenerator() {
  const [gender, setGender] = useState<NameGender | "all">("all");
  const [letter, setLetter] = useState("");
  const [featured, setFeatured] = useState<BabyName | null>(null);

  const results = useMemo(() => filterNames(gender, letter), [gender, letter]);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="space-y-5">
        <div>
          <p className="mb-1.5 text-sm font-medium text-slate/70">Gender</p>
          <div className="flex flex-wrap gap-2">
            {GENDER_OPTIONS.map((g) => (
              <button
                key={g.key}
                type="button"
                onClick={() => setGender(g.key)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  gender === g.key
                    ? "bg-accent-deep text-white shadow-md"
                    : "bg-panel/70 text-ink/70"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate/70">
            Starts with (optional)
          </label>
          <input
            type="text"
            maxLength={1}
            value={letter}
            onChange={(e) => setLetter(e.target.value.replace(/[^a-zA-Z]/g, ""))}
            placeholder="e.g. A"
            className="w-24 rounded-2xl border border-panel/60 bg-panel/70 px-4 py-3 text-center text-ink outline-none ring-accent-deep/40 transition focus:ring-2"
          />
        </div>

        <button
          type="button"
          onClick={() => setFeatured(randomName(gender))}
          className="inline-flex items-center gap-2 rounded-full bg-accent-deep px-5 py-2.5 font-medium text-white shadow-md transition hover:bg-accent"
        >
          <Shuffle size={16} /> Surprise me
        </button>
      </div>

      <div className="glass rounded-3xl p-6">
        {featured && (
          <div className="mb-4 rounded-2xl bg-panel/70 p-4 text-center">
            <p className="text-xs text-slate/50">Random pick</p>
            <p className="font-[family-name:var(--font-heading)] text-2xl font-medium text-accent-deep">
              {featured.name}
            </p>
            <p className="text-xs text-slate/60">
              {featured.origin} &middot; {featured.meaning}
            </p>
          </div>
        )}

        <p className="mb-2 text-xs text-slate/50">{results.length} names</p>
        <div className="scrollbar-thin max-h-56 space-y-1.5 overflow-y-auto pr-1">
          {results.map((n) => (
            <div
              key={n.name}
              className="flex items-center justify-between rounded-xl bg-panel/60 px-4 py-2 text-sm"
            >
              <span className="font-semibold text-slate">{n.name}</span>
              <span className="text-slate/50">{n.meaning}</span>
            </div>
          ))}
          {results.length === 0 && (
            <p className="py-6 text-center text-sm text-slate/50">No names match those filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}
