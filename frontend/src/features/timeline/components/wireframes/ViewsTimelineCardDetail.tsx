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

/* ── Timeline side ── */
const timelineCss: React.CSSProperties = {
  flex: 1, border: '1px solid #ddd', borderRadius: 4, padding: 8,
  minHeight: 300,
}
const monthLabelCss: React.CSSProperties = {
  fontSize: 13, fontWeight: 700, marginBottom: 8, color: '#444',
}
const weekdaysCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
  fontSize: 11, color: '#888', textAlign: 'center', marginBottom: 4,
}
const weekRowCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
  gap: 2, marginBottom: 2,
}
const dayCellCss: React.CSSProperties = {
  height: 44, border: '1px solid #eee', fontSize: 10, color: '#888',
  position: 'relative', padding: 1,
}
const cardBarCss: React.CSSProperties = {
  position: 'absolute', bottom: 2, left: 2, right: 2,
  background: '#c8e6c9', borderRadius: 2, fontSize: 8,
  padding: '1px 3px', whiteSpace: 'nowrap', overflow: 'hidden',
  cursor: 'pointer',
}
const cardBarActiveCss: React.CSSProperties = {
  ...cardBarCss, background: '#a5d6a7', border: '1px solid #000',
}
const navCss: React.CSSProperties = {
  fontSize: 11, color: '#888', display: 'flex', justifyContent: 'space-between',
  marginBottom: 8,
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

export default function ViewsTimelineCardDetail({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Timeline View + Card Detail (same CF section)</RegionLabel>}
      <div style={shellCss}>
        <div style={barCss}>
          <span>Sprint 42 · Timeline</span>
          <div style={viewTabsCss}>
            <button style={viewTabCss}>Kanban</button>
            <button style={viewTabActiveCss}>Timeline</button>
            <button style={viewTabCss}>Calendar</button>
            <button style={viewTabCss}>Table</button>
          </div>
        </div>

        <div style={contentCss}>
          {/* ── Timeline ── */}
          <div style={timelineCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Timeline Grid — Card Bars (no CF shown)</RegionLabel>}
            <div style={navCss}>
              <span>◀</span>
              <span style={{ fontWeight: 600 }}>August 2026</span>
              <span>▶</span>
            </div>
            <div style={monthLabelCss}>Week 32</div>
            <div style={weekdaysCss}>
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
            <div style={weekRowCss}>
              <div style={dayCellCss}></div>
              <div style={dayCellCss}>26</div>
              <div style={dayCellCss}>27</div>
              <div style={dayCellCss}>28</div>
              <div style={dayCellCss}>29</div>
              <div style={dayCellCss}>30</div>
              <div style={dayCellCss}>31</div>
            </div>
            <div style={weekRowCss}>
              <div style={dayCellCss}>1</div>
              <div style={dayCellCss}>2</div>
              <div style={dayCellCss}>3</div>
              <div style={{ ...dayCellCss, background: '#f0f8ff' }}>
                <div style={cardBarActiveCss}>Q3 Campaign Plan</div>
              </div>
              <div style={dayCellCss}>
                <div style={cardBarCss}>Homepage Redesign</div>
              </div>
              <div style={dayCellCss}>7</div>
              <div style={dayCellCss}>8</div>
            </div>
            <div style={weekRowCss}>
              <div style={dayCellCss}>9</div>
              <div style={dayCellCss}>10</div>
              <div style={dayCellCss}>11</div>
              <div style={dayCellCss}>12</div>
              <div style={dayCellCss}>13</div>
              <div style={dayCellCss}>14</div>
              <div style={dayCellCss}>15</div>
            </div>
            <div style={{ fontSize: 11, color: '#999', marginTop: 8, fontStyle: 'italic', textAlign: 'center' }}>
              Card bars show title + date only (no CF)
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
              {showStructure && <RegionLabel top={0} left={0}>Standard Fields</RegionLabel>}
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
                <span style={{ padding: '1px 6px', fontSize: 10, fontWeight: 600, background: '#fce4ec', color: '#c62828', borderRadius: 2 }}>Urgent</span>
              </div>
            </div>

            <hr style={detailDividerCss} />

            <div style={detailSectionCss}>
              {showStructure && <RegionLabel top={0} left={0}>Custom Fields (consistent order)</RegionLabel>}
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
