import { RegionLabel, Card } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: 24,
}

const alertIconCss: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: '50%',
  border: '2px solid #c00',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  margin: '0 auto 16px',
  color: '#c00',
}

const alertTitleCss: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: 12,
}

const alertBodyCss: React.CSSProperties = {
  fontSize: 14,
  color: '#555',
  textAlign: 'center',
  lineHeight: 1.5,
  marginBottom: 20,
}

const timerBoxCss: React.CSSProperties = {
  border: '1px solid #888',
  padding: '12px 16px',
  textAlign: 'center',
  fontSize: 18,
  fontWeight: 700,
  fontVariantNumeric: 'tabular-nums',
  marginBottom: 20,
  background: '#fafafa',
}

const resetLinkCss: React.CSSProperties = {
  textAlign: 'center',
  fontSize: 14,
}

export default function LoginLocked({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Auth Layout</RegionLabel>}

      <div style={shellCss}>
        <div style={headerCss}>
          {showStructure && <RegionLabel top={-4} left={0}>Brand / Logo</RegionLabel>}
          <div style={{ fontWeight: 700, fontSize: 20 }}>KanbanFlow</div>
        </div>

        <Card>
          {showStructure && <RegionLabel top={-4} left={0}>Card — Account Locked Alert</RegionLabel>}

          <div style={alertIconCss}>🔒</div>
          <div style={alertTitleCss}>Account temporarily locked for security</div>
          <div style={alertBodyCss}>
            Too many failed attempts.<br />
            Try again in 15 minutes.
          </div>

          <div style={{ position: 'relative' }}>
            {showStructure && <RegionLabel top={-2} left={0}>Lockout Countdown Timer</RegionLabel>}
            <div style={timerBoxCss}>⏱ 14:32 remaining</div>
          </div>

          <div style={resetLinkCss}>
            Forgot your password?{' '}
            <span style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>
              Reset it
            </span>
          </div>
        </Card>
      </div>
    </div>
  )
}
