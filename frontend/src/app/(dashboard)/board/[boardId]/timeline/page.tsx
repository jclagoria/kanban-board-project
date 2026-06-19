'use client'

import { useEffect } from 'react'
import { useBoardStore } from '@/stores/boardStore'
import { useViewStore } from '@/stores/viewStore'
import TimelineViewPopulated from '@/features/timeline/components/wireframes/TimelineViewPopulated'

export default function TimelineViewPage({ params }: { params: Promise<{ boardId: string }> }) {
  const setCurrentBoard = useBoardStore(s => s.setCurrentBoard)
  const setView = useViewStore(s => s.setView)

  useEffect(() => {
    params.then(p => setCurrentBoard(p.boardId))
    setView('timeline')
  }, [params, setCurrentBoard, setView])

  return <TimelineViewPopulated showStructure={false} />
}
