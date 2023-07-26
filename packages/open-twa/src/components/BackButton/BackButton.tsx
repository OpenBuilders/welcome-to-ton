import { useEffect } from 'react'

import { WebApp } from '../WebApp/types'

interface BackButtonProps {
  onClick?(): void
  hideAfterDestroy?: boolean
  hidden?: boolean
}

const webApp: null | WebApp = window?.Telegram?.WebApp
const backButton = webApp ? webApp.BackButton : null
let isButtonShown = false

export const BackButton = ({
  onClick = () => {},
  hideAfterDestroy = false,
  hidden,
}: BackButtonProps) => {
  useEffect(() => {
    if (backButton) {
      isButtonShown = true
      backButton.show()
    }

    return () => {
      isButtonShown = false

      setTimeout(() => {
        if (backButton && !isButtonShown && hideAfterDestroy) {
          backButton.hide()
        }
      }, 10)
    }
  }, [])

  useEffect(() => {
    if (hidden) {
      isButtonShown = false

      if (backButton) {
        backButton.hide()
      }
    }
  }, [hidden])

  useEffect(() => {
    webApp?.onEvent('backButtonClicked', onClick)

    return () => {
      webApp?.offEvent('backButtonClicked', onClick)
    }
  }, [onClick])

  return null
}
