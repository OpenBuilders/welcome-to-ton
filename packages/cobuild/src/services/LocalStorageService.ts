export class LocalStorageService {
  static setItem(key: string, value: any, removeIfEmpty = true): void {
    if (removeIfEmpty && (value === null || value === undefined)) {
      return localStorage.removeItem(key)
    }

    localStorage.setItem(key, JSON.stringify(value))
  }

  static getItem<T>(key: string): T | null
  static getItem<T>(key: string, otherwise: T): T
  static getItem<T>(key: string, otherwise?: T): T | null {
    const data: string | null = localStorage.getItem(key)

    if (data !== null) {
      return JSON.parse(data)
    }

    if (otherwise) {
      return otherwise
    }

    return null
  }
}
