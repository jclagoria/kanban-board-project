import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd', fontSize: 15, fontWeight: 600,
}
const ghSectionCss: React.CSSProperties = {
  border: '1px solid #ddd', borderRadius: 4, marginBottom: 12,
}
const ghSectionHeaderCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 14px', borderBottom: '1px solid #eee',
  background: '#fafafa',
}
const ghTitleStyleCss: React.CSSProperties = {
  fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6,
}
const ghItemCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 14px', borderBottom: '1px solid #f5f5f5',
}
const ghItemLastCss: React.CSSProperties = { ...ghItemCss, borderBottom: 'none' }
const ghInfoCss: React.CSSProperties = { flex: 1 }
const ghRepoNumCss: React.CSSProperties = { fontSize: 11, color: '#888', marginBottom: 2 }
const ghTitleCss: React.CSSProperties = { fontSize: 13, fontWeight: 600, marginBottom: 2 }

/* ── Warning banner ── */
const warnBannerCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8,
  padding: '10px 14px', background: '#fff8e1', border: '1px solid #e0c800',
  borderRadius: 4, marginBottom: 12, fontSize: 13, fontWeight: 600,
  position: 'relative',
}

/* ── Error states ── */
const staleStatusCss: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 4,
  fontSize: 11, fontWeight: 600, color: '#090',
  padding: '2px 8px', border: '1px solid #090', borderRadius: 3,
}
const staleWarnCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 4,
  fontSize: 10, color: '#e0a800', marginTop: 1,
}
const deletedCss: React.CSSProperties = {
  fontSize: 12, color: '#888', fontStyle: 'italic',
}
const quotaWarnCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 6,
  padding: '8px 12px', background: '#fff5f5', border: '1px solid #c00',
  borderRadius: 4, marginBottom: 8, fontSize: 12, color: '#a00',
  position: 'relative',
}

export default function GitHubErrorStates({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Detail — GitHub Error States</RegionLabel>}
      <div style={paneCss}>
        <div style={headerCss}>
          <span>Card: Auth timeout fix</span>
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
        </div>

        <div style={sectionCss}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Auth timeout fix</div>
        </div>

        <hr style={dividerCss} />

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Linked GitHub Issues — Multiple Error Scenarios</RegionLabel>}
          <div style={ghSectionCss}>
            <div style={ghSectionHeaderCss}>
              <span style={ghTitleStyleCss}>🔗 Linked GitHub Issues</span>
            </div>

            {/* Reconnect GitHub warning banner */}
            <div style={warnBannerCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Banner — Token Expired</RegionLabel>}
              <span style={{ fontSize: 16 }}>⚠</span>
              <span>GitHub token expired — </span>
              <span style={{ color: '#06c', cursor: 'pointer', textDecoration: 'underline' }}>Reconnect GitHub</span>
              <span style={{ color: '#888', fontWeight: 400 }}>from Settings → Integrations</span>
            </div>

            {/* Issue 1 — Normal open */}
            <div style={ghItemCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Issue #89 — Normal (open)</RegionLabel>}
              <div style={ghInfoCss}>
                <div style={ghRepoNumCss}>owner/api  #89</div>
                <div style={ghTitleCss}>Auth timeout fix</div>
              </div>
              <span style={staleStatusCss}>🟢 Open</span>
            </div>

            {/* Issue 2 — Stale status with warning */}
            <div style={ghItemCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Issue #92 — Stale (sync paused)</RegionLabel>}
              <div style={ghInfoCss}>
                <div style={ghRepoNumCss}>owner/frontend  #92</div>
                <div style={ghTitleCss}>Fix nav z-index</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                <span style={{ ...staleStatusCss, opacity: 0.7 }}>🟢 Open</span>
                <span style={staleWarnCss}>⚠ Stale</span>
              </div>
            </div>

            {/* Issue 3 — Deleted/inaccessible */}
            <div style={ghItemCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Issue #157 — Deleted (404)</RegionLabel>}
              <div style={ghInfoCss}>
                <div style={ghRepoNumCss}>owner/frontend  #157</div>
                <div style={{ ...ghTitleCss, color: '#888' }}>Update CSS for mobile nav</div>
                <div style={deletedCss}>— Deleted or inaccessible</div>
              </div>
            </div>

            {/* Sync paused — rate limit */}
            <div style={ghItemLastCss}>
              <div style={{ flex: 1 }}>
                <div style={{ ...quotaWarnCss, marginBottom: 0 }}>
                  {showStructure && <RegionLabel top={-2} left={0}>Quota Warning — Rate Limit</RegionLabel>}
                  <span>⚠</span>
                  <span>Sync paused — GitHub API quota reached. Resumes automatically at quota reset.</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ fontSize: 11, color: '#888', fontStyle: 'italic' }}>
            Tooltip on stale issue: "Status last updated 12:30. Sync paused due to connection error."
          </div>
        </div>
      </div>
    </div>
  )
}
