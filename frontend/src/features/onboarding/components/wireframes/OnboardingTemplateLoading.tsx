import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss } from '@/components/shared/wireframes/_designTokens'

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

/* ── Tab bar ── */
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
  padding: 14, position: 'relative',
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

/* ── Loading card ── */
const loadingCardCss: React.CSSProperties = {
  ...templateCardCss, border: '2px solid #1976d2', opacity: 0.85,
}
const spinnerCss: React.CSSProperties = {
  textAlign: 'center', padding: '12px 0', fontSize: 22, color: '#1976d2',
}
const creatingTextCss: React.CSSProperties = {
  fontSize: 11, color: '#888', textAlign: 'center', marginBottom: 8,
}
const btnDisabledCss: React.CSSProperties = {
  ...btnUseCss, background: '#ccc', cursor: 'not-allowed',
}

/* ── Scratch card ── */
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

export default function OnboardingTemplateLoading({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Template Gallery — Loading State (spinner on Sprint Board)</RegionLabel>}
      <div style={paneCss}>
        <div style={navCss}>
          <span style={{ fontWeight: 700 }}>[Product] Boards [▼]</span>
          <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>🔔 Settings 👤 User</span>
        </div>

        <div style={modalCss}>
          {showStructure && <RegionLabel top={0} left={0}>Gallery modal — Sprint Board in loading state</RegionLabel>}
          <div style={modalHeaderCss}>
            <span>◤ Create a new board</span>
            <span style={{ fontSize: 16, cursor: 'pointer', color: '#888' }}>✕</span>
          </div>

          <div style={tabBarCss}>
            <span style={tabActiveCss}>All</span>
            <span style={tabCss}>Engineering</span>
            <span style={tabCss}>Marketing</span>
            <span style={tabCss}>Project Mgmt</span>
            <span style={tabCss}>CRM</span>
            <span style={tabCss}>Content Calendar</span>
          </div>

          <div style={templateGridCss}>
            {/* Sprint Board — loading state */}
            <div style={loadingCardCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Loading state — spinner + disabled</RegionLabel>}
              <div style={templateIconCss}>📋</div>
              <div style={templateNameCss}>Sprint Board</div>
              <div style={templateCategoryCss}>Engineering</div>
              <div style={spinnerCss}>◌ ◌ ◌ ◌ ◌</div>
              <div style={creatingTextCss}>Creating board...</div>
              <div style={{ ...templatePreviewCss, opacity: 0.5 }}>
                <div style={previewListCss}>Backl.</div>
                <div style={previewListCss}>To Do</div>
                <div style={previewListCss}>In Pr.</div>
              </div>
              <div style={templateMetaCss}>5 lists · 📋 3 sample cards</div>
              <div style={btnDisabledCss}>⏳ Creating...</div>
            </div>

            {/* Other templates — still selectable */}
            <div style={templateCardCss}>
              <div style={templateIconCss}>📅</div>
              <div style={templateNameCss}>Content Calendar</div>
              <div style={templateCategoryCss}>Marketing</div>
              <div style={templateDescCss}>Schedule posts across channels.</div>
              <div style={templatePreviewCss}>
                <div style={previewListCss}>Ideas</div>
                <div style={previewListCss}>Draft</div>
                <div style={previewListCss}>Pub.</div>
              </div>
              <div style={templateMetaCss}>4 lists · 📋 2 sample cards</div>
              <div style={btnUseCss}>Use this template</div>
            </div>

            <div style={templateCardCss}>
              <div style={templateIconCss}>🏗️</div>
              <div style={templateNameCss}>Project Mgmt</div>
              <div style={templateCategoryCss}>Project Mgmt</div>
              <div style={templateDescCss}>Track milestones & deliverables.</div>
              <div style={templatePreviewCss}>
                <div style={previewListCss}>Backl.</div>
                <div style={previewListCss}>To Do</div>
                <div style={previewListCss}>In Pr.</div>
              </div>
              <div style={templateMetaCss}>6 lists · 📋 2 sample cards</div>
              <div style={btnUseCss}>Use this template</div>
            </div>

            {/* Start from scratch */}
            <div style={scratchCardCss}>
              <div style={scratchIconCss}>📄</div>
              <div style={scratchInfoCss}>
                <div style={scratchNameCss}>Start from scratch</div>
                <div style={scratchDescCss}>Create an empty board with 3 default lists.</div>
                <div style={scratchMetaCss}>3 default lists: To Do · In Progress · Done</div>
              </div>
              <button style={btnScratchCss}>Create empty board</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
