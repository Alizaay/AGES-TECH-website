import PropTypes from 'prop-types'
import ProjectCard from './ProjectCard'

const BoxesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="M3.3 7L12 12l8.7-5M12 22V12"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
)

/**
 * Ecosystem project selector bar — cards only (no arrow controls).
 * Responsive: scroll-snap row on mobile, 2-col tablet, 4-col desktop.
 */
const ProjectNavigation = ({ projects, activeId, onSelect, ecosystem }) => {
  return (
    <div className="rounded-2xl border border-[#E8EEF5] bg-[#F7F9FC] p-4 sm:p-5 md:p-6 lg:p-7">
      <div className="flex flex-col gap-5 md:gap-6 xl:flex-row xl:items-center xl:gap-8">
        <div className="flex shrink-0 items-start gap-3 xl:max-w-[220px]">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#0A1B3D] text-white sm:size-11">
            <BoxesIcon />
          </span>
          <div className="min-w-0">
            <p className="font-primary text-xs font-bold uppercase tracking-wide text-[#0A1B3D] sm:text-sm">
              {ecosystem.title}
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-[#6B7A8A] sm:text-xs">
              {ecosystem.subtitle}
            </p>
          </div>
        </div>

        {/* Mobile: horizontal snap scroll · Tablet+: responsive grid */}
        <div
          className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:mx-0 sm:grid sm:flex-1 sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 sm:snap-none xl:grid-cols-4 [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Product ecosystem"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[min(78vw,280px)] shrink-0 snap-start sm:w-auto sm:min-w-0"
            >
              <ProjectCard
                project={project}
                isActive={project.id === activeId}
                onSelect={onSelect}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

ProjectNavigation.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeId: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  ecosystem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProjectNavigation
