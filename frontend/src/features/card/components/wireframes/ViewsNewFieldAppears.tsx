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
const selectCss: React.CSSProperties = {
  ...inputCss, appearance: 'none', background: '#fff',
}
const newFieldCss: React.CSSProperties = {
  padding: '12px 14px', border: '2px solid #090', borderRadius: 4,
  background: '#f5fff5', marginBottom: 16, position: 'relative',
}
const newBadgeCss: React.CSSProperties = {
  display: 'inline-block', padding: '2px 8px', fontSize: 10, fontWeight: 700,
  background: '#090', color: '#fff', borderRadius: 3, marginLeft: 8,
}
const syncTagCss: React.CSSProperties = {
  display: 'inline-block', fontSize: 11, color: '#090', fontWeight: 600,
  marginLeft: 8,
}

export default function ViewsNewFieldAppears({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Detail — New Field Appears via SSE (no refresh)</RegionLabel>}
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

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Custom Fields — new field highlighted</RegionLabel>}
          <div style={sectionTitleCss}>Custom Fields</div>

          {/* Existing fields */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Existing field — unchanged</RegionLabel>}
            <label style={labelCss}>Campaign Channel</label>
            <select style={selectCss} defaultValue="email">
              <option value="email">Email</option>
            </select>
          </div>

          {/* New field that just appeared */}
          <div style={newFieldCss}>
            {showStructure && <RegionLabel top={-2} left={0}>CF: NEW field — appeared via SSE (green border)</RegionLabel>}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
              <label style={{ ...labelCss, marginBottom: 0 }}>Launch Date</label>
              <span style={newBadgeCss}>NEW</span>
              <span style={syncTagCss}>⟳ Added live</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="date" style={{ ...inputCss, width: 'auto' }} />
              <span style={{ fontSize: 12, color: '#090' }}>Appeared without refresh</span>
            </div>
          </div>

          {/* Another existing field */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Existing field — reorder reflected</RegionLabel>}
            <label style={labelCss}>Story Points</label>
            <input style={inputCss} type="number" defaultValue={13} />
          </div>
        </div>
      </div>
    </div>
  )
}
