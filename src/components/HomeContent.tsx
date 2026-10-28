"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { projects, filters, services, languages, type ProjectKind } from "../data/projects";

const label = "font-mono-brand text-[13px] font-medium tracking-[0.02em] text-[var(--muted)]";
const btn =
  "inline-flex items-center gap-2 min-h-11 px-[18px] font-mono-brand text-sm font-medium border transition-colors";
const btnPrimary = `${btn} bg-[var(--signal)] text-[var(--on-signal)] border-[var(--signal)] hover:border-[var(--fg)]`;
const btnGhost = `${btn} border-[var(--border)] hover:border-[var(--fg)]`;
const row = "grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[220px_minmax(0,1fr)_110px_24px] gap-x-6 gap-y-1 items-baseline py-5";

function SectionHead({ id, title, children }: { id: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap justify-between items-baseline gap-4 border-t border-[var(--border)] pt-6 mb-6">
      <h2 id={id} className="text-[32px] leading-[38px] font-semibold tracking-[-0.02em]">
        {title}
      </h2>
      {children}
    </div>
  );
}

export function HomeContent() {
  const [filter, setFilter] = useState<"all" | ProjectKind>("all");
  const shown = projects.filter((p) => filter === "all" || p.kinds.includes(filter));
  const listing = projects.map((p) => `${p.name}/`);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="top" className="flex-1 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero */}
          <section className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-12 items-end pt-12 pb-18 md:pt-18 md:pb-24">
            <div>
              <span className={label}>toronto, on · software lab</span>
              <h1 className="text-[clamp(36px,6vw,64px)] leading-[1.02] font-semibold tracking-[-0.03em] mt-5 mb-6 text-balance">
                We build AI tools, dev utilities and weird experiments
                <span
                  aria-hidden="true"
                  className="cursor-blink inline-block w-[0.5em] h-[0.13em] ml-[0.08em] bg-[var(--signal)] align-baseline"
                />
              </h1>
              <p className="text-lg leading-7 text-[var(--muted)] max-w-[46ch] mb-8">
                TheAlxLabs is a software lab in Toronto. Integrations that connect models to everyday services,
                native Swift apps, and open-source code you can read.
              </p>
              <div className="flex flex-wrap gap-3">
                <a className={btnPrimary} href="#work">see the work</a>
                <a className={btnGhost} href="https://github.com/thegreatalxx" target="_blank" rel="noopener noreferrer">
                  github ↗
                </a>
              </div>
            </div>

            <div
              role="img"
              aria-label="Terminal listing TheAlxLabs projects"
              className="min-w-0 bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden"
            >
              <div className="flex justify-between px-4 py-2.5 border-b border-[var(--border)]">
                <span className={label}>~/thealxlabs</span>
                <span className={label}>zsh</span>
              </div>
              <pre className="font-mono-brand text-sm leading-[22px] px-4 pt-[18px] pb-[22px] overflow-x-auto">
                <span className="text-[var(--signal-text)]">❯</span> ls{"\n"}
                <span className="text-[var(--muted)] whitespace-pre-wrap">{listing.join("  ")}</span>
                {"\n\n"}
                <span className="text-[var(--signal-text)]">❯</span>{" "}
                <span className="cursor-blink text-[var(--signal)]">▍</span>
              </pre>
            </div>
          </section>

          {/* Work */}
          <section id="work" aria-labelledby="work-h" className="pb-24 scroll-mt-20">
            <SectionHead id="work-h" title="Work">
              <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    id={`f-${f.id}`}
                    type="button"
                    aria-pressed={filter === f.id}
                    onClick={() => setFilter(f.id)}
                    className={`min-h-9 px-3 rounded font-mono-brand text-[13px] font-medium border cursor-pointer transition-colors ${
                      filter === f.id
                        ? "text-[var(--fg)] border-[var(--fg)]"
                        : "text-[var(--muted)] border-[var(--border)] hover:text-[var(--fg)]"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </SectionHead>

            <ul>
              {shown.map((p) => (
                <li key={p.name} className="border-b border-[var(--border)]">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className={`${row} group`}>
                    <span className="font-mono-brand text-[15px] font-medium group-hover:text-[var(--signal-text)]">
                      {p.name}
                    </span>
                    <span className="text-[var(--muted)] min-w-0 col-span-2 row-start-2 md:col-span-1 md:row-start-auto">
                      <b className="text-[var(--fg)] font-medium">{p.lead}</b> {p.rest}
                    </span>
                    <span className="font-mono-brand text-[13px] text-[var(--muted)] text-right">{p.language}</span>
                    <span className="hidden md:block font-mono-brand text-[15px] text-[var(--muted)] text-right group-hover:text-[var(--signal-text)]">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* What we do */}
          <section id="what" aria-labelledby="what-h" className="pb-24">
            <SectionHead id="what-h" title="What we do">
              <span className={label}>everything ships open source</span>
            </SectionHead>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <div key={s.title} className="border-t-2 border-[var(--fg)] pt-4">
                  <h3 className="text-xl leading-7 font-semibold mb-2">{s.title}</h3>
                  <p className="text-[var(--muted)]">{s.body}</p>
                </div>
              ))}
            </div>
            <div aria-label="Languages" className="mt-10 flex flex-wrap gap-2">
              {languages.map((l) => (
                <span key={l} className="font-mono-brand text-[13px] px-2.5 py-1.5 border border-[var(--border)] rounded text-[var(--muted)]">
                  {l}
                </span>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" aria-labelledby="contact-h" className="pb-24">
            <div className="flex flex-wrap justify-between items-end gap-8 border-t border-[var(--border)] pt-12">
              <div>
                <h2 id="contact-h" className="text-[clamp(40px,7vw,72px)] leading-none font-semibold tracking-[-0.03em]">
                  Let&apos;s build something.
                </h2>
                <p className="text-[var(--muted)] mt-4">Have an idea? Want to collaborate?</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a className={btnPrimary} href="https://x.com/thealxlabs" target="_blank" rel="noopener noreferrer">
                  @thealxlabs on X ↗
                </a>
                <a className={btnGhost} href="https://github.com/thegreatalxx" target="_blank" rel="noopener noreferrer">
                  github ↗
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
