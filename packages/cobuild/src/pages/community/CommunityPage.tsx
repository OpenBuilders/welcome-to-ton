import { useChallenge, useCommunity } from '@store'
import {
  Content,
  Image,
  List,
  ListItem,
  MainButton,
  Page,
  Text,
  useFocusEffect,
  useStackNavigation,
} from 'open-twa'
import { WebApp } from 'open-twa/dist/src/components/WebApp/types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './CommunityPage.module.scss'
import { ChallengeItem } from './components'

const webApp: null | WebApp = window.Telegram.WebApp

export function CommunityPage(): JSX.Element {
  const navigate = useNavigate()
  const [communityId, setCommunityId] = useState<string | null>(null)
  const { params } = useStackNavigation()

  const handleBack = () => {
    navigate('/')
  }

  useFocusEffect(() => {
    webApp?.BackButton.show()
    webApp?.onEvent('backButtonClicked', handleBack)

    return () => {
      webApp?.offEvent('backButtonClicked', handleBack)
    }
  })

  useEffect(() => {
    if (params.id) {
      setCommunityId(params.id as string)
    }
  }, [params.id])

  useFocusEffect(() => {
    // console.log('community is here')
    return () => {
      // console.log('community is blured')
    }
  })

  const challenges = useChallenge.store
    .challenges()
    .filter((ch) => ch.communityId === communityId)

  const currentCommunity = useCommunity.store
    .communities()
    .find((s) => s.id === communityId)

  return (
    <Page>
      <MainButton text="" onClick={() => {}} />
      <Content column align="center" margin="0-0-16-0">
        <Content padding="10">
          <Image size="92" rounded skeleton src={currentCommunity?.iconUrl} />
        </Content>
        <Text margin="0-0-2-0" weight="semibold">
          {currentCommunity?.title}
        </Text>
        <Text type="footnote" color="secondary">
          {currentCommunity?.members} members
        </Text>
      </Content>

      <Content shadow borderRadius="13" padding="6-body" background="secondary">
        <List type="basic">
          <ListItem
            title="Your points"
            type="link"
            after="☆ 346"
            onClick={() => navigate('/')}
            before={
              <Image
                src="https://cobuild.ams3.cdn.digitaloceanspaces.com/assets/andrew.png"
                size="30"
              />
            }
          />
        </List>
      </Content>

      <Content align="center" className={styles.greenDotRoot}>
        <Text type="footnote" uppercase color="secondary">
          ACTIVE
        </Text>
        <div className={styles.greenDot} />
      </Content>

      {challenges.map((ch) => (
        <ChallengeItem challenge={ch} key={ch.id} />
      ))}
    </Page>
  )
}
