import { ProjectsContent } from "../../components/ProjectsContent";

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
    const headers: Record<string, string> = {};
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(
      "https://api.github.com/users/thegreatalxx/repos?sort=updated&per_page=100",
      {
        next: { revalidate: 3600 },
        headers,
      }
    );
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch {
    return [];
  }
}

export default async function ProjectsPage() {
  const repos = await getGitHubData();
  return <ProjectsContent repos={repos} />;
}
