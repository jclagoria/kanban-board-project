'use client'

import { useBoardStore } from '@/stores/boardStore'

export function useBoard(boardId?: string) {
  const boards = useBoardStore(s => s.boards)
  const currentBoardId = useBoardStore(s => s.currentBoardId)
  const setCurrentBoard = useBoardStore(s => s.setCurrentBoard)
  const createBoard = useBoardStore(s => s.createBoard)
  const board = boards.find(b => b.id === (boardId ?? currentBoardId))

  return { board, boards, currentBoardId, setCurrentBoard, createBoard }
}
