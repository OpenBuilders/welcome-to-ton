import cn from 'classnames'

import { ReactNode } from 'react'

import styles from './Page.module.scss'

interface PageProps {
  children?: ReactNode
  className?: string
  fullSpace?: boolean
}

export const Page = ({
  className,
  children,
  fullSpace,
  ...rest
}: PageProps): JSX.Element => {
  const hasPadding =
    window?.Telegram?.WebApp?.platform === 'macos' ||
    window?.Telegram?.WebApp?.platform === 'android' ||
    window?.Telegram?.WebApp?.platform === 'unknown'

  return (
    <div
      className={cn(
        styles.root,
        fullSpace && styles.fullSpace,
        hasPadding && styles.topPadding,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
