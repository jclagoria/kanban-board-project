'use client'

import { useEffect } from 'react'
import { useBoardStore } from '@/stores/boardStore'
import { useViewStore } from '@/stores/viewStore'
import BoardView from '@/features/kanban/components/wireframes/BoardView'

export default function CalendarViewPage({ params }: { params: Promise<{ boardId: string }> }) {
  const setCurrentBoard = useBoardStore(s => s.setCurrentBoard)
  const setView = useViewStore(s => s.setView)

  useEffect(() => {
    params.then(p => setCurrentBoard(p.boardId))
    setView('calendar')
  }, [params, setCurrentBoard, setView])

  return (
    <div>
      <div style={{ padding: 8, background: '#fff3cd', color: '#856404', fontSize: 13, textAlign: 'center', borderBottom: '1px solid #ffc107' }}>
        Calendar view wireframe pending — showing Kanban as placeholder
      </div>
      <BoardView showStructure={false} />
    </div>
  )
}
