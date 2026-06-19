import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss, actionBtnCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd', fontSize: 15, fontWeight: 600,
}
const pageTitleCss: React.CSSProperties = {
  padding: '20px 24px 0', fontSize: 18, fontWeight: 700, marginBottom: 4,
}
const bodyCss: React.CSSProperties = { padding: '16px 24px 24px' }
const integCardCss: React.CSSProperties = {
  border: '1px solid #ddd', borderRadius: 4, marginBottom: 16,
  position: 'relative',
}
const integHeaderCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 16px', borderBottom: '1px solid #eee',
  background: '#fafafa', fontSize: 14, fontWeight: 700,
}
const integBodyCss: React.CSSProperties = { padding: 16 }
const infoRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
  fontSize: 13, color: '#444',
}
const connectedCss: React.CSSProperties = { fontWeight: 600, color: '#090' }
const quotaRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16,
  fontSize: 12,
}
const quotaBarBgCss: React.CSSProperties = {
  flex: 1, height: 10, background: '#eee', borderRadius: 5, overflow: 'hidden',
}
const quotaBarFillCss: React.CSSProperties = {
  width: '85%', height: '100%', background: '#000', borderRadius: 5,
}
const quotaTextCss: React.CSSProperties = { color: '#888', whiteSpace: 'nowrap' }
const actionsRowCss: React.CSSProperties = {
  display: 'flex', gap: 8, marginTop: 4,
}
const dangerBtnCss: React.CSSProperties = {
  ...actionBtnCss, border: '1px solid #c00', color: '#c00',
}
const notConnectedCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 16px',
}
const connectBtnCss: React.CSSProperties = {
  padding: '6px 16px', background: '#000', color: '#fff', border: 'none',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}

export default function GitHubSettings({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Settings — Integrations → GitHub</RegionLabel>}
      <div style={shellCss}>
        <div style={headerCss}>
          <span>Settings</span>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>✕</button>
        </div>

        <div style={pageTitleCss}>⚙️ Integrations</div>

        <div style={bodyCss}>
          {/* GitHub — Connected */}
          <div style={integCardCss}>
            {showStructure && <RegionLabel top={-2} left={0}>GitHub Integration — Connected</RegionLabel>}
            <div style={integHeaderCss}>
              <span>🐙 GitHub</span>
              <span style={connectedCss}>● Connected</span>
            </div>
            <div style={integBodyCss}>
              <div style={infoRowCss}>
                <span style={{ fontWeight: 600 }}>Connected as:</span>
                <span>alice_dev</span>
                <span style={{ color: '#888' }}>(alice@example.com)</span>
              </div>
              <div style={infoRowCss}>
                <span style={{ fontWeight: 600 }}>Repositories:</span>
                <span>24 accessible</span>
              </div>
              <div style={quotaRowCss}>
                <span style={{ fontWeight: 600, fontSize: 12 }}>API Quota:</span>
                <div style={quotaBarBgCss}>
                  <div style={quotaBarFillCss} />
                </div>
                <span style={quotaTextCss}>4,230 / 5,000 req/h</span>
              </div>
              <div style={actionsRowCss}>
                <button style={dangerBtnCss}>Disconnect</button>
                <button style={actionBtnCss}>Reconnect</button>
                <button style={actionBtnCss}>Revoke & Re-authorize</button>
              </div>
            </div>
          </div>

          {/* Slack — Not Connected */}
          <div style={integCardCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Slack Integration — Not Connected</RegionLabel>}
            <div style={integHeaderCss}>
              <span>💬 Slack</span>
              <span style={{ color: '#888', fontSize: 12 }}>Not connected</span>
            </div>
            <div style={notConnectedCss}>
              <span style={{ fontSize: 13, color: '#888' }}>Connect Slack for notifications</span>
              <button style={connectBtnCss}>Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
