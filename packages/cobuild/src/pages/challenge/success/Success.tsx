import cn from 'classnames'
import { animate, motion, PanInfo, useMotionValue } from 'framer-motion'
import JSConfetti from 'js-confetti'
import React, { useEffect, useState } from 'react'

import styles from './Success.module.scss'

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

interface SuccessProps {
  onClose(): void
}

export const Success = ({ onClose }: SuccessProps): JSX.Element => {
  let jsConfetti: JSConfetti | null = null

  useEffect(() => {
    setTimeout(() => {
      jsConfetti = new JSConfetti()
      handleSalute()
    }, 1000)
  }, [])

  const containerRef = React.useRef<HTMLDivElement>(null)
  const y = useMotionValue(0)

  const onDragEnd = async (e: Event, dragProps: PanInfo) => {
    const { offset } = dragProps

    if (Math.abs(offset.y) > 10) {
      const height = containerRef.current?.clientHeight || 0
      await animate(y, height, transition as any)
      onClose()
    }
  }

  const [useDrag, setUseDrag] = useState(false)

  const handleClose = () => {
    setUseDrag(false)
    onClose()
  }

  const handleSalute = () => {
    setTimeout(() => {
      jsConfetti?.addConfetti({
        emojis: ['🦄'],
        emojiSize: 100,
        confettiNumber: 1,
      })
    }, 3000)

    setTimeout(() => {
      jsConfetti?.addConfetti({
        confettiColors: [
          '#ff0a54',
          '#ff477e',
          '#ff7096',
          '#ff85a1',
          '#fbb1bd',
          '#f9bec7',
        ],
        confettiRadius: 5,
        confettiNumber: 100,
      })
      jsConfetti?.addConfetti({
        emojis: ['💥', '👑', '🎊'],
        emojiSize: 80,
        confettiNumber: 10,
      })
    }, 1000)

    setTimeout(() => {
      jsConfetti?.addConfetti({
        emojis: ['🎉', '🥳', '⭐️'],
        emojiSize: 80,
        confettiNumber: 5,
      })
    }, 700)

    setTimeout(() => {
      jsConfetti?.addConfetti({
        emojis: ['🦄'],
        emojiSize: 100,
        confettiNumber: 4,
      })
    }, 300)

    setTimeout(() => {
      jsConfetti?.addConfetti({
        confettiColors: [
          '#ff0a54',
          '#ff477e',
          '#ff7096',
          '#ff85a1',
          '#fbb1bd',
          '#f9bec7',
        ],
        confettiRadius: 5,
        confettiNumber: 100,
      })
    }, 50)
  }

  return (
    <div className={styles.root}>
      <motion.div
        className={styles.backdrop}
        animate="enter"
        exit="exit"
        transition={transition}
        key="backdrop-1"
        initial="initial"
        variants={{
          initial: { opacity: 0 },
          enter: { opacity: 1 },
          exit: { opacity: 0 },
        }}
      />
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        key="modal-1"
        className={styles.modal}
        variants={variants as any}
        drag={useDrag ? 'y' : false}
        dragElastic={{ top: 0, bottom: 1 }}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragMomentum={false}
        onDragEnd={onDragEnd}
        style={{ y, touchAction: 'none' }}
        ref={containerRef}
      >
        <div className={styles.header}>
          <div className={styles.backButton} onClick={handleClose}>
            Cancel
          </div>
        </div>
        <div className={styles.body}>
          <img
            src="https://cobuild.ams3.digitaloceanspaces.com/assets/success-nft.png?1"
            className={styles.image}
            onClick={handleSalute}
          />

          <div className={cn(styles.title)}>TON Collectible</div>
          <div className={cn(styles.subtitle)}>Available in your Tonkeeper</div>
        </div>
      </motion.div>
    </div>
  )
}
