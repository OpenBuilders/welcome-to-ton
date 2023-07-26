import { ChallengeState } from './types'

export const getMainButtonState = (
  state: ChallengeState,
  theme: { [key: string]: any }
) => {
  const { mode } = theme
  const { button_color, button_text_color } =
    window?.Telegram?.WebApp.themeParams

  if (state === ChallengeState.started) {
    return {
      text: 'Continue with tasks',
      disabled: false,
      progress: false,
      color: button_color,
      textColor: button_text_color,
    }
  }

  if (state === ChallengeState.readyToMint) {
    return {
      text: 'Claim TON NFT',
      disabled: false,
      progress: false,
    }
  }

  if (state === ChallengeState.minting) {
    return {
      text: 'Minting...',
      disabled: true,
      progress: true,
      color: mode === 'light' ? '#F4F4F5' : '#151517',
      textColor: mode === 'light' ? '#BDBDC0' : '#55555A',
    }
  }

  if (state === ChallengeState.minted) {
    return {
      text: 'Great!',
      disabled: false,
      progress: false,
    }
  }

  if (state === ChallengeState.completed) {
    return {
      text: 'Follow TON Community',
      disabled: false,
      progress: false,
    }
  }

  return {
    text: 'Start with TON Story',
    disabled: false,
    progress: false,
    color: button_color,
    textColor: button_text_color,
  }
}

interface UpdateMainButtonProps {
  text: string
  onClick(): void
  disabled: boolean
  isVisible: boolean
}

const webApp = window.Telegram.WebApp
const mainButton = webApp ? webApp.MainButton : null

export const updateMainButton = ({ text }: UpdateMainButtonProps) => {
  if (text) {
    mainButton.setText(text)
  }
}
