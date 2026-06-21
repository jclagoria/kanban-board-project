'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { authApi } from '@/lib/api/auth'
import { useAuthStore } from '@/stores/authStore'

export function useLogout() {
  const router = useRouter()
  const logout = useAuthStore((s) => s.logout)

  const singleLogout = useMutation({
    mutationFn: async () => {
      await logout()
    },
    onSuccess: () => {
      router.push('/login')
    },
  })

  const globalLogout = useMutation({
    mutationFn: async () => {
      await authApi.logoutAll()
      useAuthStore.getState().logout()
    },
    onSuccess: () => {
      router.push('/login')
    },
  })

  return { singleLogout, globalLogout }
}
