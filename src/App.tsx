import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { CaseStudy } from './pages/CaseStudy'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  )
}
