import { create } from 'zustand'
import { createSelectors } from './helpers'

export interface Community {
  id: string
  title: string
  members: number | string
  activeTasks: number
  iconUrl: string
}

interface CommunityStore {
  currentCommunity: null | Community
  communities: Community[]
  actions: {
    setCurrentCommunity: (currentCommunity: Community) => void
    fetchCurrentCommunity: (id: string) => void
  }
}

const communitiesMock = [
  {
    id: '2',
    title: 'TON Community',
    members: '521,515',
    activeTasks: 1,
    iconUrl:
      'https://cobuild.ams3.digitaloceanspaces.com/community/ton/community-icon-large.png',
  },
]

const currentCommunityMock = communitiesMock[0]

const useCommynityStoreBase = create<CommunityStore>((set) => ({
  currentCommunity: currentCommunityMock,
  communities: communitiesMock,
  actions: {
    setCurrentCommunity: (currentCommunity: Community) =>
      set((state) => ({ currentCommunity })),
    fetchCurrentCommunity: async (id: string) => {
      // const currentCommunity = await ApiService.get({
      //   endpoint: `/communities/${id}`,
      // })

      set((state) => ({
        currentCommunity: state.communities.find((c) => {
          return c.id === id
        }),
      }))
    },
  },
}))

export const useCommunityActions = () =>
  useCommynityStoreBase((state) => state.actions)

export const useCommunity = createSelectors(useCommynityStoreBase)
