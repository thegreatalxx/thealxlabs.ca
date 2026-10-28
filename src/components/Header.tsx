import Link from "next/link";
import { Mark } from "./Mark";

const navLinks = [
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
        <Link href="/" aria-label="TheAlxLabs home" className="flex items-center gap-2 font-mono-brand text-[15px] font-medium">
          <Mark size={28} blink />
          thealxlabs
        </Link>

        <nav aria-label="Main" className="flex items-center gap-5 font-mono-brand text-[13px] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden sm:inline text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/thegreatalxx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
          >
            github ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
