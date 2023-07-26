import { ApiService } from '@services'
import { Task, useChallengeActions, useTask, useTaskActions } from '@store'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Content,
  Icon,
  Image,
  List,
  MainButton,
  Page,
  Text,
  ThemeContext,
  useFocusEffect,
  useIsFocused,
  useStackNavigation,
} from 'open-twa'
import { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { prepareTonConnectLink } from '@services'
import { useWallet, WalletStatus } from '@store'
import { getMainButtonState } from './helpers'
import { Promise } from './promise'
import { Skeleton } from './skeleton'
import { Success } from './success'

import { TaskItem } from './task-item'
import { ChallengeState } from './types'

const currentChallenge = {
  id: '2',
  title: 'Welcome to The Open Network',
  description:
    'Explore the products of the TON ecosystem. Get a unique official collectible and enter the draw to win one of 20 free one-year Telegram Premium subscriptions.',
  coverUrl:
    'https://cobuild.ams3.digitaloceanspaces.com/community/ton/challenge-image-welcome-ton.png?2',
}

const transition = { ease: 'easeInOut', duration: 0.3 }
const fadeInVariants = {
  initial: {
    opacity: 0,
    transition,
  },
  enter: {
    opacity: 1,
    transition,
  },
  exit: {
    opacity: 0,
    transition,
  },
}

const webApp = window.Telegram.WebApp
const currentCommunity = {
  id: 2,
  title: 'TON Community',
}

export function ChallengePage(): JSX.Element {
  const theme = useContext(ThemeContext)

  const { params } = useStackNavigation()
  const navigate = useNavigate()
  const { completeTask, fetchTasks } = useTaskActions()
  const { complete } = useChallengeActions()
  const [userJoined, setUserJoined] = useState(false)
  const [showMainButton, setShowMainButton] = useState(false)
  const isFocused = useIsFocused()
  const [tasks, setTasks] = useState<Task[]>([])

  const handleBack = () => navigate(`/community/${currentCommunity?.id}`)

  useFocusEffect(() => {
    webApp?.BackButton.hide()

    setTimeout(() => {
      setShowMainButton(true)
    }, 100)

    if (!userJoined) {
      joinToChallenge()
    }

    return () => {
      // setShowMainButton(false)
    }
  })

  const joinToChallenge = async () => {
    const { ok, data } = await ApiService.post({
      endpoint: `/challenge/${currentChallenge.id}/join`,
    })

    if (ok) {
      setUserJoined(true)
      if (data.isCompleted) {
        setIsDone(true)
      }
    }
  }

  useFocusEffect(() => {
    const taskSub = useTask.subscribe((state) => {
      setTasks(state.tasks)
    })

    return () => {
      taskSub()
    }
  })

  useEffect(() => {
    if (isFocused && userJoined) {
      fetchTasks(params.id)
    }
  }, [isFocused, userJoined])

  const isLoaded = tasks.length > 0
  const hasNoActiveTasks = tasks && !tasks.find((mt) => !mt.completed)

  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isNftPromiseModalOpened, setIsNftPromiseModalOpened] = useState(false)
  const [isMinted, setIsMinted] = useState(false)
  const [isMinting, setIsMinting] = useState(false)
  const [isDone, setIsDone] = useState(false)

  let challengeState = ChallengeState.readyToStart

  if (tasks.length && tasks[0].completed) {
    challengeState = ChallengeState.started
  }

  if (hasNoActiveTasks) {
    challengeState = ChallengeState.readyToMint
  }

  if (isMinting) {
    challengeState = ChallengeState.minting
  }

  if (isMinted) {
    challengeState = ChallengeState.minted
  }

  if (isDone) {
    challengeState = ChallengeState.completed
  }

  const mainButtonParams = useMemo(() => {
    return getMainButtonState(challengeState, theme as any)
  }, [challengeState])

  const handleRetweet = () => {
    const task = tasks[1]
    if (task.completed || task.locked) {
      return
    }

    webApp.openLink(
      'https://twitter.com/ton_blockchain/status/1681690895651938308'
    )

    setTimeout(() => {
      completeTask(
        currentChallenge.id as any,
        task?.id as number,
        task?.slug as string
      )

      setTimeout(() => {
        fetchTasks(params.id)
      }, 300)
    }, 200)
  }

  const handleTaskItemClick = (slug?: string) => {
    let slugToNavigate = slug

    if (!slug) {
      const tasks = useTask.getState().tasks
      let t = tasks.find((t, i) => {
        const nextTask = tasks[i + 1] as any

        if (nextTask && nextTask.locked) {
          return t
        } else if (i === tasks.length - 1) {
          return t
        }
      })

      slugToNavigate = t ? t.slug : undefined
    }

    if (slugToNavigate === 'twitter') {
      handleRetweet()
    }

    if (slugToNavigate && slugToNavigate !== 'twitter') {
      setTimeout(() => {
        navigate(`/story/${slugToNavigate}`)
      }, 200)
    }
  }

  const toggleNftPromiseModal = (open: boolean) => {
    setIsNftPromiseModalOpened(open)
  }

  const connectionStatus = useWallet.store.connectionStatus()

  const handleConnectWallet = async () => {
    await complete(currentChallenge.id)
    setIsModalOpened(true)
    setIsMinted(true)
  }

  useEffect(() => {
    if (isFocused && connectionStatus === WalletStatus.CONNECTED) {
      handleConnectWallet()
    }
  }, [isFocused, connectionStatus])

  return (
    <Page>
      <AnimatePresence initial={true}>
        {isModalOpened && (
          <Success
            onClose={() => {
              setIsModalOpened(false)
              setIsDone(true)
            }}
          />
        )}
        {isNftPromiseModalOpened && (
          <Promise onClose={() => toggleNftPromiseModal(false)} />
        )}
      </AnimatePresence>

      {showMainButton && isLoaded && isFocused ? (
        <MainButton
          hideAfterDestroy={false}
          onClick={async () => {
            if (
              challengeState === ChallengeState.readyToStart ||
              challengeState === ChallengeState.started
            ) {
              handleTaskItemClick()
            }

            if (
              challengeState === ChallengeState.readyToMint &&
              !isModalOpened
            ) {
              setIsMinting(true)
              webApp.openLink(await prepareTonConnectLink())
            }

            if (isMinted && isModalOpened) {
              setIsModalOpened(false)
              setIsDone(true)
            }

            if (isDone) {
              webApp.openTelegramLink('https://t.me/addlist/qXhXfUfWNJ84ZTUy')
            }
          }}
          {...mainButtonParams}
          disabled={mainButtonParams.disabled}
        />
      ) : null}
      <AnimatePresence mode="sync">
        {!isLoaded ? <Skeleton /> : null}

        {isLoaded ? (
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            key="body"
            variants={fadeInVariants as any}
          >
            <Image
              src={currentChallenge.coverUrl}
              skeleton
              borderRadius="16px"
              minHeight="210px"
            />
            {!isDone && !hasNoActiveTasks ? (
              <Content
                padding="14-16"
                margin="12-0-0-0"
                spacingChild="4"
                borderRadius="12"
                justify="between"
                borderColor="separator"
                onClick={() => setIsNftPromiseModalOpened(true)}
              >
                <Content column spacingChild="4">
                  <Text weight="semibold">Unique TON Collectible</Text>
                  <Text color="secondary">What you get</Text>
                </Content>
                <Image
                  width="48px"
                  skeleton
                  borderRadius="10px"
                  src="https://cobuild.ams3.digitaloceanspaces.com/assets/reward-locked.png"
                />
              </Content>
            ) : null}
            {hasNoActiveTasks && !isDone ? (
              <Content
                padding="14-16"
                margin="12-0-0-0"
                spacingChild="4"
                background="light-green"
                borderRadius="12"
                justify="center"
              >
                <Text>🎉&nbsp;</Text>
                <Text color="green" align="center">
                  Challenge is completed
                </Text>
              </Content>
            ) : null}
            {isDone ? (
              <Content
                padding="14-16"
                margin="12-0-0-0"
                spacingChild="4"
                background="light-green"
                borderRadius="12"
                justify="between"
                onClick={() => setIsModalOpened(true)}
              >
                <Content column spacingChild="4">
                  <Text weight="semibold">Your TON Collectible</Text>
                  <Text color="green">Challenge is completed</Text>
                </Content>
                <Image
                  width="48px"
                  skeleton
                  borderRadius="10px"
                  src="https://cobuild.ams3.digitaloceanspaces.com/assets/success-nft.png?1"
                />
              </Content>
            ) : null}

            <Content column>
              <Text type="header-22" margin="24-0-12-0">
                {currentChallenge.title}
              </Text>
              <Content align="center" spacingChild="4" margin="0-0-8-0">
                <Text weight="semibold">{currentCommunity?.title}</Text>
                <Icon name="TgCheckmark" />
              </Content>
            </Content>
            <Content padding="6-0">
              <Text>{currentChallenge.description}</Text>
            </Content>
            <Content>
              <Text type="header-20">Do it step by step</Text>
            </Content>
            <List type="basic">
              <TaskItem task={tasks[0]} onClick={handleTaskItemClick} />
              <TaskItem task={tasks[1]} onClick={handleRetweet} />
              <TaskItem task={tasks[2]} onClick={handleTaskItemClick} />
              <TaskItem task={tasks[3]} onClick={handleTaskItemClick} />
              <TaskItem task={tasks[4]} onClick={handleTaskItemClick} />
              <TaskItem task={tasks[5]} onClick={handleTaskItemClick} />
              <TaskItem task={tasks[6]} onClick={handleTaskItemClick} />
            </List>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Page>
  )
}
