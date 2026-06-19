import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, sectionTitleCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd', fontSize: 15, fontWeight: 600,
}
const fieldRowCss: React.CSSProperties = { marginBottom: 18, position: 'relative' }
const labelCss: React.CSSProperties = { display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }
const inputCss: React.CSSProperties = {
  width: '100%', padding: '8px 10px', border: '1px solid #aaa',
  fontSize: 14, boxSizing: 'border-box',
}
const inputErrorCss: React.CSSProperties = { ...inputCss, border: '1px solid #c00', paddingRight: 30 }
const errorIconCss: React.CSSProperties = {
  position: 'absolute', right: 10, top: 8, color: '#c00', fontSize: 16, fontWeight: 700,
}
const errorBoxCss: React.CSSProperties = {
  border: '1px solid #c00', background: '#fff5f5',
  padding: '8px 12px', fontSize: 13, color: '#a00', marginTop: 4,
  position: 'relative',
}
const retryBtnCss: React.CSSProperties = {
  padding: '4px 12px', border: '1px solid #c00', background: '#fff',
  fontSize: 12, fontWeight: 600, cursor: 'pointer', color: '#c00',
}
const optionalTagCss: React.CSSProperties = { fontWeight: 400, fontSize: 11, color: '#888', marginLeft: 6 }

export default function ValidationEmailError({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Validation Error — Invalid Email + Retry</RegionLabel>}
      <div style={paneCss}>
        <div style={headerCss}>
          <span>Card: Q3 Campaign Plan</span>
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
        </div>

        <div style={sectionCss}>
          <div style={sectionTitleCss}>Custom Fields</div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Dropdown — valid reference</RegionLabel>}
            <label style={labelCss}>Campaign Channel</label>
            <select style={{ ...inputCss, appearance: 'none', background: '#fff' }} defaultValue="email">
              <option value="email">Email</option>
            </select>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Email — invalid format [!]</RegionLabel>}
            <label style={labelCss}>
              Client Email
              <span style={optionalTagCss}>(Optional)</span>
            </label>
            <div style={{ position: 'relative' }}>
              <input style={inputErrorCss} type="email" defaultValue="not-an-email" />
              <span style={errorIconCss}>!</span>
            </div>
            <div style={errorBoxCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Error — Invalid email + Retry</RegionLabel>}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>⚠ Please enter a valid email address.</span>
                <button style={retryBtnCss}>Retry</button>
              </div>
            </div>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: URL — invalid format error</RegionLabel>}
            <label style={labelCss}>Portfolio</label>
            <div style={{ position: 'relative' }}>
              <input style={inputErrorCss} type="url" defaultValue="not-a-url" />
              <span style={errorIconCss}>!</span>
            </div>
            <div style={errorBoxCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Error — Invalid URL</RegionLabel>}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>⚠ Please enter a valid URL (include https://).</span>
                <button style={retryBtnCss}>Retry</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
