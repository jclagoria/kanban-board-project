'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { changePasswordSchema, type ChangePasswordInput } from '../schemas/changePasswordSchema'
import { useChangePassword } from '../hooks/usePasswordRecovery'
import { ApiException, AuthException } from '@/types/api'

export function ChangePasswordForm() {
  const { changePassword } = useChangePassword()
  const form = useForm<ChangePasswordInput>({
    resolver: zodResolver(changePasswordSchema),
  })

  const onSubmit = (data: ChangePasswordInput) => {
    changePassword.mutate(
      { currentPassword: data.currentPassword, newPassword: data.newPassword },
      { onSuccess: () => form.reset() }
    )
  }

  const apiError = changePassword.error

  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Cambiar contraseña
      </h2>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="current-password" className="block text-sm font-medium text-foreground mb-1.5">
            Contraseña actual
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              id="current-password"
              type="password"
              autoComplete="current-password"
              className="block w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              placeholder="••••••••••"
              {...form.register('currentPassword')}
            />
          </div>
          {form.formState.errors.currentPassword && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {form.formState.errors.currentPassword.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="new-password" className="block text-sm font-medium text-foreground mb-1.5">
            Nueva contraseña
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              id="new-password"
              type="password"
              autoComplete="new-password"
              className="block w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              placeholder="••••••••••"
              {...form.register('newPassword')}
            />
          </div>
          {form.formState.errors.newPassword && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {form.formState.errors.newPassword.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="confirm-new-password" className="block text-sm font-medium text-foreground mb-1.5">
            Confirmar nueva contraseña
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              id="confirm-new-password"
              type="password"
              autoComplete="new-password"
              className="block w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              placeholder="••••••••••"
              {...form.register('confirmNewPassword')}
            />
          </div>
          {form.formState.errors.confirmNewPassword && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {form.formState.errors.confirmNewPassword.message}
            </p>
          )}
        </div>

        {apiError && (
          <p className="text-sm text-destructive" role="alert">
            {apiError instanceof AuthException || apiError instanceof ApiException
              ? apiError.message
              : 'Error al cambiar la contraseña. Intenta nuevamente.'}
          </p>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={changePassword.isPending}
        >
          {changePassword.isPending && <Loader2 className="size-4 animate-spin" />}
          {changePassword.isPending ? 'Cambiando...' : 'Cambiar contraseña'}
        </Button>
      </form>
    </div>
  )
}
