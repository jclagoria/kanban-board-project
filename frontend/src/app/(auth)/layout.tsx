import type { Metadata } from 'next'
import { GuestGuard } from '@/components/guards/GuestGuard'
import { AuthShell } from '@/components/layout/AuthShell'

export const metadata: Metadata = {
  title: {
    template: '%s | KanbanFlow',
    default: 'KanbanFlow',
  },
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <GuestGuard>
      <AuthShell>{children}</AuthShell>
    </GuestGuard>
  )
}
