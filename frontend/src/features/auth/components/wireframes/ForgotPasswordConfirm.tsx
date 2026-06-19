import { RegionLabel, Card } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss } from '@/components/shared/wireframes/_designTokens'

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
  marginBottom: 20,
}

const resendBtnCss: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '12px',
  border: '1px solid #888',
  background: '#f5f5f5',
  fontSize: 14,
  fontWeight: 600,
  cursor: 'pointer',
  textAlign: 'center',
  marginBottom: 4,
}

const rateHintCss: React.CSSProperties = {
  textAlign: 'center',
  fontSize: 12,
  color: '#888',
  marginBottom: 16,
}

const backCss: React.CSSProperties = {
  textAlign: 'center',
  fontSize: 14,
}

export default function ForgotPasswordConfirm({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Auth Layout</RegionLabel>}

      <div style={shellCss}>
        <div style={headerCss}>
          {showStructure && <RegionLabel top={-4} left={0}>Brand / Logo</RegionLabel>}
          <div style={{ fontWeight: 700, fontSize: 20 }}>KanbanFlow</div>
        </div>

        <Card>
          {showStructure && <RegionLabel top={-4} left={0}>Card — Confirmation (Step 3: same response regardless of email existence)</RegionLabel>}

          <div style={iconCss}>✅</div>
          <h1 style={{ fontSize: 18, fontWeight: 600, textAlign: 'center', marginBottom: 12 }}>
            Check your email
          </h1>
          <div style={bodyCss}>
            If an account exists for <strong>jane@company.com</strong>, you'll receive a password reset link shortly.
          </div>
          <div style={bodyCss}>
            Didn't receive it? Check your spam folder.
          </div>

          {showStructure && <RegionLabel top={-2} left={0}>Resend — Rate limited: 3 req/hour per email (R8)</RegionLabel>}
          <div style={resendBtnCss}>Resend email</div>
          <div style={rateHintCss}>0 / 3 requests used this hour</div>

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
