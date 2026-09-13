export type NameGender = "girl" | "boy" | "unisex";

export interface BabyName {
  name: string;
  gender: NameGender;
  origin: string;
  meaning: string;
}

export const BABY_NAMES: BabyName[] = [
  { name: "Olivia", gender: "girl", origin: "Latin", meaning: "Olive tree" },
  { name: "Amelia", gender: "girl", origin: "Germanic", meaning: "Work, industrious" },
  { name: "Sophia", gender: "girl", origin: "Greek", meaning: "Wisdom" },
  { name: "Isabella", gender: "girl", origin: "Hebrew", meaning: "Devoted to God" },
  { name: "Luna", gender: "girl", origin: "Latin", meaning: "Moon" },
  { name: "Aria", gender: "girl", origin: "Italian", meaning: "Air, melody" },
  { name: "Willow", gender: "girl", origin: "English", meaning: "Willow tree, grace" },
  { name: "Nova", gender: "girl", origin: "Latin", meaning: "New" },
  { name: "Hazel", gender: "girl", origin: "English", meaning: "The hazelnut tree" },
  { name: "Violet", gender: "girl", origin: "Latin", meaning: "Purple flower" },
  { name: "Maya", gender: "girl", origin: "Sanskrit", meaning: "Illusion, dream" },
  { name: "Clara", gender: "girl", origin: "Latin", meaning: "Clear, bright" },
  { name: "Freya", gender: "girl", origin: "Norse", meaning: "Lady, goddess of love" },
  { name: "Ivy", gender: "girl", origin: "English", meaning: "Faithfulness" },
  { name: "Stella", gender: "girl", origin: "Latin", meaning: "Star" },
  { name: "Liam", gender: "boy", origin: "Irish", meaning: "Strong-willed warrior" },
  { name: "Noah", gender: "boy", origin: "Hebrew", meaning: "Rest, comfort" },
  { name: "Oliver", gender: "boy", origin: "Latin", meaning: "Olive tree" },
  { name: "Elijah", gender: "boy", origin: "Hebrew", meaning: "My God is Yahweh" },
  { name: "Theodore", gender: "boy", origin: "Greek", meaning: "Gift of God" },
  { name: "Ezra", gender: "boy", origin: "Hebrew", meaning: "Help" },
  { name: "Atlas", gender: "boy", origin: "Greek", meaning: "Enduring, to carry" },
  { name: "Leo", gender: "boy", origin: "Latin", meaning: "Lion" },
  { name: "Silas", gender: "boy", origin: "Latin", meaning: "Forest, woods" },
  { name: "Jasper", gender: "boy", origin: "Persian", meaning: "Treasurer, precious stone" },
  { name: "Miles", gender: "boy", origin: "Latin", meaning: "Soldier" },
  { name: "August", gender: "boy", origin: "Latin", meaning: "Magnificent, revered" },
  { name: "Felix", gender: "boy", origin: "Latin", meaning: "Happy, fortunate" },
  { name: "Rowan", gender: "unisex", origin: "Gaelic", meaning: "Little redhead, rowan tree" },
  { name: "River", gender: "unisex", origin: "English", meaning: "Flowing water" },
  { name: "Sage", gender: "unisex", origin: "Latin", meaning: "Wise, herb" },
  { name: "Phoenix", gender: "unisex", origin: "Greek", meaning: "Mythical bird, rebirth" },
  { name: "Emerson", gender: "unisex", origin: "English", meaning: "Son of Emery" },
  { name: "Quinn", gender: "unisex", origin: "Irish", meaning: "Wise, intelligent" },
  { name: "Skylar", gender: "unisex", origin: "Dutch", meaning: "Scholar" },
];

export function filterNames(gender: NameGender | "all", letter: string): BabyName[] {
  return BABY_NAMES.filter((n) => {
    const genderMatch = gender === "all" || n.gender === gender;
    const letterMatch = !letter || n.name.toLowerCase().startsWith(letter.toLowerCase());
    return genderMatch && letterMatch;
  });
}

export function randomName(gender: NameGender | "all"): BabyName {
  const pool = gender === "all" ? BABY_NAMES : BABY_NAMES.filter((n) => n.gender === gender);
  return pool[Math.floor(Math.random() * pool.length)];
}
