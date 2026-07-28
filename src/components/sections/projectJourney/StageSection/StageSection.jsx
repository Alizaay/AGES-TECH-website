import {
  BarChart3,
  Binoculars,
  Briefcase,
  CheckCircle2,
  Compass,
  Code2,
  Flag,
  FlaskConical,
  Globe2,
  Handshake,
  Layers,
  Leaf,
  Map,
  Megaphone,
  MessageSquare,
  RefreshCw,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import Container from '@/components/common/Container'
import { FadeIn } from '@/components/common/FadeIn'

const POINT_ICONS = {
  compass: Compass,
  users: Users,
  chart: BarChart3,
  target: Target,
  check: CheckCircle2,
  search: Search,
  layers: Layers,
  shield: ShieldCheck,
  map: Map,
  code: Code2,
  sparkles: Sparkles,
  flag: Flag,
  refresh: RefreshCw,
  globe: Globe2,
  message: MessageSquare,
  megaphone: Megaphone,
  briefcase: Briefcase,
  rocket: Rocket,
  handshake: Handshake,
  flask: FlaskConical,
  leaf: Leaf,
  trending: TrendingUp,
  binoculars: Binoculars,
  settings: Settings,
}

const ACCENT = '#0DC7D8'

const BADGE_POSITIONS = {
  'top-right': '-top-4 right-3 sm:-top-5 sm:right-5',
  'bottom-left': '-bottom-4 left-3 sm:-bottom-5 sm:left-6',
  'bottom-right': '-bottom-4 right-3 sm:-bottom-5 sm:right-6',
}

/** Decorative cyan dot grid used around the stage blocks. */
const DotGrid = ({ className = '' }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute hidden size-16 opacity-70 lg:block ${className}`}
    style={{
      backgroundImage: `radial-gradient(${ACCENT} 1.5px, transparent 1.5px)`,
      backgroundSize: '11px 11px',
    }}
  />
)

/** Icon strip card shown under the media/card column on stages 6 & 7. */
const FooterIconStrip = ({ items }) => (
  <div className="relative z-10 mt-5 rounded-2xl border border-[#E8EEF5] bg-white px-3 py-4 shadow-[0_16px_40px_rgba(16,42,67,0.10)] sm:px-4">
    <div className="grid grid-cols-3 gap-x-2 gap-y-4 sm:grid-cols-5">
      {items.map((item) => {
        const Icon = POINT_ICONS[item.icon] || Target
        return (
          <div key={item.label} className="flex flex-col items-center gap-2 text-center">
            <span className="flex size-9 items-center justify-center rounded-full border border-[#0DC7D8]/40 bg-[#E8FBFD] text-[#0DC7D8] sm:size-10">
              <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="text-[10px] font-semibold leading-tight text-[#0A1B3D] sm:text-[11px]">
              {item.label}
            </span>
          </div>
        )
      })}
    </div>
  </div>
)

/**
 * Alternating timeline stage block for the Project Journey page.
 * Mirrors the reference design: header, stage image with floating labels,
 * and a detail card with checklist rows.
 */
const StageSection = ({ stage, isLast = false }) => {
  const media = (
    <div className="relative">
      {/* Cyan dome peeking below the image, per reference */}
      <span
        className="pointer-events-none absolute -bottom-4 left-1/2 h-8 w-24 -translate-x-1/2 rounded-b-full bg-[#0DC7D8] sm:-bottom-5 sm:h-10 sm:w-28"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-2xl shadow-[0_18px_48px_rgba(16,42,67,0.14)]">
        <img
          src={stage.image}
          alt={`${stage.title} stage visual`}
          width={920}
          height={614}
          className="aspect-[3/2] h-auto w-full object-cover"
          loading="lazy"
        />
      </div>
      {stage.badge && (
        <div
          className={`absolute z-10 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2 shadow-[0_10px_30px_rgba(16,42,67,0.18)] sm:px-4 sm:py-2.5 ${
            BADGE_POSITIONS[stage.badge.position] || BADGE_POSITIONS['top-right']
          }`}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0DC7D8] text-white sm:size-9">
            <CheckCircle2 size={17} strokeWidth={2.25} aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-bold leading-tight text-[#0A1B3D] sm:text-[13px]">
              {stage.badge.title}
            </p>
            <p className="text-[10px] font-semibold leading-tight text-[#0DC7D8] sm:text-[11px]">
              {stage.badge.subtitle}
            </p>
          </div>
        </div>
      )}
    </div>
  )

  const card = (
    <article className="rounded-2xl border border-[#E8EEF5] bg-white p-5 shadow-[0_16px_44px_rgba(16,42,67,0.08)] sm:p-6 lg:p-7">
      <div className="mb-4 flex items-start gap-3.5">
        <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#E8FBFD] p-2 sm:size-[52px]">
          <img
            src={stage.icon}
            alt=""
            width={36}
            height={36}
            className="size-8 object-contain"
            draggable={false}
          />
        </span>
        <div className="min-w-0">
          <h3 className="font-primary text-base font-bold leading-snug text-[#0A1B3D] sm:text-lg lg:text-xl">
            {stage.cardTitle.lead}
            <br className="hidden sm:block" />{' '}
            <span className="text-[#0DC7D8]">{stage.cardTitle.accent}</span>
          </h3>
        </div>
      </div>

      <div className="space-y-3 text-sm leading-relaxed text-[#5A6A7A] sm:text-[15px]">
        {stage.cardBody.map((paragraph) => (
          <p key={paragraph.slice(0, 28)}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-5 space-y-2.5">
        {stage.points.map((point) => {
          const Icon = POINT_ICONS[point.icon] || CheckCircle2
          return (
            <li
              key={point.text || point.title}
              className="flex items-center gap-3 rounded-xl border-l-[3px] border-[#0DC7D8] bg-[#F4FBFD] px-3 py-2.5 sm:px-3.5"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#0DC7D8]/50 bg-white text-[#0DC7D8]">
                <Icon size={15} strokeWidth={1.8} aria-hidden="true" />
              </span>
              {point.title ? (
                <span className="min-w-0">
                  <span className="block text-sm font-semibold leading-snug text-[#0A1B3D]">
                    {point.title}
                  </span>
                  <span className="block text-xs leading-snug text-[#5A6A7A] sm:text-[13px]">
                    {point.description}
                  </span>
                </span>
              ) : (
                <span className="text-sm font-medium leading-snug text-[#0A1B3D]">
                  {point.text}
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </article>
  )

  const mediaColumn = (
    <div>
      {media}
      {stage.footerIcons?.length > 0 && stage.footerUnder === 'media' && (
        <FooterIconStrip items={stage.footerIcons} />
      )}
    </div>
  )

  const cardColumn = (
    <div>
      {card}
      {stage.footerIcons?.length > 0 && stage.footerUnder === 'card' && (
        <FooterIconStrip items={stage.footerIcons} />
      )}
    </div>
  )

  return (
    <section
      id={stage.hash}
      className={`relative scroll-mt-28 overflow-x-clip py-14 sm:py-16 lg:py-20 ${
        stage.id % 2 === 0 ? 'bg-white' : 'bg-[#F7FBFD]'
      }`}
    >
      <Container className="relative">
        <DotGrid className="right-0 top-2" />
        <DotGrid className="bottom-2 left-16" />

        {/* Timeline rail (desktop) */}
        <div
          className="pointer-events-none absolute bottom-0 left-4 top-0 hidden w-px bg-[#0A1B3D]/15 md:left-6 lg:left-8 lg:block"
          aria-hidden="true"
        >
          {!isLast && <span className="absolute inset-x-0 bottom-0 top-24 bg-[#0A1B3D]/15" />}
        </div>
        <div
          className="pointer-events-none absolute left-4 top-16 z-10 hidden -translate-x-1/2 md:left-6 lg:left-8 lg:block"
          aria-hidden="true"
        >
          <span className="flex size-11 items-center justify-center rounded-full bg-[#0DC7D8] font-primary text-sm font-bold text-white shadow-[0_0_0_6px_rgba(13,199,216,0.18)]">
            {stage.number}
          </span>
        </div>

        <FadeIn className="lg:pl-16">
          <div className="mb-4 flex items-center gap-3 lg:mb-5">
            <span className="inline-flex rounded-full bg-[#0DC7D8] px-3 py-1 font-primary text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:text-[11px] lg:hidden">
              {stage.number}
            </span>
            <span className="inline-flex rounded-full bg-[#E8FBFD] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0DC7D8] sm:text-[11px]">
              Stage {stage.stageWord}
            </span>
          </div>

          <h2 className="mb-2 font-primary text-[1.75rem] font-bold leading-tight text-[#0A1B3D] sm:text-3xl lg:text-4xl">
            {stage.titleLead}{' '}
            <span className="text-[#0DC7D8]">{stage.titleAccent}</span>
          </h2>
          {stage.subtitle && (
            <p className="mb-2 font-primary text-lg font-semibold text-[#0DC7D8] sm:text-xl">
              {stage.subtitle}
            </p>
          )}
          <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-[#6B7A8A] sm:text-base lg:mb-10">
            {stage.intro}
          </p>

          <div
            className={`grid items-start gap-10 sm:gap-12 lg:gap-10 ${
              stage.reverse
                ? 'lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]'
                : 'lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]'
            }`}
          >
            {stage.reverse ? (
              <>
                <div className="order-2 lg:order-1">{cardColumn}</div>
                <div className="order-1 lg:order-2">{mediaColumn}</div>
              </>
            ) : (
              <>
                <div>{mediaColumn}</div>
                <div>{cardColumn}</div>
              </>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export default StageSection
