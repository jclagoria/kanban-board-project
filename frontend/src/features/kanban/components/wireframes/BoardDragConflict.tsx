import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, listCss, listHeaderCss, listTitleCss, listCountCss, cardCss } from '@/components/shared/wireframes/_designTokens'

const mainCss: React.CSSProperties = {
  padding: '20px', display: 'flex', gap: 16,
  overflowX: 'auto', minHeight: 350,
}
const conflictCardCss: React.CSSProperties = {
  ...cardCss, borderLeft: '3px solid #e8a000', background: '#fffbe6',
}
const toastCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 20px', borderTop: '1px solid #ddd',
  background: '#fffbe6', fontSize: 13,
}

export default function BoardDragConflict({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Board View — Conflict Resolution (Server Wins)</RegionLabel>}
      <div style={topBarCss}>
        <span style={{ fontWeight: 700, fontSize: 16 }}>My Project Board</span>
      </div>

      <div style={mainCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Lists — Card at server-determined position</RegionLabel>}
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
            <span style={listCountCss}>2</span>
          </div>
          <div style={cardCss}>Fix auth bug</div>
          <div style={cardCss}>API integration</div>
        </div>

        <div style={listCss}>
          <div style={listHeaderCss}>
            <span style={listTitleCss}>✅ Done</span>
            <span style={listCountCss}>2</span>
          </div>
          <div style={conflictCardCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Conflict Card — Amber border (server position)</RegionLabel>}
            Design login page
          </div>
          <div style={cardCss}>Deploy v1.0</div>
        </div>
      </div>

      <div style={toastCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Conflict Toast — Server position applied</RegionLabel>}
        <span style={{ color: '#8a6a00' }}>Card was moved by another user. Position updated.</span>
        <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#888' }}>✕</button>
      </div>
    </div>
  )
}
