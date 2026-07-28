import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  ChevronDown,
  FileText,
  Mail,
  ShieldCheck,
} from 'lucide-react'
import Container from '@/components/common/Container'
import { FadeIn } from '@/components/common/FadeIn'
import {
  privacyHero,
  privacySections,
  termsHero,
  termsSections,
} from '@/data/privacy'
import contactConfig from '@/config/contact'

const TABS = [
  { id: 'privacy', label: 'Privacy Policy', hash: 'privacy' },
  { id: 'terms', label: 'Terms of Use', hash: 'terms' },
]

const CompanyInfoCard = ({ card, className = '' }) => {
  if (!card) return null

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#CDE0F8] bg-gradient-to-br from-[#F4F9FF] via-white to-[#EEF5FF] p-4 shadow-[0_12px_32px_rgba(47,128,237,0.12)] ${className}`}
    >
      <span
        className="pointer-events-none absolute -right-6 -top-6 size-20 rounded-full bg-[#2F80ED]/10"
        aria-hidden="true"
      />
      <div className="relative flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#2F80ED] text-white shadow-[0_8px_18px_rgba(47,128,237,0.35)]">
          <Building2 size={16} strokeWidth={2} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="font-primary text-sm font-bold leading-snug text-[#0A1B3D]">
            {card.title}
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-[#5A6A7A] sm:text-[13px]">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  )
}

const TocNav = ({
  sections,
  activeSection,
  openCardId,
  onItemClick,
  compact = false,
}) => (
  <nav aria-label="Section navigation" className="space-y-1.5">
    {sections.map((section, index) => {
      const isActive = activeSection === section.id
      const isOpen = openCardId === section.id
      const label = compact
        ? section.title
        : section.title.replace(/^\d+\.\s*/, '')
      const number = String(index + 1).padStart(2, '0')

      return (
        <div
          key={section.id}
          className={`rounded-2xl transition-shadow ${
            isOpen ? 'bg-white shadow-[0_10px_28px_rgba(16,42,67,0.08)]' : ''
          }`}
        >
          <button
            type="button"
            onClick={() => onItemClick(section.id)}
            aria-expanded={isOpen}
            className={`group flex w-full items-center gap-3 text-left transition-all ${
              compact ? 'rounded-xl px-2.5 py-2.5' : 'rounded-2xl px-3.5 py-3'
            } ${
              isActive || isOpen
                ? 'bg-[#EAF3FF] font-semibold text-[#2F80ED] ring-1 ring-[#2F80ED]/20'
                : 'text-[#5A6A7A] hover:bg-white/80 hover:text-[#0A1B3D]'
            }`}
          >
            <span
              className={`flex size-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors ${
                isActive || isOpen
                  ? 'bg-[#2F80ED] text-white'
                  : 'bg-[#E8EEF5] text-[#6B7A8A] group-hover:bg-[#D6E6FB] group-hover:text-[#2F80ED]'
              }`}
            >
              {number}
            </span>
            <span
              className={`min-w-0 flex-1 leading-snug ${
                compact ? 'text-sm' : 'text-[13px] sm:text-sm'
              }`}
            >
              {label}
            </span>
            <ChevronDown
              size={15}
              strokeWidth={2.2}
              aria-hidden="true"
              className={`shrink-0 transition-transform duration-200 ${
                isOpen ? 'rotate-180 text-[#2F80ED]' : 'text-[#9AA8B8]'
              }`}
            />
          </button>

          {isOpen && section.companyCard && (
            <div className="px-2.5 pb-3 pt-1">
              <CompanyInfoCard card={section.companyCard} />
            </div>
          )}
        </div>
      )
    })}
  </nav>
)

const LegalSection = ({ section, showCard }) => (
  <article id={section.id} className="scroll-mt-32">
    <h2 className="font-primary text-lg font-bold text-[#0A1B3D] sm:text-xl">
      {section.title}
    </h2>

    {showCard && section.companyCard && (
      <CompanyInfoCard card={section.companyCard} className="mt-4 sm:mt-5" />
    )}

    <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#5A6A7A] sm:text-[15px]">
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
      {section.bullets?.length > 0 && (
        <ul className="space-y-2.5 pl-1">
          {section.bullets.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-3">
              <span
                className="mt-2 size-1.5 shrink-0 rounded-full bg-[#2F80ED]"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {section.closing && <p>{section.closing}</p>}
    </div>
  </article>
)

const PrivacyPolicy = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('privacy')
  const [activeSection, setActiveSection] = useState('')
  const [openCardId, setOpenCardId] = useState('')

  const isTerms = activeTab === 'terms'
  const hero = isTerms ? termsHero : privacyHero
  const sections = isTerms ? termsSections : privacySections

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash === 'terms' || hash.startsWith('terms-')) {
      setActiveTab('terms')
    } else if (hash === 'privacy' || (!hash && location.pathname.includes('privacy'))) {
      setActiveTab('privacy')
    } else if (termsSections.some((s) => s.id === hash)) {
      setActiveTab('terms')
    } else if (privacySections.some((s) => s.id === hash)) {
      setActiveTab('privacy')
    }
  }, [location.hash, location.pathname])

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (!hash || hash === 'privacy' || hash === 'terms') return

    const timer = window.setTimeout(() => {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpenCardId(hash)
    }, 80)

    return () => window.clearTimeout(timer)
  }, [location.hash, activeTab])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections, activeTab])

  const switchTab = (tabId) => {
    setActiveTab(tabId)
    setActiveSection('')
    setOpenCardId('')
    const hash = tabId === 'terms' ? 'terms' : 'privacy'
    window.history.replaceState(null, '', `#${hash}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTocClick = (sectionId) => {
    const nextOpen = openCardId === sectionId ? '' : sectionId
    setOpenCardId(nextOpen)
    setActiveSection(sectionId)
    window.history.replaceState(null, '', `#${sectionId}`)

    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-x-clip bg-[#F7F9FC] pb-8 pt-8 sm:pb-10 sm:pt-12 md:pb-12 md:pt-14">
        <div
          className="pointer-events-none absolute right-[6%] top-[18%] hidden h-36 w-36 opacity-40 sm:block"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(47,128,237,0.35) 1px, transparent 0)',
            backgroundSize: '14px 14px',
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-[#2F80ED]/10 blur-3xl sm:h-52 sm:w-52"
          aria-hidden="true"
        />

        <Container className="relative z-[1]">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF3FF] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#2F80ED] sm:text-[11px]">
                <ShieldCheck size={14} strokeWidth={2.2} aria-hidden="true" />
                {hero.badge}
              </span>
              <span className="text-xs font-medium text-[#6B7A8A] sm:text-sm">
                Last updated {hero.lastUpdated}
              </span>
            </div>

            <h1 className="mt-4 font-primary text-[1.75rem] font-bold leading-[1.2] tracking-tight text-[#0A1B3D] xs:text-[2rem] sm:mt-5 sm:text-4xl lg:text-[2.75rem]">
              {hero.title.lead}{' '}
              <span className="text-[#2F80ED]">{hero.title.accent}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5A6A7A] sm:mt-5 sm:text-[15px] md:text-base">
              {hero.description}
            </p>
          </FadeIn>

          <div
            className="mx-auto mt-8 flex w-full max-w-md justify-center rounded-2xl border border-[#E8EEF5] bg-white p-1.5 shadow-[0_10px_30px_rgba(16,42,67,0.06)] sm:mt-10"
            role="tablist"
            aria-label="Legal documents"
          >
            {TABS.map((tab) => {
              const active = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => switchTab(tab.id)}
                  className={`min-h-11 flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors sm:px-6 ${
                    active
                      ? 'bg-[#2F80ED] text-white shadow-sm'
                      : 'text-[#5A6A7A] hover:bg-[#F7F9FC] hover:text-[#0A1B3D]'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="relative bg-white pb-8 pt-8 sm:pb-12 sm:pt-10 lg:pt-12">
        <Container>
          <div className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-8 xl:gap-10">
            {/* Desktop TOC */}
            <aside className="hidden w-full shrink-0 lg:block lg:w-[320px] xl:w-[340px]">
              <div className="relative overflow-hidden rounded-3xl border border-[#E2EAF4] bg-gradient-to-b from-[#F7FAFF] to-[#EEF4FB] p-5 shadow-[0_18px_48px_rgba(16,42,67,0.08)] xl:p-6">
                <span
                  className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-[#2F80ED]/10"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute -bottom-8 -left-8 size-24 rounded-full bg-[#2F80ED]/8"
                  aria-hidden="true"
                />

                <div className="relative mb-5 flex items-center gap-3 border-b border-[#D6E6FB] pb-4">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#2F80ED] text-white shadow-[0_8px_20px_rgba(47,128,237,0.3)]">
                    <FileText size={18} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#2F80ED]">
                      On this page
                    </p>
                    <p className="mt-0.5 text-xs text-[#6B7A8A]">
                      Click a section for company details
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <TocNav
                    sections={sections}
                    activeSection={activeSection}
                    openCardId={openCardId}
                    onItemClick={handleTocClick}
                  />
                </div>
              </div>
            </aside>

            {/* Main document */}
            <div className="mx-auto min-w-0 w-full max-w-3xl lg:mx-0 lg:flex-1">
              {/* Mobile TOC */}
              <details className="mb-6 overflow-hidden rounded-3xl border border-[#E2EAF4] bg-gradient-to-b from-[#F7FAFF] to-[#EEF4FB] p-4 shadow-[0_12px_32px_rgba(16,42,67,0.06)] sm:mb-8 sm:p-5 lg:hidden" open>
                <summary className="flex cursor-pointer list-none items-center gap-3 font-primary text-sm font-bold text-[#0A1B3D]">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-[#2F80ED] text-white">
                    <FileText size={16} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span>
                    On this page
                    <span className="mt-0.5 block text-xs font-medium text-[#6B7A8A]">
                      Tap a section for company details
                    </span>
                  </span>
                </summary>
                <div className="mt-4">
                  <TocNav
                    sections={sections}
                    activeSection={activeSection}
                    openCardId={openCardId}
                    onItemClick={handleTocClick}
                    compact
                  />
                </div>
              </details>

              <FadeIn once amount={0.05}>
                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-[#E8EEF5] bg-[#F7F9FC] p-4 sm:mb-8 sm:p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#2F80ED]">
                    <FileText size={18} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-primary text-sm font-bold text-[#0A1B3D] sm:text-base">
                      {isTerms ? 'Terms of Use overview' : 'Privacy commitment'}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#5A6A7A]">
                      {isTerms
                        ? 'These terms outline acceptable use of our website and the limits of liability for online content.'
                        : 'AGES-TECH handles personal information with care. We collect only what we need and never sell your data.'}
                    </p>
                  </div>
                </div>

                <div className="space-y-8 sm:space-y-10">
                  {sections.map((section) => (
                    <LegalSection
                      key={section.id}
                      section={section}
                      showCard={openCardId === section.id}
                    />
                  ))}
                </div>

                {/* Inline help — closes gap above footer (hidden on xl where sticky column shows) */}
                <div className="mt-8 rounded-2xl border border-[#E8EEF5] bg-[#0A1B3D] p-5 text-white sm:mt-10 sm:p-6 xl:hidden">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#2F80ED]">
                          <Mail size={18} strokeWidth={1.9} aria-hidden="true" />
                        </span>
                        <p className="font-primary text-base font-bold sm:text-lg">
                          Need help?
                        </p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/75 sm:mt-3">
                        Questions about privacy or these terms? Email{' '}
                        <a
                          href={`mailto:${contactConfig.email}`}
                          className="font-semibold text-[#7EB6FF] hover:text-white"
                        >
                          {contactConfig.email}
                        </a>
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#2F80ED] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2569c7]"
                    >
                      Contact us
                      <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right sticky help column (xl+) */}
            <aside className="hidden shrink-0 xl:block xl:w-[280px]">
              <div className="sticky top-28 overflow-hidden rounded-3xl border border-[#E8EEF5] bg-[#0A1B3D] p-6 text-white shadow-[0_18px_48px_rgba(10,27,61,0.18)]">
                <span
                  className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-[#2F80ED]/20"
                  aria-hidden="true"
                />
                <span className="relative flex size-11 items-center justify-center rounded-xl bg-white/10 text-[#7EB6FF]">
                  <Mail size={20} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <p className="relative mt-4 font-primary text-lg font-bold">Need help?</p>
                <p className="relative mt-2 text-sm leading-relaxed text-white/75">
                  Questions about privacy, data requests, or these terms? Reach our team directly.
                </p>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="relative mt-4 block break-all text-sm font-semibold text-[#7EB6FF] hover:text-white"
                >
                  {contactConfig.email}
                </a>
                <a
                  href={`tel:${contactConfig.phone.replace(/[^\d+]/g, '')}`}
                  className="relative mt-1 block text-sm font-medium text-white/70 hover:text-white"
                >
                  {contactConfig.phone}
                </a>
                <Link
                  to="/contact"
                  className="relative mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#2F80ED] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2569c7]"
                >
                  Contact us
                  <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}

export default PrivacyPolicy
