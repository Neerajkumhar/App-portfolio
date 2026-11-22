import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { ArrowIcon } from './ArrowIcon'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-mark">
          <p>
            {site.name}
            <br />
            Interface studies, 2026.
          </p>
        </div>
        <div className="footer-column">
          <p className="footer-column__label">Contact</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div className="footer-column">
          <p className="footer-column__label">Navigate</p>
          <Link className="footer-link" to="/#work">
            All work <ArrowIcon direction="up-right" />
          </Link>
        </div>
        <p className="footer-note">
          Screenshots belong to their respective owners and are used here as reference material.
        </p>
      </div>
    </footer>
  )
}
