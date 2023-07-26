import {
  BackButton,
  Image,
  List,
  ListItem,
  MainButton,
  Page,
  Text,
  TextList,
} from 'open-twa'
import { useNavigate, useParams } from 'react-router-dom'

import { IndexIcon } from './components'

const activeCommunity = {
  id: '2',
  title: 'TON Community',
  members: 567,
  activeTasks: 5,
  iconUrl:
    'https://cobuild.ams3.digitaloceanspaces.com/community/ton/community-icon-large.png',
}

const currentChallenge = {
  id: '2',
  title: 'Welcome to TON',
  description:
    'A total of $30k up for grabs! Complete partner tasks and collect egg NFTs to enter various raffles to share.',
  coverUrl:
    'https://cobuild.ams3.digitaloceanspaces.com/community/ton/welcome-ton-cover.jpg',
}

const tasks = [
  {
    title: 'Get to know the basics of TON',
    description: '',
    mainButtonText: 'Go to quiz',
  },
  {
    title: 'Connect Tonkeeper wallet',
    description: '',
    mainButtonText: 'Connect wallet',
  },
  {
    title: (
      <>
        Connect @wallet.
        <br />
        Send $0.1 to your Tonkeeper from it
      </>
    ),
    description: '',
    mainButtonText: 'Check your results',
  },
  {
    title: 'Get to know Fragment',
    description: '',
    mainButtonText: 'Connect wallet to Fragment',
  },
  {
    title: 'Get to know Getgems',
    description: '',
    mainButtonText: 'Connect wallet to Getgems',
  },
  {
    title: 'Join Tonstarter airdrop',
    description: '',
    mainButtonText: 'Connect wallet to Tonstarter',
  },
]

export function TaskPage(): JSX.Element {
  let { id } = useParams()
  const pid = id as string
  const currentTask = tasks[parseInt(pid, 10) - 1]
  const navigate = useNavigate()

  const goTo = (url: string) => {
    navigate(url)
  }

  return (
    <Page>
      <BackButton onClick={() => goTo('/challenge/2')} />
      <MainButton
        text={currentTask.mainButtonText}
        onClick={() => goTo('/challenge/2')}
      />

      <IndexIcon index={pid} />

      <Text type="header-28" margin="16-0">
        {currentTask.title}
      </Text>
      <List type="basic">
        <ListItem
          title={currentChallenge.title}
          footer="Challenge page"
          type="link"
          before={<Image src={currentChallenge.coverUrl} size="40" />}
          onClick={() => goTo(`/challenge/${currentChallenge.id}`)}
        />
        <ListItem
          title={activeCommunity.title}
          type="link"
          footer="Owner"
          before={<Image src={activeCommunity.iconUrl} size="40" />}
          hasDivider={false}
          onClick={() => goTo(`/community/2`)}
        />
      </List>

      <Text type="header-20" margin="24-0-10-0">
        Description
      </Text>
      <Text margin="0-0-24-0">
        Here are some of the most fascinating things about the TON blockchain as
        it exists today:
      </Text>
      <TextList styleType="decimal">
        <Text>
          <b>Scalability:</b> The TON blockchain uses a unique sharding
          technique that allows it to scale to millions of transactions per
          second. This makes it well-suited for high-volume applications and use
          cases.
        </Text>
        <Text>
          <b>Smart Contracts:</b> TON's smart contract language, Fift, is
          designed to be easy to use and allows for complex contract logic. It
          is also optimized for speed and efficiency, making it possible to
          execute complex contracts quickly.
        </Text>
      </TextList>
    </Page>
  )
}
