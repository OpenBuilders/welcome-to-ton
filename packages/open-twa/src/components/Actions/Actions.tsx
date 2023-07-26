import cx from 'classnames'
import { ReactNode } from 'react'

import styles from './Actions.module.scss'

interface ActionsProps {
  onClose?(): void
  opened?: boolean
  className?: string
  children?: ReactNode
}

export function Actions({
  children,
  className,
  opened,
  onClose,
}: ActionsProps): JSX.Element {
  return (
    <>
      <div
        className={cx(styles.backdrop, opened && styles.opened)}
        onClick={onClose}
      />

      <div className={cx(styles.root, className, opened && styles.opened)}>
        {children}
      </div>
    </>
  )
}
