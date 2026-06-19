import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss as paneBaseCss, sectionCss, footerCss } from '@/components/shared/wireframes/_designTokens'

const paneCss: React.CSSProperties = {
  ...paneBaseCss,
  filter: 'blur(1px)', opacity: 0.5,
}
const overlayCss: React.CSSProperties = {
  position: 'absolute', inset: 0, display: 'flex',
  alignItems: 'center', justifyContent: 'center',
  background: 'rgba(0,0,0,0.2)', zIndex: 20,
}
const dialogCss: React.CSSProperties = {
  background: '#fff', border: '1px solid #888',
  padding: 24, minWidth: 380, maxWidth: 440,
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  position: 'relative',
}
const dialogTitleCss: React.CSSProperties = {
  fontSize: 15, fontWeight: 700, marginBottom: 12,
}
const dialogTextCss: React.CSSProperties = {
  fontSize: 13, color: '#444', marginBottom: 20, lineHeight: 1.4,
}
const issueRefCss: React.CSSProperties = {
  background: '#f5f5f5', border: '1px solid #ddd',
  padding: '10px 14px', borderRadius: 4, marginBottom: 20,
  fontSize: 13,
}
const issueRepoNumCss: React.CSSProperties = { fontSize: 11, color: '#888', marginBottom: 2 }
const issueTitleCss: React.CSSProperties = { fontSize: 13, fontWeight: 600 }
const noteCss: React.CSSProperties = {
  fontSize: 12, color: '#888', marginBottom: 20, fontStyle: 'italic',
}
const cancelBtnCss: React.CSSProperties = {
  padding: '8px 20px', border: '1px solid #888', background: '#fff',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const unlinkBtnCss: React.CSSProperties = {
  padding: '8px 20px', background: '#c00', color: '#fff', border: 'none',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd', fontSize: 15, fontWeight: 600,
}
const ghItemCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 14px', border: '1px solid #eee', marginBottom: 6, borderRadius: 4,
}
const ghInfoCss: React.CSSProperties = { flex: 1 }
const ghRepoNumCss: React.CSSProperties = { fontSize: 11, color: '#888', marginBottom: 2 }
const ghTitleCss: React.CSSProperties = { fontSize: 13, fontWeight: 600 }

export default function GitHubUnlinkConfirm({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Unlink GitHub Issue — Confirmation Dialog</RegionLabel>}
      <div style={{ position: 'relative' }}>

        {/* Background: card with linked issues */}
        <div style={paneCss}>
          <div style={headerCss}>
            <span>Card: Fix login button</span>
            <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
          </div>
          <div style={sectionCss}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 8 }}>
              🔗 Linked GitHub Issues
            </div>
            <div style={ghItemCss}>
              <div style={ghInfoCss}>
                <div style={ghRepoNumCss}>owner/frontend  #142</div>
                <div style={ghTitleCss}>Fix button alignment</div>
              </div>
            </div>
            <div style={{ ...ghItemCss, border: '2px solid #c00' }}>
              <div style={ghInfoCss}>
                <div style={ghRepoNumCss}>owner/frontend  #157</div>
                <div style={ghTitleCss}>Update CSS for mobile nav</div>
              </div>
              <span style={{ fontSize: 11, color: '#c00', fontWeight: 600 }}>Unlinking...</span>
            </div>
          </div>
        </div>

        {/* Overlay dialog */}
        <div style={overlayCss}>
          <div style={dialogCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Dialog — Confirm Unlink</RegionLabel>}
            <div style={dialogTitleCss}>Unlink this GitHub issue?</div>
            <div style={dialogTextCss}>
              Are you sure you want to unlink this issue from the card?
            </div>

            <div style={issueRefCss}>
              <div style={issueRepoNumCss}>owner/frontend  #157</div>
              <div style={issueTitleCss}>Update CSS for mobile nav</div>
            </div>

            <div style={noteCss}>
              The GitHub issue will not be modified, closed, or commented on.
            </div>

            <div style={footerCss}>
              <button style={cancelBtnCss}>Cancel</button>
              <button style={unlinkBtnCss}>Unlink</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
