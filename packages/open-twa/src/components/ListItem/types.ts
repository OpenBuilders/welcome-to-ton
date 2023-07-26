export const ListTypes = ['text', 'link', 'button', 'option-button'] as const
export type ListType = typeof ListTypes[number]
