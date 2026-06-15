import { HomeContent } from "../components/HomeContent";

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

async function getGitHubData(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/thegreatalxx/repos?sort=updated&per_page=100",
      {
        next: { revalidate: 3600 },
        headers: process.env.GITHUB_TOKEN
          ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
          : {},
      }
    );
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch {
    return [];
  }
}

export default async function Home() {
  const repos = await getGitHubData();
  const featured = repos.slice(0, 6);

  return <HomeContent repos={repos} featured={featured} />;
}
