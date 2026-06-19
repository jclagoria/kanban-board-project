import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss } from '@/components/shared/wireframes/_designTokens'

const cardTitleCss: React.CSSProperties = { fontSize: 15, fontWeight: 700, marginBottom: 4 }
const metaCss: React.CSSProperties = { fontSize: 12, color: '#888', marginBottom: 12 }

/* ── Comment box ── */
const commentBoxCss: React.CSSProperties = {
  border: '1px solid #aaa', borderRadius: 4, padding: 10, position: 'relative',
  minHeight: 80,
}
const commentTextCss: React.CSSProperties = { fontSize: 14, lineHeight: 1.6 }
const chipCss: React.CSSProperties = {
  display: 'inline', background: '#e3f2fd', color: '#1565c0',
  padding: '1px 4px', borderRadius: 3, fontWeight: 600, fontSize: 14,
}
const actionsCss: React.CSSProperties = { display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 10 }
const btnCss: React.CSSProperties = { padding: '6px 16px', fontSize: 13, cursor: 'pointer', border: '1px solid #aaa', background: '#fff', borderRadius: 3 }
const btnPrimaryCss: React.CSSProperties = { ...btnCss, background: '#1976d2', color: '#fff', border: '1px solid #1976d2' }
const btnDisabledCss: React.CSSProperties = { ...btnPrimaryCss, opacity: 0.5, cursor: 'not-allowed' }

/* ── Error banner (blocked) ── */
const errorBannerCss: React.CSSProperties = {
  display: 'flex', alignItems: 'flex-start', gap: 8,
  padding: '10px 12px', background: '#fff5f5', border: '1px solid #c00',
  borderRadius: 4, marginTop: 8, fontSize: 13, position: 'relative',
}

export default function MentionRateLimitWarnings({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Detail — Rate Limit Warnings (Per-Card + Per-User)</RegionLabel>}
      <div style={paneCss}>
        {/* ── Per-card limit ── */}
        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Per-Card Limit: Card has 10/10 mentions</RegionLabel>}
          <div style={cardTitleCss}>Setup CI pipeline</div>
          <div style={metaCss}>In list "In Progress" · Board: Sprint 25</div>

          {showStructure && <RegionLabel top={-2} left={0}>Comment editor — 11th mention blocked</RegionLabel>}
          <div style={commentBoxCss}>
            <div style={commentTextCss}>
              We need{' '}
              <span style={chipCss}>@Alice</span>,{' '}
              <span style={chipCss}>@Bob</span>,{' '}
              <span style={chipCss}>@Carol</span>,{' '}
              <span style={chipCss}>@Diana</span>,{' '}
              <span style={chipCss}>@Eve</span>,{' '}
              <span style={chipCss}>@Frank</span>,{' '}
              <span style={chipCss}>@Grace</span>,{' '}
              <span style={chipCss}>@Henry</span>,{' '}
              <span style={chipCss}>@Iris</span>,{' '}
              <span style={chipCss}>@Jack</span> to review...
              {'\n'}Also <span style={{ fontStyle: 'italic', color: '#888' }}>@Katie</span> ...
            </div>

            <div style={errorBannerCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Error — Per-card limit reached</RegionLabel>}
              <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>⚠</span>
              <div style={{ flex: 1, lineHeight: 1.4 }}>
                <div style={{ fontWeight: 600, marginBottom: 2 }}>Maximum 10 mentions per card reached.</div>
                <div style={{ fontSize: 12, color: '#666' }}>
                  This card already has 10 @mentions. Remove some before adding more, or use a different card.
                </div>
              </div>
            </div>
          </div>

          <div style={actionsCss}>
            <button style={btnCss}>Cancel</button>
            <button style={btnDisabledCss}>Save (blocked)</button>
          </div>
        </div>

        <hr style={dividerCss} />

        {/* ── Per-user daily limit ── */}
        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Per-User Daily Limit: 50/50 issued today</RegionLabel>}
          <div style={cardTitleCss}>Fix login bug</div>
          <div style={metaCss}>In list "Review" · Board: Sprint 25</div>

          {showStructure && <RegionLabel top={-2} left={0}>Comment editor — daily limit reached</RegionLabel>}
          <div style={commentBoxCss}>
            <div style={commentTextCss}>
              Hey{' '}
              <span style={chipCss}>@Alice</span>, can you look at the OAuth flow?
            </div>

            <div style={errorBannerCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Error — Daily limit reached</RegionLabel>}
              <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>⚠</span>
              <div style={{ flex: 1, lineHeight: 1.4 }}>
                <div style={{ fontWeight: 600, marginBottom: 2 }}>Daily mention limit (50) reached. Try again tomorrow.</div>
                <div style={{ fontSize: 12, color: '#666' }}>
                  You've issued 50 @mentions today across all boards. Limit resets at 00:00 UTC.
                </div>
              </div>
            </div>
          </div>

          <div style={actionsCss}>
            <button style={btnCss}>Cancel</button>
            <button style={btnDisabledCss}>Save (blocked)</button>
          </div>
        </div>

        {/* ── Footnote explaining stacking ── */}
        <hr style={dividerCss} />
        <div style={{ ...sectionCss, paddingTop: 8, paddingBottom: 8 }}>
          <div style={{ fontSize: 11, color: '#888', fontStyle: 'italic' }}>
            Note: Per-card and per-user limits stack independently. HTTP 429 is returned server-side if client-side check is bypassed.
          </div>
        </div>
      </div>
    </div>
  )
}
