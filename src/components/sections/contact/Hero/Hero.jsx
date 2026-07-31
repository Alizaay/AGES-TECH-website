import {
  ArrowRight,
  Check,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import Container from '@/components/common/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/common/FadeIn'
import { contactHero } from '@/data/contact'

const TRUST_ICONS = {
  clock: Clock3,
  globe: Globe2,
  shield: ShieldCheck,
}

const DETAIL_ICONS = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
  globe: Globe2,
}

const Hero = () => {
  const { connectCard } = contactHero

  return (
    <section
      id="contact-hero"
      className="relative scroll-mt-28 overflow-x-clip bg-[#F7F9FC] pb-12 pt-8 sm:pb-16 sm:pt-12 md:pb-20 md:pt-14"
    >
      <div
        className="pointer-events-none absolute left-[4%] top-[14%] hidden h-40 w-40 opacity-40 xs:block sm:left-[8%] sm:top-[18%] sm:h-48 sm:w-48"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(47,128,237,0.35) 1px, transparent 0)',
          backgroundSize: '14px 14px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[10%] left-[4%] hidden h-32 w-44 opacity-30 sm:block sm:bottom-[12%] sm:left-[6%] sm:h-40 sm:w-56"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 140" className="h-full w-full text-[#2F80ED]/40">
          <circle cx="20" cy="100" r="3" fill="currentColor" />
          <circle cx="70" cy="40" r="3" fill="currentColor" />
          <circle cx="140" cy="80" r="3" fill="currentColor" />
          <circle cx="180" cy="30" r="3" fill="currentColor" />
          <path
            d="M20 100 L70 40 L140 80 L180 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <Container className="relative z-[1]">
        <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 xl:gap-16">
          <div className="flex min-w-0 flex-col justify-center">
            <FadeIn>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F80ED] sm:text-xs">
                {contactHero.badge}
              </p>
              <h1 className="font-primary text-[1.75rem] font-bold leading-[1.2] tracking-tight text-[#0A1B3D] xs:text-[2rem] sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
                {contactHero.title.lead}{' '}
                <span className="text-[#2F80ED]">{contactHero.title.accent}</span>{' '}
                {contactHero.title.end}
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#5A6A7A] sm:mt-5 sm:text-[15px] md:text-base">
                {contactHero.description}
              </p>
            </FadeIn>

            <FadeIn className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center" delay={0.08}>
              <a
                href={contactHero.primaryCta.href}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#2F80ED] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2569c7] sm:w-auto"
              >
                {contactHero.primaryCta.label}
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
              </a>
              <a
                href={contactHero.secondaryCta.href}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#2F80ED] bg-white px-6 py-3 text-sm font-semibold text-[#0A1B3D] transition hover:bg-[#EAF3FF] sm:w-auto"
              >
                {contactHero.secondaryCta.label}
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
              </a>
            </FadeIn>

            <FadeInStagger
              className="mt-8 grid grid-cols-1 gap-4 xs:grid-cols-1 sm:mt-10 sm:grid-cols-3 sm:gap-3 md:gap-4"
              delay={0.1}
            >
              {contactHero.trust.map((item) => {
                const Icon = TRUST_ICONS[item.icon] || Clock3
                return (
                  <FadeInItem key={item.id}>
                    <div className="flex min-w-0 items-start gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-[#2F80ED]">
                        <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <p className="text-sm font-semibold leading-snug text-[#0A1B3D]">
                        {item.label}
                      </p>
                    </div>
                  </FadeInItem>
                )
              })}
            </FadeInStagger>
          </div>

          <FadeIn delay={0.1} y={20} className="min-w-0">
            <aside className="rounded-2xl bg-[#0A1B3D] p-5 text-white shadow-[0_24px_60px_rgba(10,27,61,0.28)] sm:p-6 md:p-7 lg:p-8">
              <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-[#2F80ED] sm:size-12">
                <MessageCircle size={22} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h2 className="font-primary text-xl font-bold sm:text-2xl">{connectCard.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {connectCard.description}
              </p>

              <ul className="mt-5 divide-y divide-white/10 sm:mt-6">
                {connectCard.details.map((detail) => {
                  const Icon = DETAIL_ICONS[detail.icon] || Mail
                  return (
                    <li
                      key={detail.id}
                      className="flex min-w-0 items-start gap-3 py-3.5 first:pt-0 sm:items-center"
                    >
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#2F80ED] sm:mt-0">
                        <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 break-words text-sm font-medium leading-snug">
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="transition hover:text-[#7EC8F8]"
                          >
                            {detail.label}
                          </a>
                        ) : (
                          detail.label
                        )}
                      </span>
                    </li>
                  )
                })}
              </ul>

              <ul className="mt-5 space-y-2.5">
                {connectCard.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm sm:items-center">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#2F80ED] text-white sm:mt-0">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href={connectCard.cta.href}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#2F80ED] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2569c7] sm:mt-7"
              >
                {connectCard.cta.label}
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
              </a>
            </aside>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export default Hero
