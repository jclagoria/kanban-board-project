'use client'

import { create } from 'zustand'
import type { ViewType } from '@/lib/types/domain'

type ViewState = {
  activeView: ViewType
}

type ViewActions = {
  setView: (view: ViewType) => void
}

export const useViewStore = create<ViewState & ViewActions>()(
  (set) => ({
    activeView: 'kanban',

    setView: (view) => set({ activeView: view }),
  }),
)
