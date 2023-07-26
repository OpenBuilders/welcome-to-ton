import cx from 'classnames'
import { ReactNode } from 'react'

import styles from './Dialog.module.scss'

interface DialogButtonProps {
  children: ReactNode
  className?: string
  onClick(): void
}

export function DialogButton({
  className,
  children,
  onClick,
}: DialogButtonProps): JSX.Element {
  return (
    <button className={cx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  )
}
