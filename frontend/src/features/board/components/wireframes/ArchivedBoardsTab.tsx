import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, sectionTitleCss, tabActiveCss, tabInactiveCss } from '@/components/shared/wireframes/_designTokens'

const contentCss: React.CSSProperties = {
  maxWidth: 960, margin: '0 auto', padding: '0 16px',
}
const archivedListCss: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', gap: 8,
}
const archivedRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '12px 16px', border: '1px solid #ddd', background: '#fafafa', position: 'relative',
}
const archivedInfoCss: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12 }
const archivedColorCss: React.CSSProperties = { width: 8, height: 32, borderRadius: 2 }
const archivedNameCss: React.CSSProperties = { fontSize: 14, fontWeight: 600 }
const archivedMetaCss: React.CSSProperties = { fontSize: 12, color: '#888', marginTop: 2 }
const archivedActionsCss: React.CSSProperties = { display: 'flex', gap: 8 }
const archivedBtnCss: React.CSSProperties = {
  padding: '4px 12px', border: '1px solid #888', background: '#fff',
  fontSize: 12, cursor: 'pointer',
}
const deleteBtnCss: React.CSSProperties = {
  ...archivedBtnCss, border: '1px solid #c00', color: '#c00',
}
const archived = [
  { color: '#d4e5f7', name: 'Sprint 23', lists: 3, cards: 18, daysLeft: 2, expiring: true },
  { color: '#f7d4d4', name: 'Old Marketing', lists: 4, cards: 9, daysLeft: 8, expiring: false },
  { color: '#e8d4f7', name: 'Q2 Planning', lists: 2, cards: 5, daysLeft: 14, expiring: false },
]

export default function ArchivedBoardsTab({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Archived Boards Tab</RegionLabel>}
      <div style={topBarCss}>
        <div>
          <span style={{ fontWeight: 700, fontSize: 18 }}>KanbanFlow</span>
        </div>
        <div>
          <span style={{ fontSize: 12, border: '1px solid #888', padding: '2px 8px', borderRadius: 4 }}>Free Plan</span>
          <span style={{ fontSize: 14, marginLeft: 16 }}>[J. Smith]</span>
        </div>
      </div>
      <div style={contentCss}>
        <div style={sectionTitleCss}>
          <h1 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>My Boards</h1>
        </div>
        <div style={{ display: 'flex', gap: 4, marginBottom: 20, borderBottom: '1px solid #ccc' }}>
          <button style={tabInactiveCss}>Active (5)</button>
          <button style={tabActiveCss}>Archived (3/20)</button>
        </div>
        {showStructure && <RegionLabel top={0} left={0}>Archived List — Rows with Actions</RegionLabel>}
        <div style={archivedListCss}>
          {archived.map(b => (
            <div key={b.name} style={archivedRowCss}>
              {b.expiring && showStructure && <RegionLabel top={-2} left={0}>Expiring — 3-day warning badge</RegionLabel>}
              <div style={archivedInfoCss}>
                <div style={{ ...archivedColorCss, background: b.color }} />
                <div>
                  <div style={archivedNameCss}>
                    {b.name}
                    {b.expiring && <span style={{ fontSize: 11, color: '#c00', marginLeft: 8 }}>⚠ Expiring soon</span>}
                  </div>
                  <div style={archivedMetaCss}>{b.lists} lists · {b.cards} cards · {b.daysLeft} days left</div>
                </div>
              </div>
              <div style={archivedActionsCss}>
                <button style={archivedBtnCss}>Restore</button>
                <button style={deleteBtnCss}>Delete permanently</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, fontSize: 12, color: '#888', padding: '8px 0', borderTop: '1px solid #ddd' }}>
          Archived boards are permanently deleted after 15 days
        </div>
      </div>
    </div>
  )
}
