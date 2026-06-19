import { RegionLabel, Card } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss, fieldCss, inputCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: 24,
}

const iconCss: React.CSSProperties = {
  fontSize: 40,
  textAlign: 'center',
  marginBottom: 12,
}

const alertBadgeCss: React.CSSProperties = {
  display: 'inline-block',
  border: '1px solid #c00',
  color: '#c00',
  padding: '2px 10px',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: 1,
  marginBottom: 12,
}

const bodyCss: React.CSSProperties = {
  fontSize: 14,
  color: '#555',
  lineHeight: 1.6,
  marginBottom: 20,
}

const dangerBtnCss: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '12px',
  border: '2px solid #c00',
  background: '#c00',
  color: '#fff',
  fontSize: 15,
  fontWeight: 600,
  cursor: 'pointer',
  textAlign: 'center',
  marginBottom: 12,
}

const supportCss: React.CSSProperties = {
  textAlign: 'center',
  fontSize: 13,
  color: '#888',
  marginTop: 16,
}

export default function CompromisedAlert({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative', minHeight: 500 }}>
      {showStructure && <RegionLabel top={0} left={0}>Full-screen — Security Compromise (no shell)</RegionLabel>}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 500 }}>
        <div style={shellCss}>
          <div style={headerCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Brand / Logo</RegionLabel>}
            <div style={{ fontWeight: 700, fontSize: 20 }}>KanbanFlow</div>
          </div>

          <Card>
            {showStructure && <RegionLabel top={-4} left={0}>Card — Security Compromise Alert</RegionLabel>}

            <div style={iconCss}>🚨</div>
            <div style={{ textAlign: 'center' }}>
              <div style={alertBadgeCss}>SECURITY ALERT</div>
            </div>
            <h1 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, textAlign: 'center' }}>
              Your account may have been compromised
            </h1>

            <div style={bodyCss}>
              <strong>What happened:</strong> A security alert was triggered when an attempt to reuse
              an old session token was detected. All active sessions have been terminated as a
              precaution.
            </div>

            <div style={bodyCss}>
              <strong>What you need to do:</strong> Change your password immediately to secure your account.
            </div>

            <div style={{ border: '1px solid #ddd', padding: 16, marginBottom: 20, background: '#fafafa' }}>
              {showStructure && <RegionLabel top={-2} left={0}>Form — Forced Password Change</RegionLabel>}
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Change your password</div>

              <div style={fieldCss}>
                <label style={{ fontSize: 13, fontWeight: 600 }}>New password</label>
                <input type="password" style={inputCss} readOnly />
              </div>
              <div style={fieldCss}>
                <label style={{ fontSize: 13, fontWeight: 600 }}>Confirm new password</label>
                <input type="password" style={inputCss} readOnly />
              </div>

              <div style={dangerBtnCss}>Change password &amp; log in</div>
            </div>

            <div style={supportCss}>
              If you didn't request this, contact{' '}
              <span style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>support@kanbanflow.com</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
