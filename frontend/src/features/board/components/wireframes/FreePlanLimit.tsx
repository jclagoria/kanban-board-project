import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, sectionTitleCss, tabActiveCss } from '@/components/shared/wireframes/_designTokens'

const contentCss: React.CSSProperties = {
  maxWidth: 960, margin: '0 auto', padding: '0 16px',
}
const boardGridCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 24,
}
const boardCardCss: React.CSSProperties = {
  border: '1px solid #aaa', padding: 0, background: '#fff', cursor: 'pointer', overflow: 'hidden',
}
const coverBarCss: React.CSSProperties = { height: 40 }
const boardInfoCss: React.CSSProperties = { padding: 14 }
const boardTitleCss: React.CSSProperties = { fontSize: 15, fontWeight: 600, marginBottom: 4 }
const boardMetaCss: React.CSSProperties = { fontSize: 12, color: '#666' }
const createBtnDisabledCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  padding: '14px', border: '2px dashed #ccc', background: '#f5f5f5',
  fontSize: 15, fontWeight: 600, color: '#999', cursor: 'not-allowed', textAlign: 'center', position: 'relative',
}
const tooltipCss: React.CSSProperties = {
  position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)',
  background: '#333', color: '#fff', padding: '6px 12px', fontSize: 12,
  whiteSpace: 'nowrap', marginBottom: 8,
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
  { color: '#d4f7f0', title: 'Design System', lists: 4, cards: 15 },
  { color: '#f0d4f7', title: 'Roadmap', lists: 3, cards: 6 },
  { color: '#f7f0d4', title: 'Ideas', lists: 2, cards: 9 },
  { color: '#d4e8f7', title: 'Support', lists: 3, cards: 4 },
  { color: '#f7d4e8', title: 'Docs', lists: 2, cards: 11 },
]

export default function FreePlanLimit({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Dashboard (Free Plan at Limit)</RegionLabel>}

      <div style={topBarCss}>
        <div>
          {showStructure && <RegionLabel top={-4} left={0}>Brand</RegionLabel>}
          <span style={{ fontWeight: 700, fontSize: 18 }}>KanbanFlow</span>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ fontSize: 12, border: '1px solid #888', padding: '2px 8px', borderRadius: 4 }}>Free Plan</span>
          <span style={{ fontSize: 14 }}>[J. Smith]</span>
        </div>
      </div>

      <div style={contentCss}>
        <div style={sectionTitleCss}>
          <h1 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>My Boards</h1>
        </div>

        <div style={tabsCss}>
          <button style={tabActiveCss}>Active (10/10)</button>
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

          <div style={{ position: 'relative' }}>
            {showStructure && <RegionLabel top={-8} left={0}>Create Board — Disabled (Quota Reached)</RegionLabel>}
            {showStructure && <RegionLabel top={0} left={80}>Tooltip — Upgrade Prompt</RegionLabel>}
            <div style={createBtnDisabledCss}>
              <div style={tooltipCss}>Upgrade to create more boards.</div>
              + Create Board
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
