import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MapPin } from "lucide-react";

export default function AboutPage() {
  const stack = [
    { category: "Languages", items: ["TypeScript", "Python", "JavaScript"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "PostgreSQL", "Prisma"] },
    { category: "AI", items: ["Claude", "GPT-4o", "Gemini"] },
    { category: "DevOps", items: ["Vercel", "Railway", "Docker"] },
    { category: "Tools", items: ["Cursor", "VS Code", "Git"] },
  ];

  const values = [
    { title: "Ship Fast", desc: "We would rather ship something imperfect than perfect nothing." },
    { title: "Open Source", desc: "Everything we build is free and open to the community." },
    { title: "Type Safety", desc: "TypeScript, always. Type safety matters." },
    { title: "Experiments", desc: "Sometimes we build weird stuff because it is cool." },
  ];

  const communities = [
    { label: "Hack Club", url: "https://hackclub.com" },
    { label: "Dirac App", url: "https://github.com/Dirac-app" },
    { label: "LocalCode", url: "https://github.com/TheLocalCodeTeam" },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ position: "relative", zIndex: 1 }}>
      <Header />
      <main className="flex-1 pt-16">
        <div className="max-w-6xl mx-auto px-6">
          <section className="py-32 sm:py-40">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium">
              About
            </span>
            <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05] mt-6">
              Building in
              <br />
              Toronto, 2026.
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-xl mt-8 leading-relaxed">
              We are a software lab focused on AI tools, developer utilities,
              and open-source experiments. Everything we make is free and open.
            </p>
          </section>

          <section className="py-20 border-t border-[var(--border)]">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium">
              Values
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-4 tracking-tight mb-12">
              What we believe.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <h3 className="text-sm font-medium mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 border-t border-[var(--border)]">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium">
              Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-4 tracking-tight mb-12">
              What we use.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stack.map((s) => (
                <div
                  key={s.category}
                  className="border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <h3 className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium mb-4">
                    {s.category}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {s.items.map((item) => (
                      <span key={item} className="text-sm text-[var(--muted)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 border-t border-[var(--border)]">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium">
              Community
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-4 tracking-tight mb-12">
              Where we hang out.
            </h2>
            <div className="flex flex-wrap gap-3">
              {communities.map((c) => (
                <a
                  key={c.label}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-[var(--border)] text-sm hover:bg-[#111] transition-colors"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </section>

          <section className="py-20 border-t border-[var(--border)]">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-[var(--muted)] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold">Toronto, Ontario</h2>
                <p className="text-sm text-[var(--muted)] mt-1">
                  Eastern Time Zone. Remote-first.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
