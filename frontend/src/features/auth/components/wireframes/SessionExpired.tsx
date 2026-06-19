import { RegionLabel, Card } from '@/components/shared/wireframes/_WireframeBase'
import { shellCss, btnCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: 24,
}

const iconCss: React.CSSProperties = {
  fontSize: 40,
  textAlign: 'center',
  marginBottom: 12,
}

const bodyCss: React.CSSProperties = {
  fontSize: 14,
  color: '#555',
  textAlign: 'center',
  lineHeight: 1.6,
  marginBottom: 24,
}

const detailBoxCss: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: 12,
  fontSize: 12,
  color: '#888',
  marginTop: 16,
  background: '#fafafa',
}

export default function SessionExpired({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative', minHeight: 400 }}>
      {showStructure && <RegionLabel top={0} left={0}>Full-screen — Auth Required (no shell)</RegionLabel>}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
        <div style={shellCss}>
          <div style={headerCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Brand / Logo</RegionLabel>}
            <div style={{ fontWeight: 700, fontSize: 20 }}>KanbanFlow</div>
          </div>

          <Card>
            {showStructure && <RegionLabel top={-4} left={0}>Card — Session Expired</RegionLabel>}

            <div style={iconCss}>⏰</div>
            <h1 style={{ fontSize: 20, fontWeight: 600, textAlign: 'center', marginBottom: 12 }}>
              Session expired
            </h1>
            <div style={bodyCss}>
              Your session has expired. Please log in again to continue using KanbanFlow.
            </div>

            <div style={btnCss}>Log in</div>

            {showStructure && <RegionLabel top={-2} left={0}>Error detail — R10 error code</RegionLabel>}
            <div style={detailBoxCss}>
              <strong>Error code:</strong> TOKEN_EXPIRED / TOKEN_REVOKED / SESSION_EXPIRED<br />
              <strong>Action:</strong> Client clears stored tokens → redirects to /login
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
