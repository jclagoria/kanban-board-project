'use client'

import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '@/stores/authStore'

export function useTokenRefresh() {
  const refreshTokenAction = useAuthStore((s) => s.refreshTokenAction)

  return useMutation({
    mutationFn: async () => {
      await refreshTokenAction()
    },
  })
}
