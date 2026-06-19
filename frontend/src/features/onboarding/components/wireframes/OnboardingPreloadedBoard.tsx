import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, sectionTitleCss } from '@/components/shared/wireframes/_designTokens'

/* ── Board header ── */
const boardHeaderCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 20px', borderBottom: '1px solid #ddd', fontSize: 13,
}

/* ── Kanban columns ── */
const kanbanCss: React.CSSProperties = {
  display: 'flex', gap: 12, padding: '0 20px 16', overflowX: 'auto',
}
const columnCss: React.CSSProperties = {
  minWidth: 180, maxWidth: 200, background: '#f5f5f5', borderRadius: 4,
  padding: 10, position: 'relative',
}
const colHeaderCss: React.CSSProperties = {
  fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase',
  letterSpacing: '0.5px', color: '#555',
}
const colCountCss: React.CSSProperties = { fontWeight: 400, color: '#999', marginLeft: 4 }
const miniCardCss: React.CSSProperties = {
  background: '#fff', borderRadius: 4, padding: 8, marginBottom: 6,
  border: '1px solid #eee', fontSize: 11, cursor: 'pointer', position: 'relative',
}
const miniCardTitleCss: React.CSSProperties = { fontWeight: 600, marginBottom: 2 }
const miniCardMetaCss: React.CSSProperties = { display: 'flex', gap: 4, alignItems: 'center', fontSize: 10, color: '#888' }
const labelChipCss: React.CSSProperties = {
  display: 'inline-block', fontSize: 9, padding: '1px 4px', borderRadius: 2,
  background: '#e3f2fd', color: '#1565c0', fontWeight: 600,
}
const addColCss: React.CSSProperties = {
  minWidth: 180, maxWidth: 200, border: '1px dashed #ccc', borderRadius: 4,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: 22, color: '#ccc', cursor: 'pointer',
}

/* ── Empty list indicator ── */
const emptyListCss: React.CSSProperties = {
  fontSize: 10, color: '#bbb', textAlign: 'center', padding: 12,
  fontStyle: 'italic',
}

export default function OnboardingPreloadedBoard({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Kanban Board — Sprint Board Template (preloaded)</RegionLabel>}
      <div style={{ ...paneCss, maxWidth: 780 }}>
        <div style={boardHeaderCss}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 12, color: '#888', cursor: 'pointer' }}>◀ All Boards</span>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Sprint Board</span>
            <span style={{ fontSize: 10, color: '#1976d2', background: '#e3f2fd', padding: '1px 4px', borderRadius: 3 }}>Engineering</span>
          </div>
          <span style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13 }}>
            ★ ... 🔔 👤 User
          </span>
        </div>

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Kanban view — 5 columns with sample cards</RegionLabel>}
          <div style={sectionTitleCss}>Board: Sprint Board (5 lists, 2 custom fields, 3 sample cards)</div>

          <div style={kanbanCss}>
            {/* Backlog */}
            <div style={columnCss}>
              <div style={colHeaderCss}>Backlog <span style={colCountCss}>1</span></div>
              <div style={miniCardCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Sample card: Write onboarding spec</RegionLabel>}
                <div style={miniCardTitleCss}>Write onboarding spec</div>
                <div style={miniCardMetaCss}>
                  <span style={labelChipCss}>Docs</span>
                  <span>📋</span>
                </div>
              </div>
            </div>

            {/* To Do */}
            <div style={columnCss}>
              <div style={colHeaderCss}>To Do <span style={colCountCss}>2</span></div>
              <div style={miniCardCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Sample card: Set up CI pipeline</RegionLabel>}
                <div style={miniCardTitleCss}>Set up CI pipeline</div>
                <div style={miniCardMetaCss}>
                  <span style={labelChipCss}>DevOps</span>
                  <span>🚧</span>
                  <span>🛠️</span>
                </div>
              </div>
              <div style={miniCardCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Sample card: Design API contract</RegionLabel>}
                <div style={miniCardTitleCss}>Design API contract</div>
                <div style={miniCardMetaCss}>
                  <span style={labelChipCss}>Backend</span>
                  <span>📐</span>
                </div>
              </div>
            </div>

            {/* In Progress */}
            <div style={columnCss}>
              <div style={colHeaderCss}>In Progress <span style={colCountCss}>0</span></div>
              <div style={emptyListCss}>No cards yet</div>
            </div>

            {/* Review */}
            <div style={columnCss}>
              <div style={colHeaderCss}>Review <span style={colCountCss}>0</span></div>
              <div style={emptyListCss}>No cards yet</div>
            </div>

            {/* Done */}
            <div style={columnCss}>
              <div style={colHeaderCss}>Done <span style={colCountCss}>0</span></div>
              <div style={emptyListCss}>No cards yet</div>
            </div>

            <div style={addColCss}>+</div>
          </div>
        </div>

        <div style={{ ...sectionCss, paddingTop: 4, fontSize: 11, color: '#888', fontStyle: 'italic' }}>
          Template creates: 5 lists • 2 custom fields (Story Points, Sprint) • 3 sample cards.
          Custom fields and labels visible on card fronts. Duplicate board name gets " — Copy" suffix.
        </div>
      </div>
    </div>
  )
}
