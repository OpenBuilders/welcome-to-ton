declare module '*.module.scss'
declare module 'open-twa'
declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
}

declare var plausible: any
declare var Telegram: any
Telegram = Telegram || {}
