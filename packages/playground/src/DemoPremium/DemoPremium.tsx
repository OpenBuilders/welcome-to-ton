import { List, ListItem, Page } from 'open-twa'

export function DemoPremium({ navbar }: { navbar: ReactNode }): JSX.Element {
  return (
    <Page>
      <List type="inset">
        <ListItem title="Set Emoji Status" type="link" to="/tabs" before="❤️" />
        <ListItem
          title="Change Profile Photo"
          type="link"
          to="/list"
          before="🤳"
        />
      </List>

      <List type="inset">
        <ListItem title="Saved Messages" type="link" to="/tabs" before="🤬" />
        <ListItem title="Recent Calls" type="link" to="/list" before="📞" />
        <ListItem
          title="Devices"
          type="link"
          to="/list"
          before="📟"
          after="3"
        />
        <ListItem title="Chat Folders" type="link" to="/list" before="📁" />
      </List>
    </Page>
  )
}
