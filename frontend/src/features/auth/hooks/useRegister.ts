'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/authStore'
import type { RegisterInput } from '../schemas/registerSchema'

export function useRegister() {
  const register = useAuthStore((s) => s.register)
  const router = useRouter()

  return useMutation({
    mutationFn: async (data: RegisterInput) => {
      await register(data.email, data.name, data.password)
    },
    onSuccess: () => {
      router.push('/dashboard')
    },
  })
}
