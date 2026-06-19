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

export default function EmailNotVerified({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Auth Layout (R11 blocked)</RegionLabel>}

      <div style={shellCss}>
        <div style={headerCss}>
          {showStructure && <RegionLabel top={-4} left={0}>Brand / Logo</RegionLabel>}
          <div style={{ fontWeight: 700, fontSize: 20 }}>KanbanFlow</div>
        </div>

        <Card>
          {showStructure && <RegionLabel top={-4} left={0}>Card — Email Not Verified (R11)</RegionLabel>}

          <div style={iconCss}>📬</div>
          <h1 style={{ fontSize: 18, fontWeight: 600, textAlign: 'center', marginBottom: 12 }}>
            Email not verified
          </h1>
          <div style={bodyCss}>
            You must verify your email before resetting your password.
          </div>

          <div style={btnCss}>Send verification email</div>
        </Card>
      </div>
    </div>
  )
}
