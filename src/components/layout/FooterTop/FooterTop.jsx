import BrandLogo from '@/components/common/BrandLogo'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/common/FadeIn'
import { contact } from '@/config/contact'
import { socialLinks } from '@/config/social'

const ContactIcon = ({ type }) => {
  if (type === 'phone') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.5-1.1a2 2 0 012.1-.4c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'email') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M22 6l-10 7L2 6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

const SocialIcon = ({ name }) => {
  if (name === 'linkedin') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.7 4.8 6.1V23h-4v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V23h-4V8.5z" />
      </svg>
    )
  }

  if (name === 'twitter') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.57l-5.14-6.72L5.1 22H1.84l8.03-9.17L1.5 2h6.73l4.64 6.16L18.244 2zm-1.15 18h1.81L7.01 3.94H5.07L17.094 20z" />
      </svg>
    )
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  )
}

const FooterTop = () => {
  const contactItems = [
    {
      type: 'phone',
      value: contact.phone,
      label: 'Call us',
      href: `tel:${contact.phoneE164}`,
    },
    {
      type: 'email',
      value: contact.email,
      label: 'Email us',
      href: `mailto:${contact.email}`,
    },
    { type: 'address', value: contact.address, label: 'Visit us' },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Dot pattern — left side */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-28 opacity-50 sm:w-40 md:w-52"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(77,183,232,0.55) 1px, transparent 0)',
          backgroundSize: '16px 16px',
          maskImage: 'linear-gradient(90deg, black 0%, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(90deg, black 0%, transparent 85%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:grid-cols-3 lg:gap-0 lg:px-10 lg:py-20">
        {/* Brand */}
        <FadeIn className="flex flex-col items-start lg:pr-10 xl:pr-14">
          <div className="flex items-center gap-3 sm:gap-4">
            <BrandLogo lockup="mark" />
            <div className="flex min-w-0 flex-col">
              <span className="font-primary text-lg font-bold tracking-[0.06em] text-white sm:text-xl">
                AGES-TECH
              </span>
              <span className="mt-2 block h-[3px] w-11 rounded-full bg-[#2F80ED]" />
              <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-white/80">
                Engineering the Future of Business Lines.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Contact */}
        <FadeInStagger className="space-y-5 border-white/10 sm:space-y-6 md:border-y md:py-6 lg:border-x lg:border-y-0 lg:px-10 lg:py-0 xl:px-12" stagger={0.08}>
          {contactItems.map((item) => (
            <FadeInItem key={item.type} className="flex items-start gap-3.5 sm:gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#2F80ED]/20 text-[#7EC8F8] shadow-[0_0_18px_rgba(47,128,237,0.45)] sm:size-11">
                <ContactIcon type={item.type} />
              </span>
              <div className="min-w-0 pt-0.5">
                {item.href ? (
                  <a
                    href={item.href}
                    className="break-words text-sm font-semibold leading-snug text-white transition hover:text-[#7EC8F8] sm:text-base"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="break-words text-sm font-semibold leading-snug text-white sm:text-base">
                    {item.value}
                  </p>
                )}
                <p className="mt-0.5 text-xs text-white/55 sm:text-[13px]">{item.label}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Social */}
        <FadeIn delay={0.12} className="lg:pl-10 xl:pl-14">
          <h3 className="font-primary text-lg font-bold text-white sm:text-xl">
            Let&apos;s connect
          </h3>
          <span className="mt-3 block h-[3px] w-11 rounded-full bg-[#2F80ED]" />

          <ul className="mt-5 flex flex-wrap gap-3 sm:mt-6">
            {socialLinks.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex size-10 items-center justify-center rounded-full bg-[#2F80ED]/20 text-[#7EC8F8] shadow-[0_0_16px_rgba(47,128,237,0.4)] transition hover:bg-[#2F80ED] hover:text-white sm:size-11"
                >
                  <SocialIcon name={item.key} />
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-white/60 sm:mt-5">
            Follow us for the latest insights, innovations, and updates.
          </p>
        </FadeIn>
      </div>

      {/* Bottom-right decorative curve */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-24 w-32 sm:h-32 sm:w-44 md:h-40 md:w-56"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 140"
          className="h-full w-full"
          fill="none"
          preserveAspectRatio="xMaxYMax meet"
        >
          <path
            d="M200 140 V50 C170 20 120 8 70 28"
            stroke="#2F80ED"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.95"
          />
          <path
            d="M200 140 V70 C175 45 140 35 100 48"
            stroke="#4DB7E8"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
      </div>
    </div>
  )
}

export default FooterTop
