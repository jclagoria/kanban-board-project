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
const tableCss: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: 13 }
const thFilterActiveCss: React.CSSProperties = {
  ...tableThCss, background: '#fff8e1',
}
const filterDropdownCss: React.CSSProperties = {
  position: 'absolute', top: '100%', left: 0, zIndex: 20,
  background: '#fff', border: '1px solid #888', minWidth: 160,
  boxShadow: '0 2px 8px rgba(0,0,0,0.12)', padding: 8,
}
const filterCheckRowCss: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 6, padding: '4px 0',
  fontSize: 13,
}
const applyBtnCss: React.CSSProperties = {
  width: '100%', marginTop: 8, padding: '5px 0',
  border: '1px solid #888', background: '#fff',
  fontSize: 12, fontWeight: 600, cursor: 'pointer',
}
const filterTagCss: React.CSSProperties = {
  display: 'inline-block', padding: '1px 6px', fontSize: 11,
  background: '#fff8e1', border: '1px solid #e0c800', borderRadius: 3,
}
const paginationCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 16px', borderTop: '1px solid #ddd',
  fontSize: 12, color: '#666',
}
const clearLinkCss: React.CSSProperties = {
  border: 'none', background: 'none', fontSize: 12, color: '#06c',
  cursor: 'pointer', textDecoration: 'underline',
}

export default function TableViewFilterActive({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Table View — Filter Active (Priority dropdown)</RegionLabel>}
      <div style={shellCss}>

        <div style={barCss}>
          <span>Sprint 42 · Table View</span>
          <div style={viewTabsCss}>
            <button style={viewTabCss}>Kanban</button>
            <button style={viewTabCss}>Timeline</button>
            <button style={viewTabCss}>Calendar</button>
            <button style={viewTabActiveCss}>Table</button>
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={filterTagCss}>1 filter active</span>
            <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 12 }}>▼</button>
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
                <th style={{ ...thFilterActiveCss, position: 'relative' }}>
                  Priority
                  <span style={{ marginLeft: 4, fontSize: 11, color: '#e0a800' }}>▼</span>
                  <div style={filterDropdownCss}>
                    {showStructure && <RegionLabel top={-2} left={0}>Filter — Priority Dropdown (multi-select)</RegionLabel>}
                    <div style={filterCheckRowCss}>
                      <input type="checkbox" defaultChecked />
                      <span>All</span>
                    </div>
                    <div style={filterCheckRowCss}>
                      <input type="checkbox" defaultChecked />
                      <span>High</span>
                    </div>
                    <div style={filterCheckRowCss}>
                      <input type="checkbox" defaultChecked />
                      <span>Medium</span>
                    </div>
                    <div style={filterCheckRowCss}>
                      <input type="checkbox" />
                      <span>Low</span>
                    </div>
                    <button style={applyBtnCss}>Apply</button>
                  </div>
                </th>
                <th style={{ ...tableThCss, background: '#f0f8ff' }}>Story Points</th>
                <th style={{ ...tableThCss, background: '#f0f8ff' }}>Campaign Channel</th>
                <th style={{ ...tableThCss, background: '#f0f8ff' }}>Is Urgent</th>
              </tr>
            </thead>
            <tbody>
              {/* Only Medium and High rows shown (Low filtered out) */}
              <tr>
                <td style={{ ...tableTdCss, color: '#888', textAlign: 'center' }}>1</td>
                <td style={{ ...tableTdCss, fontWeight: 600 }}>Q3 Campaign Plan</td>
                <td style={tableTdCss}>Alice</td>
                <td style={tableTdCss}>09/30</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>High</td>
                <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>13</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>Email</td>
                <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>☑</td>
              </tr>
              <tr>
                <td style={{ ...tableTdCss, color: '#888', textAlign: 'center' }}>2</td>
                <td style={{ ...tableTdCss, fontWeight: 600 }}>Homepage Redesign</td>
                <td style={tableTdCss}>Bob</td>
                <td style={tableTdCss}>08/15</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>Medium</td>
                <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>5</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>Social Media</td>
                <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>☐</td>
              </tr>
              <tr>
                <td style={{ ...tableTdCss, color: '#888', textAlign: 'center' }}>3</td>
                <td style={{ ...tableTdCss, fontWeight: 600 }}>API Contract</td>
                <td style={tableTdCss}>Carol</td>
                <td style={tableTdCss}>09/01</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>High</td>
                <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>8</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>—</td>
                <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>☑</td>
              </tr>
              <tr>
                <td style={{ ...tableTdCss, color: '#888', textAlign: 'center' }}>5</td>
                <td style={{ ...tableTdCss, fontWeight: 600 }}>Docs</td>
                <td style={tableTdCss}>Eve</td>
                <td style={tableTdCss}>10/01</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>Medium</td>
                <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>2</td>
                <td style={{ ...tableTdCss, background: '#f8fbff' }}>Email</td>
                <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>☐</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={paginationCss}>
          <span>Showing 4 of 42 cards (filtered)</span>
          <button style={clearLinkCss}>Clear filter</button>
        </div>
      </div>
    </div>
  )
}
