'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Lock } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { resetPasswordSchema, type ResetPasswordInput } from '../schemas/passwordRecoverySchema'
import { usePasswordRecovery } from '../hooks/usePasswordRecovery'
import { ApiException } from '@/types/api'

interface ResetPasswordFormProps {
  token: string
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const { executeReset } = usePasswordRecovery()
  const router = useRouter()
  const form = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
  })

  const onSubmit = (data: ResetPasswordInput) => {
    executeReset.mutate({ token, newPassword: data.password })
  }

  if (executeReset.isSuccess) {
    return (
      <div className="space-y-4">
        <div className="flex flex-col items-center gap-1">
          <div className="text-4xl mb-2">✅</div>
          <h2 className="text-lg font-semibold text-foreground text-center">Password updated successfully!</h2>
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            Your password has been changed.<br />
            All your sessions have been closed.
          </p>
        </div>
        <Button className="w-full" onClick={() => router.push('/login')}>
          Log in with new password
        </Button>
      </div>
    )
  }

  const apiError =
    executeReset.error instanceof ApiException ? executeReset.error.message : null

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-foreground">Set new password</h2>
        <p className="mt-1 text-sm text-muted-foreground">At least 10 characters.</p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="reset-password" className="block text-sm font-medium text-foreground mb-1.5">
            New password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              id="reset-password"
              type="password"
              autoComplete="new-password"
              className="block w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              placeholder="••••••••••"
              {...form.register('password')}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">ⓘ At least 10 characters</p>
          {form.formState.errors.password && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="reset-confirm" className="block text-sm font-medium text-foreground mb-1.5">
            Confirm new password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              id="reset-confirm"
              type="password"
              autoComplete="new-password"
              className="block w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              placeholder="••••••••••"
              {...form.register('confirmPassword')}
            />
          </div>
          {form.formState.errors.confirmPassword && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {form.formState.errors.confirmPassword.message}
            </p>
          )}
        </div>

        {apiError && (
          <p className="text-sm text-destructive" role="alert">
            {apiError}
          </p>
        )}

        <Button type="submit" className="w-full" disabled={executeReset.isPending}>
          {executeReset.isPending && <Loader2 className="size-4 animate-spin" />}
          {executeReset.isPending ? 'Resetting...' : 'Reset password'}
        </Button>
      </form>
    </div>
  )
}

export function ResetLinkExpired() {
  const router = useRouter()

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <div className="text-4xl mb-2">🔗</div>
        <h2 className="text-lg font-semibold text-foreground text-center">Reset link expired</h2>
        <p className="text-sm text-muted-foreground text-center leading-relaxed">
          This password reset link has expired (valid for 15 minutes only).
        </p>
      </div>
      <Button className="w-full" onClick={() => router.push('/forgot-password')}>
        Request a new reset link
      </Button>
    </div>
  )
}
