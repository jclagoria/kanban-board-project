'use client'

import { create } from 'zustand'
import type { SseEvent } from '@/lib/sse/types'
import type { Board, BoardList, Card } from '@/lib/types/domain'

type BoardState = {
  boards: Board[]
  currentBoardId: string | null
  lists: BoardList[]
  cards: Record<string, Card[]>
}

type BoardActions = {
  setCurrentBoard: (id: string) => void
  createBoard: (name: string, description?: string) => Board
  archiveBoard: (id: string) => void
  restoreBoard: (id: string) => void
  handleSseEvent: (event: Extract<SseEvent, { type: 'board_updated' | 'member_joined' }>) => void
}

const MOCK_BOARDS: Board[] = [
  {
    id: 'b1',
    name: 'Sprint 24',
    description: 'Current sprint',
    visibility: 'private',
    coverColor: '#3b82f6',
    archived: false,
    createdAt: '2026-06-01',
    memberCount: 5,
  },
  {
    id: 'b2',
    name: 'Product Roadmap',
    visibility: 'invite-only',
    coverColor: '#22c55e',
    archived: false,
    createdAt: '2026-05-15',
    memberCount: 8,
  },
  {
    id: 'b3',
    name: 'Bug Tracker',
    visibility: 'private',
    coverColor: '#ef4444',
    archived: false,
    createdAt: '2026-04-20',
    memberCount: 3,
  },
  {
    id: 'b4',
    name: 'Content Calendar',
    visibility: 'private',
    coverColor: '#a855f7',
    archived: true,
    archivedAt: '2026-06-10',
    createdAt: '2026-03-01',
    memberCount: 2,
  },
]

const MOCK_LISTS: BoardList[] = [
  { id: 'l1', name: 'To Do', position: 0 },
  { id: 'l2', name: 'In Progress', position: 1 },
  { id: 'l3', name: 'Review', position: 2 },
  { id: 'l4', name: 'Done', position: 3 },
]

const MOCK_CARDS: Record<string, Card[]> = {
  l1: [
    {
      id: 'c1',
      title: 'Design API contract',
      listId: 'l1',
      position: 0,
      labels: [{ name: 'Backend', color: '#3b82f6' }],
      assigneeIds: ['u1'],
      commentCount: 2,
      attachmentCount: 0,
    },
    {
      id: 'c2',
      title: 'Write onboarding docs',
      listId: 'l1',
      position: 1,
      labels: [{ name: 'Docs', color: '#22c55e' }],
      assigneeIds: [],
      commentCount: 0,
      attachmentCount: 1,
    },
  ],
  l2: [
    {
      id: 'c3',
      title: 'Set up CI pipeline',
      listId: 'l2',
      position: 0,
      labels: [{ name: 'DevOps', color: '#f97316' }],
      assigneeIds: ['u1', 'u2'],
      commentCount: 5,
      attachmentCount: 2,
      dueDate: '2026-06-22',
      startDate: '2026-06-15',
    },
  ],
  l3: [
    {
      id: 'c4',
      title: 'User auth flow',
      listId: 'l3',
      position: 0,
      labels: [
        { name: 'Backend', color: '#3b82f6' },
        { name: 'Security', color: '#ef4444' },
      ],
      assigneeIds: ['u2'],
      commentCount: 3,
      attachmentCount: 0,
    },
  ],
  l4: [
    {
      id: 'c5',
      title: 'Project setup',
      listId: 'l4',
      position: 0,
      labels: [],
      assigneeIds: [],
      commentCount: 1,
      attachmentCount: 0,
    },
  ],
}

export const useBoardStore = create<BoardState & BoardActions>()((set, _get) => ({
  boards: MOCK_BOARDS,
  currentBoardId: null,
  lists: MOCK_LISTS,
  cards: MOCK_CARDS,

  setCurrentBoard: (id) => set({ currentBoardId: id }),

  createBoard: (name, description) => {
    const board: Board = {
      id: `b${Date.now()}`,
      name,
      description,
      visibility: 'private',
      coverColor: ['#3b82f6', '#22c55e', '#ef4444', '#a855f7', '#f97316'][Math.floor(Math.random() * 5)],
      archived: false,
      createdAt: new Date().toISOString(),
      memberCount: 1,
    }
    set((s) => ({ boards: [board, ...s.boards] }))
    return board
  },

  archiveBoard: (id) =>
    set((s) => ({
      boards: s.boards.map((b) => (b.id === id ? { ...b, archived: true, archivedAt: new Date().toISOString() } : b)),
    })),

  restoreBoard: (id) =>
    set((s) => ({
      boards: s.boards.map((b) => (b.id === id ? { ...b, archived: false, archivedAt: undefined } : b)),
    })),

  handleSseEvent: (event) => {
    switch (event.type) {
      case 'board_updated':
      case 'member_joined':
        break
    }
  },
}))
