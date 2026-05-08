'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h2 className="text-4xl font-bold">Something went wrong</h2>
      <button
        onClick={reset}
        className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
      >
        Retry
      </button>
    </div>
  )
}
