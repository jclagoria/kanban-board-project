'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Mail, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { forgotPasswordSchema, type ForgotPasswordInput } from '../schemas/passwordRecoverySchema'
import { usePasswordRecovery } from '../hooks/usePasswordRecovery'

interface ForgotPasswordFormProps {
  onBack: () => void
}

export function ForgotPasswordForm({ onBack }: ForgotPasswordFormProps) {
  const { requestReset } = usePasswordRecovery()
  const form = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = (data: ForgotPasswordInput) => {
    requestReset.mutate(data.email)
  }

  if (requestReset.isSuccess) {
    const email = form.getValues('email')
    return (
      <div className="space-y-4">
        <div className="flex flex-col items-center gap-1">
          <div className="text-4xl mb-2">✅</div>
          <h2 className="text-lg font-semibold text-foreground text-center">Check your email</h2>
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            If an account exists for <strong>{email}</strong>, you&apos;ll receive a password reset link shortly.
          </p>
          <p className="text-sm text-muted-foreground text-center">
            Didn&apos;t receive it? Check your spam folder.
          </p>
        </div>

        <Button type="button" variant="outline" className="w-full" onClick={() => requestReset.reset()}>
          Resend email
        </Button>
        <p className="text-center text-xs text-muted-foreground">0 / 3 requests used this hour</p>

        <div className="text-center">
          <button
            type="button"
            onClick={onBack}
            className="text-sm text-muted-foreground hover:text-foreground underline-offset-2 hover:underline"
          >
            ← Back to login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-foreground">Reset your password</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Enter your email address and we&apos;ll send you a link to reset your password.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="forgot-email" className="block text-sm font-medium text-foreground mb-1.5">
            Email address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              id="forgot-email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              placeholder="jane@company.com"
              {...form.register('email')}
            />
          </div>
          {form.formState.errors.email && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {form.formState.errors.email.message}
            </p>
          )}
          {requestReset.isError && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {requestReset.error instanceof Error
                ? requestReset.error.message
                : 'An error occurred. Try again.'}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={requestReset.isPending}>
          {requestReset.isPending && <Loader2 className="size-4 animate-spin" />}
          {requestReset.isPending ? 'Sending...' : 'Send reset link'}
        </Button>

        <div className="text-center">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground underline-offset-2 hover:underline"
          >
            <ArrowLeft className="size-3" />
            Back to login
          </button>
        </div>
      </form>
    </div>
  )
}
