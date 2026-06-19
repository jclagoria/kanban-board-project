import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, boardHeaderCss, boardNameCss, listCss, listHeaderCss, listTitleCss, listCountCss, cardCss } from '@/components/shared/wireframes/_designTokens'

const mainCss: React.CSSProperties = {
  padding: '20px', display: 'flex', gap: 16,
  overflowX: 'auto', minHeight: 400, position: 'relative',
}
const ghostCardCss: React.CSSProperties = {
  ...cardCss, opacity: 0.3, background: '#eaeaea', borderStyle: 'dashed',
}
const indicatorLineCss: React.CSSProperties = {
  height: 2, background: '#3B82F6', margin: '4px 0', position: 'relative',
}
const pillCss: React.CSSProperties = {
  position: 'absolute', top: 120, left: 340, zIndex: 100,
  border: '1px solid #3B82F6', background: '#fff', padding: '6px 14px',
  fontSize: 13, fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  transform: 'rotate(2deg)', pointerEvents: 'none',
}
const cursorIconCss: React.CSSProperties = {
  position: 'absolute', top: 116, left: 320, zIndex: 101,
  fontSize: 16, color: '#3B82F6',
}

export default function BoardDragMidDrag({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Board View — Mid-Drag State</RegionLabel>}
      <div style={topBarCss}>
        <div style={boardHeaderCss}>
          <div style={{ width: 12, height: 12, background: '#d4e5f7', border: '1px solid #888' }} />
          <span style={boardNameCss}>My Project Board</span>
        </div>
      </div>
      <div style={mainCss}>
        {showStructure && <RegionLabel top={-4} left={0}>List Row — Ghost in source, indicator in target, pill near cursor</RegionLabel>}

        <div style={listCss}>
          <div style={listHeaderCss}>
            <span><span style={{ fontSize: 12 }}>📋</span> <span style={listTitleCss}>To Do</span></span>
            <span style={listCountCss}>2</span>
          </div>
          <div style={ghostCardCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Ghost Card — 0.3 opacity, dashed border</RegionLabel>}
            Design login page
          </div>
          <div style={cardCss}>Write tests</div>
        </div>

        <div style={listCss}>
          <div style={listHeaderCss}>
            <span><span style={{ fontSize: 12 }}>🔄</span> <span style={listTitleCss}>In Progress</span></span>
            <span style={listCountCss}>2</span>
          </div>
          <div style={cardCss}>Fix auth bug</div>
          {showStructure && <RegionLabel top={32} left={0}>Drop Indicator — 2px solid #3B82F6</RegionLabel>}
          <div style={indicatorLineCss} />
          <div style={cardCss}>API integration</div>
        </div>

        <div style={listCss}>
          <div style={listHeaderCss}>
            <span><span style={{ fontSize: 12 }}>✅</span> <span style={listTitleCss}>Done</span></span>
            <span style={listCountCss}>1</span>
          </div>
          <div style={cardCss}>Deploy v1.0</div>
        </div>
      </div>

      {showStructure && <RegionLabel top={120} left={320}>Compact Pill — Card Title + Cursor</RegionLabel>}
      <div style={cursorIconCss}>🔷</div>
      <div style={pillCss}>Design login page</div>

      <div style={{
        padding: '8px 20px',
        borderTop: '1px solid #ddd', fontSize: 12, color: '#888',
      }}>
        <span>Drag in progress — 5 cards</span>
      </div>
    </div>
  )
}
