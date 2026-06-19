import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { fieldCss, inputCss } from '@/components/shared/wireframes/_designTokens'

const overlayCss: React.CSSProperties = {
  position: 'relative', border: '1px solid #aaa', background: '#fff',
  maxWidth: 560, margin: '0 auto',
}
const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '16px 20px', borderBottom: '1px solid #ddd', fontSize: 16, fontWeight: 600,
}
const bodyCss: React.CSSProperties = { padding: 24 }
const labelCss: React.CSSProperties = { display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }
const hintCss: React.CSSProperties = { fontSize: 11, color: '#888', float: 'right', fontWeight: 400 }
const inputErrorCss: React.CSSProperties = {
  ...inputCss, border: '1px solid #c00', background: '#fff5f5',
}
const errorMsgCss: React.CSSProperties = { fontSize: 12, color: '#c00', marginTop: 4, position: 'relative' }
const submitBtnCss: React.CSSProperties = { padding: '10px 24px', background: '#000', color: '#fff', border: 'none', fontSize: 14, fontWeight: 600, cursor: 'pointer', float: 'right' }

export default function CreationFormDuplicateError({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Modal — Creation Form (Duplicate Name Error)</RegionLabel>}
      <div style={overlayCss}>
        <div style={headerCss}>
          <span>Create Board</span>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>Cancel</button>
        </div>
        <div style={bodyCss}>
          <div style={fieldCss}>
            <label style={labelCss}>Board name <span style={hintCss}>(5-50 chars)</span></label>
            <input style={inputErrorCss} type="text" defaultValue="Sprint 24" />
            {showStructure && <RegionLabel top={24} left={0}>Duplicate Name Error — Inline</RegionLabel>}
            <div style={errorMsgCss}>You already have a board with this name. Please choose a different name.</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #ddd', paddingTop: 16 }}>
            <button style={submitBtnCss}>Create Board</button>
          </div>
        </div>
      </div>
    </div>
  )
}
