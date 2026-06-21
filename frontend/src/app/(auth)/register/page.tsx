'use client'

import { RegisterForm } from '@/features/auth/components/RegisterForm'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()

  return (
    <div>
      <div className="mb-6 text-center">
        <h2 className="text-lg font-semibold text-foreground">Crear cuenta</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          ¿Ya tienes cuenta?{' '}
          <button
            type="button"
            onClick={() => router.push('/login')}
            className="text-primary underline-offset-2 hover:underline"
          >
            Inicia sesión
          </button>
        </p>
      </div>
      <RegisterForm />
    </div>
  )
}
