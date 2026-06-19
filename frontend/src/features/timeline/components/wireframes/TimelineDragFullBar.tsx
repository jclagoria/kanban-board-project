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
  display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)',
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
const weekendColCss: React.CSSProperties = {
  ...weekColCss, background: '#f0f0f0', opacity: 0.6, position: 'relative',
}
const weekendLabelCss: React.CSSProperties = {
  position: 'absolute', bottom: 4, right: 4, fontSize: 9, color: '#aaa', fontWeight: 600,
}
const originalBarGhostCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', padding: '2px 8px',
  fontSize: 12, fontWeight: 600,
  borderRadius: 3, height: 24, marginBottom: 4,
  whiteSpace: 'nowrap', overflow: 'hidden',
  background: '#ddd', opacity: 0.4, border: '1px dashed #999',
}
const movingBarCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center',
  fontSize: 12, fontWeight: 600, color: '#fff',
  borderRadius: 3, height: 24, marginBottom: 4,
  whiteSpace: 'nowrap', overflow: 'hidden', cursor: 'grabbing',
  opacity: 0.9, boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  position: 'relative',
}
const tooltipCss: React.CSSProperties = {
  position: 'absolute', top: -32, left: '50%', transform: 'translateX(-50%)',
  background: '#222', color: '#fff', padding: '4px 8px',
  fontSize: 11, borderRadius: 4, whiteSpace: 'nowrap',
  zIndex: 20,
}
const dragHintCss: React.CSSProperties = {
  margin: '8px 20px 0',
  padding: '6px 12px', background: '#fffbe6', border: '1px solid #ffe58f',
  fontSize: 12, color: '#ad8b00',
}

const weeks = [
  { label: 'W25', sub: 'Jun 15' },
  { label: 'W26', sub: 'Jun 22' },
  { label: 'W27', sub: 'Jun 29' },
  { label: 'W28', sub: 'Jul 6' },
  { label: 'W29', sub: 'Jul 13' },
  { label: 'W30', sub: 'Jul 20' },
  { label: 'W31', sub: 'Jul 27' },
  { label: 'W32', sub: 'Aug 3' },
  { label: 'W33', sub: 'Aug 10' },
]

// Original: W25–W30 (ghost). Moving to: W28–W33 (+3 weeks).
export default function TimelineDragFullBar({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Drag Full Bar (Shift Both Dates)</RegionLabel>}

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
        {showStructure && <RegionLabel top={-4} left={0}>Navigation Bar — Extended Range for Full Bar Drag</RegionLabel>}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button style={navBtnCss}>◀ Prev</button>
          <div style={{ textAlign: 'center' }}>
            <div style={navDateRangeCss}>Week 25 — Week 33</div>
            <div style={navDateSubCss}>Jun 15 – Aug 17</div>
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
        {showStructure && <RegionLabel top={-4} left={0}>Drag Context Banner</RegionLabel>}
        Dragging full bar: both dates shifting +3 weeks · Jun 15→Jul 6 (W25→W28) · Jul 20→Aug 10 (W30→W33)
      </div>

      <div style={{ position: 'relative', margin: '0 20px' }}>
        {showStructure && <RegionLabel top={-4} left={0}>Timeline Grid — Full Bar Drag with Ghost + Moving Bar</RegionLabel>}
        <div style={timelineGridCss}>
          {weeks.map(w => (
            <div key={w.label} style={weekHeaderCss}>
              {w.label}
              <div style={weekSubCss}>{w.sub}</div>
            </div>
          ))}
          {weeks.map((w, wi) => (
            <div key={w.label} style={wi === 0 || wi === 8 ? weekendColCss : { ...weekColCss, background: wi % 2 === 0 ? '#fff' : '#f9f9f9' }}>
              {/* Ghost of original position (W25–W30) */}
              {wi >= 1 && wi <= 6 && (
                <div style={originalBarGhostCss}>
                  {wi === 1 ? 'Card A' : ''}
                </div>
              )}
              {/* Moving bar at new position (W28–W33) */}
              {wi >= 4 && wi <= 9 && (
                <div
                  style={{
                    ...movingBarCss,
                    background: '#4a90d9',
                    padding: '2px 8px',
                    width: '95%',
                    marginTop: wi === 4 ? 0 : -30,
                  }}
                >
                  {wi === 4 ? 'Card A' : ''}
                  {wi === 4 && (
                    <div style={tooltipCss}>
                      +3w shift · Jun 15 → Jul 6
                    </div>
                  )}
                </div>
              )}
              {wi === 0 || wi === 8 ? <div style={weekendLabelCss}>wknd</div> : null}
            </div>
          ))}
        </div>
      </div>

      <div style={bottomBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Bottom Bar</RegionLabel>}
        <span>Dragging full bar · W25–W30 → W28–W33 (+3 weeks)</span>
        <span>✥ grabbing · weekends skipped</span>
      </div>
    </div>
  )
}
