import { Modes, Themes } from './types'

export function getTheme(): Themes {
  return navigator.userAgent.match(/iOS|iPhone OS|iPhone|iPod|iPad|Mac OS/i)
    ? 'ios'
    : 'material'
}

export function getMode(): Modes {
  return 'dark'
}
