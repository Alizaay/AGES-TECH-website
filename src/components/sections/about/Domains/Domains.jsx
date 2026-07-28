import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  BarChart3,
  Brain,
  Cloud,
  Cpu,
  Dna,
  Radio,
  ShieldCheck,
  X,
} from 'lucide-react'
import Container from '@/components/common/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/common/FadeIn'
import {
  domainColors,
  domainsIntro,
  engineeringDomains,
  industries,
  industriesIntro,
} from '@/data/about'
import IndustryIcon from './IndustryIcon'

const DOMAIN_ICONS = {
  brain: Brain,
  barChart: BarChart3,
  cloud: Cloud,
  shield: ShieldCheck,
  cpu: Cpu,
  dna: Dna,
  radio: Radio,
}

const domainById = Object.fromEntries(engineeringDomains.map((d) => [d.id, d]))

const DomainTooltipDot = ({ domainId }) => {
  const domain = domainById[domainId]
  const tooltipId = useId()
  const rootRef = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  if (!domain) return null

  const label = domain.description.split('—')[0].trim() || domain.title

  return (
    <span ref={rootRef} className="group relative inline-flex items-center justify-center">
      <button
        type="button"
        className="relative flex size-11 min-h-11 min-w-11 items-center justify-center rounded-full outline-none ring-offset-2 transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#2F80ED]"
        aria-describedby={tooltipId}
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((value) => !value)}
      >
        <span
          className="size-3 rounded-full"
          style={{ backgroundColor: domain.color }}
          aria-hidden="true"
        />
      </button>
      <span
        id={tooltipId}
        role="tooltip"
        className={`pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-20 w-max max-w-[min(220px,calc(100vw-2rem))] -translate-x-1/2 rounded-md bg-[#1A2332] px-2.5 py-1.5 text-left text-[11px] font-medium leading-snug text-white shadow-lg transition duration-150 sm:max-w-[260px] sm:text-xs ${
          open
            ? 'opacity-100'
            : 'opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
        }`}
      >
        {label}
        <span
          className="absolute left-1/2 top-full -translate-x-1/2 border-[5px] border-transparent border-t-[#1A2332]"
          aria-hidden="true"
        />
      </span>
    </span>
  )
}

const IndustryModal = ({ industry, onClose }) => {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0A1B3D]/55 backdrop-blur-[2px]"
        aria-label="Close dialog"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`industry-modal-${industry.id}`}
        className="relative z-[1] max-h-[min(90dvh,720px)] w-full max-w-md overflow-y-auto overscroll-contain rounded-2xl border border-[#D6E8FF] bg-white px-6 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-center shadow-[0_0_0_4px_rgba(47,128,237,0.12),0_24px_60px_rgba(16,42,67,0.25)] sm:max-w-lg sm:px-10 sm:py-10"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full text-[#6B7A8A] transition hover:bg-[#F0F4F8] hover:text-[#0A1B3D] sm:right-4 sm:top-4"
          aria-label="Close"
        >
          <X size={18} strokeWidth={2} />
        </button>

        <div className="mx-auto mb-5 flex size-20 items-center justify-center sm:size-24">
          <IndustryIcon
            name={industry.icon}
            alt=""
            className="size-16 sm:size-20"
          />
        </div>

        <h3
          id={`industry-modal-${industry.id}`}
          className="font-primary text-xl font-bold text-[#0A1B3D] sm:text-2xl"
        >
          {industry.shortTitle || industry.title}
        </h3>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-[#5A6A7A] sm:text-[15px]">
          {industry.modalDescription || industry.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {industry.domains.map((domainId) => {
            const domain = domainById[domainId]
            if (!domain) return null
            return (
              <span
                key={domainId}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F7FB] px-2.5 py-1 text-[11px] font-medium text-[#0A1B3D]"
              >
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: domain.color }}
                />
                {domain.title}
              </span>
            )
          })}
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="mt-8 inline-flex min-w-[140px] items-center justify-center rounded-xl bg-gradient-to-r from-[#4A5D73] to-[#0A1B3D] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_0_3px_rgba(47,128,237,0.18)] transition hover:brightness-110"
        >
          Exit
        </button>
      </div>
    </div>,
    document.body
  )
}

const Domains = () => {
  const [activeIndustry, setActiveIndustry] = useState(null)

  return (
    <section className="bg-[#F7F9FC] py-16 sm:py-20 lg:py-24">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F80ED] sm:text-xs">
            {domainsIntro.badge}
          </p>
          <h2 className="font-primary text-[1.75rem] font-bold leading-tight text-[#0A1B3D] sm:text-3xl lg:text-4xl">
            {domainsIntro.title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#6B7A8A] sm:text-base">
            {domainsIntro.description}
          </p>
        </FadeIn>

        <div id="technologies" className="scroll-mt-28 mt-12 sm:mt-14">
          <FadeIn className="mb-8 flex justify-center">
            <span className="inline-flex rounded-full bg-[#0A1B3D] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white sm:text-xs">
              Engineering Domains
            </span>
          </FadeIn>

          <FadeInStagger className="mx-auto grid max-w-5xl gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3" delay={0.05}>
            {engineeringDomains.map((domain) => {
              const Icon = DOMAIN_ICONS[domain.icon] || Brain
              return (
                <FadeInItem key={domain.id}>
                  <div className="flex gap-4">
                    <span
                      className="mt-1.5 size-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: domain.color }}
                      aria-hidden="true"
                    />
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#D9E2EC] bg-white text-[#0A1B3D]">
                      <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-primary text-base font-bold text-[#0A1B3D]">
                        {domain.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#6B7A8A]">
                        {domain.description}
                      </p>
                    </div>
                  </div>
                </FadeInItem>
              )
            })}
          </FadeInStagger>
        </div>

        <div id="industries" className="scroll-mt-28 mt-16 sm:mt-20">
          <FadeIn className="mb-4 flex justify-center">
            <span className="inline-flex rounded-full bg-[#0A1B3D] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white sm:text-xs">
              Industries We Transform
            </span>
          </FadeIn>
          <FadeIn className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-[15px] leading-relaxed text-[#6B7A8A] sm:text-base">
              {industriesIntro}
            </p>
          </FadeIn>

          <FadeInStagger className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6" delay={0.06}>
            {industries.map((industry) => (
              <FadeInItem key={industry.id}>
                <article className="flex h-full flex-col items-center rounded-2xl border border-[#E8EEF5] bg-white px-5 py-7 text-center shadow-[0_10px_30px_rgba(16,42,67,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(16,42,67,0.12)] sm:px-6">
                  <div className="mb-4 flex size-16 items-center justify-center sm:size-[4.5rem]">
                    <IndustryIcon
                      name={industry.icon}
                      alt=""
                      className="size-14 sm:size-16"
                    />
                  </div>

                  <h3 className="font-primary text-base font-bold leading-snug text-[#0A1B3D] sm:text-lg">
                    {industry.title}
                  </h3>

                  <div className="mt-3 flex items-center justify-center gap-2.5">
                    {industry.domains.map((domainId) => (
                      <DomainTooltipDot key={domainId} domainId={domainId} />
                    ))}
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5A6A7A]">
                    {industry.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setActiveIndustry(industry)}
                    className="mt-5 inline-flex w-full max-w-[200px] items-center justify-center gap-1.5 rounded-full bg-[#0A1B3D] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#132847] active:scale-[0.98]"
                  >
                    Read More
                    <span aria-hidden="true">→</span>
                  </button>
                </article>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-2xl border border-[#E8EEF5] bg-white px-4 py-4 sm:gap-x-7 sm:px-5">
            {engineeringDomains.map((domain) => (
              <div key={domain.id} className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: domain.color }}
                  aria-hidden="true"
                />
                <span className="text-[11px] font-medium text-[#0A1B3D] sm:text-[13px]">
                  {domain.title}
                </span>
              </div>
            ))}
          </FadeIn>
        </div>
      </Container>

      {activeIndustry && (
        <IndustryModal industry={activeIndustry} onClose={() => setActiveIndustry(null)} />
      )}
    </section>
  )
}

export default Domains
