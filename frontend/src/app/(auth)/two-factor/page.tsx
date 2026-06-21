'use client'

import { useSearchParams } from 'next/navigation'
import { TwoFactorForm } from '@/features/auth/components/TwoFactorForm'

export default function TwoFactorPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''
  const password = searchParams.get('password') || ''

  if (!email || !password) {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Autenticación de dos factores</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            No se encontraron credenciales. Inicia sesión nuevamente.
          </p>
        </div>
      </div>
    )
  }

  return <TwoFactorForm email={email} password={password} />
}
