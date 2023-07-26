import { CarouselSlide } from '@store'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './Carousel.module.scss'

const transition = { ease: 'easeInOut', duration: 0 }

const variants = {
  initial: () => {
    return {
      opacity: 0,
    }
  },
  enter: {
    opacity: 1,
    transition,
  },
  exit: () => {
    return {
      opacity: 0,
      transition,
    }
  },
}

interface CarouselProps {
  locked?: boolean
  background?: string
  onPrev?(): void
  onNext?(): void
  currentStep: number
  slides?: CarouselSlide[]
}

export const Carousel = ({
  locked,
  currentStep,
  slides = [],
  background,
  onPrev = () => {},
  onNext = () => {},
}: CarouselProps): JSX.Element | null => {
  const slidesLength = slides.length
  const rootBackground = background

  const bars = []
  for (let i = 0; i < slidesLength; i++) {
    const isBarCompleted = !locked && i <= currentStep

    bars.push(
      <div
        className={cn(styles.bar, isBarCompleted && styles.barCompleted)}
        key={i}
      />
    )
  }

  return (
    <div
      className={cn(
        styles.root,
        !locked && rootBackground && styles[`bg-${rootBackground}`]
      )}
    >
      <>
        <div className={styles.leftHolder} onClick={onPrev} />
        <div className={styles.rightHolder} onClick={onNext} />
      </>

      <div className={styles.progressBar}>{bars}</div>
      <div className={styles.slides}>
        {locked ? (
          <div className={styles.slideWrap}>
            <div className={cn(styles.slide, styles['bg-style-locked'])}>
              <div
                className={cn(
                  styles.textBlock,
                  styles.textBlockLocked,
                  styles['text-position-center']
                )}
              >
                <div className={styles.eyes}>👀</div>
                There will be something interesting when you finish previous
                task
              </div>
            </div>
          </div>
        ) : null}

        {!locked ? (
          <AnimatePresence initial={false} mode="sync">
            {slides.map((s, i) => {
              return currentStep === i ? (
                <motion.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  key={`${i}${s.title}`}
                  className={styles.slideWrap}
                  variants={variants as any}
                >
                  <div
                    className={cn(
                      styles.slide,
                      s.background && styles[`bg-style-${s.background}`]
                    )}
                  >
                    <div
                      className={cn(
                        styles.textBlock,
                        s.contentPosition &&
                          styles[`content-position-${s.contentPosition}`]
                      )}
                    >
                      {s.subhead ? (
                        <div className={cn(styles.subheadLine)}>
                          {s.subhead}
                        </div>
                      ) : null}
                      {s.title ? (
                        <div className={cn(styles.title)}>{s.title}</div>
                      ) : null}
                      {s.text ? (
                        <div className={cn(styles.text)}>{s.text}</div>
                      ) : null}
                      {s.content ? (
                        <div className={cn(styles.content)}>{s.content}</div>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ) : null
            })}
          </AnimatePresence>
        ) : null}
      </div>
    </div>
  )
}
