'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLogout } from '../hooks/useLogout'

interface LogoutDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const devices = [
  { icon: '🖥️', name: 'Windows Chrome' },
  { icon: '📱', name: 'iPhone Safari' },
  { icon: '💻', name: 'MacBook Firefox' },
]

export function LogoutDialog({ open, onOpenChange }: LogoutDialogProps) {
  const { singleLogout, globalLogout } = useLogout()
  const [showAllDevices, setShowAllDevices] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement
      dialogRef.current?.focus()
    } else {
      previousFocusRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        type="button"
        className="fixed inset-0 bg-black/50 cursor-default"
        aria-label="Close dialog"
        onClick={() => onOpenChange(false)}
        tabIndex={-1}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="logout-dialog-title"
        tabIndex={-1}
        className="relative z-50 w-full max-w-sm rounded-lg border border-border bg-background p-6 shadow-lg"
      >
        {/* Single logout */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="text-3xl">🚪</span>
          <h2 id="logout-dialog-title" className="text-lg font-semibold text-foreground text-center">
            Log out?
          </h2>
          <p className="text-sm text-muted-foreground text-center">
            Are you sure you want to log out?
          </p>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => singleLogout.mutate(undefined, { onSuccess: () => onOpenChange(false) })}
            disabled={singleLogout.isPending}
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-foreground bg-foreground text-background px-4 py-2.5 text-sm font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {singleLogout.isPending && <Loader2 className="size-4 animate-spin" />}
            {singleLogout.isPending ? 'Logging out...' : 'Log out'}
          </button>

          <button
            type="button"
            onClick={() => setShowAllDevices(!showAllDevices)}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-muted px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted/80"
          >
            Log out of all devices
          </button>
        </div>

        {showAllDevices && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">
              This will sign you out from all your devices including:
            </p>
            <ul className="space-y-2 mb-4">
              {devices.map((d) => (
                <li key={d.name} className="text-sm text-foreground flex items-center gap-2">
                  <span>{d.icon}</span>
                  <span>{d.name}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => globalLogout.mutate(undefined, { onSuccess: () => onOpenChange(false) })}
              disabled={globalLogout.isPending}
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-destructive bg-destructive text-destructive-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-90 disabled:opacity-50"
            >
              {globalLogout.isPending && <Loader2 className="size-4 animate-spin" />}
              {globalLogout.isPending ? 'Logging out all...' : 'Log out all'}
            </button>
          </div>
        )}

        <div className="mt-4 flex justify-center">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}
