import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { inputCss, labelPillCss, footerCss } from '@/components/shared/wireframes/_designTokens'

const modalCss: React.CSSProperties = {
  position: 'relative', border: '1px solid #aaa', background: '#fff',
  maxWidth: 560, margin: '0 auto',
}
const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '16px 20px', borderBottom: '1px solid #ddd', fontSize: 16, fontWeight: 600,
}
const bodyCss: React.CSSProperties = { padding: 20 }
const labelCss: React.CSSProperties = { display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }
const hintCss: React.CSSProperties = { fontSize: 12, color: '#888', marginTop: 4, fontStyle: 'italic' }
const resultsHeaderCss: React.CSSProperties = {
  fontSize: 12, fontWeight: 700, color: '#888', textTransform: 'uppercase',
  letterSpacing: '0.5px', marginTop: 20, marginBottom: 10,
}
const resultItemCss: React.CSSProperties = {
  display: 'flex', alignItems: 'flex-start', gap: 10,
  padding: '10px 12px', border: '1px solid #eee', borderRadius: 4,
  marginBottom: 6, cursor: 'pointer',
}
const resultItemActiveCss: React.CSSProperties = {
  ...resultItemCss, border: '2px solid #000', background: '#f8f8ff',
}
const radioCss: React.CSSProperties = { marginTop: 2 }
const resultInfoCss: React.CSSProperties = { flex: 1 }
const resultRepoCss: React.CSSProperties = { fontSize: 11, color: '#888', marginBottom: 2 }
const resultTitleCss: React.CSSProperties = { fontSize: 13, fontWeight: 600, marginBottom: 2 }
const resultLabelsCss: React.CSSProperties = { display: 'flex', gap: 4, marginTop: 2 }
const paginationCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  fontSize: 12, color: '#888', marginTop: 12,
}
const pageBtnCss: React.CSSProperties = {
  padding: '2px 6px', border: '1px solid #ccc', background: '#fff',
  fontSize: 11, cursor: 'pointer',
}
const cancelBtnCss: React.CSSProperties = {
  padding: '8px 20px', border: '1px solid #888', background: '#fff',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}
const linkBtnCss: React.CSSProperties = {
  padding: '8px 20px', background: '#000', color: '#fff', border: 'none',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
}

export default function GitHubIssueSearch({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Modal — Link GitHub Issue Search</RegionLabel>}
      <div style={modalCss}>
        <div style={headerCss}>
          <span>🔗 Link GitHub Issue</span>
          <button style={{ border: 'none', background: 'none', fontSize: 14, cursor: 'pointer', color: '#555' }}>✕</button>
        </div>

        <div style={bodyCss}>
          <label style={labelCss}>Search</label>
          <input
            style={inputCss}
            type="text"
            defaultValue="login bug"
            placeholder="Search by repo#number or keyword..."
          />
          <div style={hintCss}>e.g., "owner/repo#123" or "login bug"</div>

          <div style={resultsHeaderCss}>
            Results <span style={{ fontWeight: 400, color: '#aaa' }}>(showing 3 of 12)</span>
          </div>

          {showStructure && <RegionLabel top={0} left={0}>Search Results — radio select</RegionLabel>}

          {/* Result 1 — selected */}
          <div style={resultItemActiveCss}>
            <input type="radio" style={radioCss} defaultChecked name="issue" />
            <div style={resultInfoCss}>
              <div style={resultRepoCss}>owner/frontend  #142</div>
              <div style={resultTitleCss}>Fix button alignment</div>
              <div style={resultLabelsCss}>
                <span style={{ ...labelPillCss, background: '#e8f5e9', color: '#2e7d32' }}>bug</span>
                <span style={{ ...labelPillCss, background: '#fff3e0', color: '#e65100' }}>ui</span>
              </div>
            </div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              fontSize: 11, fontWeight: 600, color: '#090',
              padding: '2px 8px', border: '1px solid #090', borderRadius: 3, whiteSpace: 'nowrap',
            }}>🟢 Open</span>
          </div>

          {/* Result 2 */}
          <div style={resultItemCss}>
            <input type="radio" style={radioCss} name="issue" />
            <div style={resultInfoCss}>
              <div style={resultRepoCss}>owner/frontend  #143</div>
              <div style={resultTitleCss}>Login page responsive grid</div>
              <div style={resultLabelsCss}>
                <span style={{ ...labelPillCss, background: '#e8f5e9', color: '#2e7d32' }}>bug</span>
              </div>
            </div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              fontSize: 11, fontWeight: 600, color: '#090',
              padding: '2px 8px', border: '1px solid #090', borderRadius: 3, whiteSpace: 'nowrap',
            }}>🟢 Open</span>
          </div>

          {/* Result 3 */}
          <div style={resultItemCss}>
            <input type="radio" style={radioCss} name="issue" />
            <div style={resultInfoCss}>
              <div style={resultRepoCss}>owner/frontend  #145</div>
              <div style={resultTitleCss}>Button hover state missing</div>
              <div style={resultLabelsCss}>
                <span style={{ ...labelPillCss, background: '#fce4ec', color: '#c62828' }}>bug</span>
              </div>
            </div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              fontSize: 11, fontWeight: 600, color: '#c00',
              padding: '2px 8px', border: '1px solid #c00', borderRadius: 3, whiteSpace: 'nowrap',
            }}>🔴 Closed</span>
          </div>

          <div style={paginationCss}>
            <span>Showing 3 of 12 results</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <button style={pageBtnCss}>&lt;</button>
              <button style={{ ...pageBtnCss, background: '#000', color: '#fff' }}>1</button>
              <button style={pageBtnCss}>2</button>
              <button style={pageBtnCss}>3</button>
              <button style={pageBtnCss}>4</button>
              <button style={pageBtnCss}>&gt;</button>
            </div>
          </div>

          <div style={footerCss}>
            {showStructure && <RegionLabel top={-4} right={0}>Actions — Cancel / Link Selected</RegionLabel>}
            <button style={cancelBtnCss}>Cancel</button>
            <button style={linkBtnCss}>Link Selected</button>
          </div>
        </div>
      </div>
    </div>
  )
}
