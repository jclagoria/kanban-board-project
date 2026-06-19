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
  display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
  borderTop: '1px solid #ccc', borderLeft: '1px solid #ccc',
  margin: '0 20px',
}
const weekHeaderCss: React.CSSProperties = {
  padding: '8px', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc',
  fontSize: 13, fontWeight: 600, background: '#f5f5f5', textAlign: 'center',
}
const weekSubCss: React.CSSProperties = { fontSize: 11, fontWeight: 400, color: '#888', marginTop: 2 }
const weekColCss: React.CSSProperties = {
  borderRight: '1px solid #ccc', minHeight: 220, padding: '6px 4px',
}
const cardBarCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', padding: '2px 8px',
  fontSize: 12, fontWeight: 600, color: '#fff',
  borderRadius: 3, height: 24, marginBottom: 2,
  whiteSpace: 'nowrap', overflow: 'hidden', cursor: 'pointer',
  position: 'relative', zIndex: 2,
}
const warningBadgeCss: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  width: 18, height: 18, borderRadius: '50%',
  background: '#c00', color: '#fff', fontSize: 11, fontWeight: 700,
  marginLeft: 4, cursor: 'pointer',
}
const warningTooltipCss: React.CSSProperties = {
  position: 'absolute', bottom: 28, right: 0,
  background: '#222', color: '#fff', padding: '6px 10px',
  fontSize: 11, borderRadius: 4, whiteSpace: 'nowrap',
  zIndex: 20, maxWidth: 240,
}
const arrowRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 0, height: 20,
  marginBottom: 2, fontSize: 11, color: '#666',
}
const depLabelCss: React.CSSProperties = {
  fontSize: 10, color: '#c00', padding: '0 4px',
  background: '#fff', whiteSpace: 'nowrap', fontWeight: 600, cursor: 'pointer',
}
const dragHintCss: React.CSSProperties = {
  margin: '8px 20px 0',
  padding: '6px 12px', background: '#fff1f0', border: '1px solid #ffa39e',
  fontSize: 12, color: '#cf1322',
}

const weeks = [
  { label: 'W25', sub: 'Jun 15' },
  { label: 'W26', sub: 'Jun 22' },
  { label: 'W27', sub: 'Jun 29' },
  { label: 'W28', sub: 'Jul 6' },
  { label: 'W29', sub: 'Jul 13' },
]

// Card A originally ended at W27, was dragged to W30 (past B's start at W28).
// Visible range shows W25–W29. A now spans W25–W29 (partially), B is at W28–W29.
const cardAData = { title: 'Card A', subtitle: 'Sprint 1', color: '#4a90d9', startW: 0, endW: 3 }
const cardBData = { title: 'Card B', subtitle: 'Sprint 2', color: '#50b86c', startW: 3, endW: 4 }

export default function TimelineDependenciesWarning({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Broken Dependency Warning</RegionLabel>}

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
            <div style={navDateRangeCss}>Week 25 — Week 29</div>
            <div style={navDateSubCss}>Jun 15 – Jul 20</div>
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

      <div style={dragHintCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Dependency Warning Banner</RegionLabel>}
        ⚠️ Dependency broken: Card A (blocker) now ends after Card B starts. Card B needs attention.
      </div>

      <div style={{ position: 'relative', margin: '0 20px' }}>
        {showStructure && <RegionLabel top={-4} left={0}>Timeline Grid — Broken Dependency Warning on Card B</RegionLabel>}
        <div style={timelineGridCss}>
          {weeks.map(w => (
            <div key={w.label} style={weekHeaderCss}>
              {w.label}
              <div style={weekSubCss}>{w.sub}</div>
            </div>
          ))}
          {weeks.map((w, wi) => (
            <div key={w.label} style={{ ...weekColCss, background: wi % 2 === 0 ? '#fff' : '#f9f9f9' }}>
              {/* Card A (blocker, now spans into B's territory) */}
              {wi >= cardAData.startW && wi <= cardAData.endW && (
                <div style={{ ...cardBarCss, background: cardAData.color }}>
                  {wi === 0 ? 'Card A' : 'A (extended)'}
                </div>
              )}

              {/* Arrow: Card A → Card B (broken) */}
              {wi === 3 && (
                <div style={arrowRowCss}>
                  <div style={{ flex: 1, height: 2, background: '#c00', position: 'relative' }} />
                  <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid #c00' }} />
                  <div style={depLabelCss}>⚠️ blocks</div>
                </div>
              )}

              {/* Card B (blocked, showing warning) */}
              {wi >= cardBData.startW && wi <= cardBData.endW && (
                <div style={{ position: 'relative' }}>
                  <div style={{ ...cardBarCss, background: cardBData.color, border: '2px solid #c00' }}>
                    Card B <span style={warningBadgeCss}>⚠</span>
                  </div>
                  {wi === 3 && (
                    <div style={warningTooltipCss}>
                      This card starts before its blocker finishes
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={bottomBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Bottom Bar</RegionLabel>}
        <span>2 cards · 1 broken dependency</span>
        <span>⚠️ Date change caused blocker to overlap blocked</span>
      </div>
    </div>
  )
}
