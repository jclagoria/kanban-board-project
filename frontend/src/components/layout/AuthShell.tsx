'use client'

import type { ReactNode } from 'react'

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f7f4] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 50%, #e85d3a 0%, transparent 50%), radial-gradient(circle at 75% 50%, #4a6d89 0%, transparent 50%)',
        }}
      />
      <div className="w-full max-w-[420px] px-6 relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#1b2a3e] flex items-center justify-center text-white font-bold text-sm">
              K
            </div>
            <span className="text-lg font-bold tracking-tight text-[#0f172a]">KanbanFlow</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
