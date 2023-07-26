import { motion } from 'framer-motion'
import React, { useRef } from 'react'

import styles from './Modal.module.scss'

interface ModalProps {
  container?: HTMLDivElement
  header?: string
  subheader?: string
  children: React.ReactNode
  open?: boolean
  close?: boolean
  onClose: (result?: any) => void
  onCloseComplete?: () => void
}

const transition = { ease: [0.4, 0, 0.2, 1], duration: 0.5 }
const variants = {
  initial: () => {
    return {
      y: '100%',
    }
  },
  enter: {
    y: 0,
    transition,
  },
  exit: {
    y: '100%',
    transition,
  },
}

export function Modal({
  container = document.createElement('div'),
  children,
  open,
  onClose,
  onCloseComplete,
}: ModalProps) {
  const backdropElem = useRef<HTMLDivElement>(null)
  const modalElem = useRef<HTMLDivElement>(null)
  const rootElem = useRef<HTMLDivElement>(null)
  const bodyElem = useRef<HTMLDivElement>(null)
  const isTabletPortraitUp = false

  // useLayoutEffect(() => {
  //   // document.body.classList.add(styles.hasModal)

  //   if (rootElem.current) {
  //     rootElem.current.style.display = 'flex'
  //   }

  //   setTimeout(() => {
  //     if (backdropElem.current) {
  //       // backdropElem.current.style.opacity = '1'
  //     }

  //     if (modalElem.current) {
  //       // modalElem.current.style.opacity = '1'
  //       modalElem.current.style.transform = 'translate3d(0, 0, 0)'

  //       setTimeout(() => {
  //         if (bodyElem.current) {
  //           bodyElem.current.style.opacity = '1'
  //         }
  //       }, 650)
  //     }
  //   })
  // }, [container])

  // const translateTimeout = isTabletPortraitUp ? 0 : 200

  // const handleClose = useCallback(() => {
  // onCloseComplete && onCloseComplete()
  //   // document.body.classList.remove(styles.hasModal)
  //   if (!isTabletPortraitUp && bodyElem.current) {
  //     // bodyElem.current.style.opacity = '0'
  //   }
  //   setTimeout(() => {
  //     if (!isTabletPortraitUp) {
  //       if (modalElem.current) {
  //         modalElem.current.style.transform = 'translate3d(0, 100%, 0)'
  //       }
  //     } else {
  //       if (modalElem.current) {
  //         modalElem.current.style.transform = 'translate3d(0, 20px, 0)'
  //       }
  //     }
  //     if (backdropElem.current) {
  //       backdropElem.current.style.opacity = '0'
  //     }
  //     setTimeout(() => {
  //       if (rootElem.current) {
  //         rootElem.current.style.display = 'none'
  //       }
  //       onCloseComplete && onCloseComplete()
  //     }, 650)
  //   }, translateTimeout)
  // }, [container, onClose, onCloseComplete])

  // useEffect(() => {
  //   if (!open) {
  //     handleClose()
  //   }
  // }, [handleClose, open])

  // useEffect(() => {
  //   const close = (e: KeyboardEvent) => {
  //     if (e.keyCode === 27) {
  //       onClose()
  //     }
  //   }

  //   window.addEventListener('keydown', close)

  //   return () => window.removeEventListener('keydown', close)
  // }, [])

  // const handleBackdropClick = useCallback(
  //   (event: any) => {
  //     if (event.target === backdropElem.current) {
  //       onClose()
  //     }
  //   },
  //   [onClose]
  // )

  const handleBackdropClick = () => {}

  return (
    <div className={styles.root} ref={rootElem}>
      <div
        className={styles.backdrop}
        ref={backdropElem}
        onClick={handleBackdropClick}
      ></div>

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        key="modal-1"
        className={styles.modal}
        variants={variants as any}
      >
        <div className={styles.header}>
          <div className={styles.backButton} onClick={onClose}>
            Cancel
          </div>
        </div>
        <div className={styles.body} ref={bodyElem}>
          {children}
        </div>
      </motion.div>
    </div>
  )
}
