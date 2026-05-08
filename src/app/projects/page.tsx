import { ProjectsContent } from "../../components/ProjectsContent";
import { Sparkles, Star, GitFork, Layers } from "lucide-react";

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
    const headers: Record<string, string> = {};
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch("https://api.github.com/users/thegreatalxx/repos?sort=updated&per_page=100", {
      next: { revalidate: 3600 },
      headers,
    });
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch {
    return [];
  }
}

export default async function ProjectsPage() {
  const repos = await getGitHubData();
  
  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
  const languages = [...new Set(repos.map((r) => r.language).filter((lang): lang is string => lang !== null))];
  
  const featured = repos.slice(0, 4);
  const recent = repos.slice(4, 20);

  const highlights = [
    { icon: Sparkles, number: repos.length.toString(), label: 'Projects' },
    { icon: Star, number: totalStars.toString(), label: 'Stars' },
    { icon: GitFork, number: repos.reduce((a, r) => a + r.forks_count, 0).toString(), label: 'Forks' },
    { icon: Layers, number: languages.length.toString(), label: 'Languages' },
  ];

  return (
    <ProjectsContent 
      repos={repos}
      totalStars={totalStars}
      languages={languages}
      featured={featured}
      recent={recent}
    />
  );
}