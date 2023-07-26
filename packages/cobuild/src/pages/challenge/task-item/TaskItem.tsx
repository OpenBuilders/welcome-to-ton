import { Task } from '@store'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon, ListItem } from 'open-twa'
import { useEffect, useState } from 'react'

import styles from './TaskItem.module.scss'

const transition = { ease: 'easeInOut', duration: 0.35 }
const variants = {
  initial: {
    position: 'absolute',
    opacity: 0,
    scale: 0,
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: { ease: 'easeInOut', duration: 0.35, delay: 0.3 },
  },
  exit: {
    scale: 0,
    opacity: 0,
    // position: 'initial',
    transition,
  },
}

function getIconByStatus(task: Task, completed: boolean): JSX.Element {
  const status = 'ready'
  let key = 'ready'

  let icon = (
    <Icon
      name={task.iconName}
      colorStroke={(task.iconStroke ? task.iconStroke : null) as any}
      colorFill={(task.iconFill ? task.iconFill : null) as any}
    />
  )

  if (task.locked) {
    key = 'locked'
    icon = <Icon name="LockOutline" colorFill="white" />
  }

  if (completed) {
    key = 'completed'
    icon = <Icon name="Checkmark" colorStroke="white" />
  }

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      key={key}
      variants={variants as any}
      className={styles.iconWrapper}
    >
      {icon}
    </motion.div>
  )
}

interface TaskItemProps {
  task: Task
  hasDivider?: boolean
  onClick(slug: string): void
}

export const TaskItem = ({ task, onClick }: TaskItemProps): JSX.Element => {
  const isDone = task.completed
  const isLocked = task.locked

  useEffect(() => {
    setIsTaskDoneInitial(!!isDone)
  }, [])

  useEffect(() => {
    setIsTaskDone(!!isDone)
  }, [isDone])

  const [isTaskDone, setIsTaskDone] = useState(false)
  const [isTaskLocked, setIsTaskLocked] = useState(false)
  const [isTaskDoneInitial, setIsTaskDoneInitial] = useState(false)

  const icon = getIconByStatus(task, task.completed as boolean)

  return (
    <div
      className={cn(
        styles.root,
        isTaskDone && styles.taskDone,
        isLocked && styles.taskLocked
      )}
    >
      <div className={cn(styles.icon)}>
        <AnimatePresence initial={false} mode="sync">
          {icon}
        </AnimatePresence>
      </div>
      <ListItem
        key={task.id}
        title={
          <div
            className={cn(
              styles.title,
              isTaskDone && styles.done,
              isTaskDoneInitial && styles.doneInitial
            )}
          >
            {task.title}
          </div>
        }
        footer={task.subTitle ? task.subTitle : undefined}
        type="link"
        large
        onClick={() => onClick(task?.slug as string)}
        hasDivider={false}
        hasRipple={false}
      />
    </div>
  )
}
