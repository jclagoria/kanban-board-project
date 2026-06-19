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
  padding: '6px 14px', border: '1px solid #aaa', background: '#fff', fontSize: 13, cursor: 'pointer', fontWeight: 600,
}
const navDateRangeCss: React.CSSProperties = { fontSize: 14, fontWeight: 600, color: '#333' }
const navDateSubCss: React.CSSProperties = { fontSize: 12, color: '#888', marginTop: 2 }
const todayBtnCss: React.CSSProperties = {
  padding: '6px 14px', border: '1px solid #000', background: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer',
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
  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
  borderTop: '1px solid #ccc', borderLeft: '1px solid #ccc',
  margin: '0 20px',
}
const weekHeaderCss: React.CSSProperties = {
  padding: '8px', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc',
  fontSize: 13, fontWeight: 600, background: '#f5f5f5', textAlign: 'center',
}
const weekSubCss: React.CSSProperties = { fontSize: 11, fontWeight: 400, color: '#888', marginTop: 2 }
const weekColCss: React.CSSProperties = {
  borderRight: '1px solid #ccc', minHeight: 260, padding: '6px 4px',
}
const cardBarCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', padding: '2px 8px',
  fontSize: 12, fontWeight: 600, color: '#fff',
  borderRadius: 3, height: 24, marginBottom: 2,
  whiteSpace: 'nowrap', overflow: 'hidden', cursor: 'pointer',
  position: 'relative', zIndex: 5,
}
const arrowRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 0, height: 20,
  marginBottom: 2, fontSize: 11, color: '#666',
}
const arrowLineCss: React.CSSProperties = {
  flex: 1, height: 2, background: '#888', position: 'relative',
}
const arrowHeadCss: React.CSSProperties = {
  width: 0, height: 0,
  borderTop: '5px solid transparent',
  borderBottom: '5px solid transparent',
  borderLeft: '8px solid #888',
}
const depLabelCss: React.CSSProperties = {
  fontSize: 10, color: '#888', padding: '0 4px',
  background: '#fff', whiteSpace: 'nowrap', cursor: 'pointer',
}

const weeks = [
  { label: 'W25', sub: 'Jun 15' },
  { label: 'W26', sub: 'Jun 22' },
  { label: 'W27', sub: 'Jun 29' },
  { label: 'W28', sub: 'Jul 6' },
]

// Card A: W25–W26 (blocker). Card B: W27–W28 (blocked). Valid: A ends before B starts.
// Card C: W25–W27 (blocker). Card D: W27–W28 (blocked). Broken: C ends same time D starts.
const cardAData = { title: 'Card A', subtitle: 'Sprint 1', color: '#4a90d9', startW: 0, endW: 1 }
const cardBData = { title: 'Card B', subtitle: 'Sprint 2', color: '#50b86c', startW: 2, endW: 3 }
const cardCData = { title: 'Card C', subtitle: 'Design Review', color: '#e8a23d', startW: 0, endW: 2 }
const cardDData = { title: 'Card D', subtitle: 'Dev', color: '#7b61ff', startW: 2, endW: 3 }

export default function TimelineDependenciesArrows({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Dependency Arrows (Valid + Warning)</RegionLabel>}

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
        {showStructure && <RegionLabel top={-4} left={0}>Navigation Bar</RegionLabel>}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button style={navBtnCss}>◀ Prev</button>
          <div style={{ textAlign: 'center' }}>
            <div style={navDateRangeCss}>Week 25 — Week 28</div>
            <div style={navDateSubCss}>Jun 15 – Jul 12</div>
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
        {showStructure && <RegionLabel top={-4} left={0}>Timeline Grid — Dependency Arrows Between Card Bars</RegionLabel>}
        <div style={timelineGridCss}>
          {weeks.map(w => (
            <div key={w.label} style={weekHeaderCss}>
              {w.label}
              <div style={weekSubCss}>{w.sub}</div>
            </div>
          ))}
          {weeks.map((w, wi) => (
            <div key={w.label} style={{ ...weekColCss, background: wi % 2 === 0 ? '#fff' : '#f9f9f9' }}>
              {/* Card A (blocker) */}
              {wi === 0 && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ ...cardBarCss, background: cardAData.color, width: '100%' }}>
                    {cardAData.title}
                  </div>
                </div>
              )}
              {wi > 0 && wi <= cardAData.endW && (
                <div style={{ ...cardBarCss, background: cardAData.color }}>
                  {wi === 1 ? 'A (cont.)' : ''}
                </div>
              )}

              {/* Arrow: Card A → Card B (valid) */}
              {wi === 1 && (
                <div style={arrowRowCss}>
                  <div style={{ ...arrowLineCss, marginLeft: 0 }} />
                  <div style={arrowHeadCss} />
                  <div style={depLabelCss} title="Card A blocks Card B (click to open panel)">
                    blocks
                  </div>
                </div>
              )}

              {/* Card B (blocked) */}
              {wi === 2 && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ ...cardBarCss, background: cardBData.color, width: '100%' }}>
                    {cardBData.title}
                  </div>
                </div>
              )}
              {wi === 3 && (
                <div style={{ ...cardBarCss, background: cardBData.color }}>
                  B (cont.)
                </div>
              )}

              {/* Card C (blocker, broken) */}
              {wi === 0 && (
                <div style={{ ...cardBarCss, background: cardCData.color, marginTop: 8 }}>
                  {cardCData.title}
                </div>
              )}
              {wi > 0 && wi <= cardCData.endW && (
                <div style={{ ...cardBarCss, background: cardCData.color, marginTop: wi === 2 ? 32 : 8 }}>
                  {wi === 1 ? 'C (cont.)' : wi === 2 ? 'C (cont.)' : ''}
                </div>
              )}

              {/* Arrow: Card C → Card D (broken — C ends at W27, D starts at W27) */}
              {wi === 2 && (
                <div style={{ ...arrowRowCss, marginTop: 8 }}>
                  <div style={{ flex: 1, height: 2, background: '#c00', position: 'relative' }} />
                  <div style={{ ...arrowHeadCss, borderLeftColor: '#c00' }} />
                  <div style={{ ...depLabelCss, color: '#c00', fontWeight: 600 }}>
                    ⚠️ blocks
                  </div>
                </div>
              )}

              {/* Card D (blocked, with warning) */}
              {wi === 2 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ ...cardBarCss, background: cardDData.color, flex: 1 }}>
                    {cardDData.title} ⚠️
                  </div>
                </div>
              )}
              {wi === 3 && (
                <div style={{ ...cardBarCss, background: cardDData.color }}>
                  D (cont.)
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={bottomBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Bottom Bar</RegionLabel>}
        <span>4 cards · 2 dependencies (1 valid, 1 broken)</span>
        <span>Click arrow to open relationship panel</span>
      </div>
    </div>
  )
}
