import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col items-center justify-center gap-4">
      <h2 className="text-4xl font-bold">Page not found</h2>
      <Link href="/" className="text-gray-400 hover:text-[var(--fg)] transition-colors">
        Go back home
      </Link>
    </div>
  )
}
