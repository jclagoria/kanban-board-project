import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, tabActiveCss, tabInactiveCss } from '@/components/shared/wireframes/_designTokens'

const contentCss: React.CSSProperties = {
  maxWidth: 960, margin: '0 auto', padding: '0 16px',
}
const sectionTitleCss: React.CSSProperties = {
  fontSize: 20, fontWeight: 600, marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
}
const boardGridCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 24,
}
const boardCardCss: React.CSSProperties = {
  border: '1px solid #aaa', padding: 0, background: '#fff', cursor: 'pointer', overflow: 'hidden',
}
const coverBarCss: React.CSSProperties = { height: 40, background: '#d4e5f7' }
const boardInfoCss: React.CSSProperties = { padding: 14 }
const boardTitleCss: React.CSSProperties = { fontSize: 15, fontWeight: 600, marginBottom: 4 }
const boardMetaCss: React.CSSProperties = { fontSize: 12, color: '#666' }
const createBtnCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  padding: '14px', border: '2px dashed #888', background: '#fafafa',
  fontSize: 15, fontWeight: 600, cursor: 'pointer', textAlign: 'center',
}
const tabsCss: React.CSSProperties = {
  display: 'flex', gap: 4, marginBottom: 20, borderBottom: '1px solid #ccc',
}

const boards = [
  { color: '#d4e5f7', title: 'Sprint 24', lists: 3, cards: 12 },
  { color: '#f7d4d4', title: 'Launch Site', lists: 5, cards: 8 },
  { color: '#d4f7d4', title: 'Q3 OKRs', lists: 2, cards: 3 },
  { color: '#f7e8d4', title: 'Bug Tracker', lists: 4, cards: 7 },
  { color: '#e8d4f7', title: 'Research', lists: 1, cards: 0 },
]

export default function BoardDashboardKanban({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Board Dashboard</RegionLabel>}

      <div style={topBarCss}>
        <div>
          {showStructure && <RegionLabel top={-4} left={0}>Brand / Logo</RegionLabel>}
          <span style={{ fontWeight: 700, fontSize: 18 }}>KanbanFlow</span>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {showStructure && <RegionLabel top={-4} right={40}>Plan Badge</RegionLabel>}
          <span style={{ fontSize: 12, border: '1px solid #888', padding: '2px 8px', borderRadius: 4 }}>Free Plan</span>
          {showStructure && <RegionLabel top={-4} right={0}>User Menu</RegionLabel>}
          <span style={{ fontSize: 14 }}>[J. Smith]</span>
        </div>
      </div>

      <div style={contentCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Content — Board Dashboard</RegionLabel>}

        <div style={sectionTitleCss}>
          <h1 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>My Boards</h1>
        </div>

        <div style={tabsCss}>
          {showStructure && <RegionLabel top={-4} left={0}>Tabs — Active / Archived</RegionLabel>}
          <button style={tabActiveCss}>Active (5)</button>
          <button style={tabInactiveCss}>Archived (2)</button>
        </div>

        <div style={boardGridCss}>
          {boards.map(b => (
            <div key={b.title} style={boardCardCss}>
              <div style={{ ...coverBarCss, background: b.color }} />
              <div style={boardInfoCss}>
                <div style={boardTitleCss}>{b.title}</div>
                <div style={boardMetaCss}>{b.lists} lists · {b.cards} cards</div>
              </div>
            </div>
          ))}

          <div style={createBtnCss}>
            + Create Board
          </div>
        </div>
      </div>
    </div>
  )
}
