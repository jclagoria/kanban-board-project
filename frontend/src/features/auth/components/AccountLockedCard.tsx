'use client'

import { useEffect, useState } from 'react'
import { formatDistanceStrict } from 'date-fns'
import { es } from 'date-fns/locale'

interface AccountLockedCardProps {
  lockedUntil: Date
  onForgotPassword?: () => void
}

export function AccountLockedCard({ lockedUntil, onForgotPassword }: AccountLockedCardProps) {
  const [remaining, setRemaining] = useState<string>('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      if (now >= lockedUntil) {
        setRemaining('')
        return
      }
      setRemaining(formatDistanceStrict(lockedUntil, now, { locale: es }))
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [lockedUntil])

  if (!remaining) return null

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <div className="size-12 rounded-full border-2 border-destructive flex items-center justify-center text-2xl mb-2">
          🔒
        </div>
        <h2 className="text-lg font-semibold text-foreground text-center">
          Account temporarily locked for security
        </h2>
        <p className="text-sm text-muted-foreground text-center leading-relaxed">
          Too many failed attempts.<br />
          Try again in 15 minutes.
        </p>
      </div>

      <div className="border border-border rounded-lg bg-muted/30 px-4 py-3 text-center" role="timer">
        <span className="text-lg font-bold tabular-nums text-foreground">⏱ {remaining} remaining</span>
      </div>

      {onForgotPassword && (
        <div className="text-center text-sm text-muted-foreground">
          Forgot your password?{' '}
          <button
            type="button"
            onClick={onForgotPassword}
            className="font-semibold underline-offset-2 hover:underline text-foreground"
          >
            Reset it
          </button>
        </div>
      )}
    </div>
  )
}
