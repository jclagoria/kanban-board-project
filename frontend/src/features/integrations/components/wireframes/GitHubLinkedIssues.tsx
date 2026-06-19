import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss, fieldRowCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd', fontSize: 15, fontWeight: 600,
}
const labelCss: React.CSSProperties = { display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }
const ghSectionCss: React.CSSProperties = {
  border: '1px solid #ddd', borderRadius: 4, marginBottom: 12,
}
const ghSectionHeaderCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 14px', borderBottom: '1px solid #eee',
  background: '#fafafa',
}
const ghTitleCss: React.CSSProperties = {
  fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6,
}
const linkBtnCss: React.CSSProperties = {
  padding: '4px 10px', border: '1px solid #888', background: '#fff',
  fontSize: 12, fontWeight: 600, cursor: 'pointer',
}
const ghIssueCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 14px', borderBottom: '1px solid #f5f5f5',
}
const ghIssueLastCss: React.CSSProperties = {
  ...ghIssueCss, borderBottom: 'none',
}
const ghIssueInfoCss: React.CSSProperties = { flex: 1 }
const ghRepoNumCss: React.CSSProperties = { fontSize: 11, color: '#888', marginBottom: 2 }
const ghIssueTitleCss: React.CSSProperties = { fontSize: 13, fontWeight: 600, marginBottom: 2 }
const ghLinkCss: React.CSSProperties = { fontSize: 11, color: '#06c', cursor: 'pointer' }
const statusOpenCss: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 4,
  fontSize: 11, fontWeight: 600, color: '#090',
  padding: '2px 8px', border: '1px solid #090', borderRadius: 3, whiteSpace: 'nowrap',
}
const statusClosedCss: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 4,
  fontSize: 11, fontWeight: 600, color: '#c00',
  padding: '2px 8px', border: '1px solid #c00', borderRadius: 3, whiteSpace: 'nowrap',
}

export default function GitHubLinkedIssues({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Detail — Linked GitHub Issues Section</RegionLabel>}
      <div style={paneCss}>
        <div style={headerCss}>
          <span>Card: Fix login button alignment</span>
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
        </div>

        <div style={sectionCss}>
          <div style={fieldRowCss}>
            <label style={labelCss}>Description</label>
            <span style={{ fontSize: 13, color: '#444' }}>
              The login button is misaligned on mobile viewports &lt; 768px.
            </span>
          </div>
          <div style={fieldRowCss}>
            <label style={labelCss}>Due date</label>
            <span style={{ fontSize: 13 }}>Sep 15</span>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            <span style={{ padding: '1px 6px', fontSize: 11, fontWeight: 600, background: '#e3f2fd', color: '#1565c0', borderRadius: 2 }}>Dev</span>
          </div>
        </div>

        <hr style={dividerCss} />

        {/* ── Linked GitHub Issues ── */}
        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Linked GitHub Issues Section</RegionLabel>}
          <div style={ghSectionCss}>
            <div style={ghSectionHeaderCss}>
              <span style={ghTitleCss}>🔗 Linked GitHub Issues</span>
              <button style={linkBtnCss}>+ Link</button>
            </div>

            {/* Issue 1 — Open */}
            <div style={ghIssueCss}>
              <div style={ghIssueInfoCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Issue #142 — Open</RegionLabel>}
                <div style={ghRepoNumCss}>owner/frontend  #142</div>
                <div style={ghIssueTitleCss}>Fix button alignment</div>
                <div style={ghLinkCss}>https://github.com/owner/frontend/issues/142 ↗</div>
              </div>
              <span style={statusOpenCss}>🟢 Open</span>
            </div>

            {/* Issue 2 — Closed */}
            <div style={ghIssueCss}>
              <div style={ghIssueInfoCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Issue #157 — Closed</RegionLabel>}
                <div style={ghRepoNumCss}>owner/frontend  #157</div>
                <div style={ghIssueTitleCss}>Update CSS for mobile nav</div>
                <div style={ghLinkCss}>https://github.com/owner/frontend/issues/157 ↗</div>
              </div>
              <span style={statusClosedCss}>🔴 Closed</span>
            </div>

            {/* Issue 3 — Open with warning */}
            <div style={ghIssueLastCss}>
              <div style={ghIssueInfoCss}>
                {showStructure && <RegionLabel top={-2} left={0}>Issue #89 — Open (stale sync)</RegionLabel>}
                <div style={ghRepoNumCss}>owner/api  #89</div>
                <div style={ghIssueTitleCss}>Auth timeout fix</div>
                <div style={ghLinkCss}>https://github.com/owner/api/issues/89 ↗</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                <span style={statusOpenCss}>🟢 Open</span>
                <span style={{ fontSize: 10, color: '#e0a800' }}>⚠ Stale</span>
              </div>
            </div>
          </div>

          {showStructure && <RegionLabel top={-4} left={0}>Note: board members without GitHub can view these</RegionLabel>}
          <div style={{ fontSize: 11, color: '#888', fontStyle: 'italic' }}>
            Board members can view linked issues even without a GitHub account.
          </div>
        </div>
      </div>
    </div>
  )
}
