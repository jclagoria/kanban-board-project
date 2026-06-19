import { RegionLabel, Card, FieldRow, ErrorMsg } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss, fieldCss, inputCss, btnCss, footerCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: 24,
}

const inputErrorCss: React.CSSProperties = {
  ...inputCss,
  border: '2px solid #c00',
  background: '#fff5f5',
}

const checkboxRowCss: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginBottom: 16,
}

const orRowCss: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  margin: '16px 0',
  color: '#888',
  fontSize: 13,
}

const orRowLineCss: React.CSSProperties = {
  flex: 1,
  height: 1,
  background: '#ccc',
}

const socialBtnCss: React.CSSProperties = {
  flex: 1,
  padding: '10px',
  border: '1px solid #ccc',
  background: '#fafafa',
  fontSize: 13,
  textAlign: 'center',
  color: '#999',
  cursor: 'not-allowed',
}

export default function RegisterPwdTooCommon({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Auth Layout</RegionLabel>}

      <div style={shellCss}>
        <div style={headerCss}>
          {showStructure && <RegionLabel top={-4} left={0}>Brand / Logo</RegionLabel>}
          <div style={{ fontWeight: 700, fontSize: 20 }}>KanbanFlow</div>
        </div>

        <Card>
          {showStructure && <RegionLabel top={-4} left={0}>Card — Registration Form (Error: Pwd too common)</RegionLabel>}
          <h1 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24 }}>Create your account</h1>

          <FieldRow label="Full name" showStructure={showStructure}>
            <div style={fieldCss}>
              <input type="text" placeholder="e.g., Jane Smith" style={inputCss} readOnly />
            </div>
          </FieldRow>

          <FieldRow label="Email address" showStructure={showStructure}>
            <div style={fieldCss}>
              <input type="email" placeholder="jane@company.com" style={inputCss} readOnly />
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
                This password is too common. Choose a more secure one.
              </ErrorMsg>
            </div>
          </FieldRow>

          <FieldRow label="Confirm password" showStructure={showStructure}>
            <div style={fieldCss}>
              <input type="password" defaultValue="●●●●●●●●●●" style={inputCss} readOnly />
            </div>
          </FieldRow>

          <FieldRow label="Company (optional)" showStructure={showStructure}>
            <div style={fieldCss}>
              <input type="text" placeholder="Acme Corp" style={inputCss} readOnly />
            </div>
          </FieldRow>

          <div style={checkboxRowCss}>
            <input type="checkbox" />
            <span style={{ fontSize: 13 }}>I agree to the Terms of Service and Privacy Policy</span>
          </div>

          <div style={btnCss}>Create account</div>

          <div style={orRowCss}>
            <div style={orRowLineCss} />
            <span>or continue with</span>
            <div style={orRowLineCss} />
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            {['Google', 'GitHub', 'Apple'].map(provider => (
              <div key={provider} style={socialBtnCss}>
                {provider}
                <div style={{ fontSize: 10 }}>coming soon</div>
              </div>
            ))}
          </div>

          <div style={footerCss}>
            Already have an account?{' '}
            <span style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>Log in</span>
          </div>
        </Card>
      </div>
    </div>
  )
}
