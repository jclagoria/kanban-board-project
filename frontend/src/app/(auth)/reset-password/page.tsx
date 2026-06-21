'use client'

import { useSearchParams } from 'next/navigation'
import { ResetPasswordForm, ResetLinkExpired } from '@/features/auth/components/ResetPasswordForm'

export default function ResetPasswordPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  if (!token) {
    return <ResetLinkExpired />
  }

  return <ResetPasswordForm token={token} />
}
