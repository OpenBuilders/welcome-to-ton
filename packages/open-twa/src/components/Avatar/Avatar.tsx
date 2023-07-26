import classNames from 'classnames'

import styles from './Avatar.module.scss'

export type AvatarProps = {
  className?: string
  size?: '24' | '30'
}

export const Avatar = ({ className, size }: AvatarProps) => {
  // useWebApp((webApp: WebApp) => {
  //   console.log(webApp.initDataUnsafe.user)
  // })

  return (
    <div
      className={classNames(
        styles.root,
        size && styles[`size-${size}`],
        className && className
      )}
      // alt="User avatar"
    />
  )
}
