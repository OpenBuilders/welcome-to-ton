import cx from 'classnames'

import styles from './Toggle.module.scss'

interface ToggleProps {
  name?: string
  value?: string | number
  checked?: boolean
  disabled?: boolean
  readOnly?: boolean
  className?: string
  onChange(): void
}

export function Toggle({
  className,
  checked = false,
  name,
  value,
  disabled,
  readOnly,
  onChange,
}: ToggleProps): JSX.Element {
  return (
    <label className={cx(styles.root, checked && styles.checked, className)}>
      <input
        type="checkbox"
        name={name}
        value={value}
        className={styles.input}
        disabled={disabled}
        readOnly={readOnly}
        checked={checked}
        onChange={onChange}
      />
      <div className={styles.switch}>
        <div className={styles.handler} />
      </div>
    </label>
  )
}
