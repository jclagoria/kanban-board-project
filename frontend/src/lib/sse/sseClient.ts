import type { SseEvent } from './types'

type SseEventHandler = (event: SseEvent) => void

interface SseClientConfig {
  url: string
  token: string
  onEvent: SseEventHandler
  onError?: (error: Event) => void
  maxRetries?: number
  onAuthError?: () => Promise<boolean>
  getNewToken?: () => string | null
}

export class SseClient {
  private eventSource: EventSource | null = null
  private retryCount = 0
  private maxRetries: number
  private config: SseClientConfig
  private reconnectTimeout: ReturnType<typeof setTimeout> | null = null

  constructor(config: SseClientConfig) {
    this.config = config
    this.maxRetries = config.maxRetries ?? Infinity
  }

  connect(): void {
    if (this.eventSource?.readyState === EventSource.OPEN) return

    const currentToken = this.config.getNewToken?.() ?? this.config.token

    const url = new URL(this.config.url)
    url.searchParams.set('token', currentToken)

    this.eventSource = new EventSource(url.toString(), {
      withCredentials: true,
    } as EventSourceInit)

    this.eventSource.onmessage = (event: MessageEvent) => {
      try {
        const parsed: SseEvent = JSON.parse(event.data)
        this.config.onEvent(parsed)
      } catch (e) {
        console.error('[SSE] Error parsing event:', e)
      }
    }

    this.eventSource.onerror = async (error: Event) => {
      this.config.onError?.(error)
      this.eventSource?.close()

      if (this.config.onAuthError && this.retryCount < 3) {
        const refreshed = await this.config.onAuthError()
        if (refreshed) {
          this.retryCount = 0
          this.connect()
          return
        }
      }

      if (this.retryCount < this.maxRetries) {
        const delay = Math.min(1000 * 2 ** this.retryCount, 30000)
        this.retryCount++
        this.reconnectTimeout = setTimeout(() => this.connect(), delay)
      }
    }

    this.eventSource.onopen = () => {
      this.retryCount = 0
    }
  }

  disconnect(): void {
    if (this.reconnectTimeout) clearTimeout(this.reconnectTimeout)
    this.eventSource?.close()
    this.eventSource = null
    this.retryCount = 0
  }
}
