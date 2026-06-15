"use client";

import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowRight } from "lucide-react";

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

export function ProjectsContent({ repos }: { repos: Repo[] }) {
  const featured = repos.slice(0, 4);
  const rest = repos.slice(4);

  return (
    <div className="min-h-screen flex flex-col" style={{ position: "relative", zIndex: 1 }}>
      <Header />
      <main className="flex-1 pt-16">
        <div className="max-w-6xl mx-auto px-6">
          <section className="py-32 sm:py-40">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium">
              Projects
            </span>
            <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05] mt-6">
              Built in 2026.
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-xl mt-8 leading-relaxed">
              Everything we have built, live from GitHub. Updated every hour.
            </p>
          </section>

          {featured.length > 0 && (
            <section className="py-20 border-t border-[var(--border)]">
              <h2 className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium mb-10">
                Featured
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featured.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-[var(--border)] bg-[var(--surface)] p-6 hover-subtle"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-base font-medium">{repo.name}</h3>
                      {repo.stargazers_count > 0 && (
                        <span className="text-[12px] text-[var(--muted)] shrink-0 ml-4">
                          {repo.stargazers_count} stars
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-4">
                      {repo.description || "No description"}
                    </p>
                    <div className="flex items-center gap-3 text-[12px] text-[var(--muted)]">
                      {repo.language && (
                        <>
                          <span>{repo.language}</span>
                          <span className="text-[#333]">/</span>
                        </>
                      )}
                      <span>
                        Updated{" "}
                        {new Date(repo.updated_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {rest.length > 0 && (
            <section className="py-20 border-t border-[var(--border)]">
              <h2 className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium mb-10">
                All projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rest.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-[var(--border)] bg-[var(--surface)] p-6 hover-subtle"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-medium">{repo.name}</h3>
                      {repo.stargazers_count > 0 && (
                        <span className="text-[12px] text-[var(--muted)] shrink-0 ml-4">
                          {repo.stargazers_count}
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-3">
                      {repo.description || "No description"}
                    </p>
                    <div className="flex items-center gap-3 text-[12px] text-[var(--muted)]">
                      {repo.language && <span>{repo.language}</span>}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          <section className="py-20 border-t border-[var(--border)]">
            <p className="text-[13px] text-[var(--muted)] mb-4">
              View all repositories on GitHub
            </p>
            <a
              href="https://github.com/thegreatalxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:underline"
            >
              GitHub
              <ArrowRight size={14} />
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
