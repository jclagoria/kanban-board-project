'use client'

import { AuthGuard } from '@/components/guards/AuthGuard'
import { ChangePasswordForm } from '@/features/auth/components/ChangePasswordForm'

export default function SecurityPage() {
  return (
    <AuthGuard>
      <div className="mx-auto max-w-lg py-8 px-4">
        <h1 className="text-2xl font-bold text-foreground mb-1">Seguridad</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Administra tu contraseña y sesiones activas.
        </p>
        <ChangePasswordForm />
      </div>
    </AuthGuard>
  )
}
