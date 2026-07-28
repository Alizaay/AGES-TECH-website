import { ChevronRight } from 'lucide-react'
import Container from '@/components/common/Container'
import { FadeIn } from '@/components/common/FadeIn'
import { journeyFrameworkIntro } from '@/data/journey'

const FrameworkIntro = () => {
  return (
    <section id="framework" className="scroll-mt-28 bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <FadeIn>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F80ED] sm:text-xs">
              {journeyFrameworkIntro.badge}
            </p>
            <h2 className="font-primary text-[1.75rem] font-bold leading-tight text-[#0A1B3D] sm:text-3xl lg:text-4xl">
              {journeyFrameworkIntro.title}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6B7A8A] sm:text-base">
              {journeyFrameworkIntro.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="flex items-center gap-4 rounded-2xl border border-[#E8EEF5] bg-white p-5 shadow-[0_14px_40px_rgba(16,42,67,0.08)] sm:gap-5 sm:p-6">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] font-primary text-3xl font-bold text-[#2F80ED] sm:size-[4.5rem] sm:text-4xl">
                {journeyFrameworkIntro.callout.number}
              </span>
              <p className="font-primary text-base font-semibold leading-snug text-[#0A1B3D] sm:text-lg">
                {journeyFrameworkIntro.callout.textBefore}{' '}
                <span className="text-[#2F80ED]">
                  {journeyFrameworkIntro.callout.textAccent}
                </span>
              </p>
              <ChevronRight
                className="ml-auto hidden size-5 shrink-0 text-[#2F80ED] sm:block"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export default FrameworkIntro
