import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  Building2,
  ChevronRight,
  Globe2,
  GraduationCap,
  HeartPulse,
  Quote,
  Settings2,
  Users,
} from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/common/Container'
import { FadeIn } from '@/components/common/FadeIn'
import { projectHighlights } from '@/data/about'

const PROJECT_ICONS = {
  graduation: GraduationCap,
  heart: HeartPulse,
  building: Building2,
  gear: Settings2,
}

const STAT_ICONS = {
  users: Users,
  building: Building2,
  globe: Globe2,
  chart: BarChart3,
}

const ProjectCard = ({ project, isActive, onSelect }) => {
  const Icon = PROJECT_ICONS[project.icon] || GraduationCap

  return (
    <article
      role="group"
      aria-label={project.title}
      onClick={() => onSelect?.()}
      className={`flex h-full min-h-[280px] cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_16px_40px_rgba(16,42,67,0.08)] transition duration-300 md:min-h-[300px] md:flex-row ${
        isActive
          ? 'border-[#2F80ED]/45 shadow-[0_20px_48px_rgba(47,128,237,0.16)] ring-1 ring-[#2F80ED]/20'
          : 'border-[#E8EEF5] hover:border-[#D6E0EA] hover:shadow-[0_20px_48px_rgba(16,42,67,0.12)]'
      }`}
    >
      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <div className="mb-3 flex items-center gap-2.5 sm:mb-4">
          <span className="flex size-8 items-center justify-center rounded-full bg-[#EAF3FF] text-[#2F80ED] sm:size-9">
            <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2F80ED] sm:text-[11px]">
            {project.category}
          </span>
        </div>

        <h3 className="font-primary text-lg font-bold text-[#0A1B3D] sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6B7A8A]">
          {project.description}
        </p>

        <Link
          to={project.href || '/contactus'}
          onClick={(event) => event.stopPropagation()}
          className="mt-4 inline-flex min-h-11 items-center gap-1 py-2 text-sm font-semibold text-[#2F80ED] transition hover:gap-1.5"
        >
          View Project
          <ChevronRight size={16} strokeWidth={2.25} aria-hidden="true" />
        </Link>
      </div>

      <div className="relative h-40 shrink-0 overflow-hidden md:h-auto md:w-[42%] lg:w-[46%] xl:w-[48%]">
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
            isActive ? 'scale-[1.03]' : ''
          }`}
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A1B3D]/35 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-white/10"
          aria-hidden="true"
        />
      </div>
    </article>
  )
}

const Highlights = () => {
  const projects = projectHighlights.projects
  const total = projects.length
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const touchStartX = useRef(null)

  const goTo = useCallback(
    (index) => {
      const next = ((index % total) + total) % total
      setActive(next)
      const track = trackRef.current
      const card = cardRefs.current[next]
      if (!track || !card) return
      track.scrollTo({
        left: card.offsetLeft,
        behavior: reduceMotion ? 'auto' : 'smooth',
      })
    },
    [total, reduceMotion]
  )

  const goPrev = useCallback(() => goTo(active - 1), [active, goTo])
  const goNext = useCallback(() => goTo(active + 1), [active, goTo])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const index = Number(visible.target.getAttribute('data-index'))
        if (!Number.isNaN(index)) setActive(index)
      },
      {
        root: track,
        threshold: [0.55, 0.7],
      }
    )

    cardRefs.current.forEach((node) => {
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [total])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
      const track = trackRef.current
      if (!track) return
      const rect = track.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      if (!inView) return
      event.preventDefault()
      if (event.key === 'ArrowLeft') goPrev()
      else goNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goPrev, goNext])

  const onTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (event) => {
    if (touchStartX.current == null) return
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
    const delta = endX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 48) return
    if (delta > 0) goPrev()
    else goNext()
  }

  return (
    <section
      id="highlights"
      className="scroll-mt-28 overflow-x-clip bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <FadeIn className="max-w-2xl">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F80ED] sm:text-xs">
              {projectHighlights.badge}
            </p>
            <span className="mb-4 block h-0.5 w-10 bg-[#2F80ED] sm:mb-5" aria-hidden="true" />
            <h2 className="font-primary text-[1.5rem] font-bold leading-tight text-[#0A1B3D] sm:text-[1.75rem] md:text-3xl lg:text-4xl">
              {projectHighlights.title.lead}{' '}
              <span className="text-[#2F80ED]">{projectHighlights.title.accent}</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#6B7A8A] sm:mt-4 sm:text-[15px] md:text-base">
              {projectHighlights.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center">
              <Link
                to={projectHighlights.primaryCta.to}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A1B3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#132847]"
              >
                {projectHighlights.primaryCta.label}
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
              </Link>
              <Link
                to={projectHighlights.secondaryCta.to}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0A1B3D]/25 bg-white px-6 py-3 text-sm font-semibold text-[#0A1B3D] transition hover:border-[#0A1B3D]/45"
              >
                {projectHighlights.secondaryCta.label}
              </Link>
            </div>
          </FadeIn>

          <FadeIn className="flex items-center justify-between gap-6 lg:flex-col lg:items-end" delay={0.08}>
            <p className="font-primary text-sm font-semibold tabular-nums text-[#2F80ED] sm:text-base">
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>
            <div className="flex w-36 gap-1 sm:w-40" role="tablist" aria-label="Project slides">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Go to ${project.title}`}
                  onClick={() => goTo(index)}
                  className="flex min-h-11 flex-1 items-center"
                >
                  <span
                    className={`h-1.5 w-full rounded-full transition ${
                      index === active ? 'bg-[#2F80ED]' : 'bg-[#D5DEE8] hover:bg-[#C5D0DC]'
                    }`}
                  />
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-10 sm:mt-12" delay={0.06}>
          <div
            ref={trackRef}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
            aria-label="Project highlights slider"
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                data-index={index}
                ref={(node) => {
                  cardRefs.current[index] = node
                }}
                className="w-full shrink-0 snap-start md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <ProjectCard
                  project={project}
                  isActive={index === active}
                  onSelect={() => goTo(index)}
                />
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn
          className="mt-10 rounded-2xl border border-[#D6E8FF] bg-[#F3F7FC] px-5 py-6 sm:mt-12 sm:px-7 sm:py-7 lg:px-8"
          delay={0.1}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10 xl:gap-12">
            <div className="flex max-w-md gap-3 lg:shrink-0">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-[#2F80ED]">
                <Quote size={16} strokeWidth={2} aria-hidden="true" />
              </span>
              <p className="text-sm font-medium leading-relaxed text-[#0A1B3D] sm:text-[15px]">
                {projectHighlights.quote}
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-4 md:gap-6">
              {projectHighlights.stats.map((stat) => {
                const Icon = STAT_ICONS[stat.icon] || Users
                return (
                  <div key={stat.id} className="min-w-0 text-left">
                    <span className="mb-2 flex size-8 items-center justify-center text-[#2F80ED] sm:size-9">
                      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={stat.value}
                        initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-primary text-xl font-bold text-[#0A1B3D] sm:text-2xl"
                      >
                        {stat.value}
                      </motion.p>
                    </AnimatePresence>
                    <p className="mt-0.5 text-[11px] leading-snug text-[#5A6A7A] sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export default Highlights
