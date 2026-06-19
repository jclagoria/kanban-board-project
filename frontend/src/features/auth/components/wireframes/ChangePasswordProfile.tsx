import { RegionLabel, FieldRow } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, sectionCss, fieldCss, inputCss, btnCss } from '@/components/shared/wireframes/_designTokens'

const pageCss: React.CSSProperties = {
  maxWidth: 560,
  margin: '0 auto',
  padding: '32px 16px',
}

const breadcrumbCss: React.CSSProperties = {
  fontSize: 13,
  color: '#888',
  marginBottom: 24,
}

const hintCss: React.CSSProperties = {
  fontSize: 12,
  color: '#555',
  marginTop: 2,
}

export default function ChangePasswordProfile({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Dashboard Layout</RegionLabel>}

      <div style={topBarCss}>
        <div>
          {showStructure && <RegionLabel top={-4} left={0}>Brand</RegionLabel>}
          <span style={{ fontWeight: 700, fontSize: 18 }}>KanbanFlow</span>
        </div>
        <div>
          {showStructure && <RegionLabel top={-4} right={0}>User Menu</RegionLabel>}
          <span style={{ fontSize: 14 }}>[J. Smith]</span>
        </div>
      </div>

      <div style={pageCss}>
        {showStructure && <RegionLabel top={-4} left={16}>Content — Settings / Security / Change Password</RegionLabel>}

        <div style={breadcrumbCss}>⚙️ Settings &gt; 🔒 Security &gt; Change password</div>

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={-2} left={0}>Section — Change Password Form</RegionLabel>}
          <h1 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>Change password</h1>

          <FieldRow label="Current password" showStructure={showStructure}>
            <div style={fieldCss}>
              <input type="password" defaultValue="●●●●●●●●●●" style={inputCss} readOnly />
            </div>
          </FieldRow>

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

          <div style={btnCss}>Update password</div>
        </div>
      </div>
    </div>
  )
}
