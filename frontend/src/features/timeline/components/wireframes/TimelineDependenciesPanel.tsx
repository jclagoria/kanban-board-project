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
  opacity: 0.3, pointerEvents: 'none',
}
const weekHeaderCss: React.CSSProperties = {
  padding: '8px', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc',
  fontSize: 13, fontWeight: 600, background: '#f5f5f5', textAlign: 'center',
}
const weekSubCss: React.CSSProperties = { fontSize: 11, fontWeight: 400, color: '#888', marginTop: 2 }
const weekColCss: React.CSSProperties = {
  borderRight: '1px solid #ccc', minHeight: 120, padding: '6px 4px',
}
const cardBarCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', padding: '2px 8px',
  fontSize: 12, fontWeight: 600, color: '#fff',
  borderRadius: 3, height: 24, marginBottom: 2,
  whiteSpace: 'nowrap', overflow: 'hidden',
}
const overlayCss: React.CSSProperties = {
  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  zIndex: 30,
}
const panelCss: React.CSSProperties = {
  background: '#fff', border: '2px solid #333',
  width: 360, boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
}
const panelHeaderCss: React.CSSProperties = {
  padding: '12px 16px', borderBottom: '1px solid #ddd',
  fontSize: 15, fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
}
const panelBodyCss: React.CSSProperties = { padding: 16 }
const relationRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 12,
  padding: '10px 0', borderBottom: '1px solid #eee',
}
const cardMiniCss: React.CSSProperties = {
  padding: '6px 10px', borderRadius: 3, fontSize: 12, fontWeight: 600,
  color: '#fff', minWidth: 80, textAlign: 'center',
}
const relationBadgeCss: React.CSSProperties = { fontSize: 11, color: '#888', fontWeight: 600 }
const actionBtnSmCss: React.CSSProperties = {
  padding: '4px 10px', border: '1px solid #aaa', background: '#fff', fontSize: 11, cursor: 'pointer',
}
const addSectionCss: React.CSSProperties = { padding: '12px 0 0', borderTop: '1px solid #ddd', marginTop: 12 }
const addSectionTitleCss: React.CSSProperties = {
  fontSize: 13, fontWeight: 600, color: '#888', marginBottom: 10, textAlign: 'center',
}
const inputCss: React.CSSProperties = {
  width: '100%', padding: '6px 8px', border: '1px solid #ccc',
  fontSize: 12, boxSizing: 'border-box',
}
const typePickerCss: React.CSSProperties = { display: 'flex', gap: 8, margin: '8px 0', fontSize: 12 }
const addBtnCss: React.CSSProperties = {
  width: '100%', padding: '8px', border: '1px solid #000',
  background: '#000', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', marginTop: 8,
}

export default function TimelineDependenciesPanel({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Timeline + Relationship Panel Overlay</RegionLabel>}

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
        {showStructure && <RegionLabel top={-4} left={0}>Timeline Grid (Dimmed Behind Overlay)</RegionLabel>}
        <div style={timelineGridCss}>
          <div style={weekHeaderCss}>W25<div style={weekSubCss}>Jun 15</div></div>
          <div style={weekHeaderCss}>W26<div style={weekSubCss}>Jun 22</div></div>
          <div style={weekHeaderCss}>W27<div style={weekSubCss}>Jun 29</div></div>
          <div style={weekHeaderCss}>W28<div style={weekSubCss}>Jul 6</div></div>
          {[0, 1, 2, 3].map(wi => (
            <div key={wi} style={{ ...weekColCss, background: wi % 2 === 0 ? '#fff' : '#f9f9f9' }}>
              <div style={{ ...cardBarCss, background: '#4a90d9' }}>{wi === 0 ? 'Card A' : ''}</div>
              <div style={{ ...cardBarCss, background: '#50b86c' }}>{wi === 2 ? 'Card B' : ''}</div>
            </div>
          ))}
        </div>

        {showStructure && <RegionLabel top={-4} left={0}>Relationship Panel — Modal Overlay</RegionLabel>}
        <div style={overlayCss}>
          <div style={panelCss}>
            <div style={panelHeaderCss}>
              <span>Card Relationships</span>
              <span style={{ cursor: 'pointer', fontSize: 18, color: '#888' }}>✕</span>
            </div>

            <div style={panelBodyCss}>
              {showStructure && <RegionLabel top={-4} left={0}>Panel — Linked Cards + Actions</RegionLabel>}
              <div style={relationRowCss}>
                <div style={{ ...cardMiniCss, background: '#4a90d9' }}>Card A</div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div style={relationBadgeCss}>blocks</div>
                  <div style={{ fontSize: 10, color: '#aaa' }}>Jun 1 — Jun 14</div>
                </div>
                <div style={{ ...cardMiniCss, background: '#50b86c' }}>Card B</div>
              </div>

              <div style={relationRowCss}>
                <div style={{ ...cardMiniCss, background: '#e8a23d' }}>Card C</div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div style={relationBadgeCss}>blocked by</div>
                  <div style={{ fontSize: 10, color: '#aaa' }}>Jun 16 — Jun 30</div>
                </div>
                <div style={{ ...cardMiniCss, background: '#7b61ff' }}>Card D</div>
              </div>

              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button style={{ ...actionBtnSmCss, flex: 1 }}>Unlink Card A · B</button>
                <button style={{ ...actionBtnSmCss, flex: 1 }}>Navigate to Card B</button>
              </div>

              <div style={addSectionCss}>
                <div style={addSectionTitleCss}>── Add Relationship ──</div>
                <input style={inputCss} placeholder="Search for a card..." />
                <div style={typePickerCss}>
                  <label><input type="radio" name="relType" /> blocks</label>
                  <label><input type="radio" name="relType" /> related to</label>
                  <label><input type="radio" name="relType" /> duplicate of</label>
                </div>
                <button style={addBtnCss}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ ...bottomBarCss, opacity: 0.3 }}>
        <span>4 cards · 2 dependencies</span>
        <span>Panel open — click ✕ or outside to close</span>
      </div>
    </div>
  )
}
