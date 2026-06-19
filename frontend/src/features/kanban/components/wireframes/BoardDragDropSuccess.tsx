import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, listCss, listHeaderCss, listTitleCss, listCountCss, cardCss } from '@/components/shared/wireframes/_designTokens'

const mainCss: React.CSSProperties = {
  padding: '20px', display: 'flex', gap: 16,
  overflowX: 'auto', minHeight: 350,
}
const movedCardCss: React.CSSProperties = {
  ...cardCss, borderLeft: '3px solid #3B82F6',
}
const toastCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 20px', borderTop: '1px solid #ddd',
  background: '#f0f7ff', fontSize: 13,
}
const toastTextCss: React.CSSProperties = { color: '#333' }
const undoBtnCss: React.CSSProperties = {
  padding: '4px 14px', border: '1px solid #3B82F6', background: '#fff',
  color: '#3B82F6', fontSize: 12, fontWeight: 600, cursor: 'pointer',
}
const timerCss: React.CSSProperties = { fontSize: 12, color: '#888', marginLeft: 12 }

export default function BoardDragDropSuccess({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Board View — Post-Drop (Success + Undo Toast)</RegionLabel>}
      <div style={topBarCss}>
        <span style={{ fontWeight: 700, fontSize: 16 }}>My Project Board</span>
      </div>

      <div style={mainCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Lists — Card moved from To Do → In Progress</RegionLabel>}
        <div style={listCss}>
          <div style={listHeaderCss}>
            <span style={listTitleCss}>📋 To Do</span>
            <span style={listCountCss}>1</span>
          </div>
          {showStructure && <RegionLabel top={-2} left={0}>Source List — Card removed (was "Design login page")</RegionLabel>}
          <div style={cardCss}>Write tests</div>
        </div>

        <div style={listCss}>
          <div style={listHeaderCss}>
            <span style={listTitleCss}>🔄 In Progress</span>
            <span style={listCountCss}>3</span>
          </div>
          <div style={cardCss}>Fix auth bug</div>
          <div style={movedCardCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Moved Card — Blue left border highlight</RegionLabel>}
            Design login page
          </div>
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

      <div style={toastCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Toast — Undo Notification (10s timer)</RegionLabel>}
        <div>
          <span style={toastTextCss}>Card moved to "In Progress"</span>
          <span style={timerCss}>9s left</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={undoBtnCss}>Undo</button>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#888' }}>✕</button>
        </div>
      </div>
    </div>
  )
}
