'use client'

import { useRouter } from 'next/navigation'
import { ForgotPasswordForm } from '@/features/auth/components/ForgotPasswordForm'

export default function ForgotPasswordPage() {
  const router = useRouter()

  return <ForgotPasswordForm onBack={() => router.push('/login')} />
}
