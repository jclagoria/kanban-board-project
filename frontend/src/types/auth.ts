import type { User } from '@/lib/types/domain'

export interface RegisterRequest {
  email: string
  displayName: string
  password: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface Login2faRequest extends LoginRequest {
  code: string
}

export interface ResetPasswordRequest {
  token: string
  newPassword: string
}

export interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
}

export interface RawUser {
  id: string
  email: string
  displayName: string
  plan: 'free' | 'paid'
  emailVerified: boolean
}

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: RawUser
}

export const mapRawUserToUser = (raw: RawUser): User => ({
  id: raw.id,
  name: raw.displayName,
  email: raw.email,
  plan: raw.plan,
  role: 'member',
})

export type AuthView =
  | 'login'
  | 'register'
  | 'two-factor'
  | 'forgot-password'
  | 'reset-password'
