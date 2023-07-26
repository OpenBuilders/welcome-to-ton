import cn from 'classnames'
import {
  animate,
  motion,
  MotionStyle,
  PanInfo,
  useAnimation,
  useMotionValue,
} from 'framer-motion'
import React, { ReactElement, useEffect, useMemo, useState } from 'react'
import { matchPath, useLocation } from 'react-router-dom'

import { getPageTransitionParams, getScreenName } from './helpers'
import { useEffectAfterMount } from './hooks'

import styles from './StackNavigation.module.scss'
import { StackNavigationProvider } from './StackNavigationContext'

interface StackNavigationProps {
  children: ReactElement[]
}

const stackMap: { [key: string]: any } = {}

const transition: any = {
  type: 'spring',
  bounce: 0,
}

const StackNavigation = ({
  children: childrenProp,
}: StackNavigationProps): JSX.Element => {
  React.Children.map(childrenProp, (child, index) => {
    stackMap[getScreenName(child.props.path)] = index
  })

  const location = useLocation()
  const screen = getScreenName(location.pathname)

  // useEffect(() => {
  //   console.log(getScreenName(location.pathname))
  // }, [location])

  const [initialScreen] = useState(screen)
  const [currentScreen, setCurrentScreen] = useState(screen)
  const x = useMotionValue(0)
  const [index, setIndex] = React.useState(stackMap[screen])
  const containerRef = React.useRef<HTMLDivElement>(null)
  const calculateNewX = () => index * (containerRef.current?.clientWidth || 0)

  const onDragEnd = (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0

    const { offset, velocity } = dragProps

    console.log(offset, velocity)

    animate(x, calculateNewX(), transition)

    // if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
    //   animate(x, calculateNewX(), transition)
    //   return
    // }

    // if (offset.x > clientWidth / 4) {
    //   setIndex(index - 1)
    // } else if (offset.x < -clientWidth / 4) {
    //   setIndex(index + 1)
    // } else {
    //   animate(x, calculateNewX(), transition)
    // }
  }

  // useEffect(() => {
  //   console.log(calculateNewX())

  //   animate(x, 300, transition)
  // }, [screen])

  const [movement, setMovement] = useState<any>({
    to: screen,
    from: null,
  })

  useEffectAfterMount(() => {
    setMovement({
      direction: stackMap[screen] < stackMap[movement.to] ? 'down' : 'up',
      from: movement.to,
      to: screen,
    })

    // setCurrentScreen(screen)
  }, [screen])

  const onDragStart = (index: number) => {
    setActiveScreenIndex(index)
  }

  const handleMovementEnd = (index: number) => {
    // setMovement({})
    // console.log('handleMovementEnd completed for ', index)
    // setCurrentScreen(screen)
  }

  const [activeScreenIndex, setActiveScreenIndex] = React.useState<number>(1)

  const children = useMemo(() => {
    return React.Children.map(childrenProp, (child, i) => {
      const screenName = getScreenName(child.props.path)

      const isPopPage = i === activeScreenIndex - 1
      const isActiveScreen = movement.to === screenName
      const initialFocus = initialScreen === screenName ? 'visible' : 'hidden'
      let focus = null

      if (movement.direction === 'up') {
        if (screenName === movement.to) {
          focus = 'pushIn'
        }

        if (screenName === movement.from) {
          focus = 'popOut'
        }
      }

      if (movement.direction === 'down') {
        if (screenName === movement.to) {
          focus = 'popIn'
        }

        if (screenName === movement.from) {
          focus = 'pushOut'
        }
      }

      return React.cloneElement(child, {
        screenName,
        initialFocus,
        movement: focus,
        isPopPage,
        isActiveScreen,
        // x,
        // index: i,
        key: screenName,
        // onDragEnd,
        // onDragStart,
        onMovementEnd: handleMovementEnd,
        path: child.props.path,
      })
    })
  }, [movement])

  return (
    <div className={styles.container} ref={containerRef}>
      {children}
    </div>
  )
}

const pageStyle: MotionStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
}

interface ScreenProps {
  // index?: number
  element: React.ReactNode | null

  // onDragEnd?(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void
  // onDragStart?(index: any): void
  onMovementEnd?(index: any): void
  screenName?: any
  isPopPage?: any
  isActiveScreen?: any
  movement?: 'popIn' | 'popOut' | 'pushIn' | 'pushOut' | 'hidden' | 'visible'
  initialFocus?: 'hidden' | 'visible'
  direction?: 'up' | 'down'
  path: string
}

export const Screen = ({
  element,
  isActiveScreen,
  screenName,
  movement,
  initialFocus,
  onMovementEnd,
  path,
}: ScreenProps): JSX.Element => {
  const animation = useAnimation()
  const child = React.useMemo(() => element, [screenName, element])

  const clsList = [styles.screen]
  initialFocus === 'hidden'
    ? clsList.push(styles.hidden)
    : clsList.push(styles.visible)

  const move = async () => {
    if (movement && onMovementEnd) {
      await animation.set('initial')
      await animation.start(movement)
      await animation.set('done')

      onMovementEnd(screenName)
    }
  }

  useEffect(() => {
    movement && move()
  }, [movement])

  // useEffect(() => {
  //   setFocused(true)
  // }, [isActiveScreen])

  // console.log(isActiveScreen, screenName)

  const pathMatch = matchPath(path, location.pathname)

  const navigationContext = {
    pathname: pathMatch ? pathMatch?.pathname : '',
    params: pathMatch ? pathMatch?.params : {},
    screenName,
    isFocused: isActiveScreen,
  }

  return (
    <motion.div
      // drag="x"
      // onDragEnd={onDragEnd}
      // onDragStart={() => {
      //   onDragStart(index)
      // }}
      // transition={transitionX}
      variants={getPageTransitionParams(movement ? movement : '') as any}
      initial="initial"
      // dragElastic={{ left: 0, right: 1 }}
      // dragConstraints={{ left: 0, right: 0 }}
      // dragMomentum={false}
      // style={
      //   {
      //     // opacity: focus === 'popIn' ? opacity : null,
      //     // x: focus === 'pushOut' ? x : opacity,
      //   }
      // }
      animate={animation}
      className={cn(clsList)}
    >
      <StackNavigationProvider value={navigationContext}>
        {child}
      </StackNavigationProvider>
    </motion.div>
  )
}

StackNavigation.Screen = Screen

export { StackNavigation }
