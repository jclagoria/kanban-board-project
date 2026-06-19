'use client'

import { useViewStore } from '@/stores/viewStore'
import type { ViewType } from '@/lib/types/domain'
import { LayoutDashboard, Timeline, Calendar, Table } from 'lucide-react'

const VIEWS: { id: ViewType; label: string; icon: React.ReactNode }[] = [
  { id: 'kanban', label: 'Kanban', icon: <LayoutDashboard size={13} /> },
  { id: 'timeline', label: 'Timeline', icon: <Timeline size={13} /> },
  { id: 'calendar', label: 'Calendar', icon: <Calendar size={13} /> },
  { id: 'table', label: 'Table', icon: <Table size={13} /> },
]

export function ViewSelector() {
  const activeView = useViewStore(s => s.activeView)
  const setView = useViewStore(s => s.setView)

  return (
    <div className="flex items-center bg-muted rounded-lg p-0.5 gap-0.5">
      {VIEWS.map(v => {
        const isActive = activeView === v.id
        return (
          <button
            key={v.id}
            onClick={() => setView(v.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[13px] font-medium transition-all duration-fast ${
              isActive
                ? 'bg-surface text-accent-500 shadow-elevated'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {v.icon}
            {v.label}
          </button>
        )
      })}
    </div>
  )
}
