import { ApiService, AuthService } from '@services'
import { create } from 'zustand'

import { createSelectors } from './helpers'

interface UserState {
  isAuth: boolean
}

interface UserAction {
  actions: {
    authorise: () => void
  }
}

const useUserStoreBase = create<UserState & UserAction>((set, get) => ({
  isAuth: AuthService.isAuth(),
  actions: {
    authorise: async () => {
      const { ok, data } = await ApiService.post({
        endpoint: '/auth/webapp-session',
        data: {
          webAppData: window?.Telegram?.WebApp.initData,
        },
      })

      if (ok && data.accessToken) {
        const { accessToken } = data

        AuthService.setCredentials({ accessToken })

        const isAuth = true
        set(() => ({ isAuth }))
      }
    },
  },
}))

export const useUserActions = () => useUserStoreBase((state) => state.actions)

export const useUser = createSelectors(useUserStoreBase)
