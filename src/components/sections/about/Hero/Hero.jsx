import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react'
import Container from '@/components/common/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/common/FadeIn'
import { aboutHero } from '@/data/about'
import ExperienceDiagram from './ExperienceDiagram'

const FEATURE_ICONS = {
  shield: ShieldCheck,
  lightbulb: Lightbulb,
  chart: BarChart3,
}

const ArrowIcon = ({ className }) => (
  <ArrowRight className={className} size={16} strokeWidth={2.25} aria-hidden="true" />
)

const Hero = () => {
  return (
    <section
      id="who-we-are"
      className="relative scroll-mt-28 overflow-hidden bg-[#F7F9FC] pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-[0.22]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(100deg, transparent, transparent 28px, rgba(10,27,61,0.06) 28px, rgba(10,27,61,0.06) 29px)',
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
          <div>
            <FadeIn>
              <div className="mb-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F80ED] sm:text-xs">
                  {aboutHero.badge}
                </p>
                <span className="mt-2 block h-px w-8 bg-[#2F80ED]" aria-hidden="true" />
              </div>
              <h1 className="px-1 font-primary text-[2rem] font-bold leading-[1.2] tracking-[0.01em] text-[#0A1B3D] sm:px-1.5 sm:text-4xl sm:leading-[1.22] lg:px-2 lg:text-[2.75rem] xl:text-5xl">
                {aboutHero.title.line1}
                <br className="hidden sm:block" />{' '}
                {aboutHero.title.line2}{' '}
                <span className="text-[#2F80ED]">{aboutHero.title.accent}</span>
              </h1>
              <p className="mt-5 max-w-xl px-1 text-[15px] leading-relaxed text-[#6B7A8A] sm:px-1.5 sm:text-base lg:px-2">
                {aboutHero.description}
              </p>
            </FadeIn>

            <FadeInStagger
              className="mt-8 grid gap-5 px-1 sm:grid-cols-2 sm:gap-4 sm:px-1.5 lg:grid-cols-2 lg:px-2 xl:grid-cols-3"
              delay={0.08}
            >
              {aboutHero.features.map((feature) => {
                const Icon = FEATURE_ICONS[feature.icon] || ShieldCheck
                return (
                  <FadeInItem key={feature.id}>
                    <div className="flex flex-col gap-2.5">
                      <span className="flex size-10 items-center justify-center text-[#2F80ED]">
                        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h2 className="font-primary text-sm font-bold text-[#0A1B3D]">
                        {feature.title}
                      </h2>
                      <p className="text-xs leading-relaxed text-[#6B7A8A] sm:text-[13px]">
                        {feature.description}
                      </p>
                    </div>
                  </FadeInItem>
                )
              })}
            </FadeInStagger>

            <FadeIn
              className="mt-9 flex flex-col gap-3 px-1 sm:flex-row sm:items-center sm:px-1.5 lg:px-2"
              delay={0.12}
            >
              <Link
                to={aboutHero.primaryCta.to}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A1B3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#132847]"
              >
                {aboutHero.primaryCta.label}
                <ArrowIcon className="text-white" />
              </Link>
              <Link
                to={aboutHero.secondaryCta.to}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0A1B3D]/30 bg-white px-6 py-3 text-sm font-semibold text-[#0A1B3D] transition hover:border-[#0A1B3D]/50 hover:bg-[#F7F9FC]"
              >
                {aboutHero.secondaryCta.label}
              </Link>
            </FadeIn>
          </div>

          <div className="relative flex w-full justify-center lg:justify-end">
            <ExperienceDiagram />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
