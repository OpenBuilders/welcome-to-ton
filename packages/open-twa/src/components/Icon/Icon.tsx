import clsx from 'classnames'
import React, { CSSProperties } from 'react'

import styles from './Icon.module.scss'
import * as svgs from './library'
import { IconColor, IconSize } from './types'

const normalizeName = (name: string): string => {
  return name
    .split('-')
    .map((n) => `${n.charAt(0).toUpperCase()}${n.slice(1)}`)
    .join('')
}

interface IconProps {
  colorStroke?: IconColor
  colorFill?: IconColor
  color?: IconColor
  name?: string
  src?: () => JSX.Element
  size?: IconSize
  className?: string
  isDisabled?: boolean
  width?: string
  height?: string
  style?: CSSProperties
}

// const iconsContext = require.context('../../assets/icons/', true, /svg$/)

export function Icon({
  colorStroke,
  colorFill,
  color = 'primary',
  name,
  width,
  height,
  className,
  isDisabled,
  style,
  src,
  size,
  ...rest
}: IconProps): JSX.Element {
  const classList = clsx(
    styles.root,
    size && styles[`size-${size}`],
    // color && libraryStyles[`color-${color}`],
    colorStroke && styles[`color-stroke-${colorStroke}`],
    colorFill && styles[`color-fill-${colorFill}`],
    className
  )

  const svgsAlias = svgs as any
  const svg = (name ? svgsAlias[normalizeName(name)] : src) as any

  return React.createElement(svg, {
    className: classList,
  })
}
