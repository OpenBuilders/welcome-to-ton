import classNames from 'classnames'
import React from 'react'

import styles from './Content.module.scss'
import {
  Background,
  BorderColor,
  BorderRadius,
  ContentMargin,
  ContentPadding,
  ContentSpacingBottom,
  ContentSpacingChild,
  FlexboxAttributes,
} from './types'

export type ActionBaseProps = {
  onClick?: () => void
  onMouseOver?: () => void
  onMouseLeave?: () => void
  onMouseEnter?: () => void
  onMouseOut?: () => void
}

export interface ContentProps extends FlexboxAttributes, ActionBaseProps {
  as?: React.ElementType
  children?: React.ReactNode
  className?: string
  padding?: ContentPadding
  margin?: ContentMargin
  spacingBottom?: ContentSpacingBottom
  row?: boolean
  column?: boolean
  shadow?: boolean
  fullWidth?: boolean
  borderRadius?: BorderRadius
  background?: Background
  spacingChild?: ContentSpacingChild
  borderColor?: BorderColor
}

export const Content = React.forwardRef(
  (
    {
      as: Component = 'div',
      children,
      className,
      padding = '0',
      margin,
      align,
      alignSelf,
      justify,
      grow = false,
      row,
      column,
      spacingBottom,
      wrap,
      background,
      spacingChild,
      shadow,
      fullWidth,
      borderRadius,
      borderColor,
      ...rest
    }: ContentProps,
    ref
  ) => {
    const direction = row === true ? 'row' : column === true ? 'column' : 'row'
    const spacingDirection =
      direction === 'row' ? 'spacing-child-right' : 'spacing-child-bottom'

    return (
      <Component
        className={classNames(
          className,
          padding && styles[`padding-${padding}`],
          margin && styles[`margin-${margin}`],
          spacingBottom && styles[`spacing-bottom-${spacingBottom}`],
          direction && styles[`direction-${direction}`],
          grow && styles[`grow-${Number(grow)}`],
          justify && styles[`justify-${justify}`],
          align && styles[`align-${align}`],
          alignSelf && styles[`align-self-${alignSelf}`],
          wrap && styles.wrap,
          borderRadius && styles[`border-radius-${borderRadius}`],
          borderColor && styles[`border-color-${borderColor}`],
          background && styles[`background-${background}`],
          spacingChild && styles[`${spacingDirection}-${spacingChild}`],
          shadow && styles.shadow,
          fullWidth && styles.fullWidth
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)
