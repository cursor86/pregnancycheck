"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Apple, Gamepad2, UtensilsCrossed } from "lucide-react";
import { ComparisonTheme, getWeekData } from "@/lib/growthData";

const THEMES: { key: ComparisonTheme; label: string; icon: typeof Apple }[] = [
  { key: "fruit", label: "Fruit", icon: Apple },
  { key: "food", label: "Food", icon: UtensilsCrossed },
  { key: "geeky", label: "Geeky", icon: Gamepad2 },
];

export default function GrowthSlider() {
  const [week, setWeek] = useState(20);
  const [theme, setTheme] = useState<ComparisonTheme>("fruit");
  const data = getWeekData(week, theme);
  const ThemeIcon = THEMES.find((t) => t.key === theme)?.icon ?? Apple;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex flex-col justify-center space-y-6">
        <div className="flex gap-2">
          {THEMES.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTheme(t.key)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                theme === t.key
                  ? "bg-accent-deep text-white shadow-md"
                  : "bg-panel/70 text-ink/70"
              }`}
            >
              <t.icon size={13} />
              {t.label}
            </button>
          ))}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate/70">
            Pregnancy week: <span className="font-semibold text-accent-deep">{week}</span>
          </label>
          <input
            type="range"
            min={4}
            max={40}
            value={week}
            onChange={(e) => setWeek(Number(e.target.value))}
            className="w-full"
            style={{ accentColor: "var(--accent-deep)" }}
          />
          <div className="mt-1 flex justify-between text-xs text-slate/40">
            <span>Week 4</span>
            <span>Week 40</span>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-4">
          <div className="glass rounded-2xl p-4">
            <dt className="text-xs text-slate/60">Length</dt>
            <dd className="text-lg font-semibold text-slate">{data.lengthCm} cm</dd>
          </div>
          <div className="glass rounded-2xl p-4">
            <dt className="text-xs text-slate/60">Weight</dt>
            <dd className="text-lg font-semibold text-slate">{data.weightG} g</dd>
          </div>
        </dl>

        <p className="text-sm text-slate/60">{data.note}</p>
      </div>

      <div className="relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${theme}-${data.week}`}
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.85, rotate: 6 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="glass-strong flex aspect-square w-full max-w-xs flex-col items-center justify-center gap-4 rounded-[2rem] p-8 text-center shadow-lg"
          >
            <div className="animate-float flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sage-deep to-sage text-white shadow-xl">
              <ThemeIcon size={48} strokeWidth={1.4} />
            </div>
            <p className="text-sm text-slate/60">Baby is about the size of a</p>
            <p className="font-[family-name:var(--font-heading)] text-2xl font-medium text-slate">
              {data.comparison}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
