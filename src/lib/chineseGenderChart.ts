// Traditional Chinese Gender Chart — a folklore method based on lunar age
// at conception and lunar conception month. For entertainment purposes
// only; it has no scientific basis and should not be relied upon.

export interface GenderPrediction {
  lunarAge: number;
  lunarMonth: number;
  prediction: "Boy" | "Girl";
}

/** Approximates "Chinese age" (age + ~1 year per lunar-calendar convention). */
function lunarAgeAtConception(birthDate: Date, conceptionDate: Date): number {
  let age = conceptionDate.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    conceptionDate.getMonth() > birthDate.getMonth() ||
    (conceptionDate.getMonth() === birthDate.getMonth() &&
      conceptionDate.getDate() >= birthDate.getDate());
  if (!hasHadBirthdayThisYear) age -= 1;
  return age + 1; // traditional lunar-age convention
}

export function predictGender(birthDate: Date, conceptionDate: Date): GenderPrediction {
  const lunarAge = lunarAgeAtConception(birthDate, conceptionDate);
  const lunarMonth = conceptionDate.getMonth() + 1; // simplified approximation

  // Simplified representation of the traditional chart's alternating pattern.
  const prediction: "Boy" | "Girl" = (lunarAge + lunarMonth) % 2 === 0 ? "Girl" : "Boy";

  return { lunarAge, lunarMonth, prediction };
}
