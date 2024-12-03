'use client'

import React from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

type CustomImageProps = {
  src: string
  alt?: string
  quality?: number
  sizes?: string
  fill?: boolean
  className?: React.CSSProperties
} & Omit<NextImageProps, 'src' | 'alt' | 'style' | 'sizes' | 'fill' | 'quality'>

export const Image: React.FC<CustomImageProps> = ({
  src,
  alt = '',
  quality = 50,
  sizes = '(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px',
  fill = true,
  className,
  ...props
}) => {
  return (
    <div className={`relative w-full aspect-[1/1] ${className}`}>
      <NextImage
        src={src || '/images/no-image.jpg'}
        alt={alt || src}
        quality={quality}
        sizes={sizes}
        fill={fill}
        className="object-cover object-center"
        {...props}
      />
    </div>
  )
}
