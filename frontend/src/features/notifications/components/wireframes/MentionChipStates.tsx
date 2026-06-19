import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss, sectionTitleCss } from '@/components/shared/wireframes/_designTokens'

const commentCss: React.CSSProperties = {
  border: '1px solid #eee', borderRadius: 4, padding: 12, marginBottom: 12,
  fontSize: 14, lineHeight: 1.6, background: '#fafafa', position: 'relative',
}
const commentMetaCss: React.CSSProperties = { fontSize: 11, color: '#888', marginBottom: 6 }
const commentAuthorCss: React.CSSProperties = { fontWeight: 600, color: '#333' }
const chipCss: React.CSSProperties = {
  display: 'inline', background: '#e3f2fd', color: '#1565c0',
  padding: '1px 4px', borderRadius: 3, fontWeight: 600, fontSize: 14,
  cursor: 'pointer',
}
const removedChipCss: React.CSSProperties = {
  display: 'inline', background: '#f5f5f5', color: '#999',
  padding: '1px 4px', borderRadius: 3, fontWeight: 600, fontSize: 14,
  cursor: 'default', fontStyle: 'italic',
}
const descBoxCss: React.CSSProperties = {
  border: '1px solid #ddd', borderRadius: 4, padding: 12,
  fontSize: 14, lineHeight: 1.6, position: 'relative'
}

export default function MentionChipStates({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Detail — Mention Chip States</RegionLabel>}
      <div style={paneCss}>
        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Card: Setup CI pipeline</RegionLabel>}
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Setup CI pipeline</div>
          <div style={{ fontSize: 12, color: '#888', marginBottom: 16 }}>Board: Sprint 25</div>

          <div style={{ ...sectionTitleCss, marginBottom: 12 }}>Description</div>
          <div style={descBoxCss}>
            We need to set up CI for the frontend repo.
            {'\n'}
            <span style={chipCss}>@Alice</span> already reviewed the config.
            {'\n'}
            <span style={chipCss}>@Bob</span> is handling the deployment.
          </div>
        </div>

        <hr style={dividerCss} />

        <div style={sectionCss}>
          <div style={sectionTitleCss}>Comments</div>

          {/* Comment 1 — Normal */}
          <div style={commentCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Comment — Normal @mention chip</RegionLabel>}
            <div style={commentMetaCss}>
              <span style={commentAuthorCss}>Alice</span> · 2 hours ago
            </div>
            <div>
              Thanks <span style={chipCss}>@Bob</span> for setting this up! I've reviewed the YAML and it looks good.
            </div>
          </div>

          {/* Comment 2 — Member removed */}
          <div style={commentCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Comment — @mention (member removed from board)</RegionLabel>}
            <div style={commentMetaCss}>
              <span style={commentAuthorCss}>Bob</span> · 1 hour ago
            </div>
            <div>
              <span style={removedChipCss}>@Diana (no longer on board)</span> was working on this. Let's reassign.
            </div>
          </div>

          {/* Comment 3 — Self-mention prevented */}
          <div style={commentCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Comment — Self-mention silently ignored</RegionLabel>}
            <div style={commentMetaCss}>
              <span style={commentAuthorCss}>Alice</span> · 30 min ago
            </div>
            <div>
              I tried to mention myself but it was silently ignored. You cannot <span style={{ fontStyle: 'italic', color: '#888' }}>@mention</span> yourself.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
