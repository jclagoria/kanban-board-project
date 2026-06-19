import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      height: '100vh', fontFamily: 'system-ui', gap: 16,
    }}>
      <h2 style={{ margin: 0 }}>Page not found</h2>
      <p style={{ color: '#888' }}>This route does not exist yet in the mockup.</p>
      <Link href="/" style={{ color: '#3b82f6' }}>← Back to mockup</Link>
    </div>
  )
}
