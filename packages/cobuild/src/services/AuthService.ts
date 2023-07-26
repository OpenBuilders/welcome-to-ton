import { LocalStorageService } from './LocalStorageService'

interface AuthServiceCredentials {
  accessToken: string | null
}

const accessTokenName = 'access-token'

export class AuthService {
  static setCredentials(credentials: AuthServiceCredentials) {
    LocalStorageService.setItem(accessTokenName, credentials.accessToken)
  }

  static getCredentials(): AuthServiceCredentials {
    return {
      accessToken: LocalStorageService.getItem(accessTokenName),
    }
  }

  static isAuth(): boolean {
    return !!AuthService.getCredentials().accessToken
  }

  static clearCredentials() {
    LocalStorageService.setItem(accessTokenName, null)
  }
}
