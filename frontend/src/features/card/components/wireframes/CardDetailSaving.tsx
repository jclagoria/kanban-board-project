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
const indicatorCss: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 4,
  fontSize: 12, fontWeight: 600, marginTop: 2,
}

export default function CardDetailSaving({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Detail Pane — Auto-save States</RegionLabel>}
      <div style={paneCss}>

        <div style={headerCss}>
          <span>Card: Q3 Campaign Plan</span>
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
        </div>

        <div style={sectionCss}>
          <div style={sectionTitleCss}>Custom Fields</div>

          {/* Saving indicator */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Number — Saving indicator ⟳</RegionLabel>}
            <label style={labelCss}>Story Points</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input style={{ ...inputCss, width: 120 }} type="number" defaultValue={13} />
              <span style={{ ...indicatorCss, color: '#888' }}>⟳ Saving...</span>
            </div>
          </div>

          {/* Saved success indicator */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Dropdown — Saved ✓</RegionLabel>}
            <label style={labelCss}>Campaign Channel</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative' }}>
              <select style={{ ...inputCss, appearance: 'none', background: '#fff', flex: 1 }} defaultValue="email">
                <option value="email">Email</option>
              </select>
              <span style={{ ...indicatorCss, color: '#090' }}>✓ Saved</span>
            </div>
          </div>

          {/* Idle state — no indicator */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Date — Idle, no indicator</RegionLabel>}
            <label style={labelCss}>Launch Date</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="date" defaultValue="2026-09-01" style={{ ...inputCss, width: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
