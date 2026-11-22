import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ArrowIcon } from './ArrowIcon'
import { DeviceFrame } from './DeviceFrame'
import { Reveal } from './Reveal'

type Props = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: Props) {
  const cover = project.screenshots[0]

  return (
    <Reveal>
      <article className="project-card">
        <Link className="project-card__link" to={`/work/${project.slug}`}>
          <div className="project-card__top">
            <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
            <span className="project-card__industry">{project.industry}</span>
          </div>
          <div className="project-card__media">
            <DeviceFrame src={cover.src} alt={cover.alt} shape={project.shape} fit="cover" />
          </div>
          <div className="project-card__body">
            <h3>{project.name}</h3>
            <p className="project-card__tagline">{project.tagline}</p>
            <span className="card-link">
              Read case study <ArrowIcon direction="up-right" />
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  )
}
