import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, boardHeaderCss, boardNameCss, visibilityBadgeCss, actionBtnCss, viewTabCss, viewTabActiveCss, bottomBarCss } from '@/components/shared/wireframes/_designTokens'

const actionsCss: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 8 }
const viewTabsCss: React.CSSProperties = {
  display: 'flex', gap: 4, padding: '8px 20px', borderBottom: '1px solid #ccc',
}
const navBarCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '10px 20px', borderBottom: '1px solid #eee',
}
const navBtnCss: React.CSSProperties = {
  padding: '6px 14px', border: '1px solid #aaa', background: '#fff',
  fontSize: 13, cursor: 'pointer', fontWeight: 600,
}
const navDateRangeCss: React.CSSProperties = { fontSize: 14, fontWeight: 600, color: '#333' }
const navDateSubCss: React.CSSProperties = { fontSize: 12, color: '#888', marginTop: 2 }
const todayBtnCss: React.CSSProperties = {
  padding: '6px 14px', border: '1px solid #000', background: '#fff',
  fontSize: 13, fontWeight: 700, cursor: 'pointer',
}
const granularityCss: React.CSSProperties = {
  display: 'flex', gap: 2, border: '1px solid #aaa', borderRadius: 4, overflow: 'hidden',
}
const granularityActiveCss: React.CSSProperties = {
  padding: '5px 12px', background: '#000', color: '#fff', fontSize: 12, cursor: 'pointer', border: 'none',
}
const granularityInactiveCss: React.CSSProperties = {
  padding: '5px 12px', background: '#fff', color: '#555', fontSize: 12, cursor: 'pointer', border: 'none',
}
const timelineGridCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
  borderTop: '1px solid #ccc', borderLeft: '1px solid #ccc',
  margin: '0 20px',
}
const weekHeaderCss: React.CSSProperties = {
  padding: '8px', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc',
  fontSize: 13, fontWeight: 600, background: '#f5f5f5', textAlign: 'center',
}
const weekSubCss: React.CSSProperties = { fontSize: 11, fontWeight: 400, color: '#888', marginTop: 2 }
const weekColCss: React.CSSProperties = {
  borderRight: '1px solid #ccc', minHeight: 200,
  padding: '6px 4px',
}
const cardBarCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', padding: '2px 8px',
  fontSize: 12, fontWeight: 600, color: '#fff',
  borderRadius: 3, height: 24, marginBottom: 4,
  whiteSpace: 'nowrap', overflow: 'hidden', cursor: 'pointer',
}
const todayMarkerCss: React.CSSProperties = {
  borderTop: '2px solid #c00', marginTop: 8, paddingTop: 4,
  fontSize: 10, color: '#c00', fontWeight: 600, textAlign: 'center',
}

const weeks = [
  { label: 'W25', sub: 'Jun 15' },
  { label: 'W26', sub: 'Jun 22' },
  { label: 'W27', sub: 'Jun 29' },
  { label: 'W28', sub: 'Jul 6' },
  { label: 'W29', sub: 'Jul 13' },
  { label: 'W30', sub: 'Jul 20' },
]

const cards = [
  { title: 'Design API', startW: 0, endW: 1, color: '#4a90d9' },
  { title: 'FE setup', startW: 1, endW: 2, color: '#7b61ff' },
  { title: 'Auth module', startW: 0, endW: 3, color: '#50b86c' },
  { title: 'Tests', startW: 2, endW: 4, color: '#e8a23d' },
  { title: 'Deploy', startW: 4, endW: 5, color: '#e06060' },
]

export default function TimelineNavigateWeek({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Timeline Week View (Default: W25–W30)</RegionLabel>}

      <div style={topBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Board Top Bar</RegionLabel>}
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
        {showStructure && <RegionLabel top={-4} left={0}>Timeline Navigation Bar — Prev/Next + Date Range + Granularity Toggle + Today</RegionLabel>}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button style={navBtnCss}>◀ Prev</button>
          <div style={{ textAlign: 'center' }}>
            <div style={navDateRangeCss}>Week 25 — Week 30</div>
            <div style={navDateSubCss}>Jun 15 – Jul 26</div>
          </div>
          <button style={navBtnCss}>Next ▶</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={granularityCss}>
            <button style={granularityActiveCss}>Week</button>
            <button style={granularityInactiveCss}>Month</button>
          </div>
          <button style={todayBtnCss}>📅 Today</button>
        </div>
      </div>

      <div style={{ position: 'relative', margin: '0 20px' }}>
        {showStructure && <RegionLabel top={-4} left={0}>Timeline Grid — 6 Week Columns with Card Bars</RegionLabel>}
        <div style={timelineGridCss}>
          {weeks.map(w => (
            <div key={w.label} style={weekHeaderCss}>
              {w.label}
              <div style={weekSubCss}>{w.sub}</div>
            </div>
          ))}
          {weeks.map((w, wi) => (
            <div key={w.label} style={{ ...weekColCss, background: wi === 0 ? '#fffde7' : wi % 2 === 0 ? '#fff' : '#f9f9f9' }}>
              {cards
                .filter(c => wi >= c.startW && wi <= c.endW)
                .map(c => (
                  <div key={c.title} style={{ ...cardBarCss, background: c.color }}>
                    {c.title}
                  </div>
                ))}
              {wi === 0 && <div style={todayMarkerCss}>▼ Today</div>}
            </div>
          ))}
        </div>
      </div>

      <div style={bottomBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Bottom Bar</RegionLabel>}
        <span>5 cards · Week view · offset=0</span>
        <span>Visible: W25–W30</span>
      </div>
    </div>
  )
}
