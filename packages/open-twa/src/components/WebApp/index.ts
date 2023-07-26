import { Telegram } from './types'

export * from './useWebApp'

declare global {
  interface Window {
    Telegram: Telegram
  }
}
