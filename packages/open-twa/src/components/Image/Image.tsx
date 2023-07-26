import classNames from 'classnames'
import React, { forwardRef } from 'react'

import styles from './Image.module.scss'

export type ImageProps = {
  src?: string
  className?: string
  lazy?: boolean
  onLoad?: (e?: unknown) => void
  size?: '24' | '30' | '40' | '92' | '100%'
  asDataSrc?: boolean
  skeleton?: boolean
  rounded?: boolean
  width?: string
  height?: string
  minHeight?: string
  borderRadius?: string
}

export const Image = forwardRef<
  HTMLImageElement,
  ImageProps & React.ImgHTMLAttributes<HTMLImageElement>
>(
  (
    {
      src,
      className,
      alt = ' ',
      lazy,
      size,
      width,
      height,
      minHeight,
      asDataSrc,
      borderRadius,
      rounded,
      skeleton,
    },
    ref
  ) => {
    const asPlaceholder = !src && !asDataSrc
    const Component = asPlaceholder ? 'div' : 'img'

    return (
      <Component
        src={asDataSrc ? undefined : src}
        data-src={asDataSrc ? src : undefined}
        className={classNames(
          styles.root,
          size && styles[`size-${size}`],
          rounded && styles.rounded,
          skeleton && styles.skeleton,
          className && className
        )}
        alt={alt}
        ref={ref}
        loading={lazy ? 'lazy' : undefined}
        style={{
          width,
          height,
          minHeight,
          borderRadius,
        }}
      />
    )
  }
)
