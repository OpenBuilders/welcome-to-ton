import cn from 'classnames'
import React, { useMemo } from 'react'

import styles from './TextList.module.scss'

interface TextListProps {
  children: React.ReactNode
  className?: string
  styleType?: 'decimal'
}

export const TextList = ({
  children: childrenProp,
  className,
  styleType,
}: TextListProps): JSX.Element => {
  const children = useMemo(() => {
    return React.Children.map(childrenProp, (child, index) => {
      const item = child as any

      const clonedItem = React.cloneElement(item, {
        index,
      })

      return <li>{clonedItem}</li>
    })
  }, [childrenProp])

  return (
    <ul
      className={cn(
        styles.root,
        className && className,
        styleType && styles[`style-type-${styleType}`]
      )}
    >
      {children}
    </ul>
  )
}
