'use client'

import { decodeJwt } from 'jose'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { authApi } from '@/lib/api/auth'
import type { User } from '@/lib/types/domain'
import { ApiException, AuthException, RateLimitException, TwoFactorRequiredError } from '@/types/api'
import { mapRawUserToUser, type RawUser } from '@/types/auth'

type AuthState = {
  user: User | null
  token: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  loginAttempts: number
  accountLockedUntil: Date | null
}

type AuthActions = {
  login: (email: string, password: string) => Promise<void>
  loginWith2fa: (email: string, password: string, code: string) => Promise<void>
  register: (email: string, name: string, password: string) => Promise<void>
  logout: () => Promise<void>
  refreshTokenAction: () => Promise<void>
  checkAuth: () => void
  setTokens: (token: string, refreshToken: string) => void
  incrementLoginAttempts: () => void
  resetLoginAttempts: () => void
}

const isTokenExpiringSoon = (token: string): boolean => {
  try {
    const { exp } = decodeJwt(token)
    return exp! * 1000 - Date.now() < 5 * 60 * 1000
  } catch {
    return true
  }
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      refreshToken: null,
      isAuthenticated: false,
      loginAttempts: 0,
      accountLockedUntil: null,

      login: async (email, password) => {
        try {
          const res = await authApi.login({ email, password })

          if ('code' in res && res.code === '2FA_REQUIRED') {
            throw new TwoFactorRequiredError(res.userId)
          }

          const data = res as { accessToken: string; refreshToken: string; user: RawUser }
          set({
            token: data.accessToken,
            refreshToken: data.refreshToken,
            user: mapRawUserToUser(data.user),
            isAuthenticated: true,
            loginAttempts: 0,
            accountLockedUntil: null,
          })
        } catch (error) {
          if (error instanceof TwoFactorRequiredError) throw error

          if (error instanceof RateLimitException) {
            const lockedUntil = new Date(Date.now() + error.retryAfter * 1000)
            set({ accountLockedUntil: lockedUntil })
            throw new AuthException('ACCOUNT_LOCKED', 'Demasiados intentos. Reintenta más tarde.')
          }

          if (error instanceof ApiException) {
            if (error.code === 'ACCOUNT_LOCKED') {
              set((s) => ({ loginAttempts: s.loginAttempts + 1 }))
              throw new AuthException('ACCOUNT_LOCKED', error.message)
            }
            get().incrementLoginAttempts()
            throw new AuthException('INVALID_CREDENTIALS', error.message || 'Email o contraseña incorrectos')
          }

          if (error instanceof AuthException) throw error

          throw new AuthException('INVALID_CREDENTIALS', 'Email o contraseña incorrectos')
        }
      },

      loginWith2fa: async (email, password, code) => {
        const data = await authApi.loginWith2fa({ email, password, code })
        set({
          token: data.accessToken,
          refreshToken: data.refreshToken,
          user: mapRawUserToUser(data.user),
          isAuthenticated: true,
          loginAttempts: 0,
          accountLockedUntil: null,
        })
      },

      register: async (email, name, password) => {
        const data = await authApi.register({ email, displayName: name, password })
        set({
          token: data.accessToken,
          refreshToken: data.refreshToken,
          user: mapRawUserToUser(data.user),
          isAuthenticated: true,
          loginAttempts: 0,
          accountLockedUntil: null,
        })
      },

      logout: async () => {
        const { refreshToken } = get()
        try {
          await authApi.logout(refreshToken || '')
        } catch {
          // Logout local incluso si falla el remoto
        }
        set({
          user: null,
          token: null,
          refreshToken: null,
          isAuthenticated: false,
          loginAttempts: 0,
          accountLockedUntil: null,
        })
      },

      refreshTokenAction: async () => {
        const { refreshToken } = get()
        if (!refreshToken) throw new AuthException('SESSION_EXPIRED', 'No hay token de refresco')

        try {
          const data = await authApi.refresh(refreshToken)
          set({
            token: data.accessToken,
            refreshToken: data.refreshToken,
          })
        } catch {
          get().logout()
          throw new AuthException('SESSION_EXPIRED', 'Sesión expirada. Inicia sesión nuevamente.')
        }
      },

      checkAuth: () => {
        const { token } = get()
        if (!token) return
        if (isTokenExpiringSoon(token)) {
          get()
            .refreshTokenAction()
            .catch(() => get().logout())
        }
      },

      setTokens: (token, refreshToken) => set({ token, refreshToken }),

      incrementLoginAttempts: () => set((s) => ({ loginAttempts: s.loginAttempts + 1 })),
      resetLoginAttempts: () => set({ loginAttempts: 0, accountLockedUntil: null }),
    }),
    {
      name: 'kanban-auth',
      partialize: (state) => ({
        token: state.token,
        refreshToken: state.refreshToken,
        user: state.user,
      }),
    },
  ),
)
