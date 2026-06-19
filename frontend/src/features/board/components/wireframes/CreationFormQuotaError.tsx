import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'

const overlayCss: React.CSSProperties = {
  position: 'relative', border: '1px solid #aaa', background: '#fff',
  maxWidth: 560, margin: '0 auto',
}
const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '16px 20px', borderBottom: '1px solid #ddd', fontSize: 16, fontWeight: 600,
}
const bodyCss: React.CSSProperties = { padding: 24 }
const errorBannerCss: React.CSSProperties = {
  border: '1px solid #e8a000', background: '#fffbe6', padding: '12px 16px',
  marginBottom: 16, fontSize: 13, color: '#8a6a00', position: 'relative', textAlign: 'center',
}
const upgradeBtnCss: React.CSSProperties = {
  marginTop: 8, padding: '8px 20px', background: '#000', color: '#fff',
  border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer',
}

export default function CreationFormQuotaError({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Modal — Upsell Prompt (Quota Exceeded)</RegionLabel>}
      <div style={overlayCss}>
        <div style={headerCss}>
          <span>Create Board</span>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>Cancel</button>
        </div>
        <div style={bodyCss}>
          {showStructure && <RegionLabel top={0} left={0}>Quota Error — Upsell Banner</RegionLabel>}
          <div style={errorBannerCss}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>You've reached the maximum number of boards.</div>
            <div style={{ fontSize: 12 }}>Free plan allows up to 10 active boards. Upgrade your plan to create more.</div>
            <button style={upgradeBtnCss}>Upgrade Plan</button>
          </div>
        </div>
      </div>
    </div>
  )
}
