import { decodeJwt } from 'jose'
import { useAuthStore } from '@/stores/authStore'
import { ApiException, AuthException, RateLimitException } from '@/types/api'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE

interface RequestOptions extends RequestInit {
  skipAuth?: boolean
}

class ApiClient {
  private refreshPromise: Promise<boolean> | null = null

  private async request<T>(path: string, options: RequestOptions = {}): Promise<T> {
    const store = useAuthStore.getState()
    const { skipAuth, ...fetchOptions } = options

    if (!skipAuth && store.token) {
      if (this.isTokenExpiringSoon(store.token)) {
        await this.refreshToken()
      }
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(fetchOptions.headers as Record<string, string>),
    }

    if (!skipAuth && store.token) {
      headers.Authorization = `Bearer ${store.token}`
    }

    const res = await fetch(`${API_BASE}${path}`, {
      ...fetchOptions,
      headers,
    })

    if (res.status === 401 && !skipAuth) {
      const refreshed = await this.refreshToken()
      if (refreshed) {
        const newStore = useAuthStore.getState()
        const retryRes = await fetch(`${API_BASE}${path}`, {
          ...fetchOptions,
          headers: {
            'Content-Type': 'application/json',
            ...(newStore.token ? { Authorization: `Bearer ${newStore.token}` } : {}),
            ...(fetchOptions.headers as Record<string, string>),
          },
        })
        if (retryRes.ok) {
          if (retryRes.status === 204) return undefined as T
          return retryRes.json()
        }
        const retryError = await retryRes
          .json()
          .catch(() => ({ code: 'UNKNOWN', message: 'Unknown error', traceId: '' }))
        throw new ApiException(retryError)
      }
      useAuthStore.getState().logout()
      throw new AuthException('SESSION_EXPIRED', 'Sesión expirada. Inicia sesión nuevamente.')
    }

    if (res.status === 429) {
      const retryAfter = res.headers.get('Retry-After')
      const body = await res.json().catch(() => ({}))
      throw new RateLimitException(body.retry_after_seconds ?? retryAfter)
    }

    if (!res.ok) {
      const error = await res.json().catch(() => ({ code: 'UNKNOWN', message: 'Unknown error', traceId: '' }))
      throw new ApiException(error)
    }

    if (res.status === 204) return undefined as T
    return res.json()
  }

  private async refreshToken(): Promise<boolean> {
    if (!this.refreshPromise) {
      this.refreshPromise = this.executeRefresh().finally(() => {
        this.refreshPromise = null
      })
    }
    return this.refreshPromise
  }

  private async executeRefresh(): Promise<boolean> {
    const store = useAuthStore.getState()
    if (!store.refreshToken) return false

    try {
      const res = await fetch(`${API_BASE}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken: store.refreshToken }),
      })

      if (!res.ok) return false

      const data = await res.json()
      useAuthStore.getState().setTokens(data.accessToken, data.refreshToken)
      return true
    } catch {
      return false
    }
  }

  private isTokenExpiringSoon(token: string): boolean {
    try {
      const { exp } = decodeJwt(token)
      return exp! * 1000 - Date.now() < 5 * 60 * 1000
    } catch {
      return true
    }
  }

  get<T>(path: string, options?: RequestOptions) {
    return this.request<T>(path, { ...options, method: 'GET' })
  }

  post<T>(path: string, body?: unknown, options?: RequestOptions) {
    return this.request<T>(path, {
      ...options,
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    })
  }

  put<T>(path: string, body?: unknown, options?: RequestOptions) {
    return this.request<T>(path, {
      ...options,
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    })
  }

  delete(path: string, options?: RequestOptions) {
    return this.request<void>(path, { ...options, method: 'DELETE' })
  }
}

export const api = new ApiClient()
