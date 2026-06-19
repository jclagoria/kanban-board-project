import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, actionBtnCss } from '@/components/shared/wireframes/_designTokens'

const bannerCss: React.CSSProperties = {
  border: '1px solid #2a6',
  background: '#f0fff4',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 14,
  marginBottom: 32,
  maxWidth: 640,
  marginLeft: 'auto',
  marginRight: 'auto',
}

const contentCss: React.CSSProperties = {
  maxWidth: 640,
  margin: '0 auto',
  textAlign: 'center',
  padding: '40px 0',
}

const actionsCss: React.CSSProperties = {
  display: 'flex',
  gap: 16,
  justifyContent: 'center',
  marginTop: 32,
}

export default function DashboardWelcome({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Dashboard Layout (with nav)</RegionLabel>}

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

      {showStructure && <RegionLabel top={0} left={0}>Banner — Verification Email (Success state)</RegionLabel>}
      <div style={bannerCss}>
        <span>📬 Verification email sent to jane@company.com</span>
        <span style={{ fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>
          Resend verification email
        </span>
      </div>

      <div style={contentCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Content — Welcome Area</RegionLabel>}
        <div style={{ fontSize: 16, color: '#444', marginBottom: 8 }}>📋</div>
        <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Welcome, Jane!</h1>
        <p style={{ fontSize: 14, color: '#555', maxWidth: 420, margin: '0 auto', lineHeight: 1.5 }}>
          Get started by creating your first board or explore one of our templates.
        </p>
        <div style={actionsCss}>
          <div style={actionBtnCss}>+ New Board</div>
          <div style={actionBtnCss}>📁 Templates</div>
        </div>
      </div>
    </div>
  )
}
