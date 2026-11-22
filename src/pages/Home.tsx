import { useMemo, useState } from 'react'
import { ArrowIcon } from '../components/ArrowIcon'
import { DeviceFrame } from '../components/DeviceFrame'
import { FilterBar } from '../components/FilterBar'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { projects, type Filter } from '../data/projects'
import { site } from '../data/site'

const aboutImage = `${import.meta.env.BASE_URL}About-img.png`

const steps = [
  {
    number: '01',
    title: 'Read the real product',
    detail: 'Use the store listing and public docs to understand what the app actually does.',
  },
  {
    number: '02',
    title: 'Pick the core job',
    detail: 'Name the one thing the interface must make easy, and the friction around it.',
  },
  {
    number: '03',
    title: 'Rebuild the interface',
    detail: 'Design and implement the key screens as frontend work, with the original images kept as reference.',
  },
]

const capabilities = [
  'React',
  'TypeScript',
  'Component design',
  'Responsive layout',
  'State and routing',
  'Accessibility',
]

export function Home() {
  const [active, setActive] = useState<Filter>('All')
  const visibleProjects = useMemo(
    () => (active === 'All' ? projects : projects.filter((project) => project.industry === active)),
    [active],
  )

  return (
    <>
      <section className="hero" id="top">
        <div className="shell hero__grid">
          <Reveal className="hero__copy">
            <p className="eyebrow">Interface studies · 2026</p>
            <h1>{site.name}</h1>
            <p className="hero__role">{site.role}</p>
            <p className="hero__intro">
              Five real, little-known apps. Five industries. One frontend case study for each.
            </p>
            <div className="hero__proof" aria-label="Portfolio scope">
              <div>
                <strong>05</strong>
                <span>Apps studied</span>
              </div>
              <div>
                <strong>05</strong>
                <span>Industries covered</span>
              </div>
              <div>
                <strong>25</strong>
                <span>Reference screens</span>
              </div>
            </div>
            <div className="actions">
              <a className="button button--primary" href="#work">
                View work <ArrowIcon direction="right" />
              </a>
              <a className="button" href="#contact">
                Contact
              </a>
            </div>
          </Reveal>

          <Reveal className="hero__visual">
            <div className="hero__visual-head">
              <span>Selected reference screens</span>
              <span>01—03</span>
            </div>
            <div className="hero__strip">
              {projects.slice(0, 3).map((project) => (
                <DeviceFrame
                  key={project.slug}
                  shape={project.shape}
                  src={project.screenshots[0].src}
                  alt={`${project.name} reference screenshot`}
                  fit="cover"
                  loading="eager"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="work">
        <div className="shell">
          <Reveal className="section-head">
            <p className="eyebrow">01 / Selected work</p>
            <h2>Five apps, five different jobs.</h2>
            <p className="note">
              These are interface studies, not client work. Screenshots show the original apps and
              are credited on each case study.
            </p>
          </Reveal>
          <FilterBar active={active} onChange={setActive} />
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={projects.indexOf(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="approach">
        <div className="shell">
          <Reveal className="section-head">
            <p className="eyebrow">02 / Approach</p>
            <h2>Read it. Reduce it. Rebuild it.</h2>
          </Reveal>
          <div className="steps">
            {steps.map((step) => (
              <Reveal key={step.number} className="step">
                <span className="step__num">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--about" id="about">
        <div className="shell about-grid">
          <Reveal className="about-visual">
            <img
              src={aboutImage}
              alt="Warm-toned VISUARK brand visual"
              width={2353}
              height={1669}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <div className="about-content">
            <Reveal className="about-heading">
              <p className="eyebrow">03 / About</p>
              <h2>Frontend work with the reasoning left in.</h2>
            </Reveal>
            <Reveal className="about-copy">
              <p>
                We build interfaces in React and TypeScript and care about the unglamorous parts:
                state that stays predictable, markup that works with a keyboard, and layouts that
                survive a small screen.
              </p>
              <p>{site.bio}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="capabilities">
        <div className="shell">
          <Reveal className="section-head">
            <p className="eyebrow">04 / Capabilities</p>
            <h2>What these studies exercise.</h2>
          </Reveal>
          <Reveal>
            <ul className="tag-list">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="shell">
          <Reveal className="contact-card">
            <div className="contact-card__heading">
              <p className="eyebrow">05 / Contact</p>
              <h2>Let's talk about the next interface.</h2>
            </div>
            <div className="contact-card__body">
              <a className="contact-email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <ul className="profile-list">
                {site.profiles.map((profile) => (
                  <li key={profile.label}>
                    <a href={profile.href}>
                      {profile.label} <ArrowIcon direction="up-right" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
