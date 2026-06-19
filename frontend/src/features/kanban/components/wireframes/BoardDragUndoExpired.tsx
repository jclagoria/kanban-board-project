import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, listCss, listHeaderCss, listTitleCss, listCountCss, cardCss } from '@/components/shared/wireframes/_designTokens'

const mainCss: React.CSSProperties = {
  padding: '20px', display: 'flex', gap: 16,
  overflowX: 'auto', minHeight: 350,
}
const toastExpiredCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 20px', borderTop: '1px solid #ddd',
  background: '#f5f5f5', fontSize: 12, color: '#999',
}

export default function BoardDragUndoExpired({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Board View — Undo Window Expired</RegionLabel>}
      <div style={topBarCss}>
        <span style={{ fontWeight: 700, fontSize: 16 }}>My Project Board</span>
      </div>

      <div style={mainCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Lists — Card settled in new position, undo no longer available</RegionLabel>}
        <div style={listCss}>
          <div style={listHeaderCss}>
            <span style={listTitleCss}>📋 To Do</span>
            <span style={listCountCss}>1</span>
          </div>
          <div style={cardCss}>Write tests</div>
        </div>

        <div style={listCss}>
          <div style={listHeaderCss}>
            <span style={listTitleCss}>🔄 In Progress</span>
            <span style={listCountCss}>3</span>
          </div>
          <div style={cardCss}>Fix auth bug</div>
          <div style={cardCss}>Design login page</div>
          <div style={cardCss}>API integration</div>
        </div>

        <div style={listCss}>
          <div style={listHeaderCss}>
            <span style={listTitleCss}>✅ Done</span>
            <span style={listCountCss}>1</span>
          </div>
          <div style={cardCss}>Deploy v1.0</div>
        </div>
      </div>

      <div style={toastExpiredCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Toast — Expired (faded, no undo)</RegionLabel>}
        <span>Card moved to "In Progress" · Undo window closed</span>
        <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#ccc' }}>✕</button>
      </div>
    </div>
  )
}
