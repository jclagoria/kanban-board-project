import type { Card, BoardList, Board } from '@/lib/types/domain'

export type SseEvent =
  | { type: 'card_moved'; cardId: string; fromListId: string; toListId: string; position: number; userId: string }
  | { type: 'card_updated'; cardId: string; changes: Partial<Card>; userId: string }
  | { type: 'card_created'; card: Card; listId: string; userId: string }
  | { type: 'card_deleted'; cardId: string; listId: string; userId: string }
  | { type: 'list_reordered'; listId: string; position: number; userId: string }
  | { type: 'list_created'; list: BoardList; userId: string }
  | { type: 'board_updated'; changes: Partial<Board>; userId: string }
  | { type: 'member_joined'; userId: string; boardId: string }
  | { type: 'presence'; userId: string; cursor: { x: number; y: number }; boardId: string }
  | { type: 'notification'; notification: { id: string; message: string; type: string } }
  | { type: 'heartbeat'; timestamp: string }
