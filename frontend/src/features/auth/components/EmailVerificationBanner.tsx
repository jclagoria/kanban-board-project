'use client'

import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { CheckCircle, AlertTriangle, Loader2, Mail } from 'lucide-react'
import { authApi } from '@/lib/api/auth'
import { cn } from '@/lib/utils'

interface EmailVerificationBannerProps {
  verified: boolean
  email: string
}

export function EmailVerificationBanner({ verified, email }: EmailVerificationBannerProps) {
  const [rateLimited, setRateLimited] = useState(false)

  const resendMutation = useMutation({
    mutationFn: () => authApi.forgotPassword(email),
    onSuccess: () => {
      setRateLimited(true)
      setTimeout(() => setRateLimited(false), 60000)
    },
  })

  if (verified) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700">
        <CheckCircle className="size-4 shrink-0" />
        <span>Correo electrónico verificado</span>
      </div>
    )
  }

  return (
    <div className={cn(
      'flex items-center gap-2 rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm text-yellow-700',
      resendMutation.isPending && 'opacity-70'
    )}>
      {resendMutation.isPending ? (
        <Loader2 className="size-4 shrink-0 animate-spin" />
      ) : (
        <AlertTriangle className="size-4 shrink-0" />
      )}
      <span className="flex-1">
        Correo electrónico no verificado
      </span>
      <button
        type="button"
        disabled={resendMutation.isPending || rateLimited}
        onClick={() => resendMutation.mutate()}
        className="ml-2 flex items-center gap-1 text-xs font-medium underline-offset-2 hover:underline disabled:opacity-50"
      >
        <Mail className="size-3" />
        {rateLimited ? 'Espera 1 minuto' : 'Reenviar verificación'}
      </button>
    </div>
  )
}
