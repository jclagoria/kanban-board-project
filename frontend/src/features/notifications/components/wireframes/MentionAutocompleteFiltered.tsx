import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss } from '@/components/shared/wireframes/_designTokens'

const cardTitleCss: React.CSSProperties = { fontSize: 15, fontWeight: 700, marginBottom: 4 }
const metaCss: React.CSSProperties = { fontSize: 12, color: '#888', marginBottom: 12 }
const commentBoxCss: React.CSSProperties = {
  border: '1px solid #aaa', borderRadius: 4, padding: 10, position: 'relative',
  minHeight: 80,
}
const commentTextCss: React.CSSProperties = { fontSize: 14, lineHeight: 1.6, whiteSpace: 'pre-wrap' }
const cursorCss: React.CSSProperties = {
  display: 'inline-block', width: 2, height: 16, background: '#000',
  verticalAlign: 'middle', marginLeft: 1,
}
const actionsCss: React.CSSProperties = { display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 10 }
const btnCss: React.CSSProperties = { padding: '6px 16px', fontSize: 13, cursor: 'pointer', border: '1px solid #aaa', background: '#fff', borderRadius: 3 }
const btnPrimaryCss: React.CSSProperties = { ...btnCss, background: '#1976d2', color: '#fff', border: '1px solid #1976d2' }

/* ── Dropdown ── */
const dropdownCss: React.CSSProperties = {
  position: 'absolute', left: 64, top: 30, width: 240,
  border: '1px solid #aaa', borderRadius: 4, background: '#fff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 20, overflow: 'hidden',
}
const dropdownHeaderCss: React.CSSProperties = {
  padding: '6px 10px', fontSize: 11, fontWeight: 700, color: '#888',
  textTransform: 'uppercase', letterSpacing: 0.5, borderBottom: '1px solid #eee',
}
const memberRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px',
  cursor: 'pointer', borderBottom: '1px solid #f5f5f5',
}
const memberRowLastCss: React.CSSProperties = { ...memberRowCss, borderBottom: 'none' }
const avatarCss: React.CSSProperties = {
  width: 24, height: 24, borderRadius: '50%', background: '#e0e0e0',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: 11, fontWeight: 700, color: '#555', flexShrink: 0,
}
const memberInfoCss: React.CSSProperties = { flex: 1 }
const memberNameCss: React.CSSProperties = { fontSize: 13, fontWeight: 600 }
const memberEmailCss: React.CSSProperties = { fontSize: 11, color: '#888' }
const highlightLastCss: React.CSSProperties = { ...memberRowLastCss, background: '#e3f2fd' }

/* ── No results ── */
const noResultCss: React.CSSProperties = {
  padding: '16px 10px', textAlign: 'center', fontSize: 13, color: '#888',
}

export default function MentionAutocompleteFiltered({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Comment — Filtered + No Results + Self-Mention</RegionLabel>}
      <div style={paneCss}>
        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Filtered: @ca → Carlos only</RegionLabel>}
          <div style={cardTitleCss}>Setup CI pipeline</div>
          <div style={metaCss}>In list "In Progress" · Board: Sprint 25</div>

          {showStructure && <RegionLabel top={-2} left={0}>@ca typed, filtered to Carlos (highlighted)</RegionLabel>}
          <div style={commentBoxCss}>
            <div style={commentTextCss}>
              Hey{' '}
              <span style={cursorCss} />ca ...
            </div>
            <div style={dropdownCss}>
              <div style={dropdownHeaderCss}>Board Members</div>
              <div style={highlightLastCss}>
                <div style={avatarCss}>C</div>
                <div style={memberInfoCss}>
                  <div style={memberNameCss}>Carlos Mendez</div>
                  <div style={memberEmailCss}>carlos@example.com</div>
                </div>
              </div>
            </div>
          </div>

          <div style={actionsCss}>
            <button style={btnCss}>Cancel</button>
            <button style={btnPrimaryCss}>Save</button>
          </div>
        </div>

        <hr style={dividerCss} />

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>No Results: @nonexistent</RegionLabel>}
          <div style={cardTitleCss}>Setup CI pipeline</div>
          <div style={metaCss}>In list "In Progress" · Board: Sprint 25</div>

          {showStructure && <RegionLabel top={-2} left={0}>@nonexistent → "No members found"</RegionLabel>}
          <div style={commentBoxCss}>
            <div style={commentTextCss}>
              Assign{' '}
              <span style={cursorCss} />nonexistentuser to review...
            </div>
            <div style={{ ...dropdownCss, width: 200 }}>
              <div style={dropdownHeaderCss}>Board Members</div>
              <div style={noResultCss}>No members found</div>
            </div>
          </div>

          <div style={actionsCss}>
            <button style={btnCss}>Cancel</button>
            <button style={btnPrimaryCss}>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}
