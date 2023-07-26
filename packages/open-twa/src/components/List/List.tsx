import cx from 'classnames'
import React, { ReactNode, useMemo } from 'react'

import styles from './List.module.scss'
import { ListType } from './types'

interface ListProps {
  type?: ListType
  children: ReactNode | ReactNode[]
  className?: string
}

export function List({
  className,
  children: childrenProp,
  type = 'basic',
}: ListProps): JSX.Element {
  const childrenLength = (childrenProp as any)?.length
    ? (childrenProp as any).length
    : 1

  const children = useMemo(() => {
    return React.Children.map(childrenProp, (child, index) => {
      const item = child as any

      return React.cloneElement(item, {
        index,
        hasDivider:
          item.props.hasDivider === false ? false : childrenLength > 1,
      })
    })
  }, [childrenProp])

  return (
    <div className={cx(styles.root, className, styles[type])}>{children}</div>
  )
}
