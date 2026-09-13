// Source-of-truth content for the 40-week "Am I Pregnant" newsletter sequence.
// Each entry follows a Baby's Development / Your Body / Tip / Countdown structure.
// Educational content only — not medical advice.

export interface WeeklyEmail {
  week: number;
  subject: string;
  babyDevelopment: string;
  yourBody: string;
  tip: string;
  countdown: string;
}

export const WEEKLY_EMAILS: WeeklyEmail[] = [
  {
    week: 1,
    subject: "Week 1: Welcome — here's how pregnancy counting actually works",
    babyDevelopment:
      "This may feel odd, but week 1 is counted from the first day of your last period — before conception has even happened. Doctors use this date because it's easier to pinpoint than ovulation.",
    yourBody:
      "You may be having your period this week, or getting ready to. Your body is preparing an egg for release later in your cycle.",
    tip: "Start (or continue) a prenatal vitamin with folic acid — it's most protective in these very early weeks.",
    countdown: "39 weeks to go (estimated).",
  },
  {
    week: 2,
    subject: "Week 2: Ovulation is near",
    babyDevelopment:
      "No embryo yet — this week your body is gearing up to release an egg. Fertilization typically happens around now if conception occurs this cycle.",
    yourBody:
      "You may notice fertile signs: clearer discharge, a slight rise in basal body temperature, or mild ovulation twinges.",
    tip: "If you're trying to conceive, this is typically your most fertile window.",
    countdown: "38 weeks to go (estimated).",
  },
  {
    week: 3,
    subject: "Week 3: Fertilization and the first cell divisions",
    babyDevelopment:
      "If sperm meets egg this week, a single fertilized cell begins dividing rapidly, forming a tiny cluster of cells that will travel toward the uterus over the next several days.",
    yourBody:
      "There's usually nothing to feel yet — hormone levels are still very low. A pregnancy test would not yet show a positive result.",
    tip: "It's still a good time to avoid alcohol, smoking, and unnecessary medications, just in case.",
    countdown: "37 weeks to go (estimated).",
  },
  {
    week: 4,
    subject: "Week 4: Implantation — hello, poppy seed",
    babyDevelopment:
      "The ball of cells (now called a blastocyst) implants into the uterine lining this week. It's about the size of a poppy seed, and the placenta and amniotic sac are just beginning to form.",
    yourBody:
      "This is often the week a missed period first tips you off. Home pregnancy tests can usually detect hCG starting around now.",
    tip: "If your period is late, this is the week a home test is likely to turn positive if you're pregnant.",
    countdown: "36 weeks to go (estimated).",
  },
  {
    week: 5,
    subject: "Week 5: A sesame seed with a beating heart on the way",
    babyDevelopment:
      "The neural tube — the beginning of the brain and spinal cord — starts forming. The heart is beginning to take shape and will soon start beating.",
    yourBody:
      "Early symptoms often start now: fatigue, tender breasts, and the first hints of nausea for some. Every pregnancy is different — plenty of people feel nothing yet.",
    tip: "Book your first prenatal appointment if you haven't already; many providers see you around 8 weeks.",
    countdown: "35 weeks to go (estimated).",
  },
  {
    week: 6,
    subject: "Week 6: A flicker of a heartbeat",
    babyDevelopment:
      "Baby is about the size of a lentil. The heart is now beating, and an early ultrasound may be able to detect it. Tiny buds that will become arms and legs are forming.",
    yourBody:
      "Morning sickness (which can strike any time of day) commonly ramps up now, along with fatigue and a heightened sense of smell.",
    tip: "Small, frequent meals and ginger tea can help take the edge off nausea for some people.",
    countdown: "34 weeks to go (estimated).",
  },
  {
    week: 7,
    subject: "Week 7: Blueberry-sized and growing fast",
    babyDevelopment:
      "Baby has roughly doubled in size from last week. Arm and leg buds are longer, and tiny hands are starting to form paddle-like shapes.",
    yourBody:
      "Nausea, breast tenderness, and needing to pee more often are all common. Mood swings can show up too, thanks to rapidly shifting hormones.",
    tip: "Keep crackers or a bland snack by the bed — eating something small before getting up can ease morning nausea.",
    countdown: "33 weeks to go (estimated).",
  },
  {
    week: 8,
    subject: "Week 8: Raspberry-sized, with fingers forming",
    babyDevelopment:
      "Baby is now called a fetus. Fingers and toes are starting to form (though still webbed), and baby has started making small spontaneous movements you can't feel yet.",
    yourBody:
      "This is often peak nausea season for those who experience it. Fatigue can feel overwhelming — your body is doing an enormous amount of work.",
    tip: "Rest when you can and don't feel guilty about it — first-trimester exhaustion is real and temporary.",
    countdown: "32 weeks to go (estimated).",
  },
  {
    week: 9,
    subject: "Week 9: Grape-sized, with all essential organs forming",
    babyDevelopment:
      "All the essential organs have begun to form and are starting to function together. Baby is starting to look more distinctly human, with a more defined head and body.",
    yourBody:
      "Bloating, mild cramping, and continued breast changes are common. If you haven't had your first prenatal visit yet, it's likely coming up soon.",
    tip: "Loose, comfortable clothing can help with early bloating — no need to wait for a visible bump.",
    countdown: "31 weeks to go (estimated).",
  },
  {
    week: 10,
    subject: "Week 10: Kumquat-sized, with tiny nails starting",
    babyDevelopment:
      "Vital organs are formed and beginning to function. Tiny nails and hair follicles are starting to form, and baby's joints are becoming more defined.",
    yourBody:
      "Some people start feeling slightly less nauseated around now, though for others the first trimester symptoms continue in full force.",
    tip: "If nausea is severe and you can't keep fluids down, contact your provider — there are safe treatment options.",
    countdown: "30 weeks to go (estimated).",
  },
  {
    week: 11,
    subject: "Week 11: Fig-sized, with fists that open and close",
    babyDevelopment:
      "Baby can now open and close tiny fists and may even get the hiccups. The head is still large relative to the body, but proportions are starting to even out.",
    yourBody:
      "Your uterus is growing beyond your pelvis now, which for some means the very first hint of a bump. Energy may be slowly starting to return.",
    tip: "This is a common window for first-trimester screening tests — ask your provider what's recommended for you.",
    countdown: "29 weeks to go (estimated).",
  },
  {
    week: 12,
    subject: "Week 12: Lime-sized — nearing the end of the first trimester",
    babyDevelopment:
      "Reflexes are developing — baby's fingers can curl, and toes can curl too. The risk of miscarriage drops significantly after this point.",
    yourBody:
      "Many people start to feel a shift in energy and nausea around the 12-week mark, though it varies widely from person to person.",
    tip: "If you've been holding off on sharing the news, many people choose to do so around now.",
    countdown: "28 weeks to go (estimated).",
  },
  {
    week: 13,
    subject: "Week 13: Lemon-sized — hello, second trimester",
    babyDevelopment:
      "Fingerprints are forming on those tiny fingers. Baby's body is starting to catch up in proportion to the head, and vocal cords are forming.",
    yourBody:
      "Welcome to the second trimester! Many people find this the most comfortable stretch, with nausea easing and energy returning.",
    tip: "A good time to start researching prenatal classes or your birth preferences if that interests you.",
    countdown: "27 weeks to go (estimated).",
  },
  {
    week: 14,
    subject: "Week 14: Peach-sized, with new facial expressions",
    babyDevelopment:
      "Baby can now make facial expressions like squinting and frowning, thanks to developing facial muscles. Fine hair called lanugo is starting to appear on the skin.",
    yourBody:
      "Nausea often eases significantly now. Some people notice their hair and nails growing faster, and skin looking a bit brighter — the so-called \"pregnancy glow.\"",
    tip: "If you were struggling with nausea, this is a good week to rebuild a varied, nutrient-rich diet.",
    countdown: "26 weeks to go (estimated).",
  },
  {
    week: 15,
    subject: "Week 15: Apple-sized, and starting to sense light",
    babyDevelopment:
      "Baby's legs are growing longer than the arms now, and though the eyes are still fused shut, baby can sense light through closed eyelids.",
    yourBody:
      "Your bump is likely becoming more noticeable. Round ligament pain — a quick, sharp ache on the sides of the belly — can start as the uterus grows.",
    tip: "Ask your provider or a scan clinic when your anatomy scan will be scheduled — usually between 18–22 weeks.",
    countdown: "25 weeks to go (estimated).",
  },
  {
    week: 16,
    subject: "Week 16: Avocado-sized, and starting to hear",
    babyDevelopment:
      "Baby's inner ear is developed enough to start sensing your movement and balance. Muscles are strengthening, and the first tiny kicks may begin (though you likely won't feel them yet).",
    yourBody:
      "This is a common week for the first flutter of movement to be felt, especially if this isn't your first pregnancy.",
    tip: "Start paying gentle attention to any new sensations low in your belly — it might be your first \"quickening.\"",
    countdown: "24 weeks to go (estimated).",
  },
  {
    week: 17,
    subject: "Week 17: Pear-sized, and building protective fat",
    babyDevelopment:
      "Baby is starting to build a layer of protective fat under the skin. The umbilical cord is getting thicker and stronger to support baby's growth.",
    yourBody:
      "Your center of gravity is shifting as your bump grows. Some mild back discomfort can start as your posture adjusts.",
    tip: "A supportive pillow between your knees at night can ease growing hip and back discomfort.",
    countdown: "23 weeks to go (estimated).",
  },
  {
    week: 18,
    subject: "Week 18: Bell pepper-sized, with ears in place",
    babyDevelopment:
      "Baby's ears are now in their final position, and hearing is developing further — sounds from outside may start to be perceptible.",
    yourBody:
      "Many people feel their first definite kicks around this week, often described as gentle flutters or little pops.",
    tip: "If you're curious about the sex, an anatomy scan around this time can often reveal it.",
    countdown: "22 weeks to go (estimated).",
  },
  {
    week: 19,
    subject: "Week 19: Tomato-sized, with a protective coating forming",
    babyDevelopment:
      "A waxy, protective coating called vernix is forming on baby's skin to guard against the amniotic fluid. Senses of sight, hearing, taste, and smell are all developing.",
    yourBody:
      "Round ligament pain, mild swelling, and a growing appetite are all common this week as your body works to support baby's rapid growth.",
    tip: "Start incorporating gentle, pregnancy-safe stretches if back or hip discomfort is creeping in.",
    countdown: "21 weeks to go (estimated).",
  },
  {
    week: 20,
    subject: "Week 20: Banana-sized — the halfway point!",
    babyDevelopment:
      "You've reached the halfway mark! Baby is swallowing more amniotic fluid, which helps the digestive system practice and mature.",
    yourBody:
      "Your bump is likely quite noticeable now. Many people have their detailed anatomy ultrasound around this week.",
    tip: "Take a moment to celebrate — halfway there! This is a great week for a bump photo if you're tracking your journey.",
    countdown: "20 weeks to go (estimated).",
  },
  {
    week: 21,
    subject: "Week 21: Carrot-sized, and moving with purpose",
    babyDevelopment:
      "Baby's movements are becoming more coordinated and purposeful. Taste buds are developing further, and baby may respond to flavors in the amniotic fluid.",
    yourBody:
      "Kicks and rolls should be feeling more regular and noticeable now. Stretch marks may start appearing as skin stretches to accommodate your growing bump.",
    tip: "Moisturizing your belly can help with itchiness, even if it won't prevent stretch marks entirely.",
    countdown: "19 weeks to go (estimated).",
  },
  {
    week: 22,
    subject: "Week 22: Spaghetti squash-sized, with fully formed eyebrows",
    babyDevelopment:
      "Baby's eyebrows and eyelids are now fully formed, and the lips are becoming more distinct. Baby's skin is still thin and somewhat translucent.",
    yourBody:
      "You may notice Braxton Hicks contractions starting — mild, irregular tightening of the uterus that's usually nothing to worry about.",
    tip: "If contractions become regular, painful, or frequent, check in with your provider to be safe.",
    countdown: "18 weeks to go (estimated).",
  },
  {
    week: 23,
    subject: "Week 23: Grapefruit-sized, and starting to hear you better",
    babyDevelopment:
      "Baby's hearing continues to sharpen — your voice, heartbeat, and even loud outside noises may now be perceptible.",
    yourBody:
      "Swelling in the feet and ankles can start appearing, especially by the end of the day. Backaches may also become more noticeable as your bump grows.",
    tip: "Try talking or singing to your bump — baby may start recognizing your voice from here on out.",
    countdown: "17 weeks to go (estimated).",
  },
  {
    week: 24,
    subject: "Week 24: Corn-sized — a major viability milestone",
    babyDevelopment:
      "This week marks a significant milestone: baby's lungs are developing branches that will eventually form air sacs, an important step toward viability outside the womb.",
    yourBody:
      "You may be scheduled for a glucose screening test soon to check for gestational diabetes, typically done between 24–28 weeks.",
    tip: "Stay hydrated and keep moving with gentle activity — both can help manage swelling and energy levels.",
    countdown: "16 weeks to go (estimated).",
  },
  {
    week: 25,
    subject: "Week 25: Cauliflower-sized, and practicing to breathe",
    babyDevelopment:
      "Baby is practicing breathing motions, inhaling and exhaling small amounts of amniotic fluid — great training for the lungs.",
    yourBody:
      "You may notice more vivid or frequent dreams, along with continued back discomfort as your bump grows heavier.",
    tip: "A pregnancy support belt can help ease lower back strain during this stage.",
    countdown: "15 weeks to go (estimated).",
  },
  {
    week: 26,
    subject: "Week 26: Lettuce-sized, and opening their eyes",
    babyDevelopment:
      "Baby's eyes are beginning to open for the first time. Baby may also start responding to bright light shone on your belly.",
    yourBody:
      "Leg cramps, especially at night, can become more frequent. Some people also start noticing early signs of Braxton Hicks contractions more often.",
    tip: "Stretching your calves before bed and staying hydrated can help reduce nighttime leg cramps.",
    countdown: "14 weeks to go (estimated).",
  },
  {
    week: 27,
    subject: "Week 27: Cabbage-sized — welcome to the third trimester",
    babyDevelopment:
      "You're entering the third trimester! Baby can now respond to sound and light more distinctly, and brain tissue continues developing rapidly.",
    yourBody:
      "You may start feeling more short of breath as your growing uterus pushes up on your diaphragm. Fatigue can also return as the finish line gets closer.",
    tip: "Sleeping on your side with a pillow between your knees can ease pressure and improve comfort.",
    countdown: "13 weeks to go (estimated).",
  },
  {
    week: 28,
    subject: "Week 28: Eggplant-sized, and starting to blink",
    babyDevelopment:
      "Baby can now blink, and eyelashes have grown in. Baby is also gaining weight steadily now, building up fat stores for after birth.",
    yourBody:
      "This is a common week to start daily kick counts if your provider recommends them. More frequent prenatal visits typically begin now too.",
    tip: "Try the Kick Counter tool on our site to time and log your daily kick-count sessions.",
    countdown: "12 weeks to go (estimated).",
  },
  {
    week: 29,
    subject: "Week 29: Butternut squash-sized, and building muscle",
    babyDevelopment:
      "Baby's muscles and lungs continue maturing quickly, and the head is growing to accommodate a rapidly developing brain.",
    yourBody:
      "Backaches, swelling, and shortness of breath can all intensify as your bump continues growing. Rest breaks become more important.",
    tip: "Elevating your feet when sitting can help reduce swelling in your ankles and feet.",
    countdown: "11 weeks to go (estimated).",
  },
  {
    week: 30,
    subject: "Week 30: Cucumber-sized, with a rapidly developing brain",
    babyDevelopment:
      "Baby's brain is developing at a rapid pace, forming grooves and folds. Baby is also getting noticeably chubbier as fat stores build.",
    yourBody:
      "You may start feeling more Braxton Hicks contractions. Trouble sleeping is common as it becomes harder to find a comfortable position.",
    tip: "A full-body pregnancy pillow can make side-sleeping significantly more comfortable at this stage.",
    countdown: "10 weeks to go (estimated).",
  },
  {
    week: 31,
    subject: "Week 31: Coconut-sized, and turning to check things out",
    babyDevelopment:
      "Baby can now turn its head from side to side and is becoming more responsive to stimuli like light, sound, and touch.",
    yourBody:
      "Frequent urination may return as baby drops lower and presses on your bladder. Braxton Hicks contractions may also become more noticeable.",
    tip: "Start thinking about your hospital bag or birth plan if you haven't already — 31 weeks is a good time to begin.",
    countdown: "9 weeks to go (estimated).",
  },
  {
    week: 32,
    subject: "Week 32: Jicama-sized, and practicing to feed",
    babyDevelopment:
      "Baby is practicing swallowing and breathing motions that will help with feeding after birth. Toenails and fingernails are now fully formed.",
    yourBody:
      "Shortness of breath and heartburn are both common as your uterus takes up more space, pushing on your stomach and lungs.",
    tip: "Eating smaller, more frequent meals can help ease heartburn in these final weeks.",
    countdown: "8 weeks to go (estimated).",
  },
  {
    week: 33,
    subject: "Week 33: Pineapple-sized, and hardening bones",
    babyDevelopment:
      "Baby's bones are hardening, with the exception of the skull, which stays soft and flexible to ease the journey through birth.",
    yourBody:
      "Swelling, back pain, and trouble sleeping often peak around now. Your provider may start seeing you every two weeks instead of monthly.",
    tip: "Gentle prenatal yoga or walking can help ease late-pregnancy aches without overexerting yourself.",
    countdown: "7 weeks to go (estimated).",
  },
  {
    week: 34,
    subject: "Week 34: Cantaloupe-sized, with a maturing nervous system",
    babyDevelopment:
      "Baby's central nervous system continues maturing, and the lungs are nearly fully developed, though still benefit from every extra week inside.",
    yourBody:
      "You may notice your bump \"dropping\" slightly as baby settles lower in preparation for birth. Pelvic pressure can increase.",
    tip: "If you haven't pre-registered at your birth hospital or center, now's a good time.",
    countdown: "6 weeks to go (estimated).",
  },
  {
    week: 35,
    subject: "Week 35: Honeydew-sized, with fully developed kidneys",
    babyDevelopment:
      "Baby's kidneys are now fully developed, and most of the physical development is complete — the remaining weeks are mainly about gaining weight.",
    yourBody:
      "You may be tracking Braxton Hicks contractions more closely now. Frequent bathroom trips and trouble sleeping are both very common.",
    tip: "Review the signs of true labor versus Braxton Hicks with your provider so you feel prepared.",
    countdown: "5 weeks to go (estimated).",
  },
  {
    week: 36,
    subject: "Week 36: Romaine lettuce-sized, and gaining fast",
    babyDevelopment:
      "Baby is gaining roughly an ounce a day at this stage. Baby may also be settling into a head-down position in preparation for birth.",
    yourBody:
      "Weekly prenatal visits typically start now, often including a check for baby's position and your cervix's readiness.",
    tip: "Pack your hospital bag if you haven't already — many people finish this around 36 weeks.",
    countdown: "4 weeks to go (estimated).",
  },
  {
    week: 37,
    subject: "Week 37: Swiss chard-sized — considered early term",
    babyDevelopment:
      "Baby is now considered \"early term.\" Most organs are ready for life outside the womb, though the brain and lungs continue maturing until 39 weeks.",
    yourBody:
      "You may notice more pelvic pressure and possibly your mucus plug passing — a common (though not guaranteed) sign labor is getting closer.",
    tip: "Familiarize yourself with early labor signs so you know when to call your provider.",
    countdown: "3 weeks to go (estimated).",
  },
  {
    week: 38,
    subject: "Week 38: Leek-sized, with a stronger grip",
    babyDevelopment:
      "Baby's grip is getting stronger by the day. Most of the lanugo (fine baby hair) has shed, and baby is nearly ready to make an appearance.",
    yourBody:
      "Braxton Hicks contractions may feel more intense and frequent. Rest as much as you can — labor could start any time from here.",
    tip: "Keep your phone charged and your hospital bag by the door — things can move quickly from here.",
    countdown: "2 weeks to go (estimated).",
  },
  {
    week: 39,
    subject: "Week 39: Mini watermelon-sized — full term",
    babyDevelopment:
      "Congratulations — baby is now considered full term! All major organs are ready for life outside the womb, though growth continues.",
    yourBody:
      "Every day now brings you closer to meeting your baby. Watch for signs of labor: regular contractions, water breaking, or your mucus plug passing.",
    tip: "Try to rest and conserve energy for labor — it's normal to feel a mix of excitement and impatience.",
    countdown: "1 week to go (estimated).",
  },
  {
    week: 40,
    subject: "Week 40: Small pumpkin-sized — any day now!",
    babyDevelopment:
      "Baby is fully developed and ready to meet you. It's completely normal for labor to start anywhere from a couple weeks before to about two weeks after this date.",
    yourBody:
      "If you haven't gone into labor yet, don't worry — many first pregnancies go past the estimated due date. Your provider will discuss next steps if needed.",
    tip: "This is it — trust your body, lean on your support system, and get ready to meet your baby.",
    countdown: "Due date is here — any day now!",
  },
];
