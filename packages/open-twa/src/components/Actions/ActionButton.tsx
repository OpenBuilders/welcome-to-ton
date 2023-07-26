import cx from 'classnames'
import { ReactNode } from 'react'

import styles from './Actions.module.scss'

interface ActionButtonProps {
  children: ReactNode
  className?: string
  onClick?(): void
  destructive?: boolean
}

export function ActionButton({
  className,
  children,
  onClick,
  destructive,
}: ActionButtonProps): JSX.Element {
  return (
    <button
      className={cx(
        styles.button,
        className,
        destructive && styles.destructive
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
