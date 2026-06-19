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
const toastCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 10,
  padding: '10px 16px', background: '#fff5f5', border: '1px solid #c00',
  fontSize: 13, marginBottom: 20, position: 'relative',
}
const retryBtnCss: React.CSSProperties = {
  padding: '4px 12px', border: '1px solid #c00', background: '#fff',
  fontSize: 12, fontWeight: 600, cursor: 'pointer', color: '#c00', marginLeft: 'auto',
}
const cancelBtnCss: React.CSSProperties = {
  padding: '8px 20px', border: '1px solid #888', background: '#fff',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const saveBtnCss: React.CSSProperties = {
  padding: '8px 20px', background: '#000', color: '#fff', border: 'none',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}

const options = ['Email', 'Social Media', 'Paid Ads', 'Events']

export default function CustomFieldFormServerError({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Modal — Server Error with Retry</RegionLabel>}
      <div style={formCss}>
        <div style={headerCss}>
          <span>Add Custom Field</span>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>Cancel</button>
        </div>

        <div style={bodyCss}>
          <div style={toastCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Toast — Server Error (non-blocking)</RegionLabel>}
            <span>⚠</span>
            <span>Something went wrong. Please try again.</span>
            <button style={retryBtnCss}>Retry</button>
          </div>

          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Name (data intact)</RegionLabel>}
            <label style={labelCss}>
              Field name <span style={hintCss}>(2-50 chars)</span>
            </label>
            <input style={inputCss} type="text" defaultValue="Campaign Channel" />
          </div>

          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Type (Dropdown selected)</RegionLabel>}
            <label style={labelCss}>Field type</label>
            <select style={selectCss} defaultValue="dropdown">
              <option value="dropdown">Dropdown</option>
            </select>
          </div>

          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Section — Dropdown Options (data intact)</RegionLabel>}
            <div style={{
              border: '1px solid #ddd', padding: 16, borderRadius: 4, background: '#fafafa',
              position: 'relative',
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: '#333' }}>Dropdown Options</div>
              {options.map((opt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: '#666', width: 16, textAlign: 'right' }}>{i + 1}</span>
                  <input style={{ flex: 1, padding: '6px 10px', border: '1px solid #aaa', fontSize: 13 }} type="text" defaultValue={opt} />
                  <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#999' }}>✕</button>
                </div>
              ))}
              <button style={{ border: 'none', background: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer', color: '#555', padding: 0, marginTop: 4 }}>+ Add option</button>
            </div>
          </div>

          <div style={footerCss}>
            {showStructure && <RegionLabel top={-4} right={0}>Actions — Cancel / Save (enabled)</RegionLabel>}
            <button style={cancelBtnCss}>Cancel</button>
            <button style={saveBtnCss}>Save Field</button>
          </div>
        </div>
      </div>
    </div>
  )
}
