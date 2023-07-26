import { StackNavigation } from 'open-twa'

import { ChallengePage, StoryPage } from './pages'

export const AnimatedRoutes = () => {
  return (
    <StackNavigation>
      <StackNavigation.Screen
        path="/challenge/:id"
        element={<ChallengePage />}
      />
      <StackNavigation.Screen path="/story/:id" element={<StoryPage />} />
    </StackNavigation>
  )
}
