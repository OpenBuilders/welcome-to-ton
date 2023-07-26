import cx from 'classnames'

import { ReactNode } from 'react'

import styles from './Badge.module.scss'
import { BadgeColor } from './types'

interface BadgeProps {
  color?: BadgeColor
  children?: ReactNode
  className?: string
}

export const Badge = ({
  className,
  children,
  color = 'gray',
  ...rest
}: BadgeProps): JSX.Element => {
  return (
    <span className={cx(styles.root, styles[color], className)} {...rest}>
      {children}
    </span>
  )
}
