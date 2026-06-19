import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { viewTabsCss } from '@/components/shared/wireframes/_designTokens'

const boardCss: React.CSSProperties = {
  position: 'relative', border: '1px solid #aaa', background: '#fff',
  maxWidth: 720,
}
const barCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 16px', borderBottom: '1px solid #ddd',
  fontSize: 14, fontWeight: 600,
}
const viewTabActiveCss: React.CSSProperties = {
  padding: '4px 12px', border: '1px solid #000', background: '#000', color: '#fff',
  fontSize: 12, cursor: 'pointer',
}
const viewTabCss: React.CSSProperties = {
  padding: '4px 12px', border: '1px solid #ccc', background: '#fff',
  fontSize: 12, cursor: 'pointer',
}
const listsRowCss: React.CSSProperties = {
  display: 'flex', gap: 12, padding: 16, overflowX: 'auto',
}
const listCss: React.CSSProperties = {
  minWidth: 200, background: '#f1f1f1', borderRadius: 4,
  border: '1px solid #ddd',
}
const listTitleCss: React.CSSProperties = {
  padding: '10px 12px', fontSize: 13, fontWeight: 700,
  borderBottom: '1px solid #ddd',
}
const cardFrontCss: React.CSSProperties = {
  background: '#fff', border: '1px solid #ccc', borderRadius: 3,
  margin: '8px 10px', padding: 10,
  position: 'relative',
}
const cardTitleCss: React.CSSProperties = { fontSize: 14, fontWeight: 600, marginBottom: 6 }
const dueBadgeCss: React.CSSProperties = {
  display: 'inline-block', fontSize: 11, color: '#888', marginBottom: 6,
}
const labelPillsCss: React.CSSProperties = { display: 'flex', gap: 4, marginBottom: 6 }
const labelPillCss: React.CSSProperties = {
  padding: '1px 6px', fontSize: 10, fontWeight: 600, borderRadius: 2,
}
const cardFooterCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  fontSize: 12, color: '#888',
}
const avatarCss: React.CSSProperties = {
  width: 22, height: 22, borderRadius: '50%', background: '#ddd',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  fontSize: 10, fontWeight: 700, color: '#666',
}
const noteCss: React.CSSProperties = {
  fontSize: 11, color: '#c00', fontStyle: 'italic', textAlign: 'center',
  padding: '4px 0 8px 0',
}

export default function ViewsKanbanCardFront({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Kanban View — Card Front (CF hidden)</RegionLabel>}
      <div style={boardCss}>
        <div style={barCss}>
          <span>Sprint 42</span>
          <div style={viewTabsCss}>
            <button style={viewTabActiveCss}>Kanban</button>
            <button style={viewTabCss}>Timeline</button>
            <button style={viewTabCss}>Calendar</button>
            <button style={viewTabCss}>Table</button>
          </div>
        </div>

        <div style={listsRowCss}>
          {/* To Do */}
          <div style={listCss}>
            <div style={listTitleCss}>To Do</div>
            <div style={cardFrontCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Card Front — Title, Labels, Due, Avatar, Comments — NO CF</RegionLabel>}
              <div style={cardTitleCss}>Setup CI Pipeline</div>
              <div style={dueBadgeCss}>📅 Aug 20</div>
              <div style={labelPillsCss}>
                <span style={{ ...labelPillCss, background: '#e8f5e9', color: '#2e7d32' }}>Dev</span>
              </div>
              <div style={cardFooterCss}>
                <span style={avatarCss}>B</span>
                <span>💬 2</span>
              </div>
            </div>
          </div>

          {/* In Progress */}
          <div style={listCss}>
            <div style={listTitleCss}>In Progress</div>
            <div style={cardFrontCss}>
              <div style={cardTitleCss}>Q3 Campaign Plan</div>
              <div style={dueBadgeCss}>📅 Sep 30</div>
              <div style={labelPillsCss}>
                <span style={{ ...labelPillCss, background: '#e8f5e9', color: '#2e7d32' }}>Marketing</span>
                <span style={{ ...labelPillCss, background: '#fce4ec', color: '#c62828' }}>Urgent</span>
              </div>
              <div style={cardFooterCss}>
                <span style={avatarCss}>A</span>
                <span>💬 3</span>
              </div>
            </div>
            <div style={cardFrontCss}>
              <div style={cardTitleCss}>Homepage Redesign</div>
              <div style={dueBadgeCss}>📅 Aug 15</div>
              <div style={labelPillsCss}>
                <span style={{ ...labelPillCss, background: '#e3f2fd', color: '#1565c0' }}>Design</span>
              </div>
              <div style={cardFooterCss}>
                <span style={avatarCss}>B</span>
                <span>💬 1</span>
              </div>
            </div>
          </div>

          {/* Review */}
          <div style={listCss}>
            <div style={listTitleCss}>Review</div>
            <div style={cardFrontCss}>
              <div style={cardTitleCss}>API Contract</div>
              <div style={dueBadgeCss}>📅 Sep 1</div>
              <div style={labelPillsCss}>
                <span style={{ ...labelPillCss, background: '#f3e5f5', color: '#7b1fa2' }}>Dev</span>
              </div>
              <div style={cardFooterCss}>
                <span style={avatarCss}>C</span>
                <span>💬 5</span>
              </div>
            </div>
          </div>

          {/* Done */}
          <div style={listCss}>
            <div style={listTitleCss}>Done</div>
            <div style={cardFrontCss}>
              <div style={cardTitleCss}>QA Setup</div>
              <div style={dueBadgeCss}>—</div>
              <div style={labelPillsCss}>
                <span style={{ ...labelPillCss, background: '#fff3e0', color: '#e65100' }}>QA</span>
              </div>
              <div style={cardFooterCss}>
                <span style={avatarCss}>D</span>
                <span>💬 0</span>
              </div>
            </div>
          </div>
        </div>

        <div style={noteCss}>✕ No custom fields on card face</div>
      </div>
    </div>
  )
}
