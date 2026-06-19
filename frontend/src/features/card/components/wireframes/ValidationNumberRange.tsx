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
const requiredStarCss: React.CSSProperties = { color: '#c00', marginLeft: 2 }
const optionalTagCss: React.CSSProperties = { fontWeight: 400, fontSize: 11, color: '#888', marginLeft: 6 }

export default function ValidationNumberRange({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Validation Error — Number Out of Range</RegionLabel>}
      <div style={paneCss}>
        <div style={headerCss}>
          <span>Card: Q3 Campaign Plan</span>
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
        </div>

        <div style={sectionCss}>
          <div style={sectionTitleCss}>Custom Fields</div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Number — valid, saved</RegionLabel>}
            <label style={labelCss}>Campaign Channel</label>
            <select style={{ ...inputCss, appearance: 'none', background: '#fff' }} defaultValue="email">
              <option value="email">Email</option>
            </select>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Number — out of range error</RegionLabel>}
            <label style={labelCss}>
              Story Points<span style={requiredStarCss}> *</span>
              <span style={optionalTagCss}>(Required)</span>
            </label>
            <div style={{ position: 'relative' }}>
              <input style={inputErrorCss} type="number" defaultValue={50} />
              <span style={errorIconCss}>!</span>
            </div>
            <div style={errorBoxCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Error — Number out of range</RegionLabel>}
              ⚠ Value must be between 1 and 21.
            </div>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Text area — reference field</RegionLabel>}
            <label style={labelCss}>
              Notes
              <span style={optionalTagCss}>(Optional)</span>
            </label>
            <textarea style={{ ...inputCss, resize: 'vertical', minHeight: 56 }} placeholder="Add notes..." />
          </div>
        </div>
      </div>
    </div>
  )
}
