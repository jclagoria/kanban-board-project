'use client'

import { useEffect } from 'react'
import { useBoardStore } from '@/stores/boardStore'
import { useViewStore } from '@/stores/viewStore'
import BoardView from '@/features/kanban/components/wireframes/BoardView'

export default function KanbanViewPage({ params }: { params: Promise<{ boardId: string }> }) {
  const setCurrentBoard = useBoardStore(s => s.setCurrentBoard)
  const setView = useViewStore(s => s.setView)

  useEffect(() => {
    params.then(p => setCurrentBoard(p.boardId))
    setView('kanban')
  }, [params, setCurrentBoard, setView])

  return <BoardView showStructure={false} />
}
