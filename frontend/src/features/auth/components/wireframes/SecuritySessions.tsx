import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'

const topBarCss: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 24px',
  borderBottom: '2px solid #666',
}

const pageCss: React.CSSProperties = {
  maxWidth: 640,
  margin: '0 auto',
  padding: '32px 16px',
}

const breadcrumbCss: React.CSSProperties = {
  fontSize: 13,
  color: '#888',
  marginBottom: 24,
}

const sectionCss: React.CSSProperties = {
  border: '1px solid #aaa',
  padding: 20,
  marginBottom: 24,
  background: '#fff',
}

const sectionLabelCss: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  marginBottom: 12,
}

const pwdRowCss: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const pwdValueCss: React.CSSProperties = {
  fontSize: 14,
}

const changeBtnCss: React.CSSProperties = {
  padding: '6px 16px',
  border: '1px solid #888',
  background: '#f5f5f5',
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
}

const pwdMetaCss: React.CSSProperties = {
  fontSize: 12,
  color: '#888',
  marginTop: 4,
}

const sessionItemCss: React.CSSProperties = {
  padding: '12px 0',
  borderBottom: '1px solid #f0f0f0',
}

const sessionItemLastCss: React.CSSProperties = {
  ...sessionItemCss,
  borderBottom: 'none',
}

const sessionDeviceCss: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontSize: 14,
  fontWeight: 600,
}

const sessionMetaCss: React.CSSProperties = {
  fontSize: 12,
  color: '#888',
  marginTop: 2,
  marginLeft: 26,
}

const currentBadgeCss: React.CSSProperties = {
  fontSize: 11,
  color: '#080',
  fontWeight: 600,
  marginLeft: 8,
}

const logoutAllBtnCss: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  padding: '12px',
  border: '2px solid #c00',
  color: '#c00',
  background: '#fff',
  fontSize: 14,
  fontWeight: 600,
  cursor: 'pointer',
  marginTop: 16,
}

const sessions: Array<{ icon: string; device: string; browser: string; time: string; current?: boolean }> = [
  { icon: '🖥️', device: 'Windows Chrome', browser: '', time: 'now', current: true },
  { icon: '📱', device: 'iPhone Safari', browser: '', time: '2 hours ago' },
  { icon: '💻', device: 'MacBook — Firefox', browser: '', time: '1 day ago' },
]

export default function SecuritySessions({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Dashboard Layout</RegionLabel>}

      <div style={topBarCss}>
        <div>
          {showStructure && <RegionLabel top={-4} left={0}>Brand</RegionLabel>}
          <span style={{ fontWeight: 700, fontSize: 18 }}>KanbanFlow</span>
        </div>
        <div>
          {showStructure && <RegionLabel top={-4} right={0}>User Menu</RegionLabel>}
          <span style={{ fontSize: 14 }}>[J. Smith]</span>
        </div>
      </div>

      <div style={pageCss}>
        {showStructure && <RegionLabel top={-4} left={16}>Content — Settings / Security</RegionLabel>}

        <div style={breadcrumbCss}>⚙️ Settings &gt; 🔒 Security</div>

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={-2} left={0}>Section — Password</RegionLabel>}
          <div style={sectionLabelCss}>Password</div>
          <div style={pwdRowCss}>
            <div>
              <div style={pwdValueCss}>●●●●●●●●●●</div>
              <div style={pwdMetaCss}>Last changed: 2 months ago</div>
            </div>
            <div style={changeBtnCss}>Change</div>
          </div>
        </div>

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={-2} left={0}>Section — Active Sessions</RegionLabel>}
          <div style={sectionLabelCss}>Active Sessions</div>

          {sessions.map((s, i) => (
            <div key={s.device} style={i === sessions.length - 1 ? sessionItemLastCss : sessionItemCss}>
              <div style={sessionDeviceCss}>
                <span>{s.icon}</span>
                <span>
                  {s.device}{s.browser && ` — ${s.browser}`}
                  {s.current && <span style={currentBadgeCss}>Current session</span>}
                </span>
              </div>
              <div style={sessionMetaCss}>Last active: {s.time}</div>
            </div>
          ))}

          <div style={logoutAllBtnCss}>
            🚪  Log out of all devices
          </div>
        </div>
      </div>
    </div>
  )
}
