export type IconColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'telegram'
  | 'white'
export type IconSize = '30' | '40'
export type StyleMapObj<T extends string | number> = Partial<
  Record<T, string | undefined>
>
