import { useMemo } from 'react'

const transition = { ease: [0.2, 0.8, 0.2, 1], duration: 0.6 }

export const getPageTransitionParams = ({
  direction,
}: {
  direction: 'up' | 'down'
}) => {
  let isPush = true
  let isPop = false

  if (direction === 'up') {
    isPush = true
    isPop = false
  }

  if (direction === 'down') {
    isPush = false
    isPop = true
  }

  return useMemo(() => {
    if (!direction) {
      return {}
    }

    return {
      initial() {
        // isPush=false from left to right

        return {
          display: 'none',
          x: isPush ? '100%' : '-20%',
          zIndex: isPush ? 100 : 1,
          // boxShadow: isPush ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : null,
          transition,
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }
      },
      enter() {
        return {
          x: 0,
          display: 'block',

          transition,
        }
      },
      exit() {
        // isPop=false from left to right

        return {
          display: 'block',
          zIndex: isPop ? 100 : 1,
          // zIndex: 50,
          boxShadow: isPop ? '-1px 0 5px 0px rgba(34,34,34,0)' : null,
          before: '',
          x: isPop ? '100%' : '-20%',
          transition,
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }
      },
    }
  }, [direction])
}
