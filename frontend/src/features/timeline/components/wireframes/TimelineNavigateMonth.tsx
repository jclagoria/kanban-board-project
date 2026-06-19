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
  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
  borderTop: '1px solid #ccc', borderLeft: '1px solid #ccc',
  margin: '0 20px',
}
const monthHeaderCss: React.CSSProperties = {
  padding: '10px', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc',
  fontSize: 15, fontWeight: 700, background: '#f5f5f5', textAlign: 'center',
}
const monthSubCss: React.CSSProperties = { fontSize: 11, fontWeight: 400, color: '#888', marginTop: 2 }
const monthColCss: React.CSSProperties = {
  borderRight: '1px solid #ccc', minHeight: 260,
  padding: '8px 6px',
}
const cardBarCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', padding: '2px 10px',
  fontSize: 12, fontWeight: 600, color: '#fff',
  borderRadius: 3, height: 26, marginBottom: 4,
  whiteSpace: 'nowrap', overflow: 'hidden', cursor: 'pointer',
}
const todayMarkerCss: React.CSSProperties = {
  borderTop: '2px solid #c00', marginTop: 8, paddingTop: 4,
  fontSize: 10, color: '#c00', fontWeight: 600, textAlign: 'center',
}

const months = [
  { label: 'June 2026', sub: 'Weeks 23–27' },
  { label: 'July 2026', sub: 'Weeks 27–31' },
  { label: 'August 2026', sub: 'Weeks 31–35' },
]

const cards = [
  { title: 'Design API', startM: 0, endM: 0, color: '#4a90d9' },
  { title: 'FE setup', startM: 0, endM: 1, color: '#7b61ff' },
  { title: 'Auth module', startM: 0, endM: 1, color: '#50b86c' },
  { title: 'Tests', startM: 1, endM: 1, color: '#e8a23d' },
  { title: 'Deploy', startM: 1, endM: 2, color: '#e06060' },
  { title: 'Release prep', startM: 2, endM: 2, color: '#4a90d9' },
]

export default function TimelineNavigateMonth({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Timeline Month View (3 Months: Jun–Aug 2026)</RegionLabel>}

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
        {showStructure && <RegionLabel top={-4} left={0}>Navigation Bar — Month View Controls</RegionLabel>}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button style={navBtnCss}>◀ Prev</button>
          <div style={{ textAlign: 'center' }}>
            <div style={navDateRangeCss}>June 2026 — August 2026</div>
            <div style={navDateSubCss}>Q2–Q3 · 3 months</div>
          </div>
          <button style={navBtnCss}>Next ▶</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={granularityCss}>
            <button style={granularityInactiveCss}>Week</button>
            <button style={granularityActiveCss}>Month</button>
          </div>
          <button style={todayBtnCss}>📅 Today</button>
        </div>
      </div>

      <div style={{ position: 'relative', margin: '0 20px' }}>
        {showStructure && <RegionLabel top={-4} left={0}>Timeline Grid — 3 Month Columns with Month-Spanning Bars</RegionLabel>}
        <div style={timelineGridCss}>
          {months.map(m => (
            <div key={m.label} style={monthHeaderCss}>
              {m.label}
              <div style={monthSubCss}>{m.sub}</div>
            </div>
          ))}
          {months.map((m, mi) => (
            <div key={m.label} style={{ ...monthColCss, background: mi === 0 ? '#fffde7' : mi % 2 === 0 ? '#fff' : '#f9f9f9' }}>
              {cards
                .filter(c => mi >= c.startM && mi <= c.endM)
                .map(c => (
                  <div key={c.title} style={{ ...cardBarCss, background: c.color }}>
                    {c.title}
                  </div>
                ))}
              {mi === 0 && <div style={todayMarkerCss}>▼ Today</div>}
            </div>
          ))}
        </div>
      </div>

      <div style={bottomBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Bottom Bar</RegionLabel>}
        <span>6 cards · Month view · offset=0</span>
        <span>Visible: Jun–Aug 2026</span>
      </div>
    </div>
  )
}
