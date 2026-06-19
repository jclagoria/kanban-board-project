import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss, fieldRowCss, inputCss, selectCss, textareaCss, iconBtnCss, sectionTitleCss, labelPillCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd',
  fontSize: 15, fontWeight: 600,
}
const labelCss: React.CSSProperties = {
  display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4,
}
const charCounterCss: React.CSSProperties = {
  fontSize: 11, color: '#888', textAlign: 'right', marginTop: 2,
}
const stepperCss: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  marginTop: 4,
}
const stepBtnCss: React.CSSProperties = {
  width: 26, height: 26, border: '1px solid #aaa', background: '#fff',
  fontSize: 16, fontWeight: 600, cursor: 'pointer', lineHeight: '22px', textAlign: 'center',
}
const stepperValueCss: React.CSSProperties = {
  fontSize: 14, fontWeight: 600, minWidth: 24, textAlign: 'center',
}
const numRangeCss: React.CSSProperties = {
  fontSize: 11, color: '#888', marginLeft: 8,
}
const checkboxRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8, marginTop: 4,
}
const urlIconCss: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 4,
  fontSize: 12, color: '#06c', cursor: 'pointer',
}
const labelPillsCss: React.CSSProperties = {
  display: 'flex', gap: 6, marginTop: 8,
}
const dueDateCss: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
}

export default function CardDetailPopulated({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Detail Pane — Populated (all CF types)</RegionLabel>}
      <div style={paneCss}>

        {/* ── Header ── */}
        <div style={headerCss}>
          <span>Card: Q3 Campaign Plan</span>
          <div style={{ display: 'flex', gap: 4 }}>
            <button style={iconBtnCss}>⋮</button>
            <button style={iconBtnCss}>✕</button>
          </div>
        </div>

        {/* ── Standard Fields ── */}
        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Standard Fields</RegionLabel>}

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Title (read-only)</RegionLabel>}
            <label style={labelCss}>Title</label>
            <span style={{ fontSize: 15 }}>Q3 Campaign Plan</span>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Description (read-only)</RegionLabel>}
            <label style={labelCss}>Description</label>
            <span style={{ fontSize: 13, color: '#444' }}>
              Launch campaign for new product line targeting enterprise customers.
            </span>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Due Date + Labels</RegionLabel>}
            <label style={labelCss}>Due date</label>
            <div style={dueDateCss}>
              <span style={{ fontSize: 14 }}>2026-09-30</span>
              <button style={stepBtnCss}>📅</button>
            </div>
            <div style={labelPillsCss}>
              <span style={{ ...labelPillCss, background: '#e8f5e9', color: '#2e7d32' }}>Marketing</span>
              <span style={{ ...labelPillCss, background: '#fce4ec', color: '#c62828' }}>Urgent</span>
            </div>
          </div>
        </div>

        <hr style={dividerCss} />

        {/* ── Custom Fields ── */}
        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Custom Fields Section</RegionLabel>}
          <div style={sectionTitleCss}>Custom Fields</div>

          {/* Dropdown */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Dropdown — Campaign Channel</RegionLabel>}
            <label style={labelCss}>Campaign Channel</label>
            <select style={selectCss} defaultValue="email">
              <option value="email">Email</option>
              <option value="social">Social Media</option>
              <option value="ads">Paid Ads</option>
              <option value="events">Events</option>
            </select>
          </div>

          {/* Number */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Number — Story Points (with stepper)</RegionLabel>}
            <label style={labelCss}>Story Points</label>
            <div style={stepperCss}>
              <button style={stepBtnCss}>−</button>
              <span style={stepperValueCss}>8</span>
              <button style={stepBtnCss}>+</button>
              <span style={numRangeCss}>(min: 1, max: 21)</span>
            </div>
          </div>

          {/* Date */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Date — Launch Date</RegionLabel>}
            <label style={labelCss}>Launch Date</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="date" defaultValue="2026-09-01" style={{ ...inputCss, width: 'auto' }} />
              <button style={iconBtnCss}>📅</button>
            </div>
          </div>

          {/* Email */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Email — Client Email</RegionLabel>}
            <label style={labelCss}>Client Email</label>
            <input style={inputCss} type="email" defaultValue="client@example.com" />
          </div>

          {/* Short Text */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Short Text — Priority</RegionLabel>}
            <label style={labelCss}>Priority</label>
            <div style={{ position: 'relative' }}>
              <input style={inputCss} type="text" defaultValue="High" placeholder="Enter priority" />
              <span style={{ position: 'absolute', right: 8, top: 8, fontSize: 11, color: '#888' }}>5/500</span>
            </div>
          </div>

          {/* Long Text */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Long Text — Notes (with counter)</RegionLabel>}
            <label style={labelCss}>Notes</label>
            <textarea style={textareaCss} defaultValue="Meeting notes from sprint planning — decided to focus on enterprise tier features for Q3 launch." />
            <div style={charCounterCss}>147/5000</div>
          </div>

          {/* Checkbox */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Checkbox — Is Urgent</RegionLabel>}
            <label style={labelCss}>Is Urgent</label>
            <div style={checkboxRowCss}>
              <input type="checkbox" defaultChecked />
              <span style={{ fontSize: 13, color: '#444' }}>Mark as urgent</span>
            </div>
          </div>

          {/* URL */}
          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: URL — Portfolio Link (with link icon)</RegionLabel>}
            <label style={labelCss}>Portfolio Link</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input style={{ ...inputCss, flex: 1 }} type="url" defaultValue="https://example.com/portfolio" />
              <span style={urlIconCss}>🔗 ↗</span>
            </div>
          </div>
        </div>

        <hr style={dividerCss} />

        {/* ── Comments ── */}
        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Comments Section</RegionLabel>}
          <div style={sectionTitleCss}>Comments (3)</div>
          <input style={inputCss} type="text" placeholder="Add comment..." />
        </div>
      </div>
    </div>
  )
}
