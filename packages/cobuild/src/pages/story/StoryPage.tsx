import Config from '@config'
import { ApiService, prepareTonConnectLink } from '@services'
import {
  CarouselSlide,
  Task,
  useTask,
  useTaskActions,
  useWallet,
  WalletStatus,
} from '@store'
import {
  MainButton,
  Page,
  ThemeContext,
  useFocusEffect,
  useIsFocused,
  useStackNavigation,
} from 'open-twa'
import { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Carousel } from './components'
import { getMainButtonState } from './helpers'

const webApp = window.Telegram.WebApp

const currentChallenge = { id: 2 }

export function StoryPage(): JSX.Element | null {
  const navigate = useNavigate()
  const { params } = useStackNavigation()
  const { completeTask, fetchTasks } = useTaskActions()

  const [task, setTask] = useState<Task | null>(null)
  const [slides, setSlides] = useState<CarouselSlide[]>([])
  const [carouselBackground, setCarouselBackground] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  const isFocused = useIsFocused()
  const theme = useContext(ThemeContext)

  const handleBack = () => navigate(`/challenge/${currentChallenge.id}`)

  useFocusEffect(() => {
    webApp?.BackButton.show()
    webApp?.onEvent('backButtonClicked', handleBack)

    return () => {
      webApp?.offEvent('backButtonClicked', handleBack)
    }
  })

  const findTask = () => {
    const task = useTask.getState().tasks.find((s) => s.slug === params.id)

    setSlides(task ? (task.slides as []) : [])
    setCarouselBackground(task?.background as string)
    setTask(task as Task)
  }

  useFocusEffect(() => {
    setCurrentStep(0)

    if (!useTask.getState().tasks.length) {
      fetchTasks(currentChallenge.id)
    } else {
      findTask()
    }

    const taskSub = useTask.subscribe((state) => {
      if (state.tasks) {
        findTask()
      }
    })

    return () => {
      taskSub()

      setTimeout(() => {
        setSlides([])
      }, 600)
    }
  })

  // const connectionStatus = useWallet.store.connectionStatus()

  // const handleConnectWallet = async () => {
  //   const slide = slides[currentStep] as any

  //   if (slide && slide.mainButton.action === 'connect') {
  //     await handleComplete()
  //     handleNext()
  //   }
  // }

  // useEffect(() => {
  //   if (isFocused && connectionStatus === WalletStatus.CONNECTED) {
  //     handleConnectWallet()
  //   }
  // }, [isFocused, connectionStatus, currentStep])

  const handlePrev = () => {
    if (currentStep - 1 >= 0) {
      setCurrentStep(currentStep - 1)
    } else {
      handleBack()
    }
  }

  const handleNext = async () => {
    if (currentStep + 1 < slides.length) {
      setCurrentStep(currentStep + 1)
    } else {
      handleBack()
    }
  }

  const handleAction = async () => {
    const currentSlide = slides[currentStep] as any

    if (
      !currentSlide ||
      !currentSlide.mainButton ||
      !currentSlide.mainButton.text
    ) {
      return
    }

    const buttonParams = (slides[currentStep] as any).mainButton
    const isLastTask = slides.length === currentStep + 1

    if (task?.completed && isLastTask) {
      handleBack()
      return
    }

    if (task?.locked) {
      handleBack()
      return
    }

    if (buttonParams.action === 'next') {
      if (!task?.completed && isLastTask) {
        await handleComplete()
      }

      handleNext()
    }

    if (buttonParams.action === 'connect') {
      webApp.openLink(await prepareTonConnectLink())
    }

    if (buttonParams.action === 'follow') {
      if (!task?.completed) {
        await handleComplete()
      }

      webApp.openLink(buttonParams.value)
      setTimeout(() => {
        handleNext()
      }, 200)
    }

    if (buttonParams.action === 'follow-tg') {
      if (!task?.completed) {
        await handleComplete()
      }

      webApp.openTelegramLink(buttonParams.value)
    }

    if (buttonParams.action === 'check') {
      if (!task?.completed) {
        await ApiService.post({
          endpoint: `/custom/send-cheque/${currentChallenge.id}`,
        })
        await handleComplete()
        webApp.openTelegramLink(Config.botLink)
      } else {
        handleNext()
      }
    }
  }

  const handleComplete = async () => {
    completeTask(currentChallenge.id, task?.id as number, task?.slug as string)
  }

  const mainButtonParams = useMemo(() => {
    return getMainButtonState(currentStep, slides, task, theme as any)
  }, [currentStep, slides, task])

  return (
    <Page fullSpace>
      {isFocused && mainButtonParams.text ? (
        <MainButton
          hideAfterDestroy={false}
          onClick={handleAction}
          {...mainButtonParams}
        />
      ) : null}
      <Carousel
        slides={slides}
        background={carouselBackground}
        currentStep={currentStep}
        locked={task?.locked}
        onPrev={handlePrev}
        onNext={handleAction}
      />
    </Page>
  )
}
