'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/authStore'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore(s => s.isAuthenticated)
  const checkAuth = useAuthStore(s => s.checkAuth)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    if (!isAuthenticated) {
      router.replace('/login')
    }
  }, [isAuthenticated, checkAuth, router])

  if (!isAuthenticated) return null
  return <>{children}</>
}
