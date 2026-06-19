import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss } from '@/components/shared/wireframes/_designTokens'

/* ── Card header ── */
const cardHeaderCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  marginBottom: 12,
}
const cardTitleCss: React.CSSProperties = { fontSize: 18, fontWeight: 700 }
const cardActionsCss: React.CSSProperties = { display: 'flex', gap: 8, fontSize: 14, color: '#888' }
const cardMetaCss: React.CSSProperties = { fontSize: 12, color: '#888', marginBottom: 16 }

/* ── Description ── */
const descBoxCss: React.CSSProperties = {
  border: '1px solid #ddd', borderRadius: 4, padding: 12, marginBottom: 16,
  fontSize: 13, lineHeight: 1.5, background: '#fafafa', position: 'relative',
}

/* ── Custom fields section ── */
const cfSectionCss: React.CSSProperties = {
  border: '1px solid #ddd', borderRadius: 4, marginBottom: 16, overflow: 'hidden',
  position: 'relative',
}
const cfHeaderCss: React.CSSProperties = {
  background: '#f5f5f5', padding: '10px 14px', fontSize: 12, fontWeight: 700,
  borderBottom: '1px solid #ddd',
}
const cfRowCss: React.CSSProperties = {
  padding: '12px 14px', borderBottom: '1px solid #f5f5f5', position: 'relative',
}
const cfRowLastCss: React.CSSProperties = { ...cfRowCss, borderBottom: 'none' }
const cfLabelCss: React.CSSProperties = { fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 4 }
const cfInputCss: React.CSSProperties = {
  padding: '6px 10px', border: '1px solid #aaa', borderRadius: 3,
  fontSize: 13, width: 120,
}
const cfSelectCss: React.CSSProperties = {
  ...cfInputCss, width: 180, appearance: 'none', background: '#fff',
}
const cfHintCss: React.CSSProperties = { fontSize: 11, color: '#888', marginLeft: 6 }

/* ── Labels ── */
const labelsRowCss: React.CSSProperties = {
  display: 'flex', gap: 6, alignItems: 'center', marginBottom: 12,
}
const labelCss: React.CSSProperties = {
  display: 'inline-block', fontSize: 11, padding: '2px 8px', borderRadius: 3,
  background: '#e3f2fd', color: '#1565c0', fontWeight: 600,
}

/* ── Activity ── */
const activityBoxCss: React.CSSProperties = {
  border: '1px solid #ddd', borderRadius: 4, padding: '10px 14px',
  fontSize: 12, color: '#666', background: '#fafafa', position: 'relative',
}

export default function OnboardingCardDetail({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Card Detail — "Set up CI pipeline" (Sprint Board template)</RegionLabel>}
      <div style={paneCss}>
        <div style={sectionCss}>
          {/* Card header */}
          <div style={cardHeaderCss}>
            <div style={cardTitleCss}>Set up CI pipeline</div>
            <div style={cardActionsCss}>
              <span>⋯</span>
              <span>✎</span>
              <span>🗑</span>
            </div>
          </div>

          {/* Meta */}
          <div style={cardMetaCss}>
            List: To Do · Assigned to: Unassigned
          </div>

          {/* Description */}
          <div style={descBoxCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Card description field</RegionLabel>}
            Configure GitHub Actions to run tests and deploy to staging on every push to the main branch.
          </div>

          {/* Custom fields */}
          <div style={cfSectionCss}>
            {showStructure && <RegionLabel top={0} left={0}>Custom Fields section (from template)</RegionLabel>}
            <div style={cfHeaderCss}>📋 Custom Fields</div>

            <div style={cfRowCss}>
              {showStructure && <RegionLabel top={-2} left={0}>CF: Story Points (number, min=1, max=21)</RegionLabel>}
              <label style={cfLabelCss}>Story Points</label>
              <input style={cfInputCss} type="number" defaultValue={5} />
              <span style={cfHintCss}>(min: 1, max: 21)</span>
            </div>

            <div style={cfRowLastCss}>
              {showStructure && <RegionLabel top={-2} left={0}>CF: Sprint (dropdown, open)</RegionLabel>}
              <label style={cfLabelCss}>Sprint</label>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <select style={cfSelectCss} defaultValue="Sprint 2">
                  <option>Sprint 1</option>
                  <option>Sprint 2</option>
                  <option>Sprint 3</option>
                  <option>Sprint 4</option>
                  <option>Backlog</option>
                </select>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div style={labelsRowCss}>
            <span style={{ fontSize: 12, fontWeight: 600 }}>Labels:</span>
            <span style={labelCss}>DevOps</span>
          </div>

          {/* Due date */}
          <div style={{ fontSize: 12, color: '#888', marginBottom: 16 }}>
            Due date: <span style={{ fontWeight: 600 }}>2026-06-19</span> (3 days from creation)
          </div>
        </div>

        <hr style={dividerCss} />

        <div style={sectionCss}>
          <div style={activityBoxCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Activity — creation log entry</RegionLabel>}
            <span style={{ fontWeight: 600 }}>Jun 16, 2026</span> — Board created from template "Sprint Board"
          </div>
        </div>
      </div>
    </div>
  )
}
