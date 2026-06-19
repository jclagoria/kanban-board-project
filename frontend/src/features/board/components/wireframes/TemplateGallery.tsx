import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'

const overlayCss: React.CSSProperties = {
  position: 'relative', border: '1px solid #aaa', background: '#fff',
  maxWidth: 680, margin: '0 auto',
}
const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '16px 20px', borderBottom: '1px solid #ddd', fontSize: 16, fontWeight: 600,
}
const bodyCss: React.CSSProperties = { padding: 24 }
const galleryGridCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12,
}
const templateCardCss: React.CSSProperties = {
  border: '1px solid #ccc', padding: 16, textAlign: 'center', cursor: 'pointer',
  background: '#fafafa', borderRadius: 4,
}
const templateIconCss: React.CSSProperties = { fontSize: 28, marginBottom: 8 }
const templateNameCss: React.CSSProperties = { fontSize: 13, fontWeight: 600 }
const closeBtnCss: React.CSSProperties = {
  border: 'none', background: 'none', fontSize: 20, cursor: 'pointer', color: '#888', padding: '4px 8px',
}
const backBtnCss: React.CSSProperties = {
  border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555',
  padding: '4px 8px', textDecoration: 'underline',
}

const templates = [
  { icon: '📊', name: 'Project Mgmt', desc: 'Track milestones & tasks' },
  { icon: '🏃', name: 'Sprint', desc: 'Agile sprint planning' },
  { icon: '📅', name: 'Content Calendar', desc: 'Plan content publish' },
  { icon: '🤝', name: 'CRM', desc: 'Manage leads & deals' },
  { icon: '⚙️', name: 'Engineering', desc: 'Dev workflow' },
  { icon: '📣', name: 'Marketing', desc: 'Campaign tracking' },
  { icon: '📖', name: 'Kanban 101', desc: 'Learn the basics' },
  { icon: '🎯', name: 'OKR', desc: 'Goal tracking' },
]

export default function TemplateGallery({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Modal — Template Gallery (Step 1b)</RegionLabel>}
      <div style={overlayCss}>
        <div style={headerCss}>
          <button style={backBtnCss}>← Back</button>
          <span>Choose a template</span>
          <button style={closeBtnCss} aria-label="Close">✕</button>
        </div>
        <div style={bodyCss}>
          {showStructure && <RegionLabel top={0} left={0}>Template Cards — Auto-Fill Grid</RegionLabel>}
          <p style={{ fontSize: 14, marginBottom: 16, color: '#555' }}>
            Pick a template to pre-fill your board with lists and cards
          </p>
          <div style={galleryGridCss}>
            {templates.map(t => (
              <div key={t.name} style={templateCardCss}>
                <div style={templateIconCss}>{t.icon}</div>
                <div style={templateNameCss}>{t.name}</div>
                <div style={{ fontSize: 11, color: '#777', marginTop: 4 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
