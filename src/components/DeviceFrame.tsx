import type { AppShape } from '../data/projects'

type Props = {
  src: string
  alt: string
  shape: AppShape
  fit?: 'contain' | 'cover'
  loading?: 'eager' | 'lazy'
}

export function DeviceFrame({ src, alt, shape, fit = 'contain', loading = 'lazy' }: Props) {
  const classes = `device-frame device-frame--${shape}${fit === 'cover' ? ' device-frame--cover' : ''}`

  return (
    <div className={classes}>
      <img src={src} alt={alt} loading={loading} decoding="async" />
    </div>
  )
}
