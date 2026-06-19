import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { topBarCss, boardHeaderCss, boardNameCss, listCss, listHeaderCss, listTitleCss, listCountCss, cardCss, bottomBarCss } from '@/components/shared/wireframes/_designTokens'

const noticeBarCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '8px 20px', borderBottom: '1px solid #e8a000',
  background: '#fffbe6', fontSize: 13, color: '#8a6a00',
}
const archivedBadgeCss: React.CSSProperties = {
  fontSize: 11, border: '1px solid #e8a000', padding: '2px 8px', borderRadius: 4,
  color: '#8a6a00', background: '#fffbe6',
}
const restoreBtnCss: React.CSSProperties = {
  padding: '6px 14px', border: '1px solid #000', background: '#000', color: '#fff', fontSize: 12, cursor: 'pointer',
}
const deleteBtnCss: React.CSSProperties = {
  padding: '6px 14px', border: '1px solid #c00', background: '#fff', color: '#c00', fontSize: 12, cursor: 'pointer',
}
const mainCss: React.CSSProperties = {
  padding: '20px', display: 'flex', gap: 16,
  overflowX: 'auto', minHeight: 400, opacity: 0.7,
}
const readOnlyOverlayCss: React.CSSProperties = {
  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: 'rgba(255,255,255,0.3)', zIndex: 5,
  fontSize: 14, color: '#888', fontWeight: 600,
}

export default function ArchivedBoardReadonly({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>App Shell — Archived Board (Read-Only View)</RegionLabel>}

      <div style={noticeBarCss}>
        {showStructure && <RegionLabel top={-4} left={0}>Notice Bar — Grace Period Warning</RegionLabel>}
        <span>⚠ This board is archived. Read-only view. It will be permanently deleted in 8 days.</span>
        <span />
      </div>

      <div style={topBarCss}>
        <div style={boardHeaderCss}>
          <div style={{ width: 12, height: 12, background: '#d4e5f7', border: '1px solid #888' }} />
          <span style={boardNameCss}>Sprint 23</span>
          <span style={archivedBadgeCss}>Archived</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={restoreBtnCss}>Restore</button>
          <button style={deleteBtnCss}>Delete permanently</button>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={mainCss}>
          <div style={listCss}>
            <div style={listHeaderCss}>
              <span style={listTitleCss}>To Do</span>
              <span style={listCountCss}>3</span>
            </div>
            <div style={cardCss}>Setup CI/CD pipeline</div>
            <div style={cardCss}>Write unit tests</div>
            <div style={cardCss}>Update dependencies</div>
          </div>
          <div style={listCss}>
            <div style={listHeaderCss}>
              <span style={listTitleCss}>In Progress</span>
              <span style={listCountCss}>2</span>
            </div>
            <div style={cardCss}>Design review</div>
            <div style={cardCss}>API integration</div>
          </div>
          <div style={listCss}>
            <div style={listHeaderCss}>
              <span style={listTitleCss}>Done</span>
              <span style={listCountCss}>4</span>
            </div>
            <div style={cardCss}>Initial setup</div>
            <div style={cardCss}>Database schema</div>
            <div style={cardCss}>Auth module</div>
            <div style={cardCss}>Deploy to staging</div>
          </div>
        </div>
        {showStructure && <RegionLabel top={0} left={0}>Read-Only Overlay — Visual Dimming</RegionLabel>}
        <div style={readOnlyOverlayCss}>READ ONLY — Archived Board</div>
      </div>

      <div style={bottomBarCss}>
        <span>9 cards</span>
        <span>Expires in 8 days</span>
      </div>
    </div>
  )
}
