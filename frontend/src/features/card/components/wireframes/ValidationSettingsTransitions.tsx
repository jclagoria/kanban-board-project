import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'

const shellCss: React.CSSProperties = {
  position: 'relative', border: '1px solid #aaa', background: '#fff',
  maxWidth: 720,
}
const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd', fontSize: 15, fontWeight: 600,
}
const tabsRowCss: React.CSSProperties = {
  display: 'flex', gap: 2, borderBottom: '1px solid #ccc', padding: '0 20px',
}
const tabActiveCss: React.CSSProperties = {
  padding: '8px 16px', border: '1px solid #ccc', borderBottom: '2px solid #000',
  background: '#fff', fontWeight: 600, fontSize: 13, cursor: 'pointer',
}
const tabInactiveCss: React.CSSProperties = {
  padding: '8px 16px', border: '1px solid transparent', borderBottom: '1px solid #ccc',
  background: 'transparent', fontSize: 13, cursor: 'pointer', color: '#666',
}
const bodyCss: React.CSSProperties = { padding: 24 }
const sectionTitleCss: React.CSSProperties = {
  fontSize: 16, fontWeight: 600, margin: 0, marginBottom: 8,
}
const descCss: React.CSSProperties = {
  fontSize: 13, color: '#555', marginBottom: 20, lineHeight: 1.4,
}
const tableCss: React.CSSProperties = {
  width: '100%', borderCollapse: 'collapse', fontSize: 13,
  border: '1px solid #ddd',
}
const thCss: React.CSSProperties = {
  textAlign: 'left', padding: '10px 12px', fontWeight: 600,
  borderBottom: '1px solid #ccc', background: '#f9f9f9', fontSize: 12,
}
const tdCss: React.CSSProperties = {
  padding: '10px 12px', borderBottom: '1px solid #eee',
}
const addBtnCss: React.CSSProperties = {
  padding: '6px 16px', border: '1px solid #888', background: '#fff',
  fontSize: 13, fontWeight: 600, cursor: 'pointer', marginTop: 16,
}
const emptyRowCss: React.CSSProperties = {
  color: '#bbb', fontStyle: 'italic', fontSize: 12,
}

export default function ValidationSettingsTransitions({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Board Settings — Transitions Tab (Required Fields)</RegionLabel>}
      <div style={shellCss}>
        <div style={headerCss}>
          <span>Board Settings — Sprint 42</span>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>✕</button>
        </div>

        <div style={tabsRowCss}>
          <button style={tabInactiveCss}>General</button>
          <button style={tabInactiveCss}>Members</button>
          <button style={tabInactiveCss}>Custom Fields</button>
          <button style={tabActiveCss}>Transitions</button>
          <button style={tabInactiveCss}>Danger</button>
        </div>

        <div style={bodyCss}>
          {showStructure && <RegionLabel top={0} left={0}>Required Fields on List Transitions</RegionLabel>}
          <h2 style={sectionTitleCss}>Required Fields on List Transitions</h2>
          <div style={descCss}>
            When moving cards to these lists, the following custom fields must be filled.
          </div>

          <table style={tableCss}>
            <thead>
              <tr>
                <th style={thCss}>Target List</th>
                <th style={thCss}>Required Fields</th>
                <th style={{ ...thCss, width: 60 }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tdCss, fontWeight: 600 }}>In Progress</td>
                <td style={tdCss}>Story Points, Priority, Campaign Channel</td>
                <td style={tdCss}><button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#999' }}>✕</button></td>
              </tr>
              <tr>
                <td style={{ ...tdCss, fontWeight: 600 }}>Review</td>
                <td style={tdCss}>Story Points, Priority</td>
                <td style={tdCss}><button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#999' }}>✕</button></td>
              </tr>
              <tr>
                <td style={{ ...tdCss, fontWeight: 600 }}>Done</td>
                <td style={tdCss}>Story Points</td>
                <td style={tdCss}><button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#999' }}>✕</button></td>
              </tr>
              <tr>
                <td style={tdCss}><span style={emptyRowCss}>(none)</span></td>
                <td style={tdCss}><span style={emptyRowCss}>—</span></td>
                <td style={tdCss}></td>
              </tr>
            </tbody>
          </table>

          <button style={addBtnCss}>+ Add rule</button>
        </div>
      </div>
    </div>
  )
}
