import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, boardHeaderCss, boardNameCss, visibilityBadgeCss, listCss, listHeaderCss, listTitleCss, listCountCss, cardCss, addCardBtnCss, bottomBarCss, viewTabsCss, viewTabCss, viewTabActiveCss } from '@/components/shared/wireframes/_designTokens'

const mainCss: React.CSSProperties = {
  padding: '20px', display: 'flex', gap: 16,
  overflowX: 'auto', minHeight: 400,
}

export default function BoardDragPopulated({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Board View — Populated (Pre-Drag Baseline)</RegionLabel>}
      <div style={topBarCss}>
        <div style={boardHeaderCss}>
          <div style={{ width: 12, height: 12, background: '#d4e5f7', border: '1px solid #888' }} />
          <span style={boardNameCss}>My Project Board</span>
          <span style={visibilityBadgeCss}>Private</span>
          <span style={{ fontSize: 12, color: '#888', marginLeft: 8 }}>— [👤 Alice]</span>
        </div>
      </div>
      <div style={mainCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Scrollable List Row — 3 Columns</RegionLabel>}

        <div style={listCss}>
          <div style={listHeaderCss}>
            {showStructure && <RegionLabel top={-2} left={0}>List Header — Draggable</RegionLabel>}
            <span><span style={{ fontSize: 12 }}>📋</span> <span style={listTitleCss}>To Do</span></span>
            <span style={listCountCss}>2</span>
          </div>
          <div style={cardCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Card — Draggable (grab cursor)</RegionLabel>}
            Design login page
          </div>
          <div style={cardCss}>Write tests</div>
          <div style={addCardBtnCss}>+ Add a card</div>
        </div>

        <div style={listCss}>
          <div style={listHeaderCss}>
            <span><span style={{ fontSize: 12 }}>🔄</span> <span style={listTitleCss}>In Progress</span></span>
            <span style={listCountCss}>2</span>
          </div>
          <div style={cardCss}>Fix auth bug</div>
          <div style={cardCss}>API integration</div>
          <div style={addCardBtnCss}>+ Add a card</div>
        </div>

        <div style={listCss}>
          <div style={listHeaderCss}>
            <span><span style={{ fontSize: 12 }}>✅</span> <span style={listTitleCss}>Done</span></span>
            <span style={listCountCss}>1</span>
          </div>
          <div style={cardCss}>Deploy v1.0</div>
          <div style={addCardBtnCss}>+ Add a card</div>
        </div>
      </div>
      <div style={bottomBarCss}>
        <span>5 cards</span>
        <div style={viewTabsCss}>
          <button style={viewTabActiveCss}>Kanban</button>
          <button style={viewTabCss}>Timeline</button>
          <button style={viewTabCss}>Calendar</button>
          <button style={viewTabCss}>Table</button>
        </div>
      </div>
    </div>
  )
}
