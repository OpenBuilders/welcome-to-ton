export const ListTypes = [
  'basic',
  'solid',
  'inset'
] as const
export type ListType = (typeof ListTypes)[number]