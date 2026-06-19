import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, boardHeaderCss, boardNameCss, visibilityBadgeCss, actionBtnCss, listCss, listHeaderCss, listTitleCss, listCountCss, addCardBtnCss, bottomBarCss, viewTabsCss, viewTabCss, viewTabActiveCss } from '@/components/shared/wireframes/_designTokens'

const actionsCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8,
}
const mainCss: React.CSSProperties = {
  padding: '20px', display: 'flex', gap: 16,
  overflowX: 'auto', minHeight: 400,
}

export default function BoardView({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Board View (Post-Creation)</RegionLabel>}

      <div style={topBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Board Top Bar — Name + Visibility + Actions</RegionLabel>}
        <div style={boardHeaderCss}>
          <div style={{ width: 12, height: 12, background: '#d4e5f7', border: '1px solid #888' }} />
          <span style={boardNameCss}>Sprint 24</span>
          <span style={visibilityBadgeCss}>Private</span>
        </div>
        <div style={actionsCss}>
          <button style={actionBtnCss}>Share</button>
          <button style={actionBtnCss}>···</button>
        </div>
      </div>

      <div style={mainCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Kanban Board — Horizontal List Layout</RegionLabel>}

        <div style={listCss}>
          {showStructure && <RegionLabel top={-2} left={0}>List Column — To Do</RegionLabel>}
          <div style={listHeaderCss}>
            <span style={listTitleCss}>To Do</span>
            <span style={listCountCss}>0</span>
          </div>
          <div style={addCardBtnCss}>+ Add a card</div>
        </div>

        <div style={listCss}>
          {showStructure && <RegionLabel top={-2} left={0}>List Column — In Progress</RegionLabel>}
          <div style={listHeaderCss}>
            <span style={listTitleCss}>In Progress</span>
            <span style={listCountCss}>0</span>
          </div>
          <div style={addCardBtnCss}>+ Add a card</div>
        </div>

        <div style={listCss}>
          {showStructure && <RegionLabel top={-2} left={0}>List Column — Done</RegionLabel>}
          <div style={listHeaderCss}>
            <span style={listTitleCss}>Done</span>
            <span style={listCountCss}>0</span>
          </div>
          <div style={addCardBtnCss}>+ Add a card</div>
        </div>

        <div style={{
          ...listCss, background: 'transparent', border: '2px dashed #ccc',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          {showStructure && <RegionLabel top={-2} left={0}>Add List — Empty State</RegionLabel>}
          <span style={{ color: '#888', fontSize: 14, fontWeight: 600 }}>+ Add a list</span>
        </div>
      </div>

      <div style={bottomBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Bottom Bar — Card Count + View Switcher</RegionLabel>}
        <span>0 cards</span>
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
