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

  // Expanded with additional top-ranked US names (per Social Security
  // Administration historical data, the same public dataset referenced by
  // github.com/hamaluik/nomdebebe) to broaden coverage beyond the original
  // curated set.
  { name: "Emma", gender: "girl", origin: "Germanic", meaning: "Universal, whole" },
  { name: "Charlotte", gender: "girl", origin: "French", meaning: "Free" },
  { name: "Ava", gender: "girl", origin: "Latin", meaning: "Life, bird" },
  { name: "Mia", gender: "girl", origin: "Italian", meaning: "Mine, beloved" },
  { name: "Evelyn", gender: "girl", origin: "English", meaning: "Wished-for child" },
  { name: "Harper", gender: "girl", origin: "English", meaning: "Harp player" },
  { name: "Camila", gender: "girl", origin: "Latin", meaning: "Attendant at a religious ceremony" },
  { name: "Gianna", gender: "girl", origin: "Italian", meaning: "God is gracious" },
  { name: "Abigail", gender: "girl", origin: "Hebrew", meaning: "My father's joy" },
  { name: "Ella", gender: "girl", origin: "Germanic", meaning: "Fairy maiden" },
  { name: "Scarlett", gender: "girl", origin: "English", meaning: "Bright red" },
  { name: "Grace", gender: "girl", origin: "Latin", meaning: "Grace, blessing" },
  { name: "Chloe", gender: "girl", origin: "Greek", meaning: "Blooming, fertility" },
  { name: "Penelope", gender: "girl", origin: "Greek", meaning: "Weaver" },
  { name: "Layla", gender: "girl", origin: "Arabic", meaning: "Night, dark beauty" },
  { name: "Riley", gender: "unisex", origin: "Irish", meaning: "Valiant, courageous" },
  { name: "Zoey", gender: "girl", origin: "Greek", meaning: "Life" },
  { name: "Nora", gender: "girl", origin: "Irish", meaning: "Light, honor" },
  { name: "Lily", gender: "girl", origin: "English", meaning: "Lily flower, purity" },
  { name: "Eleanor", gender: "girl", origin: "Greek", meaning: "Light" },
  { name: "Hannah", gender: "girl", origin: "Hebrew", meaning: "Grace, favor" },
  { name: "Lillian", gender: "girl", origin: "Latin", meaning: "Lily flower" },
  { name: "Addison", gender: "girl", origin: "English", meaning: "Child of Adam" },
  { name: "Aubrey", gender: "girl", origin: "English", meaning: "Elf ruler" },
  { name: "Ellie", gender: "girl", origin: "English", meaning: "Bright, shining one" },
  { name: "Natalie", gender: "girl", origin: "Latin", meaning: "Born on Christmas day" },
  { name: "Zoe", gender: "girl", origin: "Greek", meaning: "Life" },
  { name: "Leah", gender: "girl", origin: "Hebrew", meaning: "Weary, delicate" },
  { name: "Hazelynn", gender: "girl", origin: "English", meaning: "Hazel tree, gentle" },
  { name: "Aurora", gender: "girl", origin: "Latin", meaning: "Dawn" },
  { name: "Savannah", gender: "girl", origin: "Spanish", meaning: "Flat tropical grassland" },
  { name: "Audrey", gender: "girl", origin: "English", meaning: "Noble strength" },
  { name: "Brooklyn", gender: "girl", origin: "English", meaning: "Water stream, place name" },
  { name: "Bella", gender: "girl", origin: "Italian", meaning: "Beautiful" },
  { name: "Claire", gender: "girl", origin: "French", meaning: "Clear, bright" },
  { name: "Skyler", gender: "unisex", origin: "Dutch", meaning: "Scholar" },
  { name: "Genesis", gender: "girl", origin: "Greek", meaning: "Origin, beginning" },
  { name: "Naomi", gender: "girl", origin: "Hebrew", meaning: "Pleasantness" },
  { name: "Elena", gender: "girl", origin: "Greek", meaning: "Bright, shining light" },
  { name: "Cora", gender: "girl", origin: "Greek", meaning: "Maiden" },

  { name: "James", gender: "boy", origin: "Hebrew", meaning: "Supplanter" },
  { name: "Benjamin", gender: "boy", origin: "Hebrew", meaning: "Son of the right hand" },
  { name: "Lucas", gender: "boy", origin: "Latin", meaning: "Light-giving, from Lucania" },
  { name: "Mason", gender: "boy", origin: "English", meaning: "Stoneworker" },
  { name: "Ethan", gender: "boy", origin: "Hebrew", meaning: "Strong, firm" },
  { name: "Alexander", gender: "boy", origin: "Greek", meaning: "Defender of the people" },
  { name: "Henry", gender: "boy", origin: "Germanic", meaning: "Ruler of the household" },
  { name: "Jackson", gender: "boy", origin: "English", meaning: "Son of Jack" },
  { name: "Sebastian", gender: "boy", origin: "Greek", meaning: "Venerable, revered" },
  { name: "Aiden", gender: "boy", origin: "Irish", meaning: "Little fire" },
  { name: "Matthew", gender: "boy", origin: "Hebrew", meaning: "Gift of God" },
  { name: "Samuel", gender: "boy", origin: "Hebrew", meaning: "God has heard" },
  { name: "David", gender: "boy", origin: "Hebrew", meaning: "Beloved" },
  { name: "Joseph", gender: "boy", origin: "Hebrew", meaning: "God will add" },
  { name: "Carter", gender: "boy", origin: "English", meaning: "Transporter of goods by cart" },
  { name: "Owen", gender: "boy", origin: "Welsh", meaning: "Young warrior, well-born" },
  { name: "Wyatt", gender: "boy", origin: "English", meaning: "Brave in war" },
  { name: "John", gender: "boy", origin: "Hebrew", meaning: "God is gracious" },
  { name: "Jack", gender: "boy", origin: "English", meaning: "God is gracious" },
  { name: "Luke", gender: "boy", origin: "Greek", meaning: "Light-giving" },
  { name: "Jayden", gender: "boy", origin: "Hebrew", meaning: "God has heard" },
  { name: "Dylan", gender: "boy", origin: "Welsh", meaning: "Son of the sea" },
  { name: "Grayson", gender: "boy", origin: "English", meaning: "Son of the steward" },
  { name: "Levi", gender: "boy", origin: "Hebrew", meaning: "Joined, attached" },
  { name: "Isaac", gender: "boy", origin: "Hebrew", meaning: "He will laugh" },
  { name: "Gabriel", gender: "boy", origin: "Hebrew", meaning: "God is my strength" },
  { name: "Julian", gender: "boy", origin: "Latin", meaning: "Youthful, downy-bearded" },
  { name: "Anthony", gender: "boy", origin: "Latin", meaning: "Priceless, praiseworthy" },
  { name: "Christopher", gender: "boy", origin: "Greek", meaning: "Bearer of Christ" },
  { name: "Andrew", gender: "boy", origin: "Greek", meaning: "Manly, brave" },
  { name: "Joshua", gender: "boy", origin: "Hebrew", meaning: "God is salvation" },
  { name: "Nathan", gender: "boy", origin: "Hebrew", meaning: "He gave" },
  { name: "Caleb", gender: "boy", origin: "Hebrew", meaning: "Whole-hearted, devoted" },
  { name: "Ryan", gender: "boy", origin: "Irish", meaning: "Little king" },
  { name: "Adrian", gender: "boy", origin: "Latin", meaning: "From Hadria, dark one" },
  { name: "Eli", gender: "boy", origin: "Hebrew", meaning: "Ascended, uplifted" },
  { name: "Nolan", gender: "boy", origin: "Irish", meaning: "Champion, noble" },
  { name: "Christian", gender: "boy", origin: "Latin", meaning: "Follower of Christ" },
  { name: "Aaron", gender: "boy", origin: "Hebrew", meaning: "High mountain, exalted" },

  { name: "Charlie", gender: "unisex", origin: "Germanic", meaning: "Free man" },
  { name: "Finley", gender: "unisex", origin: "Irish", meaning: "Fair-haired warrior" },
  { name: "Reese", gender: "unisex", origin: "Welsh", meaning: "Ardor, enthusiasm" },
  { name: "Elliot", gender: "unisex", origin: "Hebrew", meaning: "The Lord is my God" },
  { name: "Avery", gender: "unisex", origin: "English", meaning: "Ruler of the elves" },
  { name: "Peyton", gender: "unisex", origin: "English", meaning: "Fighting man's estate" },
  { name: "Morgan", gender: "unisex", origin: "Welsh", meaning: "Sea-born, great and bright" },
  { name: "Sawyer", gender: "unisex", origin: "English", meaning: "Woodcutter" },
  { name: "Dakota", gender: "unisex", origin: "Sioux", meaning: "Friend, ally" },
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
