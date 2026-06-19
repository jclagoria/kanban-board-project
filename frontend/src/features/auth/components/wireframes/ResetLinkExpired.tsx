import { RegionLabel, Card } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss, btnCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: 24,
}

const iconCss: React.CSSProperties = {
  fontSize: 36,
  textAlign: 'center',
  marginBottom: 12,
}

const bodyCss: React.CSSProperties = {
  fontSize: 14,
  color: '#555',
  lineHeight: 1.6,
  textAlign: 'center',
  marginBottom: 24,
}

export default function ResetLinkExpired({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Auth Layout (invalid/expired token)</RegionLabel>}

      <div style={shellCss}>
        <div style={headerCss}>
          {showStructure && <RegionLabel top={-4} left={0}>Brand / Logo</RegionLabel>}
          <div style={{ fontWeight: 700, fontSize: 20 }}>KanbanFlow</div>
        </div>

        <Card>
          {showStructure && <RegionLabel top={-4} left={0}>Card — Expired Link Error</RegionLabel>}

          <div style={iconCss}>🔗</div>
          <h1 style={{ fontSize: 18, fontWeight: 600, textAlign: 'center', marginBottom: 12 }}>
            Reset link expired
          </h1>
          <div style={bodyCss}>
            This password reset link has expired (valid for 15 minutes only).
          </div>

          <div style={btnCss}>Request a new reset link</div>
        </Card>
      </div>
    </div>
  )
}
