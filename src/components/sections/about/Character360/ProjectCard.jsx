import PropTypes from 'prop-types'
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Settings2,
} from 'lucide-react'

const ECOSYSTEM_ICONS = {
  graduation: GraduationCap,
  heart: HeartPulse,
  building: Building2,
  gear: Settings2,
}

/**
 * Selectable project card in the ecosystem bar.
 * Active state matches Figma: white bg, blue border, blue status.
 */
const ProjectCard = ({ project, isActive, onSelect }) => {
  const Icon = ECOSYSTEM_ICONS[project.icon] || GraduationCap
  const statusLabel = project.status.toUpperCase()

  return (
    <button
      type="button"
      onClick={() => onSelect(project.id)}
      aria-pressed={isActive}
      aria-label={`${project.title}, ${project.status}`}
      className={`flex h-full w-full min-w-0 items-start gap-2.5 rounded-xl border bg-white p-3 text-left transition duration-200 sm:gap-3 sm:p-3.5 ${
        isActive
          ? 'border-[#2F80ED] shadow-[0_0_0_1px_rgba(47,128,237,0.15)]'
          : 'border-[#E8EEF5] hover:border-[#D6E0EA]'
      }`}
    >
      <span
        className={`flex size-9 shrink-0 items-center justify-center rounded-lg transition sm:size-10 ${
          isActive ? 'bg-[#EAF3FF] text-[#2F80ED]' : 'bg-[#F0F3F7] text-[#6B7A8A]'
        }`}
      >
        <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-bold text-[#0A1B3D] sm:text-sm">
          {project.title}
        </p>
        <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-[#6B7A8A] sm:line-clamp-1 sm:text-[11px]">
          {project.subtitle}
        </p>
        <span
          className={`mt-1.5 inline-block text-[9px] font-semibold uppercase tracking-wide sm:text-[10px] ${
            isActive ? 'text-[#2F80ED]' : 'text-[#94A3B8]'
          }`}
        >
          {statusLabel}
        </span>
      </div>
    </button>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default ProjectCard
