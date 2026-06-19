import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss, tabActiveCss, tabInactiveCss, sectionTitleCss, dividerCss, actionBtnCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd', fontSize: 15, fontWeight: 600,
}
const tabsRowCss: React.CSSProperties = {
  display: 'flex', gap: 2, borderBottom: '1px solid #ccc', padding: '0 20px',
}
const bodyCss: React.CSSProperties = { padding: 24 }
const sectionHeaderCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  marginBottom: 20, position: 'relative',
}
const addBtnCss: React.CSSProperties = {
  padding: '6px 16px', border: '1px solid #888', background: '#fff',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const fieldItemCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 12,
  padding: '10px 0', borderBottom: '1px solid #eee', position: 'relative',
}
const dragHandleCss: React.CSSProperties = {
  fontSize: 16, color: '#999', cursor: 'grab', userSelect: 'none', width: 20, textAlign: 'center',
}
const fieldInfoCss: React.CSSProperties = { flex: 1 }
const fieldNameCss: React.CSSProperties = { fontSize: 14, fontWeight: 600 }
const fieldMetaCss: React.CSSProperties = { fontSize: 12, color: '#666', marginTop: 2 }
const deleteBtnCss: React.CSSProperties = {
  ...actionBtnCss, border: '1px solid #c00', color: '#c00',
}
const reorderHintCss: React.CSSProperties = {
  fontSize: 11, color: '#999', fontStyle: 'italic', marginTop: 12, textAlign: 'center',
}

const fields = [
  { name: 'Campaign Channel', type: 'Dropdown', required: true, meta: '5 options' },
  { name: 'Priority', type: 'Dropdown', required: true, meta: '3 options' },
  { name: 'Story Points', type: 'Number', required: false, meta: 'min:1 max:21' },
  { name: 'Launch Date', type: 'Date', required: false, meta: '' },
  { name: 'Notes', type: 'Long Text', required: false, meta: 'max:5000 chars' },
]

export default function FieldLifecycleReorderDrag({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Settings — Reorder Fields (drag handles)</RegionLabel>}
      <div style={shellCss}>
        <div style={headerCss}>
          <span>Board Settings — Sprint 42</span>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>✕</button>
        </div>

        <div style={tabsRowCss}>
          <button style={tabInactiveCss}>General</button>
          <button style={tabInactiveCss}>Members</button>
          <button style={tabActiveCss}>Custom Fields</button>
          <button style={tabInactiveCss}>Danger</button>
        </div>

        <div style={bodyCss}>
          <div style={sectionHeaderCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Heading + Add Button</RegionLabel>}
            <h2 style={sectionTitleCss}>Custom Fields</h2>
            <button style={addBtnCss}>+ Add</button>
          </div>

          <hr style={dividerCss} />

          {showStructure && <RegionLabel top={0} left={0}>Field List — Drag handles (⠿) + Edit/Delete buttons</RegionLabel>}
          {fields.map(f => (
            <div key={f.name} style={fieldItemCss}>
              <span style={dragHandleCss}>⠿</span>
              <div style={fieldInfoCss}>
                <div style={fieldNameCss}>{f.name}</div>
                <div style={fieldMetaCss}>
                  {f.type} · {f.required ? 'Required' : 'Optional'}{f.meta ? ` · ${f.meta}` : ''}
                </div>
              </div>
              <button style={actionBtnCss}>✎</button>
              <button style={deleteBtnCss}>🗑</button>
            </div>
          ))}

          <div style={reorderHintCss}>
            ⠿⠿  Grab handles — click and drag to reorder
          </div>
        </div>
      </div>
    </div>
  )
}
