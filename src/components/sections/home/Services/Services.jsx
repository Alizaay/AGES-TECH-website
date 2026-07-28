import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'
import Container from '@/components/common/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/common/FadeIn'
import services, { servicesSummary } from '@/data/services'
import { statistics } from '@/data/home/statistics'

const accent = {
  blue: {
    text: 'text-[#2F80ED]',
    dot: 'bg-[#2F80ED]',
    glow: 'shadow-[0_0_0_6px_rgba(47,128,237,0.12)]',
    ring: 'ring-[#2F80ED]/25',
    card: 'hover:shadow-[0_12px_32px_rgba(47,128,237,0.14)]',
  },
  purple: {
    text: 'text-[#8B5CF6]',
    dot: 'bg-[#A78BFA]',
    glow: 'shadow-[0_0_0_6px_rgba(139,92,246,0.12)]',
    ring: 'ring-[#8B5CF6]/25',
    card: 'hover:shadow-[0_12px_32px_rgba(139,92,246,0.14)]',
  },
  teal: {
    text: 'text-[#14B8A6]',
    dot: 'bg-[#2DD4BF]',
    glow: 'shadow-[0_0_0_6px_rgba(20,184,166,0.12)]',
    ring: 'ring-[#14B8A6]/25',
    card: 'hover:shadow-[0_12px_32px_rgba(20,184,166,0.14)]',
  },
  violet: {
    text: 'text-[#7C3AED]',
    dot: 'bg-[#8B5CF6]',
    glow: 'shadow-[0_0_0_6px_rgba(124,58,237,0.12)]',
    ring: 'ring-[#7C3AED]/25',
    card: 'hover:shadow-[0_12px_32px_rgba(124,58,237,0.14)]',
  },
}

const ArrowRight = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const StatIcon = ({ name }) => {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (name) {
    case 'industries':
      return (
        <svg {...common}>
          <path d="M4 21V9l4-2.5V9l4-2.5V9l4-2.5V21" />
          <path d="M4 21h16" />
          <path d="M7 13h1.5M7 16h1.5M11.5 13H13M11.5 16H13M16 13h1.5M16 16h1.5" />
        </svg>
      )
    case 'projects':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="2.75" />
          <circle cx="16.5" cy="8.5" r="2.25" />
          <path d="M3.5 19c1-3 3.2-4.5 5.5-4.5S13.5 16 14.5 19" />
          <path d="M13.5 14.2c1.3-.2 3 .5 4.5 2.8" />
        </svg>
      )
    case 'partners':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17" />
          <path d="M12 3.5c2.2 2.5 3.3 5.2 3.3 8.5S14.2 18 12 20.5C9.8 18 8.7 15.3 8.7 12S9.8 6 12 3.5z" />
        </svg>
      )
    case 'satisfaction':
      return (
        <svg {...common}>
          <path d="M12 20.2S4.8 15.6 4.8 10.2A3.9 3.9 0 0112 7.8a3.9 3.9 0 017.2 2.4c0 5.4-7.2 10-7.2 10z" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
  }
}

const EASE_OUT = [0.16, 1, 0.3, 1]
const EASE_INOUT = [0.45, 0, 0.55, 1]

/** Split summary copy into reveal lines (same text, staggered). */
function splitDescriptionLines(text) {
  const parts = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)
  if (!parts || parts.length <= 1) {
    const mid = Math.ceil(text.length / 2)
    const breakAt = text.lastIndexOf(' ', mid)
    if (breakAt > 20) {
      return [text.slice(0, breakAt).trim(), text.slice(breakAt).trim()]
    }
    return [text]
  }
  return parts.map((p) => p.trim()).filter(Boolean)
}

/**
 * Right-side "Our Services" card — pixel-matched to Figma leaf frame.
 * Figma: large TL/BR radii, sharp TR/BL tips, white fill, 4 blue corner accents.
 */
function ServicesFeatureCard({ title, description, stats, reduceMotion }) {
  const lines = splitDescriptionLines(description)

  const cardDuration = 0.7
  const borderDelay = 0.4
  const borderDuration = 1.05
  const headingDelay = borderDelay + borderDuration * 0.75
  const linesStart = headingDelay + 0.35
  const lineStagger = 0.1
  const iconsStart = linesStart + lines.length * lineStagger + 0.15
  const iconStagger = 0.1
  const dotsDelay = iconsStart + stats.length * iconStagger + 0.15

  return (
    <motion.div
      className="relative flex h-full min-h-0 flex-col justify-center overflow-hidden rounded-[32px_12px_32px_16px] px-5 py-10 sm:rounded-[64px_16px_64px_20px] sm:px-8 sm:py-12 md:rounded-[80px_18px_80px_22px] lg:min-h-full lg:px-9 xl:min-h-[500px] xl:rounded-[120px_20px_120px_28px] xl:px-11 xl:py-14"
      style={{
        background:
          'radial-gradient(ellipse 80% 70% at 50% 42%, #FFFFFF 0%, #F9FAFC 55%, #F3F5F8 100%)',
        boxShadow:
          '0 28px 64px rgba(15, 23, 42, 0.09), 0 0 0 1px rgba(200, 210, 222, 0.45)',
      }}
      initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: cardDuration, ease: EASE_OUT }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              boxShadow:
                '0 32px 70px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(200, 210, 222, 0.45)',
              transition: { duration: 0.25, ease: EASE_INOUT },
            }
      }
    >
      {/* Soft white frame (Figma outer rim) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[32px_12px_32px_16px] sm:rounded-[64px_16px_64px_20px] md:rounded-[80px_18px_80px_22px] xl:rounded-[120px_20px_120px_28px]"
        style={{
          boxShadow:
            'inset 0 0 0 5px #FFFFFF, inset 0 0 0 6px rgba(210, 218, 228, 0.55)',
        }}
        aria-hidden="true"
      />

      {/* Top-left blue arc */}
      <svg
        className="pointer-events-none absolute left-2 top-2 h-16 w-16 sm:left-3 sm:top-3 sm:h-[136px] sm:w-[136px]"
        viewBox="0 0 136 136"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 8 124 C 8 48 48 8 124 8"
          stroke="#2F80ED"
          strokeWidth="7"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={reduceMotion ? undefined : { pathLength: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            pathLength: {
              delay: borderDelay,
              duration: borderDuration,
              ease: EASE_INOUT,
            },
          }}
        />
      </svg>

      {/* Top-right blue leaf tip */}
      <motion.span
        className="pointer-events-none absolute -right-0.5 top-3 block h-8 w-8 sm:top-4"
        style={{
          background: '#2F80ED',
          clipPath: 'polygon(35% 0%, 100% 0%, 100% 65%, 55% 100%, 0% 40%)',
          borderTopRightRadius: '4px',
        }}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.5 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          delay: borderDelay + 0.35,
          duration: 0.35,
          ease: EASE_OUT,
        }}
        aria-hidden="true"
      />

      {/* Bottom-right blue arc */}
      <svg
        className="pointer-events-none absolute bottom-2 right-2 h-16 w-16 sm:bottom-3 sm:right-3 sm:h-[136px] sm:w-[136px]"
        viewBox="0 0 136 136"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 128 12 C 128 88 88 128 12 128"
          stroke="#2F80ED"
          strokeWidth="7"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={reduceMotion ? undefined : { pathLength: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            pathLength: {
              delay: borderDelay + 0.12,
              duration: borderDuration,
              ease: EASE_INOUT,
            },
          }}
        />
      </svg>

      {/* Bottom-left blue slant tip */}
      <svg
        className="pointer-events-none absolute bottom-3 left-2 h-10 w-10 sm:bottom-4 sm:left-3"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 4 28 L 28 36"
          stroke="#2F80ED"
          strokeWidth="7"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={reduceMotion ? undefined : { pathLength: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            pathLength: {
              delay: borderDelay + 0.4,
              duration: 0.45,
              ease: EASE_INOUT,
            },
          }}
        />
      </svg>

      {/* 3×3 dots — top right interior */}
      <div
        className="absolute right-8 top-8 hidden grid-cols-3 gap-[6px] sm:right-14 sm:top-12 sm:grid"
        aria-hidden="true"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <motion.span
            key={index}
            className="size-[5px] rounded-full bg-[#C8D0DA]"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.5 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              delay: dotsDelay + index * 0.03,
              duration: 0.28,
              ease: EASE_OUT,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[460px] flex-col items-center pb-4 text-center sm:pb-0">
        <motion.h3
          className="font-primary text-[1.5rem] font-bold leading-tight text-[#0A1B3D] sm:text-[2rem]"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            delay: headingDelay,
            duration: 0.3,
            ease: EASE_OUT,
          }}
        >
          {title}
        </motion.h3>

        <motion.span
          className="mt-3 block h-[3px] w-[34px] rounded-full bg-[#2F80ED]"
          initial={reduceMotion ? false : { opacity: 0, scaleX: 0.4 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            delay: headingDelay + 0.12,
            duration: 0.35,
            ease: EASE_OUT,
          }}
          style={{ originX: 0.5 }}
          aria-hidden="true"
        />

        <div className="mt-5 max-w-[400px] text-[13px] leading-[1.75] text-[#4A5568] sm:mt-6 sm:text-[14px]">
          {lines.map((line, index) => (
            <motion.span
              key={`${index}-${line.slice(0, 12)}`}
              className="inline"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                delay: linesStart + index * lineStagger,
                duration: 0.3,
                ease: EASE_OUT,
              }}
            >
              {line}
              {index < lines.length - 1 ? ' ' : ''}
            </motion.span>
          ))}
        </div>

        <div className="mt-8 grid w-full grid-cols-2 gap-x-3 gap-y-6 sm:mt-12 xl:flex xl:flex-nowrap xl:items-start xl:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={clsx(
                'flex min-w-0 flex-col items-center px-1 text-center xl:flex-1 xl:px-2',
                index > 0 && 'xl:border-l xl:border-[#E2E8F0]'
              )}
            >
              <motion.span
                className="flex size-9 items-center justify-center text-[#2F80ED]"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
                whileInView={
                  reduceMotion ? undefined : { opacity: 1, scale: 1 }
                }
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  delay: iconsStart + index * iconStagger,
                  duration: 0.35,
                  ease: EASE_OUT,
                }}
              >
                <StatIcon name={stat.icon} />
              </motion.span>
              <motion.p
                className="mt-2.5 font-primary text-[1.35rem] font-bold leading-none text-[#0A1B3D] sm:text-[1.6rem]"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={
                  reduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  delay: iconsStart + index * iconStagger + 0.06,
                  duration: 0.3,
                  ease: EASE_OUT,
                }}
              >
                {stat.value}
              </motion.p>
              <motion.p
                className="mt-1.5 text-[10px] leading-snug text-[#6B7A8A] xl:max-w-[110px] sm:text-[12px]"
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                whileInView={
                  reduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  delay: iconsStart + index * iconStagger + 0.1,
                  duration: 0.28,
                  ease: EASE_OUT,
                }}
              >
                {stat.label}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}


const Services = () => {
  const prefersReducedMotion = useReducedMotion()
  const featuredStats = statistics.slice(0, 4)

  return (
    <section id="services" className="section bg-[#FBFCFD]">
      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn as="p" delay={0.05} className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2F80ED]">
            WHAT WE DO
          </FadeIn>
          <FadeIn as="h2" delay={0.12} y={22} className="mt-4 font-primary text-3xl font-bold tracking-tight text-[#0A1B3D] sm:text-4xl lg:text-[2.75rem]">
            Comprehensive Solutions.
            <br />
            <span className="text-[#2F80ED]">Measurable Impact.</span>
          </FadeIn>
          <FadeIn as="p" delay={0.2} className="mt-4 text-base leading-relaxed text-[#5A6A7A] sm:text-lg">
            AGES-TECH combines strategy, technology, and innovation to deliver
            integrated services that power scalable business lines.
          </FadeIn>
          <FadeIn delay={0.28}>
            <span className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#2F80ED]" />
          </FadeIn>
        </div>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="relative">
            <div
              className="pointer-events-none absolute bottom-10 left-[11px] top-10 w-px bg-[#D5DEE8]"
              aria-hidden="true"
            />

            <FadeInStagger as="ul" className="relative space-y-5" stagger={0.1}>
              {services.map((service) => {
                const tone = accent[service.accent]

                return (
                  <FadeInItem key={service.id} as="li" className="relative pl-8">
                    <span
                      className={clsx(
                        'absolute left-[7px] top-1/2 z-10 size-2.5 -translate-y-1/2 rounded-full ring-[5px] ring-[#FBFCFD]',
                        tone.dot
                      )}
                    />

                    <Link
                      to={`/services#${service.slug}`}
                      className={clsx(
                        'group flex flex-col items-start gap-3 rounded-[22px] border border-[#E8EEF5] bg-white py-3.5 pl-3 pr-3 shadow-[0_10px_28px_rgba(16,42,67,0.06)] transition duration-300 sm:flex-row sm:items-center sm:gap-4 sm:rounded-[26px] sm:py-4 sm:pl-4 sm:pr-4',
                        tone.card
                      )}
                    >
                      <span className="flex w-full items-center gap-2.5 sm:w-auto sm:contents">
                        <span
                          className={clsx(
                            'flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 sm:size-[58px]',
                            tone.glow,
                            tone.ring
                          )}
                        >
                          <img
                            src={service.icon}
                            alt=""
                            className="size-[86%] object-contain"
                            width={50}
                            height={50}
                            draggable={false}
                          />
                        </span>

                        <span
                          className={clsx(
                            'shrink-0 font-primary text-sm font-bold sm:text-xl',
                            tone.text
                          )}
                        >
                          {service.number}
                        </span>

                        <span className="min-w-0 flex-1 sm:hidden">
                          <span className="block font-primary text-[15px] font-bold leading-snug text-[#0A1B3D]">
                            {service.shortTitle || service.title}
                          </span>
                        </span>
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="hidden font-primary text-[15px] font-bold leading-snug text-[#0A1B3D] sm:block sm:text-base">
                          {service.shortTitle || service.title}
                        </span>
                        <span className="block text-[12px] leading-relaxed text-[#6B7A8A] line-clamp-2 sm:mt-1 sm:text-[13px] sm:line-clamp-none">
                          {service.cardDescription || service.description}
                        </span>
                      </span>

                      <span className="hidden size-9 shrink-0 items-center justify-center rounded-full border border-[#D7E3F0] text-[#2F80ED] transition group-hover:border-[#2F80ED] group-hover:bg-[#EFF6FF] sm:inline-flex">
                        <ArrowRight />
                      </span>
                    </Link>
                  </FadeInItem>
                )
              })}
            </FadeInStagger>
          </div>

          <div className="relative h-full min-h-0 lg:min-h-full">
            <ServicesFeatureCard
              title={servicesSummary.title}
              description={servicesSummary.description}
              stats={featuredStats}
              reduceMotion={Boolean(prefersReducedMotion)}
            />
          </div>
        </div>

        <FadeIn className="mx-auto mt-12 flex max-w-5xl flex-col items-stretch justify-between gap-5 rounded-[22px] border border-[#E8EEF5] bg-white px-5 py-4 shadow-[0_14px_40px_rgba(16,42,67,0.08)] sm:flex-row sm:items-center sm:rounded-[28px] sm:px-7 sm:py-5">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-[#2F80ED] shadow-[0_0_0_6px_rgba(47,128,237,0.08)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="font-semibold text-[#0A1B3D]">
                Ready to build what&apos;s next?
              </p>
              <p className="text-sm text-[#6B7A8A]">
                Let&apos;s create lasting impact together.
              </p>
            </div>
          </div>

          <Link
            to="/contactus"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A1B3D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#132847] sm:w-auto"
          >
            Start a Project
            <ArrowRight className="text-white" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  )
}

export default Services
