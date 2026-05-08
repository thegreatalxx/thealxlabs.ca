import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomeContent } from "../components/HomeContent";
import { Code, Sparkles, Microscope, Globe } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

async function getGitHubData() {
  try {
    const res = await fetch("https://api.github.com/users/thegreatalxx/repos?sort=updated&per_page=100", {
      next: { revalidate: 3600 },
      headers: process.env.GITHUB_TOKEN ? { Authorization: `token ${process.env.GITHUB_TOKEN}` } : {},
    });
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch {
    return [];
  }
}

export default async function Home() {
  const repos = await getGitHubData();
  
  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
  const totalForks = repos.reduce((acc, r) => acc + r.forks_count, 0);
  const languages = [...new Set(repos.map((r) => r.language).filter((lang): lang is string => lang !== null))].slice(0, 8);
  
   const featured = repos.slice(0, 6);

   const services = [
    { icon: Sparkles, title: 'AI Tools', desc: 'Integrations connecting Claude, GPT-4o, and Gemini to everyday services.' },
    { icon: Code, title: 'Developer Utilities', desc: 'CLI tools, session managers, and productivity boosters.' },
    { icon: Globe, title: 'Open Source', desc: 'Everything we build is free and open to the community.' },
    { icon: Microscope, title: 'Experiments', desc: "We build weird stuff because it's cool." },
  ];

  return (
    <HomeContent 
      repos={repos}
      totalStars={totalStars}
      totalForks={totalForks}
      languages={languages}
      featured={featured}
    />
  );
}