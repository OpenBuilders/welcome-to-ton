import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

// transform: `translateX(calc(${index} * 100% + ${index} * ${between}))`,
// width: `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`,

import styles from './Tabs.module.scss'

interface TabsProps {
  className?: string
  fullWidth?: boolean
  children: React.ReactNode
  activeIndex: number
  onChange(newIndex: number): void
}

export function Tabs({
  onChange,
  children: childrenProp,
  className,
  activeIndex,
}: TabsProps): JSX.Element {
  const handleClick = (index: number) => {
    onChange(index)
  }

  const [activeStyle, setActiveStyle] = useState({
    transform: '',
    width: '',
  })

  const children = React.Children.map(childrenProp, (child, index) => {
    return React.cloneElement(child as any, {
      index,
      activeIndex,
      onClick: handleClick,
    })
  })

  const between = '4px'
  const padding = '2px'
  const buttonsLength = children ? children.length : 0

  useEffect(() => {
    setActiveStyle({
      transform: `translateX(calc(${activeIndex} * 100% + ${activeIndex} * ${between}))`,
      width: `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`,
    })
  }, [activeIndex])

  return (
    <div className={classNames(styles.root, className)}>
      {children}
      <div className={styles.activeBar} style={activeStyle}></div>
    </div>
  )
}

Tabs.displayName = 'Tabs'

interface TabProps {
  className?: string
  label: string
  onClick?: (index: number) => void
  index?: number
  activeIndex?: number
}

export const Tab = ({
  label,
  onClick,
  index,
  className,
  activeIndex,
}: TabProps): JSX.Element => {
  const handleClick = (index: number) => onClick && onClick(index)
  const isActiveTab = activeIndex === index

  return (
    <button
      className={classNames(
        styles.tabButton,
        isActiveTab && styles.isActive,
        className && className
      )}
      onClick={() => handleClick(index ? index : 0)}
      type="button"
      role="tab"
      aria-selected="false"
      tabIndex={-1}
    >
      {label}
    </button>
  )
}

Tab.displayName = 'Tab'

interface TabPanelProps {
  className?: string
  value: number
  index: number
  children: React.ReactNode
}

export const TabPanel = ({
  children,
  value,
  index,
  className,
}: TabPanelProps): JSX.Element | null => {
  const isActiveTab = value === index

  return (
    <div
      className={classNames(
        styles.tabPanel,
        isActiveTab && styles.tabPanelActive,
        className && className
      )}
    >
      {isActiveTab ? children : null}
    </div>
  )
}

TabPanel.displayName = 'TabPanel'
