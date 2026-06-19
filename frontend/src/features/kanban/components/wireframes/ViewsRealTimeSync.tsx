import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, dividerCss, fieldRowCss, sectionTitleCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd', fontSize: 15, fontWeight: 600,
}
const sectionCss: React.CSSProperties = { padding: '16px 20px', position: 'relative' }
const labelCss: React.CSSProperties = { display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }
const inputCss: React.CSSProperties = {
  width: '100%', padding: '8px 10px', border: '1px solid #aaa',
  fontSize: 14, boxSizing: 'border-box',
}
const stepperCss: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
}
const stepBtnCss: React.CSSProperties = {
  width: 26, height: 26, border: '1px solid #aaa', background: '#fff',
  fontSize: 16, fontWeight: 600, cursor: 'pointer', lineHeight: '22px', textAlign: 'center',
}
const syncIndicatorCss: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 6,
  padding: '4px 10px', border: '1px solid #ccc', background: '#f5fff5',
  fontSize: 12, color: '#060', fontWeight: 600, marginLeft: 8,
  borderRadius: 4,
}
const updatedSelectCss: React.CSSProperties = {
  ...inputCss, appearance: 'none', background: '#f5fff5', border: '1px solid #090',
}

export default function ViewsRealTimeSync({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Detail — Real-Time Sync Indicator</RegionLabel>}
      <div style={paneCss}>
        <div style={headerCss}>
          <span>Card: Q3 Campaign Plan</span>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: '#090' }}>🟢 Live</span>
            <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
          </div>
        </div>

        <div style={sectionCss}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Q3 Campaign Plan</div>
        </div>

        <hr style={dividerCss} />

        <div style={{ ...sectionCss, background: '#fafffa' }}>
          {showStructure && <RegionLabel top={0} left={0}>Custom Fields — updated field highlighted</RegionLabel>}
          <div style={sectionTitleCss}>Custom Fields</div>

          {/* Field updated by another user */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Updated via SSE — green flash</RegionLabel>}
            <label style={labelCss}>Campaign Channel</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <select style={updatedSelectCss} defaultValue="social">
                <option value="email">Email</option>
                <option value="social">Social Media</option>
              </select>
              <span style={syncIndicatorCss}>
                ⟳ Updated by Alice just now
              </span>
            </div>
          </div>

          {/* Unchanged field */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Unchanged — no indicator</RegionLabel>}
            <label style={labelCss}>Story Points</label>
            <div style={stepperCss}>
              <button style={stepBtnCss}>−</button>
              <span style={{ fontSize: 14, fontWeight: 600, minWidth: 24, textAlign: 'center' }}>13</span>
              <button style={stepBtnCss}>+</button>
            </div>
          </div>

          {/* Another updated field */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Updated — checkbox toggled</RegionLabel>}
            <label style={labelCss}>Is Urgent</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" defaultChecked />
              <span style={syncIndicatorCss}>
                ⟳ Updated by Bob just now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
