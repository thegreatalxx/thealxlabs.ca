import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1a1a1a',
      padding: '48px 0',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/logo.png" alt="thealxlabs" width={24} height={24} style={{ objectFit: 'contain' }} />
            <div style={{ fontSize: '14px', fontWeight: '600' }}>thealxlabs</div>
          </Link>
          <div style={{ fontSize: '13px', color: '#666' }}>Toronto, Ontario • 2026</div>
        </div>
        <nav style={{ display: 'flex', gap: '32px' }}>
          <Link href="/projects" style={{ fontSize: '13px', color: '#666' }}>Projects</Link>
          <Link href="/about" style={{ fontSize: '13px', color: '#666' }}>About</Link>
          <Link href="/contact" style={{ fontSize: '13px', color: '#666' }}>Contact</Link>
        </nav>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="https://github.com/thegreatalxx" target="_blank" style={{ fontSize: '12px', color: '#666' }}>GH</a>
          <a href="https://twitter.com/thealxlabs" target="_blank" style={{ fontSize: '12px', color: '#666' }}>X</a>
        </div>
      </div>
      <div style={{
        maxWidth: '1200px',
        margin: '32px auto 0',
        padding: '0 32px',
        fontSize: '12px',
        color: '#444',
      }}>
        © 2026 thealxlabs. Built with Next.js.
      </div>
    </footer>
  );
}