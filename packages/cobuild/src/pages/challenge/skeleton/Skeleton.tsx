import cn from 'classnames'
import { motion } from 'framer-motion'

import styles from './Skeleton.module.scss'

const transition = { ease: 'easeInOut', duration: 0.3 }
const variants = {
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

export const Skeleton = (): JSX.Element => {
  const hasPadding =
    window.Telegram.WebApp.platform === 'macos' ||
    window.Telegram.WebApp.platform === 'unknown'

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      key="skeleton"
      className={cn(styles.root, hasPadding && styles.padding)}
      variants={variants as any}
    >
      <div className={styles.image} />
      <div className={cn(styles.line, styles.line50, styles.mb28)} />
      <div className={cn(styles.line, styles.line40, styles.mb28)} />
      <div className={cn(styles.line, styles.mb16)} />
      <div className={cn(styles.line, styles.mb16)} />
      <div className={cn(styles.line, styles.mb16)} />
      <div className={cn(styles.line, styles.line20, styles.mb48)} />
      <div className={cn(styles.line, styles.line40, styles.mb16)} />
      <div className={styles.listItem}>
        <div className={styles.listItemMedia} />
        <div className={styles.listItemLine} />
      </div>
      <div className={styles.listItem}>
        <div className={styles.listItemMedia} />
        <div className={styles.listItemLine} />
      </div>
      <div className={styles.listItem}>
        <div className={styles.listItemMedia} />
        <div className={styles.listItemLine} />
      </div>
    </motion.div>
  )
}
