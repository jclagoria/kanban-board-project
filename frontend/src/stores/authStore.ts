'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/lib/types/domain'

type AuthErrorCode =
  | 'INVALID_CREDENTIALS' | 'ACCOUNT_LOCKED'
  | 'TOKEN_EXPIRED' | 'TOKEN_INVALID' | 'SESSION_EXPIRED'
  | 'EMAIL_EXISTS' | 'WEAK_PASSWORD' | 'COMMON_PASSWORD'

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
  register: (email: string, name: string, password: string) => Promise<void>
  logout: () => void
  refreshTokenAction: () => Promise<void>
  setTokens: (token: string, refreshToken: string) => void
  incrementLoginAttempts: () => void
  resetLoginAttempts: () => void
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

      login: async (_email, _password) => {
        await new Promise(r => setTimeout(r, 300))
        const attempts = get().loginAttempts
        if (attempts >= 3) {
          const lockedUntil = new Date(Date.now() + 15 * 60 * 1000)
          set({ accountLockedUntil: lockedUntil, loginAttempts: attempts + 1 })
          throw { code: 'ACCOUNT_LOCKED' as AuthErrorCode }
        }
        if (_email === 'locked@test.com') {
          set({ loginAttempts: 3, accountLockedUntil: new Date(Date.now() + 15 * 60 * 1000) })
          throw { code: 'ACCOUNT_LOCKED' as AuthErrorCode }
        }
        set({
          user: { id: 'u1', name: 'Demo User', email: _email, role: 'admin', plan: 'free' },
          token: 'mock-access-token',
          refreshToken: 'mock-refresh-token',
          isAuthenticated: true,
          loginAttempts: 0,
          accountLockedUntil: null,
        })
      },

      register: async (_email, name, _password) => {
        await new Promise(r => setTimeout(r, 300))
        set({
          user: { id: 'u1', name, email: _email, role: 'admin', plan: 'free' },
          token: 'mock-access-token',
          refreshToken: 'mock-refresh-token',
          isAuthenticated: true,
          loginAttempts: 0,
          accountLockedUntil: null,
        })
      },

      logout: () => {
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
        await new Promise(r => setTimeout(r, 200))
      },

      setTokens: (token, refreshToken) => set({ token, refreshToken }),

      incrementLoginAttempts: () => set(s => ({ loginAttempts: s.loginAttempts + 1 })),
      resetLoginAttempts: () => set({ loginAttempts: 0, accountLockedUntil: null }),
    }),
    {
      name: 'kanban-mock-auth',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)
