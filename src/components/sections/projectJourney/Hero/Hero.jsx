import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  Target,
  Users,
} from 'lucide-react'
import clsx from 'clsx'
import Container from '@/components/common/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/common/FadeIn'
import { Orbit } from '@/components/sections/home/Hero/orbit'
import { heroOrbitCategories } from '@/data/home/hero'
import { journeyHero } from '@/data/journey'
import centerLogo from '@/assets/icons/center.png'

const FEATURE_ICONS = {
  target: Target,
  users: Users,
  chart: BarChart3,
}

/**
 * Same orbit stage as Home — reserved height so labels don’t collide.
 * Center hub is dark so `center.png` lightbulb reads clearly.
 */
const JourneyOrbitStage = () => (
  <div
    className={clsx(
      'relative z-0 mx-auto w-full',
      'max-w-[300px] min-h-[390px]',
      'sm:max-w-[340px] sm:min-h-[430px]',
      'md:max-w-[380px] md:min-h-[470px]',
      'lg:max-w-[400px] lg:min-h-[490px]',
      'xl:max-w-[460px] xl:min-h-[560px]'
    )}
  >
    <div className="absolute inset-x-0 top-8 bottom-[4.5rem] flex items-start justify-center sm:top-9 sm:bottom-20 md:top-10 md:bottom-[5.25rem] xl:top-6 xl:bottom-[5.5rem]">
      <Orbit
        categories={heroOrbitCategories}
        rotationSpeed={40}
        centerLogo={centerLogo}
        centerClassName="border-0 bg-[#0A1B3D] shadow-[0_0_0_6px_rgba(77,183,232,0.18),0_0_0_14px_rgba(47,128,237,0.1),0_0_36px_rgba(77,183,232,0.45),0_14px_32px_rgba(10,27,61,0.35)] xl:shadow-[0_0_0_8px_rgba(77,183,232,0.2),0_0_0_18px_rgba(47,128,237,0.12),0_0_48px_rgba(77,183,232,0.5),0_18px_40px_rgba(10,27,61,0.4)]"
        centerLogoClassName="!size-[78%] mix-blend-screen"
        className="!max-w-none h-full w-full max-h-full"
      />
    </div>
  </div>
)

const Hero = () => {
  return (
    <section
      id="journey-hero"
      className="relative scroll-mt-28 overflow-x-clip bg-gradient-to-br from-[#EAF6FF] via-white to-[#F7F9FC] pb-12 pt-8 sm:pb-16 sm:pt-12 md:pb-20 md:pt-14"
    >
      <Container>
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-14">
          {/* Left — copy, features, CTA */}
          <div className="min-w-0">
            <FadeIn>
              <span className="inline-flex rounded-full bg-[#D6EBFF] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A1B3D] sm:text-xs">
                {journeyHero.badge}
              </span>
              <h1 className="mt-5 px-0.5 font-primary text-[1.75rem] font-bold leading-[1.2] tracking-tight text-[#0A1B3D] xs:text-[2rem] sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
                {journeyHero.title.before}{' '}
                <span className="text-[#2F80ED]">{journeyHero.title.accent1}</span>{' '}
                {journeyHero.title.middle}{' '}
                <span className="text-[#2F80ED]">{journeyHero.title.accent2}</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#5A6A7A] sm:mt-5 sm:text-[15px] md:text-base">
                {journeyHero.description}
              </p>
            </FadeIn>

            <FadeInStagger
              className="mt-7 grid grid-cols-1 gap-5 xs:grid-cols-3 sm:mt-8 sm:gap-4 md:gap-5"
              delay={0.08}
            >
              {journeyHero.features.map((feature) => {
                const Icon = FEATURE_ICONS[feature.icon] || Target
                return (
                  <FadeInItem key={feature.id}>
                    <div className="flex min-w-0 flex-col gap-2.5">
                      <span className="flex size-10 items-center justify-center rounded-full border border-[#2F80ED]/25 bg-white text-[#0A1B3D] sm:size-11">
                        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h2 className="font-primary text-sm font-bold text-[#0A1B3D]">
                        {feature.title}
                      </h2>
                      <p className="text-xs leading-relaxed text-[#6B7A8A]">
                        {feature.description}
                      </p>
                    </div>
                  </FadeInItem>
                )
              })}
            </FadeInStagger>

            <FadeIn className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center" delay={0.12}>
              <a
                href={journeyHero.cta.to}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#0A1B3D] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#132847] sm:w-auto"
              >
                {journeyHero.cta.label}
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
              </a>
              <Link
                to="/contactus"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#0A1B3D] bg-white px-6 py-3.5 text-sm font-semibold text-[#0A1B3D] transition hover:bg-[#F5F8FC] sm:w-auto"
              >
                Start a Project
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
              </Link>
            </FadeIn>
          </div>

          {/* Right — same Home orbit, journey center mark */}
          <FadeIn className="relative min-w-0" delay={0.1} y={20}>
            <JourneyOrbitStage />
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export default Hero
