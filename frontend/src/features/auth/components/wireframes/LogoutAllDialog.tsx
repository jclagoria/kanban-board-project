import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'

const overlayCss: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 200,
}

const dialogCss: React.CSSProperties = {
  background: '#fff',
  border: '2px solid #333',
  padding: 28,
  width: 380,
  textAlign: 'center',
}

const deviceListCss: React.CSSProperties = {
  textAlign: 'left',
  margin: '16px 0',
  padding: 0,
  listStyle: 'none',
  fontSize: 14,
}

const deviceItemCss: React.CSSProperties = {
  padding: '6px 0',
}

const actionsCss: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  justifyContent: 'center',
  marginTop: 20,
}

const btnSecondaryCss: React.CSSProperties = {
  padding: '10px 24px',
  border: '1px solid #888',
  background: '#f5f5f5',
  fontSize: 14,
  fontWeight: 600,
  cursor: 'pointer',
}

const btnDangerCss: React.CSSProperties = {
  padding: '10px 24px',
  border: '2px solid #c00',
  background: '#c00',
  color: '#fff',
  fontSize: 14,
  fontWeight: 600,
  cursor: 'pointer',
}

const devices = [
  { icon: '🖥️', name: 'Windows Chrome' },
  { icon: '📱', name: 'iPhone Safari' },
  { icon: '💻', name: 'MacBook Firefox' },
]

export default function LogoutAllDialog({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative', minHeight: 300 }}>
      {showStructure && <RegionLabel top={0} left={0}>Screen — Security Settings (dimmed behind overlay)</RegionLabel>}

      <div style={overlayCss}>
        <div style={dialogCss}>
          {showStructure && <RegionLabel top={-4} left={0}>Dialog — Global Logout Confirmation</RegionLabel>}

          <div style={{ fontSize: 32, marginBottom: 12 }}>🚪</div>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Log out of all devices?</h2>
          <p style={{ fontSize: 14, color: '#555' }}>
            This will sign you out from all your devices including:
          </p>

          <ul style={deviceListCss}>
            {devices.map(d => (
              <li key={d.name} style={deviceItemCss}>
                {d.icon}  {d.name}
              </li>
            ))}
          </ul>

          <div style={actionsCss}>
            <div style={btnSecondaryCss}>Cancel</div>
            <div style={btnDangerCss}>Log out all</div>
          </div>
        </div>
      </div>
    </div>
  )
}
