'use client'

import { useEffect } from 'react'
import { useBoardStore } from '@/stores/boardStore'
import BoardView from '@/features/kanban/components/wireframes/BoardView'

export default function BoardPage({ params }: { params: Promise<{ boardId: string }> }) {
  const setCurrentBoard = useBoardStore(s => s.setCurrentBoard)

  useEffect(() => {
    params.then(p => setCurrentBoard(p.boardId))
  }, [params, setCurrentBoard])

  return <BoardView showStructure={false} />
}
