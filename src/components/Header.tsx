import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-[var(--border)] bg-black/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          thealxlabs
        </Link>

        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-[var(--muted)] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://github.com/thegreatalxx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-[var(--muted)] hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
