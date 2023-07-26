import cx from 'classnames'
import { ReactNode, useState } from 'react'

import styles from './ListInput.module.scss'

interface ListInputProps {
  placeholder?: string
  className?: string
  hasDivider?: boolean
  clearButton?: boolean
  value?: string
  type?: string
  details?: string
  label?: string
  before?: ReactNode
}

export function ListInput({
  className,
  placeholder,
  hasDivider = false,
  value: valueProp,
  type = 'text',
  clearButton = false,
  details,
  label,
  before,
}: ListInputProps): JSX.Element {
  const [value, setValue] = useState(valueProp ?? '')

  const handleChange = (newValue: string) => {
    setValue(newValue)
  }

  const handleClear = () => setValue('')
  const Element = type === 'textarea' ? 'textarea' : 'input'
  const hasClearButton = type !== 'textarea' && clearButton

  return (
    <div className={cx(styles.root, className)}>
      {before ? <div className={styles.before}>{before}</div> : null}
      <div className={cx(styles.inner, hasDivider && styles.withDivider)}>
        {label ? <div className={styles.label}>{label}</div> : null}
        <div className={styles.inputWrapper}>
          <Element
            className={styles.control}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
          {hasClearButton ? (
            <div
              className={cx(styles.clearButton, value && styles.visible)}
              onClick={handleClear}
            >
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.5 17.5C13.1944 17.5 17 13.6943 17 9C17 4.30566 13.1944 0.5 8.5 0.5C3.80557 0.5 0 4.30566 0 9C0 13.6943 3.80557 17.5 8.5 17.5ZM12.2657 5.23438C12.5781 5.54663 12.5781 6.05322 12.2657 6.36572L9.63138 9L12.2657 11.6343C12.5781 11.9468 12.5781 12.4534 12.2657 12.7656C11.9533 13.0781 11.4467 13.0781 11.1343 12.7656L8.5 10.1313L5.86569 12.7656C5.55328 13.0781 5.04675 13.0781 4.73431 12.7656C4.42191 12.4534 4.42191 11.9468 4.73431 11.6343L7.36862 9L4.73431 6.36572C4.42191 6.05322 4.42191 5.54663 4.73431 5.23438C5.04672 4.92188 5.55325 4.92188 5.86569 5.23438L8.5 7.86865L11.1343 5.23438C11.4467 4.92188 11.9533 4.92188 12.2657 5.23438Z"
                  fill="#8E8E93"
                />
              </svg>
            </div>
          ) : null}
        </div>
        {details ? <div className={styles.details}>{details}</div> : null}
      </div>
    </div>
  )
}
