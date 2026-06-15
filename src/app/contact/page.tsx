import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    {
      platform: "Twitter / X",
      handle: "@thealxlabs",
      url: "https://twitter.com/thealxlabs",
    },
    {
      platform: "GitHub",
      handle: "@thegreatalxx",
      url: "https://github.com/thegreatalxx",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ position: "relative", zIndex: 1 }}>
      <Header />
      <main className="flex-1 pt-16">
        <div className="max-w-6xl mx-auto px-6">
          <section className="py-32 sm:py-40">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium">
              Contact
            </span>
            <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05] mt-6">
              Let us talk.
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-xl mt-8 leading-relaxed">
              Open to collaborations, interesting projects, and good
              conversations. Reach out on any platform below.
            </p>
          </section>

          <section className="py-20 border-t border-[var(--border)]">
            <h2 className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium mb-10">
              Reach out
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {contacts.map((c) => (
                <a
                  key={c.platform}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-[var(--border)] bg-[var(--surface)] p-6 hover-subtle group"
                >
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium">
                      {c.platform}
                    </span>
                    <p className="text-base font-medium mt-1">{c.handle}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[var(--muted)] group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </section>

          <section className="py-20 border-t border-[var(--border)]">
            <h2 className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium mb-10">
              FAQ
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
              <div>
                <h3 className="text-sm font-medium mb-2">Do you take client work?</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Not currently. But always happy to chat about ideas and collaborations.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Can I contribute to your projects?</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Yes. All our projects are open source. Fork away.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Where are you based?</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Toronto, Ontario, Canada.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">How do I collaborate?</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Reach out on Twitter or GitHub. We are always open to cool ideas.
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
