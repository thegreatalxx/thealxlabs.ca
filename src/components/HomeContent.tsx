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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium">
      {children}
    </span>
  );
}

export function HomeContent({
  repos,
  featured,
}: {
  repos: Repo[];
  featured: Repo[];
}) {
  return (
    <div className="min-h-screen flex flex-col" style={{ position: "relative", zIndex: 1 }}>
      <Header />
      <main className="flex-1 pt-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero */}
          <section className="py-32 sm:py-40">
            <div className="animate-fade-in">
              <SectionLabel>Toronto, 2026</SectionLabel>
            </div>
            <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05] mt-6 animate-fade-in-delay-1">
              We build software
              <br />
              that ships.
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-xl mt-8 leading-relaxed animate-fade-in-delay-2">
              AI tools, developer utilities, and open-source experiments
              from a Toronto-based lab. Everything we make is free and open.
            </p>
            <div className="flex items-center gap-4 mt-10 animate-fade-in-delay-3">
              <a
                href="https://github.com/thegreatalxx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium hover:bg-[#ddd] transition-colors"
              >
                GitHub
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] text-sm hover:bg-[#111] transition-colors"
              >
                View projects
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* What we do */}
          <section className="py-20 border-t border-[var(--border)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <SectionLabel>What we do</SectionLabel>
                <h2 className="text-2xl sm:text-3xl font-semibold mt-4 tracking-tight">
                  Tools for the modern developer.
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium mb-2">AI Integrations</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    Connecting Claude, GPT-4o, and Gemini to everyday services.
                    We make AI useful, not just impressive.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Developer Utilities</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    CLI tools, session managers, and productivity boosters.
                    Built because we needed them ourselves.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Open Source</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    Everything is free and open. Fork it, break it, make it yours.
                    That is how software should be.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          {featured.length > 0 && (
            <section className="py-20 border-t border-[var(--border)]">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <SectionLabel>Featured</SectionLabel>
                  <h2 className="text-2xl sm:text-3xl font-semibold mt-4 tracking-tight">
                    Recent projects.
                  </h2>
                </div>
                <Link
                  href="/projects"
                  className="text-[13px] text-[var(--muted)] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  All projects
                  <ArrowRight size={12} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featured.slice(0, 4).map((repo) => (
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

          {/* CTA */}
          <section className="py-20 border-t border-[var(--border)]">
            <div className="max-w-xl">
              <SectionLabel>Get in touch</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-semibold mt-4 tracking-tight">
                Let us build something.
              </h2>
              <p className="text-[var(--muted)] mt-4 leading-relaxed">
                Have an idea? Want to collaborate? We are always open to
                interesting conversations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-white text-sm font-medium hover:bg-white hover:text-black transition-colors"
              >
                Say hello
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
