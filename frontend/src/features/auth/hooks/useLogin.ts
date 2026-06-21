'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/authStore'
import type { LoginInput } from '../schemas/loginSchema'

export function useLogin() {
  const login = useAuthStore((s) => s.login)
  const router = useRouter()

  return useMutation({
    mutationFn: async (data: LoginInput) => {
      await login(data.email, data.password)
    },
    onSuccess: () => {
      router.push('/dashboard')
    },
  })
}


