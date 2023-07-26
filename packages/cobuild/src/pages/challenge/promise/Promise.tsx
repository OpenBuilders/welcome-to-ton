import cn from 'classnames'
import { motion } from 'framer-motion'

import styles from './Promise.module.scss'

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

interface PromiseProps {
  onClose(): void
}

export const Promise = ({ onClose }: PromiseProps): JSX.Element => {
  const handleClose = () => {
    onClose()
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
        key="modal-promise"
        className={styles.modal}
        variants={variants as any}
      >
        <div className={styles.header}>
          <div className={styles.backButton} onClick={handleClose}>
            Cancel
          </div>
        </div>
        <div className={styles.body}>
          <img
            src="https://cobuild.ams3.cdn.digitaloceanspaces.com/community/ton/locked-nft.png?1"
            className={styles.image}
          />

          <div className={cn(styles.title)}>
            Your TON Collectible
            <br /> will be here
          </div>
          <div className={cn(styles.subtitle)}>
            Make all task done to receive it
          </div>
        </div>
      </motion.div>
    </div>
  )
}
