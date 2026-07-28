import { Link } from 'react-router-dom'
import {
  ArrowRight,
  FlaskConical,
  Globe2,
  Target,
  Users,
} from 'lucide-react'
import Container from '@/components/common/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/common/FadeIn'
import { ceoVision } from '@/data/about'

const VALUE_ICONS = {
  users: Users,
  globe: Globe2,
  flask: FlaskConical,
  target: Target,
}

const CEOSection = () => {
  return (
    <section id="ceo-message" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 xl:gap-16">
          {/* Left — copy */}
          <div>
            <FadeIn>
              <div className="mb-4">
                <span className="mb-2 block h-px w-8 bg-[#2F80ED]" aria-hidden="true" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F80ED] sm:text-xs">
                  {ceoVision.badge}
                </p>
              </div>
              <h2 className="max-w-xl font-primary text-[1.75rem] font-bold leading-[1.2] tracking-tight text-[#0A1B3D] sm:text-3xl lg:text-[2.5rem] xl:text-4xl">
                {ceoVision.title.lead}{' '}
                <span className="text-[#2F80ED]">{ceoVision.title.accent}</span>
              </h2>
            </FadeIn>

            <FadeIn className="relative mt-8 border-b border-[#E8EEF5] pb-9" delay={0.06}>
              <span
                className="pointer-events-none absolute -left-1 -top-4 select-none font-primary text-7xl leading-none text-[#2F80ED]/20 sm:-top-5 sm:text-8xl"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <div className="relative z-[1] space-y-4 pl-2 text-[15px] leading-[1.75] text-[#5A6A7A] sm:pl-3 sm:text-base sm:leading-[1.8]">
                {ceoVision.quote.map((paragraph) => (
                  <p key={paragraph.slice(0, 36)}>{paragraph}</p>
                ))}
              </div>
              <span
                className="pointer-events-none absolute -bottom-2 right-2 select-none font-primary text-6xl leading-none text-[#2F80ED]/20 sm:right-4 sm:text-7xl"
                aria-hidden="true"
              >
                &rdquo;
              </span>
            </FadeIn>

            <FadeInStagger
              className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4 2xl:gap-0"
              delay={0.08}
            >
              {ceoVision.values.map((value, index) => {
                const Icon = VALUE_ICONS[value.icon] || Target
                return (
                  <FadeInItem key={value.id}>
                    <div
                      className={`flex h-full flex-col gap-2.5 2xl:px-4 ${
                        index > 0 ? '2xl:border-l 2xl:border-[#E8EEF5]' : ''
                      } ${index === 0 ? '2xl:pl-0' : ''} ${
                        index === ceoVision.values.length - 1 ? '2xl:pr-0' : ''
                      }`}
                    >
                      <span className="flex size-11 items-center justify-center rounded-full bg-[#EAF3FF] text-[#2F80ED]">
                        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h3 className="font-primary text-sm font-bold leading-snug text-[#0A1B3D]">
                        {value.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-[#6B7A8A] sm:text-[13px]">
                        {value.description}
                      </p>
                    </div>
                  </FadeInItem>
                )
              })}
            </FadeInStagger>

            <FadeIn className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" delay={0.12}>
              <Link
                to={ceoVision.primaryCta.to}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A1B3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#132847]"
              >
                {ceoVision.primaryCta.label}
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
              </Link>
              <Link
                to={ceoVision.secondaryCta.to}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0A1B3D]/30 bg-white px-6 py-3 text-sm font-semibold text-[#0A1B3D] transition hover:border-[#0A1B3D]/50 hover:bg-[#F7F9FC]"
              >
                {ceoVision.secondaryCta.label}
              </Link>
            </FadeIn>
          </div>

          {/* Right — CEO portrait (matches reference) */}
          <FadeIn className="mx-auto w-full max-w-[380px] lg:max-w-[420px]" delay={0.1} y={24}>
            <div className="relative pt-3 pl-3">
              {/* Blue L-bracket accent */}
              <span
                className="pointer-events-none absolute left-0 top-0 z-10 h-[72px] w-[72px] rounded-tl-[18px] border-l-[3px] border-t-[3px] border-[#2F80ED] sm:h-20 sm:w-20"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[18px] bg-[#0A1B3D] shadow-[0_28px_64px_rgba(16,42,67,0.22)]">
                <img
                  src={ceoVision.portrait}
                  alt={ceoVision.name}
                  className="aspect-[3/4] h-auto w-full object-contain object-center"
                  width={480}
                  height={640}
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="font-primary text-xl font-bold tracking-tight text-[#0A1B3D] sm:text-[1.35rem]">
                {ceoVision.name}
              </p>
              <p className="mt-1.5 text-sm font-medium text-[#6B7A8A] sm:text-[15px]">
                {ceoVision.role}
              </p>
              <span
                className="mx-auto mt-3.5 block h-[3px] w-11 rounded-full bg-[#2F80ED]"
                aria-hidden="true"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export default CEOSection
