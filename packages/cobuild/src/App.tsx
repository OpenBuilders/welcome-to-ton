import { ThemeProvider } from 'open-twa'
import 'open-twa/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

import { ApiService, AuthService, TonConnectService } from '@services'
import { useUser, useUserActions, useWalletActions } from '@store'
import { useEffect } from 'react'
import { AnimatedRoutes } from './AnimatedRoutes'
import { ForwardPage } from './pages'

const webApp = window.Telegram?.WebApp

ApiService.after401 = () => {
  if (AuthService.isAuth()) {
    AuthService.clearCredentials()
    location.reload()
  }
}

function App() {
  const mode = webApp.colorScheme ? webApp.colorScheme : 'light'
  const theme = 'ios'

  const { authorise } = useUserActions()
  const { connect } = useWalletActions()
  const isAuth = useUser.store.isAuth()

  if (webApp.platform === 'unknown' && webApp.initData === '') {
    return <ForwardPage />
  }

  useEffect(() => {
    webApp.expand()

    if (!isAuth) {
      authorise()
    }

    return TonConnectService.getConnector().onStatusChange(connect)
  }, [])

  if (!isAuth) {
    return null
  }

  return (
    <ThemeProvider mode={mode} theme={theme}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
