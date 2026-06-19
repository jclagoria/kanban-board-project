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
const placeholderCss: React.CSSProperties = {
  color: '#bbb', fontSize: 13,
}

interface RowData {
  id: number
  title: string
  assignee: string
  dueDate: string
  priority: string | null
  storyPts: number | null
  campaign: string | null
  isUrgent: boolean | null
}

const rows: RowData[] = [
  { id: 1, title: 'Q3 Campaign Plan', assignee: 'Alice', dueDate: '09/30', priority: 'High', storyPts: 13, campaign: 'Email', isUrgent: true },
  { id: 2, title: 'Homepage Redesign', assignee: 'Bob', dueDate: '08/15', priority: null, storyPts: null, campaign: 'Social Media', isUrgent: false },
  { id: 3, title: 'API Contract', assignee: 'Carol', dueDate: '09/01', priority: null, storyPts: 8, campaign: null, isUrgent: null },
  { id: 4, title: 'QA Setup', assignee: 'Dave', dueDate: '—', priority: 'Low', storyPts: 3, campaign: 'Events', isUrgent: null },
  { id: 5, title: 'Docs', assignee: 'Eve', dueDate: '10/01', priority: 'Medium', storyPts: 2, campaign: 'Email', isUrgent: false },
]

export default function TableViewEmptyCells({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Table View — Empty Cell Placeholders (—)</RegionLabel>}
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
                <th style={{ ...tableThCss, background: '#f0f8ff' }}>Is Urgent</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.id}>
                  <td style={{ ...tableTdCss, color: '#888', textAlign: 'center' }}>{r.id}</td>
                  <td style={{ ...tableTdCss, fontWeight: 600 }}>{r.title}</td>
                  <td style={tableTdCss}>{r.assignee}</td>
                  <td style={tableTdCss}>{r.dueDate}</td>
                  <td style={{ ...tableTdCss, background: '#f8fbff' }}>
                    {r.priority ?? <span style={placeholderCss}>—</span>}
                  </td>
                  <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>
                    {r.storyPts !== null ? r.storyPts : <span style={placeholderCss}>—</span>}
                  </td>
                  <td style={{ ...tableTdCss, background: '#f8fbff' }}>
                    {r.campaign ?? <span style={placeholderCss}>—</span>}
                  </td>
                  <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>
                    {r.isUrgent !== null ? (r.isUrgent ? '☑' : '☐') : <span style={placeholderCss}>—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
