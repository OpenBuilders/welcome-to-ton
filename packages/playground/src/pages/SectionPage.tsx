import { Page, Section, Text } from 'open-twa'

export function SectionPage({ navbar }: { navbar: ReactNode }): JSX.Element {
  return (
    <Page>
      {navbar}

      <Text type="header">Simple Section</Text>
      <Section>
        A section is a part or piece of something that fits together with the
        other pieces to make a whole. Like the arts section of a newspaper, or
        the rhythm section of the band that gets reviewed in it.
      </Section>

      <Text type="header">Solid Section</Text>
      <Section type="solid">
        A section is a part or piece of something that fits together with the
        other pieces to make a whole. Like the arts section of a newspaper, or
        the rhythm section of the band that gets reviewed in it.
      </Section>

      <Text type="header" inset>
        Inset Section
      </Text>
      <Section type="inset">
        A section is a part or piece of something that fits together with the
        other pieces to make a whole. Like the arts section of a newspaper, or
        the rhythm section of the band that gets reviewed in it.
      </Section>
      <Text type="footer" inset>
        Footer
      </Text>
    </Page>
  )
}
