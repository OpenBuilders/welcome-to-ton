import { Badge, List, ListItem, Page, Text } from 'open-twa'
import { ReactNode } from 'react'

export function BadgePage({ navbar }: { navbar: ReactNode }): JSX.Element {
  return (
    <Page>
      {navbar}

      <Text type="header">Badges</Text>
      <List type="solid">
        <ListItem title="Members" after={<Badge color="gray">1</Badge>} />
        <ListItem title="Accesses" after={<Badge color="green">NEW</Badge>} />
        <ListItem title="Rules" after={<Badge color="orange">Check</Badge>} />
        <ListItem title="Settings" after={<Badge color="blue">10</Badge>} />
      </List>
    </Page>
  )
}
