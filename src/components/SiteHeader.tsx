import { Link } from 'react-router-dom'
import { site } from '../data/site'

const links = [
  { label: 'Work', to: '/#work', index: '01' },
  { label: 'Approach', to: '/#approach', index: '02' },
  { label: 'About', to: '/#about', index: '03' },
  { label: 'Contact', to: '/#contact', index: '04' },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" to="/">
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>
                  <span className="nav-list__index" aria-hidden="true">{link.index}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
