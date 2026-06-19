import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss } from '@/components/shared/wireframes/_designTokens'

const sectionCss: React.CSSProperties = { position: 'relative' }

/* ── Nav bar ── */
const navCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '10px 20px', borderBottom: '1px solid #ddd', background: '#fafafa',
}
const navTitleCss: React.CSSProperties = { fontSize: 15, fontWeight: 700 }
const navRightCss: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12 }
const bellWrapCss: React.CSSProperties = { position: 'relative', cursor: 'pointer' }
const bellCss: React.CSSProperties = { fontSize: 20, lineHeight: 1 }

/* ── Panel ── */
const panelCss: React.CSSProperties = {
  position: 'absolute', right: 20, top: 48, width: 380,
  border: '1px solid #aaa', borderRadius: 4, background: '#fff',
  boxShadow: '0 4px 16px rgba(0,0,0,0.15)', zIndex: 20, overflow: 'hidden',
}
const panelHeaderCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '12px 16px', borderBottom: '1px solid #eee',
}
const panelTitleCss: React.CSSProperties = { fontSize: 14, fontWeight: 700 }
const markAllCss: React.CSSProperties = { fontSize: 12, color: '#1976d2', cursor: 'pointer', border: 'none', background: 'none' }

/* ── Filter bar ── */
const filterBarCss: React.CSSProperties = {
  display: 'flex', gap: 4, padding: '8px 16px', borderBottom: '1px solid #eee',
  background: '#fafafa',
}
const filterPillCss: React.CSSProperties = {
  padding: '4px 10px', fontSize: 11, borderRadius: 12, cursor: 'pointer',
  border: '1px solid #ccc', background: '#fff', color: '#666',
}
const filterActiveCss: React.CSSProperties = {
  ...filterPillCss, background: '#1976d2', color: '#fff', border: '1px solid #1976d2',
}

const boardLabelCss: React.CSSProperties = {
  padding: '4px 16px', fontSize: 11, fontWeight: 700, color: '#888',
  textTransform: 'uppercase', letterSpacing: 0.5,
}
const notifItemCss: React.CSSProperties = {
  display: 'flex', gap: 10, padding: '10px 16px', cursor: 'pointer',
  borderBottom: '1px solid #f5f5f5', position: 'relative',
}
const avatarSmCss: React.CSSProperties = {
  width: 32, height: 32, borderRadius: '50%', background: '#e0e0e0',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: 12, fontWeight: 700, color: '#555', flexShrink: 0,
}
const notifContentCss: React.CSSProperties = { flex: 1, minWidth: 0 }
const notifTitleCss: React.CSSProperties = { fontSize: 13, fontWeight: 600, marginBottom: 2 }
const notifSnippetCss: React.CSSProperties = { fontSize: 12, color: '#666', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
const notifTimeCss: React.CSSProperties = { fontSize: 11, color: '#999', marginTop: 2 }
const unreadDotCss: React.CSSProperties = {
  width: 8, height: 8, borderRadius: '50%', background: '#1976d2',
  flexShrink: 0, marginTop: 6,
}
export default function MentionNotificationFiltered({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Board View — Notification Panel (filtered to Mentions)</RegionLabel>}
      <div style={paneCss}>
        <div style={navCss}>
          <div style={navTitleCss}>Sprint 25</div>
          <div style={navRightCss}>
            <div style={bellWrapCss}>
              {showStructure && <RegionLabel top={-2} left={-4}>Bell Icon</RegionLabel>}
              <span style={bellCss}>🔔</span>
            </div>
          </div>
        </div>

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Notification Panel — "Mentions" filter active</RegionLabel>}

          <div style={{ padding: '10px 20px', fontSize: 13, color: '#ccc', filter: 'blur(0.5px)', opacity: 0.4 }}>
            <div>📋 Setup CI pipeline</div>
            <div>📋 Fix login bug</div>
          </div>

          <div style={panelCss}>
            <div style={panelHeaderCss}>
              <span style={panelTitleCss}>🔔 Notifications</span>
              <button style={markAllCss}>Mark all as read</button>
            </div>

            {/* Filter pills */}
            <div style={filterBarCss}>
              <span style={filterPillCss}>All</span>
              <span style={filterActiveCss}>Mentions</span>
              <span style={filterPillCss}>Assignments</span>
              <span style={filterPillCss}>Due dates</span>
            </div>

            <div style={{ borderBottom: '1px solid #eee' }}>
              <div style={boardLabelCss}>Sprint 25</div>

              <div style={notifItemCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Mention notification from Bob</RegionLabel>}
                <div style={avatarSmCss}>B</div>
                <div style={notifContentCss}>
                  <div style={notifTitleCss}>Bob mentioned you on "Setup CI pipeline"</div>
                  <div style={notifSnippetCss}>"@Alice please review the YAML config"</div>
                  <div style={notifTimeCss}>2 min ago</div>
                </div>
                <div style={unreadDotCss} />
              </div>

              <div style={notifItemCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Mention notification from Carol</RegionLabel>}
                <div style={avatarSmCss}>C</div>
                <div style={notifContentCss}>
                  <div style={notifTitleCss}>Carol mentioned you on "Fix login bug"</div>
                  <div style={notifSnippetCss}>"@Alice can you check the OAuth flow?"</div>
                  <div style={notifTimeCss}>15 min ago</div>
                </div>
                <div style={unreadDotCss} />
              </div>
            </div>

            <div style={{ padding: '10px 16px', fontSize: 11, color: '#999', textAlign: 'center' }}>
              Filtering: Mentions only (assignments and due dates hidden)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
