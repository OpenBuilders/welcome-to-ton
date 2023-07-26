import { useContext } from 'react'

import {
  StackNavigationContext,
  StackNavigationContextProps,
} from './StackNavigationContext'

export function useStackNavigation(): StackNavigationContextProps {
  const navigation = useContext(StackNavigationContext)

  if (navigation === undefined) {
    throw new Error(
      "Couldn't find a navigation object. Is your component inside NavigationContainer?"
    )
  }

  return navigation
}
