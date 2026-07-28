import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  Globe2,
  Heart,
  Play,
  Users,
} from 'lucide-react'
import logoMark from '@/assets/icons/logo.png'
import Container from '@/components/common/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/common/FadeIn'
import { servicesHero } from '@/data/services'

const STAT_ICONS = {
  building: Building2,
  users: Users,
  globe: Globe2,
  heart: Heart,
}

const OrbitCard = ({ item }) => {
  const href = item.slug ? `/services#${item.slug}` : '#service-details'

  return (
    <Link
      to={href}
      className="flex h-full flex-col items-center rounded-2xl border border-[#E4ECF5] bg-white px-3 py-3 text-center shadow-[0_10px_28px_rgba(16,42,67,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#2F80ED]/35 hover:shadow-[0_16px_36px_rgba(47,128,237,0.12)] sm:px-3.5 sm:py-3.5 md:px-4 md:py-4"
    >
      <span className="mb-2 flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#F3F8FF] sm:size-10 md:size-11">
        <img
          src={item.iconSrc}
          alt=""
          width={44}
          height={44}
          className="size-[86%] object-contain"
          draggable={false}
        />
      </span>
      <h3 className="font-primary text-[11px] font-bold leading-snug text-[#0A1B3D] xs:text-[12px] sm:text-[13px] lg:text-sm">
        {item.title}
      </h3>
      <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-[#6B7A8A] sm:mt-1.5 sm:line-clamp-3 sm:text-[11px] lg:text-xs">
        {item.description}
      </p>
    </Link>
  )
}

const LogoHub = ({ size = 'md' }) => {
  const box =
    size === 'sm'
      ? 'size-[4.25rem] ring-[6px]'
      : 'size-[4.5rem] ring-[8px] sm:size-[5rem] lg:size-[5.5rem] lg:ring-[10px]'

  return (
    <div
      className={`relative z-20 flex items-center justify-center rounded-full bg-white shadow-[0_14px_40px_rgba(47,128,237,0.2)] ring-[#EAF3FF] ${box}`}
    >
      <img
        src={logoMark}
        alt="AGES-TECH"
        width={64}
        height={64}
        className="h-[52%] w-auto object-contain"
        draggable={false}
      />
    </div>
  )
}

const ServicesOrbit = () => (
  <div className="relative w-full">
    <div className="md:hidden">
      <div className="relative mx-auto mb-6 flex w-full max-w-[220px] items-center justify-center py-4 xs:max-w-[240px]">
        <div
          className="pointer-events-none absolute inset-0 rounded-full border border-dashed border-[#93C5FD]/70"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-[14%] rounded-full border border-dashed border-[#93C5FD]/45"
          aria-hidden="true"
        />
        <LogoHub size="sm" />
      </div>
      <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 xs:gap-3">
        {servicesHero.orbit.map((item) => (
          <OrbitCard key={item.id} item={item} />
        ))}
      </div>
    </div>

    <div className="relative mx-auto hidden w-full max-w-[480px] md:block lg:max-w-[540px] xl:max-w-[580px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(47,128,237,0.25) 1px, transparent 0)',
          backgroundSize: '14px 14px',
          maskImage: 'radial-gradient(circle, black 55%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#93C5FD]/75"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#93C5FD]/50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#BFDBFE]/70"
        aria-hidden="true"
      />

      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <line x1="38" y1="38" x2="46" y2="46" stroke="#93C5FD" strokeWidth="0.45" strokeDasharray="1.2 1.1" />
        <line x1="62" y1="38" x2="54" y2="46" stroke="#93C5FD" strokeWidth="0.45" strokeDasharray="1.2 1.1" />
        <line x1="38" y1="62" x2="46" y2="54" stroke="#93C5FD" strokeWidth="0.45" strokeDasharray="1.2 1.1" />
        <line x1="62" y1="62" x2="54" y2="54" stroke="#93C5FD" strokeWidth="0.45" strokeDasharray="1.2 1.1" />
      </svg>

      <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-6 md:gap-x-8 md:gap-y-8 lg:gap-x-12 lg:gap-y-10 xl:gap-x-14 xl:gap-y-12">
        {servicesHero.orbit.map((item) => (
          <OrbitCard key={item.id} item={item} />
        ))}
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <LogoHub size="md" />
      </div>
    </div>
  </div>
)

const Hero = () => {
  return (
    <section
      id="services-hero"
      className="relative scroll-mt-28 overflow-x-clip bg-white pb-10 pt-8 sm:pb-14 sm:pt-12 md:pb-16 md:pt-14"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(47,128,237,0.16) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-[1]">
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <FadeIn>
              <div className="mb-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F80ED] sm:text-xs">
                  {servicesHero.badge}
                </p>
                <span className="mt-2 block h-px w-8 bg-[#2F80ED]" aria-hidden="true" />
              </div>
              <h1 className="px-0.5 font-primary text-[1.75rem] font-bold leading-[1.2] tracking-tight text-[#0A1B3D] xs:text-[2rem] sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
                {servicesHero.title.line1}
                <br />
                {servicesHero.title.line2}{' '}
                <span className="text-[#2F80ED]">{servicesHero.title.accent}</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6B7A8A] sm:mt-5 sm:text-[15px] md:text-base">
                {servicesHero.description}
              </p>
            </FadeIn>

            <FadeIn className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center" delay={0.08}>
              <Link
                to={servicesHero.primaryCta.to}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#0A1B3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#132847] sm:w-auto"
              >
                {servicesHero.primaryCta.label}
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
              </Link>
              <Link
                to={servicesHero.secondaryCta.to}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#2F80ED]/35 bg-white px-6 py-3 text-sm font-semibold text-[#2F80ED] transition hover:bg-[#EAF3FF] sm:w-auto"
              >
                <span className="flex size-6 items-center justify-center rounded-full border border-[#2F80ED]/40">
                  <Play size={11} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                </span>
                {servicesHero.secondaryCta.label}
              </Link>
            </FadeIn>
          </div>

          <FadeIn className="relative min-w-0" delay={0.1} y={20}>
            <div className="mb-4 flex justify-center sm:mb-5 sm:justify-end">
              <a
                href={servicesHero.exploreTo}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[#2F80ED]/35 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#2F80ED] transition hover:bg-[#EAF3FF]"
              >
                {servicesHero.exploreLabel}
                <ArrowRight size={14} strokeWidth={2.25} aria-hidden="true" />
              </a>
            </div>
            <ServicesOrbit />
          </FadeIn>
        </div>

        <FadeInStagger
          className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-[#E8EEF5] bg-white p-4 shadow-[0_12px_36px_rgba(16,42,67,0.06)] xs:grid-cols-2 xs:p-5 sm:mt-12 sm:p-6 lg:mt-14 lg:grid-cols-4 lg:gap-3 lg:rounded-3xl lg:p-7"
          delay={0.12}
        >
          {servicesHero.stats.map((stat) => {
            const Icon = STAT_ICONS[stat.icon] || Building2
            return (
              <FadeInItem key={stat.id}>
                <div className="flex min-w-0 gap-3 px-0.5 lg:px-1">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-[#2F80ED] sm:size-11">
                    <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-[#0A1B3D] sm:text-xs">{stat.label}</p>
                    <p className="font-primary text-xl font-bold text-[#0A1B3D] sm:text-2xl">{stat.value}</p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-[#6B7A8A] sm:text-xs">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </FadeInItem>
            )
          })}
        </FadeInStagger>
      </Container>
    </section>
  )
}

export default Hero
