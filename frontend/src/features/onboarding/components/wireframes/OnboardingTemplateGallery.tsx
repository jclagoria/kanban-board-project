import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss } from '@/components/shared/wireframes/_designTokens'

/* ── Nav bar ── */
const navCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 20px', borderBottom: '1px solid #ddd', fontSize: 13,
}

/* ── Modal ── */
const modalCss: React.CSSProperties = {
  border: '1px solid #aaa', margin: '8px 20px 16px', borderRadius: 4,
  background: '#fafafa', overflow: 'hidden', position: 'relative',
}
const modalHeaderCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 18px', borderBottom: '1px solid #ddd',
  fontSize: 15, fontWeight: 700,
}

/* ── Category tabs ── */
const tabBarCss: React.CSSProperties = {
  display: 'flex', gap: 0, borderBottom: '1px solid #ddd',
  overflowX: 'auto', background: '#fff',
}
const tabCss: React.CSSProperties = {
  padding: '10px 16px', fontSize: 12, cursor: 'pointer', whiteSpace: 'nowrap',
  color: '#666', borderBottom: '2px solid transparent',
}
const tabActiveCss: React.CSSProperties = {
  ...tabCss, fontWeight: 700, color: '#1976d2', borderBottom: '2px solid #1976d2',
}

/* ── Template grid ── */
const templateGridCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
  padding: 16,
}
const templateCardCss: React.CSSProperties = {
  border: '1px solid #ddd', borderRadius: 4, background: '#fff',
  padding: 14, position: 'relative', cursor: 'pointer',
}
const templateIconCss: React.CSSProperties = { fontSize: 22, marginBottom: 6 }
const templateNameCss: React.CSSProperties = { fontSize: 13, fontWeight: 700, marginBottom: 2 }
const templateCategoryCss: React.CSSProperties = {
  display: 'inline-block', fontSize: 10, fontWeight: 600, color: '#1976d2',
  background: '#e3f2fd', padding: '1px 6px', borderRadius: 3, marginBottom: 6,
}
const templateDescCss: React.CSSProperties = { fontSize: 12, color: '#555', marginBottom: 8, lineHeight: 1.4 }
const templatePreviewCss: React.CSSProperties = {
  display: 'flex', gap: 3, marginBottom: 8,
  padding: 6, background: '#f5f5f5', borderRadius: 3, minHeight: 28,
}
const previewListCss: React.CSSProperties = {
  flex: 1, background: '#ddd', borderRadius: 2, height: 20,
  fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#888',
}
const templateMetaCss: React.CSSProperties = { fontSize: 11, color: '#888', marginBottom: 8 }
const btnUseCss: React.CSSProperties = {
  display: 'block', width: '100%', padding: '6px 0', fontSize: 12,
  background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4,
  cursor: 'pointer', textAlign: 'center',
}

/* ── Start from scratch ── */
const scratchCardCss: React.CSSProperties = {
  ...templateCardCss, border: '2px dashed #1976d2', gridColumn: '1 / -1',
  display: 'flex', alignItems: 'center', gap: 16,
}
const scratchInfoCss: React.CSSProperties = { flex: 1 }
const scratchIconCss: React.CSSProperties = { fontSize: 28, flexShrink: 0 }
const scratchNameCss: React.CSSProperties = { fontSize: 14, fontWeight: 700, marginBottom: 2 }
const scratchDescCss: React.CSSProperties = { fontSize: 12, color: '#555', marginBottom: 4 }
const scratchMetaCss: React.CSSProperties = { fontSize: 11, color: '#888' }
const btnScratchCss: React.CSSProperties = {
  padding: '8px 20px', fontSize: 12, background: '#1976d2',
  color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer',
  flexShrink: 0, fontWeight: 600,
}

const TEMPLATES = [
  { icon: '📋', name: 'Sprint Board', cat: 'Engineering', desc: 'Plan and track a 2-week sprint cycle.', lists: 5, cards: 3, preview: ['Backl.', 'To Do', 'In Pr.'] },
  { icon: '📅', name: 'Content Calendar', cat: 'Marketing', desc: 'Schedule posts across channels.', lists: 4, cards: 2, preview: ['Ideas', 'Draft', 'Pub.'] },
  { icon: '🏗️', name: 'Project Mgmt', cat: 'Project Mgmt', desc: 'Track milestones & deliverables.', lists: 6, cards: 2, preview: ['Backl.', 'To Do', 'In Pr.'] },
  { icon: '🤝', name: 'CRM Pipeline', cat: 'CRM', desc: 'Manage leads & deals.', lists: 4, cards: 3, preview: ['Lead', 'Qual.', 'Deal'] },
  { icon: '🐛', name: 'Bug Tracker', cat: 'Engineering', desc: 'Track & triage bugs.', lists: 4, cards: 2, preview: ['New', 'Triage', 'Done'] },
  { icon: '🚀', name: 'Product Launch', cat: 'Marketing', desc: 'Coordinate launch campaign.', lists: 5, cards: 3, preview: ['Ideas', 'Prep', 'Launch'] },
]

export default function OnboardingTemplateGallery({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Dashboard — Template Gallery Modal (6 templates)</RegionLabel>}
      <div style={{ ...paneCss, maxWidth: 780 }}>
        <div style={navCss}>
          <span style={{ fontWeight: 700 }}>[Product] Boards [▼]</span>
          <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            + New Board 🔔 Settings 👤 User
          </span>
        </div>

        {/* Modal */}
        <div style={modalCss}>
          {showStructure && <RegionLabel top={0} left={0}>Template Gallery modal</RegionLabel>}
          <div style={modalHeaderCss}>
            <span>◤ Create a new board</span>
            <span style={{ fontSize: 16, cursor: 'pointer', color: '#888' }}>✕</span>
          </div>

          {/* Category tabs */}
          <div style={tabBarCss}>
            <span style={tabActiveCss}>All</span>
            <span style={tabCss}>Engineering</span>
            <span style={tabCss}>Marketing</span>
            <span style={tabCss}>Project Mgmt</span>
            <span style={tabCss}>CRM</span>
            <span style={tabCss}>Content Calendar</span>
          </div>

          {/* Templates */}
          <div style={templateGridCss}>
            {TEMPLATES.map(t => (
              <div key={t.name} style={templateCardCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Template: {t.name}</RegionLabel>}
                <div style={templateIconCss}>{t.icon}</div>
                <div style={templateNameCss}>{t.name}</div>
                <div style={templateCategoryCss}>{t.cat}</div>
                <div style={templateDescCss}>{t.desc}</div>
                <div style={templatePreviewCss}>
                  {t.preview.map(p => <div key={p} style={previewListCss}>{p}</div>)}
                </div>
                <div style={templateMetaCss}>{t.lists} lists · 📋 {t.cards} sample cards</div>
                <div style={btnUseCss}>Use this template</div>
              </div>
            ))}

            {/* Start from scratch */}
            <div style={scratchCardCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Start from scratch option</RegionLabel>}
              <div style={scratchIconCss}>📄</div>
              <div style={scratchInfoCss}>
                <div style={scratchNameCss}>Start from scratch</div>
                <div style={scratchDescCss}>Create an empty board with 3 default lists to set up your own workflow.</div>
                <div style={scratchMetaCss}>3 default lists: To Do · In Progress · Done</div>
              </div>
              <button style={btnScratchCss}>Create empty board</button>
            </div>
          </div>
        </div>

        <div style={{ ...sectionCss, paddingTop: 8, fontSize: 11, color: '#888', fontStyle: 'italic' }}>
          Entry points: End of tour (Step 5 → Finish) or manually from "+ New Board" button.
          Category tabs filter grid. "Start from scratch" creates empty board (3 lists).
        </div>
      </div>
    </div>
  )
}
