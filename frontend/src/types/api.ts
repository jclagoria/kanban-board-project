export interface ApiError {
  code: string
  message: string
  details?: Record<string, unknown>
  errors?: Array<{ field: string; code: string; message: string }>
  traceId: string
}

export class ApiException extends Error {
  code: string
  traceId?: string
  details?: Record<string, unknown>
  errors?: Array<{ field: string; code: string; message: string }>

  constructor(error: ApiError) {
    super(error.message)
    this.name = 'ApiException'
    this.code = error.code
    this.traceId = error.traceId
    this.details = error.details
    this.errors = error.errors
  }
}

export type AuthErrorCode =
  | 'INVALID_CREDENTIALS'
  | 'ACCOUNT_LOCKED'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_INVALID'
  | 'TOKEN_REVOKED'
  | 'SESSION_EXPIRED'
  | 'ACCOUNT_DISABLED'
  | 'EMAIL_EXISTS'
  | 'WEAK_PASSWORD'
  | 'COMMON_PASSWORD'

export class AuthException extends Error {
  code: AuthErrorCode

  constructor(code: AuthErrorCode, message: string) {
    super(message)
    this.name = 'AuthException'
    this.code = code
  }
}

export class RateLimitException extends Error {
  retryAfter: number

  constructor(retryAfter: string | number | null) {
    super('Demasiadas solicitudes')
    this.name = 'RateLimitException'
    this.retryAfter = typeof retryAfter === 'number' ? retryAfter : parseInt(retryAfter || '30', 10) || 30
  }
}


