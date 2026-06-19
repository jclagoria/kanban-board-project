import { RegionLabel, Card, FieldRow, ErrorMsg } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss, fieldCss, inputCss, btnCss, linkRowCss, footerCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: 24,
}

const inputErrorCss: React.CSSProperties = {
  ...inputCss,
  border: '2px solid #c00',
  background: '#fff5f5',
}

const attemptBadgeCss: React.CSSProperties = {
  fontSize: 12,
  color: '#a00',
  fontWeight: 600,
  marginTop: 4,
}

export default function LoginInvalidCreds({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Auth Layout</RegionLabel>}

      <div style={shellCss}>
        <div style={headerCss}>
          {showStructure && <RegionLabel top={-4} left={0}>Brand / Logo</RegionLabel>}
          <div style={{ fontWeight: 700, fontSize: 20 }}>KanbanFlow</div>
        </div>

        <Card>
          {showStructure && <RegionLabel top={-4} left={0}>Card — Login Form (Error: Invalid credentials)</RegionLabel>}
          <h1 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24 }}>Welcome back</h1>

          <FieldRow label="Email address" showStructure={showStructure}>
            <div style={fieldCss}>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  defaultValue="jane@company.com"
                  style={inputErrorCss}
                  readOnly
                />
                <span style={{ position: 'absolute', right: 10, top: 10, color: '#c00', fontWeight: 700 }}>✗</span>
              </div>
            </div>
          </FieldRow>

          <FieldRow label="Password" showStructure={showStructure}>
            <div style={fieldCss}>
              <div style={{ position: 'relative' }}>
                <input
                  type="password"
                  defaultValue="●●●●●●●●●●"
                  style={inputErrorCss}
                  readOnly
                />
                <span style={{ position: 'absolute', right: 10, top: 10, color: '#c00', fontWeight: 700 }}>✗</span>
              </div>
              <ErrorMsg showStructure={showStructure}>
                Incorrect email or password
              </ErrorMsg>
              <div style={attemptBadgeCss}>Attempts remaining: 2</div>
            </div>
          </FieldRow>

          <div style={btnCss}>Log in</div>

          <div style={linkRowCss}>
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Forgot your password?
            </span>
          </div>

          <div style={footerCss}>
            Don't have an account?{' '}
            <span style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>
              Sign up
            </span>
          </div>
        </Card>
      </div>
    </div>
  )
}
