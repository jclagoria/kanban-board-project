import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, sectionTitleCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd',
  fontSize: 15, fontWeight: 600,
}
const overlayCss: React.CSSProperties = {
  position: 'absolute', inset: 0, display: 'flex',
  alignItems: 'center', justifyContent: 'center',
  background: 'rgba(0,0,0,0.25)', zIndex: 20,
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
const conflictTableCss: React.CSSProperties = {
  width: '100%', fontSize: 13, marginBottom: 20, borderCollapse: 'collapse',
}
const conflictThCss: React.CSSProperties = {
  textAlign: 'left', padding: '6px 8px', fontWeight: 600,
  borderBottom: '1px solid #ddd', color: '#555', fontSize: 12,
}
const conflictTdCss: React.CSSProperties = {
  padding: '6px 8px', borderBottom: '1px solid #eee',
}
const yourValueCss: React.CSSProperties = { color: '#c00', fontWeight: 600 }
const savedValueCss: React.CSSProperties = { color: '#090', fontWeight: 600 }
const byLineCss: React.CSSProperties = { fontSize: 11, color: '#888', marginTop: 1 }
const dialogActionsCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'flex-end', gap: 8,
}
const primaryBtnCss: React.CSSProperties = {
  padding: '8px 16px', background: '#000', color: '#fff',
  border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const secondaryBtnCss: React.CSSProperties = {
  padding: '8px 16px', border: '1px solid #888', background: '#fff',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const ghostBtnCss: React.CSSProperties = {
  padding: '8px 16px', border: 'none', background: 'none',
  fontSize: 13, fontWeight: 600, cursor: 'pointer', color: '#555',
}

export default function CardDetailConcurrentConflict({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Concurrent Edit Conflict — Resolution Dialog</RegionLabel>}
      <div style={{ position: 'relative' }}>
        {/* Background: blurred card detail */}
        <div style={paneCss}>
          <div style={headerCss}>
            <span>Card: Q3 Campaign Plan</span>
            <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
          </div>
          <div style={sectionCss}>
            <div style={sectionTitleCss}>Custom Fields</div>
            <div style={{ fontSize: 13, color: '#888' }}>Priority: Medium (modified)</div>
            <div style={{ fontSize: 13, color: '#888', marginTop: 8 }}>Story Points: 8</div>
          </div>
        </div>

        {/* Overlay dialog */}
        <div style={overlayCss}>
          <div style={dialogCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Dialog — Concurrent Edit Conflict</RegionLabel>}
            <div style={dialogTitleCss}>Update conflict</div>
            <div style={{ fontSize: 13, color: '#444', marginBottom: 16 }}>
              This field was updated by another user while you were editing it.
            </div>

            <table style={conflictTableCss}>
              <thead>
                <tr>
                  <th style={conflictThCss}></th>
                  <th style={conflictThCss}>Value</th>
                  <th style={conflictThCss}>By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={conflictTdCss}>Your value</td>
                  <td style={{ ...conflictTdCss, ...yourValueCss }}>"Medium"</td>
                  <td style={conflictTdCss}><span style={byLineCss}>You</span></td>
                </tr>
                <tr>
                  <td style={conflictTdCss}>Saved value</td>
                  <td style={{ ...conflictTdCss, ...savedValueCss }}>"High"</td>
                  <td style={conflictTdCss}><span style={byLineCss}>Alice — 2 seconds ago</span></td>
                </tr>
              </tbody>
            </table>

            <div style={dialogActionsCss}>
              <button style={ghostBtnCss}>Reload</button>
              <button style={secondaryBtnCss}>Accept theirs</button>
              <button style={primaryBtnCss}>Keep mine</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
