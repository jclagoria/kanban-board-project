import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'

const topBarCss: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 24px',
  borderBottom: '2px solid #666',
}

const avatarCss: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  border: '2px solid #555',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 14,
  fontWeight: 700,
  background: '#eee',
  cursor: 'pointer',
}

const dropdownCss: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  right: 0,
  width: 220,
  border: '1px solid #aaa',
  background: '#fff',
  boxShadow: '2px 2px 8px rgba(0,0,0,0.15)',
  zIndex: 100,
}

const dropdownHeaderCss: React.CSSProperties = {
  padding: '12px 14px',
  borderBottom: '1px solid #ddd',
}

const dropdownItemCss: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: '10px 14px',
  fontSize: 14,
  cursor: 'pointer',
  borderBottom: '1px solid #f0f0f0',
}

const dropdownDividerCss: React.CSSProperties = {
  height: 1,
  background: '#ddd',
  margin: '4px 0',
}

const dropdownDangerCss: React.CSSProperties = {
  ...dropdownItemCss,
  color: '#c00',
  fontWeight: 600,
}

export default function UserMenu({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Dashboard Top Bar</RegionLabel>}

      <div style={topBarCss}>
        <div>
          {showStructure && <RegionLabel top={-4} left={0}>Brand</RegionLabel>}
          <span style={{ fontWeight: 700, fontSize: 18 }}>KanbanFlow</span>
        </div>

        <div style={{ position: 'relative' }}>
          {showStructure && <RegionLabel top={-4} right={0}>User Avatar — Dropdown Trigger</RegionLabel>}
          <div style={avatarCss}>JS</div>

          <div style={dropdownCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Dropdown Menu</RegionLabel>}

            <div style={dropdownHeaderCss}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Jane Smith</div>
              <div style={{ fontSize: 12, color: '#666' }}>jane@company.com</div>
            </div>

            <div style={dropdownItemCss}>
              <span>⚙️</span> Settings
            </div>
            <div style={dropdownItemCss}>
              <span>🔒</span> Security
            </div>

            <div style={dropdownDividerCss} />

            <div style={dropdownItemCss}>
              <span>📊</span> My Boards
            </div>
            <div style={dropdownItemCss}>
              <span>📁</span> Templates
            </div>

            <div style={dropdownDividerCss} />

            <div style={dropdownDangerCss}>
              <span>🚪</span> Log out
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: 40, textAlign: 'center', color: '#999', fontSize: 14 }}>
        (Dashboard content area — click avatar to see menu structure)
      </div>
    </div>
  )
}
