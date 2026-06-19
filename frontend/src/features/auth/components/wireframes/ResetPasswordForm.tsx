import { RegionLabel, Card, FieldRow } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss, fieldCss, inputCss, btnCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: 24,
}

const hintCss: React.CSSProperties = {
  fontSize: 12,
  color: '#555',
  marginTop: 2,
}

export default function ResetPasswordForm({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Auth Layout (reset via email link)</RegionLabel>}

      <div style={shellCss}>
        <div style={headerCss}>
          {showStructure && <RegionLabel top={-4} left={0}>Brand / Logo</RegionLabel>}
          <div style={{ fontWeight: 700, fontSize: 20 }}>KanbanFlow</div>
        </div>

        <Card>
          {showStructure && <RegionLabel top={-4} left={0}>Card — Set New Password (valid token)</RegionLabel>}
          <h1 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20 }}>Set new password</h1>

          <FieldRow label="New password" showStructure={showStructure}>
            <div style={fieldCss}>
              <input type="password" defaultValue="●●●●●●●●●●" style={inputCss} readOnly />
              <div style={hintCss}>ⓘ At least 10 characters</div>
            </div>
          </FieldRow>

          <FieldRow label="Confirm new password" showStructure={showStructure}>
            <div style={fieldCss}>
              <input type="password" defaultValue="●●●●●●●●●●" style={inputCss} readOnly />
            </div>
          </FieldRow>

          <div style={btnCss}>Reset password</div>
        </Card>
      </div>
    </div>
  )
}
