import {
  BackButton,
  Content,
  Image,
  List,
  ListInput,
  ListItem,
  Page,
  Text,
} from 'open-twa'
import { useNavigate } from 'react-router-dom'

import { useCommunity } from '@store'

import { useFocusEffect } from 'open-twa'
import { WebApp } from 'open-twa/dist/src/components/WebApp/types'
import styles from './HomePage.module.scss'

const webApp: null | WebApp = window.Telegram.WebApp

export function HomePage(): JSX.Element {
  const navigate = useNavigate()
  const communities = useCommunity.store.communities()
  const featuredCommunities = [communities[0], communities[1]]

  const goTo = (url: string) => {
    navigate(url)
  }

  useFocusEffect(() => {
    webApp?.BackButton.hide()
  })

  return (
    <Page>
      <BackButton hidden={true} />
      <Content>
        <List type="inset">
          <ListInput placeholder="Search community" clearButton />
        </List>
      </Content>
      <Text type="header-28">Community activities</Text>
      <Text type="footnote" uppercase margin="24-0-10-0" color="secondary">
        Featured
      </Text>

      <div className={styles.cards}>
        {featuredCommunities.map((c) => (
          <div
            className={styles.card}
            key={c.id}
            onClick={() => {
              goTo(`/community/${c.id}`)
            }}
          >
            <div className={styles.image}>
              <Image src={c.iconUrl} size="40" />
            </div>
            <div className={styles.title}>{c.title}</div>
            <div className={styles.members}>{c.members} members</div>
            <div className={styles.challenges}>∙ {c.id} activities</div>
          </div>
        ))}
      </div>

      <Text type="footnote" uppercase margin="24-0-10-0" color="secondary">
        All communities
      </Text>

      <List type="basic">
        {communities.map((c) => (
          <ListItem
            large
            key={c.id}
            title={c.title}
            type="link"
            footer={`${c.members} members ∙ ${c.activeTasks} active tasks`}
            before={<Image src={c.iconUrl} size="40" />}
            onClick={() => {
              goTo(`/community/${c.id}`)
            }}
          />
        ))}
      </List>
    </Page>
  )
}
