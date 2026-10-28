export type ProjectKind = "ai" | "apple" | "web" | "learn";

export interface Project {
  name: string;
  lead: string;
  rest: string;
  language: string;
  url: string;
  kinds: ProjectKind[];
}

// Curated from github.com/thegreatalxx. Descriptions match each repo's own.
export const projects: Project[] = [
  {
    name: "conductor",
    lead: "AI integration hub.",
    rest: "25 plugins and 146 tools that connect AI models to services like Gmail, GitHub Actions and Notion.",
    language: "TypeScript",
    url: "https://github.com/useconductor/conductor",
    kinds: ["ai"],
  },
  {
    name: "ARCHITECT",
    lead: "Code quality and security analyzer.",
    rest: "Free and AI-powered.",
    language: "TypeScript",
    url: "https://github.com/thegreatalxx/ARCHITECT",
    kinds: ["ai"],
  },
  {
    name: "mono",
    lead: "Minimalist timer.",
    rest: "Native apps for macOS and iPad.",
    language: "Swift",
    url: "https://github.com/thegreatalxx/Mono-macOS",
    kinds: ["apple"],
  },
  {
    name: "echo-cave",
    lead: "3D sonar game in a single 2,710-byte data: URL.",
    rest: "Built for SHRINK.",
    language: "HTML",
    url: "https://github.com/thegreatalxx/echo-cave",
    kinds: ["web"],
  },
  {
    name: "aether-weather",
    lead: "Minimalist weather app",
    rest: "with a brutalist design.",
    language: "JavaScript",
    url: "https://github.com/thegreatalxx/aether-weather",
    kinds: ["web"],
  },
  {
    name: "exif-dashboard-pro",
    lead: "Photo metadata dashboard.",
    rest: "Pulls EXIF data into stats and GPS maps.",
    language: "Python",
    url: "https://github.com/thegreatalxx/exif-dashboard-pro",
    kinds: ["web"],
  },
  {
    name: "finance",
    lead: "Finance Learn.",
    rest: "Personal finance education.",
    language: "TypeScript",
    url: "https://github.com/thegreatalxx/finance",
    kinds: ["learn"],
  },
  {
    name: "learn-contracts",
    lead: "Solidity teaching contracts",
    rest: "for students.",
    language: "Solidity",
    url: "https://github.com/thegreatalxx/learn-contracts",
    kinds: ["learn"],
  },
];

export const filters: { id: "all" | ProjectKind; label: string }[] = [
  { id: "all", label: "all" },
  { id: "ai", label: "ai" },
  { id: "apple", label: "apple" },
  { id: "web", label: "web" },
  { id: "learn", label: "learning" },
];

export const services = [
  { title: "AI tools", body: "Integrations connecting Claude, GPT-4o and Gemini to everyday services." },
  { title: "Developer utilities", body: "CLI tools, session managers and productivity boosters." },
  { title: "Native apps", body: "Swift apps for Mac, iPad and iPhone." },
  { title: "Experiments", body: "We build weird stuff because it's cool." },
];

export const languages = ["TypeScript", "Swift", "Python", "JavaScript", "HTML", "CSS", "Solidity", "Shell"];
