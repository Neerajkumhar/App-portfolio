import { useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from 'react'
import type { ProjectScreenshot } from '../data/projects'
import { ArrowIcon } from './ArrowIcon'

type Props = {
  screenshots: ProjectScreenshot[]
  owner: string
}

export function Gallery({ screenshots, owner }: Props) {
  const [active, setActive] = useState(0)
  const touchX = useRef<number | null>(null)

  useEffect(() => {
    setActive(0)
  }, [screenshots])

  const go = (next: number) => {
    setActive((next + screenshots.length) % screenshots.length)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(active + 1)
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(active - 1)
    }
  }

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchX.current = event.touches[0].clientX
  }

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchX.current === null) return
    const delta = event.changedTouches[0].clientX - touchX.current
    if (Math.abs(delta) > 48) go(active + (delta < 0 ? 1 : -1))
    touchX.current = null
  }

  const current = screenshots[active]

  return (
    <div
      className="gallery"
      role="group"
      aria-label="Reference screenshots"
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="store-gallery">
        <div className="store-gallery__preview" key={current.src}>
          <img src={current.src} alt={current.alt} loading="eager" decoding="async" />
        </div>

        <div className="store-gallery__bar">
          <div>
            <p className="store-gallery__label">Screenshot {String(active + 1).padStart(2, '0')}</p>
            <p className="store-gallery__caption">{current.caption}</p>
          </div>
          <div className="store-gallery__nav">
            <button
              type="button"
              className="icon-button"
              onClick={() => go(active - 1)}
              aria-label="Previous screenshot"
            >
              <ArrowIcon direction="left" />
            </button>
            <span className="gallery__count" aria-live="polite">
              {String(active + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="icon-button"
              onClick={() => go(active + 1)}
              aria-label="Next screenshot"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div className="store-gallery__thumbs" role="group" aria-label="Choose a screenshot">
          {screenshots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              className="store-thumb"
              aria-pressed={index === active}
              aria-label={`Show screenshot ${index + 1}: ${shot.caption}`}
              onClick={() => setActive(index)}
            >
              <img src={shot.src} alt="" loading="lazy" decoding="async" />
              <span className="store-thumb__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="credit">
        Screenshots:{' '}
        <a href={current.sourceUrl} target="_blank" rel="noreferrer">
          {current.sourceName}
        </a>{' '}
        — © {owner}. Used as reference material for this study.
      </p>
    </div>
  )
}
