import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss, actionBtnCss } from '@/components/shared/wireframes/_designTokens'

const innerCss: React.CSSProperties = {
  border: '1px solid #ddd', borderRadius: 4, margin: 24, padding: 4,
  position: 'relative',
}
const fieldItemCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 12,
  padding: '12px 16px', border: '2px solid #000', background: '#f8f8ff',
  position: 'relative',
}
const dragHandleCss: React.CSSProperties = {
  fontSize: 18, color: '#999', cursor: 'grab', userSelect: 'none', width: 20, textAlign: 'center',
}
const fieldInfoCss: React.CSSProperties = { flex: 1 }
const fieldNameCss: React.CSSProperties = { fontSize: 14, fontWeight: 600 }
const fieldMetaCss: React.CSSProperties = { fontSize: 12, color: '#666', marginTop: 2 }
const moveBtnCss: React.CSSProperties = {
  padding: '4px 10px', border: '1px solid #888', background: '#fff',
  fontSize: 12, fontWeight: 600, cursor: 'pointer',
}
const deleteBtnCss: React.CSSProperties = {
  ...actionBtnCss, border: '1px solid #c00', color: '#c00',
}

export default function FieldLifecycleReorderKeyboard({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Reorder — Keyboard Alternative (Move Up/Down)</RegionLabel>}
      <div style={shellCss}>
        <div style={innerCss}>
          {showStructure && <RegionLabel top={-2} left={0}>Focused field — keyboard move controls</RegionLabel>}
          <div style={fieldItemCss}>
            <span style={dragHandleCss}>⠿</span>
            <div style={fieldInfoCss}>
              <div style={fieldNameCss}>Campaign Channel</div>
              <div style={fieldMetaCss}>Dropdown · Required · 5 options</div>
            </div>
            <button style={moveBtnCss}>▲ Up</button>
            <button style={moveBtnCss}>▼ Down</button>
            <button style={actionBtnCss}>✎</button>
            <button style={deleteBtnCss}>🗑</button>
          </div>
        </div>
      </div>
    </div>
  )
}
