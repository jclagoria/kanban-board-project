import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss as paneBaseCss, footerCss } from '@/components/shared/wireframes/_designTokens'

const paneCss: React.CSSProperties = {
  ...paneBaseCss,
  maxWidth: 720,
  filter: 'blur(1px)', opacity: 0.5,
}
const overlayCss: React.CSSProperties = {
  position: 'absolute', inset: 0, display: 'flex',
  alignItems: 'center', justifyContent: 'center',
  background: 'rgba(0,0,0,0.2)', zIndex: 20,
}
const dialogCss: React.CSSProperties = {
  background: '#fff', border: '1px solid #888',
  padding: 24, minWidth: 420, maxWidth: 480,
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  position: 'relative',
}
const dialogTitleCss: React.CSSProperties = {
  fontSize: 16, fontWeight: 700, marginBottom: 16,
  display: 'flex', alignItems: 'center', gap: 8,
}
const bodyTextCss: React.CSSProperties = {
  fontSize: 13, color: '#444', lineHeight: 1.6, marginBottom: 16,
}
const bulletListCss: React.CSSProperties = {
  fontSize: 13, color: '#444', lineHeight: 1.8,
  paddingLeft: 20, marginBottom: 20,
}
const affectedRowCss: React.CSSProperties = {
  border: '1px solid #eee', background: '#fff8f0',
  padding: '10px 14px', fontSize: 13, fontWeight: 600,
  marginBottom: 20, borderRadius: 4,
}
const cancelBtnCss: React.CSSProperties = {
  padding: '8px 20px', border: '1px solid #888', background: '#fff',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const deleteConfirmBtnCss: React.CSSProperties = {
  padding: '8px 20px', background: '#c00', color: '#fff', border: 'none',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd', fontSize: 15, fontWeight: 600,
}
const bodyBgCss: React.CSSProperties = { padding: 24 }
const fieldItemCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 12,
  padding: '10px 0', borderBottom: '1px solid #eee',
}
const dragHandleCss: React.CSSProperties = {
  fontSize: 16, color: '#999', width: 20, textAlign: 'center',
}
const fieldInfoCss: React.CSSProperties = { flex: 1 }
const fieldNameCss: React.CSSProperties = { fontSize: 14, fontWeight: 600 }
const fieldMetaCss: React.CSSProperties = { fontSize: 12, color: '#666', marginTop: 2 }

const fields = [
  { name: 'Campaign Channel', type: 'Dropdown', required: true, meta: '5 options' },
  { name: 'Priority', type: 'Dropdown', required: true, meta: '3 options' },
  { name: 'Story Points', type: 'Number', required: false, meta: 'min:1 max:21' },
  { name: 'Launch Date', type: 'Date', required: false, meta: '' },
  { name: 'Notes', type: 'Long Text', required: false, meta: 'max:5000 chars' },
]

export default function FieldLifecycleDeleteConfirm({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Delete Confirmation Dialog</RegionLabel>}
      <div style={{ position: 'relative' }}>

        {/* Background: settings list */}
        <div style={paneCss}>
          <div style={headerCss}>
            <span>Board Settings — Sprint 42</span>
            <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>✕</button>
          </div>
          <div style={bodyBgCss}>
            {fields.map(f => (
              <div key={f.name} style={fieldItemCss}>
                <span style={dragHandleCss}>⠿</span>
                <div style={fieldInfoCss}>
                  <div style={fieldNameCss}>{f.name}</div>
                  <div style={fieldMetaCss}>
                    {f.type} · {f.required ? 'Required' : 'Optional'}{f.meta ? ` · ${f.meta}` : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overlay dialog */}
        <div style={overlayCss}>
          <div style={dialogCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Dialog — Confirm Delete</RegionLabel>}
            <div style={dialogTitleCss}>
              <span style={{ color: '#c00', fontSize: 18 }}>⚠</span>
              Delete "Campaign Channel"?
            </div>

            <div style={bodyTextCss}>
              This will remove the field from all cards.
            </div>

            <ul style={bulletListCss}>
              <li>The field will disappear from all card detail panes and Table view columns immediately.</li>
              <li>Field values are retained for 30 days in the audit history but will no longer appear on cards.</li>
              <li>This action can be reversed within 30 days by contacting support.</li>
            </ul>

            <div style={affectedRowCss}>
              Cards affected: 42 cards have values for this field.
            </div>

            <div style={footerCss}>
              <button style={cancelBtnCss}>Cancel</button>
              <button style={deleteConfirmBtnCss}>Delete permanently</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
