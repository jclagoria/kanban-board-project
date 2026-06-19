'use client'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      height: '100vh', fontFamily: 'system-ui', gap: 16,
    }}>
      <h2 style={{ margin: 0 }}>Something went wrong</h2>
      <p style={{ color: '#888' }}>{error.message}</p>
      <button onClick={() => reset()} style={{ padding: '8px 24px', cursor: 'pointer' }}>
        Try again
      </button>
    </div>
  )
}
