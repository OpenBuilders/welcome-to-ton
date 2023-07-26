import { ReactNode, useEffect, useMemo } from 'react'
import { getTheme } from './helpers'
import { ThemeContext } from './ThemeContext'
import { Modes, Themes } from './types'

interface ThemeProviderProps {
  children: ReactNode
  theme: Themes
  mode: Modes
}

export const ThemeProvider = ({
  children,
  theme: themeProp,
  mode: modeProp,
}: ThemeProviderProps) => {
  // const [colorScheme, setColorScheme] = useState<ColorSchemes>(
  //   colorSchemeProp || WebApp.colorScheme
  // )

  // const platform = platformProp || WebApp.platform

  const theme = useMemo(() => {
    return themeProp || getTheme()
  }, [themeProp])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const mode = useMemo(() => {
    return modeProp || getTheme()
  }, [modeProp])

  useEffect(() => {
    document.body.setAttribute('data-mode', mode)
  }, [mode])

  // useEffect(() => {
  //   if (!colorSchemeProp) {
  //     const onChange = () => {
  //       setColorScheme(WebApp.colorScheme)
  //     }
  //     WebApp.onEvent('themeChanged', onChange)
  //     return () => {
  //       WebApp.offEvent('themeChanged', onChange)
  //     }
  //   } else {
  //     setColorScheme(colorSchemeProp)
  //   }
  // }, [colorSchemeProp])

  // useEffect(() => {
  //   document.body.setAttribute('data-color-scheme', colorScheme)
  // }, [colorScheme])

  const value = useMemo(() => {
    return {
      theme,
      mode,
    }
  }, [theme, mode])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
