import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { fieldCss, inputCss, selectCss, footerCss } from '@/components/shared/wireframes/_designTokens'

const formCss: React.CSSProperties = {
  position: 'relative', border: '1px solid #aaa', background: '#fff',
  maxWidth: 600, margin: '0 auto',
}
const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '16px 20px', borderBottom: '1px solid #ddd', fontSize: 16, fontWeight: 600,
}
const bodyCss: React.CSSProperties = { padding: 24 }
const labelCss: React.CSSProperties = { display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }
const hintCss: React.CSSProperties = { fontSize: 11, color: '#888', float: 'right', fontWeight: 400 }
const inputErrorCss: React.CSSProperties = {
  ...inputCss, border: '1px solid #c00', paddingRight: 30,
}
const errorMsgCss: React.CSSProperties = {
  fontSize: 12, color: '#c00', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4,
}
const cancelBtnCss: React.CSSProperties = {
  padding: '8px 20px', border: '1px solid #888', background: '#fff',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const saveBtnCss: React.CSSProperties = {
  padding: '8px 20px', background: '#000', color: '#fff', border: 'none',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}

export default function CustomFieldFormDuplicateError({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Modal — Duplicate Name Error</RegionLabel>}
      <div style={formCss}>
        <div style={headerCss}>
          <span>Add Custom Field</span>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>Cancel</button>
        </div>

        <div style={bodyCss}>
          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Name (error state, duplicate)</RegionLabel>}
            <label style={labelCss}>
              Field name <span style={hintCss}>(2-50 chars)</span>
            </label>
            <div style={{ position: 'relative' }}>
              <input style={inputErrorCss} type="text" defaultValue="Priority" />
              <span style={{ position: 'absolute', right: 10, top: 8, color: '#c00', fontSize: 16 }}>!</span>
            </div>
            <div style={errorMsgCss}>
              <span>⚠</span> A field with this name already exists in this board.
            </div>
          </div>

          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Type (disabled, unchanged)</RegionLabel>}
            <label style={labelCss}>Field type</label>
            <select style={selectCss} defaultValue="dropdown">
              <option value="dropdown">Dropdown</option>
            </select>
          </div>

          <div style={footerCss}>
            {showStructure && <RegionLabel top={-4} right={0}>Actions — Cancel / Save (disabled)</RegionLabel>}
            <button style={cancelBtnCss}>Cancel</button>
            <button style={{ ...saveBtnCss, opacity: 0.5, cursor: 'not-allowed' }}>Save Field</button>
          </div>
        </div>
      </div>
    </div>
  )
}
