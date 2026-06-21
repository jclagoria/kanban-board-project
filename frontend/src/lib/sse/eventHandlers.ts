import type { SseEvent } from './types'
import { useCardStore } from '@/stores/cardStore'
import { useListStore } from '@/stores/listStore'
import { useBoardStore } from '@/stores/boardStore'
import { usePresenceStore } from '@/stores/presenceStore'
import { useNotificationStore } from '@/stores/notificationStore'

export function handleSseEvent(event: SseEvent): void {
  switch (event.type) {
    case 'card_moved':
    case 'card_updated':
    case 'card_created':
    case 'card_deleted':
      useCardStore.getState().handleSseEvent(event)
      break
    case 'list_reordered':
    case 'list_created':
      useListStore.getState().handleSseEvent(event)
      break
    case 'board_updated':
      useBoardStore.getState().handleSseEvent(event)
      break
    case 'member_joined':
      useBoardStore.getState().handleSseEvent(event)
      break
    case 'presence':
      usePresenceStore.getState().updateCursor(event.userId, event.cursor)
      break
    case 'notification':
      useNotificationStore.getState().add(event.notification)
      break
    case 'heartbeat':
      break
  }
}
