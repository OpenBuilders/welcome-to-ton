import { ApiService } from '@services'
import { Wallet } from '@tonconnect/sdk'
import { create } from 'zustand'

import { createSelectors } from './helpers'

export enum WalletType {
  tonKeeper = 'tonkeeper',
}

export enum WalletStatus {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTED = 'CONNECTED',
  CONNECTING = 'CONNECTING',
}

interface WalletState {
  address: string
  walletType: WalletType | null
  connectionStatus: WalletStatus
}

interface WalletActions {
  actions: {
    connect: (wallet: Wallet | null) => void
    disconnect: () => void
  }
}

const useWalletStoreBase = create<WalletState & WalletActions>((set, get) => ({
  address: '',
  walletType: null,
  connectionStatus: WalletStatus.DISCONNECTED,
  actions: {
    connect: async (wallet) => {
      if (!wallet || !wallet.account.address) {
        return
      }

      const { ok } = await ApiService.post({
        data: wallet,
        endpoint: '/auth/ton-proof',
      })

      if (ok) {
        set(() => ({
          address: wallet.account.address,
          walletType: WalletType.tonKeeper,
          connectionStatus: WalletStatus.CONNECTED,
        }))
      }
    },
    disconnect: () => {},
  },
}))

export const useWalletActions = () =>
  useWalletStoreBase((state) => state.actions)

export const useWallet = createSelectors(useWalletStoreBase)
