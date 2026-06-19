import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, boardHeaderCss, boardNameCss, visibilityBadgeCss, actionBtnCss, viewTabCss, viewTabActiveCss, bottomBarCss } from '@/components/shared/wireframes/_designTokens'

const actionsCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8,
}
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
const granularityToggleCss: React.CSSProperties = {
  display: 'flex', gap: 2, marginLeft: 12,
}
const granularityActiveCss: React.CSSProperties = {
  padding: '4px 8px', background: '#000', color: '#fff', fontSize: 11, cursor: 'pointer', border: 'none',
}
const granularityInactiveCss: React.CSSProperties = {
  padding: '4px 8px', background: '#fff', color: '#555', fontSize: 11, cursor: 'pointer', border: '1px solid #ccc',
}
const timelineGridCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
  borderTop: '1px solid #ccc', borderLeft: '1px solid #ccc',
  margin: '0 20px',
}
const weekHeaderCss: React.CSSProperties = {
  padding: '6px 8px', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc',
  fontSize: 12, fontWeight: 600, background: '#fafafa',
}
const weekColCss: React.CSSProperties = {
  borderRight: '1px solid #ccc', minHeight: 160,
  position: 'relative', padding: '4px',
}
const cardBarCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', padding: '0 6px',
  fontSize: 11, fontWeight: 600, color: '#fff',
  borderRadius: 3, height: 22, marginBottom: 4,
  whiteSpace: 'nowrap', overflow: 'hidden', cursor: 'pointer',
}
const todayMarkerCss: React.CSSProperties = {
  borderTop: '2px solid #c00', marginTop: 8, paddingTop: 4,
  fontSize: 10, color: '#c00', fontWeight: 600,
}
const unscheduledSectionCss: React.CSSProperties = {
  margin: '16px 20px 20px',
  border: '1px solid #ccc', background: '#fafafa',
}
const unscheduledHeaderCss: React.CSSProperties = {
  padding: '8px 12px', borderBottom: '1px solid #ccc',
  fontSize: 13, fontWeight: 600, background: '#eee',
  cursor: 'pointer',
}
const unscheduledRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '8px 12px', borderBottom: '1px solid #eee',
  fontSize: 13,
}

const cards = [
  { title: 'Design API', start: 'Week 25', due: 'Week 26', color: '#4a90d9' },
  { title: 'FE setup', start: 'Week 26', due: 'Week 27', color: '#7b61ff' },
  { title: 'Auth module', start: 'Week 25', due: 'Week 28', color: '#50b86c' },
  { title: 'Tests', start: 'Week 27', due: 'Week 29', color: '#e8a23d' },
]

const unscheduledCards = [
  'Card C',
  'Write docs',
  'Design review',
]

export default function TimelineViewPopulated({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Board Timeline View (Populated)</RegionLabel>}

      <div style={topBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Board Top Bar — Name + Visibility + Actions</RegionLabel>}
        <div style={boardHeaderCss}>
          <div style={{ width: 12, height: 12, background: '#d4e5f7', border: '1px solid #888' }} />
          <span style={boardNameCss}>Sprint 24</span>
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

      <div style={{ position: 'relative', margin: '0 20px' }}>
        {showStructure && <RegionLabel top={-4} left={0}>Timeline Grid — Week Columns with Card Bars</RegionLabel>}
        <div style={timelineGridCss}>
          {['Week 25', 'Week 26', 'Week 27', 'Week 28', 'Week 29'].map(w => (
            <div key={w} style={weekHeaderCss}>{w}</div>
          ))}
          {['Week 25', 'Week 26', 'Week 27', 'Week 28', 'Week 29'].map((w, wi) => (
            <div key={w} style={{ ...weekColCss, background: wi % 2 === 0 ? '#fff' : '#f9f9f9' }}>
              {cards
                .filter(c => {
                  const weekStart = parseInt(c.start.replace('Week ', ''))
                  const weekEnd = parseInt(c.due.replace('Week ', ''))
                  const colWeek = parseInt(w.replace('Week ', ''))
                  return colWeek >= weekStart && colWeek <= weekEnd
                })
                .map(c => (
                  <div
                    key={c.title}
                    style={{ ...cardBarCss, background: c.color, width: '95%' }}
                    title={`${c.title}: ${c.start} — ${c.due}`}
                  >
                    {c.title}
                  </div>
                ))}
              {w === 'Week 25' && <div style={todayMarkerCss}>▼ Today</div>}
            </div>
          ))}
        </div>
      </div>

      <div style={unscheduledSectionCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Unscheduled Cards Section — Collapsible List</RegionLabel>}
        <div style={unscheduledHeaderCss}>
          ▼ Unscheduled (3)
        </div>
        {unscheduledCards.map((c, i) => (
          <div key={i} style={unscheduledRowCss}>
            <span>□ {c}</span>
            <button style={actionBtnCss}>Add dates</button>
          </div>
        ))}
      </div>

      <div style={bottomBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Bottom Bar — Card Count</RegionLabel>}
        <span>7 cards (4 scheduled, 3 unscheduled)</span>
        <span>Board context preserved</span>
      </div>
    </div>
  )
}
