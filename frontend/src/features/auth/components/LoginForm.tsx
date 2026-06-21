'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Loader2, Lock, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/authStore'
import { AuthException, RateLimitException } from '@/types/api'
import { useLogin } from '../hooks/useLogin'
import { type LoginInput, loginSchema } from '../schemas/loginSchema'
import { AccountLockedCard } from './AccountLockedCard'

interface LoginFormProps {
  onSuccess?: () => void
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const accountLockedUntil = useAuthStore((s) => s.accountLockedUntil)
  const loginAttempts = useAuthStore((s) => s.loginAttempts)
  const loginMutation = useLogin()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  if (accountLockedUntil && accountLockedUntil > new Date()) {
    return (
      <AccountLockedCard lockedUntil={accountLockedUntil} onForgotPassword={() => router.push('/forgot-password')} />
    )
  }

  const onSubmit = (data: LoginInput) => {
    loginMutation.mutate(data, { onSuccess })
  }

  const isError = !!loginMutation.error
  const error = loginMutation.error
  const errorMessage =
    error instanceof AuthException
      ? error.message
      : error instanceof RateLimitException
        ? 'Too many requests. Try again later.'
        : null

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-xl font-semibold text-center mb-6">Welcome back</h1>

      <div>
        <label htmlFor="login-email" className="block text-sm font-medium text-foreground mb-1.5">
          Email address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            data-error={isError ? 'true' : undefined}
            className="block w-full rounded-lg border border-border bg-background pl-9 pr-9 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-[error=true]:border-destructive data-[error=true]:bg-destructive/5"
            placeholder="jane@company.com"
            {...form.register('email')}
          />
          {isError && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-destructive font-bold" aria-hidden="true">
              ✗
            </span>
          )}
        </div>
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-destructive" role="alert">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="login-password" className="block text-sm font-medium text-foreground mb-1.5">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            id="login-password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            data-error={isError ? 'true' : undefined}
            className="block w-full rounded-lg border border-border bg-background pl-9 pr-9 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-[error=true]:border-destructive data-[error=true]:bg-destructive/5"
            placeholder="••••••••••"
            {...form.register('password')}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
        {form.formState.errors.password && (
          <p className="mt-1 text-sm text-destructive" role="alert">
            {form.formState.errors.password.message}
          </p>
        )}
        {errorMessage && (
          <div className="mt-1">
            <p className="text-sm text-destructive" role="alert">
              {errorMessage}
            </p>
            {loginAttempts > 0 && (
              <p className="text-xs font-semibold text-destructive mt-0.5">
                Attempts remaining: {3 - loginAttempts}
              </p>
            )}
          </div>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={loginMutation.isPending}>
        {loginMutation.isPending && <Loader2 className="size-4 animate-spin" />}
        {loginMutation.isPending ? 'Logging in...' : 'Log in'}
      </Button>

      <div className="text-center">
        <button
          type="button"
          onClick={() => router.push('/forgot-password')}
          className="text-sm text-muted-foreground hover:text-foreground underline-offset-2 hover:underline"
        >
          Forgot your password?
        </button>
      </div>

      <div className="text-center text-sm text-muted-foreground border-t border-border pt-4 mt-4">
        Don&apos;t have an account?{' '}
        <button
          type="button"
          onClick={() => router.push('/register')}
          className="font-semibold underline-offset-2 hover:underline text-foreground"
        >
          Sign up
        </button>
      </div>
    </form>
  )
}
