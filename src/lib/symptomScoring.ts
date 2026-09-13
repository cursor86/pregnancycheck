// Heuristic "Am I pregnant?" symptom scoring — NOT a medical diagnosis.
// Hand-weighted logistic model over commonly self-reported early symptoms.

export interface SymptomDef {
  key: string;
  label: string;
  weight: number;
}

export const SYMPTOMS: SymptomDef[] = [
  { key: "missed_period", label: "Missed or late period", weight: 3.0 },
  { key: "positive_test", label: "Already had a positive home test", weight: 4.0 },
  { key: "nausea", label: "Nausea or morning sickness", weight: 1.6 },
  { key: "breast_tenderness", label: "Sore or swollen breasts", weight: 1.3 },
  { key: "frequent_urination", label: "Frequent urination", weight: 1.2 },
  { key: "food_aversion", label: "Food aversions or cravings", weight: 1.1 },
  { key: "fatigue", label: "Unusual fatigue", weight: 1.0 },
  { key: "cramping", label: "Mild cramping or spotting", weight: 0.9 },
  { key: "mood_swings", label: "Mood swings", weight: 0.7 },
  { key: "bloating", label: "Bloating", weight: 0.6 },
];

const BASELINE = -3.2;

export interface SymptomResult {
  probability: number;
  likelihood: "Low" | "Moderate" | "High";
}

export function scoreSymptoms(selectedKeys: string[]): SymptomResult {
  const weightByKey = new Map(SYMPTOMS.map((s) => [s.key, s.weight]));
  const weightedSum = selectedKeys.reduce((sum, k) => sum + (weightByKey.get(k) ?? 0), 0);
  const z = BASELINE + weightedSum;
  const probability = 1 / (1 + Math.exp(-z));

  let likelihood: SymptomResult["likelihood"];
  if (probability < 0.35) likelihood = "Low";
  else if (probability < 0.7) likelihood = "Moderate";
  else likelihood = "High";

  return { probability: Math.round(probability * 1000) / 10, likelihood };
}
