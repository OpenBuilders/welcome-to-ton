import cx from 'classnames'

import styles from './ListItemIndex.module.scss'

interface ListItemIndexProps {
  index: string | number
  color?: 'accent' | 'tertiary'
}

export function ListItemIndex({
  index,
  color,
}: ListItemIndexProps): JSX.Element {
  return (
    <div className={cx(styles.root, color && styles[`color-${color}`])}>
      {index}
    </div>
  )
}
