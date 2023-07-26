import classNames from 'classnames'
import * as React from 'react'

import styles from './Text.module.scss'
import { TextAlign, TextColor, TextMargin, TextType, TextWeight } from './types'

interface TextProps {
  align?: TextAlign
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  color?: TextColor
  noWrap?: boolean
  type?: TextType
  uppercase?: boolean
  weight?: TextWeight
  margin?: TextMargin
  inset?: boolean
  sfRounded?: boolean
}

export const Text = ({
  as: Component = 'div',
  children,
  type = 'body',
  weight,
  color,
  noWrap,
  align,
  className,
  uppercase,
  margin,
  inset,
  sfRounded,
  ...rest
}: TextProps): JSX.Element => {
  const classList = classNames(
    styles.root,
    type && styles[`typeface-${type}`],
    align && styles[`align-${align}`],
    margin && styles[`margin-${margin}`],
    weight && styles[`weight-${weight}`],
    color && styles[`color-${color}`],
    sfRounded && styles.sfRounded,
    noWrap && styles.noWrap,
    uppercase && styles.uppercase,
    inset && styles.inset,
    className
  )

  return (
    <Component className={classList} {...rest}>
      {children}
    </Component>
  )
}
