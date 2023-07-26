import { Badge, List, ListItem, Page, Text } from 'open-twa'
import { ReactNode } from 'react'

const svgIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_131_6533)">
      <path
        d="M0 11.2C0 7.27963 0 5.31945 0.762954 3.82207C1.43407 2.50493 2.50493 1.43407 3.82207 0.762954C5.31945 0 7.27963 0 11.2 0H18.8C22.7204 0 24.6805 0 26.1779 0.762954C27.4951 1.43407 28.5659 2.50493 29.237 3.82207C30 5.31945 30 7.27963 30 11.2V18.8C30 22.7204 30 24.6805 29.237 26.1779C28.5659 27.4951 27.4951 28.5659 26.1779 29.237C24.6805 30 22.7204 30 18.8 30H11.2C7.27963 30 5.31945 30 3.82207 29.237C2.50493 28.5659 1.43407 27.4951 0.762954 26.1779C0 24.6805 0 22.7204 0 18.8V11.2Z"
        fill="#007AFF"
      />
      <ellipse cx="15" cy="10.5" rx="4" ry="4.5" fill="white" />
      <path
        d="M21.6049 24H8.40488C7.70437 24 7.35411 24 6.97678 23.7492C6.71299 23.5738 6.40115 23.111 6.33765 22.8007C6.24683 22.3568 6.33945 22.1281 6.5247 21.6708C7.34965 19.6343 9.48381 17 15.0049 17C20.526 17 22.6601 19.6343 23.4851 21.6708C23.6703 22.1281 23.7629 22.3568 23.6721 22.8007C23.6086 23.111 23.2968 23.5738 23.033 23.7492C22.6557 24 22.3054 24 21.6049 24Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_131_6533">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export function ListPage({ navbar }: { navbar: ReactNode }): JSX.Element {
  return (
    <Page>
      {navbar}

      <Text type="header-20">Simple list</Text>
      <List>
        <ListItem title="Members" />
        <ListItem title="Accesses" />
        <ListItem title="Rules" />
      </List>

      <Text type="header-20">Solid list</Text>
      <List type="solid">
        <ListItem title="Members" after={<Badge color="blue">10</Badge>} />
        <ListItem title="Accesses" after="Admin" />
        <ListItem title="Rules" type="link" />
      </List>

      <Text type="header-20" inset>
        Inset list
      </Text>
      <List type="inset">
        <ListItem title="Members" />
        <ListItem title="Accesses" />
        <ListItem title="Rules" />
      </List>

      <Text type="header-20">With icon list</Text>
      <List type="solid">
        <ListItem title="Members" before={svgIcon} after="Edit" type="link" />
        <ListItem
          title="Large size"
          before={svgIcon}
          after="Edit"
          type="link"
          large
        />
        <ListItem
          title="Members"
          before={svgIcon}
          header="Header"
          after={<Badge color="blue">10</Badge>}
        />
        <ListItem
          title="Members"
          before={svgIcon}
          footer="Footer"
          after="Edit"
        />
        <ListItem
          title="Members"
          before={svgIcon}
          header="Header"
          footer="Footer"
          after="Edit"
          type="link"
        />
      </List>
    </Page>
  )
}
