export type User = {
  id: string
  name: string
  email: string
  avatarUrl?: string
  role: 'admin' | 'member'
  plan: 'free' | 'paid'
}

export type Board = {
  id: string
  name: string
  description?: string
  visibility: 'private' | 'invite-only'
  coverColor: string
  archived: boolean
  archivedAt?: string
  createdAt: string
  memberCount: number
}

export type BoardList = {
  id: string
  name: string
  position: number
}

export type Card = {
  id: string
  title: string
  description?: string
  listId: string
  position: number
  labels: Label[]
  dueDate?: string
  startDate?: string
  assigneeIds: string[]
  commentCount: number
  attachmentCount: number
}

export type Label = {
  name: string
  color: string
}

export type ViewType = 'kanban' | 'timeline' | 'calendar' | 'table'

export type Toast = {
  id: string
  type: 'success' | 'error' | 'info'
  message: string
  action?: { label: string; onClick: () => void }
}
