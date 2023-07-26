import cx from 'classnames'
import { ReactNode } from 'react'

import styles from './Section.module.scss'
import { SectionPadding, SectionType } from './types'

interface SectionProps {
  type?: SectionType
  children?: ReactNode
  className?: string
  padding?: SectionPadding
}

export function Section({
  className,
  children,
  type = 'basic',
  padding,
}: SectionProps): JSX.Element {
  return (
    <div
      className={cx(
        styles.root,
        className,
        styles[type],
        padding && styles[`padding-${padding}`]
      )}
    >
      {children}
    </div>
  )
}
