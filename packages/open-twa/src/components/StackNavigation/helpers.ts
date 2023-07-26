import { useMemo } from 'react'

export const getScreenName = (url: string): string => {
  return url === '/' ? '/' : url.split('/')[1]
}

// const transition = { ease: [0.4, 0.8, 0.4, 1], duration: 0.5 }
const transition = { ease: 'easeInOut', duration: 0.3 }

export const getPageTransitionParams = (movement: string) => {
  return useMemo(() => {
    if (!movement) {
      return {}
    }

    let initialX = '0'
    let initialZindex = 10

    if (movement === 'pushIn') {
      initialX = '100%'
      initialZindex = 20
    }

    if (movement === 'popIn') {
      initialX = '-20%'
      initialZindex = 10
    }

    if (movement === 'popOut') {
      initialZindex = 10
    }

    if (movement === 'pushOut') {
      initialZindex = 20
    }

    return {
      initial: {
        x: initialX,
        zIndex: initialZindex,
        pointerEvents: 'none',
      },
      done: {
        pointerEvents: 'all',
      },
      pushIn: {
        x: 0,
        transition,
      },
      pushOut: {
        x: '100%',
        transition,
      },
      popIn: {
        x: 0,
        transition,
      },
      popOut: {
        x: '-20%',
        transition,
      },
    }
  }, [movement])
}
