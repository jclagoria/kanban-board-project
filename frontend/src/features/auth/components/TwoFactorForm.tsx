'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, ShieldAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLoginWith2fa } from '../hooks/useLogin'
import { AuthException } from '@/types/api'

const twoFactorSchema = z.object({
  code: z
    .string()
    .length(6, 'Code must be 6 digits')
    .regex(/^\d{6}$/, 'Code must be 6 digits'),
})

type TwoFactorInput = z.infer<typeof twoFactorSchema>

interface TwoFactorFormProps {
  email: string
  password: string
}

export function TwoFactorForm({ email, password }: TwoFactorFormProps) {
  const loginWith2fa = useLoginWith2fa()
  const form = useForm<TwoFactorInput>({
    resolver: zodResolver(twoFactorSchema),
  })

  const onSubmit = (data: TwoFactorInput) => {
    loginWith2fa.mutate({ email, password, code: data.code })
  }

  const error = loginWith2fa.error

  return (
    <div>
      <div className="mb-6 flex flex-col items-center gap-3 text-center">
        <div className="rounded-full bg-primary/10 p-3">
          <ShieldAlert className="size-6 text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Autenticación de dos factores
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Ingresa el código de 6 dígitos desde tu aplicación autenticadora.
          </p>
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="2fa-code" className="block text-sm font-medium text-foreground mb-1.5">
            Código de verificación
          </label>
          <input
            id="2fa-code"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            className="block w-full rounded-lg border border-border bg-background px-3 py-2 text-center text-2xl font-mono tracking-widest outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            placeholder="000000"
            {...form.register('code')}
          />
          {form.formState.errors.code && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {form.formState.errors.code.message}
            </p>
          )}
          {error && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {error instanceof AuthException ? error.message : 'Código inválido. Intenta nuevamente.'}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loginWith2fa.isPending}
        >
          {loginWith2fa.isPending && <Loader2 className="size-4 animate-spin" />}
          {loginWith2fa.isPending ? 'Verificando...' : 'Verificar'}
        </Button>
      </form>
    </div>
  )
}
