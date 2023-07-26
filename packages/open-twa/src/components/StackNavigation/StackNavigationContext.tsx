import React, { ReactNode } from 'react'

export interface StackNavigationContextProps {
  pathname: string
  params: { [key: string]: any }
  screenName: string
  isFocused: boolean
}

const StackNavigationContext = React.createContext<StackNavigationContextProps>(
  {
    pathname: '',
    params: {},
    screenName: '',
    isFocused: false,
  }
)

const StackNavigationProvider = ({
  children,
  value,
}: {
  children: ReactNode
  value: StackNavigationContextProps
}) => {
  return (
    <StackNavigationContext.Provider value={value}>
      {children}
    </StackNavigationContext.Provider>
  )
}

export { StackNavigationContext, StackNavigationProvider }
