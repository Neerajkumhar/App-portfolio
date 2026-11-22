import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/ArrowIcon'

export function NotFound() {
  return (
    <section className="not-found">
      <div className="shell not-found__grid">
        <div>
          <p className="eyebrow">404 / Not found</p>
          <h1>That study is not here.</h1>
          <p className="note">The page you asked for does not exist in this portfolio.</p>
          <Link className="button button--primary" to="/">
            <ArrowIcon direction="left" /> Back to the work
          </Link>
        </div>
        <div className="not-found__mark" aria-hidden="true">
          <span>404</span>
        </div>
      </div>
    </section>
  )
}
