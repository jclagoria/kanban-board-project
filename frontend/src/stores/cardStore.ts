'use client'

import { create } from 'zustand'
import type { SseEvent } from '@/lib/sse/types'
import type { Card } from '@/lib/types/domain'

type CardState = {
  cards: Record<string, Card[]>
}

type CardActions = {
  handleSseEvent: (
    event: Extract<SseEvent, { type: 'card_moved' | 'card_updated' | 'card_created' | 'card_deleted' }>,
  ) => void
}

export const useCardStore = create<CardState & CardActions>()((_set) => ({
  cards: {},

  handleSseEvent: (event) => {
    switch (event.type) {
      case 'card_moved':
      case 'card_updated':
      case 'card_created':
      case 'card_deleted':
        break
    }
  },
}))
