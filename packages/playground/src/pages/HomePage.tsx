import { List, ListItem, Page, Text } from 'open-twa'
import { ReactNode } from 'react'

export function HomePage({ navbar }: { navbar: ReactNode }): JSX.Element {
  return (
    <Page>
      {navbar}
      <Text type="header">Demo app</Text>
      <List type="solid">
        <ListItem title="Telegram premium" type="link" to="/demo-premium" />
      </List>

      <Text type="header">Components</Text>
      <List type="solid">
        <ListItem title="Tabs" type="link" to="/tabs" />
        <ListItem title="List" type="link" to="/list" />
        <ListItem title="List & Buttons" type="link" to="/list-button" />
        <ListItem title="List & Inputs" type="link" to="/list-input" />
        <ListItem title="Badge" type="link" to="/badge" />
        <ListItem title="Toggle" type="link" to="/toggle" />
        <ListItem title="Dialog" type="link" to="/dialog" />
        <ListItem title="Section" type="link" to="/section" />
        <ListItem title="Action sheet" type="link" to="/action-sheet" />
      </List>
    </Page>
  )
}
