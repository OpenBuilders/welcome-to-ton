import { TonConnect, WalletInfo } from '@tonconnect/sdk'

import Config from '@config'

const dappMetadata = {
  manifestUrl: Config.tonConnectManifestUrl,
}

const connector = new TonConnect(dappMetadata)

export const prepareTonConnectLink = async (): Promise<string | null> => {
  const walletsList = await TonConnectService.getWallets()
  const tonkeeper = walletsList.find(
    (w: any) => w.jsBridgeKey === 'tonkeeper'
  ) as any

  if (!tonkeeper) {
    return null
  }

  const tonkeeperConnectionSource = {
    universalLink: tonkeeper.universalLink,
    bridgeUrl: tonkeeper.bridgeUrl,
  }

  const universalLink = TonConnectService.getConnector().connect(
    tonkeeperConnectionSource,
    { tonProof: 'honor-bright' }
  )

  return universalLink
}

export class TonConnectService {
  static getConnector(): TonConnect {
    return connector
  }

  static getWallets(): Promise<WalletInfo[]> {
    return TonConnectService.getConnector().getWallets()
  }

  static disconnect(): Promise<void> | null {
    if (TonConnectService.getConnector().connected) {
      return TonConnectService.getConnector().disconnect()
    }

    return null
  }
}
