import styles from './IndexIcon.module.scss'

export const IndexIcon = ({
  index,
}: {
  index: string | number
}): JSX.Element => {
  return (
    <div className={styles.root}>
      <span>{index}</span>
    </div>
  )
}
