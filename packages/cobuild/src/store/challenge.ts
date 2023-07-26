import { ApiService } from '@services'
import { create } from 'zustand'

import { createSelectors } from './helpers'
import { challenges } from './mocks'

export interface Challenge {
  id: string
  communityId: string
  title: string
  description: string
  footer: string
  imageUrl: string
  listImageUrl: string
  prize: string
  price?: string
  isCompleted: boolean
}

interface ChallengeState {
  challenges: Challenge[]
}

interface ChallengeAction {
  actions: {
    fetchById: () => void
    complete: (challengeId: string) => Promise<any>
  }
}

const useChallengeStoreBase = create<ChallengeState & ChallengeAction>(
  (set, get) => ({
    challenges: [...challenges],
    actions: {
      fetchById: async () => {},
      complete: async (challengeId: string) => {
        if (window.plausible) {
          window.plausible('challenge-completed', {
            props: { id: challengeId },
          })
        }

        return await ApiService.post({
          endpoint: `/challenge/${challengeId}/complete`,
          options: {
            retry: {
              limit: 3,
              statusCodes: [413],
            },
          },
        })
      },
    },
  })
)

export const useChallengeActions = () =>
  useChallengeStoreBase((state) => state.actions)

export const useChallenge = createSelectors(useChallengeStoreBase)
