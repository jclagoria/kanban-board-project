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
const overlayCss: React.CSSProperties = {
  position: 'absolute', inset: 0, display: 'flex',
  alignItems: 'center', justifyContent: 'center',
  background: 'rgba(0,0,0,0.25)', zIndex: 20,
}
const dialogCss: React.CSSProperties = {
  background: '#fff', border: '1px solid #888',
  padding: 24, minWidth: 360, maxWidth: 420,
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  position: 'relative',
}
const dialogTitleCss: React.CSSProperties = {
  fontSize: 15, fontWeight: 700, marginBottom: 12,
}
const dialogTextCss: React.CSSProperties = {
  fontSize: 13, color: '#444', marginBottom: 20, lineHeight: 1.4,
}
const dialogActionsCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'flex-end', gap: 8,
}
const primaryBtnCss: React.CSSProperties = {
  padding: '8px 16px', background: '#000', color: '#fff',
  border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const secondaryBtnCss: React.CSSProperties = {
  padding: '8px 16px', border: '1px solid #888', background: '#fff',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}

export default function CardDetailUnsavedChanges({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Unsaved Changes — Navigation Guard Dialog</RegionLabel>}
      <div style={{ position: 'relative' }}>
        {/* Background: blurred card detail */}
        <div style={paneCss}>
          <div style={headerCss}>
            <span>Card: Q3 Campaign Plan</span>
            <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
          </div>
          <div style={sectionCss}>
            <div style={sectionTitleCss}>Custom Fields</div>
            <div style={fieldRowCss}>
              <label style={labelCss}>Campaign Channel</label>
              <select style={{ ...inputCss, appearance: 'none', background: '#fff' }} defaultValue="email">
                <option value="email">Email</option>
              </select>
            </div>
            <div style={fieldRowCss}>
              <label style={labelCss}>Story Points</label>
              <input style={inputCss} type="number" defaultValue={13} />
            </div>
          </div>
        </div>

        {/* Overlay dialog */}
        <div style={overlayCss}>
          <div style={dialogCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Dialog — Unsaved Changes</RegionLabel>}
            <div style={dialogTitleCss}>Unsaved changes</div>
            <div style={dialogTextCss}>
              You have unsaved custom field values. If you leave, your changes will be lost.
            </div>
            <div style={dialogActionsCss}>
              <button style={secondaryBtnCss}>Discard</button>
              <button style={primaryBtnCss}>Wait for save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
