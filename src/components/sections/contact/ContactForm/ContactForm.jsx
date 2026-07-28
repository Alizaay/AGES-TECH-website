import { useState } from 'react'
import {
  Briefcase,
  Globe2,
  Lock,
  MessageCircleQuestion,
  Rocket,
  Send,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react'
import Container from '@/components/common/Container'
import { FadeIn } from '@/components/common/FadeIn'
import { contactFormSection } from '@/data/contact'
import { validateContactForm } from '@/utils/validation'
import { sendContactEmail } from '@/services/email'

const SUBJECT_ICONS = {
  message: MessageCircleQuestion,
  briefcase: Briefcase,
  users: Users,
  rocket: Rocket,
}

const HELP_ICONS = {
  zap: Zap,
  shield: ShieldCheck,
  users: Users,
  globe: Globe2,
}

const fieldClass =
  'min-h-11 w-full rounded-lg border border-[#D5DEE8] bg-white px-3.5 py-3 text-sm text-[#0A1B3D] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20 sm:px-4'

const Label = ({ htmlFor, children, required }) => (
  <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-[#0A1B3D] sm:mb-2">
    {children}
    {required && <span className="ml-0.5 text-red-500">*</span>}
  </label>
)

const ContactFormSection = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubject = (subjectId) => {
    setValues((prev) => ({ ...prev, subject: subjectId }))
    setErrors((prev) => ({ ...prev, subject: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validateContactForm(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('loading')
    try {
      const subjectLabel =
        contactFormSection.subjects.find((s) => s.id === values.subject)?.label || values.subject
      await sendContactEmail({
        name: `${values.firstName} ${values.lastName}`.trim(),
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        subject: subjectLabel,
        message: values.message,
      })
      setStatus('success')
      setValues({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
      })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact-form"
      className="scroll-mt-28 overflow-x-clip bg-[#F3F7FA] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-start gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-8">
          <FadeIn className="min-w-0">
            <div className="rounded-2xl border border-[#E8EEF5] bg-white p-4 shadow-[0_16px_44px_rgba(16,42,67,0.08)] xs:p-5 sm:p-7 md:p-8 lg:p-9">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F80ED] sm:text-xs">
                {contactFormSection.badge}
              </p>
              <h2 className="font-primary text-xl font-bold text-[#0A1B3D] sm:text-2xl md:text-3xl">
                {contactFormSection.title.lead}{' '}
                <span className="text-[#2F80ED]">{contactFormSection.title.accent}</span>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7A8A]">
                {contactFormSection.description}
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-7 sm:space-y-5" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  <div className="min-w-0">
                    <Label htmlFor="firstName" required>
                      First Name
                    </Label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className={fieldClass}
                      autoComplete="given-name"
                    />
                    {errors.firstName && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="min-w-0">
                    <Label htmlFor="lastName" required>
                      Last Name
                    </Label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className={fieldClass}
                      autoComplete="family-name"
                    />
                    {errors.lastName && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                  <div className="min-w-0">
                    <Label htmlFor="email" required>
                      Email
                    </Label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={fieldClass}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  <div className="min-w-0">
                    <Label htmlFor="phone">Phone Number</Label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={fieldClass}
                      autoComplete="tel"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold text-[#0A1B3D]">
                    Select Subject? <span className="text-red-500">*</span>
                  </p>
                  {/* 2×2 keeps readable cards in the split desktop column */}
                  <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-3">
                    {contactFormSection.subjects.map((subject) => {
                      const Icon = SUBJECT_ICONS[subject.icon] || MessageCircleQuestion
                      const active = values.subject === subject.id
                      return (
                        <button
                          key={subject.id}
                          type="button"
                          onClick={() => handleSubject(subject.id)}
                          className={`relative min-h-[5.5rem] rounded-xl border px-3 py-3.5 text-center transition sm:min-h-[6rem] sm:py-4 ${
                            active
                              ? 'border-[#2F80ED] bg-[#EAF3FF] shadow-[0_0_0_1px_rgba(47,128,237,0.25)]'
                              : 'border-[#D5DEE8] bg-white hover:border-[#2F80ED]/40'
                          }`}
                          aria-pressed={active}
                        >
                          <span
                            className={`absolute left-2.5 top-2.5 size-3.5 rounded-full border-2 ${
                              active
                                ? 'border-[#2F80ED] bg-[#2F80ED] shadow-[inset_0_0_0_2px_white]'
                                : 'border-[#C5D0DC] bg-white'
                            }`}
                            aria-hidden="true"
                          />
                          <span
                            className={`mx-auto mb-2 flex size-9 items-center justify-center ${
                              active ? 'text-[#2F80ED]' : 'text-[#6B7A8A]'
                            }`}
                          >
                            <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                          </span>
                          <span className="block text-xs font-semibold leading-snug text-[#0A1B3D] sm:text-[13px]">
                            {subject.label}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                  {errors.subject && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" required>
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className={`${fieldClass} min-h-[8rem] resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-4 border-t border-[#E8EEF5] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-start gap-2 text-xs text-[#6B7A8A] sm:items-center sm:text-sm">
                    <Lock size={14} className="mt-0.5 shrink-0 text-[#2F80ED] sm:mt-0" aria-hidden="true" />
                    <span className="min-w-0">{contactFormSection.privacyNote}</span>
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#2F80ED] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2569c7] disabled:opacity-60 sm:w-auto"
                  >
                    {status === 'loading' ? 'Sending…' : 'Send Message'}
                    <Send size={15} strokeWidth={2.25} aria-hidden="true" />
                  </button>
                </div>

                {status === 'success' && (
                  <p className="text-sm font-medium text-green-700">
                    Message sent successfully. We&apos;ll be in touch soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm font-medium text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="min-w-0">
            <aside className="relative overflow-hidden rounded-2xl border border-[#E8EEF5] bg-white p-5 shadow-[0_16px_44px_rgba(16,42,67,0.08)] sm:p-6 md:p-7 lg:p-8">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-[0.12]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 40%, #2F80ED 1.5px, transparent 1.6px), radial-gradient(circle at 70% 60%, #2F80ED 1.5px, transparent 1.6px), radial-gradient(circle at 45% 80%, #2F80ED 1px, transparent 1.1px)',
                  backgroundSize: '48px 48px, 56px 56px, 40px 40px',
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <h3 className="font-primary text-lg font-bold text-[#0A1B3D] sm:text-xl md:text-2xl">
                  {contactFormSection.help.title}
                </h3>
                <span className="mt-2 block h-0.5 w-12 bg-[#2F80ED]" aria-hidden="true" />
                <p className="mt-3 text-sm leading-relaxed text-[#6B7A8A]">
                  {contactFormSection.help.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-5 xs:grid-cols-2 xs:gap-4 sm:mt-7 lg:grid-cols-1 lg:gap-5">
                  {contactFormSection.help.items.map((item) => {
                    const Icon = HELP_ICONS[item.icon] || Zap
                    return (
                      <li key={item.id} className="flex min-w-0 gap-3 sm:gap-3.5">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-[#2F80ED] sm:size-11">
                          <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold text-[#0A1B3D]">{item.title}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-[#6B7A8A]">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </aside>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export default ContactFormSection
