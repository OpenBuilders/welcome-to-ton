import cx from 'classnames'
import { ReactNode } from 'react'

import { Icon } from '../Icon'
import { getComponentByType } from './helpers'
import styles from './ListItem.module.scss'
import { ListType } from './types'

interface ListItemProps {
  title: ReactNode
  type?: ListType
  before?: ReactNode
  after?: ReactNode
  className?: string
  hasDivider?: boolean
  hasRipple?: boolean
  href?: string
  to?: string
  target?: '_blank'
  header?: ReactNode
  footer?: ReactNode
  active?: boolean
  hideChevron?: boolean
  large?: boolean
  onClick?: () => void
}

export function ListItem({
  className,
  title,
  hasDivider = true,
  hasRipple = true,
  type = 'text',
  href,
  to = '',
  before,
  after,
  header,
  footer,
  active,
  hideChevron,
  large,
  target,
  onClick,
}: ListItemProps): JSX.Element {
  const theme = 'light'
  const hasLink = type === 'link'

  const Component = getComponentByType(type)

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <Component
      className={cx(
        styles.root,
        className,
        styles[theme],
        styles[type],
        hasRipple && styles.hasRipple,
        large && styles.large
      )}
      {...(to ? { href: to, target } : {})}
      onClick={handleClick}
    >
      {before ? <div className={styles.before}>{before}</div> : null}

      <div
        className={cx(styles.innerContent, hasDivider && styles.withDivider)}
      >
        <div className={styles.content}>
          {header ? <div className={styles.header}>{header}</div> : null}
          <div className={styles.title}>{title}</div>
          {footer ? <div className={styles.footer}>{footer}</div> : null}
        </div>

        {after ? <div className={styles.after}>{after}</div> : null}
        {active ? <Icon name="checkmark" className={styles.checkmark} /> : null}
        {hasLink && !hideChevron ? (
          <Icon name="chevron-right" className={styles.chevron} />
        ) : null}
      </div>
    </Component>
  )
}
