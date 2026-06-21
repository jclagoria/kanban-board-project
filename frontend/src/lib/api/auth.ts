import { api } from './client'
import type {
  RegisterRequest,
  LoginRequest,
  Login2faRequest,
  ResetPasswordRequest,
  ChangePasswordRequest,
  AuthResponse,
} from '@/types/auth'

export const authApi = {
  register: (data: RegisterRequest) =>
    api.post<AuthResponse>('/auth/register', data),

  login: (data: LoginRequest) =>
    api.post<AuthResponse | { code: '2FA_REQUIRED'; userId: string }>('/auth/login', data),

  loginWith2fa: (data: Login2faRequest) =>
    api.post<AuthResponse>('/auth/login/2fa', data),

  refresh: (refreshToken: string) =>
    api.post<AuthResponse>('/auth/refresh', { refreshToken }),

  logout: (refreshToken: string) =>
    api.post<void>('/auth/logout', { refreshToken }),

  logoutAll: () =>
    api.post<void>('/auth/logout-all'),

  forgotPassword: (email: string) =>
    api.post<void>('/auth/forgot-password', { email }),

  resetPassword: (data: ResetPasswordRequest) =>
    api.post<void>('/auth/reset-password', data),

  changePassword: (data: ChangePasswordRequest) =>
    api.put<void>('/auth/change-password', data),
}
