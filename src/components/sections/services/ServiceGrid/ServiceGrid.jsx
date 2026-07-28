import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/common/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/common/FadeIn'
import { services, servicesOverview } from '@/data/services'

const ServiceGrid = () => {
  return (
    <section
      id="our-services"
      className="scroll-mt-28 overflow-x-clip bg-[#F7F9FC] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <Container>
        <FadeIn className="mx-auto max-w-3xl px-1 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F80ED] sm:text-xs">
            {servicesOverview.badge}
          </p>
          <h2 className="font-primary text-[1.5rem] font-bold leading-tight text-[#0A1B3D] sm:text-[1.75rem] md:text-3xl lg:text-4xl">
            {servicesOverview.title.lead}
            <br />
            <span className="text-[#2F80ED]">{servicesOverview.title.accent}</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#6B7A8A] sm:text-[15px] md:text-base">
            {servicesOverview.description}
          </p>
        </FadeIn>

        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12 md:mt-14">
          <div
            className="pointer-events-none absolute bottom-8 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-[#D5DEE8] md:block"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute left-1/2 top-[28%] hidden size-2.5 -translate-x-1/2 rounded-full bg-[#2F80ED] md:block"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute left-1/2 top-[72%] hidden size-2.5 -translate-x-1/2 rounded-full bg-[#2F80ED] md:block"
            aria-hidden="true"
          />

          <FadeInStagger
            className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-x-8 md:gap-y-7 lg:gap-x-10 lg:gap-y-8"
            delay={0.06}
          >
            {services.map((service) => (
              <FadeInItem key={service.id}>
                <article className="flex h-full min-w-0 flex-col rounded-2xl border border-[#E8EEF5] border-b-[#2F80ED]/35 border-l-[#2F80ED]/50 bg-white p-5 shadow-[0_12px_36px_rgba(16,42,67,0.06)] sm:p-6 md:p-7">
                  <div className="mb-3 flex min-w-0 items-start gap-3 sm:mb-4">
                    <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#EAF3FF] p-2 sm:size-12">
                      <img
                        src={service.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="size-8 object-contain sm:size-9"
                        draggable={false}
                      />
                    </span>
                    <h3 className="min-w-0 font-primary text-base font-bold leading-snug text-[#0A1B3D] sm:text-lg md:text-xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-[#6B7A8A]">
                    {service.cardDescription || service.description}
                  </p>
                  <Link
                    to={`/services#${service.slug}`}
                    className="mt-4 inline-flex min-h-11 items-center gap-1.5 py-1 text-sm font-semibold text-[#2F80ED] transition hover:gap-2 sm:mt-5"
                  >
                    Read More
                    <ArrowRight size={15} strokeWidth={2.25} aria-hidden="true" />
                  </Link>
                </article>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </section>
  )
}

export default ServiceGrid
