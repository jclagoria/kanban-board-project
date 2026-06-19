import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss, sectionTitleCss } from '@/components/shared/wireframes/_designTokens'

/* ── Dashboard (dimmed background) ── */
const dashCss: React.CSSProperties = {
  border: '1px solid #aaa', background: '#fff', padding: 12, opacity: 0.35,
  filter: 'blur(1px)', position: 'relative', marginBottom: 16,
}
const dashBoardRowCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  marginBottom: 12, fontSize: 13,
}
const boardGridCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8,
}
const boardCardCss: React.CSSProperties = {
  border: '1px solid #ddd', borderRadius: 4, padding: 12, background: '#fafafa',
  fontSize: 12,
}
const boardNameCss: React.CSSProperties = { fontWeight: 700, marginBottom: 4 }
const boardMetaCss: React.CSSProperties = { fontSize: 11, color: '#888' }

/* ── Tour popover ── */
const popoverBaseCss: React.CSSProperties = {
  border: '2px solid #1976d2', borderRadius: 8, background: '#fff',
  padding: 20, maxWidth: 360, boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
  position: 'relative',
}
const iconCss: React.CSSProperties = { fontSize: 24, marginBottom: 8 }
const headlineCss: React.CSSProperties = { fontSize: 16, fontWeight: 700, marginBottom: 6 }
const bodyCss: React.CSSProperties = { fontSize: 13, color: '#555', lineHeight: 1.5, marginBottom: 12 }
const progressCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 4, marginBottom: 14,
  fontSize: 11, color: '#888',
}
const dotCss: React.CSSProperties = {
  width: 8, height: 8, borderRadius: '50%', background: '#ccc',
}
const dotActiveCss: React.CSSProperties = { ...dotCss, background: '#1976d2' }
const navRowCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
}
const btnCss: React.CSSProperties = {
  padding: '6px 14px', fontSize: 12, border: '1px solid #aaa',
  borderRadius: 4, background: '#fff', cursor: 'pointer',
}
const btnPrimaryCss: React.CSSProperties = {
  ...btnCss, background: '#1976d2', color: '#fff', border: '1px solid #1976d2',
}
const btnGhostCss: React.CSSProperties = {
  ...btnCss, border: 'none', color: '#1976d2', background: 'none',
}
const btnFinishCss: React.CSSProperties = {
  ...btnPrimaryCss, display: 'flex', alignItems: 'center', gap: 4,
}

/* ── Step variants container ── */
const stepsGridCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
}

export default function OnboardingTourSteps({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Dashboard — Tour Overlay Step Variants (1, 3, 5)</RegionLabel>}
      <div style={{ ...paneCss, maxWidth: 780, background: '#e8e8e8' }}>
        <div style={sectionCss}>
          <div style={sectionTitleCss}>Dashboard (dimmed backdrop shown once, tour popover variants below)</div>

          {/* Dimmed dashboard */}
          <div style={dashCss}>
            {showStructure && <RegionLabel top={0} left={0}>Dashboard — dimmed backdrop</RegionLabel>}
            <div style={dashBoardRowCss}>
              <span style={{ fontWeight: 700 }}>[Product] Boards [▼]</span>
              <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                + New Board 🔔 Settings 👤 User
              </span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>My Boards</div>
            <div style={boardGridCss}>
              <div style={boardCardCss}><div style={boardNameCss}>Sprint 42</div><div style={boardMetaCss}>12 cards · 4 members</div></div>
              <div style={boardCardCss}><div style={boardNameCss}>Marketing Q3</div><div style={boardMetaCss}>8 cards · 2 members</div></div>
              <div style={boardCardCss}><div style={boardNameCss}>Design System</div><div style={boardMetaCss}>5 cards · 1 member</div></div>
              <div style={boardCardCss}><div style={boardNameCss}>Product Launch</div><div style={boardMetaCss}>23 cards · 6 members</div></div>
            </div>
          </div>
        </div>

        <hr style={dividerCss} />
        <div style={sectionCss}>
          <div style={sectionTitleCss}>Tour Overlay — Step Variants (rendered over dimmed dashboard)</div>
          {showStructure && <RegionLabel top={0} left={0}>Tour popovers — Step 1, Step 3, Step 5</RegionLabel>}

          <div style={stepsGridCss}>
            {/* Step 1 — No Back */}
            <div style={popoverBaseCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Step 1: Welcome — no Back button</RegionLabel>}
              <div style={iconCss}>📋</div>
              <div style={headlineCss}>Welcome to [Product]</div>
              <div style={bodyCss}>
                Organize your projects visually. Let's take 30 seconds to show you around.
              </div>
              <div style={progressCss}>
                <div style={dotActiveCss} /><div style={dotCss} /><div style={dotCss} /><div style={dotCss} /><div style={dotCss} />
                <span style={{ marginLeft: 6 }}>Step 1 of 5</span>
              </div>
              <div style={navRowCss}>
                <div />
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={btnGhostCss}>Skip introduction</button>
                  <button style={btnPrimaryCss}>Next →</button>
                </div>
              </div>
            </div>

            {/* Step 3 — All buttons */}
            <div style={popoverBaseCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Step 3: Cards — Back + Skip + Next</RegionLabel>}
              <div style={iconCss}>💳</div>
              <div style={headlineCss}>Cards that carry context</div>
              <div style={bodyCss}>
                Add descriptions, checklists, due dates, comments, labels — plus custom fields for your workflow.
              </div>
              <div style={progressCss}>
                <div style={dotCss} /><div style={dotCss} /><div style={dotActiveCss} /><div style={dotCss} /><div style={dotCss} />
                <span style={{ marginLeft: 6 }}>Step 3 of 5</span>
              </div>
              <div style={navRowCss}>
                <button style={btnCss}>← Back</button>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={btnGhostCss}>Skip introduction</button>
                  <button style={btnPrimaryCss}>Next →</button>
                </div>
              </div>
            </div>

            {/* Step 5 — Finish */}
            <div style={popoverBaseCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Step 5: Template — Back + Skip + Finish</RegionLabel>}
              <div style={iconCss}>🚀</div>
              <div style={headlineCss}>Start with a template</div>
              <div style={bodyCss}>
                Don't start from scratch. Pick a pre-built template to hit the ground running.
              </div>
              <div style={progressCss}>
                <div style={dotCss} /><div style={dotCss} /><div style={dotCss} /><div style={dotCss} /><div style={dotActiveCss} />
                <span style={{ marginLeft: 6 }}>Step 5 of 5</span>
              </div>
              <div style={navRowCss}>
                <button style={btnCss}>← Back</button>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={btnGhostCss}>Skip introduction</button>
                  <button style={btnFinishCss}>Finish ✓</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={dividerCss} />
        <div style={{ ...sectionCss, fontSize: 11, color: '#888', fontStyle: 'italic' }}>
          Button visibility: Step 1 (Back hidden), Steps 2-4 (Back + Next + Skip), Step 5 (Back + Skip + Finish).
          Focus trapped in dialog. Escape = Skip. Tab cycles: Back → Skip → Next/Finish → Back.
        </div>
      </div>
    </div>
  )
}
