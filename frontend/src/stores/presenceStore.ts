'use client'

import { create } from 'zustand'

type Cursor = { x: number; y: number }

type PresenceState = {
  cursors: Record<string, Cursor>
  activeUsers: string[]
}

type PresenceActions = {
  updateCursor: (userId: string, cursor: Cursor) => void
}

export const usePresenceStore = create<PresenceState & PresenceActions>()(
  (set) => ({
    cursors: {},
    activeUsers: [],

    updateCursor: (userId, cursor) =>
      set(s => ({ cursors: { ...s.cursors, [userId]: cursor } })),
  }),
)
