// Illustrative hormone curves for a typical menstrual cycle — modeled as
// gaussian bumps around ovulation, NOT measured data. For education only.

export interface HormoneSample {
  day: number;
  estrogen: number;
  lh: number;
  progesterone: number;
}

function gaussian(x: number, mean: number, sigma: number): number {
  return Math.exp(-((x - mean) ** 2) / (2 * sigma ** 2));
}

export function ovulationDayIndex(cycleLength: number): number {
  return Math.max(cycleLength - 14, 1);
}

export function buildHormoneCurve(cycleLength: number): HormoneSample[] {
  const ov = ovulationDayIndex(cycleLength);
  const samples: HormoneSample[] = [];

  for (let day = 1; day <= cycleLength; day++) {
    const estrogen =
      0.1 + 0.55 * gaussian(day, ov - 1, 3) + 0.25 * gaussian(day, ov + 7, 4);
    const lh = 0.06 + 0.92 * gaussian(day, ov, 0.9);
    const progesterone = 0.04 + 0.85 * gaussian(day, ov + 7, 4.2);

    samples.push({
      day,
      estrogen: Math.min(estrogen, 1),
      lh: Math.min(lh, 1),
      progesterone: Math.min(progesterone, 1),
    });
  }

  return samples;
}
