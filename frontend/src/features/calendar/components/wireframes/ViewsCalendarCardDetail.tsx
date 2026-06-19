import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { viewTabsCss, sectionTitleCss } from '@/components/shared/wireframes/_designTokens'

const shellCss: React.CSSProperties = {
  position: 'relative', border: '1px solid #aaa', background: '#fff',
  maxWidth: 960,
}
const barCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 16px', borderBottom: '1px solid #ddd', fontSize: 14, fontWeight: 600,
}
const viewTabActiveCss: React.CSSProperties = {
  padding: '4px 12px', border: '1px solid #000', background: '#000', color: '#fff',
  fontSize: 12, cursor: 'pointer',
}
const viewTabCss: React.CSSProperties = {
  padding: '4px 12px', border: '1px solid #ccc', background: '#fff',
  fontSize: 12, cursor: 'pointer',
}
const contentCss: React.CSSProperties = {
  display: 'flex', gap: 0, padding: 16,
}

/* ── Calendar side ── */
const calendarCss: React.CSSProperties = {
  flex: 1, border: '1px solid #ddd', borderRadius: 4, padding: 8,
  minHeight: 300,
}
const navCss: React.CSSProperties = {
  fontSize: 11, color: '#888', display: 'flex', justifyContent: 'space-between',
  marginBottom: 8,
}
const weekdaysCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
  fontSize: 11, color: '#888', textAlign: 'center', marginBottom: 4,
  fontWeight: 600,
}
const dayGridCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
  gap: 2,
}
const dayCellCss: React.CSSProperties = {
  border: '1px solid #eee', minHeight: 60, padding: 3,
  fontSize: 10, color: '#888', position: 'relative',
}
const dayNumCss: React.CSSProperties = {
  fontSize: 10, fontWeight: 600, marginBottom: 2,
}
const eventCss: React.CSSProperties = {
  background: '#c8e6c9', borderRadius: 2, fontSize: 8,
  padding: '1px 3px', marginBottom: 1, cursor: 'pointer',
  whiteSpace: 'nowrap', overflow: 'hidden',
}
const eventActiveCss: React.CSSProperties = {
  ...eventCss, background: '#a5d6a7', border: '1px solid #000',
}
const todayCss: React.CSSProperties = {
  ...dayCellCss, background: '#f0f8ff',
}

/* ── Card detail pane ── */
const detailCss: React.CSSProperties = {
  width: 340, marginLeft: 12, border: '1px solid #aaa', background: '#fff',
  borderRadius: 4, position: 'relative',
}
const detailHeaderCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 14px', borderBottom: '1px solid #ddd', fontSize: 14, fontWeight: 600,
}
const detailSectionCss: React.CSSProperties = { padding: '12px 14px', position: 'relative' }
const detailDividerCss: React.CSSProperties = {
  border: 'none', borderTop: '1px solid #ddd', margin: 0,
}
const fieldRowCss: React.CSSProperties = { marginBottom: 12, position: 'relative' }
const labelCss: React.CSSProperties = { display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 2 }
const inputCss: React.CSSProperties = {
  width: '100%', padding: '6px 8px', border: '1px solid #aaa',
  fontSize: 13, boxSizing: 'border-box',
}
const selectCss: React.CSSProperties = {
  ...inputCss, appearance: 'none', background: '#fff',
}
const stepperCss: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 2,
}
const stepBtnCss: React.CSSProperties = {
  width: 22, height: 22, border: '1px solid #aaa', background: '#fff',
  fontSize: 14, cursor: 'pointer', lineHeight: '18px', textAlign: 'center',
}

export default function ViewsCalendarCardDetail({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Calendar View + Card Detail (same CF section)</RegionLabel>}
      <div style={shellCss}>
        <div style={barCss}>
          <span>Sprint 42 · Calendar</span>
          <div style={viewTabsCss}>
            <button style={viewTabCss}>Kanban</button>
            <button style={viewTabCss}>Timeline</button>
            <button style={viewTabActiveCss}>Calendar</button>
            <button style={viewTabCss}>Table</button>
          </div>
        </div>

        <div style={contentCss}>
          {/* ── Calendar ── */}
          <div style={calendarCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Calendar Month Grid — Events (no CF shown)</RegionLabel>}
            <div style={navCss}>
              <span>◀</span>
              <span style={{ fontWeight: 600 }}>August 2026</span>
              <span>▶</span>
            </div>
            <div style={weekdaysCss}>
              <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
            </div>

            <div style={dayGridCss}>
              {[null, null, null, null, null, 1, 2].map((d, i) => (
                <div key={i} style={d === 2 ? todayCss : dayCellCss}>
                  {d && <div style={dayNumCss}>{d}</div>}
                </div>
              ))}
              {[3, 4, 5, 6, 7, 8, 9].map((d, i) => (
                <div key={i + 7} style={{ ...dayCellCss, ...(d === 4 ? { background: '#f0f8ff' } : {}) }}>
                  <div style={dayNumCss}>{d}</div>
                  {d === 4 && <div style={eventActiveCss}>Q3 Campaign</div>}
                  {d === 5 && <div style={eventCss}>Homepage</div>}
                  {d === 4 && <div style={eventCss}>API Contract</div>}
                </div>
              ))}
              {[10, 11, 12, 13, 14, 15, 16].map((d, i) => (
                <div key={i + 14} style={dayCellCss}>
                  <div style={dayNumCss}>{d}</div>
                  {d === 15 && <div style={eventCss}>QA Setup</div>}
                </div>
              ))}
              {[17, 18, 19, 20, 21, 22, 23].map((d, i) => (
                <div key={i + 21} style={dayCellCss}>
                  <div style={dayNumCss}>{d}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: '#999', marginTop: 8, fontStyle: 'italic', textAlign: 'center' }}>
              Card events show title only (no CF)
            </div>
          </div>

          {/* ── Card Detail Pane ── */}
          <div style={detailCss}>
            {showStructure && <RegionLabel top={0} left={0}>Card Detail — Same as Kanban (CF section)</RegionLabel>}
            <div style={detailHeaderCss}>
              <span>Q3 Campaign Plan</span>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 13, color: '#555' }}>✕</button>
            </div>

            <div style={detailSectionCss}>
              <div style={fieldRowCss}>
                <label style={labelCss}>Description</label>
                <span style={{ fontSize: 12, color: '#444' }}>Launch campaign for new product line...</span>
              </div>
              <div style={fieldRowCss}>
                <label style={labelCss}>Due date</label>
                <span style={{ fontSize: 12 }}>📅 Sep 30</span>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <span style={{ padding: '1px 6px', fontSize: 10, fontWeight: 600, background: '#e8f5e9', color: '#2e7d32', borderRadius: 2 }}>Marketing</span>
              </div>
            </div>

            <hr style={detailDividerCss} />

            <div style={detailSectionCss}>
              <div style={sectionTitleCss}>Custom Fields</div>

              <div style={fieldRowCss}>
                <label style={labelCss}>Campaign Channel</label>
                <select style={selectCss} defaultValue="email">
                  <option value="email">Email</option>
                </select>
              </div>

              <div style={fieldRowCss}>
                <label style={labelCss}>Story Points</label>
                <div style={stepperCss}>
                  <button style={stepBtnCss}>−</button>
                  <span style={{ fontSize: 14, fontWeight: 600, minWidth: 20, textAlign: 'center' }}>13</span>
                  <button style={stepBtnCss}>+</button>
                </div>
              </div>

              <div style={fieldRowCss}>
                <label style={labelCss}>Is Urgent</label>
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
