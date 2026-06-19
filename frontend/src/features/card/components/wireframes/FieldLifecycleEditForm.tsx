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
const optBoxCss: React.CSSProperties = {
  border: '1px solid #ddd', padding: 16, borderRadius: 4, background: '#fafafa',
  position: 'relative',
}
const optRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
}
const optNumCss: React.CSSProperties = { fontSize: 12, color: '#666', width: 16, textAlign: 'right' }
const optInputCss: React.CSSProperties = {
  flex: 1, padding: '6px 10px', border: '1px solid #aaa', fontSize: 13,
}
const removeBtnCss: React.CSSProperties = {
  border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#999', padding: '2px 6px',
}
const addOptBtnCss: React.CSSProperties = {
  border: 'none', background: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer',
  color: '#555', padding: 0, marginTop: 4,
}
const newBadgeCss: React.CSSProperties = {
  fontSize: 10, color: '#090', fontWeight: 600, marginLeft: 6,
}
const optionalSectionCss: React.CSSProperties = {
  marginTop: 20, paddingTop: 16, borderTop: '1px solid #ddd', position: 'relative',
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
const lockedTagCss: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 4,
  fontSize: 12, color: '#888', fontWeight: 600, marginLeft: 8,
}

const options = ['Email', 'Social Media', 'Paid Ads', 'Events', 'Webinar']

export default function FieldLifecycleEditForm({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Modal — Edit Custom Field (pre-populated)</RegionLabel>}
      <div style={formCss}>
        <div style={headerCss}>
          <span>Edit Custom Field</span>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>Cancel</button>
        </div>

        <div style={bodyCss}>
          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Name (pre-populated)</RegionLabel>}
            <label style={labelCss}>
              Field name <span style={hintCss}>(2-50 chars)</span>
            </label>
            <input style={inputCss} type="text" defaultValue="Campaign Channel" />
          </div>

          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Type (locked, immutable)</RegionLabel>}
            <label style={labelCss}>Field type</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <select style={{ ...selectCss, flex: 1 }} defaultValue="dropdown" disabled>
                <option value="dropdown">Dropdown</option>
              </select>
              <span style={lockedTagCss}>🔒 Locked</span>
            </div>
            <div style={{ fontSize: 12, color: '#888', marginTop: 4, fontStyle: 'italic' }}>
              ℹ Field type cannot be changed after creation. Delete and recreate to use a different type.
            </div>
          </div>

          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Section — Dropdown Options (5 options, 1 new)</RegionLabel>}
            <div style={optBoxCss}>
              <div style={sectionTitleCss}>Dropdown Options</div>
              {options.map((opt, i) => (
                <div key={i} style={optRowCss}>
                  <span style={optNumCss}>{i + 1}</span>
                  <input style={optInputCss} type="text" defaultValue={opt} />
                  <button style={removeBtnCss}>✕</button>
                  {i === 4 && <span style={newBadgeCss}>new</span>}
                </div>
              ))}
              <button style={addOptBtnCss}>+ Add option</button>
            </div>
          </div>

          <div style={optionalSectionCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Section — Optional Settings</RegionLabel>}
            <div style={sectionTitleCss}>Optional</div>

            <div style={checkboxRowCss}>
              <input type="checkbox" defaultChecked />
              <label style={{ fontSize: 13, cursor: 'pointer' }}>Required field</label>
            </div>

            <div style={fieldCss}>
              <label style={labelCss}>
                Default value <span style={hintCss}>(optional)</span>
              </label>
              <select style={selectCss} defaultValue="Email">
                <option value="Email">Email</option>
                <option value="Social Media">Social Media</option>
                <option value="Paid Ads">Paid Ads</option>
                <option value="Events">Events</option>
                <option value="Webinar">Webinar</option>
              </select>
            </div>

            <div style={fieldCss}>
              <label style={labelCss}>
                Help text (shown on hover) <span style={hintCss}>(max 200 chars)</span>
              </label>
              <input style={inputCss} type="text" defaultValue="Select the primary channel for this campaign." />
            </div>
          </div>

          <div style={footerCss}>
            {showStructure && <RegionLabel top={-4} right={0}>Actions — Cancel / Save Changes</RegionLabel>}
            <button style={cancelBtnCss}>Cancel</button>
            <button style={saveBtnCss}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
