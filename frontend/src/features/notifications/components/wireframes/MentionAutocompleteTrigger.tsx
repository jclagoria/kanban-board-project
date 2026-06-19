import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss } from '@/components/shared/wireframes/_designTokens'

const cardTitleCss: React.CSSProperties = { fontSize: 15, fontWeight: 700, marginBottom: 4 }
const metaCss: React.CSSProperties = { fontSize: 12, color: '#888', marginBottom: 12 }
const commentBoxCss: React.CSSProperties = {
  border: '1px solid #aaa', borderRadius: 4, padding: 10, position: 'relative',
  minHeight: 80,
}
const commentTextCss: React.CSSProperties = { fontSize: 14, lineHeight: 1.6, whiteSpace: 'pre-wrap' }
const chipCss: React.CSSProperties = {
  display: 'inline', background: '#e3f2fd', color: '#1565c0',
  padding: '1px 4px', borderRadius: 3, fontWeight: 600, fontSize: 14,
}
const cursorCss: React.CSSProperties = {
  display: 'inline-block', width: 2, height: 16, background: '#000',
  verticalAlign: 'middle', marginLeft: 1,
}
const actionsCss: React.CSSProperties = { display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 10 }
const btnCss: React.CSSProperties = { padding: '6px 16px', fontSize: 13, cursor: 'pointer', border: '1px solid #aaa', background: '#fff', borderRadius: 3 }
const btnPrimaryCss: React.CSSProperties = { ...btnCss, background: '#1976d2', color: '#fff', border: '1px solid #1976d2' }

/* ── Autocomplete dropdown ── */
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

const MEMBERS = [
  { name: 'Alice Johnson', email: 'alice@example.com', initial: 'A' },
  { name: 'Bob Smith', email: 'bob@example.com', initial: 'B' },
  { name: 'Carlos Mendez', email: 'carlos@example.com', initial: 'C' },
  { name: 'Diana Reyes', email: 'diana@example.com', initial: 'D' },
]

export default function MentionAutocompleteTrigger({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Comment — @mention Autocomplete Triggered</RegionLabel>}
      <div style={paneCss}>
        <div style={sectionCss}>
          <div style={cardTitleCss}>Setup CI pipeline</div>
          <div style={metaCss}>In list "In Progress" · Board: Sprint 25</div>

          {showStructure && <RegionLabel top={-2} left={0}>Comment Editor — @ typed, dropdown open</RegionLabel>}
          <div style={commentBoxCss}>
            <div style={commentTextCss}>
              Alice, can you please review the config?{' '}
              <span style={chipCss}>@Alice</span> already checked the YAML.
              {'\n'}Also{' '}
              <span style={chipCss}>@Bob</span> we need your input on{' '}
              <span style={cursorCss} />
            </div>
            <div style={dropdownCss}>
              <div style={dropdownHeaderCss}>Board Members</div>
              {MEMBERS.map((m, i) => (
                <div key={m.name} style={i < MEMBERS.length - 1 ? memberRowCss : memberRowLastCss}>
                  <div style={avatarCss}>{m.initial}</div>
                  <div style={memberInfoCss}>
                    <div style={memberNameCss}>{m.name}</div>
                    <div style={memberEmailCss}>{m.email}</div>
                  </div>
                </div>
              ))}
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
