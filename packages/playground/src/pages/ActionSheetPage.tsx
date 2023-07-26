import {
  Actions,
  List,
  ListItem,
  Page,
  Text,
  useToggle,
  ActionGroup,
  ActionButton,
} from 'open-twa'

export function ActionSheetPage({
  navbar,
}: {
  navbar: ReactNode
}): JSX.Element {
  const [openedA, toggleOpenedA] = useToggle(false)
  const [openedB, toggleOpenedB] = useToggle(false)

  return (
    <Page>
      {navbar}

      <Text type="header">Action Sheet</Text>
      <List type="inset">
        <ListItem title="One group" type="button" onClick={toggleOpenedA} />
        <ListItem title="Two groups" type="button" onClick={toggleOpenedB} />
      </List>

      <Actions opened={openedA} onClose={toggleOpenedA}>
        <ActionGroup title="User actions">
          <ActionButton>Add user</ActionButton>
          <ActionButton>Edit user</ActionButton>
        </ActionGroup>
      </Actions>

      <Actions opened={openedB} onClose={toggleOpenedB}>
        <ActionGroup title="User actions">
          <ActionButton>Add user</ActionButton>
          <ActionButton>Edit user</ActionButton>
        </ActionGroup>
        <ActionGroup>
          <ActionButton destructive>Cancel</ActionButton>
        </ActionGroup>
      </Actions>
    </Page>
  )
}
