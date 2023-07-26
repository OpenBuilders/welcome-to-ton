import cx from 'classnames'
import { ReactNode } from 'react'

import styles from './Dialog.module.scss'

interface DialogProps {
  title: string
  onClose?(): void
  content?: ReactNode
  opened?: boolean
  className?: string
  buttons?: ReactNode[]
}

export function Dialog({
  className,
  title,
  content,
  opened,
  onClose,
  buttons,
}: DialogProps): JSX.Element {
  return (
    <>
      <div
        className={cx(styles.backdrop, opened && styles.opened)}
        onClick={onClose}
      />

      <div className={cx(styles.dialog, className, opened && styles.opened)}>
        <div className={styles.body}>
          <div className={styles.title}>{title}</div>
          {content ? <div className={styles.content}>{content}</div> : null}
        </div>
        {buttons ? <div className={styles.buttons}>{buttons}</div> : null}
      </div>
    </>
  )
}
