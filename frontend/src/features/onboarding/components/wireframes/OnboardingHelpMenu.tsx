import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss } from '@/components/shared/wireframes/_designTokens'

/* ── Nav bar ── */
const navCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 0', borderBottom: '1px solid #ddd', marginBottom: 16,
  fontSize: 13, position: 'relative',
}
const navRightCss: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 10 }

/* ── Help dropdown ── */
const helpBtnCss: React.CSSProperties = {
  padding: '4px 10px', border: '1px solid #aaa', borderRadius: 4,
  background: '#fff', cursor: 'pointer', fontSize: 13, display: 'flex',
  alignItems: 'center', gap: 4, position: 'relative',
}
const dropdownCss: React.CSSProperties = {
  position: 'absolute', right: 0, top: 30, width: 200,
  border: '1px solid #aaa', borderRadius: 4, background: '#fff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 20, overflow: 'hidden',
}
const dropdownItemCss: React.CSSProperties = {
  padding: '9px 14px', fontSize: 13, cursor: 'pointer',
  display: 'flex', alignItems: 'center', gap: 8,
  borderBottom: '1px solid #f5f5f5',
}
const dropdownItemLastCss: React.CSSProperties = { ...dropdownItemCss, borderBottom: 'none' }
const dividerItemCss: React.CSSProperties = {
  height: 1, background: '#eee', margin: '4px 0',
}
const tourItemCss: React.CSSProperties = {
  ...dropdownItemCss, fontWeight: 600, color: '#1976d2',
}
const tourItemLastCss: React.CSSProperties = { ...tourItemCss, borderBottom: 'none' }

/* ── Board grid ── */
const boardGridCss: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8,
}
const boardCardCss: React.CSSProperties = {
  border: '1px solid #ddd', borderRadius: 4, padding: 12, background: '#fafafa',
  fontSize: 12,
}
const boardNameCss: React.CSSProperties = { fontWeight: 700, marginBottom: 4 }
const boardMetaCss: React.CSSProperties = { fontSize: 11, color: '#888' }

export default function OnboardingHelpMenu({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Dashboard — Help Menu with Tour Replay Option</RegionLabel>}
      <div style={paneCss}>
        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Nav bar with Help dropdown open</RegionLabel>}

          {/* Nav */}
          <div style={navCss}>
            <span style={{ fontWeight: 700 }}>[Product] Boards [▼]</span>
            <div style={navRightCss}>
              <span>+ New Board</span>
              <span>🔔</span>
              <span>Settings</span>
              <span>👤 User</span>
              <div style={{ position: 'relative' }}>
                <div style={helpBtnCss}>
                  Help ▼
                </div>

                {/* Dropdown */}
                <div style={dropdownCss}>
                  {showStructure && <RegionLabel top={-2} left={0}>Help dropdown — "Take the introduction tour"</RegionLabel>}
                  <div style={dropdownItemCss}>
                    <span>📖</span> Docs
                  </div>
                  <div style={dropdownItemCss}>
                    <span>💬</span> Support
                  </div>
                  <div style={dividerItemCss} />
                  <div style={tourItemLastCss}>
                    <span>🎮</span> Take the introduction tour
                  </div>
                  <div style={dividerItemCss} />
                  <div style={dropdownItemLastCss}>
                    <span>ℹ️</span> About
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Boards */}
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>My Boards</div>
          <div style={boardGridCss}>
            <div style={boardCardCss}><div style={boardNameCss}>Sprint 42</div><div style={boardMetaCss}>12 cards · 4 members</div></div>
            <div style={boardCardCss}><div style={boardNameCss}>Marketing Q3</div><div style={boardMetaCss}>8 cards · 2 members</div></div>
            <div style={boardCardCss}><div style={boardNameCss}>Design System</div><div style={boardMetaCss}>5 cards · 1 member</div></div>
            <div style={boardCardCss}><div style={boardNameCss}>Product Launch</div><div style={boardMetaCss}>23 cards · 6 members</div></div>
          </div>

          <div style={{ fontSize: 11, color: '#888', fontStyle: 'italic', marginTop: 8 }}>
            "Take the introduction tour" is visible for all authenticated users regardless of onboarding status.
            Clicking restarts tour from Step 1 without changing onboarding_status.
          </div>
        </div>
      </div>
    </div>
  )
}
