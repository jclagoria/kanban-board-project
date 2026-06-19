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
const toolbarCss: React.CSSProperties = {
  display: 'flex', gap: 8, alignItems: 'center',
}
const toolBtnCss: React.CSSProperties = {
  padding: '4px 10px', border: '1px solid #888', background: '#fff',
  fontSize: 12, cursor: 'pointer',
}
const tableCss: React.CSSProperties = {
  width: '100%', borderCollapse: 'collapse', fontSize: 13,
}
const paginationCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 16px', borderTop: '1px solid #ddd',
  fontSize: 12, color: '#666',
}
const pageBtnCss: React.CSSProperties = {
  padding: '3px 8px', border: '1px solid #ccc', background: '#fff',
  fontSize: 12, cursor: 'pointer',
}

interface RowData {
  id: number
  title: string
  assignee: string
  dueDate: string
  labels: string[]
  priority: string
  storyPts: number | null
  campaign: string
  isUrgent: boolean
}

const rows: RowData[] = [
  { id: 1, title: 'Q3 Campaign Plan', assignee: 'Alice', dueDate: '09/30', labels: ['Marketing'], priority: 'High', storyPts: 13, campaign: 'Email', isUrgent: true },
  { id: 2, title: 'Homepage Redesign', assignee: 'Bob', dueDate: '08/15', labels: ['Design'], priority: 'Medium', storyPts: 5, campaign: 'Social Media', isUrgent: false },
  { id: 3, title: 'API Contract', assignee: 'Carol', dueDate: '09/01', labels: ['Dev'], priority: 'High', storyPts: 8, campaign: '—', isUrgent: true },
  { id: 4, title: 'QA Setup', assignee: 'Dave', dueDate: '—', labels: ['QA'], priority: 'Low', storyPts: 3, campaign: 'Events', isUrgent: false },
  { id: 5, title: 'Docs', assignee: 'Eve', dueDate: '10/01', labels: ['Docs'], priority: 'Medium', storyPts: 2, campaign: 'Email', isUrgent: false },
]

export default function TableViewPopulated({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Table View — Populated (5 cards, 4 CF columns)</RegionLabel>}
      <div style={shellCss}>

        {/* ── View bar ── */}
        <div style={barCss}>
          <span>Sprint 42 · Table View</span>
          <div style={viewTabsCss}>
            <button style={viewTabCss}>Kanban</button>
            <button style={viewTabCss}>Timeline</button>
            <button style={viewTabCss}>Calendar</button>
            <button style={viewTabActiveCss}>Table</button>
          </div>
          <div style={toolbarCss}>
            <button style={toolBtnCss}>Filter</button>
            <button style={toolBtnCss}>▼</button>
          </div>
        </div>

        {/* ── Table ── */}
        <div style={{ overflowX: 'auto' }}>
          <table style={tableCss}>
            <thead>
              <tr>
                <th style={{ ...tableThCss, width: 32 }}>#</th>
                <th style={tableThCss}>Title</th>
                <th style={tableThCss}>Assignee</th>
                <th style={tableThCss}>Due Date</th>
                <th style={tableThCss}>Labels</th>
                {showStructure && <RegionLabel top={0} left={230}>CF Columns →</RegionLabel>}
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
                  <td style={tableTdCss}>
                    {r.labels.map(l => (
                      <span key={l} style={{ display: 'inline-block', padding: '1px 6px', fontSize: 11, fontWeight: 600, background: '#eee', borderRadius: 2, marginRight: 4 }}>{l}</span>
                    ))}
                  </td>
                  <td style={{ ...tableTdCss, background: '#f8fbff' }}>{r.priority}</td>
                  <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>{r.storyPts ?? '—'}</td>
                  <td style={{ ...tableTdCss, background: '#f8fbff' }}>{r.campaign}</td>
                  <td style={{ ...tableTdCss, background: '#f8fbff', textAlign: 'center' }}>{r.isUrgent ? '☑' : '☐'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Pagination ── */}
        <div style={paginationCss}>
          <span>Showing 5 of 42 cards</span>
          <div style={{ display: 'flex', gap: 4 }}>
            <button style={pageBtnCss}>&lt;</button>
            <button style={{ ...pageBtnCss, background: '#000', color: '#fff' }}>1</button>
            <button style={pageBtnCss}>2</button>
            <button style={pageBtnCss}>3</button>
            <button style={pageBtnCss}>...</button>
            <button style={pageBtnCss}>9</button>
            <button style={pageBtnCss}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  )
}
