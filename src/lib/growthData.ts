// Approximate week-by-week fetal size comparisons for the growth slider.
// Figures are commonly cited estimates for general education, not clinical data.

export interface WeekData {
  week: number;
  comparison: string;
  lengthCm: number;
  weightG: number;
  note: string;
}

const RAW: [number, string, number, number, string][] = [
  [4, "Poppy seed", 0.1, 0.1, "Implantation is just occurring."],
  [5, "Sesame seed", 0.3, 0.1, "The neural tube begins to form."],
  [6, "Lentil", 0.6, 0.2, "A heartbeat may be detectable."],
  [7, "Blueberry", 1.3, 1, "Arm and leg buds are forming."],
  [8, "Raspberry", 1.6, 1, "Fingers and toes start to form."],
  [9, "Grape", 2.3, 2, "Essential organs begin to function."],
  [10, "Kumquat", 3.1, 4, "Vital organs are formed and starting to function."],
  [11, "Fig", 4.1, 7, "Baby can open and close fists."],
  [12, "Lime", 5.4, 14, "Reflexes are developing."],
  [13, "Lemon", 7.4, 23, "Fingerprints are forming."],
  [14, "Peach", 8.7, 43, "Baby can make facial expressions."],
  [15, "Apple", 10.1, 70, "Legs are growing longer than arms."],
  [16, "Avocado", 11.6, 100, "Baby may start sensing light."],
  [17, "Pear", 13, 140, "A protective layer of fat starts forming."],
  [18, "Bell pepper", 14.2, 190, "Baby's ears are in their final position."],
  [19, "Heirloom tomato", 15.3, 240, "Vernix, a protective coating, is forming."],
  [20, "Banana", 25.6, 300, "You may be able to find out the sex."],
  [21, "Carrot", 26.7, 360, "Baby's movements become more coordinated."],
  [22, "Spaghetti squash", 27.8, 430, "Eyebrows and eyelids are fully formed."],
  [23, "Grapefruit", 28.9, 501, "Baby's hearing continues to develop."],
  [24, "Corn on the cob", 30, 600, "Lungs are developing branches for future air sacs."],
  [25, "Cauliflower", 34.6, 660, "Baby is practicing breathing motions."],
  [26, "Lettuce", 35.6, 760, "Eyes begin to open."],
  [27, "Cabbage", 36.6, 875, "Baby can respond to sound and light."],
  [28, "Eggplant", 37.6, 1005, "Baby can now blink."],
  [29, "Butternut squash", 38.6, 1153, "Muscles and lungs continue maturing."],
  [30, "Cucumber", 39.9, 1319, "Baby's brain is developing rapidly."],
  [31, "Coconut", 41.1, 1502, "Baby can turn its head side to side."],
  [32, "Jicama", 42.4, 1702, "Baby is practicing swallowing and 'breathing'."],
  [33, "Pineapple", 43.7, 1918, "Bones are hardening, except the skull."],
  [34, "Cantaloupe", 45, 2146, "Baby's central nervous system is maturing."],
  [35, "Honeydew melon", 46.2, 2383, "Kidneys are fully developed."],
  [36, "Romaine lettuce head", 47.4, 2622, "Baby is gaining roughly 28g a day."],
  [37, "Swiss chard bunch", 48.6, 2859, "Considered 'early term'."],
  [38, "Leek", 49.8, 3083, "Baby's grip is getting stronger."],
  [39, "Mini watermelon", 50.7, 3288, "Baby is considered full term."],
  [40, "Small pumpkin", 51.2, 3462, "Any day now!"],
];

export const GROWTH_WEEKS: WeekData[] = RAW.map(([week, comparison, lengthCm, weightG, note]) => ({
  week,
  comparison,
  lengthCm,
  weightG,
  note,
}));

export function getWeekData(week: number): WeekData {
  const clamped = Math.min(Math.max(week, 4), 40);
  return (
    GROWTH_WEEKS.find((w) => w.week === clamped) ?? GROWTH_WEEKS[GROWTH_WEEKS.length - 1]
  );
}
