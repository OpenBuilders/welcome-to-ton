export type TextAlign = 'left' | 'center' | 'right'

export const TextTypes = [
  'paragraph-16',
  'paragraph-20',
  'title-16',
  'title-20',
  'title-24',
  'title-28',
  'header-32',
  'header-44',
] as const

export type TextType = typeof TextTypes[number]

export const TextSpacingsBottom = ['8', '12', '24', '32'] as const
export type TextSpacingBottom = typeof TextSpacingsBottom[number]

export type TextWeight =
  | 'extraBold'
  | 'bold'
  | 'semibold'
  | 'medium'
  | 'regular'
  | 'light'

export const TextColors = ['primary', 'secondary', 'tertiary'] as const
export type TextColor = typeof TextColors[number]
