'use client'

import { useUiStore } from '@/stores/uiStore'
import { useBoardStore } from '@/stores/boardStore'
import { useNavigationStore } from '@/stores/navigationStore'
import { Plus, Cog, HelpCircle } from 'lucide-react'

export function AppSidebar() {
  const sidebarOpen = useUiStore(s => s.sidebarOpen)
  const boards = useBoardStore(s => s.boards)
  const currentBoardId = useBoardStore(s => s.currentBoardId)
  const setCurrentBoard = useBoardStore(s => s.setCurrentBoard)
  const trigger = useNavigationStore(s => s.trigger)
  const goTo = useNavigationStore(s => s.goTo)

  if (!sidebarOpen) return null

  const activeBoards = boards.filter(b => !b.archived)
  const archivedBoards = boards.filter(b => b.archived)

  return (
    <div className="w-sidebar bg-sidebar text-sidebar-foreground flex flex-col border-r border-sidebar-border overflow-y-auto text-[13px] shrink-0">
      <div className="px-4 pt-5 pb-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2.5 mb-4 px-1">
          <div className="w-7 h-7 rounded-lg bg-accent-500 flex items-center justify-center text-white font-bold text-xs">
            K
          </div>
          <span className="text-sidebar-accent-foreground font-bold text-[15px] tracking-tight">
            KanbanFlow
          </span>
        </div>
        <button
          onClick={() => trigger('Create Board →')}
          className="w-full flex items-center gap-2 px-3 py-2 bg-accent-500 text-white rounded-lg font-medium text-[13px] hover:bg-accent-600 transition-colors duration-fast"
        >
          <Plus size={16} />
          Create Board
        </button>
      </div>

      <div className="py-3">
        <div className="px-4 py-1.5 text-sidebar-foreground/50 font-semibold text-[11px] uppercase tracking-[1px]">
          Boards
        </div>
        {activeBoards.map(board => {
          const isActive = board.id === currentBoardId
          return (
            <div
              key={board.id}
              onClick={() => { setCurrentBoard(board.id); goTo('board-view') }}
              className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all duration-fast ${
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground border-l-[3px] border-accent-500'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50 border-l-[3px] border-transparent hover:text-sidebar-accent-foreground'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: board.coverColor }}
              />
              <span className="truncate">{board.name}</span>
            </div>
          )
        })}
      </div>

      {archivedBoards.length > 0 && (
        <div className="py-3 border-t border-sidebar-border">
          <div className="px-4 py-1.5 text-sidebar-foreground/50 font-semibold text-[11px] uppercase tracking-[1px]">
            Archived
          </div>
          {archivedBoards.map(board => (
            <div
              key={board.id}
              onClick={() => goTo('archived-tab')}
              className="flex items-center gap-2.5 px-4 py-2 cursor-pointer text-sidebar-foreground/50 hover:text-sidebar-foreground/80 transition-colors duration-fast"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: board.coverColor }}
              />
              <span className="truncate">{board.name}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto px-3 py-3 border-t border-sidebar-border space-y-1.5">
        <button
          onClick={() => trigger('→ Settings / Integrations')}
          className="w-full flex items-center gap-2 px-3 py-2 text-sidebar-foreground/60 hover:text-sidebar-accent-foreground border border-sidebar-border rounded-lg text-[13px] transition-colors duration-fast"
        >
          <Cog size={15} />
          Settings
        </button>
        <button
          onClick={() => trigger('→ Start onboarding tour')}
          className="w-full flex items-center gap-2 px-3 py-2 text-sidebar-foreground/60 hover:text-sidebar-accent-foreground border border-sidebar-border rounded-lg text-[13px] transition-colors duration-fast"
        >
          <HelpCircle size={15} />
          Help & Tour
        </button>
      </div>
    </div>
  )
}
