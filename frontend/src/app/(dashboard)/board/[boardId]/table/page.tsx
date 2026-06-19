'use client'

import { useEffect } from 'react'
import { useBoardStore } from '@/stores/boardStore'
import { useViewStore } from '@/stores/viewStore'
import TableViewPopulated from '@/features/table/components/wireframes/TableViewPopulated'

export default function TableViewPage({ params }: { params: Promise<{ boardId: string }> }) {
  const setCurrentBoard = useBoardStore(s => s.setCurrentBoard)
  const setView = useViewStore(s => s.setView)

  useEffect(() => {
    params.then(p => setCurrentBoard(p.boardId))
    setView('table')
  }, [params, setCurrentBoard, setView])

  return <TableViewPopulated showStructure={false} />
}
