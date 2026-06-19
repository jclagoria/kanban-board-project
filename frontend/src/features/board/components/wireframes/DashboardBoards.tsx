import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, sectionTitleCss } from '@/components/shared/wireframes/_designTokens'

const contentCss: React.CSSProperties = {
  maxWidth: 800,
  margin: '0 auto',
  padding: '0 16px',
}

const boardGridCss: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gap: 16,
  marginBottom: 24,
}

const boardCardCss: React.CSSProperties = {
  border: '1px solid #aaa',
  padding: 20,
  background: '#fff',
  cursor: 'pointer',
}

const boardIconCss: React.CSSProperties = {
  fontSize: 28,
  marginBottom: 10,
}

const boardTitleCss: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  marginBottom: 4,
}

const boardMetaCss: React.CSSProperties = {
  fontSize: 12,
  color: '#666',
}

const createBtnCss: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  padding: '14px',
  border: '2px dashed #888',
  background: '#fafafa',
  fontSize: 15,
  fontWeight: 600,
  cursor: 'pointer',
  textAlign: 'center',
}

const boards: Array<{ icon: string; title: string; subtitle: string; cards: number; members: number }> = [
  { icon: '📊', title: 'Project Alpha', subtitle: '', cards: 12, members: 3 },
  { icon: '🏃', title: 'Sprint 24', subtitle: '', cards: 8, members: 2 },
  { icon: '📅', title: 'Content Calendar', subtitle: '', cards: 5, members: 1 },
  { icon: '🐛', title: 'Bug Tracker', subtitle: '', cards: 23, members: 4 },
]

export default function DashboardBoards({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Dashboard Layout (with sidebar region)</RegionLabel>}

      <div style={topBarCss}>
        <div>
          {showStructure && <RegionLabel top={-4} left={0}>Brand</RegionLabel>}
          <span style={{ fontWeight: 700, fontSize: 18 }}>KanbanFlow</span>
        </div>
        <div>
          {showStructure && <RegionLabel top={-4} right={0}>User Menu</RegionLabel>}
          <span style={{ fontSize: 14 }}>[J. Smith]</span>
        </div>
      </div>

      <div style={contentCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Content — My Boards Grid</RegionLabel>}

        <h1 style={sectionTitleCss}>My Boards</h1>

        <div style={boardGridCss}>
          {boards.map(board => (
            <div key={board.title} style={boardCardCss}>
              <div style={boardIconCss}>{board.icon}</div>
              <div style={boardTitleCss}>{board.title}</div>
              {board.subtitle && (
                <div style={{ ...boardMetaCss, marginBottom: 4 }}>{board.subtitle}</div>
              )}
              <div style={boardMetaCss}>
                {board.cards} cards &middot; {board.members} 👤
              </div>
            </div>
          ))}
        </div>

        <div style={createBtnCss}>
          + Create New Board
        </div>
      </div>
    </div>
  )
}
