import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Building2,
  CalendarDays,
  Code2,
  GraduationCap,
  HeartPulse,
  Rocket,
  Settings2,
} from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const STATUS_ICONS = {
  code: Code2,
  rocket: Rocket,
  calendar: CalendarDays,
}

const PROJECT_ICONS = {
  graduation: GraduationCap,
  heart: HeartPulse,
  building: Building2,
  gear: Settings2,
}

/**
 * Active project detail panel — diagram + copy + status + CTAs.
 * Stacks on mobile/tablet; side-by-side from lg up.
 */
const ProjectDetails = ({ project }) => {
  const reduceMotion = useReducedMotion()
  const ProjectIcon = PROJECT_ICONS[project.icon] || GraduationCap

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
        transition={transition}
        className="grid w-full min-w-0 items-start gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-12"
      >
        <div className="min-w-0 overflow-hidden rounded-2xl border border-[#E8EEF5] bg-[#F7F9FC] p-2.5 sm:p-3 md:p-4 lg:p-5">
          {project.diagram ? (
            <img
              src={project.diagram}
              alt={project.diagramAlt}
              className="h-auto w-full max-w-full rounded-xl object-contain"
              width={960}
              height={720}
            />
          ) : (
            <div
              className="flex min-h-[220px] flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#EAF3FF] via-white to-[#F0F3F7] px-4 py-10 text-center sm:min-h-[280px] sm:px-6 sm:py-12 md:min-h-[320px]"
              role="img"
              aria-label={project.diagramAlt}
            >
              <span className="mb-3 flex size-14 items-center justify-center rounded-2xl bg-white text-[#2F80ED] shadow-sm sm:mb-4 sm:size-16 md:size-20">
                <ProjectIcon size={32} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <p className="font-primary text-lg font-bold text-[#0A1B3D] sm:text-xl md:text-2xl">
                {project.title}
              </p>
              <p className="mt-2 text-sm text-[#6B7A8A]">{project.subtitle}</p>
              <span className="mt-3 inline-flex rounded-full bg-[#EAF3FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2F80ED] sm:mt-4">
                {project.status}
              </span>
            </div>
          )}
        </div>

        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF3FF] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2F80ED] sm:px-3.5 sm:text-[11px]">
            <Building2 size={14} strokeWidth={2} aria-hidden="true" />
            {project.productBadge}
          </span>
          <h3 className="mt-3 font-primary text-2xl font-bold text-[#0A1B3D] sm:mt-4 sm:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <span className="mt-2.5 block h-0.5 w-14 bg-[#2F80ED] sm:mt-3 sm:w-16" aria-hidden="true" />

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#5A6A7A] sm:mt-5 sm:space-y-3.5 sm:text-[15px]">
            {project.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-[#E8EEF5] bg-[#F7F9FC] p-4 sm:mt-7 sm:p-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A1B3D] sm:mb-4">
              Platform Status
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {project.statusItems.map((item) => {
                const Icon = STATUS_ICONS[item.icon] || Code2
                return (
                  <div key={item.id} className="text-left sm:text-left">
                    <span className="mb-2 flex size-9 items-center justify-center rounded-full bg-white text-[#2F80ED] shadow-sm">
                      <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <p className="text-sm font-bold text-[#0A1B3D]">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#6B7A8A]">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
            <Link
              to={project.primaryCta.to}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2F80ED] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2569c7] sm:w-auto"
            >
              <Rocket size={16} strokeWidth={2} aria-hidden="true" />
              {project.primaryCta.label}
            </Link>
            <Link
              to={project.secondaryCta.to}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#2F80ED]/40 bg-white px-6 py-3 text-sm font-semibold text-[#2F80ED] transition hover:bg-[#EAF3FF] sm:w-auto"
            >
              <Building2 size={16} strokeWidth={2} aria-hidden="true" />
              {project.secondaryCta.label}
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    productBadge: PropTypes.string.isRequired,
    body: PropTypes.arrayOf(PropTypes.string).isRequired,
    statusItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
    primaryCta: PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired,
    secondaryCta: PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired,
    diagram: PropTypes.string,
    diagramAlt: PropTypes.string,
  }).isRequired,
}

export default ProjectDetails
