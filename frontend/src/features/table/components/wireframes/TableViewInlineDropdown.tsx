import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { viewTabsCss, viewTabCss, viewTabActiveCss, tableThCss, tableTdCss } from '@/components/shared/wireframes/_designTokens'

const shellCss: React.CSSProperties = {
  position: 'relative', border: '1px solid #aaa', background: '#fff',
  maxWidth: 960,
}
const barCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 16px', borderBottom: '1px solid #ddd',
  fontSize: 14, fontWeight: 600,
}
const tableCss: React.CSSProperties = {
  width: '100%', borderCollapse: 'collapse', fontSize: 13,
}
const dropdownCss: React.CSSProperties = {
  position: 'absolute', top: '100%', left: 0, zIndex: 20,
  background: '#fff', border: '1px solid #888',
  minWidth: 120, boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
}
const dropdownItemCss: React.CSSProperties = {
  padding: '6px 12px', fontSize: 13, cursor: 'pointer',
}

export default function TableViewInlineDropdown({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Table View — Inline Dropdown Active (Priority)</RegionLabel>}
      <div style={shellCss}>

        <div style={barCss}>
          <span>Sprint 42 · Table View</span>
          <div style={viewTabsCss}>
            <button style={viewTabCss}>Kanban</button>
            <button style={viewTabCss}>Timeline</button>
            <button style={viewTabCss}>Calendar</button>
            <button style={viewTabActiveCss}>Table</button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={tableCss}>
            <thead>
              <tr>
                <th style={{ ...tableThCss, width: 32 }}>#</th>
                <th style={tableThCss}>Title</th>
                <th style={tableThCss}>Assignee</th>
                <th style={tableThCss}>Due Date</th>
                <th style={{ ...tableThCss, background: '#f0f8ff' }}>Priority</th>
                <th style={{ ...tableThCss, background: '#f0f8ff' }}>Story Points</th>
                <th style={{ ...tableThCss, background: '#f0f8ff' }}>Campaign Channel</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 — dropdown active */}
              <tr>
                <td style={{ ...tableTdCss, color: '#888', textAlign: 'center' }}>1</td>
                <td style={{ ...tableTdCss, fontWeight: 600 }}>Q3 Campaign Plan</td>
                <td style={tableTdCss}>Alice</td>
                <td style={tableTdCss}>09/30</td>
                <td style={{ ...tableTdCss, background: '#f8fbff', position: 'relative' }}>
                  <span style={{ fontWeight: 600 }}>High</span>
                  <div style={dropdownCss}>
                    {showStructure && <RegionLabel top={-2} left={0}>Dropdown — Inline Editor Open</RegionLabel>}
                    <div style={{ ...dropdownItemCss, background: '#eee', fontWeight: 600 }}>High</div>
                    <div style={dropdownItemCss}>Medium</div>
                    <div style={dropdownItemCss}>Low</div>
                  </div>
                </td>
                <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>13</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>Email</td>
              </tr>
              {/* Row 2–3 — normal */}
              <tr>
                <td style={{ ...tableTdCss, color: '#888', textAlign: 'center' }}>2</td>
                <td style={{ ...tableTdCss, fontWeight: 600 }}>Homepage Redesign</td>
                <td style={tableTdCss}>Bob</td>
                <td style={tableTdCss}>08/15</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>Medium</td>
                <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>5</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>Social Media</td>
              </tr>
              <tr>
                <td style={{ ...tableTdCss, color: '#888', textAlign: 'center' }}>3</td>
                <td style={{ ...tableTdCss, fontWeight: 600 }}>API Contract</td>
                <td style={tableTdCss}>Carol</td>
                <td style={tableTdCss}>09/01</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>High</td>
                <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>8</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>—</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
