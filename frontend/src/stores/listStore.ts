'use client'

import { create } from 'zustand'
import type { SseEvent } from '@/lib/sse/types'
import type { BoardList } from '@/lib/types/domain'

type ListState = {
  lists: BoardList[]
}

type ListActions = {
  handleSseEvent: (event: Extract<SseEvent, { type: 'list_reordered' | 'list_created' }>) => void
}

export const useListStore = create<ListState & ListActions>()((_set) => ({
  lists: [],

  handleSseEvent: (event) => {
    switch (event.type) {
      case 'list_reordered':
      case 'list_created':
        break
    }
  },
}))
