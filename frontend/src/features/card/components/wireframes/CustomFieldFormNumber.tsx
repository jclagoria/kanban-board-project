import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { fieldCss, inputCss, selectCss, sectionTitleCss, footerCss } from '@/components/shared/wireframes/_designTokens'

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
const configBoxCss: React.CSSProperties = {
  border: '1px solid #ddd', padding: 16, borderRadius: 4, background: '#fafafa',
  position: 'relative',
}
const configRowCss: React.CSSProperties = { display: 'flex', gap: 16, marginBottom: 12, alignItems: 'flex-end' }
const configFieldCss: React.CSSProperties = { flex: 1, position: 'relative' }
const configLabelCss: React.CSSProperties = { display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 4, color: '#444' }
const configInputCss: React.CSSProperties = {
  width: '100%', padding: '6px 10px', border: '1px solid #aaa', fontSize: 13,
  boxSizing: 'border-box',
}
const checkboxRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16,
}
const cancelBtnCss: React.CSSProperties = {
  padding: '8px 20px', border: '1px solid #888', background: '#fff',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const saveBtnCss: React.CSSProperties = {
  padding: '8px 20px', background: '#000', color: '#fff', border: 'none',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}

export default function CustomFieldFormNumber({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Modal — Add Custom Field (Number type)</RegionLabel>}
      <div style={formCss}>
        <div style={headerCss}>
          <span>Add Custom Field</span>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>Cancel</button>
        </div>

        <div style={bodyCss}>
          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Name (required, 2-50 chars)</RegionLabel>}
            <label style={labelCss}>
              Field name <span style={hintCss}>(2-50 chars)</span>
            </label>
            <input style={inputCss} type="text" defaultValue="Story Points" placeholder="Enter field name" />
          </div>

          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Type (Number selected)</RegionLabel>}
            <label style={labelCss}>Field type</label>
            <select style={selectCss} defaultValue="number">
              <option value="dropdown">Dropdown</option>
              <option value="number">Number</option>
              <option value="date">Date</option>
              <option value="email">Email</option>
              <option value="short-text">Short Text</option>
              <option value="long-text">Long Text</option>
              <option value="checkbox">Checkbox</option>
              <option value="url">URL</option>
            </select>
          </div>

          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Section — Number Configuration</RegionLabel>}
            <div style={configBoxCss}>
              <div style={sectionTitleCss}>Number Configuration</div>
              <div style={configRowCss}>
                <div style={configFieldCss}>
                  <label style={configLabelCss}>Min value</label>
                  <input style={configInputCss} type="number" defaultValue={1} />
                </div>
                <div style={configFieldCss}>
                  <label style={configLabelCss}>Max value</label>
                  <input style={configInputCss} type="number" defaultValue={21} />
                </div>
              </div>
              <div style={configRowCss}>
                <div style={configFieldCss}>
                  <label style={configLabelCss}>Step increment</label>
                  <input style={configInputCss} type="number" defaultValue={1} />
                </div>
                <div style={{ flex: 1 }} />
              </div>
            </div>
          </div>

          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Toggle — Required Field</RegionLabel>}
            <div style={checkboxRowCss}>
              <input type="checkbox" />
              <label style={{ fontSize: 13, cursor: 'pointer' }}>Required field</label>
            </div>
          </div>

          <div style={footerCss}>
            {showStructure && <RegionLabel top={-4} right={0}>Actions — Cancel / Save</RegionLabel>}
            <button style={cancelBtnCss}>Cancel</button>
            <button style={saveBtnCss}>Save Field</button>
          </div>
        </div>
      </div>
    </div>
  )
}
