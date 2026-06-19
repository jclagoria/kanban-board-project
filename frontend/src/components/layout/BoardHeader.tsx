'use client'

import { useBoardStore } from '@/stores/boardStore'
import { useAuthStore } from '@/stores/authStore'
import { useNavigationStore } from '@/stores/navigationStore'
import { ViewSelector } from './ViewSelector'
import { Settings, Bell } from 'lucide-react'

export function BoardHeader() {
  const currentBoardId = useBoardStore(s => s.currentBoardId)
  const boards = useBoardStore(s => s.boards)
  const user = useAuthStore(s => s.user)
  const trigger = useNavigationStore(s => s.trigger)
  const board = boards.find(b => b.id === currentBoardId)

  return (
    <div className="h-header bg-surface border-b border-border flex items-center gap-3 px-5 text-[13px] shrink-0">
      <div
        className="w-3 h-3 rounded-sm shrink-0"
        style={{ background: board?.coverColor ?? '#d4d2cc' }}
      />
      <span className="font-bold text-[15px] text-text-primary tracking-tight">
        {board?.name ?? 'Select a board'}
      </span>

      {board && (
        <span className="text-[11px] font-medium text-text-muted border border-border-light rounded-md px-2 py-0.5">
          Private
        </span>
      )}

      <div className="w-px h-5 bg-border-light mx-1" />

      <ViewSelector />

      <div className="flex-1" />

      <button
        onClick={() => trigger('→ Settings / Integrations')}
        className="w-8 h-8 flex items-center justify-center border border-border rounded-lg bg-surface text-text-secondary hover:bg-muted transition-colors duration-fast"
        title="Board settings"
      >
        <Settings size={15} />
      </button>

      <button
        onClick={() => trigger('→ Notification panel')}
        className="relative w-8 h-8 flex items-center justify-center border border-border rounded-lg bg-surface text-text-secondary hover:bg-muted transition-colors duration-fast"
        title="Notifications"
      >
        <Bell size={15} />
        <span className="absolute -top-1.5 -right-1.5 bg-danger text-white rounded-full w-[17px] h-[17px] text-[10px] flex items-center justify-center font-bold">
          3
        </span>
      </button>

      <button
        onClick={() => trigger('→ User menu')}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-500 text-white font-bold text-[14px] hover:bg-accent-600 transition-colors duration-fast"
        title={user?.name ?? 'User menu'}
      >
        {user?.name?.charAt(0).toUpperCase() ?? 'U'}
      </button>
    </div>
  )
}
