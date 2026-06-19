import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss } from '@/components/shared/wireframes/_designTokens'

/* ── Slimmed-down mobile nav ── */
const navCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '8px 16px', borderBottom: '1px solid #ddd', fontSize: 12,
}

/* ── Welcome card (full-screen on mobile, no overlay) ── */
const welcomeCardCss: React.CSSProperties = {
  margin: '12px 16px', border: '1px solid #ddd', borderRadius: 8,
  padding: 24, background: '#fff', position: 'relative',
}
const iconCss: React.CSSProperties = { fontSize: 32, marginBottom: 12, textAlign: 'center' }
const headlineCss: React.CSSProperties = {
  fontSize: 18, fontWeight: 700, textAlign: 'center', marginBottom: 10,
}
const bodyCss: React.CSSProperties = {
  fontSize: 14, color: '#555', textAlign: 'center', lineHeight: 1.5,
  marginBottom: 20,
}
const progressCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
  marginBottom: 20, fontSize: 12, color: '#888',
}
const dotCss: React.CSSProperties = {
  width: 10, height: 10, borderRadius: '50%', background: '#ccc',
}
const dotActiveCss: React.CSSProperties = { ...dotCss, background: '#1976d2' }
const navRowCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
  flexWrap: 'wrap',
}
const btnCss: React.CSSProperties = {
  padding: '8px 18px', fontSize: 13, border: '1px solid #aaa',
  borderRadius: 4, background: '#fff', cursor: 'pointer', flex: 1, textAlign: 'center',
}
const btnPrimaryCss: React.CSSProperties = {
  ...btnCss, background: '#1976d2', color: '#fff', border: '1px solid #1976d2',
}
const btnGhostCss: React.CSSProperties = {
  ...btnCss, border: 'none', color: '#1976d2', background: 'none',
}

/* ── Mobile board list (simplified) ── */
const mobileBoardCss: React.CSSProperties = {
  margin: '0 16px 12',
}
const boardItemCss: React.CSSProperties = {
  border: '1px solid #eee', borderRadius: 4, padding: 10, marginBottom: 6,
  background: '#fafafa', fontSize: 12,
}

/* ── Step indicator ── */
const stepLabelCss: React.CSSProperties = {
  fontSize: 11, color: '#888', textAlign: 'center', marginBottom: 4,
}

export default function OnboardingResponsiveMobile({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Mobile Viewport (&lt;768px) — Welcome Card (no overlay)</RegionLabel>}
      <div style={{ ...paneCss, maxWidth: 400 }}>
        {/* Mobile nav */}
        <div style={navCss}>
          <span style={{ fontWeight: 700 }}>[Product]</span>
          <span style={{ display: 'flex', gap: 6 }}>🔔 👤</span>
        </div>

        {/* Simplified board list */}
        <div style={mobileBoardCss}>
          {showStructure && <RegionLabel top={0} left={0}>Board list — simplified mobile layout</RegionLabel>}
          <div style={boardItemCss}><span style={{ fontWeight: 600 }}>Sprint 42</span> · 12 cards</div>
          <div style={boardItemCss}><span style={{ fontWeight: 600 }}>Marketing Q3</span> · 8 cards</div>
        </div>

        <hr style={dividerCss} />

        {/* Welcome card — replaces overlay on mobile */}
        <div style={{ ...sectionCss, padding: '12px 16px' }}>
          <div style={welcomeCardCss}>
            {showStructure && <RegionLabel top={0} left={0}>Full-screen welcome card (no overlay/highlight)</RegionLabel>}

            <div style={stepLabelCss}>Step 1 of 3</div>
            <div style={iconCss}>📋</div>
            <div style={headlineCss}>Welcome to [Product]</div>
            <div style={bodyCss}>
              Organize your projects visually. Let's take 30 seconds to show you around.
            </div>
            <div style={progressCss}>
              <div style={dotActiveCss} /><div style={dotCss} /><div style={dotCss} />
              <span style={{ marginLeft: 4 }}>Step 1 of 3</span>
            </div>
            <div style={navRowCss}>
              <button style={btnGhostCss}>Skip introduction</button>
              <button style={btnPrimaryCss}>Next →</button>
            </div>
          </div>

          {/* Step 3 — middle step with all buttons (mobile) */}
          <div style={welcomeCardCss}>
            {showStructure && <RegionLabel top={0} left={0}>Mobile — Step 3 (Back + Skip + Next)</RegionLabel>}

            <div style={stepLabelCss}>Step 3 of 3</div>
            <div style={iconCss}>💳</div>
            <div style={headlineCss}>Cards that carry context</div>
            <div style={bodyCss}>
              Add descriptions, checklists, due dates, comments, labels — plus custom fields for your workflow.
            </div>
            <div style={progressCss}>
              <div style={dotCss} /><div style={dotCss} /><div style={dotActiveCss} />
              <span style={{ marginLeft: 4 }}>Step 3 of 3</span>
            </div>
            <div style={navRowCss}>
              <button style={btnCss}>← Back</button>
              <button style={btnGhostCss}>Skip</button>
              <button style={btnPrimaryCss}>Finish ✓</button>
            </div>
          </div>
        </div>

        <hr style={dividerCss} />
        <div style={{ ...sectionCss, padding: '12px 16px', fontSize: 11, color: '#888', fontStyle: 'italic' }}>
          Below 768 px: overlay tour is replaced with a simple full-screen welcome card.
          No element highlighting, no dimmed backdrop. Same step content. 3 steps instead of 5.
          Touch targets ≥ 44 px. Board lists stack vertically. Nav collapses to icon-only.
        </div>
      </div>
    </div>
  )
}
