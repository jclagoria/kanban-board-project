import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, boardHeaderCss, boardNameCss, visibilityBadgeCss, actionBtnCss, viewTabCss, viewTabActiveCss, bottomBarCss } from '@/components/shared/wireframes/_designTokens'

const actionsCss: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 8 }
const viewTabsCss: React.CSSProperties = {
  display: 'flex', gap: 4, padding: '8px 20px', borderBottom: '1px solid #ccc',
}
const navBarCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '8px 20px',
}
const navBtnCss: React.CSSProperties = {
  padding: '4px 10px', border: '1px solid #aaa', background: '#fff',
  fontSize: 12, cursor: 'pointer',
}
const todayBtnCss: React.CSSProperties = {
  padding: '4px 10px', border: '1px solid #000', background: '#fff',
  fontSize: 12, fontWeight: 600, cursor: 'pointer',
}
const granularityToggleCss: React.CSSProperties = { display: 'flex', gap: 2, marginLeft: 12 }
const granularityActiveCss: React.CSSProperties = {
  padding: '4px 8px', background: '#000', color: '#fff', fontSize: 11, cursor: 'pointer', border: 'none',
}
const granularityInactiveCss: React.CSSProperties = {
  padding: '4px 8px', background: '#fff', color: '#555', fontSize: 11, cursor: 'pointer', border: '1px solid #ccc',
}
const emptyMessageCss: React.CSSProperties = {
  margin: '24px 20px 0',
  padding: '24px', border: '2px dashed #ccc',
  textAlign: 'center', background: '#fafafa',
}
const emptyIconCss: React.CSSProperties = { fontSize: 32, marginBottom: 8, color: '#aaa' }
const emptyTitleCss: React.CSSProperties = { fontSize: 16, fontWeight: 600, color: '#555', marginBottom: 4 }
const emptyDescCss: React.CSSProperties = { fontSize: 13, color: '#888' }
const unscheduledSectionCss: React.CSSProperties = {
  margin: '16px 20px 20px', border: '1px solid #ccc', background: '#fafafa',
}
const unscheduledHeaderCss: React.CSSProperties = {
  padding: '8px 12px', borderBottom: '1px solid #ccc',
  fontSize: 13, fontWeight: 600, background: '#eee', cursor: 'pointer',
}
const unscheduledRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '8px 12px', borderBottom: '1px solid #eee', fontSize: 13,
}

const allCards = ['Card A', 'Card B', 'Card C', 'Research notes', 'Design mockups']

export default function TimelineViewEmpty({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Board Timeline View (Empty State)</RegionLabel>}

      <div style={topBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Board Top Bar — Name + Visibility + Actions</RegionLabel>}
        <div style={boardHeaderCss}>
          <div style={{ width: 12, height: 12, background: '#f7d4d4', border: '1px solid #888' }} />
          <span style={boardNameCss}>Launch Site</span>
          <span style={visibilityBadgeCss}>Private</span>
        </div>
        <div style={actionsCss}>
          <button style={actionBtnCss}>Share</button>
          <button style={actionBtnCss}>···</button>
        </div>
      </div>

      <div style={viewTabsCss}>
        {showStructure && <RegionLabel top={-4} left={0}>View Switcher</RegionLabel>}
        <button style={viewTabCss}>Kanban</button>
        <button style={viewTabActiveCss}>Timeline</button>
        <button style={viewTabCss}>Calendar</button>
        <button style={viewTabCss}>Table</button>
      </div>

      <div style={navBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Timeline Navigation — Prev/Next + Date Range + Today + Granularity Toggle</RegionLabel>}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={navBtnCss}>◀ Prev</button>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Jun 2026 — Jul 2026</span>
          <button style={navBtnCss}>Next ▶</button>
          <button style={todayBtnCss}>Today</button>
          <div style={granularityToggleCss}>
            <button style={granularityActiveCss}>Week</button>
            <button style={granularityInactiveCss}>Month</button>
          </div>
        </div>
      </div>

      <div style={emptyMessageCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Empty State — No Dated Cards</RegionLabel>}
        <div style={emptyIconCss}>📅</div>
        <div style={emptyTitleCss}>No cards with dates</div>
        <div style={emptyDescCss}>
          Add dates to cards to see them on the timeline
        </div>
      </div>

      <div style={unscheduledSectionCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Unscheduled Cards Section — All Cards Listed</RegionLabel>}
        <div style={unscheduledHeaderCss}>
          ▼ Unscheduled (5)
        </div>
        {allCards.map((c, i) => (
          <div key={i} style={unscheduledRowCss}>
            <span>□ {c}</span>
            <button style={actionBtnCss}>Add dates</button>
          </div>
        ))}
      </div>

      <div style={bottomBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Bottom Bar — Card Count</RegionLabel>}
        <span>5 cards (all unscheduled)</span>
        <span>Board context preserved</span>
      </div>
    </div>
  )
}
