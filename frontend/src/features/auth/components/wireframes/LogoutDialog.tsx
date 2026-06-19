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
  width: 360,
  textAlign: 'center',
}

const actionsCss: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  justifyContent: 'center',
  marginTop: 24,
}

const btnSecondaryCss: React.CSSProperties = {
  padding: '10px 24px',
  border: '1px solid #888',
  background: '#f5f5f5',
  fontSize: 14,
  fontWeight: 600,
  cursor: 'pointer',
}

const btnPrimaryCss: React.CSSProperties = {
  padding: '10px 24px',
  border: '2px solid #333',
  background: '#222',
  color: '#fff',
  fontSize: 14,
  fontWeight: 600,
  cursor: 'pointer',
}

export default function LogoutDialog({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative', minHeight: 300 }}>
      {showStructure && <RegionLabel top={0} left={0}>Screen — Dashboard (dimmed behind overlay)</RegionLabel>}

      <div style={overlayCss}>
        <div style={dialogCss}>
          {showStructure && <RegionLabel top={-4} left={0}>Dialog — Single Logout Confirmation</RegionLabel>}

          <div style={{ fontSize: 32, marginBottom: 12 }}>🚪</div>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Log out?</h2>
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.5 }}>
            Are you sure you want to log out?
          </p>

          <div style={actionsCss}>
            <div style={btnSecondaryCss}>Cancel</div>
            <div style={btnPrimaryCss}>Log out</div>
          </div>
        </div>
      </div>
    </div>
  )
}
