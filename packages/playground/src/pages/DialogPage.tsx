import {
  Dialog,
  DialogButton,
  List,
  ListItem,
  Page,
  Section,
  Text,
  useToggle,
} from 'open-twa'
import { ReactNode } from 'react'

export function DialogPage({ navbar }: { navbar: ReactNode }): JSX.Element {
  const [alertOpened, toggleAlertOpened] = useToggle(false)
  const [confirmOpened, toggleConfirmOpened] = useToggle(false)

  return (
    <Page>
      {navbar}

      <Section type="inset">
        Dialog is a type of modal window that appears in front of app content to
        provide critical information, or prompt for a decision to be made.
      </Section>

      <Text type="header">Dialog types</Text>
      <List type="inset">
        <ListItem title="Alert" type="button" onClick={toggleAlertOpened} />
        <ListItem title="Confirm" type="button" onClick={toggleConfirmOpened} />
      </List>

      <Dialog
        title="Alert title"
        content="Here's some alert text. It can span multiple lines if needed!"
        opened={alertOpened}
        onClose={toggleAlertOpened}
        buttons={[<DialogButton onClick={toggleAlertOpened}>Ok</DialogButton>]}
      />

      <Dialog
        title="To be or not to be?"
        content="Here's some alert text. It can span multiple lines if needed!"
        opened={confirmOpened}
        onClose={toggleConfirmOpened}
        buttons={[
          <DialogButton onClick={toggleConfirmOpened}>Cancel</DialogButton>,
          <DialogButton onClick={toggleConfirmOpened}>Ok</DialogButton>,
        ]}
      />
    </Page>
  )
}
