import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, fieldRowCss, inputCss, sectionTitleCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd',
  fontSize: 15, fontWeight: 600,
}
const labelCss: React.CSSProperties = {
  display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4,
}
const inputErrorCss: React.CSSProperties = {
  ...inputCss, border: '1px solid #c00', paddingRight: 30,
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
const errorIconCss: React.CSSProperties = {
  position: 'absolute', right: 10, top: 8, color: '#c00', fontSize: 16, fontWeight: 700,
}

export default function CardDetailSaveError({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Detail Pane — Save Error State</RegionLabel>}
      <div style={paneCss}>

        <div style={headerCss}>
          <span>Card: Q3 Campaign Plan</span>
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
        </div>

        <div style={sectionCss}>
          <div style={sectionTitleCss}>Custom Fields</div>

          {/* Valid field — reference */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Dropdown — valid, saved</RegionLabel>}
            <label style={labelCss}>Campaign Channel</label>
            <select style={{ ...inputCss, appearance: 'none', background: '#fff' }} defaultValue="email">
              <option value="email">Email</option>
            </select>
          </div>

          {/* Error field */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Email — validation error [!]</RegionLabel>}
            <label style={labelCss}>Client Email</label>
            <div style={{ position: 'relative' }}>
              <input style={inputErrorCss} type="email" defaultValue="not-an-email" />
              <span style={errorIconCss}>!</span>
            </div>
            <div style={errorBoxCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Error — Inline validation</RegionLabel>}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>⚠ Could not save. Please enter a valid email address.</span>
                <button style={retryBtnCss}>Retry</button>
              </div>
            </div>
          </div>

          {/* Network error field */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Number — network error [!]</RegionLabel>}
            <label style={labelCss}>Story Points</label>
            <div style={{ position: 'relative' }}>
              <input style={inputErrorCss} type="number" defaultValue={8} />
              <span style={errorIconCss}>!</span>
            </div>
            <div style={errorBoxCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Error — Network failure</RegionLabel>}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>⚠ Could not save. Please check your connection.</span>
                <button style={retryBtnCss}>Retry</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
