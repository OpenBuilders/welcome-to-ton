import { useEffect } from 'react'

import { WebApp } from '../WebApp/types'

interface MainButtonProps {
  disabled?: boolean
  progress?: boolean
  color?: string
  textColor?: string
  hideAfterDestroy?: boolean
  onClick(): void
  text: string
}

const webApp: null | WebApp = window?.Telegram?.WebApp
const mainButton = webApp ? webApp.MainButton : null
let isButtonShown = false

export const MainButton = ({
  disabled,
  color,
  textColor,
  text,
  onClick,
  progress,
  hideAfterDestroy = true,
}: MainButtonProps): null => {
  const resetButton = () => {
    if (mainButton) {
      const { button_color, button_text_color } = webApp.themeParams

      if (disabled) {
        mainButton.disable()
      } else {
        mainButton.enable()
      }

      mainButton.hideProgress()
      mainButton.setParams({
        color: button_color,
        text_color: button_text_color,
      })
    }
  }

  useEffect(() => {
    resetButton()
    // isButtonShown = true

    return () => {
      //   // setTimeout(() => {
      //   if ((!mainButton || isButtonShown) && !hideAfterDestroy) {
      //     return
      //   }

      //   isButtonShown = false
      if (hideAfterDestroy) {
        mainButton?.hide()
      }

      //   // resetButton()
      //   // }, 10)
    }
  }, [])

  useEffect(() => {
    if (!mainButton) {
      return
    }

    if (typeof progress === 'boolean') {
      if (progress) {
        mainButton.showProgress()
        mainButton.disable()
      } else {
        mainButton.hideProgress()
      }
    }

    if (typeof disabled === 'boolean') {
      disabled || progress ? mainButton.disable() : mainButton.enable()
    }
  }, [disabled, progress])

  useEffect(() => {
    if (!mainButton) {
      return
    }

    if (color || textColor) {
      mainButton.setParams({ color, text_color: textColor })
    }

    if (!color) {
      const { button_color } = webApp.themeParams

      mainButton.setParams({
        color: button_color,
      })
    }

    if (!textColor) {
      const { button_text_color } = webApp.themeParams

      mainButton.setParams({
        text_color: button_text_color,
      })
    }
  }, [color, textColor])

  useEffect(() => {
    if (!mainButton) {
      return
    }

    if (text) {
      mainButton.setText(text)
      !mainButton.isVisible && mainButton.show()
    } else if (mainButton.isVisible) {
      mainButton.hide()
    }
  }, [text])

  useEffect(() => {
    if (mainButton && onClick) {
      mainButton.onClick(onClick)

      return () => {
        if (mainButton) {
          mainButton.offClick(onClick)
        }
      }
    }
  }, [onClick])

  return null
}
