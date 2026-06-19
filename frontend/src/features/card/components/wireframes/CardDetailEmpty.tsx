import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss, fieldRowCss, inputCss, selectCss, textareaCss, sectionTitleCss } from '@/components/shared/wireframes/_designTokens'

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
const placeholderCss: React.CSSProperties = {
  fontSize: 13, color: '#aaa', fontStyle: 'italic', marginTop: 2,
}

export default function CardDetailEmpty({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Detail Pane — Empty (all CF placeholders)</RegionLabel>}
      <div style={paneCss}>

        <div style={headerCss}>
          <span>Card: Q3 Campaign Plan</span>
          <div style={{ display: 'flex', gap: 4 }}>
            <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>⋮</button>
            <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
          </div>
        </div>

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Standard Fields</RegionLabel>}
          <div style={fieldRowCss}>
            <label style={labelCss}>Title</label>
            <span style={{ fontSize: 15 }}>Q3 Campaign Plan</span>
          </div>
          <div style={fieldRowCss}>
            <label style={labelCss}>Description</label>
            <span style={{ fontSize: 13, color: '#444' }}>Launch campaign for new product line.</span>
          </div>
          <div style={fieldRowCss}>
            <label style={labelCss}>Due date</label>
            <span style={{ fontSize: 13, color: '#aaa', fontStyle: 'italic' }}>Not set</span>
          </div>
        </div>

        <hr style={dividerCss} />

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Custom Fields Section — All Empty Placeholders</RegionLabel>}
          <div style={sectionTitleCss}>Custom Fields</div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Dropdown — empty placeholder</RegionLabel>}
            <label style={labelCss}>Campaign Channel</label>
            <select style={selectCss} defaultValue="">
              <option value="" disabled>— Select Campaign Channel —</option>
            </select>
            <div style={placeholderCss}>— Select Campaign Channel —</div>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Number — empty</RegionLabel>}
            <label style={labelCss}>Story Points</label>
            <input style={inputCss} type="number" placeholder="Enter story points" />
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Date — empty</RegionLabel>}
            <label style={labelCss}>Launch Date</label>
            <input type="date" style={{ ...inputCss, width: 'auto', color: '#aaa' }} />
            <div style={placeholderCss}>Pick a date</div>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Email — empty</RegionLabel>}
            <label style={labelCss}>Client Email</label>
            <input style={inputCss} type="email" placeholder="client@example.com" />
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Short Text — empty</RegionLabel>}
            <label style={labelCss}>Priority</label>
            <input style={inputCss} type="text" placeholder="Enter priority" />
            <div style={{ ...charCounterCss, color: '#ccc' }}>0/500</div>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Long Text — empty</RegionLabel>}
            <label style={labelCss}>Notes</label>
            <textarea style={textareaCss} placeholder="Add notes..." />
            <div style={{ ...charCounterCss, color: '#ccc' }}>0/5000</div>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: Checkbox — unchecked</RegionLabel>}
            <label style={labelCss}>Is Urgent</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
              <input type="checkbox" />
              <span style={{ fontSize: 13, color: '#aaa' }}>Not urgent</span>
            </div>
          </div>

          <div style={fieldRowCss}>
            {showStructure && <RegionLabel top={-4} left={0}>CF: URL — empty</RegionLabel>}
            <label style={labelCss}>Portfolio Link</label>
            <input style={inputCss} type="url" placeholder="https://example.com" />
          </div>
        </div>

        <hr style={dividerCss} />

        <div style={sectionCss}>
          <div style={sectionTitleCss}>Comments (0)</div>
          <input style={inputCss} type="text" placeholder="Add comment..." />
        </div>
      </div>
    </div>
  )
}
