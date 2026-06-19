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
const badgeCss: React.CSSProperties = {
  position: 'absolute', top: -8, right: -8, background: '#c00', color: '#fff',
  borderRadius: '50%', width: 18, height: 18, fontSize: 11, fontWeight: 700,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
}

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
const boardGroupCss: React.CSSProperties = { padding: '8px 0', position: 'relative' }
const boardLabelCss: React.CSSProperties = {
  padding: '4px 16px', fontSize: 11, fontWeight: 700, color: '#888',
  textTransform: 'uppercase', letterSpacing: 0.5,
}
const notifItemCss: React.CSSProperties = {
  display: 'flex', gap: 10, padding: '10px 16px', cursor: 'pointer',
  borderBottom: '1px solid #f5f5f5', position: 'relative',
}
const notifUnreadCss: React.CSSProperties = { ...notifItemCss, background: '#f0f7ff' }
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
const readDotCss: React.CSSProperties = {
  width: 8, height: 8, borderRadius: '50%', border: '1px solid #ccc',
  flexShrink: 0, marginTop: 6,
}

export default function MentionNotificationPanel({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Board View — Notification Panel (unread count 3)</RegionLabel>}
      <div style={paneCss}>
        <div style={navCss}>
          <div style={navTitleCss}>Sprint 25</div>
          <div style={navRightCss}>
            <div style={bellWrapCss}>
              {showStructure && <RegionLabel top={-2} left={-4}>Bell Icon with Badge</RegionLabel>}
              <span style={bellCss}>🔔</span>
              <span style={badgeCss}>3</span>
            </div>
            <span style={{ fontSize: 18, color: '#555', cursor: 'pointer' }}>⚙</span>
          </div>
        </div>

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Notification Panel (open)</RegionLabel>}

          {/* Backdrop overlay hint */}
          <div style={{ padding: '10px 20px', fontSize: 13, color: '#ccc', filter: 'blur(0.5px)', opacity: 0.4 }}>
            <div>📋 Setup CI pipeline</div>
            <div>📋 Fix login bug</div>
            <div>📋 API rate limiting</div>
          </div>

          {/* Panel */}
          <div style={panelCss}>
            <div style={panelHeaderCss}>
              <span style={panelTitleCss}>🔔 Notifications</span>
              <button style={markAllCss}>Mark all as read</button>
            </div>

            {/* Board group: Sprint 25 */}
            <div style={boardGroupCss}>
              <div style={boardLabelCss}>Sprint 25</div>

              <div style={notifUnreadCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Unread mention from Bob</RegionLabel>}
                <div style={avatarSmCss}>B</div>
                <div style={notifContentCss}>
                  <div style={notifTitleCss}>Bob mentioned you on "Setup CI pipeline"</div>
                  <div style={notifSnippetCss}>"@Alice please review the YAML config"</div>
                  <div style={notifTimeCss}>2 min ago</div>
                </div>
                <div style={unreadDotCss} />
              </div>

              <div style={notifUnreadCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Unread mention from Carol</RegionLabel>}
                <div style={avatarSmCss}>C</div>
                <div style={notifContentCss}>
                  <div style={notifTitleCss}>Carol mentioned you on "Fix login bug"</div>
                  <div style={notifSnippetCss}>"@Alice can you check the OAuth flow?"</div>
                  <div style={notifTimeCss}>15 min ago</div>
                </div>
                <div style={unreadDotCss} />
              </div>

              <div style={notifItemCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Read mention from Dave</RegionLabel>}
                <div style={avatarSmCss}>D</div>
                <div style={notifContentCss}>
                  <div style={{ ...notifTitleCss, fontWeight: 400 }}>Dave mentioned you on "API docs"</div>
                  <div style={notifSnippetCss}>"@Alice please update the endpoint docs"</div>
                  <div style={notifTimeCss}>2 hours ago</div>
                </div>
                <div style={readDotCss} />
              </div>
            </div>

            {/* Board group: Design */}
            <div style={boardGroupCss}>
              <div style={boardLabelCss}>Design</div>
              <div style={notifItemCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Read assignment from Eve</RegionLabel>}
                <div style={avatarSmCss}>E</div>
                <div style={notifContentCss}>
                  <div style={{ ...notifTitleCss, fontWeight: 400 }}>Eve assigned you to "Design review"</div>
                  <div style={notifSnippetCss}>— New task assigned</div>
                  <div style={notifTimeCss}>3 hours ago</div>
                </div>
                <div style={readDotCss} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
