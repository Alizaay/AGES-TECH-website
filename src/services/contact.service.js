import { api } from './api'
import { contact } from '@/config/contact'

/**
 * Sends contact form data to the AGES-TECH inbox.
 * Prefer FormSubmit (no backend) → optional custom API → clear error.
 */
export const contactService = {
  sendMessage: async (formData) => {
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      subject: formData.subject || 'Website inquiry',
      message: formData.message,
      _subject: `AGES-TECH Contact: ${formData.subject || 'Website inquiry'}`,
      _replyto: formData.email,
      _template: 'table',
    }

    // Primary: FormSubmit delivers to contact@ages-tech.com (or VITE_CONTACT_EMAIL)
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(contact.email)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )

      if (response.ok) {
        return response.json().catch(() => ({ success: true }))
      }
    } catch {
      // Fall through to optional API / error
    }

    // Optional custom backend when VITE_API_URL is configured
    if (import.meta.env.VITE_API_URL) {
      return api.post('/contact', formData)
    }

    throw new Error('Unable to send message. Please email us directly.')
  },
}

/** Backward-compatible export used by ContactForm */
export const sendContactEmail = (formData) => contactService.sendMessage(formData)

export default contactService
