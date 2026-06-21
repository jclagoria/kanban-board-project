'use client'

import { LogOut, Settings, Shield } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAuthStore } from '@/stores/authStore'
import { LogoutDialog } from './LogoutDialog'

export function UserMenu() {
  const user = useAuthStore((s) => s.user)
  const [open, setOpen] = useState(false)
  const [logoutOpen, setLogoutOpen] = useState(false)
  const router = useRouter()

  if (!user) return null

  return (
    <>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-lg p-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-haspopup="true"
          aria-expanded={open}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <span className="hidden sm:inline">{user.name}</span>
        </button>

        {open && (
          <>
            <button type="button" className="fixed inset-0 z-40 cursor-default" aria-label="Close menu" onClick={() => setOpen(false)} onKeyDown={(e) => e.key === 'Escape' && setOpen(false)} tabIndex={-1} />
            <div
              className="absolute right-0 top-full mt-1 z-50 w-56 rounded-lg border border-border bg-background p-1 shadow-lg"
              role="menu"
            >
              <div className="px-2 py-1.5 text-xs text-muted-foreground border-b border-border mb-1">{user.email}</div>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  setOpen(false)
                  router.push('/settings')
                }}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                <Settings className="size-4" />
                Settings
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  setOpen(false)
                  router.push('/settings/security')
                }}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                <Shield className="size-4" />
                Security
              </button>
              <div className="border-t border-border mt-1 pt-1">
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setOpen(false)
                    setLogoutOpen(true)
                  }}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-destructive hover:bg-destructive/10"
                >
                  <LogOut className="size-4" />
                  Log out
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <LogoutDialog open={logoutOpen} onOpenChange={setLogoutOpen} />
    </>
  )
}
