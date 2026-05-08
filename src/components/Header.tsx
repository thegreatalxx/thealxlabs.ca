import Link from "next/link";

export function Header() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '64px',
      background: 'rgba(0,0,0,0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid #1a1a1a',
      display: 'flex',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '15px', fontWeight: '600', letterSpacing: '-0.02em' }}>thealxlabs</span>
        </Link>
        <nav style={{ display: 'flex', gap: '40px' }}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} style={{ fontSize: '13px', color: '#666', transition: 'color 0.2s' }}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a href="https://github.com/thegreatalxx" target="_blank" style={{ fontSize: '12px', color: '#666' }}>GH</a>
          <a href="https://twitter.com/thealxlabs" target="_blank" style={{ fontSize: '12px', color: '#666' }}>X</a>
        </div>
      </div>
    </header>
  );
}