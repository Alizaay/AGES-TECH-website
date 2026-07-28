import { api } from './api'

export const contactService = {
  sendMessage: (formData) => api.post('/contact', formData),
}

/** Backward-compatible export used by ContactForm */
export const sendContactEmail = (formData) => contactService.sendMessage(formData)

export default contactService