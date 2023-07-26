import { Page, Section, Tab, Tabs, Text } from 'open-twa'
import { ReactNode, useState } from 'react'

export function TabsPage({ navbar }: { navbar: ReactNode }): JSX.Element {
  const handleChangeTab = (newIndex: number) => setActiveTab(newIndex)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Page>
      {navbar}

      <Text type="header">Solid tabs</Text>
      <Section>
        <Tabs onChange={handleChangeTab} activeIndex={activeTab}>
          <Tab label="Administration" />
          <Tab label="Membership" />
        </Tabs>
      </Section>
    </Page>
  )
}
