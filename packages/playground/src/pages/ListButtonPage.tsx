import { List, ListItem, Page, Text } from 'open-twa'
import { ReactNode, useState } from 'react'

const svgIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0002 1.8002C6.36689 1.8002 1.8002 6.36689 1.8002 12.0002C1.8002 17.6335 6.36689 22.2002 12.0002 22.2002C17.6335 22.2002 22.2002 17.6335 22.2002 12.0002C22.2002 6.36689 17.6335 1.8002 12.0002 1.8002ZM0.200195 12.0002C0.200195 5.48324 5.48324 0.200195 12.0002 0.200195C18.5172 0.200195 23.8002 5.48324 23.8002 12.0002C23.8002 18.5172 18.5172 23.8002 12.0002 23.8002C5.48324 23.8002 0.200195 18.5172 0.200195 12.0002ZM12.0002 6.7002C12.442 6.7002 12.8002 7.05837 12.8002 7.5002V11.2002H16.5002C16.942 11.2002 17.3002 11.5584 17.3002 12.0002C17.3002 12.442 16.942 12.8002 16.5002 12.8002H12.8002V16.5002C12.8002 16.942 12.442 17.3002 12.0002 17.3002C11.5584 17.3002 11.2002 16.942 11.2002 16.5002V12.8002H7.5002C7.05837 12.8002 6.7002 12.442 6.7002 12.0002C6.7002 11.5584 7.05837 11.2002 7.5002 11.2002H11.2002V7.5002C11.2002 7.05837 11.5584 6.7002 12.0002 6.7002Z"
      fill="#007AFF"
    />
  </svg>
)

export function ListButtonPage({ navbar }: { navbar: ReactNode }): JSX.Element {
  const [selected, setSelected] = useState('guests')

  return (
    <Page>
      {navbar}

      <Text type="header">Button with icon</Text>
      <List type="inset">
        <ListItem title="Add new role" type="button" before={svgIcon} />
        <ListItem title="Add new access" type="button" before={svgIcon} />
      </List>

      <Text type="header">Option button</Text>
      <List type="inset">
        <ListItem
          title="Guests"
          type="option-button"
          active={selected === 'guests'}
          onClick={() => setSelected('guests')}
        />
        <ListItem
          title="Members"
          type="option-button"
          active={selected === 'members'}
          onClick={() => setSelected('members')}
        />
        <ListItem
          title="Admins"
          type="option-button"
          active={selected === 'admins'}
          onClick={() => setSelected('admins')}
        />
        <ListItem title="Add new role" type="button" />
      </List>
    </Page>
  )
}
