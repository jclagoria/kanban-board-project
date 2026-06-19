'use client'

import { create } from 'zustand'
import type { Toast } from '@/lib/types/domain'

type UiState = {
  toasts: Toast[]
  sidebarOpen: boolean
}

type UiActions = {
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
}

let toastCounter = 0

export const useUiStore = create<UiState & UiActions>()(
  (set) => ({
    toasts: [],
    sidebarOpen: true,

    addToast: (toast) => {
      const id = `toast-${++toastCounter}`
      set(s => ({ toasts: [...s.toasts, { ...toast, id }] }))
      setTimeout(() => {
        set(s => ({ toasts: s.toasts.filter(t => t.id !== id) }))
      }, 5000)
    },

    removeToast: (id) => set(s => ({
      toasts: s.toasts.filter(t => t.id !== id),
    })),

    toggleSidebar: () => set(s => ({ sidebarOpen: !s.sidebarOpen })),
    setSidebarOpen: (open) => set({ sidebarOpen: open }),
  }),
)
