import { Link } from 'react-router-dom'
import clsx from 'clsx'
import {
  BarChart3,
  Boxes,
  Braces,
  ChevronRight,
  Code2,
  Globe2,
  Handshake,
  Layers,
  Lightbulb,
  Monitor,
  PieChart,
  Rocket,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Users,
  Zap,
} from 'lucide-react'
import Container from '@/components/common/Container'
import BrandLogo from '@/components/common/BrandLogo'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/common/FadeIn'
import { whyUs } from '@/data/home/whyUs'
import { ROUTES } from '@/constants/routes'

const ICON_MAP = {
  pieChart: PieChart,
  layers: Layers,
  code: Code2,
  rocket: Rocket,
  barChart: BarChart3,
  target: Target,
  boxes: Boxes,
  globe: Globe2,
  monitor: Monitor,
  lightbulb: Lightbulb,
  handshake: Handshake,
  zap: Zap,
  sliders: SlidersHorizontal,
  shield: ShieldCheck,
  users: Users,
}

const accentBar = {
  brand: 'bg-brand-500',
  secondary: 'bg-secondary-500',
  accent: 'bg-accent-500',
}

const SectionIcon = ({ name, size = 22, className = 'text-brand-500', strokeWidth = 1.75 }) => {
  if (name === 'monitor') {
    return (
      <span
        className={clsx('relative inline-flex items-center justify-center', className)}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <Monitor size={size} strokeWidth={strokeWidth} />
        <Braces
          size={Math.round(size * 0.42)}
          strokeWidth={strokeWidth + 0.25}
          className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
        />
      </span>
    )
  }

  const Icon = ICON_MAP[name] || Target
  return <Icon size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
}

const CornerArc = ({ position }) => {
  const isTopLeft = position === 'top-left'
  const isBottomRight = position === 'bottom-right'

  return (
    <svg
      className={clsx(
        'pointer-events-none absolute h-[64px] w-[64px] text-brand-500 sm:h-[80px] sm:w-[80px] lg:h-[88px] lg:w-[88px]',
        isTopLeft && 'left-0 top-0',
        isBottomRight && 'bottom-0 right-0 rotate-180'
      )}
      viewBox="0 0 88 88"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 10 78 C 10 32 32 10 78 10"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}

const ApproachStep = ({ step, showConnector }) => (
  <div className="relative flex min-w-0 flex-1 flex-col items-center text-center">
    {showConnector && (
      <div
        className="pointer-events-none absolute left-[calc(50%+26px)] top-[22px] hidden w-[calc(100%-52px)] items-center 2xl:flex"
        aria-hidden="true"
      >
        <span className="h-px flex-1 border-t border-dashed border-brand-300" />
        <ChevronRight className="-ml-0.5 size-3.5 shrink-0 text-brand-400" strokeWidth={2.5} />
      </div>
    )}

    <span className="relative z-10 flex size-10 items-center justify-center rounded-full border-[1.5px] border-brand-400 bg-white text-brand-500 shadow-[0_0_0_5px_rgba(47,128,237,0.06)] sm:size-11 lg:size-12">
      <SectionIcon name={step.icon} size={18} />
    </span>
    <h3 className="mt-2.5 font-primary text-[13px] font-bold text-[#0A1B3D] sm:mt-3 sm:text-sm">
      {step.title}
    </h3>
    <p className="mt-1 max-w-[9rem] text-[11px] leading-relaxed text-[#6B7A8A] sm:mt-1.5 sm:max-w-none sm:text-xs">
      {step.description}
    </p>
  </div>
)

const About = () => {
  const { approach, why, cta, trustPoints } = whyUs
  const contactPath = cta.to || ROUTES.CONTACT_US || ROUTES.CONTACT

  return (
    <section id="who-are-we" className="section bg-[#F7F9FC]">
      <Container size="wide">
        {/* Equal-height columns from lg up; stack on smaller screens */}
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-10 xl:gap-12">
          {/* LEFT — Approach + CTA fills column height */}
          <div className="flex h-full min-h-0 flex-col gap-4 sm:gap-5 lg:gap-6">
            <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[24px] border border-[#E8EEF5] bg-white px-4 py-7 shadow-[0_18px_48px_rgba(16,42,67,0.07)] sm:rounded-[28px] sm:px-6 sm:py-8 lg:rounded-[32px] lg:px-8 lg:py-9">
              <CornerArc position="top-left" />
              <CornerArc position="bottom-right" />

              <div
                className="absolute right-4 top-4 hidden grid-cols-3 gap-1.5 xs:grid sm:right-6 sm:top-6"
                aria-hidden="true"
              >
                {Array.from({ length: 9 }).map((_, index) => (
                  <span key={index} className="size-1.5 rounded-full bg-[#D5DEE8]" />
                ))}
              </div>

              <div className="relative flex flex-1 flex-col items-center justify-center text-center">
                <FadeIn delay={0.05}>
                  <div className="mx-auto flex justify-center">
                    <BrandLogo lockup="mark" asLink={false} />
                  </div>
                </FadeIn>
                <FadeIn as="h2" delay={0.12} className="mt-3 font-primary text-xl font-bold tracking-tight text-[#0A1B3D] sm:mt-4 sm:text-2xl lg:text-[1.75rem]">
                  {approach.title}
                </FadeIn>
                <FadeIn as="p" delay={0.18} className="mx-auto mt-3 max-w-xl text-[13px] leading-relaxed text-[#5A6A7A] sm:text-sm lg:mt-3.5 lg:text-[15px]">
                  {approach.description}
                </FadeIn>

                <FadeInStagger className="mt-6 grid w-full grid-cols-1 gap-6 xs:grid-cols-2 sm:mt-7 sm:gap-5 lg:mt-8 lg:grid-cols-2 xl:grid-cols-3 xl:gap-3 2xl:grid-cols-5 2xl:gap-2" stagger={0.07} delay={0.15}>
                  {approach.steps.map((step, index) => (
                    <FadeInItem key={step.id}>
                      <ApproachStep
                        step={step}
                        showConnector={index < approach.steps.length - 1}
                      />
                    </FadeInItem>
                  ))}
                </FadeInStagger>
              </div>
            </div>

            {/* CTA card — stays at bottom of left column */}
            <FadeIn className="shrink-0 rounded-[20px] border border-[#E8EEF5] bg-white p-4 shadow-[0_14px_40px_rgba(16,42,67,0.06)] sm:rounded-[24px] sm:p-5 lg:rounded-[28px] lg:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
                <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-brand-500 sm:size-12">
                    <Send size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-primary text-[15px] font-bold text-[#0A1B3D] sm:text-base lg:text-lg">
                      {cta.title}
                    </p>
                    <p className="mt-0.5 text-sm text-[#6B7A8A]">{cta.description}</p>
                  </div>
                </div>

                <Link
                  to={contactPath}
                  className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 sm:w-auto"
                >
                  {cta.buttonLabel}
                  <ChevronRight size={16} strokeWidth={2.2} aria-hidden="true" />
                </Link>
              </div>

              <FadeInStagger className="mt-4 grid grid-cols-1 gap-3.5 border-t border-[#E8EEF5] pt-4 xs:grid-cols-2 sm:mt-5 sm:gap-4 sm:pt-5 xl:grid-cols-2 2xl:grid-cols-4 2xl:gap-3" stagger={0.06}>
                {trustPoints.map((point) => (
                  <FadeInItem key={point.id} className="flex min-w-0 gap-2.5">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center text-brand-500 sm:size-8">
                      <SectionIcon name={point.icon} size={17} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-[#0A1B3D] sm:text-sm">
                        {point.title}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-[#6B7A8A] sm:text-xs">
                        {point.description}
                      </p>
                    </div>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </FadeIn>
          </div>

          {/* RIGHT — Why AGES-TECH fills same column height */}
          <div className="flex h-full min-h-0 flex-col">
            <FadeIn delay={0.05}>
              <div className="mb-1 h-0.5 w-11 rounded-full bg-brand-500" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                {why.badge}
              </p>
            </FadeIn>
            <FadeIn as="h2" delay={0.12} y={20} className="mt-3 font-primary text-[1.5rem] font-bold leading-[1.15] tracking-tight text-[#0A1B3D] sm:mt-4 sm:text-[1.75rem] lg:text-4xl">
              {why.title.lead}
              <br />
              <span className="text-brand-500">{why.title.accent}</span>
            </FadeIn>
            <FadeIn as="p" delay={0.2} className="mt-3 max-w-xl text-sm leading-relaxed text-[#5A6A7A] sm:mt-4 sm:text-base">
              {why.description}
            </FadeIn>

            <FadeInStagger className="mt-6 grid flex-1 grid-cols-1 gap-3.5 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:gap-5" stagger={0.08} delay={0.1}>
              {why.cards.map((card) => (
                <FadeInItem key={card.id} as="article" className="flex h-full flex-col items-center rounded-2xl border border-[#E8EEF5] bg-white px-4 py-5 text-center shadow-[0_10px_28px_rgba(16,42,67,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(16,42,67,0.08)] sm:rounded-[20px] sm:px-5 sm:py-6">
                  <span className="flex size-10 items-center justify-center text-brand-500 sm:size-11">
                    <SectionIcon name={card.icon} size={24} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-3 font-primary text-sm font-bold text-[#0A1B3D] sm:mt-3.5 sm:text-[15px]">
                    {card.title}
                  </h3>
                  <span
                    className={clsx(
                      'mt-2 block h-[3px] w-9 rounded-full sm:mt-2.5',
                      accentBar[card.accent]
                    )}
                  />
                  <p className="mt-2.5 flex-1 text-[11px] leading-relaxed text-[#6B7A8A] sm:mt-3 sm:text-xs lg:text-[13px]">
                    {card.description}
                  </p>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
