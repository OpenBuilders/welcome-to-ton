import { List, ListItem, Page, Toggle, useToggle } from 'open-twa'
import { ReactNode } from 'react'

export function TogglePage({ navbar }: { navbar: ReactNode }): JSX.Element {
  const [checked1, toggleChecked1] = useToggle(true)
  const [checked2, toggleChecked2] = useToggle(false)

  return (
    <Page>
      {navbar}

      <List type="inset">
        <ListItem
          title="To be"
          after={<Toggle checked={checked1} onChange={toggleChecked1} />}
        />
        <ListItem
          title="Not to be"
          after={<Toggle checked={checked2} onChange={toggleChecked2} />}
        />
      </List>
    </Page>
  )
}
