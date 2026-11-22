import { Link, useParams } from 'react-router-dom'
import { ArrowIcon } from '../components/ArrowIcon'
import { Gallery } from '../components/Gallery'
import { Reveal } from '../components/Reveal'
import { getProject, projects } from '../data/projects'
import { NotFound } from './NotFound'

export function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <NotFound />

  const index = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="case-study">
      <header className="case-header shell">
        <div className="case-header__top">
          <Link className="back-link" to="/">
            <ArrowIcon direction="left" /> All work
          </Link>
          <span className="study-label">Interface study — UI &amp; frontend</span>
        </div>
        <div className="case-header__identity">
          <div className="case-header__icon">
            <img src={project.icon.src} alt={project.icon.alt} loading="eager" decoding="async" />
          </div>
          <div className="case-header__identity-copy">
            <p className="eyebrow">
              {project.industryDetail} · {project.year}
            </p>
            <h1>{project.name}</h1>
            <p className="case-header__tagline">{project.tagline}</p>
          </div>
        </div>
        <div className="case-header__links">
          <a className="text-link" href={project.productUrl} target="_blank" rel="noreferrer">
            {project.productLabel} <ArrowIcon direction="up-right" />
          </a>
          <p className="case-header__icon-credit">
            Icon:{' '}
            <a href={project.icon.sourceImageUrl} target="_blank" rel="noreferrer">
              {project.icon.sourceName}
            </a>{' '}
            — © {project.creditOwner}
          </p>
        </div>
      </header>

      <div className="shell">
        <Reveal className="prose-block">
          <p className="eyebrow">00 / Overview</p>
          <h2>Why this app.</h2>
          <p>{project.overview}</p>
        </Reveal>

        <section className="case-section" id="screens">
          <Reveal className="section-head">
            <p className="eyebrow">01 / Screens</p>
            <h2>The reference images.</h2>
          </Reveal>
          <Gallery screenshots={project.screenshots} owner={project.creditOwner} />
        </section>

        <section className="case-section">
          <Reveal className="prose-block">
            <p className="eyebrow">02 / Problem</p>
            <h2>The job the real app does.</h2>
            <p>{project.problem}</p>
          </Reveal>
        </section>

        <section className="case-section">
          <Reveal className="section-head">
            <p className="eyebrow">03 / What I studied</p>
            <h2>Screens and interactions, named.</h2>
          </Reveal>
          <div className="detail-list">
            {project.studied.map((item, itemIndex) => (
              <Reveal key={item.title} className="detail-item">
                <article>
                  <span className="detail-item__num">{String(itemIndex + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="case-section">
          <Reveal className="section-head">
            <p className="eyebrow">04 / Decisions</p>
            <h2>Calls made in the rebuild.</h2>
          </Reveal>
          <div className="detail-list">
            {project.decisions.map((item, itemIndex) => (
              <Reveal key={item.title} className="detail-item">
                <article>
                  <span className="detail-item__num">{String(itemIndex + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      <section className="next-block">
        <div className="shell next-block__inner">
          <Reveal>
            <p className="eyebrow">05 / Learnings and next</p>
            <h2>{project.learnings}</h2>
          </Reveal>
          <Reveal>
            <Link className="button button--primary" to={`/work/${next.slug}`}>
              Next: {next.name} <ArrowIcon direction="right" />
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  )
}
