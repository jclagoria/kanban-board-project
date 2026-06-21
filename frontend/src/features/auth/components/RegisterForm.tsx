'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Loader2, Lock, Mail, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { AuthException, ApiException } from '@/types/api'
import { useRegister } from '../hooks/useRegister'
import { type RegisterInput, registerSchema } from '../schemas/registerSchema'

interface RegisterFormProps {
  onSuccess?: () => void
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const registerMutation = useRegister()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  })

  const onSubmit = async (data: RegisterInput) => {
    try {
      await registerMutation.mutateAsync(data)
      onSuccess?.()
    } catch {
      // handled via mutation state
    }
  }

  const error = registerMutation.error
  const errorMessage =
    error instanceof AuthException || error instanceof ApiException ? error.message : null
  const isError = !!errorMessage

  return (
    <div>
      <h1 className="text-xl font-semibold text-center mb-6">Create your account</h1>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="reg-name" className="block text-sm font-medium text-foreground mb-1.5">
            Full name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              id="reg-name"
              type="text"
              autoComplete="name"
              className="block w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              placeholder="e.g., Jane Smith"
              {...form.register('name')}
            />
          </div>
          {form.formState.errors.name && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="reg-email" className="block text-sm font-medium text-foreground mb-1.5">
            Email address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              id="reg-email"
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
          {errorMessage && (
            <div className="mt-1 text-sm text-destructive" role="alert">
              {errorMessage}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="reg-password" className="block text-sm font-medium text-foreground mb-1.5">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              id="reg-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              data-error={form.formState.errors.password ? 'true' : undefined}
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
          <p className="text-xs text-muted-foreground mt-0.5">ⓘ At least 10 characters</p>
          {form.formState.errors.password && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="reg-confirm" className="block text-sm font-medium text-foreground mb-1.5">
            Confirm password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              id="reg-confirm"
              type="password"
              autoComplete="new-password"
              data-error={form.formState.errors.confirmPassword ? 'true' : undefined}
              className="block w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-[error=true]:border-destructive data-[error=true]:bg-destructive/5"
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

        <div className="flex items-start gap-2">
          <input
            id="reg-terms"
            type="checkbox"
            className="mt-0.5 size-4 rounded border-border"
            defaultChecked
          />
          <label htmlFor="reg-terms" className="text-xs text-muted-foreground">
            I agree to the Terms of Service and Privacy Policy
          </label>
        </div>

        <Button type="submit" className="w-full" disabled={registerMutation.isPending}>
          {registerMutation.isPending && <Loader2 className="size-4 animate-spin" />}
          {registerMutation.isPending ? 'Creating account...' : 'Create account'}
        </Button>

        <div className="flex items-center gap-3 text-muted-foreground text-xs">
          <div className="flex-1 h-px bg-border" />
          <span>or continue with</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex gap-2">
          {['Google', 'GitHub', 'Apple'].map((provider) => (
            <div
              key={provider}
              className="flex-1 border border-border rounded-lg py-2.5 text-center text-xs text-muted-foreground cursor-not-allowed opacity-60"
            >
              {provider}
              <div className="text-[10px]">coming soon</div>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground border-t border-border pt-4 mt-4">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => router.push('/login')}
            className="font-semibold underline-offset-2 hover:underline text-foreground"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  )
}
