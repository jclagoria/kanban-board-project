import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { sectionCss, inputCss, dividerCss, linkRowCss, btnSecondaryCss, selectCss, footerCss } from '@/components/shared/wireframes/_designTokens'

const overlayCss: React.CSSProperties = {
  position: 'relative', border: '1px solid #aaa', background: '#fff',
  maxWidth: 560, margin: '0 auto',
}
const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '16px 20px', borderBottom: '1px solid #ddd', fontSize: 16, fontWeight: 600,
}
const bodyCss: React.CSSProperties = { padding: 24 }
const labelCss: React.CSSProperties = { display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }
const linkInputCss: React.CSSProperties = {
  flex: 1, padding: '8px 10px', border: '1px solid #aaa', fontSize: 14, background: '#f9f9f9',
}
const btnPrimaryCss: React.CSSProperties = {
  padding: '6px 14px', border: '1px solid #000', background: '#000', color: '#fff',
  fontSize: 12, cursor: 'pointer', whiteSpace: 'nowrap',
}
const skipBtnCss: React.CSSProperties = {
  border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555',
  textDecoration: 'underline',
}
const continueBtnCss: React.CSSProperties = {
  padding: '10px 24px', background: '#000', color: '#fff', border: 'none',
  fontSize: 14, fontWeight: 600, cursor: 'pointer',
}

export default function InviteMembers({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Modal — Invite Members (Step 3, Optional)</RegionLabel>}
      <div style={overlayCss}>
        <div style={headerCss}>
          <span>Invite members to Sprint 24</span>
          <button style={{ border: 'none', background: 'none', fontSize: 20, cursor: 'pointer', color: '#888' }}>✕</button>
        </div>
        <div style={bodyCss}>
          <div style={sectionCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Invite Method — Email Input</RegionLabel>}
            <label style={labelCss}>Invite by email</label>
            <input style={inputCss} type="text" defaultValue="alice@example.com, bob@example.com" placeholder="Enter email addresses (comma separated)" />
            <div style={{ marginTop: 8 }}>
              <button style={btnPrimaryCss}>Send invites</button>
            </div>
          </div>

          <div style={dividerCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Divider — Or</RegionLabel>}
            <span style={{ background: '#fff', padding: '0 12px' }}>or</span>
          </div>

          <div style={sectionCss}>
            {showStructure && <RegionLabel top={-4} left={0}>Invite Method — Shareable Link</RegionLabel>}
            <label style={labelCss}>Shareable invite link</label>
            <div style={linkRowCss}>
              <div style={linkInputCss}>https://kanban.app/join/abc123xyz</div>
              <button style={btnSecondaryCss}>Copy link</button>
              <button style={btnSecondaryCss}>Regenerate</button>
            </div>
            <div style={{ marginTop: 8 }}>
              <label style={{ fontSize: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                Link expiration:
                <select style={selectCss} defaultValue="never">
                  <option value="never">Never expires</option>
                  <option value="24h">24 hours</option>
                  <option value="7d">7 days</option>
                  <option value="30d">30 days</option>
                </select>
              </label>
            </div>
          </div>

          <div style={footerCss}>
            <button style={skipBtnCss}>Skip — I'll invite later</button>
            <button style={continueBtnCss}>Continue to board</button>
          </div>
        </div>
      </div>
    </div>
  )
}
