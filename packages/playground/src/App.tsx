import { Tab, Tabs, ThemeProvider } from 'open-twa'
import 'open-twa/styles.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'
import { Navbar } from './components'
import { DemoPremium } from './DemoPremium'
import {
  ActionSheetPage,
  BadgePage,
  DialogPage,
  HomePage,
  ListButtonPage,
  ListInputPage,
  ListPage,
  SectionPage,
  TabsPage,
  TogglePage,
} from './pages'

function App() {
  const handleChangeTheme = (newIndex: number) => setActiveTheme(newIndex)
  const [activeTheme, setActiveTheme] = useState(0)

  const handleChangeMode = (newIndex: number) => setActiveMode(newIndex)
  const [activeMode, setActiveMode] = useState(0)

  const navbar = (
    <Navbar>
      <Tabs onChange={handleChangeTheme} activeIndex={activeTheme}>
        <Tab label="ios" />
        <Tab label="md" />
      </Tabs>
      &nbsp;
      <Tabs onChange={handleChangeMode} activeIndex={activeMode}>
        <Tab label="light" />
        <Tab label="dark" />
      </Tabs>
    </Navbar>
  )

  return (
    <div className={styles.main}>
      <div className={styles.segment}>
        <ThemeProvider
          mode={activeMode === 0 ? 'light' : 'dark'}
          theme={activeTheme === 0 ? 'ios' : 'material'}
        >
          <Routes>
            <Route path="/" element={<HomePage navbar={navbar} />} />
            <Route path="/tabs" element={<TabsPage navbar={navbar} />} />
            <Route path="/list" element={<ListPage navbar={navbar} />} />
            <Route
              path="/list-button"
              element={<ListButtonPage navbar={navbar} />}
            />
            <Route
              path="/list-input"
              element={<ListInputPage navbar={navbar} />}
            />
            <Route path="/badge" element={<BadgePage navbar={navbar} />} />
            <Route path="/toggle" element={<TogglePage navbar={navbar} />} />
            <Route path="/dialog" element={<DialogPage navbar={navbar} />} />
            <Route path="/section" element={<SectionPage navbar={navbar} />} />
            <Route
              path="/action-sheet"
              element={<ActionSheetPage navbar={navbar} />}
            />

            <Route
              path="/demo-premium"
              element={<DemoPremium navbar={navbar} />}
            />
          </Routes>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default App
