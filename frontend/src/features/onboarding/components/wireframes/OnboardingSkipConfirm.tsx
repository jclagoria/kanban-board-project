import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss } from '@/components/shared/wireframes/_designTokens'

/* ── Dashboard (normal, no dim) ── */
const dashCss: React.CSSProperties = {
  border: '1px solid #aaa', background: '#fff', padding: 12,
  opacity: 0.4, filter: 'blur(1px)', marginBottom: 16,
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

/* ── Skip confirmation dialog ── */
const dialogOverlayCss: React.CSSProperties = {
  position: 'absolute', inset: 0, display: 'flex',
  alignItems: 'center', justifyContent: 'center', zIndex: 20,
  background: 'rgba(0,0,0,0.3)',
}
const dialogCss: React.CSSProperties = {
  border: '2px solid #1976d2', borderRadius: 8, background: '#fff',
  padding: 24, maxWidth: 380, width: '100%', boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
  position: 'relative',
}
const dialogIconCss: React.CSSProperties = { fontSize: 28, marginBottom: 10, textAlign: 'center' }
const dialogTitleCss: React.CSSProperties = {
  fontSize: 16, fontWeight: 700, textAlign: 'center', marginBottom: 8,
}
const dialogBodyCss: React.CSSProperties = {
  fontSize: 13, color: '#555', textAlign: 'center', lineHeight: 1.5,
  marginBottom: 20,
}
const dialogActionsCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'center', gap: 10,
}
const btnCss: React.CSSProperties = {
  padding: '8px 20px', fontSize: 13, borderRadius: 4, cursor: 'pointer',
  border: '1px solid #aaa', background: '#fff',
}
const btnSkipCss: React.CSSProperties = {
  ...btnCss, background: '#c00', color: '#fff', border: '1px solid #c00',
}

export default function OnboardingSkipConfirm({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Skip Confirmation Dialog (over dashboard)</RegionLabel>}
      <div style={{ ...paneCss, background: '#e8e8e8' }}>
        <div style={sectionCss}>
          {/* Dashboard backdrop */}
          <div style={dashCss}>
            {showStructure && <RegionLabel top={0} left={0}>Dashboard — blurred backdrop</RegionLabel>}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: 13 }}>
              <span style={{ fontWeight: 700 }}>[Product] Boards [▼]</span>
              <span>+ New Board 🔔 Settings 👤 User</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>My Boards</div>
            <div style={boardGridCss}>
              <div style={boardCardCss}><div style={boardNameCss}>Sprint 42</div><div style={boardMetaCss}>12 cards · 4 members</div></div>
              <div style={boardCardCss}><div style={boardNameCss}>Marketing Q3</div><div style={boardMetaCss}>8 cards · 2 members</div></div>
            </div>
          </div>

          {/* Skip confirmation dialog */}
          <div style={dialogOverlayCss}>
            <div style={dialogCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Skip confirmation dialog</RegionLabel>}
              <div style={dialogIconCss}>🤚</div>
              <div style={dialogTitleCss}>Skip the introduction tour?</div>
              <div style={dialogBodyCss}>
                You can always restart it later from the help menu.
              </div>
              <div style={dialogActionsCss}>
                <button style={btnCss}>Stay</button>
                <button style={btnSkipCss}>Skip tour</button>
              </div>
            </div>
          </div>

          <div style={{ fontSize: 11, color: '#888', fontStyle: 'italic', marginTop: 220 }}>
            Skip also triggered by pressing Escape. Dialog is a browser confirm replacement with accessible focus trap.
          </div>
        </div>
      </div>
    </div>
  )
}
