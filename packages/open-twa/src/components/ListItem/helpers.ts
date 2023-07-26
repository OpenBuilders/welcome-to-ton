import { ListType } from './types'

export function getComponentByType(
  type: ListType
): 'a' | 'button' | 'label' | 'div' {
  if (type === 'link') {
    return 'a'
  }

  if (type === 'button' || type === 'option-button') {
    return 'button'
  }

  return 'div'
}
