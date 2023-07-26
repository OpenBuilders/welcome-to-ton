import { WebApp } from './types'

export function isWebApp(): boolean {
  return window.Telegram && window.Telegram.WebApp.initData.length > 0
}

export function useWebApp(callback: (webApp: WebApp) => void) {
  if (isWebApp()) {
    const webApp = window.Telegram.WebApp as WebApp

    callback(webApp)
  }
}
