'use client'

import type { ReactNode } from 'react'
import { AppSidebar } from './AppSidebar'
import { BoardHeader } from './BoardHeader'

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-bg">
      <AppSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <BoardHeader />
        <div className="flex-1 overflow-auto relative">
          {children}
        </div>
      </div>
    </div>
  )
}
