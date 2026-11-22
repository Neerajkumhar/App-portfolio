import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site'

const links = [
  { label: 'Work', to: '/#work', index: '01' },
  { label: 'Approach', to: '/#approach', index: '02' },
  { label: 'About', to: '/#about', index: '03' },
  { label: 'Contact', to: '/#contact', index: '04' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)')
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    navRef.current?.querySelector('a')?.focus()

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className={`site-header${open ? ' site-header--open' : ''}`}>
      <div className="shell header-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            focusable="false"
          >
            {open ? <path d="M5 5 15 15M15 5 5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>

        <nav id="primary-nav" ref={navRef} className="primary-nav" aria-label="Primary">
          <div className="shell">
            <ul className="nav-list">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} onClick={() => setOpen(false)}>
                    <span className="nav-list__index" aria-hidden="true">
                      {link.index}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
