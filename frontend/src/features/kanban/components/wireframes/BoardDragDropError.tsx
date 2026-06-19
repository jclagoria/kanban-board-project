import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, listCss, listHeaderCss, listTitleCss, listCountCss, cardCss } from '@/components/shared/wireframes/_designTokens'

const mainCss: React.CSSProperties = {
  padding: '20px', display: 'flex', gap: 16,
  overflowX: 'auto', minHeight: 350,
}
const revertedCardCss: React.CSSProperties = {
  ...cardCss, borderLeft: '3px solid #c00',
}
const toastCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 20px', borderTop: '1px solid #ddd',
  background: '#fff5f5', fontSize: 13,
}
const toastTextCss: React.CSSProperties = { color: '#a00' }
const retryBtnCss: React.CSSProperties = {
  padding: '4px 14px', border: '1px solid #c00', background: '#fff',
  color: '#c00', fontSize: 12, fontWeight: 600, cursor: 'pointer',
}

export default function BoardDragDropError({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Board View — Drop Error (Card Reverted)</RegionLabel>}
      <div style={topBarCss}>
        <span style={{ fontWeight: 700, fontSize: 16 }}>My Project Board</span>
      </div>

      <div style={mainCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Lists — Card reverted to original position</RegionLabel>}
        <div style={listCss}>
          <div style={listHeaderCss}>
            <span style={listTitleCss}>📋 To Do</span>
            <span style={listCountCss}>2</span>
          </div>
          <div style={revertedCardCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Reverted Card — Red left border highlight</RegionLabel>}
            Design login page
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

      <div style={toastCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Error Toast — Revert + Retry</RegionLabel>}
        <span style={toastTextCss}>Failed to move card. Please try again.</span>
        <button style={retryBtnCss}>Retry</button>
      </div>
    </div>
  )
}
