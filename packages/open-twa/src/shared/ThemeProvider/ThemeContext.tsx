import React from 'react'
import { getTheme } from './helpers'

const ThemeContext = React.createContext({
  theme: getTheme(),
  mode: 'dark',
})

export { ThemeContext }
