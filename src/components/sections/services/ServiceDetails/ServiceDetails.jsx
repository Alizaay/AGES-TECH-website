import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Award,
  BarChart3,
  Beaker,
  BookOpen,
  Briefcase,
  Cloud,
  Cpu,
  FlaskConical,
  Gauge,
  GitBranch,
  GraduationCap,
  Handshake,
  Heart,
  Layers,
  Lightbulb,
  Link2,
  MessageSquare,
  Network,
  PenTool,
  Radar,
  RefreshCw,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react'
import Container from '@/components/common/Container'
import { FadeIn } from '@/components/common/FadeIn'
import { serviceDetailsIntro, services } from '@/data/services'

const ICON_COLOR = '#2F80ED'
const ICON_SOFT_BG = '#EAF3FF'

const ICON_MAP = {
  settings: Settings2,
  penTool: PenTool,
  cpu: Cpu,
  refresh: RefreshCw,
  link: Link2,
  wrench: Wrench,
  shield: ShieldCheck,
  gauge: Gauge,
  search: Search,
  workflow: Workflow,
  gitBranch: GitBranch,
  radar: Radar,
  barChart: BarChart3,
  message: MessageSquare,
  target: Target,
  sparkles: Sparkles,
  layers: Layers,
  trending: TrendingUp,
  handshake: Handshake,
  briefcase: Briefcase,
  rocket: Rocket,
  zap: Zap,
  globe: Network,
  flask: FlaskConical,
  graduation: GraduationCap,
  network: Network,
  beaker: Beaker,
  users: Users,
  book: BookOpen,
  award: Award,
  lightbulb: Lightbulb,
  heart: Heart,
  cloud: Cloud,
}

const ServiceIllustration = ({ src, alt }) => (
  <div className="relative mb-4 overflow-hidden rounded-xl bg-[#F3F8FF] sm:mb-5 sm:rounded-2xl md:mb-6">
    <div className="flex aspect-[16/10] items-center justify-center p-3 sm:aspect-[4/3] sm:p-4 md:p-5 lg:aspect-[5/4] lg:p-6">
      <img
        src={src}
        alt={alt}
        className="h-full w-full max-h-[240px] object-contain sm:max-h-[300px] lg:max-h-[340px]"
        loading="lazy"
        draggable={false}
      />
    </div>
  </div>
)

const ServiceDetails = () => {
  const location = useLocation()
  const sectionRef = useRef(null)
  const slugFromHash = location.hash.replace('#', '')

  const matchedIndex = useMemo(() => {
    const idx = services.findIndex((s) => s.slug === slugFromHash)
    return idx >= 0 ? idx : 0
  }, [slugFromHash])

  const [activeIndex, setActiveIndex] = useState(matchedIndex)
  const active = services[activeIndex]

  useEffect(() => {
    setActiveIndex(matchedIndex)

    if (!slugFromHash || !services.some((s) => s.slug === slugFromHash)) return undefined

    const timer = window.setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)

    return () => window.clearTimeout(timer)
  }, [matchedIndex, slugFromHash, location.pathname])

  const selectService = (index) => {
    const service = services[index]
    if (!service) return
    setActiveIndex(index)
    window.history.replaceState(null, '', `#${service.slug}`)
  }

  return (
    <section
      ref={sectionRef}
      id="service-details"
      className="relative scroll-mt-28 overflow-x-clip bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {services.map((service) => (
        <div
          key={`anchor-${service.slug}`}
          id={service.slug}
          className="pointer-events-none absolute top-0 h-px w-px scroll-mt-28"
          aria-hidden="true"
        />
      ))}

      <Container>
        <FadeIn className="mx-auto max-w-3xl px-1 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F80ED] sm:text-xs">
            {serviceDetailsIntro.badge}
          </p>
          <h2 className="font-primary text-[1.5rem] font-bold text-[#0A1B3D] sm:text-[1.75rem] md:text-3xl lg:text-4xl">
            {serviceDetailsIntro.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#6B7A8A] sm:text-[15px] md:text-base">
            {serviceDetailsIntro.description}
          </p>
        </FadeIn>

        <FadeIn
          className="mt-8 overflow-hidden rounded-2xl border border-[#E8EEF5] bg-white shadow-[0_18px_50px_rgba(16,42,67,0.08)] sm:mt-10 sm:rounded-3xl"
          delay={0.08}
        >
          {/* Mobile: scrollable tabs · sm: 2×2 · lg: 4 across */}
          <div
            className="flex gap-0 overflow-x-auto border-b border-[#E8EEF5] bg-[#F7F9FC] [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Service categories"
          >
            {services.map((service, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={service.slug}
                  type="button"
                  role="tab"
                  id={`tab-${service.slug}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${service.slug}`}
                  onClick={() => selectService(index)}
                  className={`flex min-h-[4.75rem] w-[min(46vw,170px)] shrink-0 flex-col items-center justify-center gap-1.5 px-2.5 py-3 text-center transition sm:w-auto sm:min-h-[5.25rem] sm:px-3 sm:py-4 md:px-4 ${
                    isActive
                      ? 'bg-white text-[#2F80ED] shadow-[inset_0_-3px_0_0_#2F80ED]'
                      : 'text-[#0A1B3D] hover:bg-white/70'
                  }`}
                >
                  <span
                    className="flex size-9 items-center justify-center overflow-hidden rounded-full sm:size-10"
                    style={{ backgroundColor: isActive ? ICON_SOFT_BG : '#FFFFFF' }}
                  >
                    <img
                      src={service.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="size-6 object-contain sm:size-7"
                      draggable={false}
                    />
                  </span>
                  <span className="line-clamp-2 max-w-[9.5rem] text-[10px] font-semibold leading-snug xs:text-[11px] sm:max-w-none sm:text-xs lg:text-[13px]">
                    {service.shortTitle}
                  </span>
                </button>
              )
            })}
          </div>

          <div
            id={`panel-${active.slug}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.slug}`}
            className="p-4 sm:p-6 md:p-7 lg:p-8"
          >
            <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8 xl:gap-10">
              <div className="min-w-0">
                <ServiceIllustration
                  src={active.illustration}
                  alt={`${active.title} illustration`}
                />
                <h3 className="font-primary text-lg font-bold text-[#0A1B3D] sm:text-xl md:text-2xl">
                  {active.detailsHeading}
                </h3>
                <span className="mt-3 block h-0.5 w-14 bg-[#2F80ED]" aria-hidden="true" />
                <p className="mt-3 text-sm leading-relaxed text-[#5A6A7A] sm:mt-4 sm:text-[15px]">
                  {active.detailsDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-3.5 md:gap-4">
                {active.capabilities.map((cap) => {
                  const Icon = ICON_MAP[cap.icon] || Settings2
                  return (
                    <article
                      key={cap.id}
                      className="rounded-xl border border-[#E8EEF5] bg-white p-3.5 text-center transition hover:border-[#2F80ED]/30 hover:shadow-[0_8px_24px_rgba(47,128,237,0.08)] sm:p-4"
                    >
                      <span
                        className="mx-auto mb-2 flex size-9 items-center justify-center sm:mb-2.5 sm:size-10"
                        style={{ color: ICON_COLOR }}
                      >
                        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h4 className="font-primary text-[13px] font-bold text-[#0A1B3D] sm:text-sm">
                        {cap.title}
                      </h4>
                      <p className="mt-1 text-[11px] leading-relaxed text-[#6B7A8A] sm:mt-1.5 sm:text-xs">
                        {cap.description}
                      </p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-[#E8EEF5] bg-[#F3F7FC] px-4 py-5 xs:grid-cols-2 sm:gap-5 sm:px-6 sm:py-6 md:px-7 lg:grid-cols-4 lg:gap-4 lg:px-8 lg:py-7">
            {active.values.map((value) => {
              const Icon = ICON_MAP[value.icon] || Users
              return (
                <div key={value.id} className="flex min-w-0 gap-3">
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm sm:size-10"
                    style={{ color: ICON_COLOR }}
                  >
                    <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#0A1B3D]">{value.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#6B7A8A]">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export default ServiceDetails
