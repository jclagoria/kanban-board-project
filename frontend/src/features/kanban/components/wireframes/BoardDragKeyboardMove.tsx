import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, listCss, listHeaderCss, listTitleCss, listCountCss, cardCss } from '@/components/shared/wireframes/_designTokens'

const mainCss: React.CSSProperties = {
  padding: '20px', display: 'flex', gap: 16,
  overflowX: 'auto', minHeight: 400, alignItems: 'flex-start',
}
const focusedCardCss: React.CSSProperties = {
  ...cardCss, border: '2px solid #3B82F6', outline: '2px solid #3B82F6', outlineOffset: 1,
}
const dialogOverlayCss: React.CSSProperties = {
  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
  border: '1px solid #aaa', background: '#fff', zIndex: 50,
  minWidth: 280,
}
const dialogHeaderCss: React.CSSProperties = {
  padding: '12px 16px', borderBottom: '1px solid #ddd', fontSize: 14, fontWeight: 600,
}
const dialogBodyCss: React.CSSProperties = { padding: 12 }
const dialogOptionCss: React.CSSProperties = {
  padding: '8px 12px', cursor: 'pointer', fontSize: 13,
  borderBottom: '1px solid #f0f0f0',
}
const dialogOptionFocusCss: React.CSSProperties = {
  ...dialogOptionCss, background: '#f0f7ff', border: '1px solid #3B82F6', outline: '2px solid #3B82F6',
}
const dialogFooterCss: React.CSSProperties = {
  padding: '10px 16px', borderTop: '1px solid #ddd', display: 'flex', justifyContent: 'flex-end', gap: 8,
}
const dialogBtnCss: React.CSSProperties = {
  padding: '6px 14px', border: '1px solid #888', background: '#fff', fontSize: 12, cursor: 'pointer',
}
const dialogBtnPrimaryCss: React.CSSProperties = {
  ...dialogBtnCss, border: '1px solid #000', background: '#000', color: '#fff',
}

export default function BoardDragKeyboardMove({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Board View — Keyboard "Move to List" Dialog</RegionLabel>}
      <div style={topBarCss}>
        <span style={{ fontWeight: 700, fontSize: 16 }}>My Project Board</span>
      </div>

      <div style={mainCss}>
        <div style={listCss}>
          <div style={listHeaderCss}>
            <span style={listTitleCss}>📋 To Do</span>
            <span style={listCountCss}>2</span>
          </div>
          <div style={focusedCardCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Focused Card — Visible focus ring + context menu trigger</RegionLabel>}
            Review PR
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
            <span style={listCountCss}>1</span>
          </div>
          <div style={cardCss}>Deploy v1.0</div>
        </div>
      </div>

      {showStructure && <RegionLabel top={120} left={280}>Dialog — "Move to list" (keyboard a11y)</RegionLabel>}
      <div style={dialogOverlayCss}>
        <div style={dialogHeaderCss}>Move "Review PR" to...</div>
        <div style={dialogBodyCss}>
          {showStructure && <RegionLabel top={0} left={0}>List Options — Keyboard navigable with focus rings</RegionLabel>}
          <div style={dialogOptionFocusCss}>
            🔄 In Progress <span style={{ float: 'right', fontSize: 11, color: '#888' }}>Top</span>
          </div>
          <div style={dialogOptionCss}>
            ✅ Done <span style={{ float: 'right', fontSize: 11, color: '#888' }}>Top</span>
          </div>
          <div style={{ fontSize: 11, color: '#888', padding: '8px 12px', fontStyle: 'italic' }}>
            Position: <select style={{ fontSize: 11 }} defaultValue="top"><option>Top</option><option>Bottom</option></select>
          </div>
        </div>
        <div style={dialogFooterCss}>
          <button style={dialogBtnCss}>Cancel</button>
          <button style={dialogBtnPrimaryCss}>Move</button>
        </div>
      </div>

      <div style={{
        padding: '8px 20px',
        borderTop: '1px solid #ddd', fontSize: 12, color: '#888',
      }}>
        <span>5 cards · Keyboard: Ctrl+X cut, Ctrl+V paste</span>
      </div>
    </div>
  )
}
