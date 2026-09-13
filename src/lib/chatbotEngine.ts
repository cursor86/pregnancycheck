// Lightweight keyword-matched FAQ chatbot — no external API/LLM key required.

const DISCLAIMER =
  "I'm an automated assistant and can't give medical advice. Please contact a doctor or midwife for anything urgent or personal.";

const FAQ: [string[], string][] = [
  [
    ["late period", "missed period", "when to test"],
    "A home pregnancy test is most accurate starting the day after your missed period. Testing too early can give a false negative because hCG levels are still low.",
  ],
  [
    ["due date", "how far along", "weeks pregnant"],
    "Use the Due Date tab above — enter the first day of your last period and your usual cycle length to estimate your due date and current week.",
  ],
  [
    ["symptom", "am i pregnant", "signs of pregnancy"],
    "Common early signs include a missed period, nausea, breast tenderness, fatigue, and frequent urination. Try the Symptom Checker tab for a rough likelihood estimate, then confirm with a test.",
  ],
  [
    ["ovulation", "fertile"],
    "Ovulation usually happens about 14 days before your next expected period. The Ovulation tab can estimate your fertile window.",
  ],
  [
    ["weight gain", "how much weight"],
    "Healthy weight gain depends on your pre-pregnancy BMI. The Weight Gain tab gives you a recommended range based on IOM guidelines.",
  ],
  [
    ["kick", "movement"],
    "Many providers suggest counting kicks daily starting around week 28 — the Kick Counter tab can help you time and log a session.",
  ],
  [
    ["contraction"],
    "The Contraction Timer tab logs the start/stop time of each contraction and calculates duration and frequency automatically.",
  ],
  [
    ["negative test", "false negative"],
    "A negative result can happen if you tested too early or the urine was too diluted. If your period still doesn't arrive, wait a few days and test again, or see a doctor.",
  ],
  [
    ["bleeding", "spotting", "cramping"],
    "Light spotting can be normal (implantation bleeding), but heavy bleeding or severe pain should be checked by a doctor promptly.",
  ],
  [
    ["miscarriage"],
    "If you're worried about a possible miscarriage, please contact a healthcare provider right away rather than relying on this chat.",
  ],
];

const GREETINGS = ["hi", "hello", "hey"];

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "");
}

export function getChatResponse(message: string): string {
  const normalized = normalize(message).trim();

  if (!normalized) return "Could you tell me a bit more about what you'd like to know?";

  if (GREETINGS.some((g) => normalized === g || normalized.startsWith(g + " "))) {
    return "Hi! I can answer common questions about pregnancy signs, due dates, ovulation, kicks, contractions, and weight gain. What would you like to know?";
  }

  for (const [keywords, answer] of FAQ) {
    if (keywords.some((kw) => normalized.includes(kw))) {
      return `${answer}\n\n${DISCLAIMER}`;
    }
  }

  return `I don't have a specific answer for that yet. Try asking about symptoms, due dates, ovulation, kicks, contractions, or weight gain. ${DISCLAIMER}`;
}
