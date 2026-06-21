'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { authApi } from '@/lib/api/auth'
import { useAuthStore } from '@/stores/authStore'

export function usePasswordRecovery() {
  const requestReset = useMutation({
    mutationFn: (email: string) => authApi.forgotPassword(email),
  })

  const executeReset = useMutation({
    mutationFn: (data: { token: string; newPassword: string }) => authApi.resetPassword(data),
    onSuccess: () => {
      useAuthStore.getState().logout()
    },
  })

  return { requestReset, executeReset }
}

export function useChangePassword() {
  const router = useRouter()
  const logout = useAuthStore((s) => s.logout)

  const changePassword = useMutation({
    mutationFn: (data: { currentPassword: string; newPassword: string }) => authApi.changePassword(data),
    onSuccess: async () => {
      await logout()
      router.push('/login')
    },
  })

  return { changePassword }
}
