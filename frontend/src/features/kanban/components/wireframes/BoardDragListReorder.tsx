import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, listCss, listHeaderCss, listTitleCss, listCountCss, cardCss } from '@/components/shared/wireframes/_designTokens'

const mainCss: React.CSSProperties = {
  padding: '20px', display: 'flex', gap: 16,
  overflowX: 'auto', minHeight: 350, position: 'relative',
}
const ghostListCss: React.CSSProperties = {
  ...listCss, opacity: 0.3, borderStyle: 'dashed', background: '#eaeaea',
}
const indicatorVerticalCss: React.CSSProperties = {
  width: 2, background: '#3B82F6', alignSelf: 'stretch', margin: '0 -8px',
  position: 'relative',
}
const pillListCss: React.CSSProperties = {
  position: 'absolute', top: 40, left: 280, zIndex: 100,
  border: '1px solid #3B82F6', background: '#fff', padding: '8px 16px',
  fontSize: 13, fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  transform: 'rotate(1deg)', pointerEvents: 'none', whiteSpace: 'nowrap',
}

export default function BoardDragListReorder({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Board View — List Reorder (Drag by Header)</RegionLabel>}
      <div style={topBarCss}>
        <span style={{ fontWeight: 700, fontSize: 16 }}>My Project Board</span>
      </div>

      <div style={mainCss}>
        {showStructure && <RegionLabel top={-4} left={0}>List Row — Ghost in original position, indicator between lists</RegionLabel>}

        <div style={ghostListCss}>
          <div style={listHeaderCss}>
            <span style={listTitleCss}>📋 To Do</span>
            <span style={listCountCss}>2</span>
          </div>
          <div style={cardCss}>Design login page</div>
          <div style={cardCss}>Write tests</div>
        </div>

        <div style={indicatorVerticalCss}>
          {showStructure && <RegionLabel top={0} left={-4}>Drop Indicator — Vertical 2px #3B82F6</RegionLabel>}
        </div>

        <div style={listCss}>
          <div style={listHeaderCss}>
            {showStructure && <RegionLabel top={-2} left={0}>List Header — Draggable (grab cursor)</RegionLabel>}
            <span style={listTitleCss}>🔄 In Progress</span>
            <span style={listCountCss}>2</span>
          </div>
          <div style={cardCss}>Fix auth bug</div>
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

      {showStructure && <RegionLabel top={40} left={230}>Compact Pill — List Name "To Do"</RegionLabel>}
      <div style={pillListCss}>📋 To Do</div>

      <div style={{
        padding: '8px 20px',
        borderTop: '1px solid #ddd', fontSize: 12, color: '#888',
      }}>
        <span>List reorder in progress</span>
      </div>
    </div>
  )
}
