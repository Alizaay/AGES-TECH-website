import { contact } from '@/config/contact'

/** Official WhatsApp brand mark (inline SVG). */
const WhatsAppIcon = ({ className = '' }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.04 3C9.4 3 4 8.34 4 14.9c0 2.1.55 4.15 1.6 5.95L4 29l8.35-2.18c1.72.94 3.66 1.43 5.64 1.43h.01c6.64 0 12.04-5.34 12.04-11.9C30.04 8.34 24.68 3 16.04 3zm6.98 16.85c-.3.84-1.74 1.54-2.45 1.64-.63.09-1.43.13-2.31-.14-.53-.17-1.22-.4-2.1-.78-3.7-1.6-6.1-5.33-6.29-5.58-.18-.25-1.5-2-1.5-3.82s.95-2.71 1.29-3.08c.34-.37.74-.46 1-.46h.72c.23 0 .53-.08.83.64.3.74 1.03 2.54 1.12 2.72.09.18.15.4.03.64-.12.25-.18.4-.36.62-.18.21-.38.48-.54.65-.18.18-.37.38-.16.74.21.37.94 1.55 2.02 2.51 1.39 1.24 2.56 1.63 2.92 1.81.37.18.58.15.8-.09.21-.25.9-1.05 1.14-1.41.24-.37.48-.31.8-.18.33.12 2.08.98 2.44 1.16.36.18.6.27.69.42.09.15.09.87-.21 1.71z" />
  </svg>
)

/**
 * Fixed WhatsApp chat button — visible on every page.
 */
const WhatsAppFloat = () => {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with AGES-TECH on WhatsApp at ${contact.phone}`}
      title={`WhatsApp ${contact.phone}`}
      className="fixed bottom-5 right-4 z-[60] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-7 sm:right-6 sm:size-[60px]"
    >
      <WhatsAppIcon className="size-8 sm:size-9" />
      <span className="sr-only">Open WhatsApp chat</span>
    </a>
  )
}

export default WhatsAppFloat
