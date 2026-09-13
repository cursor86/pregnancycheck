// Date-based pregnancy calculations using standard obstetric conventions
// (Naegele's rule: LMP + 280 days / 40 weeks, adjusted for cycle length).
// Informational estimates only — not a medical diagnosis.

export const AVERAGE_CYCLE_LENGTH = 28;
export const GESTATION_DAYS = 280;

const DAY_MS = 24 * 60 * 60 * 1000;

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * DAY_MS);
}

function diffDays(a: Date, b: Date): number {
  return Math.round((a.getTime() - b.getTime()) / DAY_MS);
}

function cycleAdjustment(cycleLength: number): number {
  return cycleLength - AVERAGE_CYCLE_LENGTH;
}

export function calculateDueDate(lmpDate: Date, cycleLength = AVERAGE_CYCLE_LENGTH): Date {
  return addDays(lmpDate, GESTATION_DAYS + cycleAdjustment(cycleLength));
}

export function calculateConceptionDate(lmpDate: Date, cycleLength = AVERAGE_CYCLE_LENGTH): Date {
  return addDays(lmpDate, cycleLength - 14);
}

export function calculateOvulationDate(lmpDate: Date, cycleLength = AVERAGE_CYCLE_LENGTH): Date {
  return calculateConceptionDate(lmpDate, cycleLength);
}

export function trimesterForWeek(week: number): 1 | 2 | 3 {
  if (week <= 13) return 1;
  if (week <= 27) return 2;
  return 3;
}

export interface PregnancyProgress {
  lmpDate: Date;
  dueDate: Date;
  conceptionDate: Date;
  today: Date;
  daysPregnant: number;
  weeks: number;
  days: number;
  trimester: 1 | 2 | 3;
  percentComplete: number;
  daysRemaining: number;
}

export function calculateProgress(
  lmpDate: Date,
  cycleLength = AVERAGE_CYCLE_LENGTH,
  onDate: Date = new Date()
): PregnancyProgress {
  const dueDate = calculateDueDate(lmpDate, cycleLength);
  const conceptionDate = calculateConceptionDate(lmpDate, cycleLength);

  const daysPregnant = Math.max(diffDays(onDate, lmpDate), 0);
  const weeks = Math.floor(daysPregnant / 7);
  const days = daysPregnant % 7;
  const totalDays = GESTATION_DAYS + cycleAdjustment(cycleLength);
  const percentComplete = Math.round(Math.min(daysPregnant / totalDays, 1) * 1000) / 10;
  const daysRemaining = Math.max(diffDays(dueDate, onDate), 0);

  return {
    lmpDate,
    dueDate,
    conceptionDate,
    today: onDate,
    daysPregnant,
    weeks,
    days,
    trimester: trimesterForWeek(weeks),
    percentComplete,
    daysRemaining,
  };
}

export function calculateLmpFromDueDate(dueDate: Date, cycleLength = AVERAGE_CYCLE_LENGTH): Date {
  return addDays(dueDate, -(GESTATION_DAYS + cycleAdjustment(cycleLength)));
}

// --- Weight gain guidance (IOM 2009 recommendations) ---

export type BmiCategory = "underweight" | "normal" | "overweight" | "obese";

const WEIGHT_GAIN_RANGES_KG_SINGLETON: Record<BmiCategory, [number, number]> = {
  underweight: [12.5, 18.0],
  normal: [11.5, 16.0],
  overweight: [7.0, 11.5],
  obese: [5.0, 9.0],
};

const WEIGHT_GAIN_RANGES_KG_TWINS: Record<BmiCategory, [number, number]> = {
  underweight: [22.7, 28.0],
  normal: [16.8, 24.5],
  overweight: [14.1, 22.7],
  obese: [11.3, 19.1],
};

export function bmiCategory(heightCm: number, prePregnancyWeightKg: number): BmiCategory {
  const heightM = heightCm / 100;
  const bmi = prePregnancyWeightKg / (heightM * heightM);
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "normal";
  if (bmi < 30) return "overweight";
  return "obese";
}

export interface WeightGainResult {
  bmi: number;
  category: BmiCategory;
  recommendedRangeKg: [number, number];
  currentGainKg: number;
  status: "below recommended range" | "above recommended range" | "within recommended range";
}

export function calculateWeightGain(
  heightCm: number,
  prePregnancyWeightKg: number,
  currentWeightKg: number,
  isTwins = false
): WeightGainResult {
  const heightM = heightCm / 100;
  const bmi = Math.round((prePregnancyWeightKg / (heightM * heightM)) * 10) / 10;
  const category = bmiCategory(heightCm, prePregnancyWeightKg);
  const ranges = isTwins ? WEIGHT_GAIN_RANGES_KG_TWINS : WEIGHT_GAIN_RANGES_KG_SINGLETON;
  const [low, high] = ranges[category];
  const currentGainKg = Math.round((currentWeightKg - prePregnancyWeightKg) * 10) / 10;

  let status: WeightGainResult["status"];
  if (currentGainKg < low) status = "below recommended range";
  else if (currentGainKg > high) status = "above recommended range";
  else status = "within recommended range";

  return { bmi, category, recommendedRangeKg: [low, high], currentGainKg, status };
}
