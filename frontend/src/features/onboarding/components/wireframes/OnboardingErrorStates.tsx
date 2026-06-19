import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss } from '@/components/shared/wireframes/_designTokens'

/* ── Nav bar ── */
const navCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 20px', borderBottom: '1px solid #ddd', fontSize: 13,
}

/* ── Error toast ── */
const toastCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 10,
  padding: '10px 14px', background: '#fff5f5', border: '1px solid #c00',
  borderRadius: 4, marginBottom: 12, fontSize: 13, position: 'relative',
}
const toastIconCss: React.CSSProperties = { fontSize: 16, flexShrink: 0 }
const toastMsgCss: React.CSSProperties = { flex: 1, lineHeight: 1.4 }
const toastCloseCss: React.CSSProperties = {
  border: 'none', background: 'none', cursor: 'pointer', fontSize: 16, color: '#a00',
  flexShrink: 0,
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
const tabActiveCss: React.CSSProperties = {
  padding: '10px 16px', fontSize: 12, cursor: 'pointer', whiteSpace: 'nowrap',
  fontWeight: 700, color: '#1976d2', borderBottom: '2px solid #1976d2',
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

/* ── Failed card ── */
const failedCardCss: React.CSSProperties = {
  ...templateCardCss, border: '2px solid #c00',
}
const failedBannerCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
  fontSize: 11, color: '#c00', fontWeight: 600, marginBottom: 6,
}
const btnRowCss: React.CSSProperties = { display: 'flex', gap: 6 }
const btnRetryCss: React.CSSProperties = {
  flex: 1, padding: '6px 0', fontSize: 12, background: '#fff',
  color: '#c00', border: '1px solid #c00', borderRadius: 4,
  cursor: 'pointer', textAlign: 'center', fontWeight: 600,
}
const btnUseDisabledCss: React.CSSProperties = {
  flex: 1, padding: '6px 0', fontSize: 12, background: '#ccc',
  color: '#fff', border: 'none', borderRadius: 4, cursor: 'not-allowed',
  textAlign: 'center',
}
const btnUseCss: React.CSSProperties = {
  display: 'block', width: '100%', padding: '6px 0', fontSize: 12,
  background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4,
  cursor: 'pointer', textAlign: 'center',
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

export default function OnboardingErrorStates({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Template Gallery — Error States (toast + failed card + retry)</RegionLabel>}
      <div style={paneCss}>
        <div style={navCss}>
          <span style={{ fontWeight: 700 }}>[Product] Boards [▼]</span>
          <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>🔔 Settings 👤 User</span>
        </div>

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Error toast — persistent, dismissable</RegionLabel>}
          <div style={toastCss}>
            <span style={toastIconCss}>⚠️</span>
            <span style={toastMsgCss}>
              We couldn't create that board right now. Try again or start from scratch.
            </span>
            <button style={toastCloseCss}>✕</button>
          </div>
        </div>

        <div style={{ ...sectionCss, paddingTop: 0 }}>
          {showStructure && <RegionLabel top={0} left={0}>Gallery modal with failed card</RegionLabel>}
          <div style={modalCss}>
            <div style={modalHeaderCss}>
              <span>◤ Create a new board</span>
              <span style={{ fontSize: 16, cursor: 'pointer', color: '#888' }}>✕</span>
            </div>

            <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid #ddd', background: '#fff' }}>
              <span style={tabActiveCss}>All</span>
            </div>

            <div style={templateGridCss}>
              {/* Sprint Board — failed state */}
              <div style={failedCardCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Failed state — ⚠️ Failed + Retry button</RegionLabel>}
                <div style={templateIconCss}>📋</div>
                <div style={templateNameCss}>Sprint Board</div>
                <div style={templateCategoryCss}>Engineering</div>
                <div style={templateDescCss}>Plan and track a 2-week sprint cycle.</div>
                <div style={templatePreviewCss}>
                  <div style={previewListCss}>Backl.</div>
                  <div style={previewListCss}>To Do</div>
                  <div style={previewListCss}>In Pr.</div>
                </div>
                <div style={templateMetaCss}>5 lists · 📋 3 sample cards</div>
                <div style={failedBannerCss}>⚠️ Failed</div>
                <div style={btnRowCss}>
                  <button style={btnRetryCss}>↻ Retry</button>
                  <div style={btnUseDisabledCss}>Use</div>
                </div>
              </div>

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

        <hr style={dividerCss} />
        <div style={{ ...sectionCss, fontSize: 11, color: '#888', fontStyle: 'italic' }}>
          Error triggers: server error (4xx/5xx), timeout (&gt;5s), network error. Gallery stays open.
          Retry re-initiates POST with same templateId. No partial board data persisted on failure.
        </div>
      </div>
    </div>
  )
}
