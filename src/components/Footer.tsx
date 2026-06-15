import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold">thealxlabs</span>
          <span className="text-[13px] text-[var(--muted)]">Toronto, 2026</span>
        </div>

        <nav className="flex items-center gap-6">
          <Link href="/projects" className="text-[13px] text-[var(--muted)] hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-[13px] text-[var(--muted)] hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-[13px] text-[var(--muted)] hover:text-white transition-colors">
            Contact
          </Link>
          <a
            href="https://github.com/thegreatalxx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[var(--muted)] hover:text-white transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
