import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/common/FadeIn'
import { hero } from '@/data/home/hero'
import { statistics } from '@/data/home/statistics'
import { Orbit } from './orbit'

const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M4 12L12 4M12 4H6M12 4V10"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const StatIcon = ({ name, size = 22 }) => {
  const icons = {
    industries: (
      <path
        d="M3 14V6l4-2 4 2v2h2v6M5 14V9M8 14V9M11 14V9M3 14h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    projects: (
      <path
        d="M8 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM3.5 14c.8-2 2.5-3 4.5-3s3.7 1 4.5 3M11.5 5.5a2 2 0 110-4 2 2 0 010 4zM13.5 12.5c.4-1.2 1.3-2 2.5-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    partners: (
      <path
        d="M8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2.5 8h11M8 2.5c1.5 1.8 2.3 3.7 2.3 5.5S9.5 12.2 8 13.5M8 2.5C6.5 4.3 5.7 6.2 5.7 8s.8 3.7 2.3 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    satisfaction: (
      <path
        d="M3 12V8M6.5 12V5M10 12V7M13 12V3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    experience: (
      <path
        d="M8 2l1.4 2.8L12.5 5.5 10 7.6l.6 3.4L8 9.5 5.4 11l.6-3.4L3.5 5.5l3.1-.7L8 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="text-[#0A1B3D]"
    >
      {icons[name] || icons.experience}
    </svg>
  )
}

const HeroBadge = () => (
  <FadeIn delay={0.05} y={12}>
    <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[#D6E8FF] bg-[#EEF6FF] px-3 py-1.5 sm:px-3.5">
      <span className="size-1.5 shrink-0 rounded-full bg-[#2F80ED]" aria-hidden="true" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1D4F91] sm:text-[11px] sm:tracking-[0.18em]">
        {hero.eyebrow.join(' • ')}
      </span>
    </div>
  </FadeIn>
)

const HeroHeading = () => (
  <FadeIn
    as="h1"
    delay={0.12}
    y={20}
    className="mt-5 font-primary text-[1.875rem] font-bold leading-[1.28] tracking-[0.01em] text-[#0A1B3D] sm:mt-6 sm:text-4xl sm:leading-[1.26] md:text-[2.75rem] xl:mt-5 xl:text-[3.15rem] xl:leading-[1.22] xl:tracking-[0.02em]"
  >
    {hero.title.lead}{' '}
    <span className="text-[#2F80ED]">{hero.title.accent}</span>
  </FadeIn>
)

const HeroDescription = () => (
  <FadeIn
    as="p"
    delay={0.2}
    className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#5A6A7A] sm:mt-5 sm:text-base md:mt-6 md:text-lg xl:mt-5"
  >
    {hero.description}
  </FadeIn>
)

const HeroCtas = () => (
  <FadeIn
    delay={0.28}
    className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap md:mt-9 xl:mt-9"
  >
    <Link to={hero.primaryCta.to} className="w-full sm:w-auto">
      <Button
        size="lg"
        className="w-full bg-[#0A1B3D] hover:bg-[#152848] active:bg-[#0A1B3D] sm:w-auto"
        rightIcon={<ArrowUpRight />}
      >
        {hero.primaryCta.label}
      </Button>
    </Link>
    <Link to={hero.secondaryCta.to} className="w-full sm:w-auto">
      <Button
        size="lg"
        variant="outline"
        className="w-full border-[#0A1B3D] text-[#0A1B3D] hover:bg-[#F5F8FC] sm:w-auto"
        rightIcon={<ArrowUpRight />}
      >
        {hero.secondaryCta.label}
      </Button>
    </Link>
  </FadeIn>
)

const HeroTrust = () => (
  <FadeIn
    delay={0.36}
    className="mt-8 flex flex-col items-start gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4 md:mt-10 xl:mt-10"
  >
    <div className="flex -space-x-3" aria-hidden="true">
      {hero.trust.avatars.map((avatar, index) => (
        <img
          key={avatar.src}
          src={avatar.src}
          alt=""
          width={40}
          height={40}
          className="inline-block size-9 rounded-full border-2 border-white object-cover shadow-sm sm:size-10"
          style={{ zIndex: hero.trust.avatars.length - index }}
          draggable={false}
        />
      ))}
    </div>
    <div className="flex flex-col gap-1.5 sm:gap-1">
      <div
        className="flex items-center gap-0.5 text-[#F5B301]"
        aria-label={`${hero.trust.rating} star rating`}
      >
        {Array.from({ length: hero.trust.rating }).map((_, index) => (
          <span key={index} className="text-sm leading-none">
            ★
          </span>
        ))}
      </div>
      <p className="text-xs leading-snug text-[#7B8794] sm:text-sm">{hero.trust.text}</p>
    </div>
  </FadeIn>
)

/**
 * Orbit stage reserves a fixed layout height larger than the ring itself
 * so node labels never collide with the framework card below.
 */
const HeroOrbitStage = () => (
  <div
    className={clsx(
      'relative z-0 mx-auto w-full',
      /* layout box: orbit size + label gutter */
      'max-w-[300px] min-h-[390px]',
      'sm:max-w-[340px] sm:min-h-[430px]',
      'md:max-w-[380px] md:min-h-[470px]',
      'lg:max-w-[400px] lg:min-h-[490px]',
      'xl:max-w-[460px] xl:min-h-[560px]'
    )}
  >
    <div className="absolute inset-x-0 top-8 bottom-[4.5rem] flex items-start justify-center sm:top-9 sm:bottom-20 md:top-10 md:bottom-[5.25rem] xl:top-6 xl:bottom-[5.5rem]">
      <Orbit
        categories={hero.categories}
        rotationSpeed={40}
        className="!max-w-none h-full w-full max-h-full"
      />
    </div>
  </div>
)

const HeroFrameworkCard = () => (
  <FadeIn
    delay={0.25}
    className={clsx(
      'relative z-20 mx-auto flex w-full flex-col items-center gap-3 rounded-2xl border border-[#E6EEF7] bg-white shadow-[0_10px_30px_rgba(16,42,67,0.07)]',
      'max-w-full px-4 py-4 text-center',
      'sm:max-w-[90%] sm:flex-row sm:items-center sm:gap-5 sm:rounded-[18px] sm:px-5 sm:py-4 sm:text-left',
      'md:max-w-[90%]',
      'xl:max-w-[650px] xl:px-6'
    )}
  >
    <p className="shrink-0 text-sm font-bold text-[#2F80ED] sm:text-[15px]">
      {hero.frameworkBanner.title}
    </p>
    <span className="hidden h-8 w-px shrink-0 bg-[#E6EEF7] sm:block" aria-hidden="true" />
    <p className="min-w-0 flex-1 text-[13px] leading-relaxed text-[#5A6A7A] sm:text-sm sm:leading-snug">
      {hero.frameworkBanner.description}
    </p>
    <Link
      to={hero.frameworkBanner.to}
      className="inline-flex min-h-10 w-full items-center justify-center whitespace-normal rounded-lg text-sm font-semibold text-[#2F80ED] transition hover:text-[#1D6FE8] sm:w-auto sm:justify-start sm:whitespace-nowrap"
    >
      {hero.frameworkBanner.linkLabel} {'>'}
    </Link>
  </FadeIn>
)

/**
 * Hero — three layouts:
 * - Mobile  (<768 / default+sm): single column
 * - Tablet  (768–1279 / md–lg): single column, medium spacing / orbit
 * - Desktop (>=1280 / xl): two columns 55/45, orbit then framework card
 */
const Hero = () => {
  return (
    <section className="relative overflow-x-clip bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 12% 100%, rgba(198, 230, 150, 0.38) 0%, transparent 55%),
            radial-gradient(ellipse 70% 55% at 85% 20%, rgba(186, 220, 255, 0.35) 0%, transparent 50%),
            linear-gradient(165deg, #FFFFFF 0%, #F8FBFF 48%, #F5F9FC 100%)
          `,
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              115deg,
              transparent 0,
              transparent 38px,
              rgba(100, 160, 220, 0.12) 38px,
              rgba(100, 160, 220, 0.12) 39px
            ),
            repeating-linear-gradient(
              65deg,
              transparent 0,
              transparent 42px,
              rgba(100, 160, 220, 0.1) 42px,
              rgba(100, 160, 220, 0.1) 43px
            )
          `,
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-0 top-16 hidden h-[70%] w-[48%] xl:block"
        style={{
          backgroundImage:
            'linear-gradient(rgba(120,175,230,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(120,175,230,0.16) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 65% 60% at 55% 45%, black 0%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 65% 60% at 55% 45%, black 0%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <Container size="wide" className="relative py-10 sm:py-12 md:py-14 xl:py-12">
        {/*
          Stacked < xl (mobile + tablet through 1279px).
          Two columns only at xl+ (>=1280 desktop).
        */}
        <div className="flex flex-col gap-10 md:gap-12 xl:grid xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] xl:items-center xl:gap-10 2xl:gap-12">
          {/* Copy */}
          <div className="relative z-20 w-full max-w-2xl xl:max-w-none">
            <HeroBadge />
            <HeroHeading />
            <HeroDescription />
            <HeroCtas />
            <HeroTrust />
          </div>

          {/* Visual: orbit box THEN framework card — never overlapping */}
          <div className="relative z-10 flex w-full flex-col items-center gap-5 md:gap-6 xl:gap-4">
            <HeroOrbitStage />
            <HeroFrameworkCard />
          </div>
        </div>

        <FadeIn
          delay={0.15}
          className="relative z-10 mt-12 rounded-[24px] border border-[#E8F0F8] bg-white px-4 py-5 shadow-[0_14px_40px_rgba(16,42,67,0.06)] sm:mt-14 sm:rounded-[28px] sm:px-6 sm:py-6 md:mt-14 xl:mt-12 xl:px-8"
        >
          <FadeInStagger
            className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:grid-cols-5 xl:gap-4"
            stagger={0.06}
          >
            {statistics.map((stat, index) => (
              <FadeInItem
                key={stat.id}
                className={clsx(
                  'flex h-full min-w-0 flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:gap-3',
                  index === statistics.length - 1 &&
                    'col-span-2 justify-self-center md:col-span-1 md:justify-self-auto'
                )}
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#F0F6FC] sm:size-10 xl:size-11">
                  <span className="xl:hidden">
                    <StatIcon name={stat.icon} size={18} />
                  </span>
                  <span className="hidden xl:inline">
                    <StatIcon name={stat.icon} size={22} />
                  </span>
                </span>
                <div className="flex min-w-0 flex-col gap-0.5">
                  <p className="font-primary text-xl font-bold leading-none text-[#0A1B3D] sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-[11px] leading-snug text-[#5A6A7A] sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </FadeIn>
      </Container>
    </section>
  )
}

export default Hero
