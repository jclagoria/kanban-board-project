'use client'

import { create } from 'zustand'

type Notification = {
  id: string
  message: string
  type: string
}

type NotificationState = {
  notifications: Notification[]
  unreadCount: number
}

type NotificationActions = {
  add: (notification: Notification) => void
  markRead: (id: string) => void
}

export const useNotificationStore = create<NotificationState & NotificationActions>()(
  (set) => ({
    notifications: [],
    unreadCount: 0,

    add: (notification) =>
      set(s => ({
        notifications: [notification, ...s.notifications],
        unreadCount: s.unreadCount + 1,
      })),

    markRead: (id) =>
      set(s => ({
        notifications: s.notifications.map(n => n.id === id ? { ...n, read: true } : n),
        unreadCount: Math.max(0, s.unreadCount - 1),
      })),
  }),
)
