import cx from 'classnames'
import { ReactNode } from 'react'

import styles from './Actions.module.scss'

interface ActionGroupProps {
  children: ReactNode
  className?: string
  title?: string
}

export function ActionGroup({
  className,
  children,
  title,
}: ActionGroupProps): JSX.Element {
  return (
    <div className={cx(styles.actionGroup, className)}>
      {title ? <div className={styles.actionGroupTitle}>{title}</div> : null}
      {children}
    </div>
  )
}
