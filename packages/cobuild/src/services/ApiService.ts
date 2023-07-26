import ky from 'ky'
import { AuthService } from './AuthService'

import Config from '../config'

const apiHost = Config.apiHost

export interface ApiServiceResponse {
  error?: string
  metadata?: { [key: string]: any }
  data?: any
  ok: boolean
}

const api = ky.extend({
  hooks: {
    beforeRequest: [
      (request) => {
        const { accessToken } = AuthService.getCredentials()

        if (accessToken) {
          request.headers.set('Authorization', `Bearer ${accessToken}`)
        }
      },
    ],
    afterResponse: [
      (_request, _options, response) => {
        if (response.status === 401) {
          ApiService.after401()
        }
      },
    ],
  },
})

export const ApiService = {
  after401: () => {},
  get: async ({
    endpoint,
    options,
  }: {
    endpoint: string
    options?: { [key: string]: any }
  }): Promise<ApiServiceResponse> => {
    return await api
      .get(`${apiHost}${endpoint}`, {
        searchParams: options,
      })
      .json()
  },

  post: async ({
    endpoint,
    options,
    data,
  }: {
    endpoint: string
    options?: { [key: string]: any }
    data?: { [key: string]: any }
  }): Promise<ApiServiceResponse> => {
    return new Promise(async (resolve, reject) => {
      const response = await api
        .post(`${apiHost}${endpoint}`, {
          json: data,
          ...options,
        })
        .json()
        .catch(() => {
          resolve({ ok: false, data: null })
        })

      resolve(response as any)
    })
  },
}
