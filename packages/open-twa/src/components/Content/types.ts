export type ContentPadding =
  | '0'
  | '6-body'
  | '6-0'
  | '12-0'
  | '14-16'
  | '16-0'
  | '10'
  | '16'
export type ContentMargin =
  | '0-0-10-0'
  | '0-0-16-0'
  | '0-0-4-0'
  | '0-0-8-0'
  | '8-0-0-0'
  | '12-0-0-0'
export type ContentSpacingBottom = '4' | '8'

export type FlexAlignItems = 'start' | 'end' | 'center' | 'stretch' | 'between'
export type FlexAlignSelf = 'start' | 'end'
export type FlexJustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'between'
export type FlexDirection = 'row' | 'column'
export type FlexGrow = 0 | 1 | 2
export type FlexShrink = 0 | 1 | 2
export type FlexBasis = 0 | 'auto' | string
export type FlexWrap = 'nowrap' | 'wrap'

export interface FlexboxAttributes {
  direction?: FlexDirection
  align?: FlexAlignItems
  alignSelf?: FlexAlignSelf
  justify?: FlexJustifyContent
  grow?: boolean | FlexGrow
  shrink?: boolean | FlexShrink
  wrap?: FlexWrap
}

export type BorderRadius = '0' | '8' | '12' | '13'
export type Background = 'primary' | 'secondary' | 'light-green'
export type ContentSpacingChild = '2' | '4' | '8' | '12'

export type BorderColor = 'separator'
