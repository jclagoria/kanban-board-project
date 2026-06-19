import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'

const overlayCss: React.CSSProperties = {
  position: 'relative', border: '1px solid #aaa', background: '#fff',
  maxWidth: 600, margin: '0 auto',
}
const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '16px 20px', borderBottom: '1px solid #ddd', fontSize: 16, fontWeight: 600,
}
const bodyCss: React.CSSProperties = { padding: 24 }
const choiceGridCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24,
}
const choiceCardCss: React.CSSProperties = {
  border: '2px solid #aaa', padding: 24, textAlign: 'center', cursor: 'pointer',
  background: '#fff', borderRadius: 4,
}
const choiceCardHighlightCss: React.CSSProperties = {
  ...choiceCardCss, border: '2px solid #000', background: '#f0f7ff',
}
const choiceIconCss: React.CSSProperties = { fontSize: 32, marginBottom: 12 }
const choiceTitleCss: React.CSSProperties = { fontSize: 16, fontWeight: 600, marginBottom: 8 }
const choiceDescCss: React.CSSProperties = { fontSize: 13, color: '#555', lineHeight: 1.4 }
const closeBtnCss: React.CSSProperties = {
  border: 'none', background: 'none', fontSize: 20, cursor: 'pointer', color: '#888', padding: '4px 8px',
}

export default function TemplateChoice({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Modal — Template / Blank Choice (Step 1)</RegionLabel>}
      <div style={overlayCss}>
        <div style={headerCss}>
          <span>Create Board</span>
          <button style={closeBtnCss} aria-label="Close">✕</button>
        </div>
        <div style={bodyCss}>
          {showStructure && <RegionLabel top={0} left={0}>Choice Cards — Two-Column Grid</RegionLabel>}
          <p style={{ fontSize: 15, marginBottom: 20, textAlign: 'center', color: '#333' }}>
            How would you like to start?
          </p>

          <div style={choiceGridCss}>
            <div style={choiceCardHighlightCss}>
              <div style={choiceIconCss}>📋</div>
              <div style={choiceTitleCss}>Start from template</div>
              <div style={choiceDescCss}>Pick a pre-built template to get started faster</div>
            </div>
            <div style={choiceCardCss}>
              <div style={choiceIconCss}>⬜</div>
              <div style={choiceTitleCss}>Start blank</div>
              <div style={choiceDescCss}>Empty board with 3 default lists (To Do, In Progress, Done)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
