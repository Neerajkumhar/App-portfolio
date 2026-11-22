import { filters, projects, type Filter } from '../data/projects'

type Props = {
  active: Filter
  onChange: (filter: Filter) => void
}

export function FilterBar({ active, onChange }: Props) {
  return (
    <div className="filters" role="group" aria-label="Filter projects by industry">
      {filters.map((filter) => {
        const count = filter === 'All' ? projects.length : projects.filter((project) => project.industry === filter).length

        return (
          <button
            key={filter}
            type="button"
            className="chip"
            aria-pressed={active === filter}
            onClick={() => onChange(filter)}
          >
            {filter}
            <span className="chip__count" aria-hidden="true">{String(count).padStart(2, '0')}</span>
          </button>
        )
      })}
    </div>
  )
}
