import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { fieldCss, inputCss, textareaCss, selectCss } from '@/components/shared/wireframes/_designTokens'

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
const rowCss: React.CSSProperties = { display: 'flex', gap: 16, alignItems: 'flex-start' }
const previewCardCss: React.CSSProperties = {
  width: 160, border: '1px solid #ccc', overflow: 'hidden', borderRadius: 4,
}
const previewBarCss: React.CSSProperties = { height: 36, background: '#d4e5f7' }
const previewInfoCss: React.CSSProperties = { padding: 10 }
const previewTitleCss: React.CSSProperties = { fontSize: 13, fontWeight: 600, marginBottom: 2 }
const previewMetaCss: React.CSSProperties = { fontSize: 11, color: '#888' }
const colorSwatchCss: React.CSSProperties = {
  width: 24, height: 24, border: '1px solid #aaa', background: '#d4e5f7', cursor: 'pointer',
}
const submitBtnCss: React.CSSProperties = {
  padding: '10px 24px', background: '#000', color: '#fff', border: 'none',
  fontSize: 14, fontWeight: 600, cursor: 'pointer', float: 'right',
}

export default function CreationForm({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Modal — Board Creation Form (Step 2)</RegionLabel>}
      <div style={overlayCss}>
        <div style={headerCss}>
          <span>Create Board</span>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>Cancel</button>
        </div>
        <div style={bodyCss}>
          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Board Name (required)</RegionLabel>}
            <label style={labelCss}>
              Board name <span style={hintCss}>(5-50 chars)</span>
            </label>
            <input style={inputCss} type="text" defaultValue="Sprint 24" placeholder="Enter board name" />
          </div>

          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Field — Description (optional)</RegionLabel>}
            <label style={labelCss}>Description <span style={hintCss}>(optional, max 500 chars)</span></label>
            <textarea style={textareaCss} defaultValue="Tasks for the next sprint" placeholder="Describe the board purpose" />
          </div>

          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Row — Visibility + Cover Color preview</RegionLabel>}
            <div style={rowCss}>
              <div style={{ flex: 1 }}>
                <label style={labelCss}>Visibility</label>
                <select style={selectCss} defaultValue="private">
                  <option value="private">Private (only invited members)</option>
                  <option value="invite-only">Invite-only</option>
                </select>
              </div>
              <div>
                <label style={labelCss}>Cover color</label>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <div style={colorSwatchCss} />
                  <span style={{ fontSize: 12, color: '#555' }}>Auto-assigned</span>
                </div>
              </div>
            </div>
          </div>

          <div style={fieldCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Preview — Board Card (live preview)</RegionLabel>}
            <label style={labelCss}>Preview</label>
            <div style={previewCardCss}>
              <div style={previewBarCss} />
              <div style={previewInfoCss}>
                <div style={previewTitleCss}>Sprint 24</div>
                <div style={previewMetaCss}>Private</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #ddd', paddingTop: 16 }}>
            {showStructure && <RegionLabel top={0} right={0}>Primary Action — Create Button</RegionLabel>}
            <button style={submitBtnCss}>Create Board</button>
          </div>
        </div>
      </div>
    </div>
  )
}
