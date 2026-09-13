"use client";

import { useState } from "react";
import {
  Activity,
  Baby,
  CalendarHeart,
  Footprints,
  Milk,
  ScrollText,
  Scale,
  Sparkles,
  Stethoscope,
  Wand2,
} from "lucide-react";
import DueDateCalculator from "./tabs/DueDateCalculator";
import OvulationCalculator from "./tabs/OvulationCalculator";
import WeightGainCalculator from "./tabs/WeightGainCalculator";
import SymptomChecker from "./tabs/SymptomChecker";
import GrowthSlider from "./tabs/GrowthSlider";
import KickCounter from "./tabs/KickCounter";
import ContractionTimer from "./tabs/ContractionTimer";
import ChineseGenderPredictor from "./tabs/ChineseGenderPredictor";
import BabyFeedingTracker from "./tabs/BabyFeedingTracker";
import BabyNameGenerator from "./tabs/BabyNameGenerator";

const TABS = [
  { id: "due-date", label: "Due Date", icon: CalendarHeart, Component: DueDateCalculator },
  { id: "ovulation", label: "Ovulation", icon: Sparkles, Component: OvulationCalculator },
  { id: "weight-gain", label: "Weight Gain", icon: Scale, Component: WeightGainCalculator },
  { id: "symptoms", label: "Symptom Checker", icon: Stethoscope, Component: SymptomChecker },
  { id: "growth", label: "Growth Slider", icon: Baby, Component: GrowthSlider },
  { id: "kicks", label: "Kick Counter", icon: Footprints, Component: KickCounter },
  { id: "contractions", label: "Contraction Timer", icon: Activity, Component: ContractionTimer },
  { id: "gender", label: "Gender Predictor", icon: ScrollText, Component: ChineseGenderPredictor },
  { id: "feeding", label: "Feeding Tracker", icon: Milk, Component: BabyFeedingTracker },
  { id: "names", label: "Baby Names", icon: Wand2, Component: BabyNameGenerator },
] as const;

export default function UtilityHub() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("due-date");

  return (
    <section id="hub" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-slate sm:text-4xl">
            One dashboard. Every tool you need.
          </h2>
          <p className="mt-3 text-slate/60">
            Switch tabs freely — your kick counts and contraction log stay right where you
            left them.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-accent-deep text-white shadow-md shadow-accent-deep/30"
                    : "glass text-slate/70 hover:text-slate"
                }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="glass-strong rounded-[2rem] p-6 shadow-xl shadow-accent-deep/5 sm:p-10">
          {TABS.map(({ id, Component }) => (
            <div key={id} hidden={id !== activeTab}>
              <Component />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
