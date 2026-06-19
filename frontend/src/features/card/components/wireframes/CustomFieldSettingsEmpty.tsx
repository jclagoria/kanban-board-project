import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss, tabActiveCss, tabInactiveCss, sectionTitleCss, dividerCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd', fontSize: 15, fontWeight: 600,
}
const tabsRowCss: React.CSSProperties = {
  display: 'flex', gap: 2, borderBottom: '1px solid #ccc', padding: '0 20px',
}
const bodyCss: React.CSSProperties = { padding: 24 }
const sectionHeaderCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  marginBottom: 20, position: 'relative',
}
const addBtnCss: React.CSSProperties = {
  padding: '6px 16px', border: '1px solid #888', background: '#fff',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const emptyStateCss: React.CSSProperties = {
  textAlign: 'center', padding: '48px 24px', position: 'relative',
}
const emptyTextCss: React.CSSProperties = { fontSize: 14, color: '#666', marginBottom: 8, lineHeight: 1.5 }
const ctaBtnCss: React.CSSProperties = {
  padding: '10px 24px', background: '#000', color: '#fff', border: 'none',
  fontSize: 14, fontWeight: 600, cursor: 'pointer', marginTop: 12,
}

export default function CustomFieldSettingsEmpty({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Settings Modal — Custom Fields Tab (Empty)</RegionLabel>}
      <div style={shellCss}>
        <div style={headerCss}>
          <span>Board Settings — Sprint 42</span>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>✕</button>
        </div>

        <div style={tabsRowCss}>
          <button style={tabInactiveCss}>General</button>
          <button style={tabInactiveCss}>Members</button>
          <button style={{ ...tabActiveCss }}>Custom Fields</button>
          <button style={tabInactiveCss}>Integrations</button>
          <button style={tabInactiveCss}>Danger</button>
        </div>

        <div style={bodyCss}>
          <div style={sectionHeaderCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Section — Custom Fields List</RegionLabel>}
            <h2 style={sectionTitleCss}>Custom Fields</h2>
            <button style={addBtnCss} disabled>+ Add</button>
          </div>

          <hr style={dividerCss} />

          <div style={emptyStateCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Empty State — No Fields</RegionLabel>}
            <div style={emptyTextCss}>
              <div>No custom fields yet.</div>
              <div>Create your first field to start capturing data specific to your workflow.</div>
            </div>
            <button style={ctaBtnCss}>Create your first field</button>
          </div>
        </div>
      </div>
    </div>
  )
}
