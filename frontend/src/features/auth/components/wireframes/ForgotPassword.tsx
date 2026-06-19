import { RegionLabel, Card, FieldRow } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss, fieldCss, inputCss, btnCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: 24,
}

const bodyTextCss: React.CSSProperties = {
  fontSize: 14,
  color: '#555',
  lineHeight: 1.5,
  marginBottom: 20,
}

const backCss: React.CSSProperties = {
  textAlign: 'center',
  fontSize: 14,
}

export default function ForgotPassword({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Auth Layout (centered, no nav)</RegionLabel>}

      <div style={shellCss}>
        <div style={headerCss}>
          {showStructure && <RegionLabel top={-4} left={0}>Brand / Logo</RegionLabel>}
          <div style={{ fontWeight: 700, fontSize: 20 }}>KanbanFlow</div>
        </div>

        <Card>
          {showStructure && <RegionLabel top={-4} left={0}>Card — Forgot Password (Step 2: Email form)</RegionLabel>}
          <h1 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Reset your password</h1>

          <div style={bodyTextCss}>
            Enter your email address and we'll send you a link to reset your password.
          </div>

          <FieldRow label="Email address" showStructure={showStructure}>
            <div style={fieldCss}>
              <input type="email" defaultValue="jane@company.com" style={inputCss} readOnly />
            </div>
          </FieldRow>

          <div style={btnCss}>Send reset link</div>

          <div style={backCss}>
            <span style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>
              ← Back to login
            </span>
          </div>
        </Card>
      </div>
    </div>
  )
}
