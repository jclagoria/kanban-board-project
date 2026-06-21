'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SessionExpiredCardProps {
  message?: string
}

export function SessionExpiredCard({ message }: SessionExpiredCardProps) {
  const router = useRouter()

  return (
    <div role="alert" className="flex flex-col items-center gap-4 p-6 text-center">
      <div className="rounded-full bg-destructive/10 p-3">
        <LogOut className="size-6 text-destructive" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground">
          Sesión expirada
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {message || 'Tu sesión ha expirado. Inicia sesión nuevamente para continuar.'}
        </p>
      </div>
      <Button onClick={() => router.push('/login')}>
        Iniciar sesión
      </Button>
    </div>
  )
}
