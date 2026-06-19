import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss, sectionTitleCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd', fontSize: 15, fontWeight: 600,
}
const fieldRowCss: React.CSSProperties = { marginBottom: 18, position: 'relative' }
const labelCss: React.CSSProperties = { display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }
const requiredStarCss: React.CSSProperties = { color: '#c00', marginLeft: 2 }
const optionalTagCss: React.CSSProperties = { fontWeight: 400, fontSize: 11, color: '#888', marginLeft: 6 }
const inputCss: React.CSSProperties = {
  width: '100%', padding: '8px 10px', border: '1px solid #aaa',
  fontSize: 14, boxSizing: 'border-box',
}
const selectCss: React.CSSProperties = {
  ...inputCss, appearance: 'none', background: '#fff',
}
const textareaCss: React.CSSProperties = { ...inputCss, resize: 'vertical', minHeight: 56 }

export default function ValidationRequiredIndicators({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Detail — Required * vs Optional indicators</RegionLabel>}
      <div style={paneCss}>
        <div style={headerCss}>
          <span>Card: Q3 Campaign Plan</span>
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
        </div>

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Standard Fields</RegionLabel>}
          <div style={fieldRowCss}>
            <label style={labelCss}>Title</label>
            <span style={{ fontSize: 15 }}>Q3 Campaign Plan</span>
          </div>
        </div>

        <hr style={dividerCss} />

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Custom Fields — Required vs Optional Labels</RegionLabel>}
          <div style={sectionTitleCss}>Custom Fields</div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Dropdown — Required *</RegionLabel>}
            <label style={labelCss}>
              Campaign Channel<span style={requiredStarCss}> *</span>
              <span style={optionalTagCss}>(Required)</span>
            </label>
            <select style={selectCss} defaultValue="">
              <option value="" disabled>— Select Campaign Channel —</option>
            </select>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Number — Required *</RegionLabel>}
            <label style={labelCss}>
              Story Points<span style={requiredStarCss}> *</span>
              <span style={optionalTagCss}>(Required)</span>
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input style={{ ...inputCss, width: 120 }} type="number" defaultValue={8} />
              <span style={{ fontSize: 11, color: '#888' }}>(min: 1, max: 21)</span>
            </div>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Long Text — Optional</RegionLabel>}
            <label style={labelCss}>
              Notes
              <span style={optionalTagCss}>(Optional)</span>
            </label>
            <textarea style={textareaCss} placeholder="Add notes..." />
            <div style={{ fontSize: 11, color: '#ccc', textAlign: 'right', marginTop: 2 }}>0/5000</div>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Checkbox — Optional (no marker)</RegionLabel>}
            <label style={labelCss}>Is Urgent</label>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  )
}
