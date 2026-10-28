import Link from "next/link";
import { Mark } from "./Mark";

const links = [
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
  { href: "/privacy", label: "privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono-brand text-[13px] text-[var(--muted)]">
        <div className="flex items-center gap-3">
          <Mark size={20} />
          <span>© {new Date().getFullYear()} thealxlabs · toronto</span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--fg)] transition-colors">
              {l.label}
            </Link>
          ))}
          <a href="https://github.com/thegreatalxx" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--fg)] transition-colors">
            github ↗
          </a>
          <a href="https://x.com/thealxlabs" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--fg)] transition-colors">
            x ↗
          </a>
        </nav>
      </div>
    </footer>
  );
}
