import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss } from '@/components/shared/wireframes/_designTokens'

const sectionCss: React.CSSProperties = { position: 'relative' }

/* ── Nav bar ── */
const navCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '10px 20px', borderBottom: '1px solid #ddd', background: '#fafafa',
}
const navTitleCss: React.CSSProperties = { fontSize: 15, fontWeight: 700 }
const navRightCss: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12 }
const bellWrapCss: React.CSSProperties = { position: 'relative', cursor: 'pointer' }
const bellCss: React.CSSProperties = { fontSize: 20, lineHeight: 1 }
const badgeCss: React.CSSProperties = {
  position: 'absolute', top: -8, right: -8, background: '#c00', color: '#fff',
  borderRadius: '50%', width: 18, height: 18, fontSize: 11, fontWeight: 700,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
}

/* ── Panel ── */
const panelCss: React.CSSProperties = {
  position: 'absolute', right: 20, top: 48, width: 380,
  border: '1px solid #aaa', borderRadius: 4, background: '#fff',
  boxShadow: '0 4px 16px rgba(0,0,0,0.15)', zIndex: 20, overflow: 'hidden',
}
const panelHeaderCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '12px 16px', borderBottom: '1px solid #eee',
}
const panelTitleCss: React.CSSProperties = { fontSize: 14, fontWeight: 700 }
const boardLabelCss: React.CSSProperties = {
  padding: '4px 16px', fontSize: 11, fontWeight: 700, color: '#888',
  textTransform: 'uppercase', letterSpacing: 0.5,
}

/* ── Grouped notification ── */
const groupCss: React.CSSProperties = {
  borderBottom: '1px solid #eee', position: 'relative',
}
const groupHeaderCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px',
  cursor: 'pointer', background: '#f0f7ff',
}
const groupTitleCss: React.CSSProperties = { fontSize: 13, fontWeight: 600, flex: 1 }
const expandIconCss: React.CSSProperties = { fontSize: 12, color: '#888' }
const groupBadgeCss: React.CSSProperties = {
  fontSize: 11, color: '#1976d2', fontWeight: 600,
}

/* ── Expanded children ── */
const childCss: React.CSSProperties = {
  display: 'flex', gap: 10, padding: '8px 16px 8px 32px',
  borderTop: '1px solid #f5f5f5', position: 'relative',
}
const childLastCss: React.CSSProperties = { ...childCss, borderBottom: 'none' }
const avatarXsCss: React.CSSProperties = {
  width: 24, height: 24, borderRadius: '50%', background: '#e0e0e0',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: 10, fontWeight: 700, color: '#555', flexShrink: 0,
}
const childContentCss: React.CSSProperties = { flex: 1, minWidth: 0 }
const childNameCss: React.CSSProperties = { fontSize: 12, fontWeight: 600, marginBottom: 1 }
const childSnippetCss: React.CSSProperties = { fontSize: 11, color: '#666' }
const childTimeCss: React.CSSProperties = { fontSize: 10, color: '#999', marginTop: 1 }

/* ── Mark group as read ── */
const markGroupCss: React.CSSProperties = {
  padding: '6px 16px', borderTop: '1px solid #eee',
}
const markGroupBtnCss: React.CSSProperties = {
  fontSize: 12, color: '#1976d2', cursor: 'pointer', border: 'none', background: 'none',
  padding: 0,
}

export default function MentionGroupedExpanded({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Board View — Grouped Notification (expanded)</RegionLabel>}
      <div style={paneCss}>
        <div style={navCss}>
          <div style={navTitleCss}>Sprint 25</div>
          <div style={navRightCss}>
            <div style={bellWrapCss}>
              {showStructure && <RegionLabel top={-2} left={-4}>Bell with badge count</RegionLabel>}
              <span style={bellCss}>🔔</span>
              <span style={badgeCss}>3</span>
            </div>
          </div>
        </div>

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Notification Panel — Grouped notification expanded</RegionLabel>}

          <div style={{ padding: '10px 20px', fontSize: 13, color: '#ccc', filter: 'blur(0.5px)', opacity: 0.4 }}>
            <div>📋 Setup CI pipeline</div>
          </div>

          <div style={panelCss}>
            <div style={panelHeaderCss}>
              <span style={panelTitleCss}>🔔 Notifications</span>
            </div>

            <div style={boardLabelCss}>Sprint 25</div>

            {/* Grouped notification — expanded */}
            <div style={groupCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Grouped notification — expanded</RegionLabel>}
              <div style={groupHeaderCss}>
                <span style={expandIconCss}>▼</span>
                <span style={groupTitleCss}>
                  Bob, Carol, Dave +2 others mentioned you on "Setup CI pipeline"
                </span>
                <span style={groupBadgeCss}>5</span>
              </div>

              {/* Individual mentions */}
              <div style={childCss}>
                <div style={avatarXsCss}>B</div>
                <div style={childContentCss}>
                  <div style={childNameCss}>Bob</div>
                  <div style={childSnippetCss}>"@Alice please review the YAML config"</div>
                  <div style={childTimeCss}>10:00</div>
                </div>
              </div>

              <div style={childCss}>
                <div style={avatarXsCss}>C</div>
                <div style={childContentCss}>
                  <div style={childNameCss}>Carol</div>
                  <div style={childSnippetCss}>"@Alice check the tests"</div>
                  <div style={childTimeCss}>10:03</div>
                </div>
              </div>

              <div style={childCss}>
                <div style={avatarXsCss}>D</div>
                <div style={childContentCss}>
                  <div style={childNameCss}>Dave</div>
                  <div style={childSnippetCss}>"@Alice deploy is failing"</div>
                  <div style={childTimeCss}>10:04</div>
                </div>
              </div>

              <div style={childLastCss}>
                <div style={avatarXsCss}>E</div>
                <div style={childContentCss}>
                  <div style={childNameCss}>Eve</div>
                  <div style={childSnippetCss}>"@Alice can you check the build?"</div>
                  <div style={childTimeCss}>10:06</div>
                </div>
              </div>

              <div style={markGroupCss}>
                <button style={markGroupBtnCss}>Mark group as read</button>
                <span style={{ fontSize: 10, color: '#999', marginLeft: 8 }}>
                  (will mark all 5 mentions as read)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
