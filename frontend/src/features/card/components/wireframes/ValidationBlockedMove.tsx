import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss } from '@/components/shared/wireframes/_designTokens'

const overlayCss: React.CSSProperties = {
  position: 'absolute', inset: 0, display: 'flex',
  alignItems: 'center', justifyContent: 'center',
  background: 'rgba(0,0,0,0.2)', zIndex: 20,
}
const dialogCss: React.CSSProperties = {
  background: '#fff', border: '1px solid #888',
  padding: 24, minWidth: 400, maxWidth: 460,
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  position: 'relative',
}
const dialogTitleCss: React.CSSProperties = {
  fontSize: 16, fontWeight: 700, marginBottom: 8,
  display: 'flex', alignItems: 'center', gap: 8,
}
const dialogDescCss: React.CSSProperties = {
  fontSize: 13, color: '#444', marginBottom: 20, lineHeight: 1.4,
}
const missingItemCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '10px 12px', border: '1px solid #eee', borderRadius: 4,
  marginBottom: 8, background: '#fff5f5',
}
const missingItemNameCss: React.CSSProperties = {
  fontSize: 14, fontWeight: 600, color: '#a00',
}
const goToBtnCss: React.CSSProperties = {
  padding: '4px 12px', border: '1px solid #888', background: '#fff',
  fontSize: 12, fontWeight: 600, cursor: 'pointer',
}
const noteCss: React.CSSProperties = {
  fontSize: 12, color: '#888', marginTop: 12, fontStyle: 'italic',
}
const stayBtnCss: React.CSSProperties = {
  padding: '8px 20px', border: '1px solid #888', background: '#fff',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const footerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'flex-end', marginTop: 20,
}

const boardPaneCss: React.CSSProperties = {
  ...paneCss, filter: 'blur(1px)', opacity: 0.5,
}
const boardBarCss: React.CSSProperties = {
  display: 'flex', borderBottom: '1px solid #ddd', padding: '8px 12px',
  background: '#f9f9f9', fontSize: 13, gap: 12,
}
const listCss: React.CSSProperties = {
  display: 'inline-block', border: '1px solid #ccc', background: '#eee',
  padding: '20px 16px', minWidth: 160, margin: 12, borderRadius: 4,
  verticalAlign: 'top',
}
const listTitleCss: React.CSSProperties = { fontSize: 14, fontWeight: 600, marginBottom: 12 }
const cardCss: React.CSSProperties = {
  background: '#fff', border: '1px solid #ccc', padding: '10px 12px',
  marginBottom: 8, fontSize: 13, fontWeight: 600,
}

export default function ValidationBlockedMove({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Blocked Move — Missing Required Fields Modal</RegionLabel>}
      <div style={{ position: 'relative' }}>

        {/* Background: Kanban board */}
        <div style={boardPaneCss}>
          <div style={boardBarCss}>
            <span style={{ fontWeight: 600 }}>Sprint 42</span>
            <span style={{ color: '#888' }}>Kanban</span>
          </div>
          <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: 4 }}>
            <div style={listCss}>
              <div style={listTitleCss}>To Do</div>
              <div style={cardCss}>Setup CI</div>
              <div style={cardCss}>Write tests</div>
            </div>
            <div style={{ ...listCss, background: '#f0f8ff' }}>
              <div style={listTitleCss}>In Progress</div>
              <div style={{ ...cardCss, borderLeft: '3px solid #c00' }}>Q3 Campaign Plan</div>
            </div>
            <div style={listCss}>
              <div style={listTitleCss}>Review</div>
            </div>
            <div style={listCss}>
              <div style={listTitleCss}>Done</div>
            </div>
          </div>
        </div>

        {/* Overlay dialog */}
        <div style={overlayCss}>
          <div style={dialogCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Dialog — Blocked Move: Missing Required Fields</RegionLabel>}
            <div style={dialogTitleCss}>
              <span style={{ color: '#c00', fontSize: 18 }}>⚠</span>
              Cannot move card
            </div>
            <div style={dialogDescCss}>
              Complete the following required fields before moving this card to "In Progress":
            </div>

            <div style={missingItemCss}>
              <span style={missingItemNameCss}>Campaign Channel</span>
              <button style={goToBtnCss}>Go to field →</button>
            </div>
            <div style={missingItemCss}>
              <span style={missingItemNameCss}>Story Points</span>
              <button style={goToBtnCss}>Go to field →</button>
            </div>

            <div style={noteCss}>All standard fields are complete.</div>

            <div style={footerCss}>
              <button style={stayBtnCss}>Stay on card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
